function loadPage(page) {
  const mainContent = document.querySelector(".main-content");

  switch (page) {
    case "dashboard":
      mainContent.innerHTML = `
          <header class="header">
            <h1>Dashboard Admin</h1>
            <div class="user-info">
              <img
                src="Gambarkomik/gambar_sultan.jpg"
                alt="Profile"
                class="logo"
              />
              <p>Welcome back, Sultan</p>
            </div>
          </header>
          <section class="cards">
            <div class="card"><h3>Total Users</h3><p>1,200</p></div>
            <div class="card"><h3>Total Products</h3><p>350</p></div>
            <div class="card"><h3>Total Orders</h3><p>890</p></div>
            <div class="card"><h3>Revenue</h3><p>$12,500</p></div>
          </section>
          <form action="protofolio.html" method="get">
            <button type="submit" class="button">Beranda</button>
          </form>
        `;
      break;

    case "products":
      mainContent.innerHTML = `
          <h1>Product Management</h1>
          <button onclick="addProduct()">Add Product</button>
          <div id="product-list"></div>
        `;
      break;

    case "orders":
      mainContent.innerHTML = `
          <h1>Order Management</h1>
          <input type="text" placeholder="Search Orders..." oninput="filterOrders(this)">
          <ul id="order-list">
            <li>Order #1 - Completed <button onclick="editOrder(1)">Edit</button></li>
            <li>Order #2 - Pending <button onclick="editOrder(2)">Edit</button></li>
            <li>Order #3 - Canceled <button onclick="editOrder(3)">Edit</button></li>
          </ul>
        `;
      break;

    case "users":
      mainContent.innerHTML = `
          <h1>User Information</h1>
          <ul>
            <li>John Doe</li>
            <li>Jane Smith</li>
            <li>Albert Johnson</li>
          </ul>
        `;
      break;

    case "reports":
      mainContent.innerHTML = `
          <h1>Reports</h1>
          <p>Generate and view your reports here.</p>
        `;
      break;

    case "settings":
      mainContent.innerHTML = `
          <h1>Settings</h1>
          <button onclick="toggleDarkMode()">Toggle Dark Mode</button>
        `;
      break;

    default:
      mainContent.innerHTML = "<h1>Page Not Found</h1>";
      break;
  }
}

// Add product function
function addProduct() {
  const productList = document.getElementById("product-list");
  const productContainer = document.createElement("div");

  productContainer.innerHTML = `
      <input type="file" accept="image/*" />
      <textarea placeholder="Enter product description"></textarea>
    `;

  productList.appendChild(productContainer);
}

// Filter orders
function filterOrders(input) {
  const filter = input.value.toLowerCase();
  const orders = document.querySelectorAll("#order-list li");

  orders.forEach((order) => {
    const text = order.textContent.toLowerCase();
    order.style.display = text.includes(filter) ? "" : "none";
  });
}

// Edit order (dummy function)
function editOrder(orderId) {
  alert(`Editing Order #${orderId}`);
}

// Dark mode toggle with localStorage support
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Load theme based on user's preference
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

// Load dashboard and theme on page load
window.onload = () => {
  loadTheme();
  loadPage("dashboard");
};

// Sidebar navigation with active link management
document.querySelectorAll(".sidebar ul li a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const page = this.textContent.toLowerCase();
    loadPage(page);

    document
      .querySelectorAll(".sidebar a")
      .forEach((a) => a.classList.remove("active"));
    this.classList.add("active");
  });
});
