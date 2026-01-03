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
                    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {lists.map((list) => (
                            <article key={list.id}>
                                <Link
                                    href={`/listeler/${list.slug}`}
                                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block h-full"
                                >
                                    <h2 className="text-xl font-semibold text-[#111827] mb-2">
                                        {list.title}
                                    </h2>
                                    {list.location && (
                                        <p className="text-sm text-gray-500 mb-2">
                                            📍 {list.location}
                                        </p>
                                    )}
                                    {list.total_records && (
                                        <p className="text-sm text-gray-600 mb-4">
                                            {list.total_records.toLocaleString('tr-TR')} kayıt
                                        </p>
                                    )}
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-[#7BC87B] font-semibold">Detayları Gör →</span>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </section>
                )}
            </div>
        </div>
    );
}

