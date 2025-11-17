import Link from 'next/link';

const steps = [
  {
    number: 1,
    title: 'Hesap açın',
    description: 'Hemen ücretsiz hesap oluşturun ve 100 hediye kredi kazanın.',
    cta: 'Kayıt Ol',
    ctaLink: 'https://app.veriburada.com/register',
  },
  {
    number: 2,
    title: 'Kredi yükleyin',
    description: 'Kredi paketleri: 1000, 2000, 5000, 10000 kredi seçenekleri.',
    cta: null,
    ctaLink: null,
  },
  {
    number: 3,
    title: 'Veri siparişinizi oluşturun',
    description: 'İl seç + kategori seç + keyword ekle. Siparişinizi dakikalar içinde oluşturun.',
    cta: null,
    ctaLink: null,
  },
  {
    number: 4,
    title: '1 Gün içinde veri elinizde',
    description: 'Siparişiniz 24 saat içinde hazır. CSV veya Excel formatında indirin.',
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
              <div className="bg-[#E3F2FD] rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                {step.cta && (
                  <Link
                    href={step.ctaLink}
                    className="inline-block bg-[#1A73E8] text-white px-4 py-2 rounded-lg hover:bg-[#0D47A1] transition-colors text-sm font-semibold"
                  >
                    {step.cta}
                  </Link>
                )}
              </div>
              {step.number < steps.length && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#1A73E8] transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-[#1A73E8] border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="https://app.veriburada.com/register"
            className="inline-block bg-[#FF6F00] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E65100] transition-colors shadow-lg"
          >
            Ücretsiz 100 kredi ile hemen başla
          </Link>
        </div>
      </div>
    </section>
  );
}

