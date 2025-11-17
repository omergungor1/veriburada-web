import Link from 'next/link';

const blogPosts = [
  {
    slug: 'google-maps-veri-cikarma-rehberi',
    title: 'Google Maps Veri Çıkarma Rehberi',
    description: 'Google Maps\'ten veri çıkarma yöntemleri ve en iyi uygulamalar.',
    category: 'SEO Bilgi Yazıları',
    date: '2024-01-15',
  },
  {
    slug: 'lead-generation-stratejileri',
    title: 'Lead Generation Stratejileri',
    description: 'İşletme verilerini kullanarak lead generation yapmanın yolları.',
    category: 'Lead Generation Rehberleri',
    date: '2024-01-10',
  },
  {
    slug: 'local-seo-optimizasyonu',
    title: 'Local SEO Optimizasyonu',
    description: 'Yerel SEO stratejileri ve Google Maps\'in önemi.',
    category: 'SEO Bilgi Yazıları',
    date: '2024-01-05',
  },
];

export const metadata = {
  title: 'Blog - Veriburada',
  description: 'SEO, lead generation, Google Maps analizleri ve pazarlama yazıları.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            SEO, lead generation, Google Maps analizleri ve pazarlama konularında güncel yazılar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <span className="text-sm text-[#1A73E8] font-semibold">{post.category}</span>
              <h3 className="text-xl font-semibold text-[#111827] mt-2 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <span className="text-sm text-gray-500">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

