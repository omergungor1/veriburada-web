'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const typewriterTexts = [
  "İstanbul'daki çilingir listesi...",
  "Ankara'daki eczaneler listesi...",
  "Türkiye'deki restoran listesi...",
  "İzmir'deki nalburlar...",
  "Antalya'daki beyaz eşya servisleri...",
];

const businessCounts = [694, 245, 1203, 567, 892, 1345];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const text = typewriterTexts[currentTextIndex];
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
      setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCount((prev) => (prev + 1) % businessCounts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
            Google Haritalardaki İşletme Verilerini<br />
            <span className="text-[#1A73E8]">1 Gün İçinde</span> Teslim Ediyoruz
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Türkiye'nin en kapsamlı işletme veri platformu. 1.7M+ konum, telefon numarası ve iletişim bilgilerine anında erişin.
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
              <span className="font-bold text-[#1A73E8]">{businessCounts[currentCount]}</span> işletme bulundu
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.veriburada.com/register"
              className="bg-[#FF6F00] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E65100] transition-colors shadow-lg hover:shadow-xl"
            >
              100 Hediye Kredi ile Hemen Başla
            </Link>
            <Link
              href="/pricing"
              className="bg-white text-[#1A73E8] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#1A73E8] hover:bg-[#E3F2FD] transition-colors"
            >
              Fiyatları Gör
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

