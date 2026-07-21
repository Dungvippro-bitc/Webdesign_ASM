const STORAGE_KEYS = {
  products: "maxtech_products",
  cart: "maxtech_cart",
  users: "maxtech_users",
  currentUser: "maxtech_current_user",
  orders: "maxtech_orders"
};

const starterProducts = [
  {
    id: 1,
    name: "ApexBook Pro 14",
    category: "Laptops",
    price: 1299,
    stock: 18,
    sold: 312,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
    description: "A slim performance laptop for creators, students, and daily business work.",
    specs: { Processor: "Intel Core Ultra 7", Memory: "16GB RAM", Storage: "1TB SSD", Display: "14-inch OLED" }
  },
  {
    id: 2,
    name: "NovaPhone X",
    category: "Phones",
    price: 899,
    stock: 24,
    sold: 428,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
    description: "A fast 5G smartphone with a sharp display and all-day battery life.",
    specs: { Chipset: "Snapdragon 8 Series", Memory: "12GB RAM", Storage: "256GB", Camera: "50MP Triple Lens" }
  },
  {
    id: 3,
    name: "PulseBuds Max",
    category: "Audio",
    price: 179,
    stock: 62,
    sold: 389,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=80",
    description: "Wireless earbuds with active noise cancellation and studio-inspired sound.",
    specs: { Battery: "32 hours", Charging: "USB-C Wireless", Audio: "ANC + Spatial", Water: "IPX5" }
  },
  {
    id: 4,
    name: "Titan Gaming Desktop",
    category: "Computers",
    price: 1899,
    stock: 9,
    sold: 146,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=900&q=80",
    description: "A high-airflow gaming PC built for 1440p gaming and streaming.",
    specs: { CPU: "Ryzen 7", GPU: "RTX 4070 Super", Memory: "32GB DDR5", Storage: "2TB SSD" }
  },
  {
    id: 5,
    name: "VisionView 27 Monitor",
    category: "Accessories",
    price: 349,
    stock: 31,
    sold: 201,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
    description: "A color-rich 27-inch display for gaming, design, and multitasking.",
    specs: { Size: "27 inches", Resolution: "QHD", Refresh: "165Hz", Panel: "IPS" }
  },
  {
    id: 6,
    name: "StrikeKey Mechanical Keyboard",
    category: "Accessories",
    price: 119,
    stock: 45,
    sold: 268,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
    description: "Compact mechanical keyboard with hot-swappable switches and RGB lighting.",
    specs: { Layout: "75%", Switches: "Tactile", Lighting: "RGB", Connection: "USB-C / Bluetooth" }
  },
  {
    id: 7,
    name: "GlideMouse Wireless",
    category: "Accessories",
    price: 79,
    stock: 54,
    sold: 244,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=900&q=80",
    description: "Lightweight wireless mouse with precise tracking for work and gaming.",
    specs: { Sensor: "26K DPI", Weight: "62g", Battery: "90 hours", Buttons: "6 programmable" }
  },
  {
    id: 8,
    name: "SoundCore Studio Headset",
    category: "Audio",
    price: 249,
    stock: 27,
    sold: 176,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    description: "Comfortable over-ear headset with clear microphone and deep bass.",
    specs: { Driver: "50mm", Microphone: "Detachable", Battery: "45 hours", Audio: "Hi-Res Wireless" }
  },
  {
    id: 9,
    name: "TabEdge 11",
    category: "Tablets",
    price: 599,
    stock: 16,
    sold: 154,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",
    description: "A portable tablet for notes, reading, video calls, and entertainment.",
    specs: { Display: "11-inch 2K", Storage: "128GB", Pencil: "Supported", Battery: "12 hours" }
  },
  {
    id: 10,
    name: "SmartFit Watch 5",
    category: "Wearables",
    price: 229,
    stock: 38,
    sold: 297,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    description: "Health-focused smartwatch with GPS, sleep tracking, and bright display.",
    specs: { Display: "AMOLED", Sensors: "Heart + SpO2", GPS: "Built in", Battery: "8 days" }
  }
];

function getData(key, fallback) {
  return JSON.parse(localStorage.getItem(key)) || fallback;
}

function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function seedProducts() {
  if (!localStorage.getItem(STORAGE_KEYS.products)) {
    setData(STORAGE_KEYS.products, starterProducts);
  }
}

function normalizeProducts() {
  const savedProducts = getData(STORAGE_KEYS.products, starterProducts);
  let changed = false;
  const normalized = savedProducts.map((product, index) => {
    if (typeof product.stock === "number") return product;
    changed = true;
    return { ...product, stock: starterProducts[index]?.stock || 20 };
  });

  if (changed) {
    setData(STORAGE_KEYS.products, normalized);
  }
}

function seedAdminUser() {
  const users = getData(STORAGE_KEYS.users, []);
  const adminEmail = "admin@maxtech.com";

  if (!users.some((user) => user.email === adminEmail)) {
    users.push({
      name: "MAXTECH Admin",
      email: adminEmail,
      password: "admin123",
      phone: "+1 555 0100",
      address: "MAXTECH Head Office",
      role: "admin",
      createdAt: new Date().toISOString()
    });
    setData(STORAGE_KEYS.users, users);
  }
}

function products() {
  seedProducts();
  normalizeProducts();
  return getData(STORAGE_KEYS.products, []);
}

function money(value) {
  return `$${Number(value).toLocaleString("en-US")}`;
}

function currentUser() {
  return getData(STORAGE_KEYS.currentUser, null);
}

function updateNav() {
  const cart = getData(STORAGE_KEYS.cart, []);
  const productMap = new Map(products().map((product) => [product.id, product]));
  const count = cart.reduce((sum, item) => {
    const product = productMap.get(item.id);
    if (!product) return sum;
    return sum + Math.min(item.quantity, product.stock);
  }, 0);
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = count;
  });

  const user = currentUser();
  document.querySelectorAll("[data-user-name]").forEach((el) => {
    el.textContent = user ? user.name : "Account";
  });

  document.querySelectorAll('a[href="login.html"]').forEach((link) => {
    link.href = user ? "profile.html" : "login.html";
  });

  document.querySelectorAll(".navbar-nav").forEach((nav) => {
    const existingAdminLink = nav.querySelector("[data-admin-nav]");
    if (user && user.role === "admin" && !existingAdminLink) {
      const item = document.createElement("li");
      item.className = "nav-item";
      item.setAttribute("data-admin-nav", "true");
      item.innerHTML = '<a class="nav-link" href="admin.html"><i class="fa-solid fa-gauge-high me-1"></i>Admin</a>';
      nav.insertBefore(item, nav.lastElementChild);
    }
    if ((!user || user.role !== "admin") && existingAdminLink) {
      existingAdminLink.remove();
    }
  });
}

function productCard(product) {
  return `
    <div class="col-sm-6 col-lg-4">
      <article class="product-card">
        <a href="product-details.html?id=${product.id}" aria-label="View ${product.name}">
          <img src="${product.image}" alt="${product.name}">
        </a>
        <div class="p-3">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="badge text-bg-primary">${product.category}</span>
            <span class="rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
          </div>
          <h3 class="h5 mb-2">${product.name}</h3>
          <p class="text-muted-max small mb-3">${product.description}</p>
          <p class="small mb-3 ${product.stock > 0 ? "text-muted-max" : "text-danger"}">
            <i class="fa-solid fa-boxes-stacked me-1"></i>${product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>
          <div class="d-flex align-items-center justify-content-between">
            <span class="price">${money(product.price)}</span>
            <button class="btn btn-sm btn-max" data-add-cart="${product.id}" ${product.stock <= 0 ? "disabled" : ""}>
              <i class="fa-solid fa-cart-plus me-1"></i>${product.stock > 0 ? "Add" : "Sold Out"}
            </button>
          </div>
        </div>
      </article>
    </div>
  `;
}

function addToCart(productId, quantity = 1) {
  const product = products().find((item) => item.id === productId);
  if (!product || product.stock <= 0) return false;

  const cart = getData(STORAGE_KEYS.cart, []);
  const found = cart.find((item) => item.id === productId);
  const currentQuantity = found ? found.quantity : 0;
  const allowedQuantity = Math.min(quantity, product.stock - currentQuantity);

  if (allowedQuantity <= 0) return false;

  if (found) {
    found.quantity += allowedQuantity;
  } else {
    cart.push({ id: productId, quantity: allowedQuantity });
  }

  setData(STORAGE_KEYS.cart, cart);
  updateNav();
  return true;
}

function bindAddCartButtons() {
  document.querySelectorAll("[data-add-cart]").forEach((button) => {
    button.addEventListener("click", () => {
      const added = addToCart(Number(button.dataset.addCart));
      button.innerHTML = added ? '<i class="fa-solid fa-check me-1"></i>Added' : '<i class="fa-solid fa-circle-exclamation me-1"></i>Limit';
      setTimeout(() => {
        button.innerHTML = '<i class="fa-solid fa-cart-plus me-1"></i>Add';
      }, 1100);
    });
  });
}

function renderBestSellers() {
  const target = document.querySelector("[data-best-sellers]");
  if (!target) return;

  const topProducts = [...products()].sort((a, b) => b.sold - a.sold).slice(0, 3);
  target.innerHTML = topProducts.map(productCard).join("");
  bindAddCartButtons();
}

function renderProductsPage() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;

  const searchInput = document.querySelector("[data-search]");
  const categorySelect = document.querySelector("[data-category]");
  const sortSelect = document.querySelector("[data-sort]");
  const countLabel = document.querySelector("[data-product-count]");
  const allProducts = products();
  const categories = ["All", ...new Set(allProducts.map((product) => product.category))];

  categorySelect.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");

  function applyFilters() {
    const search = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const sort = sortSelect.value;
    let filtered = allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search);
      const matchesCategory = category === "All" || product.category === category;
      return matchesSearch && matchesCategory;
    });

    if (sort === "price-low") filtered.sort((a, b) => a.price - b.price);
    if (sort === "price-high") filtered.sort((a, b) => b.price - a.price);
    if (sort === "best-selling") filtered.sort((a, b) => b.sold - a.sold);

    countLabel.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`;
    grid.innerHTML = filtered.length
      ? filtered.map(productCard).join("")
      : '<div class="col-12"><div class="panel empty-state"><div><i class="fa-solid fa-magnifying-glass fa-2x mb-3 text-primary"></i><h2 class="h4">No products found</h2><p class="text-muted-max mb-0">Try a different keyword or category.</p></div></div></div>';
    bindAddCartButtons();
  }

  [searchInput, categorySelect, sortSelect].forEach((control) => control.addEventListener("input", applyFilters));
  applyFilters();
}

function productOverviewText(product) {
  const specValues = Object.values(product.specs).join(", ");
  return `${product.name} is designed for shoppers who want reliable ${product.category.toLowerCase()} performance with a polished MAXTECH experience. Its key configuration includes ${specValues}, making it suitable for daily productivity, entertainment, and modern digital workflows.`;
}

function productUseCase(product) {
  const useCases = {
    Laptops: "Best for study, office work, video meetings, design tasks, and portable productivity.",
    Phones: "Best for mobile photography, communication, social media, streaming, and 5G browsing.",
    Audio: "Best for music, online classes, video calls, gaming audio, and focused work sessions.",
    Computers: "Best for gaming, streaming, content creation, multitasking, and high-performance desktop work.",
    Accessories: "Best for upgrading a desk setup with better comfort, speed, accuracy, and daily usability.",
    Tablets: "Best for note taking, reading, browsing, video calls, entertainment, and lightweight creative work.",
    Wearables: "Best for fitness tracking, health monitoring, notifications, GPS workouts, and daily planning."
  };

  return useCases[product.category] || "Best for improving a modern technology setup with dependable performance and practical features.";
}

function renderProductDetails() {
  const detail = document.querySelector("[data-product-detail]");
  if (!detail) return;

  const id = Number(new URLSearchParams(window.location.search).get("id")) || 1;
  const product = products().find((item) => item.id === id);

  if (!product) {
    detail.innerHTML = '<div class="panel empty-state"><div><h1 class="h3">Product not found</h1><a class="btn btn-max mt-3" href="products.html">Back to Products</a></div></div>';
    return;
  }

  detail.innerHTML = `
    <div class="mb-4">
      <a class="btn btn-outline-max" href="products.html"><i class="fa-solid fa-arrow-left me-2"></i>Back to Products</a>
    </div>
    <div class="row g-4 align-items-start">
      <div class="col-lg-6">
        <img class="detail-image rounded-2" src="${product.image}" alt="${product.name}">
      </div>
      <div class="col-lg-6">
        <span class="badge text-bg-primary mb-3">${product.category}</span>
        <h1 class="display-6 fw-bold">${product.name}</h1>
        <div class="rating mb-3"><i class="fa-solid fa-star"></i> ${product.rating} rating - ${product.sold} sold</div>
        <p class="text-muted-max">${product.description}</p>
        <p class="${product.stock > 0 ? "text-muted-max" : "text-danger"}"><i class="fa-solid fa-boxes-stacked text-primary me-2"></i>${product.stock > 0 ? `${product.stock} units available` : "Out of stock"}</p>
        <div class="price fs-2 mb-4">${money(product.price)}</div>
        <div class="d-flex gap-2 mb-4">
          <input class="form-control qty-control" type="number" min="1" max="${product.stock}" value="${product.stock > 0 ? 1 : 0}" data-detail-qty aria-label="Quantity" ${product.stock <= 0 ? "disabled" : ""}>
          <button class="btn btn-max" data-detail-add="${product.id}" ${product.stock <= 0 ? "disabled" : ""}>
            <i class="fa-solid fa-cart-plus me-2"></i>${product.stock > 0 ? "Add to Cart" : "Sold Out"}
          </button>
        </div>
        <div class="product-overview">
          <div class="overview-item">
            <i class="fa-solid fa-microchip"></i>
            <h2 class="h6">Performance</h2>
            <p class="small text-muted-max mb-0">Built for fast, stable use with hardware selected for everyday speed.</p>
          </div>
          <div class="overview-item">
            <i class="fa-solid fa-shield-halved"></i>
            <h2 class="h6">Reliability</h2>
            <p class="small text-muted-max mb-0">A practical choice for customers who need dependable technology.</p>
          </div>
          <div class="overview-item">
            <i class="fa-solid fa-truck-fast"></i>
            <h2 class="h6">MAXTECH Support</h2>
            <p class="small text-muted-max mb-0">Includes browser checkout support and store contact assistance.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4 detail-section">
      <div class="col-lg-7">
        <div class="panel p-4 h-100">
          <p class="eyebrow mb-2">Product overview</p>
          <h2 class="h4 mb-3">Overview</h2>
          <p class="text-muted-max">${productOverviewText(product)}</p>
          <p class="text-muted-max mb-0">${productUseCase(product)}</p>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="panel p-3">
          <p class="eyebrow mb-2">Technical details</p>
          <h2 class="h5 mb-3">Technical Specifications</h2>
          <ul class="spec-list">
            ${Object.entries(product.specs).map(([key, value]) => `<li><span>${key}</span><strong>${value}</strong></li>`).join("")}
            <li><span>Category</span><strong>${product.category}</strong></li>
            <li><span>Customer Rating</span><strong>${product.rating} / 5</strong></li>
            <li><span>Units Sold</span><strong>${product.sold}</strong></li>
            <li><span>Stock Available</span><strong>${product.stock}</strong></li>
            <li><span>Warranty</span><strong>12 months</strong></li>
          </ul>
        </div>
      </div>
    </div>
  `;

  document.querySelector("[data-detail-add]").addEventListener("click", (event) => {
    const qty = Math.max(1, Number(document.querySelector("[data-detail-qty]").value) || 1);
    const added = addToCart(Number(event.currentTarget.dataset.detailAdd), qty);
    event.currentTarget.innerHTML = added ? '<i class="fa-solid fa-check me-2"></i>Added to Cart' : '<i class="fa-solid fa-circle-exclamation me-2"></i>Stock Limit Reached';
  });
}

function cartItems() {
  const map = new Map(products().map((product) => [product.id, product]));
  return getData(STORAGE_KEYS.cart, [])
    .map((item) => ({ ...item, quantity: Math.min(item.quantity, map.get(item.id)?.stock || 0), product: map.get(item.id) }))
    .filter((item) => item.product && item.quantity > 0);
}

function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

function renderCart() {
  const target = document.querySelector("[data-cart]");
  if (!target) return;

  const items = cartItems();
  const summary = document.querySelector("[data-cart-summary]");

  if (!items.length) {
    target.innerHTML = '<div class="panel empty-state"><div><i class="fa-solid fa-cart-shopping fa-2x mb-3 text-primary"></i><h1 class="h4">Your cart is empty</h1><a class="btn btn-max mt-3" href="products.html">Shop Products</a></div></div>';
    summary.innerHTML = "";
    return;
  }

  target.innerHTML = items.map((item) => `
    <div class="cart-row p-3 mb-3">
      <div class="d-flex gap-3 align-items-center">
        <img class="cart-thumb" src="${item.product.image}" alt="${item.product.name}">
        <div class="flex-grow-1">
          <h2 class="h6 mb-1">${item.product.name}</h2>
          <p class="small text-muted-max mb-0">${item.product.category} - ${item.product.stock} in stock</p>
        </div>
        <div class="text-end">
          <strong>${money(item.product.price)}</strong>
          <input class="form-control form-control-sm qty-control mt-2 ms-auto" type="number" inputmode="numeric" min="1" max="${item.product.stock}" value="${Math.min(item.quantity, item.product.stock)}" data-cart-qty="${item.id}" aria-label="Quantity for ${item.product.name}">
        </div>
        <button class="btn btn-sm btn-outline-danger" data-cart-remove="${item.id}" aria-label="Remove ${item.product.name}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  `).join("");

  summary.innerHTML = `
    <div class="summary-panel p-4">
      <h2 class="h5 mb-3">Order Summary</h2>
      <div class="d-flex justify-content-between mb-2"><span>Subtotal</span><strong>${money(cartTotal(items))}</strong></div>
      <div class="d-flex justify-content-between mb-2"><span>Shipping</span><strong>Free</strong></div>
      <hr class="border-secondary">
      <div class="d-flex justify-content-between fs-5 mb-3"><span>Total</span><strong class="price">${money(cartTotal(items))}</strong></div>
      <a class="btn btn-max w-100" href="checkout.html"><i class="fa-solid fa-credit-card me-2"></i>Checkout</a>
    </div>
  `;

  function saveCartQuantity(input) {
    const enteredQuantity = Number(input.value);
    if (!Number.isFinite(enteredQuantity)) {
      input.value = input.defaultValue || 1;
      return;
    }

      const cart = getData(STORAGE_KEYS.cart, []);
      const item = cart.find((entry) => entry.id === Number(input.dataset.cartQty));
      const product = products().find((entry) => entry.id === Number(input.dataset.cartQty));
      if (item && product) {
        item.quantity = Math.min(product.stock, Math.max(1, Math.floor(enteredQuantity)));
      }
      setData(STORAGE_KEYS.cart, cart);
      renderCart();
      updateNav();
  }

  document.querySelectorAll("[data-cart-qty]").forEach((input) => {
    input.addEventListener("change", () => saveCartQuantity(input));
    input.addEventListener("blur", () => {
      if (input.value.trim() === "") input.value = input.defaultValue || 1;
      saveCartQuantity(input);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        input.blur();
      }
    });
  });

  document.querySelectorAll("[data-cart-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      setData(STORAGE_KEYS.cart, getData(STORAGE_KEYS.cart, []).filter((item) => item.id !== Number(button.dataset.cartRemove)));
      renderCart();
      updateNav();
    });
  });
}

function bindAuth() {
  const registerForm = document.querySelector("[data-register-form]");
  const loginForm = document.querySelector("[data-login-form]");
  const authMessage = document.querySelector("[data-auth-message]");

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(registerForm);
      const users = getData(STORAGE_KEYS.users, []);
      const email = data.get("email").trim().toLowerCase();

      if (users.some((user) => user.email === email)) {
        authMessage.textContent = "An account with this email already exists.";
        authMessage.className = "alert alert-danger";
        return;
      }

      const user = {
        name: data.get("name").trim(),
        email,
        password: data.get("password"),
        phone: data.get("phone") || "",
        address: data.get("address") || "",
        role: "customer",
        createdAt: new Date().toISOString()
      };
      users.push(user);
      setData(STORAGE_KEYS.users, users);
      setData(STORAGE_KEYS.currentUser, { name: user.name, email: user.email, role: user.role });
      window.location.href = "index.html";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(loginForm);
      const email = data.get("email").trim().toLowerCase();
      const password = data.get("password");
      const user = getData(STORAGE_KEYS.users, []).find((entry) => entry.email === email && entry.password === password);

      if (!user) {
        authMessage.textContent = "Invalid email or password.";
        authMessage.className = "alert alert-danger";
        return;
      }

      setData(STORAGE_KEYS.currentUser, { name: user.name, email: user.email, role: user.role || "customer" });
      window.location.href = "index.html";
    });
  }
}

function renderCheckout() {
  const form = document.querySelector("[data-checkout-form]");
  const summary = document.querySelector("[data-checkout-summary]");
  if (!form || !summary) return;

  const items = cartItems();
  const user = currentUser();
  const invalidStockItem = items.find((item) => item.quantity > item.product.stock);

  if (user) {
    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    nameInput.value = user.name;
    emailInput.value = user.email;
  }

  if (!items.length) {
    summary.innerHTML = '<div class="summary-panel p-4 text-center"><h2 class="h5">No items to checkout</h2><a class="btn btn-max mt-3" href="products.html">Shop Products</a></div>';
    form.querySelector("button").disabled = true;
    return;
  }

  if (invalidStockItem) {
    summary.innerHTML = `<div class="summary-panel p-4 text-center"><h2 class="h5">Stock limit exceeded</h2><p class="text-muted-max">${invalidStockItem.product.name} only has ${invalidStockItem.product.stock} unit(s) available.</p><a class="btn btn-max mt-2" href="cart.html">Update Cart</a></div>`;
    form.querySelector("button").disabled = true;
    return;
  }

  summary.innerHTML = `
    <div class="summary-panel p-4">
      <h2 class="h5 mb-3">Checkout Summary</h2>
      ${items.map((item) => `
        <div class="d-flex justify-content-between gap-3 mb-2">
          <span>${item.product.name} x ${item.quantity}</span>
          <strong>${money(item.product.price * item.quantity)}</strong>
        </div>
      `).join("")}
      <hr class="border-secondary">
      <div class="d-flex justify-content-between fs-5"><span>Total</span><strong class="price">${money(cartTotal(items))}</strong></div>
    </div>
  `;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const orders = getData(STORAGE_KEYS.orders, []);
    const data = Object.fromEntries(new FormData(form).entries());
    orders.push({ id: Date.now(), customer: data, items, total: cartTotal(items), createdAt: new Date().toISOString() });
    setData(STORAGE_KEYS.orders, orders);
    const allProducts = products();
    items.forEach((item) => {
      const product = allProducts.find((entry) => entry.id === item.id);
      if (product) {
        product.stock = Math.max(0, product.stock - item.quantity);
        product.sold += item.quantity;
      }
    });
    setData(STORAGE_KEYS.products, allProducts);
    setData(STORAGE_KEYS.cart, []);
    updateNav();
    form.innerHTML = '<div class="alert alert-success"><h1 class="h4">Order placed successfully.</h1><p class="mb-0">Thank you for shopping with MAXTECH. Your order has been saved in the browser.</p></div><a class="btn btn-max" href="index.html">Back to Home</a>';
    summary.innerHTML = "";
  });
}

function bindLogout() {
  document.querySelectorAll("[data-logout]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEYS.currentUser);
      updateNav();
      window.location.href = "login.html";
    });
  });
}

function renderProfile() {
  const target = document.querySelector("[data-profile]");
  if (!target) return;

  const user = currentUser();
  if (!user) {
    target.innerHTML = `
      <div class="panel empty-state">
        <div>
          <i class="fa-solid fa-user-lock fa-2x mb-3 text-primary"></i>
          <h1 class="h4">Please login to view your profile.</h1>
          <a class="btn btn-max mt-3" href="login.html">Login</a>
        </div>
      </div>
    `;
    return;
  }

  const fullUser = getData(STORAGE_KEYS.users, []).find((entry) => entry.email === user.email) || user;
  const orders = getData(STORAGE_KEYS.orders, []).filter((order) => order.customer.email === user.email);

  target.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-4">
        <div class="panel p-4 h-100">
          <div class="profile-avatar mb-3">${fullUser.name.charAt(0).toUpperCase()}</div>
          <h1 class="h3">${fullUser.name}</h1>
          <p class="text-muted-max mb-1">${fullUser.email}</p>
          <span class="badge text-bg-primary">${fullUser.role || "customer"}</span>
          <hr class="border-secondary">
          <p class="mb-2"><i class="fa-solid fa-phone text-primary me-2"></i>${fullUser.phone || "No phone saved"}</p>
          <p class="mb-3"><i class="fa-solid fa-location-dot text-primary me-2"></i>${fullUser.address || "No address saved"}</p>
          <button class="btn btn-outline-danger w-100" data-logout><i class="fa-solid fa-right-from-bracket me-2"></i>Logout</button>
          ${fullUser.role === "admin" ? '<a class="btn btn-max w-100 mt-2" href="admin.html"><i class="fa-solid fa-gauge-high me-2"></i>Open Admin Page</a>' : ""}
        </div>
      </div>
      <div class="col-lg-8">
        <div class="panel p-4">
          <h2 class="h4 mb-3">Order History</h2>
          ${orders.length ? orders.map((order) => `
            <div class="admin-row">
              <div>
                <strong>Order #${order.id}</strong>
                <p class="small text-muted-max mb-0">${new Date(order.createdAt).toLocaleString()} - ${order.items.length} item group(s)</p>
              </div>
              <strong class="price">${money(order.total)}</strong>
            </div>
          `).join("") : '<p class="text-muted-max mb-0">No orders yet.</p>'}
        </div>
      </div>
    </div>
  `;
  bindLogout();
}

function isAdmin() {
  const user = currentUser();
  return Boolean(user && user.role === "admin");
}

function renderAdmin() {
  const target = document.querySelector("[data-admin]");
  if (!target) return;

  if (!isAdmin()) {
    target.innerHTML = `
      <div class="panel empty-state">
        <div>
          <i class="fa-solid fa-lock fa-2x mb-3 text-primary"></i>
          <h1 class="h4">Admin access required.</h1>
          <p class="text-muted-max">Login with admin@maxtech.com and password admin123.</p>
          <a class="btn btn-max" href="login.html">Login as Admin</a>
        </div>
      </div>
    `;
    return;
  }

  const allProducts = products();
  const users = getData(STORAGE_KEYS.users, []);
  const orders = getData(STORAGE_KEYS.orders, []);
  const revenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);

  target.innerHTML = `
    <div class="row g-4 mb-4">
      <div class="col-md-3"><div class="admin-stat"><i class="fa-solid fa-box"></i><span>Products</span><strong>${allProducts.length}</strong></div></div>
      <div class="col-md-3"><div class="admin-stat"><i class="fa-solid fa-users"></i><span>Users</span><strong>${users.length}</strong></div></div>
      <div class="col-md-3"><div class="admin-stat"><i class="fa-solid fa-receipt"></i><span>Orders</span><strong>${orders.length}</strong></div></div>
      <div class="col-md-3"><div class="admin-stat"><i class="fa-solid fa-dollar-sign"></i><span>Revenue</span><strong>${money(revenue)}</strong></div></div>
    </div>
    <ul class="nav nav-tabs admin-tabs mb-4" role="tablist">
      <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#productsTab" type="button">Products</button></li>
      <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#ordersTab" type="button">Orders</button></li>
      <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#usersTab" type="button">Users</button></li>
    </ul>
    <div class="tab-content">
      <section class="tab-pane fade show active" id="productsTab">
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="panel p-4">
              <h2 class="h5 mb-3">Add Product</h2>
              <form data-admin-product-form>
                <input class="form-control mb-2" name="name" placeholder="Product name" required>
                <input class="form-control mb-2" name="category" placeholder="Category" required>
                <input class="form-control mb-2" name="price" type="number" min="1" placeholder="Price" required>
                <input class="form-control mb-2" name="stock" type="number" min="0" placeholder="Stock quantity" required>
                <input class="form-control mb-2" name="sold" type="number" min="0" placeholder="Sold quantity" required>
                <input class="form-control mb-2" name="rating" type="number" min="1" max="5" step="0.1" placeholder="Rating" required>
                <input class="form-control mb-2" name="image" placeholder="Image URL" required>
                <textarea class="form-control mb-3" name="description" rows="3" placeholder="Description" required></textarea>
                <button class="btn btn-max w-100" type="submit"><i class="fa-solid fa-plus me-2"></i>Add Product</button>
              </form>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="panel p-4">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h2 class="h5 mb-0">Product Management</h2>
                <button class="btn btn-sm btn-outline-max" data-admin-reset-products><i class="fa-solid fa-rotate-left me-1"></i>Reset Products</button>
              </div>
              <div class="table-responsive">
                <table class="table table-dark table-hover align-middle admin-table">
                  <thead><tr><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Sold</th><th></th></tr></thead>
                  <tbody>
                    ${allProducts.map((product) => `
                      <tr>
                        <td>${product.name}</td>
                        <td>${product.category}</td>
                        <td>${money(product.price)}</td>
                        <td>${product.stock}</td>
                        <td>${product.sold}</td>
                        <td class="text-end">
                          <button class="btn btn-sm btn-outline-max" data-admin-edit="${product.id}"><i class="fa-solid fa-pen"></i></button>
                          <button class="btn btn-sm btn-outline-danger" data-admin-delete="${product.id}"><i class="fa-solid fa-trash"></i></button>
                        </td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="tab-pane fade" id="ordersTab">
        <div class="panel p-4">
          <h2 class="h5 mb-3">Order Management</h2>
          ${orders.length ? orders.map((order) => `
            <div class="admin-row">
              <div>
                <strong>Order #${order.id}</strong>
                <p class="small text-muted-max mb-0">${order.customer.name} - ${order.customer.email} - ${new Date(order.createdAt).toLocaleString()}</p>
              </div>
              <div class="text-end">
                <strong class="price">${money(order.total)}</strong>
                <button class="btn btn-sm btn-outline-danger ms-2" data-admin-order-delete="${order.id}"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
          `).join("") : '<p class="text-muted-max mb-0">No orders have been placed.</p>'}
        </div>
      </section>
      <section class="tab-pane fade" id="usersTab">
        <div class="panel p-4">
          <h2 class="h5 mb-3">User Management</h2>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle admin-table">
              <thead><tr><th>Name</th><th>Email</th><th>Role</th><th></th></tr></thead>
              <tbody>
                ${users.map((user) => `
                  <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td><span class="badge ${user.role === "admin" ? "text-bg-primary" : "text-bg-secondary"}">${user.role || "customer"}</span></td>
                    <td class="text-end">
                      <button class="btn btn-sm btn-outline-max" data-admin-role="${user.email}"><i class="fa-solid fa-user-shield"></i></button>
                      <button class="btn btn-sm btn-outline-danger" data-admin-user-delete="${user.email}" ${user.email === currentUser().email ? "disabled" : ""}><i class="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  `;

  bindAdminActions();
}

function bindAdminActions() {
  const productForm = document.querySelector("[data-admin-product-form]");
  if (productForm) {
    productForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(productForm).entries());
      const allProducts = products();
      allProducts.push({
        id: Date.now(),
        name: data.name,
        category: data.category,
        price: Number(data.price),
        stock: Number(data.stock),
        sold: Number(data.sold),
        rating: Number(data.rating),
        image: data.image,
        description: data.description,
        specs: { Status: "Admin managed", Warranty: "12 months", Source: "Browser database" }
      });
      setData(STORAGE_KEYS.products, allProducts);
      renderAdmin();
    });
  }

  document.querySelectorAll("[data-admin-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.adminDelete);
      setData(STORAGE_KEYS.products, products().filter((product) => product.id !== id));
      setData(STORAGE_KEYS.cart, getData(STORAGE_KEYS.cart, []).filter((item) => item.id !== id));
      renderAdmin();
      updateNav();
    });
  });

  document.querySelectorAll("[data-admin-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const allProducts = products();
      const product = allProducts.find((entry) => entry.id === Number(button.dataset.adminEdit));
      const newPrice = prompt("Enter new price:", product.price);
      if (newPrice === null) return;
      const newSold = prompt("Enter sold quantity:", product.sold);
      if (newSold === null) return;
      const newStock = prompt("Enter stock quantity:", product.stock);
      if (newStock === null) return;
      product.price = Number.isNaN(Number(newPrice)) ? product.price : Number(newPrice);
      product.sold = Number.isNaN(Number(newSold)) ? product.sold : Number(newSold);
      product.stock = Number.isNaN(Number(newStock)) ? product.stock : Math.max(0, Number(newStock));
      setData(STORAGE_KEYS.products, allProducts);
      renderAdmin();
    });
  });

  document.querySelector("[data-admin-reset-products]")?.addEventListener("click", () => {
    setData(STORAGE_KEYS.products, starterProducts);
    renderAdmin();
  });

  document.querySelectorAll("[data-admin-order-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      setData(STORAGE_KEYS.orders, getData(STORAGE_KEYS.orders, []).filter((order) => order.id !== Number(button.dataset.adminOrderDelete)));
      renderAdmin();
    });
  });

  document.querySelectorAll("[data-admin-role]").forEach((button) => {
    button.addEventListener("click", () => {
      const users = getData(STORAGE_KEYS.users, []);
      const user = users.find((entry) => entry.email === button.dataset.adminRole);
      user.role = user.role === "admin" ? "customer" : "admin";
      setData(STORAGE_KEYS.users, users);
      if (user.email === currentUser().email) {
        setData(STORAGE_KEYS.currentUser, { name: user.name, email: user.email, role: user.role });
      }
      renderAdmin();
      updateNav();
    });
  });

  document.querySelectorAll("[data-admin-user-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const email = button.dataset.adminUserDelete;
      setData(STORAGE_KEYS.users, getData(STORAGE_KEYS.users, []).filter((user) => user.email !== email));
      renderAdmin();
    });
  });
}

function bindContact() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.innerHTML = '<div class="alert alert-success mb-0"><h1 class="h4">Message sent.</h1><p class="mb-0">The MAXTECH team will contact you soon.</p></div>';
  });
}

document.addEventListener("DOMContentLoaded", () => {
  seedProducts();
  seedAdminUser();
  updateNav();
  renderBestSellers();
  renderProductsPage();
  renderProductDetails();
  renderCart();
  bindAuth();
  renderCheckout();
  bindContact();
  renderProfile();
  renderAdmin();
  bindLogout();
});
