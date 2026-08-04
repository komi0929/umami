"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useCountUp } from "@/app/hooks/useCountUp";

const supportTools = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "アレルゲンピクトグラム",
    description: "7大アレルゲン対応の多言語ピクトグラムを無料提供。テーブルPOPやメニュー挿入用。",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    title: "英語メニュー対応",
    description: "インバウンド対応の英語メニューテンプレートを提供。ヴィーガン認証マーク付き。",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "発酵ストーリーPOP",
    description: "甘酒・白味噌の発酵技術を伝えるストーリーPOP。顧客体験価値を最大化。",
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
      className="relative py-24 lg:py-32 bg-surface overflow-hidden"
      aria-label="ビジネス価値"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/3 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 lg:mb-20 ${sectionVisible ? "" : "opacity-0"}`}
          style={sectionVisible ? { animation: "fade-in-up 0.8s ease-out forwards" } : {}}
        >
          <span className="text-xs tracking-[0.3em] text-gold uppercase font-medium">
            High Profitability
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-cream tracking-tight">
            プレミアム価格を実現する、高収益モデル。
          </h2>
        </div>

        {/* Profitability Infographic */}
        <div
          className={`max-w-2xl mx-auto mb-20 ${sectionVisible ? "" : "opacity-0"}`}
          style={sectionVisible ? { animation: "fade-in-up 0.8s ease-out 0.2s both" } : {}}
        >
          <div className="glass rounded-2xl p-8 lg:p-12 border border-gold/10 text-center">
            {/* Price Point */}
            <div className="mb-8">
              <span className="text-sm text-text-muted tracking-wider">1スクープ提供価格</span>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-5xl lg:text-6xl font-bold gradient-text">¥500</span>
                <span className="text-text-muted text-sm">〜</span>
              </div>
            </div>

            {/* Divider */}
            <div className="section-divider mb-8" />

            {/* Food Cost */}
            <div ref={counterRef as React.RefObject<HTMLDivElement>}>
              <span className="text-sm text-text-muted tracking-wider">原価率</span>
              <div className="mt-2 flex items-baseline justify-center gap-2">
                <span className="text-5xl lg:text-7xl font-bold text-gold">
                  {foodCostMin}%
                </span>
                <span className="text-2xl text-text-muted">〜</span>
                <span className="text-5xl lg:text-7xl font-bold text-gold">
                  {foodCostMax}%
                </span>
              </div>
              <p className="mt-4 text-text-secondary text-sm">
                一般的な業務用アイスと比較して圧倒的な利益率を実現
              </p>
            </div>

            {/* Visual Bar */}
            <div className="mt-8 relative">
              <div className="h-3 bg-charcoal-lighter rounded-full overflow-hidden">
                <div
                  className="h-full gradient-gold rounded-full transition-all duration-2000 ease-out"
                  style={{
                    width: sectionVisible ? "22%" : "0%",
                    transition: "width 2s ease-out 0.5s",
                  }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-text-muted">
                <span>0%</span>
                <span>原価率</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Tools Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-xl lg:text-2xl font-bold text-cream">
            無料で提供する販促ツール
          </h3>
          <p className="mt-2 text-text-secondary text-sm">
            導入店舗様に、売上最大化のためのサポートツールを無料でお届けします。
          </p>
        </div>

        {/* Support Tool Cards */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${cardsVisible ? "" : "opacity-0"}`}
        >
          {supportTools.map((tool, index) => (
            <div
              key={tool.title}
              className="group glass rounded-xl p-6 lg:p-8 border border-border hover:border-gold/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
              style={
                cardsVisible
                  ? { animation: `fade-in-up 0.6s ease-out ${index * 0.15}s both` }
                  : {}
              }
            >
              <div className="text-gold mb-4 transition-transform duration-300 group-hover:scale-110">
                {tool.icon}
              </div>
              <h4 className="text-lg font-bold text-cream mb-2">{tool.title}</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
