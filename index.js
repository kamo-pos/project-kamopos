const menuList = [
  {
    id: 1,
    name: "Nasi Goreng",
    price: 10000,
    category: "menu nasi",
    image: "assets/thumbnails/nasi-goreng.jpg"
  },
  {
    id: 2,
    name: "Sate Ayam",
    price: 15000,
    category: "menu daginng",
    image: "assets/thumbnails/nasi-goreng.jpg"
  },
  {
    id: 3,
    name: "Sayur Asem",
    price: 13000,
    category: "menu sayur"
  },
  {
    id: 4,
    name: "Teh Manis",
    price: 5000,
    category: "minuman"
  }
];

const showAllMenu = array => {
  // console.log(array);

  const showFoods = array.map(item => {
    let food = item.name + item.price;
    console.log(item.name, item.price);
    return food;
  });

  return (document.getElementById("menu-grid").innerHTML = showFoods);
};

showAllMenu(menuList);

// ===============
// Function menampilkan pesanan
