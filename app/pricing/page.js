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
            Esnek kredi paketleri ile ihtiyacınıza göre veri satın alın. Ne kadar çok kredi alırsanız, birim fiyat o kadar düşer.
          </p>
        </div>

        {/* Fiyat Kartları */}
        <PricingCards isVisible={true} showTitle={false} />

      </div>
    </div>
  );
}

