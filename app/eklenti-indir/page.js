'use client';

import Link from 'next/link';

export default function EklentiIndirPage() {
    const downloadLink = 'https://zpzoykdqnwdularrisfp.supabase.co/storage/v1/object/public/extension-builds/veriburada-mapbot-v1.2.0.zip';
    const chromeExtensionsLink = 'chrome://extensions';

    const handleDownload = () => {
        window.open(downloadLink, '_blank');
    };

    const steps = [
        {
            number: 1,
            title: 'Eklentiyi İndirin',
            description: 'Aşağıdaki "Eklentiyi İndir" butonuna tıklayarak eklentiyi .zip formatında bilgisayarınıza indirin.',
        },
        {
            number: 2,
            title: 'Dosyayı Dışarı Çıkartın',
            description: 'İndirdiğiniz .zip dosyasını sağ tıklayıp "Dışarı Çıkart" veya "Extract" seçeneğini kullanarak bir klasöre çıkartın.',
        },
        {
            number: 3,
            title: 'Chrome Uzantılar Sayfasını Açın',
            description: (
                <>
                    Tarayıcınızın adres çubuğuna{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">chrome://extensions</code>{' '}
                    yazın veya{' '}
                    <a
                        href={chromeExtensionsLink}
                        className="text-blue-600 hover:underline font-semibold"
                    >
                        buraya tıklayın
                    </a>
                    .
                </>
            ),
        },
        {
            number: 4,
            title: 'Geliştirici Modunu Açın',
            description: 'Sayfanın sağ üst köşesinde bulunan "Geliştirici modu" (Developer mode) anahtarını açık konuma getirin.',
        },
        {
            number: 5,
            title: 'Paketlenmemiş Öğe Yükle',
            description: 'Sayfanın sol üst köşesinde bulunan "Paketlenmemiş öğe yükle" (Load unpacked) butonuna tıklayın.',
        },
        {
            number: 6,
            title: 'Klasörü Seçin',
            description: 'Açılan pencerede, 2. adımda çıkarttığınız klasörü seçin ve "Klasör Seç" (Select Folder) butonuna tıklayın.',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
                        VeriBurada MapBot Eklentisi
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Google Haritalar'dan işletme verilerini kolayca çıkarmanızı sağlayan güçlü Chrome eklentisi
                    </p>
                </div>

                {/* Download Button */}
                <div className="text-center mb-16">
                    <button
                        onClick={handleDownload}
                        className="group bg-[#111827] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1F2937] transition-all shadow-lg hover:shadow-xl flex items-center gap-3 justify-center mx-auto"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>Eklentiyi İndir (v1.2.0)</span>
                    </button>
                    <p className="text-sm text-gray-500 mt-3">
                        Dosya boyutu: ~300 KB | Format: ZIP
                    </p>
                </div>

                {/* Installation Steps */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
                    <h2 className="text-3xl font-bold text-[#111827] mb-8 text-center">
                        Kurulum Talimatları
                    </h2>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="flex gap-6 items-start"
                            >
                                {/* Step Number */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-lg">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div className="flex-1 pt-1">
                                    <h3 className="text-xl font-semibold text-[#111827] mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                    <div className="flex items-start gap-4">
                        <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h3 className="font-semibold text-[#111827] mb-2">Önemli Notlar</h3>
                            <ul className="text-gray-700 space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>Eklenti yalnızca Google Chrome tarayıcısında çalışmaktadır.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>Kurulum sırasında Chrome'un uyarı mesajlarını görmezden gelebilirsiniz.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>Eklentiyi kullanmak için aktif bir VeriBurada hesabınız olmalıdır.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>Herhangi bir sorun yaşarsanız WhatsApp destek hattımızdan bize ulaşabilirsiniz.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-[#111827] transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Ana Sayfaya Dön</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

