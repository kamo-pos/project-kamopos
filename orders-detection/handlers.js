const addFoodToOrders = foodId => {
  dataOrders.data.push({
    id: dataOrders.nextId,
    foodId: foodId
  })

  dataOrders.nextId++
  renderOrdersConsole(dataOrders.data)
}
