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
              <span className="text-xl font-bold bg-gradient-to-r from-[#1A73E8] to-[#0D47A1] bg-clip-text text-transparent">
                Veri Burada
              </span>
              <span className="text-xs text-gray-500 -mt-1 hidden sm:block">
                Google Maps Veri Platformu
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#1A73E8] transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-[#1A73E8] transition-colors">
              Pricing
            </Link>
            <Link href="/icerik-merkezi" className="text-gray-700 hover:text-[#1A73E8] transition-colors">
              İçerik Merkezi
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-[#1A73E8] transition-colors">
              İletişim
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://app.veriburada.com/login"
              className="text-gray-700 hover:text-[#1A73E8] transition-colors"
            >
              Giriş Yap
            </Link>
            <Link
              href="https://app.veriburada.com/register"
              className="bg-[#1A73E8] text-white px-4 py-2 rounded-lg hover:bg-[#0D47A1] transition-colors"
            >
              Kayıt Ol
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
            <Link href="/" className="block text-gray-700 hover:text-[#1A73E8]">
              Ana Sayfa
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-[#1A73E8]">
              Pricing
            </Link>
            <Link href="/icerik-merkezi" className="block text-gray-700 hover:text-[#1A73E8]">
              İçerik Merkezi
            </Link>
            <Link href="/iletisim" className="block text-gray-700 hover:text-[#1A73E8]">
              İletişim
            </Link>
            <div className="pt-4 border-t space-y-2">
              <Link
                href="https://app.veriburada.com/login"
                className="block text-gray-700 hover:text-[#1A73E8]"
              >
                Giriş Yap
              </Link>
              <Link
                href="https://app.veriburada.com/register"
                className="block bg-[#1A73E8] text-white px-4 py-2 rounded-lg text-center hover:bg-[#0D47A1]"
              >
                Kayıt Ol
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

