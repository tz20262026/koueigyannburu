import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AffiliateSection from "@/components/AffiliateSection";

export const metadata: Metadata = {
  title: "競馬予想・データ分析",
  description:
    "JRA・地方競馬の最新オッズ・出走データを徹底分析。勝率UPのための競馬予想情報を無料提供。",
  keywords: ["競馬予想", "競馬データ", "JRA", "地方競馬", "オッズ", "競馬攻略"],
};

const grades = [
  { grade: "G1", name: "安田記念", track: "東京", date: "6/29", prize: "1億円", color: "text-red-400 border-red-500/30 bg-red-500/10" },
  { grade: "G2", name: "プロキオンS", track: "小倉", date: "7/6", prize: "5000万円", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
  { grade: "G3", name: "七夕賞", track: "福島", date: "7/7", prize: "3000万円", color: "text-orange-400 border-orange-500/30 bg-orange-500/10" },
];

const odds = [
  { rank: 1, name: "エフフォーリア", jockey: "横山武史", odds: "2.1", win: "32.0%", bracket: "3" },
  { rank: 2, name: "パンサラッサ", jockey: "吉田豊", odds: "3.8", win: "21.5%", bracket: "6" },
  { rank: 3, name: "ヴェラアズール", jockey: "岩田望来", odds: "5.2", win: "15.8%", bracket: "1" },
  { rank: 4, name: "アリストテレス", jockey: "ルメール", odds: "7.1", win: "11.2%", bracket: "8" },
  { rank: 5, name: "テーオーロイヤル", jockey: "菱田裕二", odds: "9.6", win: "8.4%", bracket: "5" },
];

const trackData = [
  { track: "東京", feature: "直線659m・高速馬場", tendency: "先行・差し有利", tip: "上がり3F重視" },
  { track: "阪神", feature: "外回り・内回り2コース", tendency: "逃げ・先行有利", tip: "スタートダッシュ重視" },
  { track: "中山", feature: "急坂あり・小回り", tendency: "小回り得意馬有利", tip: "ゴール前の根性が鍵" },
  { track: "京都", feature: "長い直線・淀の坂", tendency: "差し・追い込み有利", tip: "上がり末脚重視" },
];

const analysisPoints = [
  { icon: "📊", title: "オッズ分析", desc: "単勝オッズと複勝オッズの乖離から過小評価馬を発見" },
  { icon: "🏃", title: "前走データ", desc: "前走1着〜3着馬の次走成績を追跡・傾向分析" },
  { icon: "🌧️", title: "馬場状態", desc: "良・稍重・重・不良の馬場適性をデータで可視化" },
  { icon: "🏇", title: "騎手成績", desc: "コース別・条件別の騎手勝率データを完全掲載" },
];

export default function KeibaPage() {
  return (
    <div>
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

      {/* 注目レース */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
            🏆 今週の注目グレードレース
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {grades.map((g) => (
              <Card key={g.name} className={`border bg-[#0f0f1a] ${g.color.split(" ")[1]} ${g.color.split(" ")[2]}`}>
                <CardContent className="p-5">
                  <Badge className={`${g.color} text-xs mb-3`}>{g.grade}</Badge>
                  <div className="text-xl font-black text-white mb-1">{g.name}</div>
                  <div className="text-gray-400 text-sm">{g.track} · {g.date}</div>
                  <div className="text-[#d4af37] font-bold mt-2">賞金 {g.prize}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* オッズ表 */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-2">📈 サンプルオッズ表</h2>
          <p className="text-gray-400 text-sm mb-6">東京10R 安田記念（サンプルデータ）</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 text-sm">
                  <th className="pb-3 text-left pl-4">人気</th>
                  <th className="pb-3 text-left">馬名</th>
                  <th className="pb-3 text-left">騎手</th>
                  <th className="pb-3 text-right">単勝</th>
                  <th className="pb-3 text-right pr-4">勝率</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {odds.map((horse) => (
                  <tr key={horse.name} className="hover:bg-white/3 transition-colors">
                    <td className="py-3 pl-4">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-black ${horse.rank <= 3 ? "bg-[#d4af37] text-black" : "bg-white/10 text-gray-300"}`}>
                        {horse.rank}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className="text-white font-bold">{horse.name}</span>
                      <span className="ml-2 text-xs text-gray-500">({horse.bracket}番)</span>
                    </td>
                    <td className="py-3 text-gray-400 text-sm">{horse.jockey}</td>
                    <td className="py-3 text-right text-[#d4af37] font-black">{horse.odds}倍</td>
                    <td className="py-3 pr-4 text-right text-gray-300">{horse.win}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 競馬場データ */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">🗺️ 競馬場別傾向データ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trackData.map((t) => (
              <Card key={t.track} className="bg-[#0f0f1a] border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg font-black">{t.track}競馬場</CardTitle>
                  <p className="text-gray-400 text-xs">{t.feature}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-0 text-xs">{t.tendency}</Badge>
                  </div>
                  <p className="text-gray-300 text-sm">💡 {t.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 分析ポイント */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">🔬 勝率UPの分析ポイント</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {analysisPoints.map((p) => (
              <div key={p.title} className="p-5 rounded-xl border border-white/10 bg-[#0a0a14]">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-white font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AffiliateSection genre="競馬" />
    </div>
  );
}
