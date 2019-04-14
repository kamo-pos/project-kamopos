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
  },
  {
    id: 5,
    name: "Air Putih",
    price: 500,
    category: "minuman",
    image: "assets/images/nasi-goreng.jpg"
  },
  {
    id: 6,
    name: "Mie Ayam",
    price: 12000,
    category: "makaanan",
    image: "assets/images/nasi-goreng.jpg"
  },
  {
    id: 7,
    name: "Bubur Ayam",
    price: 12000,
    category: "makaanan",
    image: "assets/images/nasi-goreng.jpg"
  }
];

// ===========================================================================================
// Show All Menu
const showAllMenu = array => {
  const showFoods = array.map(menu => {
    console.log(menu);
    let food = `
      <div class="food-data">
        <img src="${menu.image}" alt="" />
        <p class="food-name">${menu.name}</p>
        <p>${menu.price}</p>
        <button onclick="inputOrder(${menu.id})">
          <p class="order">Order</p>
        </button>
      </div>
      `;

    return food;
  });

  return (document.getElementById("menu-row").innerHTML = showFoods);
};

showAllMenu(menuList);

// =========================================================================================
// Input Order via button

const orderList = [];

const inputOrder = order => {
  if (order === menuList[order - 1].id) {
    orderList.push(menuList[order - 1]);
  }

  const showOrderList = orderList.map(orders => {
    let orderTableData = `
    <tr>
      <td class="food">${orders.name}</td>
      <td class="price">${orders.price}</td>
      <td class="quantity">
        <input type="number" value="1" />
      </td>
      <td class="delete">
        <button onclick="inputOrder(${orders.id})">
          X
        </button>
      </td>
    </tr>
    `;

    return orderTableData;
  });

  console.log(orderList);
  return (document.getElementById("menu-table").innerHTML = showOrderList);
};
// End of Input Order via button
