async function getir() {
      const kutu = document.getElementById("jokeBox");
      kutu.innerText = "Şaka yükleniyor...";
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      kutu.innerText = data.value;
    }

    document.getElementById("btn").addEventListener("click", getir);
    getir(); // ilk şaka