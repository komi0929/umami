"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation("fade-in-up");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white-warm pt-20">
      {/* Background with parallax & overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="UMAMI VANILLA Ice Cream"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Soft Ethereal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white-warm via-white-warm/80 to-white/40"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent-lighter/40 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-sand/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Eyebrow Badge */}
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent-lighter/80 backdrop-blur-sm border border-accent/20">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-accent-dark">
              UMAMI VANILLA — B2B Premium Vegan Ice Cream
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight md:leading-tight lg:leading-tight mb-8 tracking-tight">
            インバウンド需要にこたえる、<br className="hidden md:block" />
            <span className="gradient-text">次世代の業務用ヴィーガンアイス</span>
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-xl text-text-secondary mb-12 max-w-2xl font-light leading-relaxed">
            100%植物性・グルテンフリー。和の発酵技術が生む、一般業務用とは一線を画すプレミアムな口どけ。
          </p>

          {/* CTA */}
          <Link
            href="#conversion-cta"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gradient-accent text-text-on-dark px-6 sm:px-8 py-4 rounded-full font-bold text-sm sm:text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(184,151,126,0.3)] hover:shadow-[0_0_30px_rgba(184,151,126,0.5)] overflow-hidden text-center"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative">【飲食店様限定】無料サンプル一式を請求する</span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-text-muted text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-border-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[gentle-bounce_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
