"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "ラインナップ", href: "#product-lines" },
    { label: "収益性", href: "#business-value" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1 group">
          <span className="font-bold text-2xl tracking-widest text-text-primary transition-colors group-hover:text-accent">
            UMAMI
          </span>
          <span className="font-light text-2xl tracking-wide text-accent">
            VANILLA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium tracking-wider"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#conversion-cta"
            className="bg-accent hover:bg-accent-dark text-text-on-dark px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow-md"
          >
            無料サンプル請求
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-primary focus:outline-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-[2px] bg-current transition-all duration-300 origin-left ${
                isMobileMenuOpen ? "rotate-45 translate-x-[2px] -translate-y-[2px]" : ""
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-current transition-all duration-300 origin-left ${
                isMobileMenuOpen ? "-rotate-45 translate-x-[2px] translate-y-[2px]" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-surface-warm glass-strong transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-80 border-b border-border-light shadow-sm" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-text-secondary hover:text-accent transition-colors py-2 font-medium tracking-wide"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#conversion-cta"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-accent text-text-on-dark px-6 py-3 rounded-full font-bold text-center mt-2 shadow-sm"
          >
            無料サンプル請求
          </Link>
        </div>
      </div>
    </header>
  );
}
