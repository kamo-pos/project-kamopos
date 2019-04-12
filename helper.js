let displayMenu = [
    {
        id: [menuList.id], 
        customer: 'Raisa',  
        dine: true, 
        takeout: false, 
        food: [menuList.name],
        category: [menuList.category],
        quantity: 2, 
        price: [menuList.price], 
        tax: 100000, 
        subtotal: [],
        total: []

    }, 
    {
        id: [menuList.id],
        customer: 'Isyana', 
        dine: false, 
        takeout: true, 
        food: [menuList.name], 
        category: [menuList.category], 
        quantity: 3, 
        price: [menuList.price],
        tax: 100000,
        subtotal: [],
        total: []

    }, 
    {
        id: [menuList.id],
        customer: 'Gempi', 
        dine: false, 
        takeout: true, 
        food: [menuList.name], 
        category: [menuList.category], 
        quantity: 1, 
        price: [menuList.price],
        tax: 100000,
        subtotal: [],
        total: []

    }
]


const calculateTotal = () => {
    let subTotal = (displayMenu.price * displayMenu.quantity);
    let checkTotal = subTotal + displayMenu.tax;

    const menuSubTotal = displayMenu.subTotal
    const menuTotal = displayMenu.total

    menuSubTotal.push(subTotal);
    menuTotal.push(menuTotal)

   return 
}

console.log(calculateTotal(displayMenu))

