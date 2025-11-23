export const metadata = {
  title: 'Hakkımızda - Veriburada',
  description: 'Veriburada hakkında bilgiler. Misyonumuz, vizyonumuz ve değerlerimiz.',
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-8 text-center">
            Hakkımızda
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">Misyonumuz</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Veriburada olarak, Google Haritalardaki işletme verilerini hızlı, güvenilir ve uygun fiyatlı bir şekilde 
              müşterilerimize sunmayı hedefliyoruz. İşletmelerin büyümesine katkı sağlayarak, Türkiye'deki veri 
              ekosistemine değer katıyoruz.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">Vizyonumuz</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Türkiye'nin en güvenilir ve kapsamlı işletme veri platformu olmak. Müşterilerimize en güncel ve 
              doğru verileri sunarak, iş kararlarını desteklemek ve büyümelerine katkıda bulunmak.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">Değerlerimiz</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7BC87B] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-[#111827]">Güvenilirlik:</strong> Tüm verilerimiz düzenli olarak güncellenir ve doğruluğu garanti edilir.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7BC87B] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-[#111827]">Hız:</strong> Siparişleriniz 24 saat içinde hazırlanır ve size teslim edilir.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7BC87B] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-[#111827]">Gizlilik:</strong> KVKK ve GDPR uyumlu olarak verileriniz güvende.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7BC87B] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-[#111827]">Müşteri Odaklılık:</strong> Müşteri memnuniyeti bizim önceliğimizdir.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">İletişim</h2>
            <p className="text-gray-700 mb-4">
              Sorularınız için bizimle iletişime geçebilirsiniz.
            </p>
            <a
              href="/iletisim"
              className="inline-block bg-[#7BC87B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5FA85F] transition-colors"
            >
              İletişim Sayfasına Git
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

