const menuList = [
  {
    id: 1,
    name: "Nasi Goreng",
    price: 10000,
    category: "menu nasi"
  },
  {
    id: 2,
    name: "Sate Ayam",
    price: 15000,
    category: "menu daginng"
  },
  {
    id: 3,
    name: "Sayur Asem",
    price: 13000,
    category: "menu nasi"
  },
  {
    id: 4,
    name: "Teh Manis",
    price: 5000,
    category: "minuman"
  }
];

const foodName = menuList.map(item => item.name);
const foodPrice = menuList.map(item => item.price);
const foodCategory = menuList.map(item => item.category);

const showAllMenu = () => {
  const allMenu = (document.getElementById("menu-grid").innerHTML =
    foodName + foodPrice + foodCategory);

  console.log(allMenu);
  return allMenu;
};

showAllMenu();
