# bintang.ai Frontend

Aplikasi frontend (Next.js) untuk platform **bintang.ai**. Semua proses backend seperti register terhubung langsung ke workflow **n8n** melalui HTTP/Webhook.

---

## 🚀 Cara Install & Menjalankan

1. **Clone repository dan masuk ke folder frontend:**
   ```bash
   git clone <repo-url>
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Build aplikasi untuk production:**
   ```bash
   npm run build
   ```
4. **Jalankan aplikasi:**
   ```bash
   npm run start
   ```
5. **Buka di browser:**
   [http://localhost:3000](http://localhost:3000)

---

## Koneksi ke n8n
- Semua request register/login dari frontend akan dikirim ke endpoint workflow n8n (webhook).
- Jika terjadi error CORS, gunakan API route Next.js (`/api/route`) sebagai proxy ke endpoint n8n.

---

## Dokumentasi
- [Next.js Documentation](https://nextjs.org/docs)
- [n8n Documentation](https://docs.n8n.io/)
