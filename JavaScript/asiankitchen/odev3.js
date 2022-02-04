const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 33.99,
    img:
        "https://images.food52.com/o8eoy9MM-zURhBbUXbNIVLMv_V0=/1200x900/e8412c93-b76c-485a-be98-17b9ae87d767--2018-0907_roys-3-ingredient-soy-steak-sauce-genius_3x2_ty-mecham_001.jpg",
    desc: `A good steak is juicy, tender, loaded with flavor, and has a minimum amount of fat. Lean is the cherry-red part of the meat.`,
},
  {
      id: 11,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
          "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
      id: 12,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
          "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
      id: 13,
      //hadi bir ürürnün adınıı değiştirelim çalışıyor mu:D
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
          "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
      id: 14,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
          "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
  },
  {
      id: 15,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
          "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
      id: 16,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
          "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
      id: 17,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
          "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
      id: 18,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
          "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
      id: 19,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
          "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
  },
 
];

const anaBolum = document.querySelector('.section-center')
const kapsayici = document.querySelector(".btn-container")

//
window.addEventListener("DOMContentLoaded", function () {
  menuyuGosterFonksiyonu(menu)
  MenuButonlariGoster()
})

function menuyuGosterFonksiyonu(menudeki) {
  let MenuGoster = menudeki.map(function (secenek) {
      return `<div class="menu-items col-lg-6 col-sm-12">
      <img src=${secenek.img} alt=${secenek.title} class="photo" />
      <div class="menu-info">
        <div class="menu-title">
          <h4>${secenek.title}</h4>
          <h4 class="price">${secenek.price}</h4>
        </div>
        <div class="menu-text">
          ${secenek.desc}
        </div>
      </div>
    </div>`
  })
  MenuGoster = MenuGoster.join('')
  //
  anaBolum.innerHTML = MenuGoster
}

function MenuButonlariGoster() {
  const kategoriler = menu.reduce(function (degerler, secilen) {
      if (!degerler.includes(secilen.category)) {
          degerler.push(secilen.category)
      }
      return degerler

  }, ['All'])
  const KategoriButonlari = kategoriler.map(function (kategori) {
      return `<button class="filter-btn btn btn-outline-dark btn-item" type="button" data-id=${kategori}>${kategori}</button>`
  }).join("")
  kapsayici.innerHTML = KategoriButonlari
  const filtreButonlari = document.querySelectorAll('.filter-btn')
  //
  filtreButonlari.forEach(function (buton) {
      buton.addEventListener("click", function (e) {
          const kategori = e.currentTarget.dataset.id;
          const KategorilerMenusu = menu.filter(function (menudenSecilen) {
              //   
              if (menudenSecilen.category === kategori) {
                  return menudenSecilen;
              }
          })
          // 
          if (kategori === "All") {
              menuyuGosterFonksiyonu(menu)
          }
          else {
              menuyuGosterFonksiyonu(KategorilerMenusu)
          }
      });
  });
}
