
// VAR OLAN TÜM <li> ELEMANLARINA KAPATMA BUTONU EKLEME

const myNodelist = document.getElementsByTagName("li");

for (let i = 0; i < myNodelist.length; i++) {
  // Her <li> için bir <span> oluşturup içine × işareti koyuyoruz.
  // Bu oluşturduğumuz <span> kapatma butonu olarak çalışacak.
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}



// TÜM KAPATMA BUTONLARINA TIKLANINCA ÖGEYİ SİLME

const close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  // Her × butonuna tıklandığında bağlı olduğu <li> gizleniyor.
  close[i].onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}



// <ul> ÜZERİNE TIKLAYARAK <li> ÖĞELERİNİ "CHECKED" YAPMA

const list = document.querySelector("ul");

// <li> üzerine tıklayınca tamamlandı/iptal durumu değişiyor.
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);



// YENİ BİR ÖĞE EKLEME FONKSİYONU

function newElement() {
  // Yeni <li> oluşturuyoruz ve input değerini içine ekliyoruz.
  const li = document.createElement("li");
  const inputValue = document.getElementById("task").value;
  const t = document.createTextNode(inputValue);

  li.appendChild(t);

  // Boş giriş yapılırsa hata göster, doluysa listeye ekle.
  if (inputValue === "" || inputValue.trim().length === 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
  }

  // Input kutusunu temizle.
  document.getElementById("task").value = "";

  // Yeni eklenen <li> için kapatma butonu ekleme.
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Yeni eklenen kapatma butonunun da çalışması için:
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    };
  }
}

