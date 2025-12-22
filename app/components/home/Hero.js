'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const businessData = [
  {
    text: "İstanbul çilingir listesi...",
    count: 894,
    title: "İstanbul Çilingirler",
    businesses: [
      { name: "Güven Çilingir", logo: "/company-logo/logo-1.png" },
      { name: "Yıldırım Çilingir", logo: "/company-logo/logo-2.png" },
      { name: "Zafer Çilingir", logo: "/company-logo/logo-3.png" },
      { name: "Emre Çilingir", logo: "/company-logo/logo-4.png" }
    ],
    pinPositions: [
      { top: '25%', left: '30%' },
      { top: '45%', left: '55%' },
      { top: '65%', left: '40%' }
    ]
  },
  {
    text: "Ankara eczaneler listesi...",
    count: 1245,
    title: "Ankara Eczaneler",
    businesses: [
      { name: "Merkez Eczanesi", logo: "/company-logo/logo-5.png" },
      { name: "Sağlık Eczanesi", logo: "/company-logo/logo-6.png" },
      { name: "Hilal Eczane", logo: "/company-logo/logo-7.png" },
      { name: "Çelik Eczanesi", logo: "/company-logo/logo-8.png" }
    ],
    pinPositions: [
      { top: '30%', left: '35%' },
      { top: '50%', left: '60%' },
      { top: '70%', left: '45%' }
    ]
  },
  {
    text: "Türkiye restoranlar listesi...",
    count: 51203,
    title: "Türkiye Restoranlar",
    businesses: [
      { name: "Lezzet Kebab", logo: "/company-logo/logo-9.png" },
      { name: "Halil Restoran", logo: "/company-logo/logo-10.png" },
      { name: "Özgür Lokanta", logo: "/company-logo/logo-11.png" },
      { name: "Zafer Döner", logo: "/company-logo/logo-12.png" }
    ],
    pinPositions: [
      { top: '20%', left: '40%' },
      { top: '50%', left: '50%' },
      { top: '75%', left: '35%' }
    ]
  },
  {
    text: "İzmir nalburcular listesi...",
    count: 567,
    title: "İzmir Nalburcular",
    businesses: [
      { name: "Hırdavat Merkezi", logo: "/company-logo/logo-13.png" },
      { name: "Tunç Hırdavat", logo: "/company-logo/logo-14.png" },
      { name: "Kaya Hırdavat", logo: "/company-logo/logo-15.png" },
      { name: "Murat Nalbur", logo: "/company-logo/logo-16.png" }
    ],
    pinPositions: [
      { top: '35%', left: '45%' },
      { top: '55%', left: '30%' },
      { top: '60%', left: '65%' }
    ]
  },
  {
    text: "Antalya beyaz eşya servisleri...",
    count: 892,
    title: "Antalya Beyaz Eşya Servisleri",
    businesses: [
      { name: "Güvenler Beyaz Eşya Servisi", logo: "/company-logo/logo-6.png" },
      { name: "Sahil Beyaz Eşya Servisi", logo: "/company-logo/logo-8.png" },
      { name: "Özgür Yetkili Servisi", logo: "/company-logo/logo-12.png" },
      { name: "Zafer Arçelik Servisi", logo: "/company-logo/logo-13.png" }
    ],
    pinPositions: [
      { top: '28%', left: '38%' },
      { top: '48%', left: '58%' },
      { top: '68%', left: '42%' }
    ]
  },
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);

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

  const currentData = businessData[currentTextIndex];

  return (
    <section className="relative bg-gradient-to-br from-[#E8F8E8] to-white py-12 lg:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237BC87B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight relative">
              {/* Google İşletme Listesini{' '}
              <span className="text-[#7BC87B]">1 Gün İçinde</span>{' '}
              Teslim Ediyoruz */}
              Google haritalardaki işletme listesi elinizde
              <button
                type="button"
                className="ml-3 relative inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-[#E8F8E8] hover:bg-[#7BC87B] active:bg-[#7BC87B] transition-colors group align-middle z-50"
                onMouseEnter={() => setShowInfoTooltip(true)}
                onMouseLeave={() => setShowInfoTooltip(false)}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowInfoTooltip(!showInfoTooltip);
                }}
                aria-label="Teslim süresi bilgisi"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#7BC87B] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {/* Tooltip */}
                {showInfoTooltip && (
                  <>
                    {/* Mobile overlay to close on outside click */}
                    <div
                      className="fixed inset-0 z-40 sm:hidden"
                      onClick={() => setShowInfoTooltip(false)}
                    />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-[calc(100vw-2rem)] sm:w-80 max-w-sm z-50 sm:z-50">
                      <div className="bg-white rounded-lg shadow-2xl p-4 border border-gray-200 mx-auto">
                        <div className="text-sm text-gray-700 leading-relaxed">
                          <p className="font-semibold text-[#111827] mb-2">Teslim Süresi Hakkında</p>
                          <p className="mb-2">
                            Teslim süresi, sipariş ettiğiniz veri setinin büyüklüğüne ve sunucularımızın yoğunluğuna göre değişkenlik gösterebilir.
                          </p>
                          <p className="mb-2">
                            <strong className="text-[#7BC87B]">Genellikle 1 gün içinde</strong> işletme listesi teslim edilmektedir.
                          </p>
                          <p>
                            Yoğun günlerde bu süre <strong>1 ila 3 iş günü</strong> arasında değişebilir.
                          </p>
                        </div>
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                          <div className="w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </button>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Google Haritalar'daki milyonlarca işletmeyi elde edin. Türkiye genelinde 2M+ işletme verisi, telefon numarası ve iletişim bilgilerine tek tıkla erişin. Hızlı, güncel ve doğru verilerle işinizi büyütün.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="https://app.veriburada.com/register"
                className="group bg-[#090A0A] text-white px-4 py-4 rounded-full font-semibold text-lg hover:bg-[#1F2937] transition-all shadow-lg hover:shadow-xl flex items-center gap-3 justify-center relative"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Hemen Başla</span>
              </Link>
              <Link
                href="/pricing"
                className="group bg-white text-[#7BC87B] px-8 py-4 rounded-full font-semibold text-lg border-2 border-[#7BC87B] hover:bg-[#E8F8E8] transition-all shadow-lg hover:shadow-xl flex items-center gap-3 justify-center"
              >
                <span>Fiyatlandırma</span>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E8F8E8] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#7BC87B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Hediye 100 Kredi</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E8F8E8] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#7BC87B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Güncel Veri</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E8F8E8] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#7BC87B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Sınırsız Potansiyel Müşteri</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E8F8E8] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#7BC87B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">WhatsApp Destek Hattı</span>
              </div>
            </div>
          </div>

          {/* Right Side - Map with Overlays */}
          <div className="order-2 lg:order-2 relative">
            <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto scale-[0.8] origin-center">
              {/* Typewriter Text Overlay on Map */}
              <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 z-20 w-full px-4">
                <div className="bg-white/95 backdrop-blur-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-lg mx-auto max-w-fit">
                  <p className="text-xl sm:text-base md:text-lg font-semibold text-[#7BC87B] text-center whitespace-nowrap">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>

              {/* Map Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/map.png"
                  alt="Google Maps"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Map Pins - Scale Animation */}
                {currentData.pinPositions.map((position, index) => (
                  <div
                    key={`${currentTextIndex}-${index}`}
                    className="absolute z-10 transition-all duration-500 ease-in-out"
                    style={{
                      top: position.top,
                      left: position.left,
                      transform: 'translate(-50%, -100%)',
                    }}
                  >
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#7BC87B] drop-shadow-lg pin-scale"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                ))}

                {/* Business Count Badge - Bottom Left */}
                <div className="absolute cursor-pointer bottom-2 sm:bottom-4 left-2 sm:left-4 z-20">
                  <div className="bg-white rounded-full shadow-xl px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 flex items-center gap-1.5 sm:gap-2 md:gap-3">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#7BC87B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <div className='flex gap-1 sm:gap-2 items-center justify-center'>
                      <p className="text-sm sm:text-base md:text-xl font-bold text-[#111827]">
                        {currentData.count.toLocaleString('tr-TR')}
                      </p>
                      <p className="text-xs sm:text-sm md:text-md text-gray-600 hidden sm:inline">işletme bulundu</p>
                      <p className="text-xs text-gray-600 sm:hidden">işletme bulundu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business List - Right Side (Mobile & Desktop) */}
              <div className="absolute -right-20 md:-right-30 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 lg:translate-x-8 xl:translate-x-12 z-30 w-40 sm:w-48 md:w-56 lg:w-64">
                <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-3 md:p-4 w-full">
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#111827] mb-1.5 sm:mb-2 md:mb-3">
                    {currentData.title}
                  </h3>
                  <div className="space-y-0">
                    {currentData.businesses.map((business, index) => (
                      <div
                        key={index}
                        className={`flex cursor-pointer items-center gap-1.5 sm:gap-2 py-1 sm:py-1.5 md:py-2 px-1.5 sm:px-2 hover:bg-[#E8F8E8] transition-colors ${index < currentData.businesses.length - 1 ? 'border-b border-gray-100' : ''
                          }`}
                      >
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full overflow-hidden bg-gray-100">
                          <Image
                            src={business.logo}
                            alt={business.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs font-medium text-gray-700 flex-1 leading-tight">
                          {business.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-600 text-center">
                      <span className="font-semibold text-[#7BC87B]">{currentData.count.toLocaleString('tr-TR')}</span> işletme bulundu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

