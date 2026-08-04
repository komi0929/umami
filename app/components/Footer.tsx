"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-matte-black text-text-primary overflow-hidden" role="contentinfo">
      {/* Decorative Gold Gradient Line at Top of Footer */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block focus:outline-none group cursor-pointer"
              aria-label="UMAMI VANILLA トップへ戻る"
            >
              <span className="text-xl lg:text-2xl tracking-[0.25em] select-none">
                <span className="font-bold text-cream transition-colors duration-300 group-hover:text-gold">
                  UMAMI
                </span>{" "}
                <span className="font-light text-gold transition-colors duration-300 group-hover:text-gold-light">
                  VANILLA
                </span>
              </span>
            </a>
            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              100%植物性・グルテンフリー。和の発酵技術で創る、次世代のプレミアム業務用ヴィーガンアイスクリーム。
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-semibold text-text-secondary tracking-widest uppercase mb-4 text-gold/80">
              Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#product-lines"
                  className="text-sm text-text-muted hover:text-cream transition-colors duration-300 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-300" />
                  ラインナップ
                </a>
              </li>
              <li>
                <a
                  href="#business-value"
                  className="text-sm text-text-muted hover:text-cream transition-colors duration-300 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-300" />
                  収益性
                </a>
              </li>
              <li>
                <a
                  href="#conversion-cta"
                  className="text-sm text-text-muted hover:text-cream transition-colors duration-300 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-300" />
                  無料サンプル請求
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-xs font-semibold text-text-secondary tracking-widest uppercase mb-4 text-gold/80">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-text-muted hover:text-cream transition-colors duration-300 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-300" />
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-muted hover:text-cream transition-colors duration-300 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-300" />
                  特定商取引法に基づく表記
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-text-muted tracking-wider">
            &copy; 2026 UMAMI VANILLA. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="#"
                className="p-2 rounded-full text-text-muted hover:text-gold hover:bg-white/5 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="#"
                className="p-2 rounded-full text-text-muted hover:text-gold hover:bg-white/5 transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center justify-center p-2.5 rounded-full border border-border text-text-muted hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 focus:outline-none cursor-pointer"
              aria-label="ページトップへ戻る"
              title="ページトップへ戻る"
            >
              <svg
                className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
