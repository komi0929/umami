"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function Hero() {
  const [headlineRef, headlineVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px",
  });

  const scrollToForm = () => {
    const el = document.getElementById("conversion-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="ヒーローセクション"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="プレミアムヴィーガンバニラアイスクリームのマクロ撮影"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-overlay" />
        {/* Extra bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-matte-black to-transparent" />
      </div>

      {/* Content */}
      <div
        ref={headlineRef}
        className={`relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center ${
          headlineVisible ? "" : "scroll-animate"
        }`}
        style={headlineVisible ? { animation: "fade-in-up 1s ease-out forwards" } : {}}
      >
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-8"
          style={headlineVisible ? { animation: "fade-in 0.6s ease-out 0.2s both" } : { opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs tracking-[0.2em] text-gold font-medium uppercase">
            B2B Premium Vegan Ice Cream
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight lg:leading-tight tracking-tight mb-6">
          <span className="gradient-text">
            インバウンド需要とアレルギー対策を網羅する、
          </span>
          <br />
          <span className="text-cream">
            次世代の業務用ヴィーガンアイス
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          style={headlineVisible ? { animation: "fade-in-up 0.8s ease-out 0.4s both" } : { opacity: 0 }}
        >
          100%植物性・グルテンフリー。和の発酵技術が生む、
          <br className="hidden sm:block" />
          一般業務用とは一線を画すプレミアムな口どけ。
        </p>

        {/* CTA Button */}
        <div
          style={headlineVisible ? { animation: "fade-in-up 0.8s ease-out 0.6s both" } : { opacity: 0 }}
        >
          <button
            id="hero-cta"
            onClick={scrollToForm}
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-bold tracking-wider text-matte-black gradient-gold rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-0.5 active:scale-95"
          >
            <span>【飲食店様限定】無料サンプル一式を請求する</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={headlineVisible ? { animation: "fade-in 1s ease-out 1.2s both" } : { opacity: 0 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] text-text-muted uppercase">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
