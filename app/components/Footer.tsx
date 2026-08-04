export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-matte-black border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold tracking-[0.3em] text-cream">
              UMAMI
            </span>
            <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-xs">
              100%植物性・グルテンフリー。和の発酵技術で創る、次世代のプレミアム業務用ヴィーガンアイスクリーム。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium text-text-secondary tracking-wider uppercase mb-4">
              Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#product-lines"
                  className="text-sm text-text-muted hover:text-cream transition-colors duration-300"
                >
                  ラインナップ
                </a>
              </li>
              <li>
                <a
                  href="#business-value"
                  className="text-sm text-text-muted hover:text-cream transition-colors duration-300"
                >
                  収益性
                </a>
              </li>
              <li>
                <a
                  href="#conversion-cta"
                  className="text-sm text-text-muted hover:text-cream transition-colors duration-300"
                >
                  無料サンプル請求
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-text-secondary tracking-wider uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm text-text-muted hover:text-cream transition-colors duration-300"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-muted hover:text-cream transition-colors duration-300"
                >
                  特定商取引法に基づく表記
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} UMAMI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="#"
              className="text-text-muted hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="#"
              className="text-text-muted hover:text-gold transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
