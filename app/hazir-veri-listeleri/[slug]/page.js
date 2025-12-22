'use client';

import { useState } from 'react';
import Link from 'next/link';

const sampleData = [
  { name: 'Örnek İşletme 1', address: 'Örnek Mahalle, Örnek Sokak No:1', phone: '0212 123 45 67', email: 'ornek@email.com' },
  { name: 'Örnek İşletme 2', address: 'Örnek Mahalle, Örnek Sokak No:2', phone: '0212 234 56 78', email: 'ornek2@email.com' },
  { name: 'Örnek İşletme 3', address: 'Örnek Mahalle, Örnek Sokak No:3', phone: '0212 345 67 89', email: 'ornek3@email.com' },
];

export default function HazirVeriListesiDetailPage({ params }) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Form gönderimi burada yapılacak
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#111827] mb-4">
            İstanbul Çilingir Listesi
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            İstanbul'daki tüm çilingir işletmelerinin detaylı listesi. Telefon, adres, çalışma saatleri ve daha fazlası.
          </p>

          {/* Veri Örnek Tablosu */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">Veri Örnekleri</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#E8F8E8]">
                    <th className="p-3 text-left">İşletme Adı</th>
                    <th className="p-3 text-left">Adres</th>
                    <th className="p-3 text-left">Telefon</th>
                    <th className="p-3 text-left">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleData.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3">{row.name}</td>
                      <td className="p-3">{row.address}</td>
                      <td className="p-3">{row.phone}</td>
                      <td className="p-3">{row.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* İndir Formu */}
          {!submitted ? (
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-[#111827] mb-4">Listeyi İndir</h2>
              <p className="text-gray-600 mb-6">
                Ücretsiz örnek listeyi indirmek için formu doldurun.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7BC87B] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7BC87B] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Meslek
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7BC87B] focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7BC87B] text-white py-3 rounded-lg font-semibold hover:bg-[#5FA85F] transition-colors"
                >
                  Listeyi Görüntüle
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8 text-center">
              <p className="text-green-800 mb-4">Form başarıyla gönderildi! Listeyi indirmek için email'inizi kontrol edin.</p>
              <Link
                href="https://app.veriburada.com/login"
                className="inline-block bg-[#7BC87B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5FA85F] transition-colors"
              >
                Hemen Başla
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

