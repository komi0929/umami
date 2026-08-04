"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useCountUp } from "@/app/hooks/useCountUp";

const supportTools = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "アレルゲンピクトグラム",
    description: "7大アレルゲン対応の多言語ピクトグラムを無料提供。テーブルPOPやメニュー挿入用に最適化。",
    stat: "7大対応",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    title: "英語メニュー対応",
    description: "インバウンド対応の英語メニューテンプレートを提供。ヴィーガン認証マーク付き。",
    stat: "多言語",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "発酵ストーリーPOP",
    description: "甘酒・白味噌の発酵技術を伝えるストーリーPOP。顧客体験価値を最大化。",
    stat: "販促素材",
  },
];

export default function BusinessValue() {
  const [sectionRef, sectionVisible] = useScrollAnimation<HTMLElement>({
    threshold: 0.05,
  });

  const { count: foodCostMin, ref: counterRef } = useCountUp({
    end: 15,
    duration: 1500,
  });
  const { count: foodCostMax } = useCountUp({
    end: 22,
    duration: 1800,
    startOnView: false,
  });

  const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="business-value"
      ref={sectionRef}
      className="relative py-24 lg:py-36 bg-surface overflow-hidden"
      aria-label="ビジネス価値"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-teal/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 lg:mb-24 ${sectionVisible ? "" : "opacity-0"}`}
          style={sectionVisible ? { animation: "fade-in-up 0.8s ease-out forwards" } : {}}
        >
          <span className="text-xs tracking-[0.3em] text-gold uppercase font-medium">
            High Profitability
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-cream tracking-tight">
            プレミアム価格を実現する、
            <br className="hidden sm:block" />
            <span className="gradient-text">高収益モデル。</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">
            UMAMI VANILLAが実現する、圧倒的な利益率。
          </p>
        </div>

        {/* Profitability Infographic */}
        <div
          className={`max-w-3xl mx-auto mb-24 ${sectionVisible ? "" : "opacity-0"}`}
          style={sectionVisible ? { animation: "fade-in-up 0.8s ease-out 0.2s both" } : {}}
        >
          <div className="glass rounded-3xl p-8 lg:p-14 border border-gold/10 relative overflow-hidden">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold/5 to-transparent" />

            <div className="relative z-10">
              {/* Two-column stat layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Price Point */}
                <div className="text-center sm:text-right sm:border-r sm:border-border sm:pr-12">
                  <span className="text-xs text-text-muted tracking-[0.2em] uppercase">1スクープ提供価格</span>
                  <div className="mt-3 flex items-baseline justify-center sm:justify-end gap-1">
                    <span className="text-6xl lg:text-7xl font-black gradient-text">¥500</span>
                    <span className="text-text-muted text-lg">〜</span>
                  </div>
                </div>

                {/* Food Cost */}
                <div className="text-center sm:text-left" ref={counterRef as React.RefObject<HTMLDivElement>}>
                  <span className="text-xs text-text-muted tracking-[0.2em] uppercase">原価率</span>
                  <div className="mt-3 flex items-baseline justify-center sm:justify-start gap-2">
                    <span className="text-6xl lg:text-7xl font-black text-gold">
                      {foodCostMin}%
                    </span>
                    <span className="text-2xl text-text-muted font-light">〜</span>
                    <span className="text-6xl lg:text-7xl font-black text-gold">
                      {foodCostMax}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual Bar */}
              <div className="mt-10 relative">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs text-text-muted">低原価率</span>
                  <div className="flex-1 h-4 bg-charcoal-lighter/50 rounded-full overflow-hidden relative">
                    <div
                      className="h-full gradient-gold rounded-full transition-all ease-out relative"
                      style={{
                        width: sectionVisible ? "22%" : "0%",
                        transition: "width 2.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
                      }}
                    >
                      <div className="absolute inset-0 bg-white/10 animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                  </div>
                  <span className="text-xs text-text-muted">100%</span>
                </div>
                <p className="text-center text-sm text-text-secondary mt-4">
                  一般的な業務用アイスクリームと比較して<span className="text-gold font-semibold">圧倒的な利益率</span>を実現
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Tools Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-cream">
            無料で提供する<span className="gradient-text">販促ツール</span>
          </h3>
          <p className="mt-3 text-text-secondary text-sm max-w-md mx-auto">
            導入店舗様に、売上最大化のためのサポートツールをすべて無料でお届けします。
          </p>
        </div>

        {/* Support Tool Cards */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ${cardsVisible ? "" : "opacity-0"}`}
        >
          {supportTools.map((tool, index) => (
            <div
              key={tool.title}
              className="group relative"
              style={
                cardsVisible
                  ? { animation: `fade-in-up 0.6s ease-out ${index * 0.15}s both` }
                  : {}
              }
            >
              <div className="glass rounded-2xl p-7 lg:p-8 border border-border hover:border-gold/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/5 h-full">
                {/* Icon + Stat */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold/15 group-hover:scale-110">
                    {tool.icon}
                  </div>
                  <span className="text-[10px] tracking-[0.15em] text-gold/70 font-medium uppercase bg-gold/5 px-2.5 py-1 rounded-full">
                    {tool.stat}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-cream mb-2.5">{tool.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
