import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppSupport from "./components/WhatsAppSupport";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Veriburada",
  description: "Google Haritalardaki işletme profil verilerini 1 gün içinde teslim ediyoruz. 1.7M+ konum, telefon numarası ve iletişim bilgileri.",
  keywords: "google maps veri, işletme verileri, lead generation, veri çıkarma",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Veriburada",
    description: "Google Haritalardaki işletme profil verilerini 1 gün içinde teslim ediyoruz.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${nunito.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppSupport />
      </body>
    </html>
  );
}
