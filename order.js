// =============================================================================
// Input Order via button

const inputOrder = order => {
  orderList.push(menuList[order - 1]) // gimana cara nambahin quantity key ke array of object
  console.log(orderList)

  renderOrderList()

  totalCharge(orderList)
}
