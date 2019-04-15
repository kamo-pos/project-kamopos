// =========================================================================================
// Input Order via button

const inputOrder = order => {
  if (order === menuList[order - 1].id && order) {
    orderList.push(menuList[order - 1]); //gimana cara nambahin quantity key ke array of object
    console.log(orderList);
  }

  // for (let i = 0; i < order.length; i++) {}
  // if (orderList.includes(orderList.id === order)) {
  //   orderList.quantity += 1;
  // } else if (order === menuList[order - 1].id) {
  //   orderList.push({
  //     id: menuList[order - 1].id,
  //     name: menuList[order - 1].name,
  //     price: menuList[order - 1].price,
  //     category: menuList[order - 1].category,
  //     image: menuList[order - 1].image,
  //     quantity: 1
  //   });

  //   console.log(orderList);
  // }
  const showOrderList = orderList.map(orders => {
    let orderTableData = `
    <tr>
      <td class="food">${orders.name}</td>
      <td class="price">${formatter.format(orders.price)} ,-</td>
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
  document.getElementById("menu-table").innerHTML = showOrderList;
};
// End of Input Order via button
