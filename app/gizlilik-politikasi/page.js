export const metadata = {
  title: 'Gizlilik Politikası - Veriburada',
  description: 'Veriburada gizlilik politikası ve kişisel verilerin korunması.',
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-8">
            Gizlilik Politikası
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">1. Kişisel Verilerin Korunması</h2>
              <p className="text-gray-700 leading-relaxed">
                Veriburada olarak, kişisel verilerinizin korunmasına büyük önem veriyoruz. Tüm veri işleme 
                süreçlerimiz KVKK (Kişisel Verilerin Korunması Kanunu) ve GDPR uyumludur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">2. Toplanan Veriler</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Platformu kullanırken topladığımız veriler:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Ad, soyad ve iletişim bilgileri</li>
                <li>Email adresi</li>
                <li>Ödeme bilgileri (güvenli ödeme sağlayıcıları üzerinden)</li>
                <li>Kullanım verileri ve analitik bilgiler</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">3. Verilerin Kullanımı</h2>
              <p className="text-gray-700 leading-relaxed">
                Toplanan veriler, hizmetlerimizi sunmak, iyileştirmek ve yasal yükümlülüklerimizi yerine 
                getirmek için kullanılır. Verileriniz üçüncü taraflarla paylaşılmaz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">4. Veri Güvenliği</h2>
              <p className="text-gray-700 leading-relaxed">
                Tüm verileriniz şifrelenmiş olarak saklanır ve güvenli sunucularda tutulur. Veri güvenliği 
                için en son teknolojileri kullanıyoruz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">5. Haklarınız</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                KVKK kapsamında sahip olduğunuz haklar:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kişisel verilerinize erişim hakkı</li>
                <li>Verilerinizin düzeltilmesini talep etme hakkı</li>
                <li>Verilerinizin silinmesini talep etme hakkı</li>
                <li>Veri işlemeye itiraz etme hakkı</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">6. İletişim</h2>
              <p className="text-gray-700 leading-relaxed">
                Gizlilik politikası ile ilgili sorularınız için iletişim sayfamızdan bize ulaşabilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

