import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MECコーチング | マインドエンジニアリングコーチング",
  description: "認知科学に基づく最先端のコーチング手法で理想の自分を実現。森山雄太によるマインドエンジニアリングコーチング（MEC）。",
  keywords: "コーチング,認知科学,ゴール設定,エフィカシー,コンフォートゾーン,森山雄太,MEC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className={notoSansJP.className}>
        {children}
      </body>
    </html>
  );
}