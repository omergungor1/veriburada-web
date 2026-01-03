'use client';

import { useState } from 'react';
import PricingCards from '../components/PricingCards';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            MapBot Eklenti Fiyatlandırma
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sınırsız kullanım hakkı ile MapBot eklentisini satın alın. İstediğiniz zaman lisans sürenizi uzatabilirsiniz. Lansman fiyatlarıyla büyük paketler daha ekonomik!
          </p>
        </div>

        {/* Fiyat Kartları */}
        <PricingCards isVisible={true} showTitle={false} />

      </div>
    </div>
  );
}

