'use client';

import Link from 'next/link';

const pricingPlans = [
  {
    name: 'Test Paketi',
    description: 'Küçük testler ve deneme kullanımı için uygundur',
    price: '₺249',
    credits: '150',
    freeCrmMonths: 1,
    features: [
      '150 kredi/işletme',
      '1 yıl geçerlilik',
      'İlk 1 ay ücretsiz CRM panel erişimi',
      '1-3 iş günü veri teslimi',
      'WhatsApp destek hattı',
      'CRM paneli veya veri indirme seçeneği',
    ],
    nonRefundable: true,
    bgColor: 'bg-green-50',
    popular: false,
  },
  {
    name: 'Başlangıç',
    description: 'Küçük ekipler ve düzenli kullanım',
    price: '₺990',
    credits: '1.000',
    freeCrmMonths: 1,
    features: [
      '1.000 kredi/işletme',
      '1 yıl geçerlilik',
      'İlk 1 ay ücretsiz CRM panel erişimi',
      '1-3 iş günü veri teslimi',
      'WhatsApp destek hattı',
      'CRM paneli veya veri indirme seçeneği',
    ],
    nonRefundable: true,
    bgColor: 'bg-green-50',
    popular: false,
  },
  {
    name: 'Popüler',
    description: 'Aktif satış ve pazarlama ekipleri',
    price: '₺3.990',
    credits: '5.000',
    freeCrmMonths: 1,
    features: [
      '5.000 kredi/işletme',
      '1 yıl geçerlilik',
      'İlk 1 ay ücretsiz CRM panel erişimi',
      '1-3 iş günü veri teslimi',
      'WhatsApp destek hattı',
      'CRM paneli veya veri indirme seçeneği',
    ],
    nonRefundable: true,
    bgColor: 'bg-green-50',
    popular: true,
  },
  {
    name: 'Profesyonel',
    description: 'Ölçeklenen operasyonlar',
    price: '₺6.990',
    credits: '10.000',
    freeCrmMonths: 2,
    features: [
      '10.000 kredi/işletme',
      '1 yıl geçerlilik',
      'İlk 2 ay ücretsiz CRM panel erişimi',
      '1-3 iş günü veri teslimi',
      'WhatsApp destek hattı',
      'CRM paneli veya veri indirme seçeneği',
    ],
    nonRefundable: true,
    bgColor: 'bg-blue-50',
    popular: false,
  },
  {
    name: 'İşletme',
    description: 'Yüksek hacimli veri toplama',
    price: '₺11.990',
    credits: '20.000',
    freeCrmMonths: 2,
    features: [
      '20.000 kredi/işletme',
      '1 yıl geçerlilik',
      'İlk 2 ay ücretsiz CRM panel erişimi',
      '1-3 iş günü veri teslimi',
      'WhatsApp destek hattı',
      'CRM paneli veya veri indirme seçeneği',
    ],
    nonRefundable: true,
    bgColor: 'bg-purple-50',
    popular: false,
  },
  {
    name: 'Kurumsal',
    description: 'Büyük ekipler ve ajanslar',
    price: '₺21.990',
    credits: '50.000',
    freeCrmMonths: 3,
    features: [
      '50.000 kredi/işletme',
      '1 yıl geçerlilik',
      'İlk 3 ay ücretsiz CRM panel erişimi',
      '1-3 iş günü veri teslimi',
      'WhatsApp destek hattı',
      'CRM paneli veya veri indirme seçeneği',
    ],
    nonRefundable: true,
    bgColor: 'bg-purple-50',
    popular: false,
  },
];

export default function PricingCards({ isVisible = true, showTitle = false }) {
  return (
    <div className="max-w-6xl mx-auto">
      {showTitle && (
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Basit ve Uygun Fiyatlandırma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kredini yükle, dilediğin zaman kullan. Bir yıl geçerlilik, ihtiyacın kadar veri çekme. Aylık abonelik yok, sadece ihtiyacın kadar öde.
          </p>
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#111827] mb-2">{plan.name}</h3>
              {plan.description && (
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              )}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl md:text-5xl font-bold text-[#111827]">{plan.price}</span>
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
              href="https://www.shopier.com/veriburada/42302576"
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
    </div>
  );
}

