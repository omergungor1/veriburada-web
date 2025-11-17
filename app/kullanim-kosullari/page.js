export const metadata = {
  title: 'Kullanım Koşulları - Veriburada',
  description: 'Veriburada kullanım koşulları ve şartları.',
};

export default function KullanimKosullariPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-8">
            Kullanım Koşulları
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">1. Genel Hükümler</h2>
              <p className="text-gray-700 leading-relaxed">
                Bu kullanım koşulları, Veriburada platformunu kullanırken geçerlidir. Platformu kullanarak, 
                bu koşulları kabul etmiş sayılırsınız.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">2. Hizmet Kapsamı</h2>
              <p className="text-gray-700 leading-relaxed">
                Veriburada, Google Haritalardaki işletme verilerini müşterilerine sunan bir platformdur. 
                Veriler, yasal ve etik yollarla toplanır ve sunulur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">3. Kullanıcı Sorumlulukları</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kullanıcılar, platformu yasalara uygun şekilde kullanmakla yükümlüdür. Verilerin kötüye 
                kullanımından kullanıcılar sorumludur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">4. Fiyatlandırma ve Ödeme</h2>
              <p className="text-gray-700 leading-relaxed">
                Fiyatlandırma bilgileri platform üzerinde belirtilmiştir. Ödemeler, belirtilen yöntemlerle 
                yapılır ve iade politikası geçerlidir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">5. Gizlilik</h2>
              <p className="text-gray-700 leading-relaxed">
                Kullanıcı verilerinin korunması hakkında detaylı bilgi için Gizlilik Politikası sayfasını 
                inceleyebilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">6. İletişim</h2>
              <p className="text-gray-700 leading-relaxed">
                Sorularınız için iletişim sayfamızdan bize ulaşabilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

