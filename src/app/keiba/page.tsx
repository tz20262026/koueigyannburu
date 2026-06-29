import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import AffiliateSection from "@/components/AffiliateSection";
import RelatedArticles from "@/components/RelatedArticles";
import GenreQA from "@/components/GenreQA";
import KeibaClient from "./KeibaClient";
import { WebPageJsonLd, FaqJsonLd } from "@/components/JsonLd";
import BetCalculator from "@/components/BetCalculator";
import StrategyGuide from "@/components/StrategyGuide";
import OddsTable from "@/components/OddsTable";

export const metadata: Metadata = {
  title: "競馬予想・データ分析",
  description:
    "JRA・地方競馬の最新オッズ・出走データを徹底分析。勝率UPのための競馬予想情報を無料提供。単勝・複勝・3連複の馬券戦略も解説。",
  keywords: ["競馬予想", "競馬データ", "JRA", "地方競馬", "オッズ", "競馬攻略", "馬券", "競馬無料予想"],
  alternates: { canonical: "https://koueigyannburu.vercel.app/keiba" },
  openGraph: {
    title: "競馬予想・データ分析 | WINLAB",
    description: "JRA・地方競馬のオッズ・出走データを徹底分析。勝率UPの競馬予想情報を無料提供。",
    url: "https://koueigyannburu.vercel.app/keiba",
    type: "website",
  },
};

const relatedArticles = [
  {
    href: "/articles/keiba-beginner-terms",
    title: "競馬初心者が最初に覚えるべき5つの基本用語",
    desc: "単勝・複勝・馬連・馬単・3連複の違いを図解でわかりやすく解説",
    tag: "初心者",
    tagColor: "bg-emerald-500/20 text-emerald-300",
    time: "5分で読める",
  },
  {
    href: "/articles/keiba-odds-guide",
    title: "オッズの読み方と期待値計算の基本",
    desc: "オッズから回収率を計算する方法。長期的に勝つための数字の見方",
    tag: "データ分析",
    tagColor: "bg-amber-500/20 text-amber-300",
    time: "8分で読める",
  },
  {
    href: "/articles/keiba-kishu-ranking",
    title: "騎手成績ランキングから軸馬を選ぶ方法",
    desc: "勝利数・勝率・回収率の3指標で騎手を評価する実践的手法",
    tag: "攻略",
    tagColor: "bg-red-500/20 text-red-300",
    time: "6分で読める",
  },
  {
    href: "/keiba",
    title: "JRAと地方競馬の違いを完全比較",
    desc: "中央競馬と地方競馬の開催日・売上・賞金・馬のレベルを徹底比較",
    tag: "基礎知識",
    tagColor: "bg-blue-500/20 text-blue-300",
    time: "7分で読める",
  },
  {
    href: "/keiba",
    title: "馬場状態別の傾向と狙い目まとめ",
    desc: "良馬場・稍重・重・不良それぞれで有利になる馬のタイプを解説",
    tag: "データ分析",
    tagColor: "bg-amber-500/20 text-amber-300",
    time: "5分で読める",
  },
  {
    href: "/keiba",
    title: "G1レース歴代最高配当ランキングTOP10",
    desc: "あの大波乱はなぜ起きた？歴史に残る高配当レースを振り返る",
    tag: "データ",
    tagColor: "bg-purple-500/20 text-purple-300",
    time: "4分で読める",
  },
];

const qa = [
  {
    q: "競馬の馬券はどこで買えますか？",
    a: "JRAの競馬場・場外馬券売り場（ウインズ）のほか、スマホアプリ「JRA-PAT」「SPAT4」でオンライン購入が可能です。地方競馬はオッズパーク・楽天競馬などのサービスを利用できます。",
  },
  {
    q: "単勝と複勝の違いを教えてください",
    a: "単勝は1着になる馬を当てる馬券（1着のみ的中）、複勝は3着以内に入る馬を当てる馬券です。複勝は的中しやすい分、配当が低くなります。初心者には複勝から始めることをおすすめします。",
  },
  {
    q: "1番人気の馬はどのくらいの確率で勝ちますか？",
    a: "JRAの過去データでは1番人気の勝率は約33%です。3頭に1頭は1番人気が勝つ計算ですが、残りの2/3は2番人気以下が勝ちます。人気上位3頭の複勝率は約65%です。",
  },
  {
    q: "G1レースとG2・G3の違いは何ですか？",
    a: "グレードは競走の格付けです。G1が最高峰で賞金・格も最上位（安田記念・日本ダービーなど）。G2はその次、G3は格付け最下位のグレードレースです。G1ほど強い馬が集まります。",
  },
  {
    q: "競馬の還元率（払戻率）はどのくらいですか？",
    a: "JRAの場合、単勝・複勝は80%、馬連・馬単・ワイドは77.5%、3連複・3連単は72.5%が還元されます。残りは国庫・地方公共団体・JRA運営費に充てられます。",
  },
  {
    q: "地方競馬のナイターレースはいつ開催されますか？",
    a: "大井競馬（TCK）は毎週水・木・金・土曜日の夜間開催が基本。川崎・浦和・船橋も夜間開催あり。南関東四場（大井・川崎・浦和・船橋）は特に充実しています。",
  },
];

export default function KeibaPage() {
  return (
    <div>
      <WebPageJsonLd
        name="競馬予想・データ分析 | WINLAB"
        description="JRA・地方競馬のオッズ・出走データを徹底分析。勝率UPの競馬予想情報を無料提供。"
        url="https://koueigyannburu.vercel.app/keiba"
      />
      <FaqJsonLd items={qa} />
      {/* ヒーロー */}
      <section className="relative bg-gradient-to-br from-emerald-950 to-[#08080f] py-16 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🐎</span>
            <div>
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-2">最人気ジャンル</Badge>
              <h1 className="text-4xl font-black text-white">競馬予想・データ分析</h1>
            </div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            JRA（日本中央競馬会）・地方競馬のオッズ・出走データを徹底分析。
            プロも使うデータ指標で勝率を飛躍的にアップさせよう。
          </p>
        </div>
      </section>

      {/* クライアントコンポーネント（タブ・テーブル展開） */}
      <KeibaClient />

      {/* 攻略コラム */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <StrategyGuide
            title="📖 競馬攻略コラム"
            accentColor="text-emerald-400"
            articles={[
              {
                title: "回収率100%超えを実現する「期待値投資」の考え方",
                tag: "上級者",
                tagColor: "bg-red-500/20 text-red-300",
                summary: "競馬で長期的にプラス収支を維持するには「期待値」の概念が不可欠。単純に当てるのではなく、オッズが本来の確率より高い馬を狙い続ける戦略を解説。",
                body: `期待値とは「このオッズで買い続けると平均でいくら返ってくるか」を示す指標です。

例：実際の勝率が20%の馬が単勝オッズ8.0倍の場合
期待値 = 20% × 800円 = 160円（100円投資に対して）→ 回収率160%

これが「期待値プラス」の馬券です。

逆に1番人気がオッズ1.8倍の場合、一般的に勝率は約33%なので
期待値 = 33% × 180円 = 59円 → 回収率59%

人気馬は「安心感」と引き換えに期待値が低くなっています。

長期収支をプラスにするためには：
① 過去のオッズと実際の結果をデータ化
② 期待値がプラスになる条件を見つける
③ その条件が揃ったレースだけ購入

この「絞り込み購入」が最も効果的な戦略です。`,
              },
              {
                title: "馬場状態「重・不良」の日は買い方を変えよ",
                tag: "データ",
                tagColor: "bg-blue-500/20 text-blue-300",
                summary: "雨の日の馬場（重・不良）は得意な馬と苦手な馬が明確に分かれる。コースの特性と血統から狙い馬を絞る方法。",
                body: `馬場が重・不良になると、通常とは全く異なるレース展開が生まれます。

◆ 重馬場が得意な血統・特徴
・ヘイルトゥリーズン系（底力型）
・前走で重馬場で好走している馬
・パワー型の体型（ズブいタイプ）
・外国産馬（欧州系）

◆ 重馬場が苦手な特徴
・スピード特化の軽い体型
・距離短縮でスピード勝負の馬
・芝の軽いコース（函館・小倉）専門馬

【実践的な使い方】
当日の発表馬場状態が「重・不良」のとき：
① 前走の馬場状態をチェック（重・不良で好走→加点）
② 父・母父の血統から重馬場適性を確認
③ 人気馬が重馬場苦手な血統なら、穴馬に期待値が出る

特に中京・中山の内回りは重馬場で大荒れしやすいコースです。`,
              },
              {
                title: "地方競馬「夜の大井競馬」で高配当を狙う方法",
                tag: "地方競馬",
                tagColor: "bg-amber-500/20 text-amber-300",
                summary: "TCK（大井競馬場）のナイターレースは予算が少なくても楽しめる。JRAとは異なる攻略法と注目すべきデータポイントを解説。",
                body: `大井競馬（東京シティ競馬 TCK）は南関東四場の中で最大規模。
毎週水・木・金・土の夜間開催が基本です。

◆ 大井競馬の特徴
・1,200m・1,400m・1,600m・2,000mのコースがある
・ダートコースのため、砂の深さがレース結果に影響
・JRAからの転入馬が多く、格付けが把握しやすい

◆ 攻略のポイント
① 「格」を見る
JRAで500万下（現1勝クラス）→大井で上位クラスに昇級という馬が狙い目。
地方競馬の格は基本的に以下の順：
南関A1 > A2 > B1 > B2 > B3 > C1〜C3

② 「騎手」を重視
地方競馬は特に騎手の技量差が大きい。
大井トップ騎手（矢野貴之・真島大輔など）が乗り替わる馬は注目

③ 「前走ペース」のチェック
前走逃げ・先行で好走→逃げ残りが効きやすい大井の内枠は加点材料

JRA場外でも購入できるため、週中に楽しめる競馬として人気上昇中です。`,
              },
              {
                title: "3連単の「フォーメーション」で的中率と配当を両立",
                tag: "馬券",
                tagColor: "bg-purple-500/20 text-purple-300",
                summary: "3連単は最高配当を狙える一方、点数管理が重要。フォーメーション買いで無駄な点数を省きながら高配当を射止める方法。",
                body: `3連単は最大120通りの組み合わせがありますが、全部買うと的中しても赤字になります。

◆ 基本フォーメーションパターン

【2-3-3 フォーメーション（9点）】
1着：2頭固定（確度の高い◎と○）
2着：3頭（◎○▲）
3着：3頭（◎○▲）

これで9点×100円 = 900円の投資

このパターンが向いているのは：
・本命2頭が鉄板に近いと思われるレース
・人気馬の1着が固い中距離戦

【1-2-6 フォーメーション（12点）】
1着：1頭固定（鉄板の◎のみ）
2着：2頭（○▲）
3着：6頭（残り全て）

これで12点×100円 = 1,200円の投資

上位人気が混戦で3着が荒れそうなレースに適しています。

◆ フォーメーション成功のコツ
・1着固定できる馬がいるかどうかがキー
・3着は広く取る（荒れても取れる設計）
・1点あたりの投資額は均等にする`,
              },
              {
                title: "競馬AI予想・データ分析ツールの賢い使い方",
                tag: "ツール",
                tagColor: "bg-cyan-500/20 text-cyan-300",
                summary: "近年増加している競馬AI・データ分析ツール。使うべき指標と使ってはいけない指標を整理。ツールに頼りすぎない予想の姿勢。",
                body: `競馬予想のデータ分析ツールは正しく使えば強力な武器になります。

◆ 有効な指標
① スピード指数（スピード系）
過去の走破タイムを標準化した指数。コースや馬場状態を補正できる。
ザコしかいないレースで1頭だけ指数が飛びぬけている → 信頼度高い

② 上がり3ハロンタイム
ゴール前600mのタイム。末脚の強さを示す。
「上がり33秒台」は府中・阪神など直線が長いコースで特に有利

③ ローテーション（前走からの間隔）
中2週以内：疲労蓄積リスク
中4〜8週：最もベストの間隔
長期休養明け：1〜2走目は状態確認期間

◆ 注意が必要な指標
・「重賞実績」だけで買わない（距離・コース適性が必須）
・「厩舎コメント」は営業的な言葉が多い
・ネット上の「本命情報」は99%無意味

データはあくまで「仮説を立てるための材料」です。
最終的な判断は自分でするのが原則です。`,
              },
            ]}
          />
        </div>
      </section>

      {/* Q&A */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">❓ 競馬 よくある質問</h2>
          <GenreQA items={qa} accentColor="text-emerald-400" />
        </div>
      </section>

      {/* 関連記事 */}
      <RelatedArticles articles={relatedArticles} title="📚 競馬攻略コンテンツ" />

      {/* オッズ表 */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-4">📊 オッズ表シミュレーター</h2>
          <p className="text-gray-500 text-sm mb-6">※サンプルデータ。実際のオッズはJRAでご確認ください</p>
          <OddsTable />
        </div>
      </section>

      {/* 馬券計算機 */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <BetCalculator />
        </div>
      </section>

      <AffiliateSection genre="競馬" />
    </div>
  );
}
