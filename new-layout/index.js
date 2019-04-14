const menuList = [
  {
    id: 1,
    name: "Nasi Goreng",
    price: 10000,
    category: "menu nasi",
    image: "assets/images/nasi-goreng.jpg"
  },
  {
    id: 2,
    name: "Sate Ayam",
    price: 15000,
    category: "menu daginng",
    image: "assets/images/nasi-goreng.jpg"
  },
  {
    id: 3,
    name: "Sayur Asem",
    price: 13000,
    category: "menu sayur",
    image: "assets/images/nasi-goreng.jpg"
  },
  {
    id: 4,
    name: "Teh Manis",
    price: 5000,
    category: "minuman",
    image: "assets/images/nasi-goreng.jpg"
  }
  // {
  //   id: 5,
  //   name: "Air Putih",
  //   price: 500,
  //   category: "minuman",
  //   image: "assets/images/nasi-goreng.jpg"
  // },
  // {
  //   id: 6,
  //   name: "Mie Ayam",
  //   price: 12000,
  //   category: "makaanan",
  //   image: "assets/images/nasi-goreng.jpg"
  // }
];

const orderList = [];

// ===========================================================================================
// Show All Menu
const showAllMenu = array => {
  const showFoods = array.map(menu => {
    let food = `
    <div class="food-data">
            <img src="assets/images/nasi-goreng.jpg" alt="" />
            <p class="food-name">Nasi Goreng</p>
            <p>Rp. 10.000</p>
            <button>
              <p class="order">Order</p>
            </button>
          </div>
      `;

    return food;
  });

  return (document.getElementById("menu-row").innerHTML = showFoods);
};

showAllMenu(menuList);
