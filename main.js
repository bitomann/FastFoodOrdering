const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    orders: [],
    handleOrders: function () {
console.log("Handle Orders", this.orders)
    }
}

const chickenComboMeal = {
    sandwichType: "Chicky-Poo",
    fries: true,
    // [],
    // frySize: function (boolean) {
    //     for ( i=0; i<20; i++ ) {
    //         array[i] = i%2 === 0;
    //     }
    //     this.fries.push(boolean)
    //     console.log("what", this.frySize)
    // },
    drinkSize: "XXL"
    // [],
    // drinkSizePicker: function (size) {
    //     this.drinkSize.push(size)
    // } 
}

const cheeseburgerComboMeal = {
    sandwichType: "Double Cheeseburger",
    fries: false,
    drinkSize: "Large"
}


// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(cheeseburgerComboMeal)
// Invoke the function to return the list of all orders
restaurant.handleOrders()
// Output all orders to the console using console.table()
console.table(restaurant.orders);