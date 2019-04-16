// =============================================================================
// Input Order via button

const inputOrder = order => {
    orderList.push(menuList[order - 1]) // gimana cara nambahin quantity key ke array of object
    console.log(orderList)


  document.getElementById('menu-table').innerHTML = ''

  orderList.forEach(orders => {
    let orderTableRow = `
      <tr>
        <td class="food">${orders.name}</td>
        <td class="price">${formatter.format(orders.price)}</td>
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

    document.getElementById('menu-table').innerHTML += orderTableRow
  })

  totalCharge(orderList)
}
