# Note App

React + Vite ile hazırlanan bu uygulama, notlarını hızlıca kaydetmeni, renklendirmeni ve filtrelemeni sağlar.

## Özellikler
<ul>
<li> Textarea üzerinden yeni not ekleme</li>
<li> Kaydetmeden önce seçilen renk ile anlık önizleme</li>
<li> Kaydedilen notları seçilen renklere göre kartlar halinde listeleme</li>
<li> Üst kısımdaki arama alanı ile kayıtlı notları filtreleme</li>
</ul>

## Kurulum
1. Bağımlılıkları yüklemek için:
   ```bash
   npm install
   ```
2. Geliştirme sunucusunu başlatmak için:
   ```bash
   npm run dev
   ```
3. Konsolda görünen adresi tarayıcıda açarak uygulamayı görüntüleyebilirsin.

## Build Alma
Prod ortamı için optimize edilmiş paketi oluştur:
```bash
npm run build
```
Ardından çıktıyı yerelde test etmek istersen:
```bash
npm run preview
```