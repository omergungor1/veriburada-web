'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Macbook bilgisayarda çalışır mı?',
    answer: 'Evet, MapBot eklentisi hem Windows hem de macOS (Macbook) bilgisayarlarda sorunsuz çalışır. Platform bağımsız olarak tüm bilgisayarlarda aynı performansı gösterir.',
  },
  {
    question: 'Aylık paket ile yıllık paket arasındaki fark nedir?',
    answer: 'Paketler arasındaki tek fark lisans süresidir. 1 aylık paket 1 ay, 12 aylık paket 12 ay geçerlidir. Tüm paketlerde sınırsız kullanım hakkı vardır. Ne kadar uzun süreli paket alırsanız, aylık maliyetiniz o kadar düşer. Örneğin 12 aylık paket aylık sadece 208₺\'ye gelirken, 1 aylık paket 499₺\'dir.',
  },
  {
    question: 'Abonelik paketini nereden satın almam gerekir?',
    answer: 'Abonelik paketlerini Shopier üzerinden satın alabilirsiniz. Fiyatlandırma sayfasındaki "Satın Al" butonuna tıklayarak Shopier\'a yönlendirilirsiniz. Satın alımdan sonra 24 saat içinde hesabınız aktifleştirilir ve mail alacaksınız.',
  },
  {
    question: 'Daha sonra otomatik para çekilir mi?',
    answer: 'Hayır, otomatik para çekme yapılmaz. Satın aldığınız paketin lisans süresi sona erince eklenti kullanımınıza kapatılır. Tekrar abonelik alana kadar eklentiyi kullanamazsınız. Yeni paket satın almak tamamen size bağlıdır.',
  },
  {
    question: 'Hangi tarayıcıda çalışır?',
    answer: 'MapBot eklentisi özellikle Google Chrome tarayıcısında çalışır. Ayrıca tüm Chromium tabanlı tarayıcılarda (Microsoft Edge, Brave, Opera vb.) da çalışır. Chrome kullanmanızı öneriyoruz.',
  },
  {
    question: 'İstediğim verileri toplaması kaç saat sürer?',
    answer: 'İstediğiniz veri boyutuna göre veri toplama süresi değişkenlik gösterir. Örneğin İstanbul berber listesini yaklaşık 1 saatte çekerken, Türkiye geneli tüm berber listesi yaklaşık 13 saat sürer. Bu sürede sizin bir şey yapmanız gerekmez. Sadece bilgisayarın otomatik ekran koruyucu ve uyku özelliğini kapatmanız yeterli. Eklenti tam otomatik olarak çalışmasını tamamlar ve verileri indirilebilir formatta hazırlar. Tek tuş ile verileri indirirsiniz. Bu süre internet hızınız, işlemci ve RAM gibi faktörlere bağlı olarak değişkenlik gösterebilir.',
  },
  {
    question: 'Excel olarak çıktı almam mümkün mü?',
    answer: 'Verileri CSV formatında indiriyoruz. Microsoft Excel veya Google E-Tablolar\'da Dosya > İçeri Aktar > İndirdiğiniz CSV dosyasını seçerseniz otomatik Excel tablosu olarak açılacaktır. Tüm yazılımlar ile CSV uyumludur.',
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

