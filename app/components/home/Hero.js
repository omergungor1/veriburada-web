'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const businessData = [
  { text: "İstanbul çilingir listesi...", count: 894 },
  { text: "Ankara eczaneler listesi...", count: 1.245 },
  { text: "Türkiye restoranlar listesi...", count: 51.203 },
  { text: "İzmir nalburcular listesi...", count: 567 },
  { text: "Antalya beyaz eşya servisleri...", count: 892 },
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = businessData[currentTextIndex].text;
    let timeout;

    if (!isDeleting && displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % businessData.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section className="relative bg-gradient-to-br from-[#E3F2FD] to-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A73E8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
            Google İşletme Listesini<br />
            <span className="text-[#1A73E8]">1 Gün İçinde</span> Teslim Ediyoruz
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Google Haritalar'daki milyonlarca işletmeyi elde edin. Türkiye genelinde 2M+ işletme verisi, telefon numarası ve iletişim bilgilerine tek tıkla erişin. Hızlı, güncel ve doğru verilerle işinizi büyütün.
          </p>

          {/* Typewriter Effect */}
          <div className="mb-8 min-h-[60px]">
            <p className="text-2xl md:text-3xl font-semibold text-[#1A73E8]">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Dynamic Business Count */}
          <div className="mb-8 inline-block bg-white px-6 py-3 rounded-full shadow-lg">
            <p className="text-lg text-gray-700">
              <span className="font-bold text-[#1A73E8]">{businessData[currentTextIndex].count}</span> işletme bulundu
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.veriburada.com/register"
              className="group bg-[#FF6F00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#E65100] transition-all shadow-lg hover:shadow-xl flex items-center gap-3 relative overflow-hidden"
            >
              <span>100 Hediye Kredi ile Hemen Başla</span>
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-4 h-4 text-[#FF6F00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/pricing"
              className="group bg-white text-[#1A73E8] px-8 py-4 rounded-full font-semibold text-lg border-2 border-[#1A73E8] hover:bg-[#E3F2FD] transition-all shadow-lg hover:shadow-xl flex items-center gap-3 relative overflow-hidden"
            >
              <span>Fiyatları Gör</span>
              <span className="w-8 h-8 rounded-full bg-[#1A73E8] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

