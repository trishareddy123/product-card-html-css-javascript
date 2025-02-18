// Cart Counter
let cartCount = 0;

// Select all "Add to Cart" buttons
const cartButtons = document.querySelectorAll('.add-to-cart');

// Loop through each button
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        
        // Get product details
        const productName = button.getAttribute('data-name');
        const productPrice = button.getAttribute('data-price');
        
        // Show a notification
        alert(`Added "${productName}" to cart! Price: $${productPrice}`);
    });
});
