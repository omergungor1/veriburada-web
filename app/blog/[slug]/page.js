import { notFound } from 'next/navigation';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/supabase';
import { marked } from 'marked';

// SSG için tüm slug'ları generate et
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Yazı Bulunamadı - Veriburada',
    };
  }

  const description = post.excerpt ||
    post.content_md?.replace(/[#*`]/g, '').substring(0, 160) ||
    'Veriburada blog yazısı';

  return {
    title: `${post.title} - Veriburada Blog`,
    description,
    alternates: {
      canonical: `https://veriburada.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Markdown'ı HTML'e çevir
  const htmlContent = marked(post.content_md || '');

  const publishedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    : null;

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <header className="mb-8">
              {publishedDate && (
                <time className="text-sm text-gray-500" dateTime={post.published_at}>
                  {publishedDate}
                </time>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mt-4 mb-6">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="text-xl text-gray-600">
                  {post.excerpt}
                </p>
              )}
            </header>

            <div
              className="prose prose-lg max-w-none text-gray-700 prose-headings:text-[#111827] prose-a:text-[#7BC87B] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#111827] prose-code:text-[#7BC87B]"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}
