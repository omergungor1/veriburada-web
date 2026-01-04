import { getBlogPosts } from '../lib/supabase';
import { getReadyLists } from '../lib/supabase';

export const revalidate = 3600; // 1 saatte bir güncelle (ISR)

export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://veriburada.com';

    // Statik sayfalar
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/listeler`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hakkimizda`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/iletisim`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/eklenti-indir`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    // Blog yazıları
    const blogPosts = await getBlogPosts();
    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updated_at ? new Date(post.updated_at) : new Date(post.created_at),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Hazır veri listeleri
    const readyLists = await getReadyLists();
    const listPages = readyLists.map((list) => ({
        url: `${baseUrl}/listeler/${list.slug}`,
        lastModified: list.updated_at ? new Date(list.updated_at) : new Date(list.created_at),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [...staticPages, ...blogPages, ...listPages];
}

