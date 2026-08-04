import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import JsonLd from "@/app/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "UMAMI | 業務用プレミアムヴィーガンアイスクリーム",
  description:
    "100%植物性・グルテンフリー。和の発酵技術（甘酒・白味噌）が生む、インバウンド需要とアレルギー対策を網羅する次世代の業務用ヴィーガンアイス。高級ホテル・和食店・ヘルスカフェ向け無料サンプル受付中。",
  keywords: [
    "ヴィーガンアイスクリーム",
    "業務用",
    "プレミアム",
    "植物性",
    "グルテンフリー",
    "インバウンド対応",
    "アレルギー対応",
    "甘酒",
    "白味噌",
    "発酵",
    "ホテルデザート",
    "和食デザート",
    "vegan ice cream",
    "B2B",
  ],
  openGraph: {
    title: "UMAMI | 業務用プレミアムヴィーガンアイスクリーム",
    description:
      "100%植物性・グルテンフリー。和の発酵技術が生む、次世代の業務用ヴィーガンアイス。無料サンプル受付中。",
    type: "website",
    locale: "ja_JP",
    siteName: "UMAMI",
  },
  twitter: {
    card: "summary_large_image",
    title: "UMAMI | 業務用プレミアムヴィーガンアイスクリーム",
    description:
      "100%植物性・グルテンフリー。和の発酵技術が生む、次世代の業務用ヴィーガンアイス。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
