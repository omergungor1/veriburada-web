'use client';

import Link from 'next/link';

const pricingPlans = [
  {
    name: '1 Aylık',
    description: 'Kısa süreli kullanım için',
    price: '₺499',
    months: 1,
    monthlyPrice: '₺499',
    features: [
      'MapBot eklentisi',
      'Sınırsız kullanım hakkı',
      '1 ay lisans süresi',
      'İstediğiniz zaman lisans uzatma',
      'Lansman fiyatı',
    ],
    nonRefundable: true,
    bgColor: 'bg-green-50',
    popular: false,
  },
  {
    name: '3 Aylık',
    description: 'Orta vadeli kullanım',
    price: '₺999',
    months: 3,
    monthlyPrice: '₺333',
    features: [
      'MapBot eklentisi',
      'Sınırsız kullanım hakkı',
      '3 ay lisans süresi',
      'İstediğiniz zaman lisans uzatma',
      'Lansman fiyatı',
    ],
    nonRefundable: true,
    bgColor: 'bg-blue-50',
    popular: false,
  },
  {
    name: '6 Aylık',
    description: 'Uzun vadeli kullanım',
    price: '₺1.499',
    months: 6,
    monthlyPrice: '₺250',
    features: [
      'MapBot eklentisi',
      'Sınırsız kullanım hakkı',
      '6 ay lisans süresi',
      'İstediğiniz zaman lisans uzatma',
      'Lansman fiyatı',
    ],
    nonRefundable: true,
    bgColor: 'bg-purple-50',
    popular: true,
  },
  {
    name: '12 Aylık',
    description: 'En ekonomik seçenek',
    price: '₺2.499',
    months: 12,
    monthlyPrice: '₺208',
    features: [
      'MapBot eklentisi',
      'Sınırsız kullanım hakkı',
      '12 ay lisans süresi',
      'İstediğiniz zaman lisans uzatma',
      'Lansman fiyatı',
      'En ekonomik paket',
    ],
    nonRefundable: true,
    bgColor: 'bg-purple-50',
    popular: false,
    bestValue: true,
  },
];

export default function PricingCards({ isVisible = true, showTitle = false }) {
  return (
    <div className="max-w-6xl mx-auto">
      {showTitle && (
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            MapBot eklentisi fiyatlandırma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sınırsız kullanım hakkı ile MapBot eklentisini satın alın. İstediğiniz zaman lisans sürenizi uzatabilirsiniz. Lansman fiyatlarıyla büyük paketler daha ekonomik!
          </p>
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative ${plan.bgColor} rounded-2xl p-6 md:p-8 shadow-lg transform transition-all duration-700 hover:shadow-xl hover:scale-105 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-[#111827] text-white px-4 py-1 text-xs font-bold uppercase transform translate-x-4 -translate-y-2 rotate-12 shadow-lg">
                POPÜLER
              </div>
            )}
            {plan.bestValue && (
              <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-xs font-bold uppercase transform translate-x-4 -translate-y-2 rotate-12 shadow-lg">
                EN İYİ DEĞER
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#111827] mb-2">{plan.name}</h3>
              {plan.description && (
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              )}
              <div className="mb-2">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl md:text-5xl font-bold text-[#111827]">{plan.price}</span>
                </div>
                <p className="text-sm text-gray-600">
                  Aylık <span className="font-semibold text-[#111827]">{plan.monthlyPrice}</span>
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#111827]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
              {plan.nonRefundable && (
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#111827]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">İade edilemez</span>
                </li>
              )}
            </ul>
            <Link
              href="https://www.shopier.com/veriburada/42657455"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#111827] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#1F2937] transition-colors shadow-md hover:shadow-lg"
            >
              <span className="inline-flex items-center gap-2">
                Satın Al
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg font-semibold text-[#111827]">
            Satın alımdan sonra 24 saat içinde hesabınız aktifleştirilir
          </p>
        </div>
        <p className="text-gray-600 text-sm">
          Hesabınız aktifleştirilince mail alacaksınız
        </p>
      </div>
    </div>
  );
}

