const caseStudies = {
  'e-ticaret-firmasi-basari-hikayesi': {
    title: 'Bir E-ticaret Firması Google Maps Verisi ile 3.200 Yeni Müşteri Kazandı',
    dataType: 'E-ticaret İşletmeleri',
    problem: 'E-ticaret firması, yeni müşterilere ulaşmakta zorlanıyordu. Geleneksel pazarlama yöntemleri yeterli sonuç vermiyordu.',
    solution: 'Veriburada\'dan aldıkları Google Maps verilerini kullanarak, hedef kitlelerine direkt ulaştılar. Email pazarlama ve telefon satış kampanyaları düzenlediler.',
    results: '3.200 yeni müşteri, %45 satış artışı, %320 ROI',
    details: 'Firma, 6 aylık bir kampanya süresince 50.000 işletme verisine ulaştı ve bunları segmentlere ayırarak hedefli kampanyalar oluşturdu.',
  },
  'beyaz-esya-servisi-basari': {
    title: 'Bir Beyaz Eşya Servisi 3 İl Ekleyerek 8.000 TL Ek Gelir Elde Etti',
    dataType: 'Beyaz Eşya Servisleri',
    problem: 'Mevcut pazarda büyüme sınırlıydı ve yeni pazarlara açılmak için veri eksikliği vardı.',
    solution: 'Yeni illerdeki potansiyel müşterilere ulaşmak için Veriburada verilerini kullandılar. Telefon ve email kampanyaları düzenlediler.',
    results: '8.000 TL ek gelir, 3 yeni il, 150 yeni müşteri',
    details: 'Servis, 3 yeni ildeki 2.000 işletmeye ulaşarak hizmet ağını genişletti.',
  },
  'reklam-ajansi-basari': {
    title: 'Bir Reklam Ajansı 40.000 Uzman Veri ile 11 Müşteriye Lead Üretti',
    dataType: 'Uzman İşletmeler',
    problem: 'Hedef kitleye ulaşmak zordu ve geleneksel yöntemler maliyetliydi.',
    solution: '40.000 uzman verisi ile hedefli bir kampanya oluşturdular. LinkedIn ve email pazarlama kombinasyonu kullandılar.',
    results: '11 yeni müşteri, %320 ROI, 3 ayda geri ödeme',
    details: 'Ajans, veri tabanlı yaklaşımla daha düşük maliyetle daha yüksek dönüşüm elde etti.',
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const study = caseStudies[params.slug];
  if (!study) return { title: 'Vaka Çalışması Bulunamadı' };
  return {
    title: `${study.title} - Veriburada`,
    description: study.problem,
  };
}

export default function CaseStudyPage({ params }) {
  const study = caseStudies[params.slug];

  if (!study) {
    return <div>Vaka çalışması bulunamadı</div>;
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-8">
            {study.title}
          </h1>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">Kullanılan Veri Türü</h2>
              <p className="text-gray-700">{study.dataType}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">Müşterinin Sorunu</h2>
              <p className="text-gray-700 leading-relaxed">{study.problem}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">Verinin Sağladığı Çözüm</h2>
              <p className="text-gray-700 leading-relaxed">{study.solution}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">Sonuçlar</h2>
              <div className="bg-[#E8F8E8] p-4 rounded-lg">
                <p className="text-xl font-semibold text-[#7BC87B]">{study.results}</p>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">{study.details}</p>
            </div>

            <div className="text-center">
              <a
                href="https://app.veriburada.com/register"
                className="inline-block bg-[#7BC87B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#5FA85F] transition-colors shadow-lg"
              >
                Siz de Verinizi Sipariş Edin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

