"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

interface HighlightItem {
  label: string;
  value: string;
  iconType: "soy" | "ferment" | "vanilla" | "oil" | "maple" | "free";
}

interface TargetItem {
  name: string;
  iconType: "hotel" | "dining" | "cafe" | "salad" | "wellness";
}

interface Product {
  id: "umami" | "wellness";
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  calories: string;
  highlights: HighlightItem[];
  targets: TargetItem[];
  theme: "accent" | "sage";
  pairingNote: string;
  sensoryProfile: { label: string; value: string }[];
}

const products: Product[] = [
  {
    id: "umami",
    name: "UMAMI VANILLA",
    tagline: "主役級の満足感",
    description:
      "豆乳ベースに甘酒・白味噌の発酵技術を融合。深みのあるコクと余韻で、コースの〆を特別な一皿に。",
    image: "/images/umami-vanilla.png",
    imageAlt: "UMAMI VANILLAアイスクリーム",
    calories: "194kcal",
    highlights: [
      { label: "ベース", value: "豆乳", iconType: "soy" },
      { label: "発酵素材", value: "甘酒・白味噌", iconType: "ferment" },
      { label: "風味", value: "バニラビーンズ", iconType: "vanilla" },
    ],
    targets: [
      { name: "高級ホテル", iconType: "hotel" },
      { name: "プレミアム和食", iconType: "dining" },
    ],
    theme: "accent",
    pairingNote:
      "和食コースの締めや特別なおもてなしに。深みのある発酵のコクと温かいほうじ茶・エスプレッソが絶妙なペアリングを生みます。",
    sensoryProfile: [
      { label: "コクと深み", value: "★★★★★" },
      { label: "後味の余韻", value: "芳醇・リッチ" },
    ],
  },
  {
    id: "wellness",
    name: "WELLNESS VANILLA",
    tagline: "究極のヘルシー＆リセット",
    description:
      "米油ベース（豆乳不使用）にメープルシロップの自然な甘み。軽やかな口どけで、食後のリセットに最適。",
    image: "/images/wellness-vanilla.png",
    imageAlt: "WELLNESS VANILLAアイスクリーム",
    calories: "157kcal",
    highlights: [
      { label: "ベース", value: "米油（豆乳不使用）", iconType: "oil" },
      { label: "甘味料", value: "メープルシロップ", iconType: "maple" },
      { label: "特長", value: "大豆フリー", iconType: "free" },
    ],
    targets: [
      { name: "ヘルスカフェ", iconType: "cafe" },
      { name: "サラダバー", iconType: "salad" },
      { name: "ウェルネスリトリート", iconType: "wellness" },
    ],
    theme: "sage",
    pairingNote:
      "大豆アレルギーをお持ちの方も安心。食後の口内を爽やかにリセットする軽快でみずみずしい口どけをお楽しみいただけます。",
    sensoryProfile: [
      { label: "軽快なクリア感", value: "★★★★★" },
      { label: "後味の余韻", value: "すっきり・上品" },
    ],
  },
];

function HighlightIcon({ type, theme }: { type: string; theme: "accent" | "sage" }) {
  const colorClass = theme === "accent" ? "text-accent" : "text-sage";

  switch (type) {
    case "soy":
      return (
        <svg className={`w-4 h-4 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.25 6-7.5 9.75-7.5 13.5a7.5 7.5 0 0015 0c0-3.75-2.25-7.5-7.5-13.5z" />
        </svg>
      );
    case "ferment":
      return (
        <svg className={`w-4 h-4 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      );
    case "vanilla":
      return (
        <svg className={`w-4 h-4 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m15.364 6.364l-12.728-12.728m0 12.728L19.364 5.636" />
        </svg>
      );
    case "oil":
      return (
        <svg className={`w-4 h-4 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      );
    case "maple":
      return (
        <svg className={`w-4 h-4 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-4m0 0l-3.5-3.5M12 17l3.5-3.5M12 3l2.5 5 5 1-3.5 4 1 5.5L12 16l-5 2.5 1-5.5-3.5-4 5-1L12 3z" />
        </svg>
      );
    case "free":
      return (
        <svg className={`w-4 h-4 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      );
    default:
      return null;
  }
}

function TargetIcon({ type }: { type: string }) {
  const iconClass = "w-3.5 h-3.5 text-text-secondary opacity-90 shrink-0";
  switch (type) {
    case "hotel":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6M9 7h1m-1 4h1m4-4h1m-1 4h1" />
        </svg>
      );
    case "dining":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        </svg>
      );
    case "cafe":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      );
    case "salad":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
        </svg>
      );
    case "wellness":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ProductLines() {
  const [sectionRef, sectionVisible] = useScrollAnimation<HTMLElement>({
    threshold: 0.05,
  });
  const [card1Ref, card1Visible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });
  const [card2Ref, card2Visible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  const cardVisibility = [card1Visible, card2Visible];
  const cardRefs = [card1Ref, card2Ref];

  return (
    <section
      id="product-lines"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-ivory overflow-hidden"
      aria-label="製品ラインナップ"
    >
      {/* Background Decorative Radial Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-accent-lighter/40 via-white to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 lg:mb-20">
        <div
          className={`text-center transition-all duration-1000 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative Emblem */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-accent/60" />
            <span className="w-1.5 h-1.5 rotate-45 bg-accent" />
            <span className="text-xs tracking-[0.35em] text-accent uppercase font-semibold">
              The 2 Lines
            </span>
            <span className="w-1.5 h-1.5 rotate-45 bg-accent" />
            <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-accent/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
            2つのコンセプト、1つの哲学。
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            シーンとターゲットに合わせて選べる、プレミアムヴィーガンアイスの2ライン。
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider max-w-lg mx-auto mb-16 lg:mb-20" />

      {/* Product Grid Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Desktop VS Divider */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex-col items-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-white border border-border-light shadow-md flex items-center justify-center backdrop-blur-md relative">
            <span className="text-xs font-black tracking-widest text-text-primary">
              VS
            </span>
            <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-30 border border-accent/20" />
          </div>
          <span className="mt-2 px-2.5 py-0.5 rounded-full bg-white border border-border-light text-[10px] text-text-muted font-medium tracking-wider uppercase">
            Comparison
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => {
            const isAccent = product.theme === "accent";
            const badgeBg = isAccent ? "bg-accent-lighter" : "bg-sage-light";
            const badgeText = isAccent ? "text-accent" : "text-sage";
            const hoverBorder = isAccent ? "hover:border-accent/40" : "hover:border-sage/40";

            return (
              <div
                key={product.id}
                ref={cardRefs[index]}
                className={`group relative transition-all duration-700 ${
                  cardVisibility[index]
                    ? "opacity-100 translate-x-0"
                    : index === 0
                    ? "opacity-0 -translate-x-12"
                    : "opacity-0 translate-x-12"
                }`}
              >
                {/* Outer Card Container */}
                <div
                  className={`relative overflow-hidden rounded-2xl bg-white border border-border-light transition-all duration-500 hover:-translate-y-1.5 card-elegant ${hoverBorder}`}
                >
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay" />

                    {/* Pill for Calorie Count */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`px-4 py-1.5 rounded-full shadow-sm text-xs font-bold tracking-wider ${badgeBg} ${badgeText}`}>
                        {product.calories}
                      </div>
                    </div>

                    {/* Hover Overlay Revealing Additional Details */}
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-20 translate-y-4 group-hover:translate-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isAccent ? "bg-accent" : "bg-sage"}`} />
                          <span className={`text-xs font-bold tracking-widest uppercase ${badgeText}`}>
                            Pairing & Experience Guide
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-text-primary">
                          {product.name} の楽しみ方
                        </h4>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {product.pairingNote}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border-light space-y-2.5">
                        <span className="text-[11px] font-semibold text-text-muted tracking-wider uppercase block">
                          Sensory Profile / 風味の特徴
                        </span>
                        {product.sensoryProfile.map((prof) => (
                          <div key={prof.label} className="flex justify-between items-center text-xs sm:text-sm">
                            <span className="text-text-secondary">{prof.label}</span>
                            <span className={`font-semibold ${badgeText}`}>{prof.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Content Section */}
                  <div className="p-6 lg:p-8">
                    {/* Name & Tagline */}
                    <div className="mb-4">
                      <span className={`text-xs tracking-[0.25em] ${badgeText} font-semibold uppercase block`}>
                        {product.name}
                      </span>
                      <h3 className="mt-1.5 text-2xl lg:text-3xl font-bold text-text-primary tracking-tight">
                        {product.tagline}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Icon-Based Highlight List */}
                    <div className="mb-6 p-4 rounded-xl bg-surface-warm border border-border-light space-y-3">
                      <span className="text-[11px] font-semibold text-text-muted tracking-wider uppercase block mb-1">
                        Key Highlights / 特長成分
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {product.highlights.map((h) => (
                          <div
                            key={h.label}
                            className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-border-light shadow-sm"
                          >
                            <div className={`w-7 h-7 rounded-md shrink-0 flex items-center justify-center ${badgeBg}`}>
                              <HighlightIcon type={h.iconType} theme={product.theme} />
                            </div>
                            <div className="min-w-0">
                              <span className="block text-[10px] text-text-muted leading-none">{h.label}</span>
                              <span className="block text-xs font-semibold text-text-primary truncate mt-0.5">
                                {h.value}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Target Audience Badges */}
                    <div>
                      <span className="text-[11px] font-semibold text-text-muted tracking-wider uppercase block mb-2">
                        Target Placement / 推奨導入先
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.targets.map((target) => (
                          <span
                            key={target.name}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white text-text-secondary border border-border-dark transition-all duration-300 hover:scale-105 shadow-sm"
                          >
                            <TargetIcon type={target.iconType} />
                            <span>{target.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparative Highlight Bar */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-border-light shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-accent tracking-wide">UMAMI VANILLA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-text-primary">濃厚なコク & 芳醇な余韻</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-muted border border-border-light text-[11px] font-semibold text-text-muted">
            <span className="text-accent">コース〆</span>
            <span>vs</span>
            <span className="text-sage">リセット</span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-text-primary">軽やかな口どけ & 清涼感</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sage" />
            <span className="font-bold text-sage tracking-wide">WELLNESS VANILLA</span>
          </div>
        </div>
      </div>

      {/* Common Features */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 lg:mt-20">
        <div className="py-6 px-8 rounded-2xl bg-white border border-border-light shadow-sm max-w-3xl mx-auto">
          <div className="text-center mb-3 text-xs tracking-widest text-text-muted uppercase font-semibold">
            Common Guarantee / 共通品質
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-text-primary">
            {["100%植物性", "グルテンフリー", "乳・卵不使用", "着色料不使用"].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-accent-lighter text-accent flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
