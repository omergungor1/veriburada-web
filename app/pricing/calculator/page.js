'use client';

import React, { useState } from 'react';
import { Calculator, MapPin, Hash } from 'lucide-react';

const DataPricingCalculator = () => {
    const [ilSayisi, setIlSayisi] = useState(1);
    const [keywordSayisi, setKeywordSayisi] = useState(1);

    // Sabitler
    const BASE_CREDITS = 400; // 1 il, 1 keyword temel kredi
    const MAX_IL = 81;
    const TURKIYE_1_KEYWORD = 3000;
    const TURKIYE_2_KEYWORD = 4000;

    // Kredi hesaplama formülü - il ve keyword eşit etkili
    const calculateCredits = (ilCount, keywordCount) => {
        if (ilCount < 1 || keywordCount < 1) return 0;

        // Tüm Türkiye için özel kredi
        if (ilCount === MAX_IL) {
            if (keywordCount === 1) return TURKIYE_1_KEYWORD;
            if (keywordCount === 2) return TURKIYE_2_KEYWORD;
            // 3+ keyword için lineer artış
            return TURKIYE_2_KEYWORD + (keywordCount - 2) * 800;
        }

        // İl ve keyword eşit etkili: il × keyword × BASE_CREDITS
        // Örnek: 1 il × 10 keyword = 10 il × 1 keyword = 4000 kredi
        const credits = ilCount * keywordCount * BASE_CREDITS;

        return Math.round(credits);
    };

    const krediAdedi = calculateCredits(ilSayisi, keywordSayisi);

    // Örnek senaryolar
    const scenarios = [
        { il: 1, keyword: 1, label: "1 İl, 1 Keyword" },
        { il: 1, keyword: 2, label: "1 İl, 2 Keyword" },
        { il: 2, keyword: 1, label: "2 İl, 1 Keyword" },
        { il: 3, keyword: 2, label: "3 İl, 2 Keyword" },
        { il: 5, keyword: 3, label: "5 İl, 3 Keyword" },
        { il: 10, keyword: 1, label: "10 İl, 1 Keyword" },
        { il: 81, keyword: 1, label: "Tüm Türkiye, 1 Keyword" },
        { il: 81, keyword: 2, label: "Tüm Türkiye, 2 Keyword" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Calculator className="w-8 h-8 text-indigo-600" />
                        <h1 className="text-3xl font-bold text-gray-800">Kredi Hesaplama</h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* İl Sayısı */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                                <MapPin className="w-5 h-5 text-indigo-600" />
                                İl Sayısı: {ilSayisi} {ilSayisi === MAX_IL && "(Tüm Türkiye)"}
                            </label>
                            <input
                                type="range"
                                min="1"
                                max={MAX_IL}
                                value={ilSayisi}
                                onChange={(e) => setIlSayisi(parseInt(e.target.value))}
                                className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>1</span>
                                <span>81</span>
                            </div>
                        </div>

                        {/* Keyword Sayısı */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                                <Hash className="w-5 h-5 text-indigo-600" />
                                Anahtar Kelime Sayısı: {keywordSayisi}
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="10"
                                value={keywordSayisi}
                                onChange={(e) => setKeywordSayisi(parseInt(e.target.value))}
                                className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>1</span>
                                <span>10</span>
                            </div>
                        </div>
                    </div>

                    {/* Kredi Gösterimi */}
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-center text-white">
                        <div className="text-sm font-semibold mb-2 opacity-90">TOPLAM KREDİ</div>
                        <div className="text-5xl font-bold mb-2">{krediAdedi.toLocaleString('tr-TR')}</div>
                        <div className="text-sm opacity-80">
                            {ilSayisi} il × {keywordSayisi} keyword
                        </div>
                    </div>
                </div>

                {/* Formül Açıklaması */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">📐 Fiyatlandırma Formülü</h2>
                    <div className="space-y-3 text-gray-700">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="font-mono text-sm mb-2">
                                <strong>Temel Fiyat:</strong> 400 ₺ (1 il, 1 keyword)
                            </p>
                            <p className="font-mono text-sm">
                                <strong>Kredi = </strong>İl_Adedi × Keyword_Adedi × 400
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                İl ve keyword eşit etkili: 1 il × 10 keyword = 10 il × 1 keyword = 4,000 kredi
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2 text-green-800">İl Adedi</h3>
                                <p className="text-sm text-gray-700">1 il → 1x</p>
                                <p className="text-sm text-gray-700">2 il → 2x</p>
                                <p className="text-sm text-gray-700">5 il → 5x</p>
                                <p className="text-sm text-gray-700">10 il → 10x</p>
                                <p className="text-sm text-gray-700">81 il → Özel fiyat</p>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2 text-purple-800">Keyword Adedi</h3>
                                <p className="text-sm text-gray-700">1 keyword → 1x</p>
                                <p className="text-sm text-gray-700">2 keyword → 2x</p>
                                <p className="text-sm text-gray-700">3 keyword → 3x</p>
                                <p className="text-sm text-gray-700">5 keyword → 5x</p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                            <h3 className="font-semibold mb-2 text-yellow-800">Özel Krediler</h3>
                            <p className="text-sm text-gray-700">• Tüm Türkiye (81 il) + 1 keyword = 3,000 kredi</p>
                            <p className="text-sm text-gray-700">• Tüm Türkiye (81 il) + 2 keyword = 4,000 kredi</p>
                        </div>
                    </div>
                </div>

                {/* Örnek Senaryolar */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">📊 Örnek Senaryolar</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {scenarios.map((scenario, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => {
                                    setIlSayisi(scenario.il);
                                    setKeywordSayisi(scenario.keyword);
                                }}
                            >
                                <div className="text-xs text-gray-600 mb-2">{scenario.label}</div>
                                <div className="text-2xl font-bold text-indigo-600">
                                    {calculateCredits(scenario.il, scenario.keyword).toLocaleString('tr-TR')} kredi
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataPricingCalculator;