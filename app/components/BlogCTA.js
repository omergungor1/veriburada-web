import Link from 'next/link';

export default function DownloadCTA() {
    return (
        <section className="bg-gradient-to-br from-[#7BC87B] to-[#5FA85F] rounded-xl shadow-lg p-8 md:p-12 my-12">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Google Maps'ten Toplu İşletme Listesi mi Almanız Lazım?
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                    Doğru yerdesiniz! Veriburada MapBot eklentimizi hemen indirin ve binlerce işletme listesini kolayca toplayın.
                    Tek tıkla telefon numaraları, adresler ve iletişim bilgilerine erişin. Sınırsız veri toplama ile işinizi büyütün.
                </p>
                <Link
                    href="/eklenti-indir"
                    className="inline-flex items-center gap-3 bg-white text-[#7BC87B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Hemen İndir
                </Link>
            </div>
        </section>
    );
}

