import { getBlogBySlug } from '../blog-data';

export async function generateMetadata({ params }) {
    const blog = getBlogBySlug(params.slug);

    if (!blog) {
        return {
            title: 'İçerik Bulunamadı - Veriburada',
            description: 'Aradığınız içerik bulunamadı.',
        };
    }

    return {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || blog.description,
        openGraph: {
            title: blog.metaTitle || blog.title,
            description: blog.metaDescription || blog.description,
            images: blog.image ? [blog.image] : [],
        },
    };
}

export default function BlogDetailLayout({ children }) {
    return children;
}

