'use client';

import { useEffect, useRef, useState } from 'react';
import PricingCards from '../PricingCards';

const benefits = [
  {
    title: 'Paket Seç',
    description: 'İhtiyacınıza uygun aylık paketi seçin ve hemen kullanmaya başlayın',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Sınırsız Kullanım',
    description: 'Aylık abonelik ile sınırsız işletme verisi toplayın, hiçbir limit yok',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Otomatik Veri Toplama',
    description: 'Eklenti otomatik olarak çalışır, verileri toplar ve indirmeye hazır hale getirir',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function PricingPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Esnek Fiyatlandırma Bölümü */}
        <div className={`transform transition-all duration-1000 text-center mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Basit ve Uygun Fiyatlandırma
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Aylık abonelik paketlerimizden birini seçin. Ne kadar uzun süre alırsanız, o kadar tasarruf edersiniz. Lansman fiyatlarıyla büyük paketler daha ekonomik!
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#7BC87B] to-[#5FA85F] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fiyat Kartları */}
        <PricingCards isVisible={isVisible} showTitle={true} />
      </div>
    </section>
  );
}

