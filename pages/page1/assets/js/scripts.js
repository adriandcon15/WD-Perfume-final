document.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        const dropdown = this.parentElement;
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        
        document.querySelectorAll('.dropdown').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
            }
        });

        dropdown.classList.toggle('active');
    });
});


document.addEventListener('click', function(event) {
    const isDropdown = event.target.closest('.dropdown');
    if (!isDropdown) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




let cart = [];
let cartCount = 0;

function addToCart(productName, price) {
    // Add product to cart
    cart.push({ name: productName, price: price, quantity: 1 });
    cartCount++;

    // Update cart count in navigation
    document.getElementById('cart-count').innerText = cartCount;

    // Update cart popup
    updateCartPopup();
}

function buyNow(productName, price) {
    // Open the checkout page (for simplicity, just log to the console)
    console.log(`Buying: ${productName} for ₱${price}`);
}

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'flex' ? 'none' : 'flex';
}

function updateCartPopup() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsContainer.innerHTML = ''; // Clear previous cart items
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - ₱${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(itemElement);

        total += item.price * item.quantity;
    });

    totalPriceElement.innerText = `Total: ₱${total}`;
}

function checkout() {
    // Here you would implement your checkout process
    alert('Proceeding to checkout...');
}
