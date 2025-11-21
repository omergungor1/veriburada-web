'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getBlogBySlug } from '../blog-data';

export default function BlogDetailPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const slug = params.slug;
    const blog = getBlogBySlug(slug);
    const previousTab = searchParams.get('previous_tab');
    const [showForm, setShowForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
    });

    useEffect(() => {
        // Check if form was already submitted (stored in localStorage)
        const submitted = localStorage.getItem(`form_${slug}`);
        if (submitted === 'true') {
            setFormSubmitted(true);
        }
    }, [slug]);

    if (!blog) {
        return (
            <div className="min-h-screen bg-[#F9FAFB] py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-[#111827] mb-4">İçerik Bulunamadı</h1>
                    <Link href="/icerik-merkezi" className="text-[#1A73E8] hover:underline">
                        İçerik Merkezi'ne Dön
                    </Link>
                </div>
            </div>
        );
    }

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if (!formData.name || !formData.email || !formData.company) {
            return;
        }
        // Store form submission in localStorage
        localStorage.setItem(`form_${slug}`, 'true');
        setFormSubmitted(true);
        setShowForm(false);
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'ready-lists':
                return 'Hazır Veri Listesi';
            case 'blog':
                return 'Blog Yazısı';
            case 'case-studies':
                return 'Vaka Çalışması';
            default:
                return type;
        }
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-gray-600">
                    <Link
                        href={previousTab ? `/icerik-merkezi?tab=${previousTab}` : '/icerik-merkezi'}
                        className="hover:text-[#1A73E8]"
                    >
                        İçerik Merkezi
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">{blog.title}</span>
                </nav>

                {/* Header */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                    {blog.image && (
                        <div className="relative h-64 md:h-96 overflow-hidden bg-gradient-to-br from-[#1A73E8] to-[#0D47A1]">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-6xl md:text-8xl font-bold opacity-50">
                                    {blog.title.charAt(0)}
                                </span>
                            </div>
                        </div>
                    )}
                    <div className="p-6 md:p-8">
                        <div className="mb-4">
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                                {getTypeLabel(blog.type)}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
                            {blog.title}
                        </h1>
                        <p className="text-xl text-gray-600">{blog.description}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>

                {/* Google Sheet Section */}
                {blog.hasGoogleSheet && (
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
                        <h2 className="text-2xl font-bold text-[#111827] mb-4">
                            Veri Listesini Görüntüle
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Bu içerik için Google Sheets üzerinde hazırlanmış veri listesine erişmek için aşağıdaki formu doldurun.
                        </p>

                        {!formSubmitted && !showForm && (
                            <button
                                onClick={() => setShowForm(true)}
                                className="w-full md:w-auto bg-[#FF6F00] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E65100] transition-colors shadow-lg hover:shadow-xl"
                            >
                                Listeyi Görüntüle
                            </button>
                        )}

                        {showForm && !formSubmitted && (
                            <>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Ad Soyad <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                                            placeholder="Adınız ve soyadınız"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Meslek/Şirket <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                                            placeholder="Mesleğiniz veya şirket adınız"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setShowForm(false)}
                                            className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            İptal
                                        </button>
                                    </div>
                                </form>
                                <div className="mt-6">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!formData.name || !formData.email || !formData.company}
                                        className="w-full md:w-auto bg-[#FF6F00] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E65100] transition-colors shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    >
                                        Listeyi Görüntüle
                                    </button>
                                </div>
                            </>
                        )}

                        {formSubmitted && (
                            <div className="mt-6">
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                                    <p className="text-green-800 font-semibold mb-2">
                                        ✓ Form başarıyla gönderildi!
                                    </p>
                                    <p className="text-green-700 text-sm">
                                        Aşağıdaki bağlantıdan veri listesine erişebilirsiniz.
                                    </p>
                                </div>
                                <a
                                    href={blog.googleSheetUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#1A73E8] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0D47A1] transition-colors shadow-lg hover:shadow-xl"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Google Sheet'i Aç
                                </a>
                            </div>
                        )}
                    </div>
                )}

                {/* Back Button */}
                <div className="text-center">
                    <Link
                        href={previousTab ? `/icerik-merkezi?tab=${previousTab}` : '/icerik-merkezi'}
                        className="inline-flex items-center gap-2 text-[#1A73E8] hover:text-[#0D47A1] font-semibold"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        İçerik Merkezi'ne Dön
                    </Link>
                </div>
            </div>
        </div>
    );
}

