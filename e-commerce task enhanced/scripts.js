// Retrieve products from localStorage
let products = JSON.parse(localStorage.getItem("products")) || "[]";

// Retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

// DOM Elements
const productsContainer = document.getElementById("products-container");
const cartItems = document.getElementById("cart-items");
const totalQuantity = document.getElementById("total-quantity");
const totalPrice = document.getElementById("total-price");
const search = document.getElementById("search");
const category = document.getElementById("category");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const sort = document.getElementById("sort");
const applyFilters = document.getElementById("apply-filters");
const pagination = document.getElementById("pagination");
const deleteCartItem = document.getElementById("remove");

let currentPage = 1;
const itemsPerPage = 8;

// Fetch and display products
// async function fetchAPI() {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const productsData = await response.json();
//   localStorage.setItem("products", JSON.stringify(productsData));
//   products = productsData;
//   displayProducts(products);
// }

// Fetch and display products
async function fetchAPI() {
  try {
    const response = await fetch("http://localhost:5000/products");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const productsData = await response.json();
    console.log(productsData); // Debug the data
    localStorage.setItem("products", JSON.stringify(productsData));
    products = productsData;
    displayProducts(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchAPI();
  updateCart(); // Update cart on page load
});

// Display Products
function displayProducts(products) {
  productsContainer.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(start, start + itemsPerPage);

  paginatedProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
    <img src="http://localhost:5000/${product.imgURL}" alt="${product.name}">
      <div class="product-info">
        <h4>${product.name}</h4>
        <p>Category: <span>${product.category}</span></p>
        <p>Price: $<span>${product.price}</span></p>
        <div class="btns"}}>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="ShowDetails(${product.id})">Show details</button>
        </div>
      </div>
    `;
    productsContainer.appendChild(productElement);
  });

  setupPagination(products);
}
function displayProducts(products) {
  console.log(products);
  productsContainer.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(start, start + itemsPerPage);

  paginatedProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
    <img src="http://localhost:5000/${product.imgURL}" alt="${product.name}">
      <div class="product-info">
      <h4>${product.name || "Unnamed Product"}</h4>
      <p>Description: <span>${
        product.description || "No description available"
      }</span></p>
      <p>Category: <span style="color: red;">${
        product.category || "No category"
      }</span></p>
      <p>Price: $<span style="color: red;">${product.price || "0.00"}</span></p>
      <div class="btns">
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="ShowDetails(${product.id})">Show details</button>
      </div>
      </div>
    `;
    productsContainer.appendChild(productElement);
  });

  setupPagination(products);
}

// Add to Cart
function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

// Update Cart
function updateCart() {
  cartItems.innerHTML = "";
  let totalQty = 0;
  let totalCost = 0;

  cart.forEach((item) => {
    totalQty += item.quantity;
    totalCost += item.price * item.quantity;

    const cartItem = document.createElement("ul");
    cartItem.innerHTML = `${item.name} - $${item.price} x ${item.quantity} <button id="remove" onclick="removeFromCart(${item.id})">Remove</button>`;
    cartItems.appendChild(cartItem);
  });

  totalQuantity.innerText = totalQty;
  totalPrice.innerText = totalCost.toFixed(2);
}

// Remove from Cart
function removeFromCart(productId) {
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem.quantity > 1) {
    existingItem.quantity -= 1;
  } else {
    cart = cart.filter((item) => item.id !== productId);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}
// Show Product Details
function ShowDetails(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) {
    console.error("Product not found");
    return;
  }

  // Create Modal if it doesn't exist
  let modal = document.getElementById("product-details-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "product-details-modal";
    modal.classList.add("modal");
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <img src="http://localhost:5000/${product.imgURL}" alt="${product.name}" style="max-width: 100%; height: auto;">
      <h3>${product.name}</h3>
      <p>Category: <span>${product.category}</span></p>
      <p>Price: <span>$${product.price}</span></p>
      <p>${product.description}</p>
    </div>
  `;

  // Show Modal
  modal.style.display = "block";

  // Close Button Functionality
  const closeButton = modal.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    location.reload();
  });

  // Hide Product List
  // productsContainer.style.display = "none";
}

// Search Products
search.addEventListener("input", () => {
  const searchTerm = search.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
});

// Filter Products
applyFilters.addEventListener("click", () => {
  let filteredProducts = products;

  if (category.value) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category.value
    );
  }

  if (minPrice.value) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= minPrice.value
    );
  }

  if (maxPrice.value) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= maxPrice.value
    );
  }

  if (sort.value === "asc") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort.value === "desc") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(filteredProducts);
});

// Pagination
function setupPagination(products) {
  pagination.innerHTML = "";
  const pageCount = Math.ceil(products.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const page = document.createElement("button");
    page.innerText = i;
    page.addEventListener("click", () => {
      currentPage = i;
      displayProducts(products);
    });
    pagination.appendChild(page);
  }
}
