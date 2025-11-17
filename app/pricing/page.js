'use client';

import Link from 'next/link';

const creditPackages = [
  {
    credits: 1000,
    price: 1000,
    originalPrice: 1000,
    discount: 0,
    popular: false,
    campaignCode: 'PKG1000',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['Temel Paket', 'Hızlı Başlangıç'],
  },
  {
    credits: 2000,
    price: 1900,
    originalPrice: 2000,
    discount: 5,
    popular: true,
    campaignCode: 'PKG2000',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ['%5 İndirim', 'Popüler Seçim'],
  },
  {
    credits: 3000,
    price: 2700,
    originalPrice: 3000,
    discount: 10,
    popular: false,
    campaignCode: 'PKG3000',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    features: ['%10 İndirim', 'En İyi Değer'],
  },
  {
    credits: 10000,
    price: 8000,
    originalPrice: 10000,
    discount: 20,
    popular: false,
    campaignCode: 'PKG10000',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    features: ['%20 İndirim', 'Maksimum Tasarruf'],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#E3F2FD] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Fiyatlandırma
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Esnek kredi paketleri ile ihtiyacınıza göre veri alın. Ne kadar çok kredi alırsanız, birim fiyat o kadar düşer.
          </p>
        </div>

        {/* Kredi Paketleri */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#111827] mb-8 text-center">
            Kredi Paketleri
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creditPackages.map((pkg) => (
              <div
                key={pkg.credits}
                className={`bg-white rounded-2xl shadow-xl p-6 relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${pkg.popular ? 'ring-4 ring-[#FF6F00] ring-opacity-50' : ''
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-[#FF6F00] to-[#FF8F00] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Popüler
                    </span>
                  </div>
                )}

                {pkg.discount > 0 && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform rotate-12">
                      <div className="text-center">
                        <div className="text-xs font-bold">-%{pkg.discount}</div>
                        <div className="text-[10px]">İNDİRİM</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${pkg.popular
                        ? 'bg-gradient-to-br from-[#FF6F00] to-[#FF8F00] text-white'
                        : 'bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] text-white'
                      } shadow-lg`}>
                      {pkg.icon}
                    </div>
                  </div>

                  {/* Kredi Miktarı */}
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#1A73E8] to-[#0D47A1] bg-clip-text text-transparent mb-2">
                    {pkg.credits.toLocaleString()}
                  </div>
                  <div className="text-gray-500 mb-4 font-medium">Kredi</div>

                  {/* Fiyat */}
                  <div className="mb-2">
                    {pkg.discount > 0 ? (
                      <>
                        <div className="text-sm text-gray-400 line-through mb-1">
                          {pkg.originalPrice.toLocaleString()} TL
                        </div>
                        <div className="text-3xl font-bold text-[#111827]">
                          {pkg.price.toLocaleString()} TL
                        </div>
                      </>
                    ) : (
                      <div className="text-3xl font-bold text-[#111827]">
                        {pkg.price.toLocaleString()} TL
                      </div>
                    )}
                  </div>

                  {/* Birim Fiyat */}
                  <div className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold text-[#1A73E8]">
                      {(pkg.price / pkg.credits).toFixed(3)} TL/kredi
                    </span>
                  </div>

                  {/* Özellikler */}
                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`https://app.veriburada.com/register?campaign=${pkg.campaignCode}`}
                    className={`block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl ${pkg.popular
                        ? 'bg-gradient-to-r from-[#FF6F00] to-[#FF8F00] text-white hover:from-[#E65100] hover:to-[#FF6F00]'
                        : 'bg-gradient-to-r from-[#1A73E8] to-[#0D47A1] text-white hover:from-[#0D47A1] hover:to-[#1A73E8]'
                      }`}
                  >
                    Hemen Al
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hesaplama Aracı Butonu */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] rounded-lg shadow-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Kaç Kredi Lazım?
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              İl ve keyword sayısına göre ihtiyacınız olan kredi miktarını hesaplayın
            </p>
            <Link
              href="/pricing/calculator"
              className="inline-flex items-center gap-2 bg-[#FF6F00] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#E65100] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Hemen Hesapla
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

