'use client';

import { useState } from 'react';
import PricingCards from '../components/PricingCards';

export default function PricingPage() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [ilSayisi, setIlSayisi] = useState(1);
  const [keywordSayisi, setKeywordSayisi] = useState(1);
  const [tumTurkiye, setTumTurkiye] = useState(false);

  const MAX_IL = 81;
  const BASE_CREDITS = 400; // 1 il, 1 keyword temel kredi
  const TURKIYE_1_KEYWORD = 3000;
  const TURKIYE_2_KEYWORD = 4000;

  // Kredi hesaplama - il ve keyword eşit etkili
  const calculateCredits = () => {
    const ilCount = tumTurkiye ? MAX_IL : ilSayisi;

    if (ilCount < 1 || keywordSayisi < 1) return 0;

    // Tüm Türkiye için özel kredi
    if (ilCount === MAX_IL) {
      if (keywordSayisi === 1) return TURKIYE_1_KEYWORD;
      if (keywordSayisi === 2) return TURKIYE_2_KEYWORD;
      // 3+ keyword için lineer artış
      return TURKIYE_2_KEYWORD + (keywordSayisi - 2) * 800;
    }

    // İl ve keyword eşit etkili: il × keyword × BASE_CREDITS
    // Örnek: 1 il × 10 keyword = 10 il × 1 keyword = 4000 kredi
    const credits = ilCount * keywordSayisi * BASE_CREDITS;

    return Math.round(credits);
  };

  const krediAdedi = calculateCredits();

  const handleIlChange = (delta) => {
    if (tumTurkiye) {
      setTumTurkiye(false);
      setIlSayisi(MAX_IL);
      return;
    }
    const newValue = Math.max(1, Math.min(MAX_IL, ilSayisi + delta));
    setIlSayisi(newValue);
    if (newValue === MAX_IL) {
      setTumTurkiye(true);
    }
  };

  const handleKeywordChange = (delta) => {
    const newValue = Math.max(1, keywordSayisi + delta);
    setKeywordSayisi(newValue);
  };

  const handleTumTurkiyeToggle = () => {
    setTumTurkiye(!tumTurkiye);
    if (!tumTurkiye) {
      setIlSayisi(MAX_IL);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Fiyatlandırma
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Esnek kredi paketleri ile ihtiyacınıza göre veri alın. Ne kadar çok kredi alırsanız, birim fiyat o kadar düşer.
          </p>
        </div>

        {/* Fiyat Kartları */}
        <PricingCards isVisible={true} showTitle={false} />

        {/* Hesaplama Aracı Butonu */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-[#7BC87B] to-[#5FA85F] rounded-lg shadow-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Kaç Kredi Lazım?
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              İl ve keyword sayısına göre ihtiyacınız olan kredi miktarını hesaplayın
            </p>
            <button
              onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
              className="inline-flex items-center gap-2 bg-[#7BC87B] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#5FA85F] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              {isCalculatorOpen ? 'Hesaplayıcıyı Kapat' : 'Hemen Hesapla'}
            </button>
          </div>

          {/* Hesaplama Aracı */}
          {isCalculatorOpen && (
            <div className="mt-6 bg-white rounded-2xl shadow-xl p-8 border-2 border-[#7BC87B]">
              <div className="space-y-6">
                {/* İl Sayısı */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-lg font-semibold text-[#111827] flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#7BC87B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      İl Adedi
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleIlChange(-1)}
                        className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                        disabled={tumTurkiye}
                      >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="text-2xl font-bold text-[#111827] min-w-[80px] text-center">
                        {tumTurkiye ? MAX_IL : ilSayisi}
                      </span>
                      <button
                        onClick={() => handleIlChange(1)}
                        className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                        disabled={tumTurkiye || ilSayisi >= MAX_IL}
                      >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="tumTurkiye"
                      checked={tumTurkiye}
                      onChange={handleTumTurkiyeToggle}
                      className="w-5 h-5 text-[#7BC87B] rounded"
                    />
                    <label htmlFor="tumTurkiye" className="text-gray-700 cursor-pointer">
                      Tüm Türkiye ({MAX_IL} il)
                    </label>
                  </div>
                </div>

                {/* Keyword Sayısı */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-lg font-semibold text-[#111827] flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#7BC87B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      Anahtar Kelime Sayısı
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleKeywordChange(-1)}
                        className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                        disabled={keywordSayisi <= 1}
                      >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="text-2xl font-bold text-[#111827] min-w-[80px] text-center">
                        {keywordSayisi}
                      </span>
                      <button
                        onClick={() => handleKeywordChange(1)}
                        className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sonuç */}
                <div className="bg-gradient-to-r from-[#7BC87B] to-[#5FA85F] rounded-xl p-8 text-center text-white">
                  <div className="text-sm font-semibold mb-2 opacity-90">TOPLAM KREDİ</div>
                  <div className="text-5xl font-bold mb-2">{krediAdedi.toLocaleString('tr-TR')}</div>
                  <div className="text-sm opacity-80">
                    {tumTurkiye ? MAX_IL : ilSayisi} il × {keywordSayisi} keyword
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

