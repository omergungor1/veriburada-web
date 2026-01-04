import Link from 'next/link';
import { getBlogPosts } from '@/lib/supabase';

export const metadata = {
  title: 'Blog - Veriburada',
  description: 'Google Maps veri çıkarma, MapBot eklentisi kullanım rehberleri, local SEO stratejileri, lead generation teknikleri ve işletme verileri hakkında detaylı içerikler.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Google Maps veri çıkarma teknikleri, MapBot eklentisi kullanım rehberleri, local SEO optimizasyonu, lead generation stratejileri ve işletme verilerinden nasıl değer yaratılacağı hakkında kapsamlı içerikler.
          </p>
        </header>

        {posts.length === 0 ? (
          <section className="text-center py-12">
            <p className="text-gray-600">Henüz blog yazısı bulunmamaktadır.</p>
          </section>
        ) : (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const publishedDate = post.published_at
                ? new Date(post.published_at).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })
                : null;

              // İlk harfi alarak gradient renk belirle
              const firstLetter = post.title.charAt(0).toUpperCase();
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
                <article key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
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
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        {publishedDate && (
                          <time className="text-xs text-gray-500" dateTime={post.published_at}>
                            {publishedDate}
                          </time>
                        )}
                        <span className="text-[#7BC87B] font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Devamını Oku
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
