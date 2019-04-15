const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0
})

// ===========================================================================================
// Show All Menu
const showAllMenu = array => {
  array.forEach(menu => {
    let foodDiv = `
      <div class="food-data">
        <img src="${menu.image}" alt="" />
        <p class="food-name">${menu.name}</p>
        <p>${formatter.format(menu.price)}</p>
        <button onclick="inputOrder(${menu.id})">
          <p class="order">Order</p>
        </button>
      </div>
      `

    document.getElementById('menu-row').innerHTML += foodDiv
  })
}

// =============================================================================
// Delete Order item
const deleteOrder = () => {
  orderList.splice(0, 1) // Ini Chris yang menemukan idenya, yeay!!! :)

  totalCharge(orderList)
  showOrderList(orderList)
}

const showOrderList = orderList => {
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
    `

    document.getElementById('menu-table').innerHTML += orderTableData
  })
}

//===================================================
// Function Total Charge

const totalCharge = orderList => {
  let priceTotal = 0

  orderList.forEach(order => {
    priceTotal += order.price
  })

  const totalText = formatter.format(priceTotal)
  document.getElementById('total-charge').innerHTML = totalText
}

//==================================================
// Function clear all order

const clearAllOrder = () => {
  orderList.splice(0)

  document.getElementById('total-charge').innerHTML = formatter.format(0)
  document.getElementById('menu-table').innerHTML = ''
}
