🎲 Dice Game – React

Bu proje, React kullanılarak geliştirilmiş basit bir zar oyunudur.
Oyunda kullanıcı (Player 1) ve bilgisayar (Player 2) her turda birer zar atar ve sonuç ekranda gösterilir.
<br><br>
<a href="https://profound-panda-0f7e55.netlify.app/">Canlı Link </a> 
<br><br>
🚀 Özellikler

🎮 Player vs PC mantığı
🎲 6 yüzlü zar sistemi
⏱️ Zar atıldıktan sonra 3 saniyelik animasyon
🏆 Kazan / Kaybet / Berabere sonuçları
✏️ Player 1 için kullanıcı adı değiştirme
🔄 Oyun sırasında butonun devre dışı kalması
🎨 Basit ve sade arayüz

🛠️ Kullanılan Teknolojiler

React
JavaScript
CSS
Vite

📁 Proje Yapısı
src/
 ├─ assets/
 │   └─ images/
 │      ├─ dice1.png
 │      ├─ dice2.png
 │      ├─ dice3.png
 │      ├─ dice4.png
 │      ├─ dice5.png
 │      └─ dice6.png
 ├─ App.jsx
 ├─ App.css
 └─ main.jsx

 🧠 Oyun Mantığı

Kullanıcı butona bastığında:
Zarlar 3 saniye boyunca rastgele değişir
Süre sonunda zarlar durur
Zar değerleri karşılaştırılır:
Player 1 > Player 2 → You Win
Player 1 < Player 2 → You Lose
Eşitse → Draw
Zar atılırken buton devre dışı kalır

👩‍💻 Geliştirici

Bu proje React öğrenme sürecinde geliştirilmiştir.
Eğitim ve pratik amaçlıdır.
