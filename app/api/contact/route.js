import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request) {
    try {
        // Environment variable kontrolü
        if (!supabaseUrl || !supabaseAnonKey) {
            console.error('Missing environment variables:', {
                hasUrl: !!supabaseUrl,
                hasKey: !!supabaseAnonKey
            });
            return NextResponse.json(
                { error: 'Sunucu yapılandırma hatası. Lütfen environment variables kontrol edin.' },
                { status: 500 }
            );
        }

        const body = await request.json();
        const { name, email, message, ipAddress, userAgent } = body;

        // Mesaj kontrolü
        if (!message || message.trim() === '') {
            return NextResponse.json(
                { error: 'Mesaj alanı boş olamaz' },
                { status: 400 }
            );
        }

        console.log('Supabase insert başlıyor:', {
            name: name || 'null',
            email: email || 'null',
            messageLength: message.length,
            hasIp: !!ipAddress,
            hasUserAgent: !!userAgent
        });

        // Supabase'e insert
        const { data, error } = await supabase
            .from('ex_contact_messages')
            .insert([
                {
                    name: name || null,
                    email: email || null,
                    message: message,
                    ip_address: ipAddress || null,
                    user_agent: userAgent || null,
                },
            ])
            .select();

        if (error) {
            console.error('Supabase error detayları:', {
                message: error.message,
                details: error.details,
                hint: error.hint,
                code: error.code
            });
            return NextResponse.json(
                {
                    error: 'Mesaj gönderilirken bir hata oluştu',
                    details: error.message || 'Bilinmeyen hata'
                },
                { status: 500 }
            );
        }

        console.log('Supabase insert başarılı:', data);

        return NextResponse.json(
            { success: true, message: 'Mesaj başarıyla gönderildi' },
            { status: 200 }
        );
    } catch (error) {
        console.error('API error:', {
            message: error.message,
            stack: error.stack,
            name: error.name
        });
        return NextResponse.json(
            {
                error: 'Bir hata oluştu',
                details: error.message || 'Bilinmeyen hata'
            },
            { status: 500 }
        );
    }
}

