import Link from 'next/link';
import { getReadyLists } from '@/lib/supabase';

export const metadata = {
    title: 'Hazır Veri Listeleri - Veriburada',
    description: 'Ücretsiz örnek veri listeleri. İşletme verileri, iletişim bilgileri ve daha fazlası.',
};

export default async function ListelerPage() {
    const lists = await getReadyLists();

    return (
        <div className="min-h-screen bg-[#F9FAFB] py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
                        Hazır Veri Listeleri
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ücretsiz örnek veri listelerimizi indirerek kalitemizi test edin. Tüm listeler CSV formatında.
                    </p>
                </header>

                {lists.length === 0 ? (
                    <section className="text-center py-12">
                        <p className="text-gray-600">Henüz hazır veri listesi bulunmamaktadır.</p>
                    </section>
                ) : (
                    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {lists.map((list) => {
                            // İlk harfi alarak gradient renk belirle
                            const firstLetter = list.title.charAt(0).toUpperCase();
                            const gradients = [
                                'from-[#7BC87B] to-[#5FA85F]',
                                'from-[#4F46E5] to-[#7C3AED]',
                                'from-[#F59E0B] to-[#EF4444]',
                                'from-[#06B6D4] to-[#3B82F6]',
                                'from-[#EC4899] to-[#8B5CF6]',
                                'from-[#10B981] to-[#059669]',
                            ];
                            const gradientIndex = firstLetter.charCodeAt(0) % gradients.length;
                            const gradient = gradients[gradientIndex];

                            return (
                                <article key={list.id}>
                                    <Link
                                        href={`/listeler/${list.slug}`}
                                        className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden block h-full group"
                                    >
                                        {/* Gradient Image Area */}
                                        <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-white text-6xl font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                                                    {firstLetter}
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h2 className="text-xl font-bold text-[#111827] mb-3 line-clamp-2 group-hover:text-[#7BC87B] transition-colors">
                                                {list.title}
                                            </h2>

                                            <div className="space-y-2 mb-4">
                                                {list.location && (
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <svg className="w-4 h-4 text-[#7BC87B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        <span>{list.location}</span>
                                                    </div>
                                                )}
                                                {list.total_records && (
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <svg className="w-4 h-4 text-[#7BC87B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                        </svg>
                                                        <span className="font-semibold text-[#111827]">
                                                            {list.total_records.toLocaleString('tr-TR')}
                                                        </span>
                                                        <span>kayıt</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <span className="text-[#7BC87B] font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                                    Detayları Gör
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            );
                        })}
                    </section>
                )}
            </div>
        </div>
    );
}

