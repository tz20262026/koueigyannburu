"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const jraOdds = [
  { rank: "1", name: "エフフォーリア", jockey: "横山武史", odds: "2.1", win: "32.0%", bracket: "3" },
  { rank: "2", name: "パンサラッサ", jockey: "吉田豊", odds: "3.8", win: "21.5%", bracket: "6" },
  { rank: "3", name: "ヴェラアズール", jockey: "岩田望来", odds: "5.2", win: "15.8%", bracket: "1" },
  { rank: "4", name: "アリストテレス", jockey: "ルメール", odds: "7.1", win: "11.2%", bracket: "8" },
  { rank: "5", name: "テーオーロイヤル", jockey: "菱田裕二", odds: "9.6", win: "8.4%", bracket: "5" },
  { rank: "6", name: "ジャスティンパレス", jockey: "池添謙一", odds: "12.3", win: "6.2%", bracket: "7" },
  { rank: "7", name: "ドウデュース", jockey: "武豊", odds: "15.8", win: "4.8%", bracket: "2" },
  { rank: "8", name: "ユーバーレーベン", jockey: "M.デムーロ", odds: "22.1", win: "3.2%", bracket: "4" },
  { rank: "9", name: "ノースブリッジ", jockey: "内田博幸", odds: "35.0", win: "2.1%", bracket: "9" },
  { rank: "10", name: "ロングラン", jockey: "幸英明", odds: "48.7", win: "1.5%", bracket: "10" },
];

const narOdds = [
  { rank: "1", name: "ノットゥルノ", jockey: "松山弘平", odds: "1.8", win: "38.2%", bracket: "2" },
  { rank: "2", name: "ギガキング", jockey: "川田将雅", odds: "3.2", win: "24.1%", bracket: "5" },
  { rank: "3", name: "マンダリンヒーロー", jockey: "岩田康誠", odds: "5.5", win: "14.9%", bracket: "1" },
  { rank: "4", name: "サンライズウルス", jockey: "戸崎圭太", odds: "8.2", win: "9.8%", bracket: "7" },
  { rank: "5", name: "ウラカワミユキ", jockey: "三浦皇成", odds: "11.4", win: "7.2%", bracket: "3" },
  { rank: "6", name: "フジノウェーブ", jockey: "的場文男", odds: "18.6", win: "4.8%", bracket: "6" },
  { rank: "7", name: "マグナーテン", jockey: "今野忠成", odds: "28.0", win: "3.1%", bracket: "4" },
  { rank: "8", name: "サカジロプリンス", jockey: "和田竜二", odds: "45.2", win: "1.9%", bracket: "8" },
];

const trackData = [
  { track: "東京", feature: "直線659m・高速馬場", tendency: "差し有利", tip: "上がり3F重視" },
  { track: "阪神", feature: "外回り・内回り2コース", tendency: "逃げ・先行有利", tip: "スタートダッシュ" },
  { track: "中山", feature: "急坂あり・小回り", tendency: "小回り巧者", tip: "ゴール前の根性" },
  { track: "京都", feature: "淀の坂・長い直線", tendency: "追い込み有利", tip: "末脚重視" },
  { track: "小倉", feature: "平坦・小回り", tendency: "逃げ有利", tip: "先行力重視" },
  { track: "福島", feature: "起伏あり・小回り", tendency: "先行有利", tip: "コース取り重視" },
  { track: "札幌", feature: "洋芝・広いコース", tendency: "差し・追込有利", tip: "持続力重視" },
  { track: "函館", feature: "洋芝・タイト", tendency: "逃げ・先行有利", tip: "スタート重視" },
];

const jraGrades = [
  { grade: "G1", name: "安田記念", track: "東京", date: "6/29", prize: "1億円" },
  { grade: "G1", name: "宝塚記念", track: "阪神", date: "7/27", prize: "1億2000万円" },
  { grade: "G2", name: "プロキオンS", track: "小倉", date: "7/6", prize: "5000万円" },
  { grade: "G3", name: "七夕賞", track: "福島", date: "7/7", prize: "3000万円" },
  { grade: "G3", name: "アイビスSD", track: "新潟", date: "7/27", prize: "3000万円" },
];

const narGrades = [
  { grade: "JpnI", name: "帝王賞", track: "大井", date: "6/25", prize: "8000万円" },
  { grade: "JpnII", name: "スパーキングレディC", track: "川崎", date: "7/3", prize: "3000万円" },
  { grade: "JpnIII", name: "マーキュリーC", track: "盛岡", date: "7/16", prize: "2000万円" },
  { grade: "重賞", name: "北海道スプリントC", track: "門別", date: "6/12", prize: "1500万円" },
];

const analysisPoints = [
  { icon: "📊", title: "オッズ分析", desc: "単勝オッズと複勝オッズの乖離から過小評価馬を発見" },
  { icon: "🏃", title: "前走データ", desc: "前走1着〜3着馬の次走成績を追跡・傾向分析" },
  { icon: "🌧️", title: "馬場状態", desc: "良・稍重・重・不良の馬場適性をデータで可視化" },
  { icon: "🏇", title: "騎手成績", desc: "コース別・条件別の騎手勝率データを完全掲載" },
  { icon: "📏", title: "距離適性", desc: "各馬の距離別成績を分析。マイル・中距離・長距離" },
  { icon: "🔢", title: "枠番傾向", desc: "コース・条件別の枠番有利不利データを集計" },
  { icon: "⏱️", title: "タイム分析", desc: "上がり3ハロンタイムで末脚の強さを数値化" },
  { icon: "🩺", title: "調教評価", desc: "追い切りタイムと動きの評価から状態を読む" },
];

function OddsTable({ data }: { data: typeof jraOdds }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? data : data.slice(0, 5);

  return (
    <div>
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
            {visible.map((horse) => (
              <tr key={horse.name} className="hover:bg-white/3 transition-colors">
                <td className="py-3 pl-4">
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-black ${parseInt(horse.rank) <= 3 ? "bg-[#d4af37] text-black" : "bg-white/10 text-gray-300"}`}>
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
      {data.length > 5 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-all inline-flex items-center gap-2"
          >
            {expanded ? <>折りたたむ ▲</> : <>もっと見る（残り{data.length - 5}頭） ▼</>}
          </button>
        </div>
      )}
    </div>
  );
}

function TrackTable() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? trackData : trackData.slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visible.map((t) => (
          <Card key={t.track} className="bg-[#0f0f1a] border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg font-black">{t.track}競馬場</CardTitle>
              <p className="text-gray-400 text-xs">{t.feature}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge className="bg-emerald-500/20 text-emerald-300 border-0 text-xs">{t.tendency}</Badge>
              <p className="text-gray-300 text-sm">💡 {t.tip}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {trackData.length > 4 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-all inline-flex items-center gap-2"
          >
            {expanded ? <>折りたたむ ▲</> : <>残り{trackData.length - 4}場を見る ▼</>}
          </button>
        </div>
      )}
    </div>
  );
}

export default function KeibaClient() {
  return (
    <>
      {/* JRA/地方競馬 タブ */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">📊 JRA / 地方競馬 切り替え</h2>
          <Tabs defaultValue="jra">
            <TabsList className="bg-[#1a1a2e] border border-white/10 mb-6">
              <TabsTrigger value="jra" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                🏇 JRA（中央競馬）
              </TabsTrigger>
              <TabsTrigger value="nar" className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white">
                🌙 地方競馬（NAR）
              </TabsTrigger>
            </TabsList>

            <TabsContent value="jra">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    🏆 今週の注目JRAレース
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {jraGrades.slice(0, 3).map((g) => (
                      <div key={g.name} className="p-4 rounded-xl border border-emerald-700/30 bg-gradient-to-br from-emerald-900/20 to-[#0f0f1a]">
                        <Badge className={`text-xs mb-2 ${g.grade === "G1" ? "bg-red-500/20 text-red-300 border-red-500/30" : g.grade === "G2" ? "bg-blue-500/20 text-blue-300 border-blue-500/30" : "bg-green-500/20 text-green-300 border-green-500/30"}`}>
                          {g.grade}
                        </Badge>
                        <div className="text-white font-black">{g.name}</div>
                        <div className="text-gray-400 text-xs mt-1">{g.track} · {g.date}</div>
                        <div className="text-[#d4af37] text-sm font-bold mt-1">{g.prize}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-3">📈 サンプルオッズ表（安田記念）</h3>
                  <OddsTable data={jraOdds} />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="nar">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    🌙 今月の注目地方競馬
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {narGrades.map((g) => (
                      <div key={g.name} className="p-4 rounded-xl border border-emerald-700/30 bg-gradient-to-br from-emerald-900/20 to-[#0f0f1a]">
                        <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs mb-2">{g.grade}</Badge>
                        <div className="text-white font-black">{g.name}</div>
                        <div className="text-gray-400 text-xs mt-1">{g.track} · {g.date}</div>
                        <div className="text-[#d4af37] text-sm font-bold mt-1">{g.prize}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-3">📈 サンプルオッズ表（帝王賞）</h3>
                  <OddsTable data={narOdds} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 競馬場別データ */}
      <section className="py-12 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">🗺️ 競馬場別傾向データ</h2>
          <TrackTable />
        </div>
      </section>

      {/* 分析ポイント */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">🔬 勝率UPの8大分析ポイント</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {analysisPoints.map((p) => (
              <div key={p.title} className="p-4 rounded-xl border border-white/10 bg-[#0f0f1a] hover:border-emerald-700/40 transition-all">
                <div className="text-2xl mb-2">{p.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1">{p.title}</h3>
                <p className="text-gray-500 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
