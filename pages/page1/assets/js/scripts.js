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
    // Check if product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex >= 0) {
        // If product exists, increase quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // If product doesn't exist, add new product to cart
        cart.push({ name: productName, price: price, quantity: 1 });
    }

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

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div>${item.name} - ₱${item.price}</div>
            <div>
                <button onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${index}, 1)">+</button>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);

        total += item.price * item.quantity;
    });

    totalPriceElement.innerText = `Total: ₱${total}`;
}

function updateQuantity(index, change) {
    if (cart[index].quantity + change <= 0) {
        return; // Prevent quantity from going below 1
    }
    cart[index].quantity += change;
    updateCartPopup(); // Re-render cart after update
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart
    cartCount--;
    document.getElementById('cart-count').innerText = cartCount; // Update cart count
    updateCartPopup(); // Re-render cart after removal
}

function checkout() {
    // Here you would implement your checkout process
    alert('Proceeding to checkout...');
}




function toggleMobileMenu() {
    document.querySelector('.nav').classList.toggle('active');
}