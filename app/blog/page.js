import Link from 'next/link';
import { getBlogPosts } from '@/lib/supabase';

export const metadata = {
  title: 'Blog - Veriburada',
  description: 'SEO, lead generation, Google Maps analizleri ve pazarlama konularında güncel yazılar.',
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
            SEO, lead generation, Google Maps analizleri ve pazarlama konularında güncel yazılar.
          </p>
        </header>

        {posts.length === 0 ? (
          <section className="text-center py-12">
            <p className="text-gray-600">Henüz blog yazısı bulunmamaktadır.</p>
          </section>
        ) : (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const publishedDate = post.published_at
                ? new Date(post.published_at).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })
                : null;

              return (
                <article key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block h-full"
                  >
                    <h2 className="text-xl font-semibold text-[#111827] mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    {publishedDate && (
                      <time className="text-sm text-gray-500" dateTime={post.published_at}>
                        {publishedDate}
                      </time>
                    )}
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
