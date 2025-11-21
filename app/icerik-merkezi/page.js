'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getBlogsByType } from './blog-data';

const contentTypes = [
  { id: 'all', name: 'Tümü', label: 'Tümü' },
  { id: 'ready-lists', name: 'Hazır Veri Listeleri', label: 'Hazır Liste' },
  { id: 'blog', name: 'Blog Yazıları', label: 'Blog' },
  { id: 'case-studies', name: 'Case Studies (Vaka Çalışmaları)', label: 'Vaka Çalışması' },
];

const getTypeLabel = (type) => {
  const typeObj = contentTypes.find(t => t.id === type);
  return typeObj ? typeObj.label : type;
};

const getTypeColor = (type) => {
  switch (type) {
    case 'ready-lists':
      return 'bg-green-100 text-green-800';
    case 'blog':
      return 'bg-blue-100 text-blue-800';
    case 'case-studies':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

function IcerikMerkeziContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const tab = searchParams.get('tab') || 'all';
    setActiveTab(tab);
  }, [searchParams]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const params = new URLSearchParams(searchParams.toString());
    if (tabId === 'all') {
      params.delete('tab');
    } else {
      params.set('tab', tabId);
    }
    router.push(`/icerik-merkezi${params.toString() ? `?${params.toString()}` : ''}`, { scroll: false });
  };

  const filteredContent = getBlogsByType(activeTab);

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            İçerik Merkezi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Google Haritalar verilerine dayalı ücretsiz veri listeleri, SEO uyumlu blog yazıları, analizler ve vaka çalışmaları.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {contentTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTabChange(type.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === type.id
                ? 'bg-[#1A73E8] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-[#E3F2FD] hover:shadow-md'
                }`}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={`/icerik-merkezi/${item.slug}?previous_tab=${activeTab}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {item.image && (
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">{item.title.charAt(0)}</span>
                  </div>
                </div>
              )}
              <div className="p-6">
                {!item.image && (
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#1A73E8] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                {item.hasGoogleSheet && (
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#1A73E8] font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Google Sheet Mevcut
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IcerikMerkeziPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F9FAFB] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-96 mx-auto mb-12"></div>
            </div>
          </div>
        </div>
      </div>
    }>
      <IcerikMerkeziContent />
    </Suspense>
  );
}

