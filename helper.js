let displayMenu = [
    {
        id: [menuList.id], 
        customer: 'Raisa',  
        dine: true, 
        takeout: false, 
        food: [menuList.name],
        category: [menuList.category],
        quantity: 2, 
        tax: 100000, 
        subtotal: [],
        price: [], 

    }, 
    {
        id: [menuList.id],
        customer: 'Isyana', 
        dine: false, 
        takeout: true, 
        food: [menuList.name], 
        category: [menuList.category], 
        quantity: 3, 
        tax: 100000,
        subtotal: [],
        price: []
    }, 
    {
        id: [menuList.id],
        customer: 'Gempi', 
        dine: false, 
        takeout: true, 
        food: [menuList.name], 
        category: [menuList.category], 
        quantity: 1, 
        tax: 100000,
        subtotal: [],
        price: []
    }
]

const calculateTotal = displayMenu 

