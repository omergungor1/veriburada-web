import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
}

// SSG için server-side client
export function getSupabaseClient() {
    return createClient(supabaseUrl, supabaseAnonKey);
}

// Blog postları getir (sadece yayınlanmış olanlar)
export async function getBlogPosts() {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

    if (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }

    return data || [];
}

// Blog post getir (slug ile)
export async function getBlogPostBySlug(slug) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

    // PGRST116 = sonuç bulunamadı (normal durum)
    if (error && error.code !== 'PGRST116') {
        console.error('Error fetching blog post:', error);
        return null;
    }

    return data || null;
}

// Hazır veri listelerini getir (sadece aktif olanlar)
export async function getReadyLists() {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
        .from('ready_lists')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('[getReadyLists] Hata:', error);
        return [];
    }

    return data || [];
}

// Hazır veri listesi getir (slug ile)
export async function getReadyListBySlug(slug) {
    const supabase = getSupabaseClient();

    const { data, error } = await supabase
        .from('ready_lists')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .maybeSingle();

    // PGRST116 = sonuç bulunamadı (normal durum)
    if (error && error.code !== 'PGRST116') {
        console.error('[getReadyListBySlug] Hata:', error);
        return null;
    }

    if (!data) {
        // Tüm aktif listeleri kontrol et
        const { data: allLists } = await supabase
            .from('ready_lists')
            .select('slug, is_active')
            .eq('is_active', true);
    }

    return data || null;
}

