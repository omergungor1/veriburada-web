const categoryData = {
  'eczane-listesi': {
    title: 'Eczane Listesi',
    description: 'Türkiye genelindeki tüm eczanelerin kapsamlı veri seti.',
    businessCount: 25000,
    importance: 'Eczaneler, sağlık sektörünün kritik bir parçasıdır. İlaç dağıtımı, danışmanlık ve sağlık hizmetleri sunan bu işletmeler, pazarlama ve lojistik stratejileri için önemli veri kaynaklarıdır.',
    sampleCities: ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya'],
  },
  'tamirci-veri-paketi': {
    title: 'Tamirci Veri Paketi',
    description: 'Tüm tamirci işletmelerinin detaylı bilgileri.',
    businessCount: 15000,
    importance: 'Tamirci işletmeleri, ev ve iş yerlerindeki teknik sorunları çözen önemli hizmet sağlayıcılardır. Bu veriler, lojistik ve hizmet ağı planlaması için kritiktir.',
    sampleCities: ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Adana'],
  },
  'kuafor-listesi': {
    title: 'Kuaför Listesi',
    description: 'Türkiye\'deki kuaför salonlarının kapsamlı listesi.',
    businessCount: 18000,
    importance: 'Kuaför salonları, güzellik ve bakım sektörünün temel taşlarıdır. Bu veriler, sektörel analiz ve pazarlama kampanyaları için değerlidir.',
    sampleCities: ['İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa'],
  },
  'beyaz-esya-servisi-listesi': {
    title: 'Beyaz Eşya Servisi Listesi',
    description: 'Beyaz eşya servislerinin detaylı veri seti.',
    businessCount: 8000,
    importance: 'Beyaz eşya servisleri, ev aletlerinin bakım ve onarımında kritik rol oynar. Bu veriler, teknik destek ve müşteri hizmetleri için önemlidir.',
    sampleCities: ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Konya'],
  },
};

const faqs = [
  {
    question: 'Bu kategori için kaç işletme var?',
    answer: 'Kategori bazlı işletme sayıları sürekli güncellenmektedir. Detaylı bilgi için iletişime geçin.',
  },
  {
    question: 'Veriler ne sıklıkla güncellenir?',
    answer: 'Tüm verilerimiz aylık olarak güncellenir ve en güncel bilgileri sunarız.',
  },
  {
    question: 'Hangi formatlarda veri alabilirim?',
    answer: 'Veriler CSV ve Excel formatlarında teslim edilir.',
  },
];

export async function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const data = categoryData[params.slug];

  if (!data) {
    return {
      title: 'Kategori Bulunamadı - Veriburada',
      description: 'Aradığınız kategori bulunamadı.',
    };
  }

  return {
    title: `${data.title} - Veriburada`,
    description: data.description,
  };
}

export default function KategoriPage({ params }) {
  const data = categoryData[params.slug];

  if (!data) {
    return <div>Kategori bulunamadı</div>;
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            {data.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{data.description}</p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">Türkiye Genelindeki İşletme Sayısı</h2>
            <div className="text-4xl font-bold text-[#7BC87B] mb-2">
              {data.businessCount.toLocaleString()}+
            </div>
            <p className="text-gray-600">işletme</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">Kategorinin Önemi</h2>
            <p className="text-gray-700 leading-relaxed">{data.importance}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">Örnek İller</h2>
            <div className="flex flex-wrap gap-2">
              {data.sampleCities.map((city) => (
                <a
                  key={city}
                  href={`/sehir/${city.toLowerCase()}/${params.slug}`}
                  className="bg-[#E8F8E8] text-[#7BC87B] px-4 py-2 rounded-lg hover:bg-[#7BC87B] hover:text-white transition-colors"
                >
                  {city}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-[#111827] mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://app.veriburada.com/login"
              className="inline-block bg-[#7BC87B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#5FA85F] transition-colors shadow-lg"
            >
              Hemen Başla
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

