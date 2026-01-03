import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request) {
    try {
        // Environment variable kontrolü
        if (!supabaseUrl || !supabaseAnonKey || !recaptchaSecretKey) {
            console.error('Missing environment variables');
            return NextResponse.json(
                { error: 'Sunucu yapılandırma hatası' },
                { status: 500 }
            );
        }

        const body = await request.json();
        const { name, email, message, recaptchaToken, ipAddress, userAgent } = body;

        // reCAPTCHA doğrulama
        if (!recaptchaToken) {
            return NextResponse.json(
                { error: 'reCAPTCHA token gerekli' },
                { status: 400 }
            );
        }

        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
            {
                method: 'POST',
            }
        );

        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success) {
            return NextResponse.json(
                { error: 'reCAPTCHA doğrulaması başarısız' },
                { status: 400 }
            );
        }

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
            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Mesaj gönderilirken bir hata oluştu' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Mesaj başarıyla gönderildi' },
            { status: 200 }
        );
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Bir hata oluştu' },
            { status: 500 }
        );
    }
}

