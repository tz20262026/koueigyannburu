import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import RelatedArticles from "@/components/RelatedArticles";
import GenreQA from "@/components/GenreQA";
import TakarakujiClient from "./TakarakujiClient";
import LotoNumberPicker from "@/components/LotoNumberPicker";
import { WebPageJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import StrategyGuide from "@/components/StrategyGuide";

export const metadata: Metadata = {
  title: "宝くじ・LOTO当選数字・確率データ",
  description:
    "ロト6・ロト7・ミニロト・ナンバーズ・スクラッチの当選確率・出現傾向データを徹底分析。よく出る数字・キャリーオーバー情報も掲載。",
  keywords: ["宝くじ", "ロト6当選番号", "ロト7当選番号", "ミニロト", "ナンバーズ", "当選確率", "当選数字", "LOTO", "ホット数字", "宝くじ購入代行"],
  alternates: { canonical: "https://koueigyannburu.vercel.app/takarakuji" },
  openGraph: {
    title: "宝くじ・LOTO当選数字・確率データ | WINLAB",
    description: "ロト6・ロト7・ミニロト・ナンバーズ・スクラッチの当選確率・出現傾向データを徹底分析。",
    url: "https://koueigyannburu.vercel.app/takarakuji",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "宝くじ・LOTO当選数字・確率データ | WINLAB",
    description: "ロト6・ロト7・ミニロト・ナンバーズ・スクラッチの当選確率・出現傾向データを徹底分析。",
  },
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
    href: "/articles/takarakuji-loto6-hot",
    title: "ロト6ホット数字分析：よく出る数字と買い方",
    desc: "直近300回の当選データから出現頻度を分析。ホット数字・コールド数字の実態を解説",
    tag: "データ分析",
    tagColor: "bg-amber-500/20 text-amber-300",
    time: "6分で読める",
  },
  {
    href: "/articles/takarakuji-compare",
    title: "宝くじ・ロト6・ロト7・ミニロトを徹底比較",
    desc: "当選確率・賞金・購入金額・抽選頻度を比較して自分に合った選び方を解説",
    tag: "比較",
    tagColor: "bg-purple-500/20 text-purple-300",
    time: "5分で読める",
  },
  {
    href: "/takarakuji",
    title: "キャリーオーバーを狙え！発生条件と買い時",
    desc: "1等が出なかった時のキャリーオーバー積み上げ額の見方と購入戦略",
    tag: "戦略",
    tagColor: "bg-blue-500/20 text-blue-300",
    time: "6分で読める",
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
      <BreadcrumbJsonLd
        items={[
          { name: "トップ", url: "https://koueigyannburu.vercel.app" },
          { name: "宝くじ・LOTO", url: "https://koueigyannburu.vercel.app/takarakuji" },
        ]}
      />
      <WebPageJsonLd
        name="宝くじ・LOTO当選数字・確率データ | WINLAB"
        description="ロト6・ロト7・ミニロト・ナンバーズの当選確率・出現傾向データを徹底分析。"
        url="https://koueigyannburu.vercel.app/takarakuji"
      />
      <FaqJsonLd items={qa} />
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
                      <span className="text-gray-300">選び方</span>
                      <span className="text-gray-200">{l.rule}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">1等確率</span>
                      <span className="text-[#d4af37] font-bold">{l.odds}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">価格</span>
                      <span className="text-gray-200">{l.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">抽選</span>
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
                    <div className="text-gray-300 text-xs mt-1">{n.count}回</div>
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
                    <div className="text-gray-300 text-xs mt-1">{n.count}回</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-xs mt-6">※サンプルデータです。各回は独立試行のため必勝法はありません</p>
        </div>
      </section>

      {/* 攻略コラム */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <StrategyGuide
            title="📖 宝くじ・LOTO 攻略コラム"
            accentColor="text-purple-400"
            articles={[
              {
                title: "ロト6・ロト7・ミニロト の選び方：目的別おすすめ",
                tag: "比較",
                tagColor: "bg-purple-500/20 text-purple-300",
                summary: "3つのロトはそれぞれ特性が異なる。夢を追うならロト7、当選頻度を上げたいならミニロト。あなたのスタイルに合った選び方を解説。",
                body: `◆ ロト7（300円）
- 1等：最高10億円（キャリーオーバー時）
- 当選確率：1/1,029万
- 向いている人：とにかく大きな夢を追いたい

◆ ロト6（200円）
- 1等：最高6億円（キャリーオーバー時）
- 当選確率：1/609万
- 向いている人：ロト7よりやや現実的に億を狙いたい

◆ ミニロト（200円）
- 1等：最高1,000万円
- 当選確率：1/16.9万
- 向いている人：小さくてもいいから当選の喜びを体験したい

◆ コスパ比較
ミニロトの1等確率はロト6の36倍当たりやすい。
その代わり最高賞金が1,000万円と低い。

夢を追うなら「ロト7をキャリーオーバー時だけ買う」戦略が最も理にかなっています。
通常時は1〜2口で十分。キャリーオーバーが5億を超えたタイミングで多めに購入するのがコツです。`,
              },
              {
                title: "「キャリーオーバー」を狙うのが最も賢い宝くじ戦略",
                tag: "戦略",
                tagColor: "bg-amber-500/20 text-amber-300",
                summary: "キャリーオーバー時はスペックが上がるだけでなく、期待値そのものが上昇する。この買い時を逃さない方法。",
                body: `通常のロト6の1等賞金は2〜3億円程度。
キャリーオーバーが続くと最大6億円まで膨れ上がります。

◆ 期待値の変化
通常時：200円 × 1/609万 × 2億円 ≈ 期待値 32.8円（回収率16.4%）

キャリーオーバー6億時：200円 × 1/609万 × 6億円 ≈ 期待値 98.5円（回収率49.2%）

キャリーオーバー時は期待値が3倍に跳ね上がります！

◆ キャリーオーバーの確認方法
① 宝くじ公式サイト（takarakuji-official.jp）でリアルタイム情報確認
② ロト6: 月曜・木曜の抽選後に確認
③ キャリーオーバー3億円超えたら購入検討
④ 5億円超なら口数を増やす価値あり

◆ 注意点
人気が集中するため当選者も増えます。
1等が出ても分割当選になりやすいため、
「自分だけが当選する」という確率自体は変わりません。`,
              },
              {
                title: "数字の選び方：ランダム vs 誕生日 vs ホット数字",
                tag: "数字選択",
                tagColor: "bg-blue-500/20 text-blue-300",
                summary: "自分で数字を選ぶのとクイックピックはどちらが有利？ホット数字は本当に出やすい？科学的な観点から解説。",
                body: `宝くじは「独立試行」のため、過去の結果が次回に影響することは数学的にありません。

◆ 選び方別のメリット・デメリット

【クイックピック（ランダム選択）】
メリット：完全ランダムで数字が偏らない
デメリット：思い入れがない、当選時の感動が小さい

【自分で選ぶ（誕生日・記念日）】
メリット：当選時の感動が大きい
デメリット：1〜31に偏りがちで、32以上の数字が出ると負け

【ホット数字（よく出る数字）を選ぶ】
メリット：心理的安心感がある
デメリット：実際には確率に影響なし

◆ 現実的なアドバイス
数学的には「どれを選んでも当選確率は同じ」です。
だから楽しさで選び方を決めるのが一番。

ただし、1〜31の数字のみを選ぶのは避けた方が良い。
他の購入者と数字が被りやすく、分割当選になりやすいから。
32以上の数字を必ず1〜2個混ぜることで分割リスクが下がります。`,
              },
              {
                title: "宝くじに当選したら最初にすること（高額当選の手続き）",
                tag: "当選後",
                tagColor: "bg-green-500/20 text-green-300",
                summary: "億超え当選は夢だが、当選後の手続きを知らないと損をする可能性も。当選直後から必要な行動を順番に解説。",
                body: `高額当選（50万円超）はみずほ銀行の本支店でのみ換金できます。

◆ 当選後すぐにすること
① 当選くじを大切に保管（コピーも取る）
② 家族・親しい人への報告は慎重に（詐欺・トラブルのリスクあり）
③ みずほ銀行の宝くじ担当窓口に予約を入れる

◆ 税金について
宝くじの当選金は「非課税」です。
所得税も住民税もかかりません。
ただし以下のケースは注意：
- 当選金を他人にあげると → 贈与税の対象
- 当選金で運用した際の利益 → 通常の税金対象

◆ 受け取りまでの流れ
① 本人確認書類（運転免許証など）を持参
② みずほ銀行本支店の宝くじ専門窓口へ
③ 口座への振り込みまで1〜3営業日

◆ 知っておくべき注意点
1億円を突然受け取ると生活が激変して精神的に不安定になるケースも。
ファイナンシャルプランナーや税理士への相談を強くおすすめします。`,
              },
            ]}
          />
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

      {/* 数字選択シミュレーター */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6 text-center">🎯 数字選択シミュレーター</h2>
          <LotoNumberPicker />
        </div>
      </section>

      {/* 宝くじ購入代行 アフィリエイト PR */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 rounded-full px-3 py-1 text-xs font-semibold mb-3">
              PR・広告
            </span>
            <h2 className="text-2xl font-black text-white">
              行列なしで縁起の良い売り場から購入代行
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              高額当選者輩出の有名売り場から自宅で注文できる購入代行サービス
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-yellow-700/40 bg-gradient-to-br from-yellow-950/50 to-[#0f0f1a] p-5 hover:border-yellow-600/60 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🥇</span>
                <div>
                  <div className="text-white font-black text-lg">ドリームチャンス</div>
                  <div className="text-yellow-400 text-xs font-semibold">西銀座チャンスセンター購入代行</div>
                </div>
              </div>
              <ul className="text-gray-300 text-sm space-y-1 mb-4">
                <li>✅ 35年連続1等当選の伝説の売り場</li>
                <li>✅ 行列不要・24時間ネットで注文</li>
                <li>✅ 損害補償付き書留で安全配送</li>
                <li>✅ 大安吉日に購入代行</li>
              </ul>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4B67CJ+3NKTGY+4GLE+5YJRM"
                rel="nofollow"
                target="_blank"
                className="block w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-500 text-white font-black hover:opacity-90 transition-opacity"
              >
                宝くじ購入代行はドリームチャンス →
              </a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={1} height={1} src="https://www13.a8.net/0.gif?a8mat=4B67CJ+3NKTGY+4GLE+5YJRM" alt="" style={{ display: 'none' }} />
            </div>
            <div className="rounded-xl border border-purple-700/40 bg-gradient-to-br from-purple-950/50 to-[#0f0f1a] p-5 hover:border-purple-600/60 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🥈</span>
                <div>
                  <div className="text-white font-black text-lg">ドリームウェイ</div>
                  <div className="text-purple-400 text-xs font-semibold">日本一の売り場から購入代行</div>
                </div>
              </div>
              <ul className="text-gray-300 text-sm space-y-1 mb-4">
                <li>✅ 高額当選者多数輩出の有名売り場</li>
                <li>✅ 確定率66.6%・安心実績</li>
                <li>✅ プレゼント需要にも対応</li>
                <li>✅ 購入指定日から1週間以内に届く</li>
              </ul>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4B67CJ+2W6VN6+3A98+68EPE"
                rel="nofollow"
                target="_blank"
                className="block w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-violet-500 text-white font-black hover:opacity-90 transition-opacity"
              >
                ドリームウェイで購入代行 →
              </a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={1} height={1} src="https://www13.a8.net/0.gif?a8mat=4B67CJ+2W6VN6+3A98+68EPE" alt="" style={{ display: 'none' }} />
            </div>
          </div>
          <p className="text-center text-gray-300 text-xs mt-4">
            ※当サイトはアフィリエイト広告を利用しています
          </p>
        </div>
      </section>

      {/* 購入CTA */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-purple-900/20">
            <div className="text-5xl mb-4">🌟</div>
            <h2 className="text-2xl font-black text-white mb-3">今すぐ購入して億万長者を目指す！</h2>
            <p className="text-gray-300 mb-6">宝くじは全国の売り場・インターネットで購入可能</p>
            <a
              href="https://www.takarakuji-official.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-gradient text-black font-black text-lg hover:opacity-90 transition-opacity"
            >
              🎯 宝くじ公式サイト
            </a>
            <p className="text-gray-300 text-xs mt-4">※購入は18歳以上の方を対象としています</p>
          </div>
        </div>
      </section>
    </div>
  );
}
