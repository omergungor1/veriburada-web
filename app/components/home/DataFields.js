'use client';

import { useState, useEffect, useRef } from 'react';

const dataFields = [
  'Keyword',
  'Name',
  'Full Address',
  'Street Address',
  'City',
  'Zip',
  'Municipality',
  'Country',
  'Timezone',
  'Pricing',
  'Sub Title',
  'Description',
  'Summary',
  'Phone 1',
  'Phone 2',
  'Email',
  'Website',
  'Domain',
  'First Category',
  'Second Category',
  'Facebook URL',
  'Linkedin URL',
  'Twitter URL',
  'Instagram URL',
  'Youtube URL',
  'Claimed google-my-business',
  'Reviews Count',
  'Average Rating',
  'Prices',
  'Hours',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Service options',
  'Highlights',
  'Accessibility',
  'Offerings',
  'Dining options',
  'Amenities',
  'Atmosphere',
  'Crowd',
  'Planning',
  'Payments',
  'Latitude',
  'Longitude',
  'Coordinates',
  'Place ID',
  'Image URL',
  'Favicon',
  'Review URL',
  'Uuid url',
  'Popular for',
  'From the business',
  'Recycling',
  'Activities'
];

const INITIAL_VISIBLE_COUNT = 15;

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
      className="py-20 bg-gradient-to-br from-[#E3F2FD] via-white to-[#F3E5F5] relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A73E8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 20s ease-in-out infinite',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111827] mb-4">
            Veriburada Size 60+ Veri Alanı Sunar
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Her işletme için kapsamlı veri seti. İhtiyacınız olan tüm bilgiler tek yerde.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
          {visibleFields.map((field, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm p-4 rounded-xl border-2 border-transparent hover:border-[#1A73E8] transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              style={{
                transitionDelay: `${(index % INITIAL_VISIBLE_COUNT) * 30}ms`,
              }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">{field}</span>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1A73E8] to-[#0D47A1] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#0D47A1] hover:to-[#1A73E8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
            {!isExpanded && (
              <p className="text-gray-500 text-sm mt-3">
                +{dataFields.length - INITIAL_VISIBLE_COUNT} veri alanı daha
              </p>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}

