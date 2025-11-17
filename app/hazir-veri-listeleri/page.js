import Link from 'next/link';

const readyLists = [
  {
    slug: 'istanbul-cilingir-listesi',
    title: 'İstanbul Çilingir Listesi',
    description: 'İstanbul\'daki tüm çilingir işletmelerinin detaylı listesi. Telefon, adres, çalışma saatleri ve daha fazlası.',
    businessCount: 450,
  },
  {
    slug: 'izmir-kuafor-listesi',
    title: 'İzmir Kuaför Listesi',
    description: 'İzmir\'deki kuaför salonlarının kapsamlı veri seti. İletişim bilgileri ve sosyal medya hesapları dahil.',
    businessCount: 320,
  },
  {
    slug: 'adana-eczaneler-listesi',
    title: 'Adana Eczaneler Listesi',
    description: 'Adana\'daki eczanelerin iletişim bilgileri, adresleri ve çalışma saatleri.',
    businessCount: 280,
  },
];

export const metadata = {
  title: 'Hazır Veri Listeleri - Veriburada',
  description: 'Ücretsiz örnek veri listeleri. İstanbul çilingir, İzmir kuaför, Adana eczane listeleri ve daha fazlası.',
};

export default function HazirVeriListeleriPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Hazır Veri Listeleri
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ücretsiz örnek veri listelerimizi indirerek kalitemizi test edin. Tüm listeler CSV ve Excel formatında.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {readyLists.map((list) => (
            <Link
              key={list.slug}
              href={`/hazir-veri-listeleri/${list.slug}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#111827] mb-2">{list.title}</h3>
              <p className="text-gray-600 mb-4">{list.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{list.businessCount} işletme</span>
                <span className="text-[#1A73E8] font-semibold">İndir →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

