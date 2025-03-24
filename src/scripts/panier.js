document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector("#cartTable");
    const totalAmount = document.querySelector("#totalAmount");
    const cartCounter = document.querySelector(".cart-counter");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartCounter() {
        cartCounter.textContent = cart.length;
    }

    function renderCart() {
        cartContainer.innerHTML = ""; // Vider l'affichage
        if (cart.length === 0) {
            cartContainer.innerHTML = "<tr><td colspan='5'>Votre panier est vide.</td></tr>";
            totalAmount.textContent = "0 FCFA";
            return;
        }

        let total = 0;

        cart.forEach((item, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}" class="cart-image"></td>
                <td>${item.name}</td>
                <td>${item.price} FCFA</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" class="cart-quantity" data-index="${index}">
                </td>
                <td><button class="remove-item" data-index="${index}">❌</button></td>
            `;
            cartContainer.appendChild(row);
            total += item.price * item.quantity;
        });

        totalAmount.textContent = `${total} FCFA`;
        attachEventListeners();
    }

    function attachEventListeners() {
        // Gérer la suppression d'un produit
        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", () => {
                const index = button.dataset.index;
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
                updateCartCounter();
            });
        });

        // Gérer la modification des quantités
        document.querySelectorAll(".cart-quantity").forEach(input => {
            input.addEventListener("input", (event) => {
                const index = event.target.dataset.index;
                cart[index].quantity = parseInt(event.target.value);
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            });
        });
    }

    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1; // Augmenter la quantité
        } else {
            product.quantity = 1;
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCounter();
        renderCart();
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const product = {
                id: button.dataset.id,
                name: button.dataset.name,
                price: parseFloat(button.dataset.price),
                image: button.dataset.image
            };
            addToCart(product);
        });
    });

    updateCartCounter();
    renderCart();
});
