/**
 * 毎週月曜朝にGitHub Actionsから実行され、races.jsonを最新情報に更新するスクリプト
 * - JRA今週の重賞レース
 * - 競輪グレードレース
 * - ボートレースSGスケジュール
 * - オートレース開催場
 */

import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, "../src/data/races.json");

const COLOR = {
  keiba: "bg-emerald-500/20 text-emerald-300",
  kyotei: "bg-amber-500/20 text-amber-300",
  keirin: "bg-blue-500/20 text-blue-300",
  autorace: "bg-orange-500/20 text-orange-300",
};

async function fetchText(url) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; WINLAB-bot/1.0)" },
      signal: AbortSignal.timeout(10000),
    });
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

function formatDate(d) {
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

function getWeekLabel() {
  const d = new Date();
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}週`;
}

// --- 競馬：JRA今週の重賞 ---
async function fetchKeibaRace() {
  const html = await fetchText("https://www.jra.go.jp/keiba/thisweek/");
  if (!html) return fallbackKeiba();

  // 重賞レース名を抽出（例：「函館スプリントS（G3）」）
  const gradeMatch = html.match(/([^\s<>「」【】]{4,20})[（(](G[1-3I][XII]*|GⅠ|GⅡ|GⅢ)[）)]/);
  if (!gradeMatch) return fallbackKeiba();

  const name = gradeMatch[1].replace(/[【】「」]/g, "").trim();
  const grade = gradeMatch[2];

  // 日程を探す（MM月DD日 or 数字パターン）
  const dateMatch = html.match(/(\d+)月(\d+)日[（(]([日土月火水木金])[）)]/);
  const timeStr = dateMatch ? `${dateMatch[1]}/${dateMatch[2]}(${dateMatch[3]})` : "今週末";

  return {
    genre: "競馬",
    name: `${name}`,
    time: timeStr,
    status: grade,
    statusColor: COLOR.keiba,
    href: "/keiba",
  };
}

function fallbackKeiba() {
  const now = new Date();
  const sat = new Date(now);
  sat.setDate(now.getDate() + ((6 - now.getDay() + 7) % 7 || 7));
  return {
    genre: "競馬",
    name: "函館・福島競馬 開催中",
    time: `今週末(${formatDate(sat)}〜)`,
    status: "開催中",
    statusColor: COLOR.keiba,
    href: "/keiba",
  };
}

// --- 競輪：グレードレース ---
async function fetchKeirinRace() {
  const html = await fetchText("https://keirin.jp/pc/graderaceschedule");
  if (!html) return fallbackKeirin();

  // 現在開催中または直近のG1〜G3を探す
  const match = html.match(/([^\s<>「」\d]{2,15})[（(]G([123])[）)][^<]*?(\d+)月(\d+)日/);
  if (!match) return fallbackKeirin();

  const raceName = match[1].trim();
  const grade = `G${match[2]}`;
  const month = match[3];
  const day = match[4];

  return {
    genre: "競輪",
    name: `${raceName}`,
    time: `${month}/${day}〜`,
    status: grade,
    statusColor: COLOR.keirin,
    href: "/keirin",
  };
}

function fallbackKeirin() {
  return {
    genre: "競輪",
    name: "グレードレース開催中",
    time: "今週",
    status: "G3",
    statusColor: COLOR.keirin,
    href: "/keirin",
  };
}

// --- 競艇：SG・G1スケジュール ---
async function fetchKyoteiRace() {
  const html = await fetchText("https://www.boatrace.jp/owpc/pc/race/gradesch?hcd=01");
  if (!html) return fallbackKyotei();

  // SGまたはPG1の直近開催を探す
  const sgMatch = html.match(/([^\s<>「」【】]{2,12})[（(]([^）)]{1,20})[）)][\s\S]{0,200}?(\d+)月(\d+)日/);
  if (!sgMatch) return fallbackKyotei();

  const venue = sgMatch[1].trim();
  const month = sgMatch[3];
  const day = sgMatch[4];

  return {
    genre: "競艇",
    name: `次回SG ${venue}`,
    time: `${month}/${day}〜`,
    status: "SG",
    statusColor: COLOR.kyotei,
    href: "/kyotei",
  };
}

function fallbackKyotei() {
  return {
    genre: "競艇",
    name: "次回SG オーシャンカップ（びわこ）",
    time: "7/28〜8/2",
    status: "SG予告",
    statusColor: COLOR.kyotei,
    href: "/kyotei",
  };
}

// --- オートレース：開催場 ---
async function fetchAutoraceRace() {
  const html = await fetchText("https://autorace.jp/calendar/first/");
  if (!html) return fallbackAutorace();

  // 今日の開催場を探す（ナイター優先）
  const nightMatch = html.match(/([川口|伊勢崎|浜松|山陽|飯塚][^\s<>]{0,4})[\s\S]{0,50}?ナイター/);
  if (nightMatch) {
    return {
      genre: "オートレース",
      name: `${nightMatch[1].replace(/<[^>]*>/g, "").trim()}ナイター開催中`,
      time: "夜開催",
      status: "ナイター",
      statusColor: COLOR.autorace,
      href: "/autorace",
    };
  }

  const dayMatch = html.match(/(川口|伊勢崎|浜松|山陽|飯塚)/);
  if (dayMatch) {
    return {
      genre: "オートレース",
      name: `${dayMatch[1]}オートレース開催中`,
      time: "本日開催",
      status: "開催中",
      statusColor: COLOR.autorace,
      href: "/autorace",
    };
  }

  return fallbackAutorace();
}

function fallbackAutorace() {
  return {
    genre: "オートレース",
    name: "川口・飯塚オートレース開催中",
    time: "本日開催",
    status: "開催中",
    statusColor: COLOR.autorace,
    href: "/autorace",
  };
}

// --- メイン処理 ---
async function main() {
  console.log("レース情報を取得中...");
  const [keiba, keirin, kyotei, autorace] = await Promise.all([
    fetchKeibaRace(),
    fetchKeirinRace(),
    fetchKyoteiRace(),
    fetchAutoraceRace(),
  ]);

  const now = new Date();
  const updated = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  const data = {
    updated,
    weekLabel: getWeekLabel(),
    races: [keiba, keirin, kyotei, autorace],
  };

  writeFileSync(OUTPUT, JSON.stringify(data, null, 2) + "\n", "utf-8");
  console.log(`✅ races.json を更新しました (${updated})`);
  console.log(JSON.stringify(data.races, null, 2));
}

main().catch((e) => {
  console.error("エラー:", e);
  process.exit(1);
});
