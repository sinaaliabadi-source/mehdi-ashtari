import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehdi Ashtari | BA Lab",
  description: "فضای آموزشی و تصمیم‌محور برای تحلیل کسب‌وکار و BABOK",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} font-sans bg-navy-900 text-white`}>
        <div className="gradient-ring min-h-screen">
          <Header />
          <main className="pb-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
