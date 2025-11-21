'use client';

import { useState, useEffect, useRef } from 'react';

const dataFields = [
  'Arama Terimi',
  'İşletme Adı',
  'İl',
  'İlçe',
  'Posta Kodu',
  'Açık Adres',
  'Plus Kod',
  'Telefon',
  'Web Site',
  'Latitude',
  'Longitude',
  'Puan',
  'Yorum Adedi',
  'İşletme Türü',
  'Map URL',
];

const INITIAL_VISIBLE_COUNT = 12;

export default function DataFields() {
  const [isExpanded, setIsExpanded] = useState(false);
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
      { threshold: 0.1 }
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

  const visibleFields = isExpanded ? dataFields : dataFields.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = dataFields.length > INITIAL_VISIBLE_COUNT;

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111827] mb-4">
            Google İşletme Profillerinden Topladığımız Veriler
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Her işletme için ihtiyacınız olan tüm bilgileri topluca elde edin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          {visibleFields.map((field, index) => {
            const isFaded = !isExpanded && index >= INITIAL_VISIBLE_COUNT;
            return (
              <div
                key={index}
                className={`flex items-center transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${isFaded ? 'opacity-30' : ''}`}
                style={{
                  transitionDelay: `${(index % INITIAL_VISIBLE_COUNT) * 30}ms`,
                }}
              >
                <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm md:text-base">{field}</span>
              </div>
            );
          })}
        </div>

        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-[#1F2937] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isExpanded ? (
                <>
                  <span>Daha Az Göster</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span>Daha Fazla Göster</span>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </>
              )}
            </button>
          </div>
        )}
      </div>

    </section>
  );
}

