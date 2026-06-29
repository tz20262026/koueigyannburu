import Link from "next/link";

const links = [
  { href: "/keiba", label: "競馬" },
  { href: "/keirin", label: "競輪" },
  { href: "/kyotei", label: "競艇" },
  { href: "/autorace", label: "オートレース" },
  { href: "/takarakuji", label: "宝くじ・LOTO" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a14] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-black tracking-tighter">
              <span className="text-[#d4af37]">WIN</span>
              <span className="text-white">LAB</span>
            </span>
            <p className="mt-3 text-gray-400 text-sm">
              公営ギャンブル予想・データ分析の決定版。<br />
              競馬・競輪・競艇・オートレース・宝くじを徹底解説。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">ジャンル</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#d4af37] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">注意事項</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              当サイトの情報は参考目的です。ギャンブルは節度を守って楽しみましょう。
              18歳未満の方は公営ギャンブルに参加できません。
              依存症が心配な方は相談窓口（ギャンブル等依存症相談コールセンター）へ。
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2026 WINLAB. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
