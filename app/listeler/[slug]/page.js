import { notFound } from 'next/navigation';
import { getReadyLists, getReadyListBySlug } from '@/lib/supabase';
import { marked } from 'marked';
import DownloadCTA from '@/app/components/DownloadCTA';

// SSG için tüm slug'ları generate et
export async function generateStaticParams() {
    const lists = await getReadyLists();
    const slugs = lists.map((list) => ({
        slug: list.slug,
    }));
    return slugs;
}

// SEO metadata
export async function generateMetadata({ params }) {
    const { slug } = await params;

    const list = await getReadyListBySlug(slug);

    if (!list) {
        return {
            title: 'Liste Bulunamadı - Veriburada',
        };
    }

    const description = list.description_md?.replace(/[#*`]/g, '').substring(0, 160) ||
        `${list.title} - Ücretsiz veri listesi indir`;

    return {
        title: `${list.title} - Veriburada`,
        description,
        alternates: {
            canonical: `https://veriburada.com/listeler/${list.slug}`,
        },
    };
}

export default async function ListeDetailPage({ params }) {
    const { slug } = await params;

    const list = await getReadyListBySlug(slug);

    if (!list) {
        notFound();
    }

    // Markdown'ı HTML'e çevir (varsa)
    const htmlDescription = list.description_md
        ? marked(list.description_md)
        : null;

    return (
        <div className="min-h-screen bg-[#F9FAFB] py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <article className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
                        <header className="mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
                                {list.title}
                            </h1>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                                {list.location && (
                                    <div className="flex items-center gap-2">
                                        <span>📍</span>
                                        <span>{list.location}</span>
                                    </div>
                                )}
                                {list.total_records && (
                                    <div className="flex items-center gap-2">
                                        <span>📊</span>
                                        <span>{list.total_records.toLocaleString('tr-TR')} kayıt</span>
                                    </div>
                                )}
                            </div>
                        </header>

                        {htmlDescription && (
                            <div
                                className="prose prose-lg max-w-none text-gray-700 prose-headings:text-[#111827] prose-a:text-[#7BC87B] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#111827] mb-8"
                                dangerouslySetInnerHTML={{ __html: htmlDescription }}
                            />
                        )}

                        {list.list_url && (
                            <div className="mt-8 pt-8 border-t">
                                <div className="bg-gradient-to-r from-[#7BC87B]/10 to-[#5FA85F]/10 rounded-lg p-6 border border-[#7BC87B]/20">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#111827] mb-2">
                                                {list.title}
                                            </h3>
                                            {list.total_records && (
                                                <p className="text-gray-600 flex items-center gap-2">
                                                    <span className="text-[#7BC87B] font-semibold">
                                                        {list.total_records.toLocaleString('tr-TR')}
                                                    </span>
                                                    <span>kayıt mevcut</span>
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a
                                                href={list.list_url}
                                                download
                                                className="inline-flex items-center gap-2 bg-[#7BC87B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#5FA85F] transition-colors shadow-lg hover:shadow-xl whitespace-nowrap"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                Listeyi İndir
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* CTA Section */}
                    <DownloadCTA />
                </article>
            </div>
        </div>
    );
}

