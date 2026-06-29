interface AffiliateSectionProps {
  genre?: string;
}

const services = [
  {
    rank: 1,
    name: "電話占いComet",
    desc: "全占い師と初回5分無料！",
    feature: "当たる占い師が多数在籍・恋愛・仕事・運勢",
    color: "from-yellow-600 to-amber-500",
    badge: "🏆 EPC高",
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+FPLTGY+48YY+5YJRM",
    imgTrack: "https://www18.a8.net/0.gif?a8mat=4B5RS6+FPLTGY+48YY+5YJRM",
  },
  {
    rank: 2,
    name: "電話占いAlice",
    desc: "5分無料で有名鑑定師に相談",
    feature: "人気鑑定師多数・恋愛・復縁・仕事運",
    color: "from-blue-600 to-cyan-500",
    badge: "🆓 初回無料",
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+FTRUPE+48YY+NTJWY",
    imgTrack: "https://www10.a8.net/0.gif?a8mat=4B5RS6+FTRUPE+48YY+NTJWY",
  },
  {
    rank: 3,
    name: "電話占いATLANTIS",
    desc: "初指名無料・的中率の高さで話題",
    feature: "至福の鑑定・占い師も憧れる高品質サロン",
    color: "from-emerald-600 to-green-500",
    badge: "⭐ 人気急上昇",
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+FUYPWY+48YY+BWVTE",
    imgTrack: "https://www10.a8.net/0.gif?a8mat=4B5RS6+FUYPWY+48YY+BWVTE",
  },
];

export default function AffiliateSection({ genre: _genre }: AffiliateSectionProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 rounded-full px-3 py-1 text-xs font-semibold mb-3">
            PR・広告
          </span>
          <h2 className="text-2xl font-bold text-white">
            おすすめサービス
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            運気・相性・勝負運を占いでチェック！
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.rank}
              className="relative rounded-xl border border-white/10 bg-[#0f0f1a] overflow-hidden hover:border-[#d4af37]/40 transition-all group"
            >
              <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${service.color}`} />
              <div className="flex items-center gap-4 p-4 pl-6">
                <div className={`text-3xl font-black bg-gradient-to-br ${service.color} bg-clip-text text-transparent w-8 shrink-0`}>
                  {service.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-white">{service.name}</span>
                    <span className="bg-white/10 text-gray-300 rounded-full px-2 py-0.5 text-xs">
                      {service.badge}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm font-medium">{service.desc}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{service.feature}</p>
                </div>
                <a
                  href={service.href}
                  rel="nofollow"
                  target="_blank"
                  className={`shrink-0 px-4 py-2 rounded-lg bg-gradient-to-r ${service.color} text-white font-bold text-sm hover:opacity-90 transition-opacity`}
                >
                  詳細を見る
                </a>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={1} height={1} src={service.imgTrack} alt="" style={{ display: 'none' }} />
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-4">
          ※当サイトはアフィリエイト広告を利用しています
        </p>
      </div>
    </section>
  );
}
