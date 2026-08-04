"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="メインナビゲーション">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="relative group"
            aria-label="UMAMI トップへ戻る"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <span className="text-xl lg:text-2xl font-bold tracking-[0.3em] text-cream transition-colors duration-300 group-hover:text-gold">
              UMAMI
            </span>
            <span className="block h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-500" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("product-lines")}
              className="text-sm text-text-secondary hover:text-cream transition-colors duration-300 tracking-wider"
            >
              ラインナップ
            </button>
            <button
              onClick={() => scrollToSection("business-value")}
              className="text-sm text-text-secondary hover:text-cream transition-colors duration-300 tracking-wider"
            >
              収益性
            </button>
            <button
              onClick={() => scrollToSection("conversion-cta")}
              className="relative inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-wider text-matte-black bg-gold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 active:scale-95"
            >
              無料サンプル請求
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="flex flex-col items-end gap-1.5">
              <span
                className={`block h-[2px] bg-cream transition-all duration-300 ${
                  mobileMenuOpen ? "w-6 rotate-45 translate-y-[5px]" : "w-6"
                }`}
              />
              <span
                className={`block h-[2px] bg-cream transition-all duration-300 ${
                  mobileMenuOpen ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-[2px] bg-cream transition-all duration-300 ${
                  mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[5px]" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-64 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            <button
              onClick={() => scrollToSection("product-lines")}
              className="text-left text-text-secondary hover:text-cream transition-colors duration-300 tracking-wider py-2"
            >
              ラインナップ
            </button>
            <button
              onClick={() => scrollToSection("business-value")}
              className="text-left text-text-secondary hover:text-cream transition-colors duration-300 tracking-wider py-2"
            >
              収益性
            </button>
            <button
              onClick={() => scrollToSection("conversion-cta")}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wider text-matte-black bg-gold rounded-full hover:bg-gold-light transition-all duration-300"
            >
              無料サンプル請求
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
