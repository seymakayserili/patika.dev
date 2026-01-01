# Star Wars Starships App 🚀

Bu proje, **Star Wars API (SWAPI)** kullanılarak geliştirilmiş bir **React Starships uygulamasıdır**.  
Kullanıcılar Star Wars evrenindeki yıldız gemilerini listeleyebilir, arama yapabilir, detaylarını inceleyebilir ve sayfalar arasında gezinebilir.

---

## ✨ Özellikler

- ⭐ Star Wars yıldız gemilerini listeleme
- 🔍 İsim veya modele göre arama
- 📄 Yıldız gemisi detay sayfası
- ➕ “Daha Fazla” butonu ile yeni gemiler yükleme
- 🔁 Detay sayfasından ana sayfaya geri dönüş
- 💥 API hata yakalama (error handling)
- 🎨 Grid & card tabanlı modern UI
- 📱 Responsive tasarım

---

## 🛠️ Kullanılan Teknolojiler

- **React**
- **Vite**
- **React Router DOM**
- **JavaScript (ES6+)**
- **CSS3**
- **Star Wars API (SWAPI mirror)**

---

## 🌐 API Bilgisi

Orijinal `swapi.dev` servisi zaman zaman SSL ve erişim sorunları yaşadığı için, bu projede güvenilir bir **community mirror** kullanılmıştır:

https://swapi.py4e.com/api/  bu endpoint, SWAPI ile **birebir aynı veri yapısına sahiptir**.

---

## 📁 Proje Yapısı

```txt
src/
 ├─ components/
 │   ├─ StarshipCard.jsx
 │   └─ SearchBar.jsx
 ├─ pages/
 │   ├─ Home.jsx
 │   └─ StarshipDetail.jsx
 ├─ services/
 │   └─ swapi.js
 ├─ App.jsx
 ├─ App.css
 └─ main.jsx

🚀 Kurulum & Çalıştırma
npm install
npm run dev
http://localhost:5173

🧪 Test İçin Örnek Aramalar

Aşağıdaki anahtar kelimelerle arama yapabilirsin:
Falcon
Death
Star
CR90
Y-wing


🧠 Öğrenilen Konular

Bu proje ile
React Router ile sayfa yönetimi
API entegrasyonu ve hata yakalama
Controlled input & search mantığı
Pagination (Load More)
Component bazlı mimari
Gerçek dünya API problemleriyle başa çıkma
konuları pratiğe dökülmüştür.


🔮 Geliştirilebilir Özellikler

⏳ Loading skeleton
⌨️ Debounce search
♾️ Infinite scroll
🎨 Daha ileri UI/UX tasarımı
🧪 Testler (React Testing Library)


📄 Lisans

Bu proje eğitim ve geliştirme amaçlıdır.
Star Wars ve SWAPI verileri ilgili hak sahiplerine aittir.
