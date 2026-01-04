'use client';

import { useState } from 'react';

export default function CopyChromeUrl() {
    const [copied, setCopied] = useState(false);
    const chromeUrl = 'chrome://extensions';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(chromeUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Kopyalama hatası:', err);
        }
    };

    return (
        <div className="inline-flex items-center gap-2 mt-2">
            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{chromeUrl}</code>
            <button
                onClick={handleCopy}
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1 transition-colors cursor-pointer"
            >
                {copied ? (
                    <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Kopyalandı!
                    </>
                ) : (
                    <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Kopyala
                    </>
                )}
            </button>
        </div>
    );
}

