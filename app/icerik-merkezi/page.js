'use client';

import { useState } from 'react';
import Link from 'next/link';

const contentTypes = [
  { id: 'all', name: 'Tümü' },
  { id: 'ready-lists', name: 'Hazır Veri Listeleri' },
  { id: 'city-category', name: 'Şehir × Kategori Listeleri' },
  { id: 'category-landing', name: 'Kategori Bazlı Landing Pageler' },
  { id: 'blog', name: 'Blog Yazıları' },
  { id: 'case-studies', name: 'Case Studies (Vaka Çalışmaları)' },
];

const sampleContent = [
  { type: 'ready-lists', title: 'İstanbul Çilingir Listesi', description: 'İstanbul\'daki tüm çilingir işletmelerinin detaylı listesi', link: '/hazir-veri-listeleri/istanbul-cilingir-listesi' },
  { type: 'ready-lists', title: 'İzmir Kuaför Listesi', description: 'İzmir\'deki kuaför salonlarının kapsamlı veri seti', link: '/hazir-veri-listeleri/izmir-kuafor-listesi' },
  { type: 'ready-lists', title: 'Adana Eczaneler Listesi', description: 'Adana\'daki eczanelerin iletişim bilgileri', link: '/hazir-veri-listeleri/adana-eczaneler-listesi' },
  { type: 'city-category', title: 'İzmir Eczane Listesi', description: 'İzmir şehrindeki eczaneler', link: '/izmir/eczane-listesi' },
  { type: 'city-category', title: 'Antalya Beyaz Eşya Servisi', description: 'Antalya\'daki beyaz eşya servisleri', link: '/antalya/beyaz-esya-servisi-listesi' },
  { type: 'category-landing', title: 'Eczane Listesi', description: 'Türkiye genelindeki eczaneler', link: '/kategori/eczane-listesi' },
  { type: 'category-landing', title: 'Tamirci Veri Paketi', description: 'Tüm tamirci işletmeleri', link: '/kategori/tamirci-veri-paketi' },
  { type: 'blog', title: 'Google Maps Veri Çıkarma Rehberi', description: 'Google Maps\'ten veri çıkarma yöntemleri', link: '/blog/google-maps-veri-cikarma-rehberi' },
  { type: 'case-studies', title: 'E-ticaret Firması Başarı Hikayesi', description: '3.200 yeni müşteri kazandıran strateji', link: '/case-studies/e-ticaret-firmasi-basari-hikayesi' },
];

export default function IcerikMerkeziPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredContent = activeTab === 'all' 
    ? sampleContent 
    : sampleContent.filter(item => item.type === activeTab);

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Veri Merkezi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Google Haritalar verilerine dayalı ücretsiz veri listeleri, SEO uyumlu kategori & şehir sayfaları, analizler ve vaka çalışmaları.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {contentTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === type.id
                  ? 'bg-[#1A73E8] text-white'
                  : 'bg-white text-gray-700 hover:bg-[#E3F2FD]'
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#111827] mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

