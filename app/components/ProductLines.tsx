"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const products = [
  {
    id: "umami",
    name: "UMAMI VANILLA",
    tagline: "主役級の満足感",
    description:
      "豆乳ベースに甘酒・白味噌の発酵技術を融合。深みのあるコクと余韻で、コースの〆を特別な一皿に。",
    image: "/images/umami-vanilla.png",
    imageAlt: "UMAMI VANILLAアイスクリーム — マットブラックボウルに盛り付け",
    calories: "194kcal",
    highlights: [
      { label: "ベース", value: "豆乳" },
      { label: "発酵素材", value: "甘酒・白味噌" },
      { label: "風味", value: "バニラビーンズ" },
    ],
    targets: ["高級ホテル", "プレミアム和食"],
    accentColor: "gold",
    gradientFrom: "from-gold/10",
    gradientTo: "to-transparent",
    borderColor: "border-gold/20",
    badgeBg: "bg-gold/10",
    badgeText: "text-gold",
  },
  {
    id: "wellness",
    name: "WELLNESS VANILLA",
    tagline: "究極のヘルシー＆リセット",
    description:
      "米油ベース（豆乳不使用）にメープルシロップの自然な甘み。軽やかな口どけで、食後のリセットに最適。",
    image: "/images/wellness-vanilla.png",
    imageAlt: "WELLNESS VANILLAアイスクリーム — エレガントなセラミックカップに盛り付け",
    calories: "157kcal",
    highlights: [
      { label: "ベース", value: "米油（豆乳不使用）" },
      { label: "甘味料", value: "メープルシロップ" },
      { label: "特長", value: "大豆フリー" },
    ],
    targets: ["ヘルスカフェ", "サラダバー", "ウェルネスリトリート"],
    accentColor: "teal",
    gradientFrom: "from-teal/10",
    gradientTo: "to-transparent",
    borderColor: "border-teal/20",
    badgeBg: "bg-teal/10",
    badgeText: "text-teal-light",
  },
];

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
      className="relative py-24 lg:py-32 bg-matte-black"
      aria-label="製品ラインナップ"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 lg:mb-20">
        <div
          className={`text-center ${sectionVisible ? "" : "opacity-0"}`}
          style={sectionVisible ? { animation: "fade-in-up 0.8s ease-out forwards" } : {}}
        >
          <span className="text-xs tracking-[0.3em] text-gold uppercase font-medium">
            The 2 Lines
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-cream tracking-tight">
            2つのコンセプト、1つの哲学。
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto leading-relaxed">
            シーンとターゲットに合わせて選べる、プレミアムヴィーガンアイスの2ライン。
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider max-w-lg mx-auto mb-16 lg:mb-20" />

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={cardRefs[index]}
              className={`group relative ${cardVisibility[index] ? "" : "opacity-0"}`}
              style={
                cardVisibility[index]
                  ? {
                      animation: `${index === 0 ? "slide-in-left" : "slide-in-right"} 0.8s ease-out ${index * 0.2}s both`,
                    }
                  : {}
              }
            >
              <div
                className={`relative overflow-hidden rounded-2xl glass border ${product.borderColor} transition-all duration-500 hover:border-opacity-50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30`}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.gradientFrom} via-transparent to-matte-black/60`} />

                  {/* Calorie Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider ${product.badgeBg} ${product.badgeText} backdrop-blur-sm`}>
                      {product.calories}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Product Name */}
                  <div className="mb-4">
                    <span className={`text-xs tracking-[0.2em] ${product.badgeText} font-medium uppercase`}>
                      {product.name}
                    </span>
                    <h3 className="mt-2 text-2xl lg:text-3xl font-bold text-cream">
                      {product.tagline}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {product.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="flex items-center justify-between py-2 border-b border-border"
                      >
                        <span className="text-sm text-text-muted">{h.label}</span>
                        <span className="text-sm font-medium text-cream">{h.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Target Badges */}
                  <div className="flex flex-wrap gap-2">
                    {product.targets.map((target) => (
                      <span
                        key={target}
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${product.badgeBg} ${product.badgeText} border ${product.borderColor}`}
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Features */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 lg:mt-20">
        <div
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted"
        >
          {["100%植物性", "グルテンフリー", "乳・卵不使用", "着色料不使用"].map(
            (feature) => (
              <div key={feature} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{feature}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
