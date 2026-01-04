'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Veriburada Logo"
              width={150}
              height={40}
              className="h-10 w-auto transition-transform group-hover:scale-105"
              priority
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-[#7BC87B] to-[#5FA85F] bg-clip-text text-transparent">
                Veri Burada
              </span>
              <span className="text-xs text-gray-500 -mt-1 hidden sm:block">
                Tüm işletmeler bir tık uzağında...
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#7BC87B] transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#7BC87B] transition-colors">
              Blog
            </Link>
            <Link href="/listeler" className="text-gray-700 hover:text-[#7BC87B] transition-colors">
              Listeler
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-[#7BC87B] transition-colors">
              Fiyatlandırma
            </Link>
            <Link href="/hakkimizda" className="text-gray-700 hover:text-[#7BC87B] transition-colors">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-[#7BC87B] transition-colors">
              İletişim
            </Link>
          </div>

          {/* Eklenti İndir Butonu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/eklenti-indir"
              className="bg-[#7BC87B] text-white px-4 py-2 rounded-lg hover:bg-[#5FA85F] transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Eklentiyi İndir
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <Link href="/" className="block text-gray-700 hover:text-[#7BC87B]">
              Ana Sayfa
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-[#7BC87B]">
              Fiyatlandırma
            </Link>
            {/* <Link href="/icerik-merkezi" className="block text-gray-700 hover:text-[#7BC87B]">
              İçerik Merkezi
            </Link> */}
            <Link href="/hakkimizda" className="block text-gray-700 hover:text-[#7BC87B]">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="block text-gray-700 hover:text-[#7BC87B]">
              İletişim
            </Link>
            <div className="pt-4 border-t space-y-2">
              <Link
                href="/eklenti-indir"
                className="block bg-[#7BC87B] text-white px-4 py-2 rounded-lg hover:bg-[#5FA85F] transition-colors text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Eklentiyi İndir
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

