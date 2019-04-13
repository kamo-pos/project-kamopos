const menuList = [
  {
    id: 1,
    name: "Nasi Goreng",
    price: 10000,
    category: "menu nasi",
    image: "./assets/thumbnails/nasi-goreng.jpg"
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
    category: "menu sayur",
    image: "assets/thumbnails/nasi-goreng.jpg"
  },
  {
    id: 4,
    name: "Teh Manis",
    price: 5000,
    category: "minuman",
    image: "assets/thumbnails/nasi-goreng.jpg"
  },
  {
    id: 5,
    name: "Air Putih",
    price: 500,
    category: "minuman",
    image: "assets/thumbnails/nasi-goreng.jpg"
  },
  {
    id: 6,
    name: "Mie Ayam",
    price: 12000,
    category: "makaanan",
    image: "assets/thumbnails/nasi-goreng.jpg"
  }
];

// ===============
// Input Order via button
const inputOrder = order => {
  // let orderList = [];

  if (order === menuList[order - 1].id) {
    orderPill = `
     <div class="col">
       <span>${menuList[order - 1].name}</span>
     </div>
     <div class="col">
       <span>Rp ${menuList[order - 1].price}</span>
     </div>`;
    // orderList.push(orderPill);
    // orderList.push(menuList[order - 1]);
  }
  // console.log(orderList);
  return (document.getElementById("menu-pill").innerHTML += orderPill);
};
// End of Input Order via button

// Show All Menu
const showAllMenu = array => {
  const showFoods = array.map(menu => {
    let food = `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${menu.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${menu.name}</h5>
            <p class="card-text">Rp ${menu.price}</p>
            <button onClick="inputOrder(${
              menu.id
            })" class="btn btn-primary">Pesan</button>
          </div>
        </div>
      </div>
      `;

    return food;
  });

  return (document.getElementById("menu-row").innerHTML = showFoods);
};

showAllMenu(menuList);
