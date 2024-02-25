document.addEventListener('DOMContentLoaded', function () {
    displayOrderSummary();
});

function displayOrderSummary() {
    const orderList = document.getElementById('order-list');
    const totalElement = document.getElementById('total-price');

    const storedCart = localStorage.getItem('cart');
    const totalPrice = localStorage.getItem('total');

    orderList.innerHTML = '';

    if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            orderList.appendChild(listItem);
        });
    }

    totalElement.textContent = `Total Price: $${totalPrice ? parseFloat(totalPrice).toFixed(2) : '0.00'}`;
}


function completeCheckout() {
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    carts = localStorage.getItem('cart');

    if (fullName && address && phone && email && carts) {
        const confirmationMessage = `Order placed successfully!\n\nDelivery Details:\nFull Name: ${fullName}\nAddress: ${address}\nPhone: ${phone}\nEmail: ${email}`;
        alert(confirmationMessage);

        localStorage.removeItem('cart');
        localStorage.removeItem('price');
        localStorage.removeItem('order-list');
        localStorage.removeItem('total-price');
        localStorage.setItem('total', 0);


        window.location.href = 'index.html';
    } else if (fullName && address && phone && email && !carts){
        alert('Your cart is empty.');
    } else{
        alert('Please fill in all fields.');
    }
}