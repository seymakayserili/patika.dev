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

 App.jsx → State ve uygulama mantığı

 components/ → Tek sorumluluk prensibine uygun React bileşenleri

App.css → TodoMVC tasarımı (değiştirilmeden kullanılmıştır)


💾 LocalStorage Kullanımı

Uygulama, todoları tarayıcı LocalStorage alanında saklar.

Sayfa yenilendiğinde veriler korunur.

useEffect ile state değişimleri otomatik senkronize edilir.


🛠️ Kurulum & Çalıştırma
npm install
npm run dev
http://localhost:5173

🎯 Amaç

Bu proje;

React’te state yönetimi

Component mimarisi

Controlled input

Side effect (useEffect)

LocalStorage entegrasyonu

gibi temel konuları öğrenmek ve pekiştirmek amacıyla geliştirilmiştir.
