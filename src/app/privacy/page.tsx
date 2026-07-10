import type { Metadata } from "next";
import Link from "next/link";
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "プライバシーポリシー・免責事項",
  description:
    "WINLABのプライバシーポリシー・免責事項・広告掲載ポリシーについて。アクセス解析ツールの利用、アフィリエイト広告の掲載、コンテンツの取り扱いに関する方針を掲載しています。",
  alternates: { canonical: "https://koueigyannburu.vercel.app/privacy" },
  openGraph: {
    title: "プライバシーポリシー・免責事項 | WINLAB",
    description:
      "WINLABのプライバシーポリシー・免責事項・広告掲載ポリシーについて。",
    url: "https://koueigyannburu.vercel.app/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "プライバシーポリシー・免責事項 | WINLAB",
    description:
      "WINLABのプライバシーポリシー・免責事項・広告掲載ポリシーについて。",
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "1. 個人情報の取り扱いについて",
    body: "当サイト「WINLAB」（以下、当サイト）では、お問い合わせの際にお名前・メールアドレス等の個人情報をいただく場合があります。取得した個人情報は、お問い合わせへの回答や必要な情報のご連絡のみに利用し、それ以外の目的では利用しません。法令に基づく場合を除き、ご本人の同意なく第三者に開示することはありません。",
  },
  {
    heading: "2. アクセス解析ツールについて",
    body: "当サイトでは、サイトの改善のためにアクセス解析ツール（Vercel Analytics 等）を利用しています。これらのツールはトラフィックデータの収集のためにCookieを使用する場合があります。トラフィックデータは匿名で収集されており、個人を特定するものではありません。",
  },
  {
    heading: "3. 広告の掲載について",
    body: "当サイトは、第三者配信の広告サービスおよびアフィリエイトプログラム（A8.net 等）を利用しています。当サイトのリンクを経由して商品・サービスの申込みが発生した場合、提携企業から当サイトに報酬が支払われることがあります。広告であるコンテンツには「PR・広告」の表記を行っています。掲載する広告・サービスの品質や内容を保証するものではありませんので、お申込みの際は各サービスの公式サイトで最新の情報をご確認ください。",
  },
  {
    heading: "4. コンテンツ・情報の正確性について（免責事項）",
    body: "当サイトに掲載するデータ・予想・攻略情報は、正確な情報の提供に努めていますが、その正確性・完全性・最新性を保証するものではありません。当サイトの情報を利用して行った投票・購入等の結果について、当サイトは一切の責任を負いません。オッズ・開催情報・出走情報等の最新情報は、必ずJRA・各競技の公式サイトでご確認ください。",
  },
  {
    heading: "5. 公営競技との関わりについて",
    body: "当サイトは情報提供を目的としたサイトであり、勝舟投票券・勝馬投票券等の販売・仲介は一切行っていません。公営競技への投票は20歳未満（競馬は18歳未満）の方は行えません（学生・生徒を除く年齢条件は各競技の規定に従います）。ギャンブルは節度を守り、生活に支障のない範囲でお楽しみください。依存症が心配な方は「ギャンブル等依存症相談コールセンター」等の相談窓口をご利用ください。",
  },
  {
    heading: "6. 著作権について",
    body: "当サイトに掲載されている文章・画像等のコンテンツの著作権は当サイトに帰属します。無断転載・複製はご遠慮ください。引用される場合は、引用元として当サイトへのリンクを設置してください。",
  },
  {
    heading: "7. プライバシーポリシーの変更",
    body: "当サイトは、法令の変更やサービス内容の変更に応じて、本ポリシーを予告なく改定することがあります。変更後のプライバシーポリシーは、当ページに掲載した時点から効力を生じるものとします。",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <WebPageJsonLd
        name="プライバシーポリシー・免責事項 | WINLAB"
        description="WINLABのプライバシーポリシー・免責事項・広告掲載ポリシーについて。"
        url="https://koueigyannburu.vercel.app/privacy"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "トップ", url: "https://koueigyannburu.vercel.app" },
          { name: "プライバシーポリシー", url: "https://koueigyannburu.vercel.app/privacy" },
        ]}
      />

      {/* パンくず */}
      <div className="px-4 py-3 border-b border-white/10 bg-[#0a0a14]">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">トップ</Link>
          <span>›</span>
          <span className="text-white">プライバシーポリシー・免責事項</span>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-3">プライバシーポリシー・免責事項</h1>
          <p className="text-gray-300 text-sm mb-10">最終更新日：2026年7月10日</p>

          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.heading} className="border-l-2 border-[#d4af37]/40 pl-5">
                <h2 className="text-lg font-black text-[#d4af37] mb-2">{s.heading}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5 transition-colors"
            >
              ← トップページへ戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
