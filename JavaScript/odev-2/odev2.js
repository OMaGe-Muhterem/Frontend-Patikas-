var yenibuton = "liveToastBtn";
var inputgorev = "task";
var yaplistesi = "list";

var listeye_toast_ekle = "#toastAddedToList";
var listeye_toast_ekleme_hata = "#toastErrorAddedToList";

var tarih_ekle_fonksiyonu = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const YAP_LISTESI = [
  { id: tarih_ekle_fonksiyonu(), body: "3 Litre Su İç" },
  { id: tarih_ekle_fonksiyonu(), body: "Ödevleri Yap" },
  { id: tarih_ekle_fonksiyonu(), body: "En Az 3 Saat Kodlama Yap" },
  { id: tarih_ekle_fonksiyonu(), body: "Yemek Yap" },
  { id: tarih_ekle_fonksiyonu(), body: "50 Sayfa Kitap Oku" },
];

var yap_liste_dizisi = [];

var liste_dizisindenSilFonksiyonu = (id) => {
  var silinen_item = yap_liste_dizisi.filter((yapilacak) => {
    return yapilacak.id !== id;
  });

  yap_liste_dizisi = [...silinen_item];
  LocalStoragete_yapilacaklarListesiAyarla(yap_liste_dizisi);
};

var tiklanarakSilFonksiyonu = (yapilan) => {
  liste_dizisindenSilFonksiyonu(yapilan.id);
  yapilan.remove();
};

var girisiDinleFonksiyonu = () => {
  document.getElementById(inputgorev).addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      yeniElementFonksiyonu();
    }
  });
};

var yapTiklanincaFonksiyonu = (liste_eleman) => {
  liste_eleman.classList.toggle("checked");
};

var girilenGorevTemizleFonk = () => {
  var girilen_gorev = document.getElementById(inputgorev);
  girilen_gorev.value = "";
};

var yeniYapilacakIsOlusturFonk = ({ body, id }) => {
  var yapilacak_is = document.getElementById(yaplistesi);

  var yeni_yapilacak_is = document.createElement("li");
  var yapilacak_is_Texti = document.createTextNode(body);
  yeni_yapilacak_is.id = id;
  yeni_yapilacak_is.appendChild(yapilacak_is_Texti);

  var yapilaniSilButonu = document.createElement("span");
  yapilaniSilButonu.innerText = "x";
  yapilaniSilButonu.className = "close";
  yapilaniSilButonu.addEventListener("click", (e) =>
    tiklanarakSilFonksiyonu(e.target.parentElement)
  );

  yeni_yapilacak_is.appendChild(yapilaniSilButonu);

  yeni_yapilacak_is.addEventListener("click", (e) => yapTiklanincaFonksiyonu(e.target));

  yapilacak_is.append(yeni_yapilacak_is);
};

var yeniElementFonksiyonu = () => {
  var yapilacaklarListesi = document.getElementById(yaplistesi);
  var girilenGorev = document.getElementById(inputgorev);

  var yapilacak_deger = girilenGorev.value.trim();

  if (yapilacak_deger === "") {
    $(listeye_toast_ekleme_hata).toast("show");

    girilenGorevTemizleFonk();
    girilenGorev.focus();

    return;
  }

  var yeni_yapilacak_is = { id: tarih_ekle_fonksiyonu(), body: yapilacak_deger };
  yeniYapilacakIsOlusturFonk(yeni_yapilacak_is);

  yap_liste_dizisi.push(yeni_yapilacak_is);

  LocalStoragete_yapilacaklarListesiAyarla(yap_liste_dizisi);

  girilenGorevTemizleFonk();
  girilenGorev.focus();

  $(listeye_toast_ekle).toast("show");
};

var LocalStoragete_yapilacaklarListesiAyarla = (list) => {
  localStorage.setItem("TODOJS_STORAGE", JSON.stringify(list));
};

var LocalStoragten_yapilacaklarListesiGetir = () => {
  return JSON.parse(localStorage.getItem("TODOJS_STORAGE"));
};

var Storageten_yapilacaklar_listesi = LocalStoragten_yapilacaklarListesiGetir();

if (Storageten_yapilacaklar_listesi === null || Storageten_yapilacaklar_listesi.length < 1) {
  yap_liste_dizisi = YAP_LISTESI;
  LocalStoragete_yapilacaklarListesiAyarla(yap_liste_dizisi);
} else {
  yap_liste_dizisi = Storageten_yapilacaklar_listesi;
}

yap_liste_dizisi.forEach((todoItem) => {
  yeniYapilacakIsOlusturFonk(todoItem);
});

girisiDinleFonksiyonu();