let cart = [];
let price = 0;

function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        alert(`${itemName} is already in the cart!`);
    } else {
        const orderItem = { name: itemName, price: itemPrice };
        cart.push(orderItem);

        price += itemPrice;
        localStorage.setItem('total', price);

        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${itemName} added to cart!`);
    }
}