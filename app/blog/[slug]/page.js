const blogPosts = {
  'google-maps-veri-cikarma-rehberi': {
    title: 'Google Maps Veri Çıkarma Rehberi',
    date: '2024-01-15',
    category: 'SEO Bilgi Yazıları',
    content: `
      <p>Google Maps'ten veri çıkarma, işletmeler için değerli bir kaynak sağlar. Bu rehberde, Google Maps verilerini nasıl çıkarabileceğinizi öğreneceksiniz.</p>
      <h2>Neden Google Maps Verisi?</h2>
      <p>Google Maps, milyonlarca işletmenin bilgilerini içerir. Bu veriler, lead generation, pazar araştırması ve rekabet analizi için kritiktir.</p>
      <h2>Veri Çıkarma Yöntemleri</h2>
      <p>Google Maps verilerini çıkarmak için çeşitli yöntemler vardır. API kullanımı, scraping ve üçüncü parti araçlar bunlardan bazılarıdır.</p>
    `,
  },
  'lead-generation-stratejileri': {
    title: 'Lead Generation Stratejileri',
    date: '2024-01-10',
    category: 'Lead Generation Rehberleri',
    content: `
      <p>İşletme verilerini kullanarak lead generation yapmanın etkili yollarını keşfedin.</p>
      <h2>Veri Tabanlı Lead Generation</h2>
      <p>Doğru verilerle, hedef kitlenize daha etkili ulaşabilirsiniz.</p>
    `,
  },
  'local-seo-optimizasyonu': {
    title: 'Local SEO Optimizasyonu',
    date: '2024-01-05',
    category: 'SEO Bilgi Yazıları',
    content: `
      <p>Yerel SEO stratejileri ve Google Maps'in önemi hakkında detaylı bilgiler.</p>
      <h2>Local SEO Nedir?</h2>
      <p>Yerel SEO, işletmelerin yerel aramalarda görünürlüğünü artırmak için kullanılan stratejilerdir.</p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug];
  if (!post) return { title: 'Yazı Bulunamadı' };
  return {
    title: `${post.title} - Veriburada Blog`,
    description: post.content.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return <div>Yazı bulunamadı</div>;
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="mb-4">
              <span className="text-sm text-[#7BC87B] font-semibold">{post.category}</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-8">
              {post.title}
            </h1>
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

