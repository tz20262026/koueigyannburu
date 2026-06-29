import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";
import RelatedArticles from "@/components/RelatedArticles";
import GenreQA from "@/components/GenreQA";
import KyoteiClient from "./KyoteiClient";

export const metadata: Metadata = {
  title: "競艇（ボートレース）予想・データ分析",
  description:
    "競艇（ボートレース）の全24場コースデータ・選手成績を分析。1コース勝率・水面条件で的中率UP。",
  keywords: ["競艇予想", "ボートレース", "競艇攻略", "1コース", "水面条件", "競艇データ"],
};

const players = [
  { rank: 1, name: "峰竜太", class: "A1", pref: "佐賀", winRate: "35.2%", no: "3415" },
  { rank: 2, name: "白井英治", class: "A1", pref: "山口", winRate: "31.8%", no: "3492" },
  { rank: 3, name: "毒島誠", class: "A1", pref: "群馬", winRate: "30.4%", no: "4238" },
  { rank: 4, name: "辻栄蔵", class: "A1", pref: "広島", winRate: "29.7%", no: "3562" },
  { rank: 5, name: "平本真之", class: "A1", pref: "愛知", winRate: "28.5%", no: "4349" },
  { rank: 6, name: "桐生順平", class: "A1", pref: "埼玉", winRate: "27.9%", no: "4336" },
];

const tips = [
  { icon: "1️⃣", title: "1コース勝率を確認", desc: "競艇は1コース（イン）が最も有利。場ごとの1コース勝率をチェック" },
  { icon: "🌊", title: "水面・天候確認", desc: "海水面と淡水、追い風・向かい風でレース傾向が大きく変わる" },
  { icon: "⚙️", title: "モーター成績", desc: "モーターの2連率が高いと成績に直結。ボートの足色を要チェック" },
  { icon: "🏅", title: "選手クラス", desc: "A1・A2・B1・B2の4クラス。A1選手が出走するSGレースは格が違う" },
  { icon: "🎲", title: "展示タイム", desc: "本番直前の展示走行のタイムで当日の機力・選手の仕上がりを確認" },
  { icon: "📊", title: "コース別成績", desc: "選手によって得意・不得意コースが明確。過去のコース別成績は必須チェック" },
];

const relatedArticles = [
  {
    href: "/kyotei",
    title: "競艇（ボートレース）完全入門ガイド",
    desc: "競艇の基本ルール・舟券の種類・買い方まで初心者向けに徹底解説",
    tag: "初心者",
    tagColor: "bg-cyan-500/20 text-cyan-300",
    time: "10分で読める",
  },
  {
    href: "/kyotei",
    title: "1コース圧倒的有利の理由とは？",
    desc: "スタートの有利不利・コース取りの仕組みを図解で完全解説",
    tag: "基礎知識",
    tagColor: "bg-blue-500/20 text-blue-300",
    time: "6分で読める",
  },
  {
    href: "/kyotei",
    title: "SGレースの見どころ・攻略法",
    desc: "競艇最高峰のSGレースはなぜ荒れる？A1選手の出走傾向を分析",
    tag: "攻略",
    tagColor: "bg-red-500/20 text-red-300",
    time: "7分で読める",
  },
  {
    href: "/kyotei",
    title: "大村ボートが1コース勝率No.1の理由",
    desc: "全国66%を誇る大村の水面特性と予想への活かし方",
    tag: "データ",
    tagColor: "bg-amber-500/20 text-amber-300",
    time: "5分で読める",
  },
  {
    href: "/kyotei",
    title: "モーター成績の見方と選び方のコツ",
    desc: "2連率・3連率・スタートタイムから良モーターを見極める方法",
    tag: "データ分析",
    tagColor: "bg-purple-500/20 text-purple-300",
    time: "6分で読める",
  },
  {
    href: "/kyotei",
    title: "競艇のオッズと舟券の還元率",
    desc: "2連単・3連単・ボックス買いの期待値計算と購入戦略",
    tag: "戦略",
    tagColor: "bg-green-500/20 text-green-300",
    time: "5分で読める",
  },
];

const qa = [
  {
    q: "競艇の舟券はどこで買えますか？",
    a: "全国のボートレース場・場外発売場（ボートピア）で購入できます。スマホからはboatracer（旧TELEBOAT）アプリでオンライン購入が可能。楽天Edyやクレジットカードでの入金にも対応しています。",
  },
  {
    q: "なぜ1コース（インコース）が有利なのですか？",
    a: "競艇は左回りで最初のターンマークが重要です。1コースはスタートラインに最も近く、第1ターンを最短距離で回れるため圧倒的に有利です。全国平均で1コースの1着率は55〜60%以上あります。",
  },
  {
    q: "競艇のグレードはどう分かれていますか？",
    a: "SG（最高峰）→G1→G2→G3→一般の順に格付けされます。SGは年6開催で最高賞金1億円以上。G1は年20回程度、各場で「周年記念」などで開催されます。",
  },
  {
    q: "競艇のモーターとは何ですか？",
    a: "競艇では選手全員が同じ規格のボートに乗りますが、モーター（エンジン）は抽選で割り当てられます。良いモーターを当てた選手は成績が上がりやすく、逆に悪いモーターだと実力がある選手でも苦戦します。",
  },
  {
    q: "展示タイムとは何ですか？",
    a: "本番レース直前に行われる練習走行（展示走行）のタイムです。直線を走るタイム（展示タイム）とターンの評価（展示ターン）から、当日の選手の仕上がりとモーターの調子を確認できます。",
  },
];

export default function KyoteiPage() {
  return (
    <div>
      {/* ヒーロー */}
      <section className="relative bg-gradient-to-br from-cyan-950 to-[#08080f] py-16 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">⛵</span>
            <div>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-2">初心者OK</Badge>
              <h1 className="text-4xl font-black text-white">競艇（ボートレース）<br className="sm:hidden" />予想・データ分析</h1>
            </div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            全国24場・各場の水面特性と1コース勝率データで予想精度UP。
            選手クラスとモーター成績まで徹底分析。
          </p>
        </div>
      </section>

      {/* 予想ポイント */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">💡 競艇予想の6大ポイント</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {tips.map((t) => (
              <div key={t.title} className="p-4 rounded-xl border border-cyan-700/30 bg-gradient-to-br from-cyan-900/20 to-[#0f0f1a]">
                <div className="text-2xl mb-2">{t.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1">{t.title}</h3>
                <p className="text-gray-400 text-xs">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 全国場別データ（タブ切り替え） */}
      <KyoteiClient />

      {/* 選手ランキング */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">👑 A1ランク選手TOP6</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map((p) => (
              <Card key={p.name} className="bg-[#0f0f1a] border-white/10 hover:border-cyan-700/40 transition-all">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-3xl font-black ${p.rank <= 3 ? "text-[#d4af37]" : "text-gray-500"}`}>
                      #{p.rank}
                    </span>
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-0 text-xs">{p.class}</Badge>
                  </div>
                  <div className="text-xl font-black text-white mb-1">{p.name}</div>
                  <div className="text-gray-400 text-sm mb-3">{p.pref} · 登録{p.no}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">勝率</span>
                    <span className="text-[#d4af37] font-black text-lg">{p.winRate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">❓ 競艇 よくある質問</h2>
          <GenreQA items={qa} accentColor="text-cyan-400" />
        </div>
      </section>

      {/* 関連記事 */}
      <RelatedArticles articles={relatedArticles} title="📚 競艇攻略コンテンツ" />

      <AffiliateSection genre="競艇" />
    </div>
  );
}
