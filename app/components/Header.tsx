"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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

  const navLinks = [
    { label: "ラインナップ", id: "product-lines" },
    { label: "収益性", id: "business-value" },
    { label: "無料サンプル請求", id: "conversion-cta", isCta: true },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-xl shadow-black/40 backdrop-blur-xl py-0"
          : "bg-transparent backdrop-blur-none py-1"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="メインナビゲーション">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="relative group flex items-center gap-1.5 focus:outline-none"
            aria-label="UMAMI VANILLA トップへ戻る"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
          >
            <span className="text-xl lg:text-2xl tracking-[0.25em] select-none">
              <span className="font-bold text-cream transition-colors duration-300 group-hover:text-gold">
                UMAMI
              </span>{" "}
              <span className="font-light text-gold transition-colors duration-300 group-hover:text-gold-light">
                VANILLA
              </span>
            </span>
            <span className="block absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500 rounded-full" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("product-lines")}
              className="text-sm text-text-secondary hover:text-cream transition-colors duration-300 tracking-wider cursor-pointer focus:outline-none"
            >
              ラインナップ
            </button>
            <button
              onClick={() => scrollToSection("business-value")}
              className="text-sm text-text-secondary hover:text-cream transition-colors duration-300 tracking-wider cursor-pointer focus:outline-none"
            >
              収益性
            </button>
            <button
              onClick={() => scrollToSection("conversion-cta")}
              className="relative inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-wider text-matte-black bg-gold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 hover:scale-[1.02] active:scale-95 cursor-pointer focus:outline-none"
            >
              無料サンプル請求
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="flex flex-col items-end gap-1.5 w-6">
              <span
                className={`block h-[2px] bg-cream transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
                }`}
              />
              <span
                className={`block h-[2px] bg-gold transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-[2px] bg-cream transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-80 opacity-100 pb-6 pt-2" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col gap-3 pt-4 border-t border-border/80">
            {navLinks.map((link, index) => (
              <div
                key={link.id}
                className={`transition-all duration-500 ease-out transform ${
                  mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-3 pointer-events-none"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${(index + 1) * 75}ms` : "0ms",
                }}
              >
                {link.isCta ? (
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wider text-matte-black bg-gold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 active:scale-95 cursor-pointer mt-2"
                  >
                    {link.label}
                  </button>
                ) : (
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left text-text-secondary hover:text-cream transition-colors duration-300 tracking-wider py-2 px-1 block cursor-pointer"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Subtle Gold Line Separator under header when scrolled */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </header>
  );
}
