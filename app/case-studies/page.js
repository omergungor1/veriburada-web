import Link from 'next/link';

const caseStudies = [
  {
    slug: 'e-ticaret-firmasi-basari-hikayesi',
    title: 'Bir E-ticaret Firması Google Maps Verisi ile 3.200 Yeni Müşteri Kazandı',
    description: 'E-ticaret firması, Veriburada verilerini kullanarak 3.200 yeni müşteriye ulaştı.',
    dataType: 'E-ticaret İşletmeleri',
    problem: 'Yeni müşterilere ulaşmakta zorlanıyordu.',
    solution: 'Google Maps verilerini kullanarak hedef kitleye direkt ulaştı.',
    results: '3.200 yeni müşteri, %45 satış artışı',
  },
  {
    slug: 'beyaz-esya-servisi-basari',
    title: 'Bir Beyaz Eşya Servisi 3 İl Ekleyerek 8.000 TL Ek Gelir Elde Etti',
    description: 'Beyaz eşya servisi, yeni illerdeki potansiyel müşterilere ulaşarak gelirini artırdı.',
    dataType: 'Beyaz Eşya Servisleri',
    problem: 'Mevcut pazarda büyüme sınırlıydı.',
    solution: 'Yeni illerdeki işletmelere ulaşmak için veri kullandı.',
    results: '8.000 TL ek gelir, 3 yeni il',
  },
  {
    slug: 'reklam-ajansi-basari',
    title: 'Bir Reklam Ajansı 40.000 Uzman Veri ile 11 Müşteriye Lead Üretti',
    description: 'Reklam ajansı, uzman verilerini kullanarak 11 yeni müşteri kazandı.',
    dataType: 'Uzman İşletmeler',
    problem: 'Hedef kitleye ulaşmak zordu.',
    solution: '40.000 uzman verisi ile kampanya oluşturdu.',
    results: '11 yeni müşteri, %320 ROI',
  },
];

export const metadata = {
  title: 'Vaka Çalışmaları - Veriburada',
  description: 'Müşterilerimizin Veriburada ile elde ettiği başarı hikayeleri.',
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Vaka Çalışmaları
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Müşterilerimizin Veriburada ile elde ettiği başarı hikayeleri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#111827] mb-3">{study.title}</h3>
              <p className="text-gray-600 mb-4">{study.description}</p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Kullanılan Veri:</span>
                  <span className="text-gray-600 ml-2">{study.dataType}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Sonuç:</span>
                  <span className="text-[#7BC87B] ml-2 font-semibold">{study.results}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

