import { Badge } from "@/components/ui/badge";

interface AffiliateSectionProps {
  genre?: string;
}

const services = [
  {
    rank: 1,
    name: "競馬予想サービスA",
    genre: "競馬",
    feature: "的中率No.1",
    color: "from-yellow-600 to-amber-500",
    badge: "🏆 圧倒的人気",
  },
  {
    rank: 2,
    name: "競艇予想サービスB",
    genre: "競艇",
    feature: "無料予想あり",
    color: "from-blue-600 to-cyan-500",
    badge: "🆓 無料お試し",
  },
  {
    rank: 3,
    name: "競輪予想サービスC",
    genre: "競輪",
    feature: "初心者向け解説",
    color: "from-emerald-600 to-green-500",
    badge: "👶 初心者向け",
  },
];

export default function AffiliateSection({ genre }: AffiliateSectionProps) {
  const filtered = genre
    ? services.filter((s) => s.genre === genre || !genre)
    : services;

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Badge className="bg-[#d4af37]/20 text-[#d4af37] border-[#d4af37]/30 mb-3">
            PR・広告
          </Badge>
          <h2 className="text-2xl font-bold text-white">
            おすすめ予想サービス
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            プロが監修した高精度予想サービスを厳選紹介
          </p>
        </div>

        <div className="space-y-4">
          {filtered.map((service) => (
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
                    <Badge className="bg-white/10 text-gray-300 border-0 text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm">{service.feature}</p>
                </div>
                <a
                  href="#"
                  className={`shrink-0 px-4 py-2 rounded-lg bg-gradient-to-r ${service.color} text-white font-bold text-sm hover:opacity-90 transition-opacity`}
                >
                  詳細を見る
                </a>
              </div>
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
