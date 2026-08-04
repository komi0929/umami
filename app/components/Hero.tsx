"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

// Floating particle configurations for background depth
const PARTICLES = [
  { id: 1, top: "12%", left: "8%", size: "w-2 h-2", opacity: "opacity-40", duration: "7s", delay: "0s" },
  { id: 2, top: "25%", left: "85%", size: "w-3 h-3", opacity: "opacity-60", duration: "9s", delay: "1s" },
  { id: 3, top: "60%", left: "12%", size: "w-1.5 h-1.5", opacity: "opacity-30", duration: "6s", delay: "2s" },
  { id: 4, top: "75%", left: "88%", size: "w-2.5 h-2.5", opacity: "opacity-50", duration: "8s", delay: "0.5s" },
  { id: 5, top: "35%", left: "92%", size: "w-1 h-1", opacity: "opacity-70", duration: "5s", delay: "1.5s" },
  { id: 6, top: "80%", left: "20%", size: "w-3 h-3", opacity: "opacity-35", duration: "10s", delay: "3s" },
  { id: 7, top: "18%", left: "75%", size: "w-2 h-2", opacity: "opacity-45", duration: "7.5s", delay: "2.5s" },
  { id: 8, top: "45%", left: "6%", size: "w-1.5 h-1.5", opacity: "opacity-50", duration: "6.5s", delay: "4s" },
  { id: 9, top: "68%", left: "78%", size: "w-2 h-2", opacity: "opacity-60", duration: "8.5s", delay: "1.2s" },
  { id: 10, top: "88%", left: "45%", size: "w-1 h-1", opacity: "opacity-40", duration: "5.5s", delay: "3.5s" },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [headlineRef, headlineVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px",
  });

  // Track window scroll position for subtle parallax effect
  useEffect(() => {
    let animationFrameId: number;
    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById("conversion-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const line1Text = "インバウンド需要とアレルギー対策を網羅する、";
  const line2Text = "次世代の業務用ヴィーガンアイス";

  const line1Chars = Array.from(line1Text);
  const line2Chars = Array.from(line2Text);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-matte-black"
      aria-label="ヒーローセクション"
    >
      {/* 1. Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="relative w-full h-full scale-110 will-change-transform transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
          }}
        >
          <Image
            src="/images/hero.png"
            alt="プレミアムヴィーガンバニラアイスクリームのマクロ撮影"
            fill
            priority
            className="object-cover object-center brightness-90"
            sizes="100vw"
            quality={90}
          />
        </div>

        {/* 4. Multi-stop Sophisticated Gradient Overlays & Radial Ambiance */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(42, 107, 107, 0.25) 0%, rgba(201, 169, 110, 0.12) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(13, 13, 13, 0.75) 0%, rgba(13, 13, 13, 0.45) 35%, rgba(13, 13, 13, 0.75) 75%, rgba(13, 13, 13, 0.98) 100%)",
          }}
        />
        {/* Extra Bottom Vignette Fade */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-matte-black via-matte-black/80 to-transparent" />
      </div>

      {/* 6. Grain/Noise Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-[2]"
        aria-hidden="true"
      >
        <svg className="w-full h-full">
          <filter id="hero-grain-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-grain-noise)" />
        </svg>
      </div>

      {/* 3. Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none z-[3] overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className={`absolute rounded-full bg-gold/60 shadow-[0_0_8px_rgba(201,169,110,0.6)] ${p.size} ${p.opacity} animate-float`}
            style={{
              top: p.top,
              left: p.left,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div
        ref={headlineRef}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-24 pb-20"
      >
        {/* 7. Eyebrow Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border border-gold/30 bg-gold/5 mb-8 shadow-[0_0_15px_rgba(201,169,110,0.1)] backdrop-blur-md"
          style={
            headlineVisible
              ? { animation: "fade-in 0.6s ease-out 0.1s both" }
              : { opacity: 0 }
          }
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_8px_rgba(201,169,110,0.8)]" />
          <span className="text-xs sm:text-sm tracking-[0.2em] text-gold font-medium uppercase">
            UMAMI VANILLA — B2B Premium Vegan Ice Cream
          </span>
        </div>

        {/* 2. Headline with Per-Character Staggered Reveal */}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight lg:leading-tight tracking-tight mb-8"
          aria-label={`${line1Text}${line2Text}`}
        >
          <span className="gradient-text block mb-2 sm:mb-3">
            {line1Chars.map((char, index) => (
              <span
                key={`l1-${index}`}
                className="inline-block transition-all duration-700 transform"
                style={{
                  opacity: headlineVisible ? 1 : 0,
                  transform: headlineVisible ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${0.2 + index * 0.03}s`,
                }}
              >
                {char}
              </span>
            ))}
          </span>
          <span className="text-cream block">
            {line2Chars.map((char, index) => (
              <span
                key={`l2-${index}`}
                className="inline-block transition-all duration-700 transform"
                style={{
                  opacity: headlineVisible ? 1 : 0,
                  transform: headlineVisible ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${0.2 + (line1Chars.length + index) * 0.03}s`,
                }}
              >
                {char}
              </span>
            ))}
          </span>
        </h1>

        {/* 9. Subtext */}
        <p
          className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          style={
            headlineVisible
              ? { animation: "fade-in-up 0.8s ease-out 0.85s both" }
              : { opacity: 0 }
          }
        >
          100%植物性・グルテンフリー。和の発酵技術が生む、
          <br className="hidden sm:block" />
          一般業務用とは一線を画すプレミアムな口どけ。
        </p>

        {/* 8. CTA Button with Pulse-Glow Effect */}
        <div
          style={
            headlineVisible
              ? { animation: "fade-in-up 0.8s ease-out 1.05s both" }
              : { opacity: 0 }
          }
        >
          <button
            id="hero-cta"
            onClick={scrollToForm}
            className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 text-base sm:text-lg font-bold tracking-wider text-matte-black gradient-gold rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(201,169,110,0.5)] active:scale-95 animate-pulse-glow overflow-hidden cursor-pointer"
          >
            {/* Shimmer Effect overlay on button hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

            <span className="relative z-10">
              【飲食店様限定】無料サンプル一式を請求する
            </span>
            <svg
              className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>

        {/* 5. Improved Scroll Indicator with Bouncing Chevron */}
        <div
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          style={
            headlineVisible
              ? { animation: "fade-in 1s ease-out 1.4s both" }
              : { opacity: 0 }
          }
        >
          <span className="text-[10px] tracking-[0.3em] text-text-muted font-medium uppercase">
            SCROLL
          </span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-gold/70 via-gold/30 to-transparent animate-pulse" />
          <svg
            className="w-4 h-4 text-gold/80 animate-bounce -mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
