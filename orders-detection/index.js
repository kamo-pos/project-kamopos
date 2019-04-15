// -----------------------------------------------------------------------------

const formatToRupiah = Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0
})

// -----------------------------------------------------------------------------

const renderFoodsConsole = data => {
  data.forEach(item => {
    const { id, name, price } = item

    console.log(`${id}: ${name}: ${formatToRupiah.format(price)} `)
  })
}

const renderFoodsDOM = data => {
  data.forEach(item => {
    const { id, name, price } = item

    document.getElementById('foods').innerHTML += `
      <li>${id}: ${name}: ${formatToRupiah.format(price)}</li>
    `
  })
}

// -----------------------------------------------------------------------------

const renderOrdersConsole = data => {
  const registeredFoods = []

  data.forEach((item, itemIndex) => {
    const dataPairs = data
    const { id, foodId } = item

    // check if the food is not registered yet in the orders list
    if (!registeredFoods.includes(foodId)) {
      // push the foodId if it is new for the orders list
      registeredFoods.push(foodId)

      // -----------------------------------------------------------------------
      // find specific food in dataFoods, by foodId
      const foundFood = dataFoods.find(food => {
        if (food.id === foodId) {
          return food
        }
      })

      // -----------------------------------------------------------------------
      // counter for quantity of the food
      let foodQuantity = 1

      dataPairs.forEach((itemPair, itemPairIndex) => {
        if (foodId === itemPair.foodId && itemIndex !== itemPairIndex) {
          foodQuantity += 1
        }
      })

      // -----------------------------------------------------------------------
      // only show if the food has not been shown yet
      console.log(`
        Food: ${foundFood.name}
        Quantity: ${foodQuantity}
        Price: ${formatToRupiah.format(foundFood.price * foodQuantity)}
      `)
    }
  })
}

const addFoodToOrders = () => {}

// -----------------------------------------------------------------------------

// renderFoodsConsole(dataFoods)
renderFoodsDOM(dataFoods)

renderOrdersConsole(dataOrders)
