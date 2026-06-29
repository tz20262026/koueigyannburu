import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import RelatedArticles from "@/components/RelatedArticles";
import GenreQA from "@/components/GenreQA";
import TakarakujiClient from "./TakarakujiClient";

export const metadata: Metadata = {
  title: "宝くじ・LOTO当選数字・確率データ",
  description:
    "ロト6・ロト7・ミニロト・ナンバーズ・スクラッチの当選確率・出現傾向データを徹底分析。",
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
    rule: "1〜37から7個選択",
    odds: "1/1,029万",
    price: "300円",
    buy: "月・木締切",
  },
  {
    name: "ロト6",
    icon: "6️⃣",
    prize: "最高6億円",
    color: "from-amber-900/50 to-amber-800/20",
    border: "border-amber-700/40",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    rule: "1〜43から6個選択",
    odds: "1/609万",
    price: "200円",
    buy: "月・木締切",
  },
  {
    name: "ミニロト",
    icon: "🎯",
    prize: "最高1,000万円",
    color: "from-green-900/50 to-green-800/20",
    border: "border-green-700/40",
    badge: "bg-green-500/20 text-green-300 border-green-500/30",
    rule: "1〜31から5個選択",
    odds: "1/16万",
    price: "200円",
    buy: "火曜締切",
  },
  {
    name: "ナンバーズ3",
    icon: "3️⃣",
    prize: "最高9万円",
    color: "from-blue-900/50 to-blue-800/20",
    border: "border-blue-700/40",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    rule: "3桁数字を選択",
    odds: "1/1,000",
    price: "200円",
    buy: "月〜金",
  },
  {
    name: "ナンバーズ4",
    icon: "4️⃣",
    prize: "最高90万円",
    color: "from-red-900/50 to-red-800/20",
    border: "border-red-700/40",
    badge: "bg-red-500/20 text-red-300 border-red-500/30",
    rule: "4桁数字を選択",
    odds: "1/1万",
    price: "200円",
    buy: "月〜金",
  },
  {
    name: "スクラッチ",
    icon: "🎰",
    prize: "最高1億円",
    color: "from-pink-900/50 to-pink-800/20",
    border: "border-pink-700/40",
    badge: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    rule: "こすって即確認",
    odds: "1/5〜1/10",
    price: "200〜1,000円",
    buy: "随時",
  },
];

const hotNumbers = {
  loto6: [
    { num: 7, count: 38 }, { num: 23, count: 36 }, { num: 31, count: 35 },
    { num: 14, count: 34 }, { num: 2, count: 34 }, { num: 43, count: 33 }, { num: 17, count: 32 },
  ],
  loto7: [
    { num: 5, count: 42 }, { num: 19, count: 40 }, { num: 33, count: 39 },
    { num: 11, count: 38 }, { num: 27, count: 37 }, { num: 6, count: 37 }, { num: 37, count: 36 },
  ],
};

const relatedArticles = [
  {
    href: "/takarakuji",
    title: "ロト6の当選確率と全等級の賞金を解説",
    desc: "1等から6等まで全等級の当選確率・賞金・当選本数をわかりやすく解説",
    tag: "基礎知識",
    tagColor: "bg-amber-500/20 text-amber-300",
    time: "5分で読める",
  },
  {
    href: "/takarakuji",
    title: "キャリーオーバーを狙え！発生条件と買い時",
    desc: "1等が出なかった時のキャリーオーバー積み上げ額の見方と購入戦略",
    tag: "戦略",
    tagColor: "bg-purple-500/20 text-purple-300",
    time: "6分で読める",
  },
  {
    href: "/takarakuji",
    title: "ロト7とロト6、どちらが得？期待値比較",
    desc: "価格・当選確率・賞金を比較。どちらを買うべきかを数字で判断",
    tag: "比較",
    tagColor: "bg-blue-500/20 text-blue-300",
    time: "4分で読める",
  },
  {
    href: "/takarakuji",
    title: "宝くじを買う最適なタイミングと場所",
    desc: "有名な「幸運を呼ぶ売り場」のデータと購入タイミングの考え方",
    tag: "豆知識",
    tagColor: "bg-green-500/20 text-green-300",
    time: "5分で読める",
  },
  {
    href: "/takarakuji",
    title: "ナンバーズ3の確率計算と買い方一覧",
    desc: "ストレート・ボックス・セット・ミニの4種類の買い方と期待値",
    tag: "ナンバーズ",
    tagColor: "bg-cyan-500/20 text-cyan-300",
    time: "6分で読める",
  },
  {
    href: "/takarakuji",
    title: "宝くじに当選したらすること・税金の扱い",
    desc: "億超え当選時の手続き・税金・資産管理のポイントを解説",
    tag: "当選後",
    tagColor: "bg-red-500/20 text-red-300",
    time: "7分で読める",
  },
];

const qa = [
  {
    q: "ロト6とロト7の違いは何ですか？",
    a: "ロト6は1〜43の43個の数字から6個選ぶ（価格200円）。ロト7は1〜37の37個から7個選ぶ（価格300円）。ロト7の方が最高賞金が高く（最大10億円）、1等の当選確率はロト6が約1/609万、ロト7が約1/1029万です。",
  },
  {
    q: "キャリーオーバーとは何ですか？",
    a: "1等当選者がいなかった場合に、1等の賞金が次回に繰り越されることをキャリーオーバーといいます。ロト6で最大6億円、ロト7で最大10億円まで積み上がります。キャリーオーバー時は購入者が増えるため当選確率は変わりませんが、当選額が跳ね上がります。",
  },
  {
    q: "クイックピックとは何ですか？自分で選ぶより当選しやすいですか？",
    a: "クイックピックはコンピュータがランダムに数字を選ぶ方式です。当選確率は自分で選ぶ場合と全く同じですが、人が選ぶと「好きな数字」「記念日」などに偏りが出やすいため、純粋なランダム選択ができるクイックピックも有効な方法です。",
  },
  {
    q: "ロト6は週に何回抽選がありますか？",
    a: "ロト6は毎週月曜日と木曜日の週2回抽選があります。月曜分は土曜〜月曜の締切り、木曜分は火曜〜木曜が締切りです。ロト7は毎週金曜日の週1回抽選です。",
  },
  {
    q: "宝くじとロト（数字選択式）の違いは？",
    a: "宝くじ（ジャンボ宝くじ等）は印刷された番号を購入するスタイルで自分で数字を選べません。一方ロト（6・7）・ミニロト・ナンバーズは自分で数字を選ぶ「数字選択式」です。ロトはキャリーオーバーにより賞金が変動しますが、宝くじは最初から賞金額が固定されています。",
  },
  {
    q: "宝くじの当選金に税金はかかりますか？",
    a: "宝くじの当選金は非課税です！どんなに高額でも所得税・住民税は一切かかりません。ただし、当選金を預金した際の利息には通常の税金がかかります。また、当選金を他人に渡す（贈与する）場合は贈与税の対象になります。",
  },
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
            ロト6・ロト7・ミニロト・ナンバーズ・スクラッチ全種類対応。
            過去の当選数字データと出現傾向を分析して夢の当選をつかもう。
          </p>
        </div>
      </section>

      {/* 最新当選数字（タブ切り替え） */}
      <TakarakujiClient />

      {/* くじ種類比較 */}
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
                      <span className="text-gray-200">{l.rule}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">1等確率</span>
                      <span className="text-[#d4af37] font-bold">{l.odds}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">価格</span>
                      <span className="text-gray-200">{l.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">抽選</span>
                      <span className="text-gray-200">{l.buy}</span>
                    </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                6️⃣ ロト6
                <Badge className="bg-amber-500/20 text-amber-300 border-0 text-xs">直近300回</Badge>
              </h3>
              <div className="flex flex-wrap gap-2">
                {hotNumbers.loto6.map((n, i) => (
                  <div key={n.num} className="text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${i === 0 ? "bg-[#d4af37] text-black" : "bg-amber-500/20 text-amber-300"}`}>
                      {n.num}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{n.count}回</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                7️⃣ ロト7
                <Badge className="bg-purple-500/20 text-purple-300 border-0 text-xs">直近300回</Badge>
              </h3>
              <div className="flex flex-wrap gap-2">
                {hotNumbers.loto7.map((n, i) => (
                  <div key={n.num} className="text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${i === 0 ? "bg-[#d4af37] text-black" : "bg-purple-500/20 text-purple-300"}`}>
                      {n.num}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{n.count}回</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-6">※サンプルデータです。各回は独立試行のため必勝法はありません</p>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">❓ 宝くじ・LOTO よくある質問</h2>
          <GenreQA items={qa} accentColor="text-purple-400" />
        </div>
      </section>

      {/* 関連記事 */}
      <RelatedArticles articles={relatedArticles} title="📚 宝くじ・LOTO攻略コンテンツ" />

      {/* 購入CTA */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-purple-900/20">
            <div className="text-5xl mb-4">🌟</div>
            <h2 className="text-2xl font-black text-white mb-3">今すぐ購入して億万長者を目指す！</h2>
            <p className="text-gray-400 mb-6">宝くじは全国の売り場・インターネットで購入可能</p>
            <a
              href="https://www.takarakuji-official.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-gradient text-black font-black text-lg hover:opacity-90 transition-opacity"
            >
              🎯 宝くじ公式サイト
            </a>
            <p className="text-gray-600 text-xs mt-4">※購入は18歳以上の方を対象としています</p>
          </div>
        </div>
      </section>
    </div>
  );
}
