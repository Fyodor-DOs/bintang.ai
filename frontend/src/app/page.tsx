"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AOS from "aos";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";

export default function Home() {
  const router = useRouter();
  useEffect(() => { AOS.init({ once: true, duration: 800 }); }, []);

  const navigateToPlayground = () => {
    window.location.href = 'https://playground.bintang.ai';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F8FAFF]">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 bg-white/96 shadow-sm fixed top-0 left-0 z-50">
        <div className="flex items-center gap-2">
          <Image src="/logo-bintang.ai.svg" alt="bintang.ai logo" width={48} height={48} className="h-10 w-auto" priority />
        </div>
        <div className="flex gap-3">
          <button className="bg-transparent text-[#2D3C8C] font-semibold shadow-none border-none hover:text-[#FF4B6E] transition cursor-pointer" onClick={navigateToPlayground}>Login</button>
          <button className="btn-yellow btn-yellow-sm" onClick={() => router.push('/register')}>
            Daftar
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden min-h-[600px] flex items-center justify-center pt-20" data-aos="fade-up">
        <div className="hero-bg absolute inset-0 w-full h-full bg-center bg-cover scale-105 transition-transform duration-1000" style={{ backgroundImage: "url(/hero-section.png)" }} />
        <div className="hero-gradient absolute inset-0 bg-gradient-to-b from-[#2b3985]/90 via-[#2b3985]/60 via-60% to-white z-10" />
        <div className="hero-content relative z-20 flex flex-col items-center justify-center text-center px-6 py-24 max-w-5xl mx-auto">
          <h1 className="hero-title text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">bintang.ai</h1>
          <p className="hero-subtitle text-lg md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl">Otomasi Workflow yang Aman, Cerdas, dan Fleksibel</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-yellow" onClick={navigateToPlayground}>Mulai Otomatisasi</button>
            <button className="btn-white" onClick={() => router.push('/register')}>Daftar Akun</button>
          </div>
        </div>
      </section>

      {/* Apa Itu bintang.ai? */}
      <section className="relative py-24 flex flex-col items-center overflow-hidden bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-[#FF4B6E] mb-4 text-center">Apa Itu bintang.ai?</h2>
          <div className="section-hr"></div>
          <p className="text-gray-700 text-center max-w-2xl text-lg mx-auto">
            bintang.ai adalah platform otomasi workflow berbasis n8n yang diinstal secara on-premise, dirancang khusus untuk pengguna di sektor pendidikan, bisnis/UMKM, dan profesional. Platform ini memungkinkan Anda mengotomatisasi alur kerja, menghubungkan berbagai sistem, dan menjalankan proses otomatis dengan mudah menggunakan visual builder yang intuitif, lengkap dengan dukungan AI agent yang canggih.
          </p>
        </div>
      </section>

      {/* Fitur Unggulan */}
      <section className="features-section bg-[#F8FAFF] py-24" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="features-header text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#FF4B6E]">Fitur Unggulan</h2>
            <div className="section-hr"></div>
          </div>
          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-feature-shadcn" tabIndex={0}>
              <span className="text-4xl">🎨</span>
              <h3 className="feature-card-title font-semibold text-xl text-[#FF4B6E]">Visual Workflow Builder</h3>
              <p className="feature-card-desc text-gray-600 text-base">Drag & drop interface yang intuitif memungkinkan Anda membuat workflow kompleks tanpa perlu coding.</p>
            </Card>
            <Card className="card-feature-shadcn" tabIndex={0}>
              <span className="text-4xl">🤖</span>
              <h3 className="feature-card-title font-semibold text-xl text-[#FF4B6E]">Didukung AI Agent</h3>
              <p className="feature-card-desc text-gray-600 text-base">Integrasikan kecerdasan buatan untuk membuat workflow yang lebih pintar dan adaptif sesuai kebutuhan bisnis.</p>
            </Card>
            <Card className="card-feature-shadcn" tabIndex={0}>
              <span className="text-4xl">🔗</span>
              <h3 className="feature-card-title font-semibold text-xl text-[#FF4B6E]">Integrasi Lengkap</h3>
              <p className="feature-card-desc text-gray-600 text-base">Hubungkan API, database, email, WhatsApp, dan berbagai sistem lainnya dalam satu platform terpadu.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Segmentasi Pengguna */}
      <section className="py-24 flex flex-col items-center bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#FF4B6E]">Segmentasi Pengguna</h2>
            <div className="section-hr"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-segment-shadcn" tabIndex={0}>
              <h3 className="font-semibold text-xl text-[#FF4B6E]">Pendidikan</h3>
              <ul className="text-gray-600 text-base ml-0 mt-2 space-y-1">
                <li className="flex items-start gap-2 text-left"><span className="text-[#FFD600] mt-1">⭐</span> Otomasi pendaftaran dan pengelolaan data mahasiswa</li>
                <li className="flex items-start gap-2 text-left"><span className="text-[#FFD600] mt-1">⭐</span> Sistem penjadwalan kelas dan ujian otomatis</li>
                <li className="flex items-start gap-2 text-left"><span className="text-[#FFD600] mt-1">⭐</span> Notifikasi dan reminder untuk deadline akademik</li>
              </ul>
            </Card>
            <Card className="card-segment-shadcn" tabIndex={0}>
              <h3 className="font-semibold text-xl text-[#FF4B6E]">Bisnis & UMKM</h3>
              <ul className="text-gray-600 text-base ml-0 mt-2 space-y-1">
                <li className="flex items-start gap-2 text-left"><span className="text-[#FFD600] mt-1">⭐</span> Otomasi proses order dan manajemen inventori</li>
                <li className="flex items-start gap-2 text-left"><span className="text-[#FFD600] mt-1">⭐</span> Sistem follow-up pelanggan dan marketing automation</li>
                <li className="flex items-start gap-2 text-left"><span className="text-[#FFD600] mt-1">⭐</span> Integrasi pembayaran dan laporan keuangan otomatis</li>
              </ul>
            </Card>
            <Card className="card-segment-shadcn" tabIndex={0}>
              <h3 className="font-semibold text-xl text-[#FF4B6E]">Profesional</h3>
              <ul className="text-gray-600 text-base ml-0 mt-2 space-y-1">
                <li className="flex items-start gap-2 text-left"><span className="text-[#FFD600] mt-1">⭐</span> Otomasi laporan dan dashboard bisnis</li>
                <li className="flex items-start gap-2 text-left"><span className="text-[#FFD600] mt-1">⭐</span> Workflow approval dan dokumentasi project</li>
                <li className="flex items-start gap-2 text-left"><span className="text-[#FFD600] mt-1">⭐</span> Integrasi tools productivity dan komunikasi tim</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Kenapa Harus bintang.ai? */}
      <section className="bg-[#F8FAFF] py-24 flex flex-col items-center" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#FF4B6E]">Kenapa Harus bintang.ai?</h2>
            <div className="section-hr"></div>
          </div>
          <div className="w-full overflow-x-auto">
            <Table className="table-custom">
              <thead>
                <tr className="bg-[#FFD600] text-[#2D3C8C]">
                  <th className="table-th md:text-lg">Fitur</th>
                  <th className="table-th md:text-lg">bintang.ai</th>
                  <th className="table-th md:text-lg">Tools Lain</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-[#FF4B6E]">
                  <td className="table-td md:text-lg">On-Premise Deployment</td>
                  <td className="table-td md:text-lg">⭐</td>
                  <td className="table-td md:text-lg">X</td>
                </tr>
                <tr className="border-b border-[#FF4B6E]">
                  <td className="table-td md:text-lg">AI Agent Integration</td>
                  <td className="table-td md:text-lg">⭐</td>
                  <td className="table-td md:text-lg">X</td>
                </tr>
                <tr className="border-b border-[#FF4B6E]">
                  <td className="table-td md:text-lg">Visual Workflow Builder</td>
                  <td className="table-td md:text-lg">⭐</td>
                  <td className="table-td md:text-lg">⭐</td>
                </tr>
                <tr className="border-b border-[#FF4B6E]">
                  <td className="table-td md:text-lg">Open Source Core</td>
                  <td className="table-td md:text-lg">⭐</td>
                  <td className="table-td md:text-lg">X</td>
                </tr>
                <tr>
                  <td className="table-td md:text-lg">Gratis</td>
                  <td className="table-td md:text-lg">⭐</td>
                  <td className="table-td md:text-lg">X</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ff4b6e] py-24 flex flex-col items-center justify-center text-center" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title-white">Siap Mengotomatisasi Workflow Anda?</h2>
          <p className="text-white text-lg mb-10">Bergabunglah dengan ribuan pengguna yang telah merasakan efisiensi luar biasa dengan bintang.ai</p>
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-yellow btn-nowrap" onClick={() => router.push('/register')}>Daftar Akun bintang.ai</button>
            <button
              className="btn-white btn-nowrap"
              onClick={() =>
                window.open(
                  "https://n8n.io/workflows/?utm_source=n8n_app&utm_medium=template_library&utm_instance=https://playground.bintang.ai/&utm_n8n_version=1.93.0&utm_awc=11",
                  "_blank"
                )
              }
            >
              Lihat Template Workflow
            </button>
            <button className="btn-outline btn-nowrap">Jadwalkan Konsultasi</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8FAFF] pt-16 pb-8 border-t-0 font-sans">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-bold text-base text-slate-800 mb-2 capitalize">bintang.ai</h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed font-normal">bintang.ai adalah platform otomasi workflow berbasis n8n yang diinstal secara on-premise, dirancang khusus untuk pengguna di sektor pendidikan, bisnis/UMKM, dan profesional.</p>
            </div>
            <div>
              <h3 className="font-bold tracking-wider text-slate-800 mb-2 capitalize text-base">Fitur</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-slate-600 hover:text-[#FF4B6E] transition-colors font-normal capitalize text-base">Visual Workflow Builder</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#FF4B6E] transition-colors font-normal capitalize text-base">Didukung AI Agent</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#FF4B6E] transition-colors font-normal capitalize text-base">Integrasi Lengkap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold tracking-wider text-slate-800 mb-2 capitalize text-base">Akses Cepat</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-slate-600 hover:text-[#FF4B6E] transition-colors font-normal capitalize text-base">Login</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#FF4B6E] transition-colors font-normal capitalize text-base">Daftar</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#FF4B6E] transition-colors font-normal capitalize text-base">Teknologi</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-slate-200 mt-12"></div>
        <div className="text-center pt-6">
          <span className="text-slate-500 text-sm font-normal font-sans">© 2025 bintang.ai. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}