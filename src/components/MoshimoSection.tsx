/**
 * もしもアフィリエイトの広告セクション。
 * 公営競技を「観る・楽しむ」まわりの周辺サービスのみを扱う。
 * 射幸心を煽る表現（勝てる・稼げる・必勝など）は使わない。
 */

/** 広告カード1件分のデータ */
type MoshimoOffer = {
  /** サービス名 */
  name: string;
  /** 読者の状況に寄せた見出し */
  headline: string;
  /** 補足説明 */
  desc: string;
  /** もしもアフィリエイトの計測リンク */
  href: string;
  /** 絵文字アイコン */
  emoji: string;
};

const OFFERS: MoshimoOffer[] = [
  {
    name: "ユニークムービー",
    headline: "動画で楽しむ",
    desc: "パチンコ・スロットの実践動画が見放題の月額サービス。自分でお金を賭けずに、演出や立ち回りを眺めたい方に。",
    href: "https://af.moshimo.com/af/c/click?a_id=5694109&p_id=5020&pc_id=13489&pl_id=65955",
    emoji: "🎬",
  },
  {
    name: "dinomoWiFi",
    headline: "外出先で中継を見る",
    desc: "eSIM・SIM・WiFiレンタルのサービス。競馬・競艇のライブ中継はデータ通信量が大きいため、通信環境を整えたい方に。",
    href: "https://af.moshimo.com/af/c/click?a_id=5694107&p_id=5538&pc_id=15178&pl_id=89516",
    emoji: "📶",
  },
  {
    name: "楽天市場",
    headline: "予想本・関連グッズを探す",
    desc: "競馬・競輪・競艇のデータブックや入門書、観戦グッズなどを検索できます。",
    href: "https://af.moshimo.com/af/c/click?a_id=5693961&p_id=54&pc_id=54&pl_id=616",
    emoji: "🛒",
  },
];

type Props = {
  /** 表示件数の上限（省略時は全件） */
  limit?: number;
};

export default function MoshimoSection({ limit }: Props) {
  const offers = typeof limit === "number" ? OFFERS.slice(0, limit) : OFFERS;

  return (
    <section className="w-full px-4 py-10" aria-labelledby="moshimo-heading">
      <div className="mx-auto max-w-5xl">
        <div className="mb-2 flex flex-wrap items-center justify-center gap-2">
          <h2
            id="moshimo-heading"
            className="text-lg font-bold text-white [text-wrap:balance] sm:text-xl"
          >
            観戦まわりの関連サービス
          </h2>
          <span className="rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-2 py-0.5 text-[11px] font-bold text-[#e8c860]">
            PR・広告
          </span>
        </div>
        <p className="mb-6 text-center text-xs leading-relaxed text-gray-300">
          本セクションは広告（アフィリエイトリンク）を含みます。公営競技は余裕資金の範囲で、
          生活に支障のない金額を上限に楽しんでください。20歳未満の方は購入できません。
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {offers.map((o) => (
            <a
              key={o.href}
              href={o.href}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="group flex flex-col rounded-xl border border-gray-700 bg-[#1a1a2e] p-5 transition-colors hover:border-[#d4af37]/60"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl leading-none" aria-hidden="true">
                  {o.emoji}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#e8c860] [text-wrap:balance]">
                    {o.headline}
                  </p>
                  <p className="mt-0.5 text-base font-bold text-white [text-wrap:balance]">
                    {o.name}
                  </p>
                </div>
              </div>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-gray-200">{o.desc}</p>
              <span className="mt-4 inline-block text-xs font-bold text-[#e8c860] transition-transform group-hover:translate-x-1">
                詳しく見る →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
