# React Todo App (TodoMVC)

Bu proje, klasik **TodoMVC** arayüzü kullanılarak geliştirilmiş bir **React Todo uygulamasıdır**.  
Amaç; statik HTML + CSS çıktısını bozmadan, modern React mimarisiyle yeniden yapılandırmak ve temel React kavramlarını uygulamaktır.

---

## 🚀 Özellikler

- ✅ Todo ekleme
- ✅ Todo silme
- ✅ Tamamlandı / tamamlanmadı durumu
- ✅ Filtreleme (All / Active / Completed)
- ✅ Tamamlananları temizleme (Clear Completed)
- ✅ **LocalStorage desteği** (sayfa yenilense bile veriler kaybolmaz)
- ✅ TodoMVC ile %100 uyumlu tasarım

---

## 🧠 Kullanılan Teknolojiler

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **LocalStorage API**

---

## 📁 Proje Yapısı

```txt
src/
 ├─ components/
 │   ├─ Header.jsx
 │   ├─ TodoList.jsx
 │   ├─ TodoItem.jsx
 │   ├─ Footer.jsx
 │   └─ Info.jsx
 ├─ App.jsx
 ├─ App.css
 └─ main.jsx

<ul>
<li> App.jsx → State ve uygulama mantığı</li>

<li> components/ → Tek sorumluluk prensibine uygun React bileşenleri</li>

<li> App.css → TodoMVC tasarımı (değiştirilmeden kullanılmıştır)</li>
</ul>

💾 LocalStorage Kullanımı
<ul>
<li> Uygulama, todoları tarayıcı LocalStorage alanında saklar.</li>

<li> Sayfa yenilendiğinde veriler korunur</li>

<li> useEffect ile state değişimleri otomatik senkronize edilir</li>
</ul>

🛠️ Kurulum & Çalıştırma
npm install
npm run dev
http://localhost:5173

🎯 Amaç
<ul>
<li> Bu proje;</li>

<li> React’te state yönetimi</li>

<li> Component mimarisi</li>

<li> Controlled input</li>

<li> Side effect (useEffect)</li>

<li> LocalStorage entegrasyonu</li>

<li> gibi temel konuları öğrenmek ve pekiştirmek amacıyla geliştirilmiştir.</li>
</ul>