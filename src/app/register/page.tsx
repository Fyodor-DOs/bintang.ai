"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AOS from "aos";
import { FiEye as Eye, FiEyeOff as EyeOff } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const navigateToPlayground = () => {
    window.location.href = 'https://playground.bintang.ai';
  };

  const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[0-9]+$/.test(value)) {
      setPhone(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!firstName.trim()) {
      toast.error("Nama Depan tidak boleh kosong.");
      setLoading(false);
      return;
    }
    if (!lastName.trim()) {
      toast.error("Nama Belakang tidak boleh kosong.");
      setLoading(false);
      return;
    }
    if (!email.trim()) {
      toast.error("Email tidak boleh kosong.");
      setLoading(false);
      return;
    }
    if (!email.includes('@')) {
      toast.error("Format email tidak valid, harus menyertakan '@'.");
      setLoading(false);
      return;
    }
    if (!phone.trim()) {
      toast.error("Nomor Telepon tidak boleh kosong.");
      setLoading(false);
      return;
    }

    if (phone.length < 10 || phone.length > 13) {
      toast.error("Nomor Telepon harus antara 10 hingga 13 digit.");
      setLoading(false);
      return;
    }

    if (!password) {
      toast.error("Kata Sandi tidak boleh kosong.");
      setLoading(false);
      return;
    }
    if (!validatePassword(password)) {
      toast.error("Kata sandi harus minimal 8 karakter, mengandung 1 huruf kapital dan 1 angka.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          password,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Registrasi gagal");
      }
      
      toast.success("Registrasi berhasil! Anda akan dialihkan...");

      setTimeout(() => {
        navigateToPlayground();
      }, 3000);

    } catch (err: any) {
      toast.error(err.message || "Terjadi kesalahan");
      setLoading(false);
    } 
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: 'url(/login-page.png)' }}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0" />
      <div 
        className="relative z-10 w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-white/80 min-h-[520px]"
        data-aos="fade-up"
      >
        <div className="hidden md:flex w-1/2 bg-white/60 relative">
          <Image 
            src="/register-banner.svg" 
            alt="Bintang.ai banner" 
            fill={true} 
            className="object-cover" 
          />
        </div>
        <div className="flex-1 flex flex-col justify-center p-6 md:p-12 relative min-h-[520px]">
          <button onClick={() => router.push("/")} className="absolute right-4 top-4 text-slate-400 hover:text-[#ee5484] text-2xl font-bold leading-none">×</button>
          <div className="flex flex-col justify-center h-full max-w-xs mx-auto w-full">
            <h2 className="text-2xl font-bold text-slate-800 mb-1 text-center">Daftar Akun</h2>
            <p className="text-slate-600 mb-6 text-center text-sm">Buat akun baru untuk mengakses platform bintang.ai</p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Nama Depan</label>
                <input
                  type="text"
                  placeholder="Masukkan nama depan"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#ee5484] focus:ring-2 focus:ring-[#ee5484]/30 outline-none bg-white text-sm text-black"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Nama Belakang</label>
                <input
                  type="text"
                  placeholder="Masukkan nama belakang"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#ee5484] focus:ring-2 focus:ring-[#ee5484]/30 outline-none bg-white text-sm text-black"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Masukkan email"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#ee5484] focus:ring-2 focus:ring-[#ee5484]/30 outline-none bg-white text-sm text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Nomor Telepon</label>
                <input
                  type="tel"
                  placeholder="Masukkan nomor telepon"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#ee5484] focus:ring-2 focus:ring-[#ee5484]/30 outline-none bg-white text-sm text-black"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={13}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Kata Sandi</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan kata sandi"
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-[#ee5484] focus:ring-2 focus:ring-[#ee5484]/30 outline-none bg-white pr-12 text-sm text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 w-full bg-[#ee5484] text-white font-semibold py-3 rounded-lg shadow hover:bg-[#ff4b6e] transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
                disabled={loading}
              >
                {loading ? "Mendaftar..." : "Daftar"}
              </button>
            </form>
            <p className="mt-6 text-sm text-slate-600 text-center">
              Sudah punya akun?{" "}
              <button type="button" className="text-[#ee5484] hover:underline" onClick={navigateToPlayground}>
                Login disini
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}