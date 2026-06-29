import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "宝くじ・LOTO当選数字・確率データ",
  description:
    "ロト6・ロト7・ミニロト・ナンバーズ・スクラッチの当選確率・出現傾向データを徹底分析。億万長者への近道を探る。",
  keywords: ["宝くじ", "ロト6", "ロト7", "ミニロト", "ナンバーズ", "当選確率", "当選数字", "LOTO"],
};

const lotteries = [
  {
    name: "ロト7",
    icon: "7️⃣",
    prize: "最高10億円",
    color: "from-purple-900/50 to-purple-800/20",
    border: "border-purple-700/40",
    badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    rule: "1〜37の数字から7個を選択",
    odds: "1/1,029万5,472",
    price: "300円/枚",
    buy: "毎週月・木締切",
    highlight: "キャリーオーバー時は最高10億円！",
  },
  {
    name: "ロト6",
    icon: "6️⃣",
    prize: "最高6億円",
    color: "from-amber-900/50 to-amber-800/20",
    border: "border-amber-700/40",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    rule: "1〜43の数字から6個を選択",
    odds: "1/609万6,454",
    price: "200円/枚",
    buy: "毎週月・木締切",
    highlight: "最も人気の高い宝くじ",
  },
  {
    name: "ミニロト",
    icon: "🎯",
    prize: "最高1,000万円",
    color: "from-green-900/50 to-green-800/20",
    border: "border-green-700/40",
    badge: "bg-green-500/20 text-green-300 border-green-500/30",
    rule: "1〜31の数字から5個を選択",
    odds: "1/16万9,911",
    price: "200円/枚",
    buy: "毎週火締切",
    highlight: "当選確率が比較的高め",
  },
  {
    name: "ナンバーズ3",
    icon: "3️⃣",
    prize: "最高9万円",
    color: "from-blue-900/50 to-blue-800/20",
    border: "border-blue-700/40",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    rule: "000〜999の3桁数字を選択",
    odds: "1/1,000（ストレート）",
    price: "200円/枚",
    buy: "毎週月〜金",
    highlight: "毎日開催で当選発表！",
  },
  {
    name: "ナンバーズ4",
    icon: "4️⃣",
    prize: "最高90万円",
    color: "from-red-900/50 to-red-800/20",
    border: "border-red-700/40",
    badge: "bg-red-500/20 text-red-300 border-red-500/30",
    rule: "0000〜9999の4桁数字を選択",
    odds: "1/1万（ストレート）",
    price: "200円/枚",
    buy: "毎週月〜金",
    highlight: "4桁数字でより高額に",
  },
  {
    name: "スクラッチ",
    icon: "🎰",
    prize: "最高1億円",
    color: "from-pink-900/50 to-pink-800/20",
    border: "border-pink-700/40",
    badge: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    rule: "くじをこすって当選確認",
    odds: "1/5〜1/10（商品による）",
    price: "200〜1,000円/枚",
    buy: "随時発売",
    highlight: "即時結果がわかるお手軽くじ",
  },
];

const hotNumbers = {
  loto6: [
    { num: 7, count: 38, label: "最多出現" },
    { num: 23, count: 36, label: "" },
    { num: 31, count: 35, label: "" },
    { num: 14, count: 34, label: "" },
    { num: 2, count: 34, label: "" },
    { num: 43, count: 33, label: "" },
    { num: 17, count: 32, label: "" },
  ],
  loto7: [
    { num: 5, count: 42, label: "最多出現" },
    { num: 19, count: 40, label: "" },
    { num: 33, count: 39, label: "" },
    { num: 11, count: 38, label: "" },
    { num: 27, count: 37, label: "" },
    { num: 6, count: 37, label: "" },
    { num: 37, count: 36, label: "" },
  ],
};

const tips = [
  { icon: "🔢", title: "出現頻度を参考に", desc: "過去データで出現回数が多い「ホット数字」をチェック。ただし毎回独立試行なので必勝法はない" },
  { icon: "🤝", title: "連続数字を避ける", desc: "1,2,3など連続する数字は当選実績が少ない傾向。散らして選ぶのが定石" },
  { icon: "➗", title: "奇偶バランス", desc: "奇数3:偶数3 or 奇数4:偶数2のバランスが出やすいというデータがある" },
  { icon: "🎲", title: "クイックピックも有効", desc: "コンピュータランダム選択が実は当選実績が高い。こだわりすぎず運を天に任せるのも戦略" },
];

const recent = [
  { name: "ロト7 第631回", date: "2026/06/27", numbers: [3, 12, 19, 24, 30, 35, 37], bonus: [8, 21] },
  { name: "ロト6 第1924回", date: "2026/06/26", numbers: [5, 11, 17, 23, 31, 42], bonus: [9] },
  { name: "ミニロト 第1231回", date: "2026/06/24", numbers: [4, 9, 16, 22, 28], bonus: [7] },
];

export default function TakarakujiPage() {
  return (
    <div>
      {/* ヒーロー */}
      <section className="relative bg-gradient-to-br from-purple-950 to-[#08080f] py-16 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🎯</span>
            <div>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-2">億万長者</Badge>
              <h1 className="text-4xl font-black text-white">宝くじ・LOTO<br className="sm:hidden" />当選数字・確率データ</h1>
            </div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            ロト6・ロト7・ミニロト・ナンバーズ・スクラッチ。
            過去の当選数字データと出現傾向を分析して夢の当選をつかもう。
          </p>
        </div>
      </section>

      {/* 最新当選数字 */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
            🎉 最新当選数字
            <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-xs">サンプル</Badge>
          </h2>
          <div className="space-y-4">
            {recent.map((r) => (
              <div key={r.name} className="p-5 rounded-xl border border-purple-700/30 bg-gradient-to-br from-purple-900/20 to-[#0f0f1a]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                  <h3 className="text-white font-bold">{r.name}</h3>
                  <span className="text-gray-500 text-sm">{r.date}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {r.numbers.map((n) => (
                    <span key={n} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#d4af37] text-black font-black text-sm">
                      {n}
                    </span>
                  ))}
                  {r.bonus && (
                    <>
                      <span className="flex items-center text-gray-500 text-xs px-1">ボーナス</span>
                      {r.bonus.map((n) => (
                        <span key={n} className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-400 text-purple-300 font-black text-sm">
                          {n}
                        </span>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* くじ種類一覧 */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">🎰 宝くじ・LOTO 全種類比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lotteries.map((l) => (
              <Card key={l.name} className={`bg-gradient-to-br ${l.color} border ${l.border} card-glow`}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl">{l.icon}</span>
                    <Badge className={`${l.badge} border text-xs`}>{l.prize}</Badge>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{l.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">選び方</span>
                      <span className="text-gray-200 text-right max-w-[60%]">{l.rule}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">1等確率</span>
                      <span className="text-[#d4af37] font-bold text-xs">{l.odds}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">価格</span>
                      <span className="text-gray-200">{l.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">販売</span>
                      <span className="text-gray-200 text-right max-w-[60%]">{l.buy}</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 rounded-lg bg-white/5 text-xs text-gray-300">
                    💡 {l.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ホット数字 */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">🔥 よく出る数字（過去データ分析）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                6️⃣ ロト6 ホット数字
                <Badge className="bg-amber-500/20 text-amber-300 border-0 text-xs">直近300回</Badge>
              </h3>
              <div className="flex flex-wrap gap-2">
                {hotNumbers.loto6.map((n) => (
                  <div key={n.num} className="text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${n.label ? "bg-[#d4af37] text-black" : "bg-amber-500/20 text-amber-300"}`}>
                      {n.num}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{n.count}回</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                7️⃣ ロト7 ホット数字
                <Badge className="bg-purple-500/20 text-purple-300 border-0 text-xs">直近300回</Badge>
              </h3>
              <div className="flex flex-wrap gap-2">
                {hotNumbers.loto7.map((n) => (
                  <div key={n.num} className="text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${n.label ? "bg-[#d4af37] text-black" : "bg-purple-500/20 text-purple-300"}`}>
                      {n.num}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{n.count}回</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-4">※サンプルデータです。各回は独立試行のため必勝法はありません</p>
        </div>
      </section>

      {/* 攻略ヒント */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">💎 当選確率を少しでも上げるヒント</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tips.map((t) => (
              <div key={t.title} className="p-5 rounded-xl border border-purple-700/30 bg-[#0a0a14]">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="text-white font-bold mb-2">{t.title}</h3>
                <p className="text-gray-400 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 購入CTA */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-purple-900/20">
            <div className="text-5xl mb-4">🌟</div>
            <h2 className="text-2xl font-black text-white mb-3">今すぐ購入して億万長者を目指す！</h2>
            <p className="text-gray-400 mb-6">
              宝くじは全国の宝くじ売り場・インターネットで購入可能
            </p>
            <a
              href="https://www.takarakuji-official.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-gradient text-black font-black text-lg hover:opacity-90 transition-opacity"
            >
              🎯 宝くじ公式サイト
            </a>
            <p className="text-gray-600 text-xs mt-4">
              ※購入は18歳以上の方を対象としています
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
