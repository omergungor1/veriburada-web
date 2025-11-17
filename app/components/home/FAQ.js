'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Kalan krediler ne olur?',
    answer: 'Kredileriniz hesabınızda saklanır ve istediğiniz zaman kullanabilirsiniz. Kredileriniz süresiz geçerlidir.',
  },
  {
    question: 'Veriler nasıl elde edilir?',
    answer: 'Verilerimiz Google Haritalar API\'sini kullanarak otomatik olarak toplanır ve güncellenir. Tüm veriler yasal ve etik yollarla elde edilir.',
  },
  {
    question: 'Ne zaman teslim edilir?',
    answer: 'Siparişleriniz 24 saat içinde hazırlanır ve size CSV veya Excel formatında teslim edilir. Büyük siparişler için süre 48 saate kadar uzayabilir.',
  },
  {
    question: 'KVKK\'ya uygun mu?',
    answer: 'Evet, tüm veri işleme süreçlerimiz KVKK (Kişisel Verilerin Korunması Kanunu) ve GDPR uyumludur. Verileriniz güvenli bir şekilde işlenir ve saklanır.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111827] mb-12">
          Sık Sorulan Sorular
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 text-left flex items-center justify-between hover:text-[#1A73E8] transition-colors"
              >
                <span className="font-semibold text-lg text-[#111827]">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-[#1A73E8] transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

