const cityCategoryData = {
  'izmir': {
    'eczane-listesi': {
      title: 'İzmir Eczane Listesi',
      description: 'İzmir şehrindeki tüm eczanelerin detaylı listesi.',
      businessCount: 450,
    },
  },
  'antalya': {
    'beyaz-esya-servisi-listesi': {
      title: 'Antalya Beyaz Eşya Servisi Listesi',
      description: 'Antalya\'daki beyaz eşya servislerinin kapsamlı veri seti.',
      businessCount: 120,
    },
  },
  'bursa': {
    'cilingir-listesi': {
      title: 'Bursa Çilingir Listesi',
      description: 'Bursa\'daki çilingir işletmelerinin listesi.',
      businessCount: 85,
    },
  },
};

const faqs = [
  {
    question: 'Bu listede kaç işletme var?',
    answer: 'Liste sürekli güncellenmektedir. Güncel sayı için sipariş oluşturun.',
  },
  {
    question: 'Veriler ne zaman teslim edilir?',
    answer: 'Siparişleriniz 24 saat içinde hazırlanır ve size teslim edilir.',
  },
];

export async function generateStaticParams() {
  const params = [];
  for (const city in cityCategoryData) {
    for (const category in cityCategoryData[city]) {
      params.push({ city, category });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const data = cityCategoryData[params.city]?.[params.category];
  if (!data) return { title: 'Sayfa Bulunamadı' };
  return {
    title: `${data.title} - Veriburada`,
    description: data.description,
  };
}

export default function SehirKategoriPage({ params }) {
  const data = cityCategoryData[params.city]?.[params.category];

  if (!data) {
    return <div>Sayfa bulunamadı</div>;
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
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">İşletme Sayısı</h2>
            <div className="text-4xl font-bold text-[#7BC87B] mb-2">
              {data.businessCount}+
            </div>
            <p className="text-gray-600">işletme bulundu</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">Veri Örnekleri</h2>
            <p className="text-gray-700 mb-4">
              Bu listede her işletme için şu bilgiler bulunur:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>İşletme adı ve tam adres</li>
              <li>Telefon numarası</li>
              <li>Email adresi (varsa)</li>
              <li>Website (varsa)</li>
              <li>Sosyal medya hesapları</li>
              <li>Çalışma saatleri</li>
              <li>Yorumlar ve puanlar</li>
              <li>Koordinatlar (enlem/boylam)</li>
            </ul>
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
              Bu Listeyi 1 Gün İçinde Al
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

