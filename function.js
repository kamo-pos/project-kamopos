const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0
});

// ===========================================================================================
// Show All Menu
const showAllMenu = array => {
  const showFoods = array.map(menu => {
    let food = `
      <div class="food-data">
        <img src="${menu.image}" alt="" />
        <p class="food-name">${menu.name}</p>
        <p>${formatter.format(menu.price)} ,-</p>
        <button onclick="inputOrder(${menu.id})">
          <p class="order">Order</p>
        </button>
      </div>
      `;

    return food;
  });

  return (document.getElementById("menu-row").innerHTML = showFoods);
};

// =========================================================================================
// Delete Order item
const deleteOrder = () => {
  orderList.splice(0, 1); // Ini Chris yang menemukan idenya, yeay!!! :)

  const showOrderList = orderList.map(orders => {
    let orderTableData = `
    <tr>
      <td class="food">${orders.name}</td>
      <td class="price">${orders.price}</td>
      <td class="quantity">
        <input type="number" value="1" />
      </td>
      <td class="delete">
        <button onClick="deleteOrder()">
          X
        </button>
      </td>
    </tr>
    `;

    return orderTableData;
  });

  totalCharge(orderList);
  return (document.getElementById("menu-table").innerHTML = showOrderList);
};

//===================================================
// Function Total Charge

const totalCharge = orderListParam => {
  let priceTotal = 0;

  for (i = 0; i < orderListParam.length; i++) {
    priceTotal += orderListParam[i].price;
  }

  return (document.getElementById(
    "total-charge"
  ).innerHTML = `Total Charge:  ${formatter.format(priceTotal)} ,-`);
};

//==================================================
// Function clear all order

const clearAllOrder = () => {
  orderList.splice(0);

  const showOrderList = orderList.map(orders => {
    let orderTableData = `
    <tr>
      <td class="food">${orders.name}</td>
      <td class="price">${orders.price}</td>
      <td class="quantity">
        <input type="number" value="1" />
      </td>
      <td class="delete">
        <button onClick="deleteOrder()">
          X
        </button>
      </td>
    </tr>
    `;

    return orderTableData;
  });

  totalCharge(orderList);
  return (document.getElementById("menu-table").innerHTML = showOrderList);
};
