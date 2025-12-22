import Link from 'next/link';

const steps = [
  {
    number: 1,
    title: 'Hesap açın',
    description: 'Hemen hesabınızı oluşturun.',
    cta: 'Kayıt Ol',
    ctaLink: 'https://app.veriburada.com/login',
  },
  {
    number: 2,
    title: 'Kredi yükleyin',
    description: 'Kredi paketleri: 150, 1.000, 5.000, 10.000, 20.000, 50.000 kredi seçenekleri.',
    cta: null,
    ctaLink: null,
  },
  {
    number: 3,
    title: 'Veri siparişinizi oluşturun',
    description: 'Hangi il, ilçedeki işletmeleri toplamak istediğinizi seçin ve siparişinizi oluşturun.',
    cta: null,
    ctaLink: null,
  },
  {
    number: 4,
    title: 'İşletme Listenizi İndirin',
    description: 'Siparişiniz 1-3 gün içinde hazır, CSV veya VCF formatında indirin. (Süre istenilen işletme adedine göre değişkenlik gösterebilir)',
    cta: null,
    ctaLink: null,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111827] mb-12">
          Nasıl Çalışır?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-[#E8F8E8] rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-[#7BC87B] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                {step.cta && (
                  <Link
                    href={step.ctaLink}
                    className="inline-block bg-[#7BC87B] text-white px-4 py-2 rounded-lg hover:bg-[#5FA85F] transition-colors text-sm font-semibold"
                  >
                    {step.cta}
                  </Link>
                )}
              </div>
              {step.number < steps.length && (
                <div className="hidden lg:block absolute top-1/2 -right-7 w-6 h-0.5 bg-[#7BC87B] transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-[#7BC87B] border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="https://app.veriburada.com/login"
            className="inline-block bg-[#7BC87B] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#5FA85F] transition-colors shadow-lg hover:shadow-xl"
          >
            Hemen Başla
          </Link>
        </div>
      </div>
    </section>
  );
}

