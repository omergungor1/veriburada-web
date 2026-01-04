import Link from 'next/link';

export default function Footer() {
  const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana'];
  const categories = [
    { slug: 'eczane-listesi', name: 'Eczane Listesi' },
    { slug: 'kuafor-listesi', name: 'Kuaför Listesi' },
    { slug: 'tamirci-veri-paketi', name: 'Tamirci Veri Paketi' },
    { slug: 'beyaz-esya-servisi-listesi', name: 'Beyaz Eşya Servisi' },
  ];

  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/listeler" className="hover:text-white transition-colors">
                  Hazır Listeler
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Fiyatlar
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Şehir Bazlı Linkler */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Şehir Listeleri</h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city}>
                  <Link
                    href={`/sehir/${city.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {city} Listeleri
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Kategori Bazlı Linkler */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Kategori Listeleri</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/kategori/${category.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Hukuki & Bilgi */}
          <div>
            <h3 className="text-white font-semibold mb-4">Bilgi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} VeriBurada. Tüm hakları saklıdır.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              Potansiyel müşteri bulmanın en kolay yolu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

