'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Kalan krediler ne olur?',
    answer: 'Kalan kredileriniz hesabınızda saklanır ve istediğiniz zaman kullanabilirsiniz. Hediye kredilerin geçerlilik süresi 1 aydır, satın alınan kredilerin geçerlilik süresi ise 1 yıldır.',
  },
  {
    question: 'Veriler nasıl elde edilir?',
    answer: 'Verilerimiz Google Haritalar API\'sini kullanarak elde edilir.',
  },
  {
    question: 'Ne zaman teslim edilir?',
    answer: 'Veri talepleriniz 1 ila 3 iş günü içinde teslim edilir. Veriler panelinize yüklenir ve kolayca indirilebilir. Süre istenilen işletme adedine göre değişkenlik gösterebilir.',
  }
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
                className="w-full py-6 text-left flex items-center justify-between hover:text-[#7BC87B] transition-colors"
              >
                <span className="font-semibold text-lg text-[#111827]">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-[#7BC87B] transform transition-transform ${openIndex === index ? 'rotate-180' : ''
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

