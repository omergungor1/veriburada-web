import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#1A73E8] mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="bg-[#FF6F00] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E65100] transition-colors shadow-lg"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/icerik-merkezi"
            className="bg-white text-[#1A73E8] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#1A73E8] hover:bg-[#E3F2FD] transition-colors"
          >
            İçerik Merkezi
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
          <Link
            href="/pricing"
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-[#1A73E8]"
          >
            <div className="font-semibold">Fiyatlar</div>
          </Link>
          <Link
            href="/hazir-veri-listeleri"
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-[#1A73E8]"
          >
            <div className="font-semibold">Hazır Listeler</div>
          </Link>
          <Link
            href="/blog"
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-[#1A73E8]"
          >
            <div className="font-semibold">Blog</div>
          </Link>
          <Link
            href="/iletisim"
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-[#1A73E8]"
          >
            <div className="font-semibold">İletişim</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

