const STORAGE_KEYS = {
  products: "maxtech_products",
  catalogVersion: "maxtech_catalog_version",
  cart: "maxtech_cart",
  users: "maxtech_users",
  currentUser: "maxtech_current_user",
  orders: "maxtech_orders",
  messages: "maxtech_messages"
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
    category: "Smartphones",
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
    category: "Headphones",
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
    category: "Monitors",
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
    category: "Headphones",
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
  },
  {
    id: 11,
    name: "OrbitCam Creator 4K",
    category: "Cameras",
    price: 699,
    stock: 14,
    sold: 118,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    description: "A compact mirrorless camera for detailed photos, travel videos, and live content.",
    specs: { Sensor: "24MP APS-C", Video: "4K 60fps", Stabilization: "5-axis", Connectivity: "Wi-Fi + Bluetooth" }
  },
  {
    id: 12,
    name: "VaultDrive Portable SSD",
    category: "Storage",
    price: 159,
    stock: 48,
    sold: 221,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=80",
    description: "Pocket-sized high-speed storage for projects, backups, and large media libraries.",
    specs: { Capacity: "2TB", Speed: "1,050MB/s", Interface: "USB 3.2 Gen 2", Protection: "Drop resistant" }
  },
  {
    id: 13,
    name: "MeshWave Wi-Fi 6E System",
    category: "Networking",
    price: 299,
    stock: 23,
    sold: 167,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    description: "A three-node mesh system that delivers fast, stable coverage throughout the home.",
    specs: { Standard: "Wi-Fi 6E", Coverage: "7,500 sq ft", Ports: "3 Gigabit per node", Security: "WPA3" }
  },
  {
    id: 14,
    name: "ArcControl Pro Gamepad",
    category: "Gaming",
    price: 89,
    stock: 57,
    sold: 236,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=80",
    description: "A responsive wireless controller with precise triggers and customizable rear buttons.",
    specs: { Connection: "2.4GHz + Bluetooth", Battery: "30 hours", Controls: "Hall effect sticks", Compatibility: "PC + Mobile" }
  },
  {
    id: 15,
    name: "PixelSight 4K Webcam",
    category: "Cameras",
    price: 139,
    stock: 34,
    sold: 184,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=900&q=80",
    description: "A crisp conference and streaming camera with smart framing in changing light.",
    specs: { Resolution: "4K 30fps", Focus: "Auto", Microphones: "Dual noise reduction", Privacy: "Built-in shutter" }
  },
  {
    id: 16,
    name: "AeroDock 12-in-1 Hub",
    category: "Accessories",
    price: 129,
    stock: 41,
    sold: 198,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",
    description: "A versatile USB-C dock that turns one laptop port into a complete workstation.",
    specs: { Video: "Dual 4K HDMI", Charging: "100W USB-C PD", Network: "Gigabit Ethernet", Reader: "SD + microSD" }
  },
  {
    id: 17,
    name: "FrostCore 360 RGB Cooler",
    category: "Components",
    price: 169,
    stock: 20,
    sold: 109,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80",
    description: "A quiet liquid CPU cooler built to handle demanding gaming and creative workloads.",
    specs: { Radiator: "360mm", Fans: "3 x 120mm PWM", Lighting: "Addressable RGB", Support: "Intel + AMD" }
  },
  {
    id: 18,
    name: "VoltGuard 20000 Power Bank",
    category: "Power",
    price: 79,
    stock: 66,
    sold: 254,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80",
    description: "High-capacity portable power for phones, tablets, handheld consoles, and laptops.",
    specs: { Capacity: "20,000mAh", Output: "65W USB-C PD", Ports: "2 USB-C + USB-A", Display: "Digital charge level" }
  },
  {
    id: 19,
    name: "HomeBeam Smart Projector",
    category: "Displays",
    price: 549,
    stock: 12,
    sold: 92,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80",
    description: "A compact smart projector for large-screen films, presentations, and console gaming.",
    specs: { Resolution: "1080p HDR", Brightness: "900 ANSI lumens", Screen: "Up to 150 inches", Audio: "Dual 8W speakers" }
  },
  {
    id: 20,
    name: "EchoRoom Smart Speaker",
    category: "Smart Home",
    price: 149,
    stock: 36,
    sold: 173,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
    description: "Room-filling wireless audio with voice control and multi-room synchronization.",
    specs: { Drivers: "360-degree array", Wireless: "Wi-Fi + Bluetooth", Control: "Voice + Touch", Pairing: "Stereo + Multi-room" }
  },
  {
    id: 21,
    name: "Vector GX Graphics Card",
    category: "Components",
    price: 749,
    stock: 11,
    sold: 131,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=900&q=80",
    description: "A powerful graphics card for high-refresh gaming, rendering, and accelerated creation.",
    specs: { Memory: "16GB GDDR6", Boost: "2.5GHz", Outputs: "3 DisplayPort + HDMI", Cooling: "Triple fan" }
  },
  {
    id: 22,
    name: "Immersion VR2 Headset",
    category: "Gaming",
    price: 499,
    stock: 17,
    sold: 103,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=900&q=80",
    description: "A standalone virtual reality headset with sharp visuals and room-scale tracking.",
    specs: { Display: "Dual 2K", Refresh: "120Hz", Tracking: "Inside-out 6DoF", Storage: "256GB" }
  },
  {
    id: 23,
    name: "Apple iPhone 16 Pro",
    brand: "Apple",
    category: "Smartphones",
    price: 1199,
    stock: 21,
    sold: 491,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80",
    description: "A premium iPhone with pro-grade cameras, fast performance, and a refined titanium design.",
    specs: { Chipset: "Apple A18 Pro", Display: "6.3-inch OLED", Storage: "256GB", Camera: "48MP Fusion system" }
  },
  {
    id: 24,
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 1299,
    stock: 19,
    sold: 438,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80",
    description: "A flagship Android smartphone with an expansive display, advanced cameras, and S Pen control.",
    specs: { Chipset: "Snapdragon 8 Elite", Display: "6.9-inch Dynamic AMOLED", Storage: "512GB", Camera: "200MP wide camera" }
  }
].map((product) => ({ brand: "MAXTECH", ...product }));

const CATALOG_VERSION = 3;

function getData(key, fallback) {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? fallback : JSON.parse(storedValue) ?? fallback;
  } catch (error) {
    localStorage.removeItem(key);
    return fallback;
  }
}

function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function cleanText(value, maxLength = 500) {
  return String(value ?? "").replace(/[<>]/g, "").trim().slice(0, maxLength);
}

function bindNumericInputs() {
  document.querySelectorAll("[data-numeric]").forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "");
    });
  });
}

async function createPasswordCredentials(password) {
  if (!window.crypto?.subtle) {
    return { password };
  }

  const salt = window.crypto.randomUUID
    ? window.crypto.randomUUID()
    : Array.from(window.crypto.getRandomValues(new Uint32Array(4)), (value) => value.toString(16)).join("");
  const encoded = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await window.crypto.subtle.digest("SHA-256", encoded);
  const passwordHash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  return { passwordSalt: salt, passwordHash };
}

async function passwordMatches(user, password) {
  if (!user) return false;
  if (!user.passwordHash || !user.passwordSalt || !window.crypto?.subtle) {
    return user.password === password;
  }

  const encoded = new TextEncoder().encode(`${user.passwordSalt}:${password}`);
  const digest = await window.crypto.subtle.digest("SHA-256", encoded);
  const passwordHash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  return passwordHash === user.passwordHash;
}

function safeReturnPage(value) {
  const allowedPages = new Set(["index.html", "products.html", "cart.html", "checkout.html", "profile.html", "admin.html"]);
  return allowedPages.has(value) ? value : "index.html";
}

function seedProducts() {
  if (!localStorage.getItem(STORAGE_KEYS.products)) {
    setData(STORAGE_KEYS.products, starterProducts);
    localStorage.setItem(STORAGE_KEYS.catalogVersion, String(CATALOG_VERSION));
    return;
  }

  const savedVersion = Number(localStorage.getItem(STORAGE_KEYS.catalogVersion) || 1);
  if (savedVersion < CATALOG_VERSION) {
    const savedProducts = getData(STORAGE_KEYS.products, []);
    const savedIds = new Set(savedProducts.map((product) => product.id));
    const migratedProducts = savedProducts.map((product) => {
      const starter = starterProducts.find((entry) => entry.id === product.id);
      return {
        ...product,
        brand: product.brand || starter?.brand || "MAXTECH",
        category: savedVersion < 3 && starter ? starter.category : product.category,
        specs: product.specs && typeof product.specs === "object" ? product.specs : starter?.specs || {}
      };
    });
    const newProducts = starterProducts.filter((product) => !savedIds.has(product.id));
    setData(STORAGE_KEYS.products, [...migratedProducts, ...newProducts]);
    localStorage.setItem(STORAGE_KEYS.catalogVersion, String(CATALOG_VERSION));
  }
}

function normalizeProducts() {
  const savedProducts = getData(STORAGE_KEYS.products, starterProducts);
  let changed = false;
  const normalized = savedProducts.map((product) => {
    const starter = starterProducts.find((entry) => entry.id === product.id);
    const normalizedProduct = { ...product };

    if (typeof normalizedProduct.stock !== "number") {
      normalizedProduct.stock = starter?.stock || 20;
      changed = true;
    }
    if (!normalizedProduct.brand) {
      normalizedProduct.brand = starter?.brand || "MAXTECH";
      changed = true;
    }
    if (!normalizedProduct.specs || typeof normalizedProduct.specs !== "object") {
      normalizedProduct.specs = starter?.specs || {};
      changed = true;
    }

    return normalizedProduct;
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

function renderFooter() {
  const isSignedIn = Boolean(currentUser());
  const accountHref = isSignedIn ? "profile.html" : "login.html";
  const accountLabel = isSignedIn ? "My Profile" : "My Account";

  document.querySelectorAll("[data-site-footer]").forEach((footer) => {
    footer.innerHTML = `
      <div class="container">
        <div class="row gy-4 footer-main">
          <div class="col-lg-4">
            <a class="footer-brand" href="index.html"><span class="brand-mark">MAX</span>TECH</a>
            <p class="footer-copy">Performance technology for productive work, immersive play, and connected everyday life.</p>
            <div class="footer-assurance">
              <span><i class="fa-solid fa-boxes-stacked" aria-hidden="true"></i>Stock-aware cart</span>
              <span><i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i>Order history</span>
            </div>
          </div>
          <div class="col-6 col-md-3 col-lg-2">
            <h2 class="footer-heading">Shop</h2>
            <ul class="footer-links">
              <li><a href="products.html">All Products</a></li>
              <li><a href="index.html#best-sellers">Best Sellers</a></li>
              <li><a href="cart.html">Shopping Cart</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 col-lg-2">
            <h2 class="footer-heading">Customer Care</h2>
            <ul class="footer-links">
              <li><a href="contact.html">Contact Support</a></li>
              <li><a href="${accountHref}">${accountLabel}</a></li>
              <li><a href="checkout.html">Go to Checkout</a></li>
            </ul>
          </div>
          <div class="col-md-6 col-lg-4">
            <h2 class="footer-heading">Contact MAXTECH</h2>
            <ul class="footer-contact-list">
              <li><i class="fa-solid fa-location-dot" aria-hidden="true"></i><span>123 Innovation Street, New York, USA</span></li>
              <li><i class="fa-solid fa-envelope" aria-hidden="true"></i><a href="mailto:support@maxtech.com">support@maxtech.com</a></li>
              <li><i class="fa-solid fa-phone" aria-hidden="true"></i><a href="tel:+15550188">+1 555 0188</a></li>
            </ul>
            <div class="footer-socials" aria-label="MAXTECH social media">
              <a class="social-link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="MAXTECH on Facebook" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a class="social-link" href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="MAXTECH on X" title="X"><i class="fa-brands fa-x-twitter"></i></a>
              <a class="social-link" href="https://zalo.me/" target="_blank" rel="noopener noreferrer" aria-label="MAXTECH on Zalo" title="Zalo"><i class="fa-solid fa-comment-dots"></i></a>
              <a class="social-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="MAXTECH on Instagram" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom d-flex flex-wrap justify-content-between align-items-center gap-3 small text-muted-max">
          <span>&copy; ${new Date().getFullYear()} MAXTECH. All rights reserved.</span>
          <div class="footer-payment">
            <span><i class="fa-solid fa-user-lock" aria-hidden="true"></i>Account checkout</span>
            <span><i class="fa-solid fa-money-bill-wave" aria-hidden="true"></i>Cash or bank transfer</span>
          </div>
        </div>
      </div>
    `;
  });
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

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const activePage = {
    "product-details.html": "products.html",
    "checkout.html": "cart.html",
    "login.html": user ? "profile.html" : "login.html",
    "register.html": user ? "profile.html" : "login.html"
  }[currentPage] || currentPage;

  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.remove("active");
    link.removeAttribute("aria-current");
    const href = (link.getAttribute("href") || "").split("?")[0];
    if (href === activePage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function productCard(product, columnClass = "col-sm-6 col-lg-4") {
  const name = escapeHtml(product.name);
  const category = escapeHtml(product.category);
  const brand = escapeHtml(product.brand || "MAXTECH");
  const description = escapeHtml(product.description);
  const image = escapeHtml(product.image);

  return `
    <div class="${columnClass}">
      <article class="product-card">
        <a class="product-media" href="product-details.html?id=${product.id}" aria-label="View ${name}">
          <img src="${image}" alt="${name}" loading="lazy">
        </a>
        <div class="p-3 product-card-body">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="product-brand">${brand}</span>
            <span class="rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
          </div>
          <span class="product-category mb-2">${category}</span>
          <h3 class="h5 mb-2"><a href="product-details.html?id=${product.id}">${name}</a></h3>
          <p class="text-muted-max small mb-3 product-description">${description}</p>
          <p class="small mb-3 ${product.stock > 0 ? "text-muted-max" : "text-danger"}">
            <i class="fa-solid fa-boxes-stacked me-1"></i>${product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>
          <div class="d-flex align-items-center justify-content-between product-card-actions">
            <span class="price">${money(product.price)}</span>
            <button class="btn btn-sm btn-max" data-add-cart="${product.id}" aria-label="Add ${name} to cart" ${product.stock <= 0 ? "disabled" : ""}>
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
  const brandSelect = document.querySelector("[data-brand]");
  const sortSelect = document.querySelector("[data-sort]");
  const countLabel = document.querySelector("[data-product-count]");
  const pagination = document.querySelector("[data-product-pagination]");
  const categoryTabs = document.querySelectorAll("[data-category-tab]");
  const allProducts = products();
  const categories = ["All", ...new Set(allProducts.map((product) => product.category).sort())];
  const brands = ["All", ...new Set(allProducts.map((product) => product.brand || "MAXTECH").sort())];
  const pageSize = 8;
  let currentPage = 1;

  categorySelect.innerHTML = categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
  brandSelect.innerHTML = brands.map((brand) => `<option value="${escapeHtml(brand)}">${escapeHtml(brand)}</option>`).join("");

  function updateCategoryTabs() {
    categoryTabs.forEach((tab) => {
      const active = tab.dataset.categoryTab === categorySelect.value;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });
  }

  function renderPagination(totalPages) {
    if (totalPages <= 1) {
      pagination.innerHTML = "";
      return;
    }

    const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1)
      .map((page) => `
        <li class="page-item ${page === currentPage ? "active" : ""}">
          <button class="page-link" type="button" data-catalog-page="${page}" ${page === currentPage ? 'aria-current="page"' : ""}>${page}</button>
        </li>
      `).join("");

    pagination.innerHTML = `
      <ul class="pagination justify-content-center mb-0">
        <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
          <button class="page-link" type="button" data-catalog-page="${currentPage - 1}" aria-label="Previous page" ${currentPage === 1 ? "disabled" : ""}>
            <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
        </li>
        ${pageButtons}
        <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
          <button class="page-link" type="button" data-catalog-page="${currentPage + 1}" aria-label="Next page" ${currentPage === totalPages ? "disabled" : ""}>
            <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    `;
  }

  function applyFilters() {
    const search = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const brand = brandSelect.value;
    const sort = sortSelect.value;
    let filtered = allProducts.filter((product) => {
      const searchableText = `${product.name} ${product.category} ${product.brand || "MAXTECH"} ${product.description}`.toLowerCase();
      const matchesSearch = searchableText.includes(search);
      const matchesCategory = category === "All" || product.category === category;
      const matchesBrand = brand === "All" || (product.brand || "MAXTECH") === brand;
      return matchesSearch && matchesCategory && matchesBrand;
    });

    if (sort === "price-low") filtered.sort((a, b) => a.price - b.price);
    if (sort === "price-high") filtered.sort((a, b) => b.price - a.price);
    if (sort === "best-selling") filtered.sort((a, b) => b.sold - a.sold);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);
    const pageStart = (currentPage - 1) * pageSize;
    const visibleProducts = filtered.slice(pageStart, pageStart + pageSize);
    const pageEnd = Math.min(pageStart + pageSize, filtered.length);

    countLabel.textContent = filtered.length
      ? `${pageStart + 1}-${pageEnd} of ${filtered.length}`
      : "0 products";
    grid.innerHTML = visibleProducts.length
      ? visibleProducts.map((product) => productCard(product, "col-sm-6 col-lg-4 col-xl-3")).join("")
      : '<div class="col-12"><div class="panel empty-state"><div><i class="fa-solid fa-magnifying-glass fa-2x mb-3 text-primary"></i><h2 class="h4">No products found</h2><p class="text-muted-max mb-0">Try a different keyword or category.</p></div></div></div>';
    renderPagination(filtered.length ? totalPages : 0);
    updateCategoryTabs();
    bindAddCartButtons();
  }

  searchInput.addEventListener("input", () => {
    currentPage = 1;
    applyFilters();
  });

  [categorySelect, brandSelect, sortSelect].forEach((control) => {
    control.addEventListener("change", () => {
      currentPage = 1;
      applyFilters();
    });
  });

  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      categorySelect.value = tab.dataset.categoryTab;
      currentPage = 1;
      applyFilters();
    });
  });

  pagination.addEventListener("click", (event) => {
    const button = event.target.closest("[data-catalog-page]");
    if (!button || button.disabled) return;
    currentPage = Number(button.dataset.catalogPage);
    applyFilters();
    document.querySelector("[data-category-tabs]")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  applyFilters();
}

function productOverviewText(product) {
  const specValues = Object.values(product.specs).join(", ");
  return `${product.name} from ${product.brand || "MAXTECH"} is designed for shoppers who want reliable ${product.category.toLowerCase()} performance. Its key configuration includes ${specValues}, making it suitable for daily productivity, entertainment, and modern digital workflows.`;
}

function productUseCase(product) {
  const useCases = {
    Laptops: "Best for study, office work, video meetings, design tasks, and portable productivity.",
    Phones: "Best for mobile photography, communication, social media, streaming, and 5G browsing.",
    Smartphones: "Best for mobile photography, communication, social media, streaming, and fast everyday apps.",
    Audio: "Best for music, online classes, video calls, gaming audio, and focused work sessions.",
    Headphones: "Best for music, online classes, video calls, gaming audio, and focused work sessions.",
    Computers: "Best for gaming, streaming, content creation, multitasking, and high-performance desktop work.",
    Accessories: "Best for upgrading a desk setup with better comfort, speed, accuracy, and daily usability.",
    Monitors: "Best for gaming, design, office multitasking, media editing, and comfortable large-screen work.",
    Tablets: "Best for note taking, reading, browsing, video calls, entertainment, and lightweight creative work.",
    Wearables: "Best for fitness tracking, health monitoring, notifications, GPS workouts, and daily planning.",
    Cameras: "Best for photography, video production, streaming, meetings, and travel content.",
    Storage: "Best for fast backups, project libraries, portable files, and expanding device capacity.",
    Networking: "Best for reliable home coverage, remote work, gaming, streaming, and connected devices.",
    Gaming: "Best for responsive gameplay, immersive entertainment, and multi-platform setups.",
    Components: "Best for building, cooling, and upgrading high-performance desktop systems.",
    Power: "Best for keeping phones, tablets, handhelds, and laptops charged while traveling.",
    Displays: "Best for films, presentations, console gaming, and flexible large-screen viewing.",
    "Smart Home": "Best for connected rooms, voice control, wireless audio, and daily automation."
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

  const name = escapeHtml(product.name);
  const category = escapeHtml(product.category);
  const brand = escapeHtml(product.brand || "MAXTECH");
  const description = escapeHtml(product.description);
  const image = escapeHtml(product.image);
  document.title = `${product.name} | MAXTECH`;

  detail.innerHTML = `
    <div class="mb-4">
      <a class="btn btn-outline-max" href="products.html"><i class="fa-solid fa-arrow-left me-2"></i>Back to Products</a>
    </div>
    <div class="row g-4 align-items-start">
      <div class="col-lg-6">
        <div class="detail-media">
          <img class="detail-image" src="${image}" alt="${name}">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="d-flex align-items-center gap-2 mb-3">
          <span class="badge text-bg-primary">${category}</span>
          <span class="product-brand">${brand}</span>
        </div>
        <h1 class="display-6 fw-bold">${name}</h1>
        <div class="rating mb-3"><i class="fa-solid fa-star"></i> ${product.rating} rating - ${product.sold} sold</div>
        <p class="text-muted-max">${description}</p>
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
          <p class="text-muted-max">${escapeHtml(productOverviewText(product))}</p>
          <p class="text-muted-max mb-0">${escapeHtml(productUseCase(product))}</p>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="panel p-3">
          <p class="eyebrow mb-2">Technical details</p>
          <h2 class="h5 mb-3">Technical Specifications</h2>
          <ul class="spec-list">
            ${Object.entries(product.specs).map(([key, value]) => `<li><span>${escapeHtml(key)}</span><strong>${escapeHtml(value)}</strong></li>`).join("")}
            <li><span>Brand</span><strong>${brand}</strong></li>
            <li><span>Category</span><strong>${category}</strong></li>
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
    setTimeout(() => {
      event.currentTarget.innerHTML = '<i class="fa-solid fa-cart-plus me-2"></i>Add to Cart';
    }, 1400);
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

function cartSummaryMarkup(items) {
  return `
    <div class="summary-panel p-4">
      <h2 class="h5 mb-3">Order Summary</h2>
      <div class="d-flex justify-content-between mb-2"><span>Subtotal</span><strong>${money(cartTotal(items))}</strong></div>
      <div class="d-flex justify-content-between mb-2"><span>Shipping</span><strong>Free</strong></div>
      <hr class="border-secondary">
      <div class="d-flex justify-content-between fs-5 mb-3"><span>Total</span><strong class="price">${money(cartTotal(items))}</strong></div>
      <a class="btn btn-max w-100" href="checkout.html"><i class="fa-solid fa-lock me-2"></i>Secure Checkout</a>
    </div>
  `;
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
      <div class="cart-row-main">
        <a href="product-details.html?id=${item.id}" aria-label="View ${escapeHtml(item.product.name)}">
          <img class="cart-thumb" src="${escapeHtml(item.product.image)}" alt="${escapeHtml(item.product.name)}">
        </a>
        <div class="cart-product-info flex-grow-1">
          <h2 class="h6 mb-1"><a href="product-details.html?id=${item.id}">${escapeHtml(item.product.name)}</a></h2>
          <p class="small text-muted-max mb-0">${escapeHtml(item.product.category)} - ${item.product.stock} in stock</p>
        </div>
        <div class="text-end cart-price-qty">
          <strong>${money(item.product.price)}</strong>
          <input class="form-control form-control-sm qty-control mt-2 ms-auto" type="number" inputmode="numeric" min="1" max="${item.product.stock}" value="${Math.min(item.quantity, item.product.stock)}" data-cart-qty="${item.id}" aria-label="Quantity for ${item.product.name}">
        </div>
        <button class="btn btn-sm btn-outline-danger icon-button" data-cart-remove="${item.id}" aria-label="Remove ${escapeHtml(item.product.name)}" title="Remove product">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  `).join("");

  summary.innerHTML = cartSummaryMarkup(items);

  function saveCartQuantity(input, rerender = true) {
    const enteredQuantity = Number(input.value);
    if (!Number.isFinite(enteredQuantity)) {
      return false;
    }

    const cart = getData(STORAGE_KEYS.cart, []);
    const item = cart.find((entry) => entry.id === Number(input.dataset.cartQty));
    const product = products().find((entry) => entry.id === Number(input.dataset.cartQty));
    if (!item || !product) return false;

    item.quantity = Math.min(product.stock, Math.max(1, Math.floor(enteredQuantity)));
    input.value = item.quantity;
    setData(STORAGE_KEYS.cart, cart);

    if (rerender) {
      renderCart();
    } else {
      summary.innerHTML = cartSummaryMarkup(cartItems());
    }
    updateNav();
    return true;
  }

  document.querySelectorAll("[data-cart-qty]").forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") saveCartQuantity(input, false);
    });
    input.addEventListener("blur", () => {
      if (input.value.trim() === "") input.value = input.defaultValue || 1;
      saveCartQuantity(input);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (input.value.trim() === "") input.value = input.defaultValue || 1;
        saveCartQuantity(input);
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
  const returnPage = safeReturnPage(new URLSearchParams(window.location.search).get("return"));

  function showAuthError(message) {
    if (!authMessage) return;
    authMessage.textContent = message;
    authMessage.className = "alert alert-danger";
    authMessage.focus?.();
  }

  document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.passwordToggle);
      if (!input) return;
      const willShow = input.type === "password";
      input.type = willShow ? "text" : "password";
      button.setAttribute("aria-label", willShow ? "Hide password" : "Show password");
      button.title = willShow ? "Hide password" : "Show password";
      button.querySelector("i").className = `fa-solid ${willShow ? "fa-eye-slash" : "fa-eye"}`;
    });
  });

  const registrationPassword = registerForm?.elements.password;
  const passwordRules = document.querySelector("[data-password-rules]");
  const passwordChecks = (password) => ({
    length: password.length >= 8,
    case: /[a-z]/.test(password) && /[A-Z]/.test(password),
    number: /\d/.test(password)
  });

  registrationPassword?.addEventListener("input", () => {
    const checks = passwordChecks(registrationPassword.value);
    Object.entries(checks).forEach(([rule, valid]) => {
      const item = passwordRules?.querySelector(`[data-password-rule="${rule}"]`);
      item?.classList.toggle("valid", valid);
      const icon = item?.querySelector("i");
      if (icon) icon.className = `fa-solid ${valid ? "fa-circle-check" : "fa-circle"}`;
    });
  });

  if (returnPage !== "index.html") {
    document.querySelectorAll('a[href="register.html"]').forEach((link) => {
      link.href = `register.html?return=${encodeURIComponent(returnPage)}`;
    });
    document.querySelectorAll('a[href="login.html"]').forEach((link) => {
      link.href = `login.html?return=${encodeURIComponent(returnPage)}`;
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = new FormData(registerForm);
      const users = getData(STORAGE_KEYS.users, []);
      const name = cleanText(data.get("name"), 80);
      const email = String(data.get("email") || "").trim().toLowerCase();
      const phone = String(data.get("phone") || "").replace(/\D/g, "");
      const address = cleanText(data.get("address"), 180);
      const password = String(data.get("password") || "");
      const confirmPassword = String(data.get("confirmPassword") || "");
      const checks = passwordChecks(password);

      if (name.length < 2) {
        showAuthError("Enter your full name.");
        return;
      }

      if (phone.length < 8 || phone.length > 15) {
        showAuthError("Enter a phone number containing 8 to 15 digits.");
        return;
      }

      if (!Object.values(checks).every(Boolean)) {
        showAuthError("Use at least 8 characters with uppercase, lowercase, and a number.");
        return;
      }

      if (password !== confirmPassword) {
        showAuthError("The password confirmation does not match.");
        return;
      }

      if (users.some((user) => user.email === email)) {
        showAuthError("An account with this email already exists.");
        return;
      }

      const credentials = await createPasswordCredentials(password);
      const user = {
        name,
        email,
        ...credentials,
        phone,
        address,
        role: "customer",
        createdAt: new Date().toISOString()
      };
      users.push(user);
      setData(STORAGE_KEYS.users, users);
      setData(STORAGE_KEYS.currentUser, { name: user.name, email: user.email, role: user.role });
      window.location.href = returnPage;
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = new FormData(loginForm);
      const email = String(data.get("email") || "").trim().toLowerCase();
      const password = String(data.get("password") || "");
      const users = getData(STORAGE_KEYS.users, []);
      const user = users.find((entry) => entry.email === email);

      if (!await passwordMatches(user, password)) {
        showAuthError("The email account or password is incorrect.");
        return;
      }

      if (user.password && window.crypto?.subtle) {
        Object.assign(user, await createPasswordCredentials(password));
        delete user.password;
        setData(STORAGE_KEYS.users, users);
      }

      setData(STORAGE_KEYS.currentUser, { name: user.name, email: user.email, role: user.role || "customer" });
      window.location.href = returnPage;
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

  if (!user) {
    form.innerHTML = `
      <div class="alert alert-warning mb-0">
        <h2 class="h5">Login required</h2>
        <p class="mb-3">You must login before you can successfully purchase products.</p>
        <a class="btn btn-max" href="login.html?return=checkout.html"><i class="fa-solid fa-right-to-bracket me-2"></i>Login to Checkout</a>
      </div>
    `;
    summary.innerHTML = `
      <div class="summary-panel p-4 text-center">
        <i class="fa-solid fa-user-lock fa-2x text-primary mb-3"></i>
        <h2 class="h5">Account Required</h2>
        <p class="text-muted-max mb-0">Your cart is saved in the browser and will remain available after login.</p>
      </div>
    `;
    return;
  }

  const fullUser = getData(STORAGE_KEYS.users, []).find((entry) => entry.email === user.email) || user;
  const nameInput = form.querySelector('[name="name"]');
  const emailInput = form.querySelector('[name="email"]');
  const addressInput = form.querySelector('[name="address"]');
  const phoneInput = form.querySelector('[name="phone"]');
  nameInput.value = fullUser.name;
  emailInput.value = fullUser.email;
  addressInput.value = fullUser.address || "";
  phoneInput.value = String(fullUser.phone || "").replace(/\D/g, "");
  nameInput.readOnly = true;
  emailInput.readOnly = true;

  if (!items.length) {
    summary.innerHTML = '<div class="summary-panel p-4 text-center"><h2 class="h5">No items to checkout</h2><a class="btn btn-max mt-3" href="products.html">Shop Products</a></div>';
    form.querySelector("button").disabled = true;
    return;
  }

  if (invalidStockItem) {
    summary.innerHTML = `<div class="summary-panel p-4 text-center"><h2 class="h5">Stock limit exceeded</h2><p class="text-muted-max">${escapeHtml(invalidStockItem.product.name)} only has ${invalidStockItem.product.stock} unit(s) available.</p><a class="btn btn-max mt-2" href="cart.html">Update Cart</a></div>`;
    form.querySelector("button").disabled = true;
    return;
  }

  summary.innerHTML = `
    <div class="summary-panel p-4">
      <h2 class="h5 mb-3">Checkout Summary</h2>
      ${items.map((item) => `
        <div class="d-flex justify-content-between gap-3 mb-2">
          <span>${escapeHtml(item.product.name)} x ${item.quantity}</span>
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
    data.name = fullUser.name;
    data.email = fullUser.email;
    data.address = cleanText(data.address, 180);
    data.phone = String(data.phone || "").replace(/\D/g, "");
    data.payment = cleanText(data.payment, 40);
    data.note = cleanText(data.note, 500);
    const orderId = Date.now();
    const orderCode = `MT-${orderId}`;
    const orderItems = items.map((item) => ({
      id: item.id,
      name: item.product.name,
      category: item.product.category,
      price: item.product.price,
      quantity: item.quantity,
      subtotal: item.product.price * item.quantity,
      image: item.product.image
    }));
    orders.push({ id: orderId, code: orderCode, customer: data, items: orderItems, total: cartTotal(items), status: "Pending", createdAt: new Date().toISOString() });
    setData(STORAGE_KEYS.orders, orders);
    const users = getData(STORAGE_KEYS.users, []);
    const savedUser = users.find((entry) => entry.email === fullUser.email);
    if (savedUser) {
      savedUser.address = data.address;
      savedUser.phone = data.phone;
      setData(STORAGE_KEYS.users, users);
    }
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
    form.innerHTML = `<div class="alert alert-success"><h1 class="h4">Order placed successfully.</h1><p class="mb-1">Order code: <strong>${orderCode}</strong></p><p class="mb-0">You can track this purchase from your profile.</p></div><a class="btn btn-max" href="profile.html"><i class="fa-solid fa-receipt me-2"></i>View Order History</a>`;
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
  const orders = getData(STORAGE_KEYS.orders, [])
    .filter((order) => order.customer?.email === user.email)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const productMap = new Map(products().map((product) => [product.id, product]));

  function orderProductRows(order) {
    return (order.items || []).map((item) => {
      const product = item.product || productMap.get(item.id) || item;
      const name = item.name || product.name || "Product";
      const category = item.category || product.category || "Product";
      const price = Number(item.price || product.price || 0);
      const quantity = Number(item.quantity || 1);
      return `
        <div class="order-product">
          <div>
            <strong>${escapeHtml(name)}</strong>
            <p class="small text-muted-max mb-0">${escapeHtml(category)} - Quantity: ${quantity} - Unit price: ${money(price)}</p>
          </div>
          <strong>${money(price * quantity)}</strong>
        </div>
      `;
    }).join("");
  }

  target.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-4">
        <div class="panel p-4 h-100">
          <div class="profile-avatar mb-3">${escapeHtml((fullUser.name || "U").charAt(0).toUpperCase())}</div>
          <h1 class="h3">${escapeHtml(fullUser.name || "MAXTECH User")}</h1>
          <p class="text-muted-max mb-1">${escapeHtml(fullUser.email)}</p>
          <span class="badge text-bg-primary">${escapeHtml(fullUser.role || "customer")}</span>
          <hr class="border-secondary">
          <p class="mb-2"><i class="fa-solid fa-phone text-primary me-2"></i>${escapeHtml(fullUser.phone || "No phone saved")}</p>
          <p class="mb-3"><i class="fa-solid fa-location-dot text-primary me-2"></i>${escapeHtml(fullUser.address || "No address saved")}</p>
          <button class="btn btn-outline-danger w-100" data-logout><i class="fa-solid fa-right-from-bracket me-2"></i>Logout</button>
          ${fullUser.role === "admin" ? '<a class="btn btn-max w-100 mt-2" href="admin.html"><i class="fa-solid fa-gauge-high me-2"></i>Open Admin Page</a>' : ""}
        </div>
      </div>
      <div class="col-lg-8">
        <div class="panel p-4">
          <h2 class="h4 mb-3">Order History</h2>
          ${orders.length ? orders.map((order) => `
            <div class="order-history-card">
              <div class="d-flex justify-content-between gap-3 align-items-start mb-3">
                <div>
                  <strong>Order Code: ${escapeHtml(order.code || `MT-${order.id}`)}</strong>
                  <p class="small text-muted-max mb-1">${new Date(order.createdAt).toLocaleString()} - ${(order.items || []).length} product group(s)</p>
                  <span class="status-badge"><i class="fa-solid fa-circle-info"></i>${escapeHtml(order.status || "Pending")}</span>
                </div>
                <strong class="price">${money(order.total)}</strong>
              </div>
              ${orderProductRows(order)}
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

function adminSpecificationRow(key = "", value = "") {
  return `
    <div class="admin-spec-row">
      <input class="form-control" name="specKey" value="${escapeHtml(key)}" placeholder="Specification name" aria-label="Specification name">
      <input class="form-control" name="specValue" value="${escapeHtml(value)}" placeholder="Specification value" aria-label="Specification value">
      <button class="btn btn-outline-danger icon-button" type="button" data-admin-spec-remove aria-label="Remove specification" title="Remove specification">
        <i class="fa-solid fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  `;
}

function renderAdmin(activeTab = "productsTab") {
  const target = document.querySelector("[data-admin]");
  if (!target) return;

  if (!isAdmin()) {
    target.innerHTML = `
      <div class="panel empty-state">
        <div>
          <i class="fa-solid fa-lock fa-2x mb-3 text-primary"></i>
          <h1 class="h4">Admin access required.</h1>
          <p class="text-muted-max">Sign in with an administrator account to manage the sales system.</p>
          <a class="btn btn-max" href="login.html?return=admin.html">Administrator Login</a>
        </div>
      </div>
    `;
    return;
  }

  const allProducts = products();
  const users = getData(STORAGE_KEYS.users, []);
  const orders = getData(STORAGE_KEYS.orders, []);
  const messages = getData(STORAGE_KEYS.messages, []);
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
      <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#messagesTab" type="button">Messages${messages.some((message) => message.status === "New") ? ` <span class="badge text-bg-primary">${messages.filter((message) => message.status === "New").length}</span>` : ""}</button></li>
    </ul>
    <div class="tab-content">
      <section class="tab-pane fade show active" id="productsTab">
        <div class="row g-4">
          <div class="col-lg-5">
            <div class="panel p-4">
              <h2 class="h5 mb-3" data-admin-form-title>Add Product</h2>
              <div class="d-none" data-admin-product-message></div>
              <form data-admin-product-form>
                <input name="id" type="hidden">
                <div class="mb-3"><label class="form-label" for="adminProductName">Product name</label><input class="form-control" id="adminProductName" name="name" required></div>
                <div class="row g-2 mb-3">
                  <div class="col-sm-6">
                    <label class="form-label" for="adminProductBrand">Brand</label>
                    <input class="form-control" id="adminProductBrand" name="brand" list="adminBrandOptions" required>
                    <datalist id="adminBrandOptions">
                      ${[...new Set(allProducts.map((product) => product.brand || "MAXTECH"))].sort().map((brand) => `<option value="${escapeHtml(brand)}"></option>`).join("")}
                    </datalist>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="adminProductCategory">Category</label>
                    <input class="form-control" id="adminProductCategory" name="category" list="adminCategoryOptions" required>
                    <datalist id="adminCategoryOptions">
                      ${[...new Set(allProducts.map((product) => product.category))].sort().map((category) => `<option value="${escapeHtml(category)}"></option>`).join("")}
                    </datalist>
                  </div>
                </div>
                <div class="row g-2 mb-3">
                  <div class="col-6"><label class="form-label" for="adminProductPrice">Price</label><input class="form-control" id="adminProductPrice" name="price" type="number" min="1" step="0.01" required></div>
                  <div class="col-6"><label class="form-label" for="adminProductStock">Stock</label><input class="form-control" id="adminProductStock" name="stock" type="number" min="0" required></div>
                  <div class="col-6"><label class="form-label" for="adminProductSold">Units sold</label><input class="form-control" id="adminProductSold" name="sold" type="number" min="0" required></div>
                  <div class="col-6"><label class="form-label" for="adminProductRating">Rating</label><input class="form-control" id="adminProductRating" name="rating" type="number" min="1" max="5" step="0.1" required></div>
                </div>
                <div class="mb-3"><label class="form-label" for="adminProductImage">Image URL</label><input class="form-control" id="adminProductImage" name="image" type="url" required></div>
                <div class="mb-3"><label class="form-label" for="adminProductDescription">Description</label><textarea class="form-control" id="adminProductDescription" name="description" rows="4" required></textarea></div>
                <div class="admin-spec-editor mb-4">
                  <div class="d-flex align-items-center justify-content-between gap-3 mb-2">
                    <label class="form-label mb-0">Technical specifications</label>
                    <button class="btn btn-sm btn-outline-max" type="button" data-admin-spec-add>
                      <i class="fa-solid fa-plus me-1" aria-hidden="true"></i>Add specification
                    </button>
                  </div>
                  <div class="admin-spec-list" data-admin-spec-list>
                    ${adminSpecificationRow()}
                  </div>
                </div>
                <div class="admin-form-actions">
                  <button class="btn btn-max" type="submit"><i class="fa-solid fa-plus me-2"></i><span data-admin-submit-label>Add Product</span></button>
                  <button class="btn btn-outline-max d-none" type="button" data-admin-cancel-edit aria-label="Cancel product editing" title="Cancel editing"><i class="fa-solid fa-xmark"></i></button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="panel p-4">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h2 class="h5 mb-0">Product Management</h2>
                <button class="btn btn-sm btn-outline-max" data-admin-reset-products><i class="fa-solid fa-rotate-left me-1"></i>Reset Products</button>
              </div>
              <div class="table-responsive">
                <table class="table table-dark table-hover align-middle admin-table">
                  <thead><tr><th>Name</th><th>Brand</th><th>Category</th><th>Price</th><th>Stock</th><th>Sold</th><th></th></tr></thead>
                  <tbody>
                    ${allProducts.map((product) => `
                      <tr>
                        <td>${escapeHtml(product.name)}</td>
                        <td>${escapeHtml(product.brand || "MAXTECH")}</td>
                        <td>${escapeHtml(product.category)}</td>
                        <td>${money(product.price)}</td>
                        <td>${product.stock}</td>
                        <td>${product.sold}</td>
                        <td class="text-end">
                          <button class="btn btn-sm btn-outline-max icon-button" data-admin-edit="${product.id}" aria-label="Edit ${escapeHtml(product.name)}" title="Edit product"><i class="fa-solid fa-pen"></i></button>
                          <button class="btn btn-sm btn-outline-danger icon-button" data-admin-delete="${product.id}" aria-label="Delete ${escapeHtml(product.name)}" title="Delete product"><i class="fa-solid fa-trash"></i></button>
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
          ${orders.length ? [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((order) => `
            <div class="admin-row">
              <div>
                <strong>${escapeHtml(order.code || `MT-${order.id}`)}</strong>
                <p class="small text-muted-max mb-1">${escapeHtml(order.customer?.name || "Customer")} - ${escapeHtml(order.customer?.email || "No email")} - ${new Date(order.createdAt).toLocaleString()}</p>
                <p class="small mb-0">${(order.items || []).map((item) => `${escapeHtml(item.name || item.product?.name || "Product")} x ${Number(item.quantity || 1)}`).join(" &middot; ")}</p>
              </div>
              <div class="d-flex align-items-center gap-2 flex-wrap justify-content-end">
                <strong class="price me-1">${money(order.total)}</strong>
                <select class="form-select form-select-sm w-auto" data-admin-order-status="${order.id}" aria-label="Status for order ${escapeHtml(order.code || `MT-${order.id}`)}">
                  ${["Pending", "Processing", "Shipped", "Completed", "Cancelled"].map((status) => `<option value="${status}" ${status === (order.status || "Pending") ? "selected" : ""}>${status}</option>`).join("")}
                </select>
                <button class="btn btn-sm btn-outline-danger icon-button" data-admin-order-delete="${order.id}" aria-label="Delete order ${escapeHtml(order.code || `MT-${order.id}`)}" title="Delete order"><i class="fa-solid fa-trash"></i></button>
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
                    <td>${escapeHtml(user.name)}</td>
                    <td>${escapeHtml(user.email)}</td>
                    <td><span class="badge ${user.role === "admin" ? "text-bg-primary" : "text-bg-secondary"}">${escapeHtml(user.role || "customer")}</span></td>
                    <td class="text-end">
                      <button class="btn btn-sm btn-outline-max icon-button" data-admin-role="${escapeHtml(user.email)}" aria-label="Change role for ${escapeHtml(user.name)}" title="Change role" ${user.email === currentUser().email ? "disabled" : ""}><i class="fa-solid fa-user-shield"></i></button>
                      <button class="btn btn-sm btn-outline-danger icon-button" data-admin-user-delete="${escapeHtml(user.email)}" aria-label="Delete ${escapeHtml(user.name)}" title="Delete user" ${user.email === currentUser().email ? "disabled" : ""}><i class="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section class="tab-pane fade" id="messagesTab">
        <div class="panel p-4">
          <h2 class="h5 mb-3">Customer Messages</h2>
          ${messages.length ? [...messages].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((message) => `
            <div class="admin-row">
              <div>
                <div class="d-flex align-items-center gap-2 flex-wrap mb-1">
                  <strong>${escapeHtml(message.subject)}</strong>
                  <span class="status-badge">${escapeHtml(message.status || "New")}</span>
                </div>
                <p class="small text-muted-max mb-1">${escapeHtml(message.name)} - ${escapeHtml(message.email)} - ${new Date(message.createdAt).toLocaleString()}</p>
                <p class="mb-0">${escapeHtml(message.message)}</p>
              </div>
              <div class="d-flex gap-2">
                ${message.status === "New" ? `<button class="btn btn-sm btn-outline-max" data-admin-message-read="${message.id}"><i class="fa-solid fa-check me-1"></i>Mark Read</button>` : ""}
                <button class="btn btn-sm btn-outline-danger icon-button" data-admin-message-delete="${message.id}" aria-label="Delete message from ${escapeHtml(message.name)}" title="Delete message"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
          `).join("") : '<p class="text-muted-max mb-0">No customer messages yet.</p>'}
        </div>
      </section>
    </div>
  `;

  bindAdminActions();
  if (activeTab !== "productsTab") {
    const trigger = target.querySelector(`[data-bs-target="#${activeTab}"]`);
    if (trigger && window.bootstrap?.Tab) {
      window.bootstrap.Tab.getOrCreateInstance(trigger).show();
    }
  }
}

function bindAdminActions() {
  const productForm = document.querySelector("[data-admin-product-form]");
  const formTitle = document.querySelector("[data-admin-form-title]");
  const submitLabel = document.querySelector("[data-admin-submit-label]");
  const cancelEditButton = document.querySelector("[data-admin-cancel-edit]");
  const productMessage = document.querySelector("[data-admin-product-message]");
  const specificationList = document.querySelector("[data-admin-spec-list]");
  const addSpecificationButton = document.querySelector("[data-admin-spec-add]");

  function setSpecificationRows(specs = {}) {
    if (!specificationList) return;
    const entries = Object.entries(specs);
    specificationList.innerHTML = entries.length
      ? entries.map(([key, value]) => adminSpecificationRow(key, value)).join("")
      : adminSpecificationRow();
  }

  function resetProductForm() {
    if (!productForm) return;
    productForm.reset();
    productForm.elements.id.value = "";
    formTitle.textContent = "Add Product";
    submitLabel.textContent = "Add Product";
    cancelEditButton.classList.add("d-none");
    productMessage.className = "d-none";
    setSpecificationRows();
  }

  addSpecificationButton?.addEventListener("click", () => {
    specificationList?.insertAdjacentHTML("beforeend", adminSpecificationRow());
    specificationList?.querySelector(".admin-spec-row:last-child input")?.focus();
  });

  specificationList?.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-admin-spec-remove]");
    if (!removeButton) return;
    const rows = specificationList.querySelectorAll(".admin-spec-row");
    if (rows.length === 1) {
      rows[0].querySelectorAll("input").forEach((input) => {
        input.value = "";
      });
      return;
    }
    removeButton.closest(".admin-spec-row")?.remove();
  });

  if (productForm) {
    productForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(productForm);
      const data = Object.fromEntries(formData.entries());
      const allProducts = products();
      const productId = Number(data.id);
      const specKeys = formData.getAll("specKey").map((key) => cleanText(key, 50));
      const specValues = formData.getAll("specValue").map((value) => cleanText(value, 100));
      const specs = {};
      let imageUrl;

      for (let index = 0; index < specKeys.length; index += 1) {
        const key = specKeys[index];
        const value = specValues[index];
        if (!key && !value) continue;
        if (!key || !value) {
          productMessage.textContent = "Complete both fields for every technical specification.";
          productMessage.className = "alert alert-danger";
          return;
        }
        specs[key] = value;
      }

      if (!Object.keys(specs).length) {
        productMessage.textContent = "Add at least one technical specification.";
        productMessage.className = "alert alert-danger";
        return;
      }

      try {
        imageUrl = new URL(data.image);
        if (!['http:', 'https:'].includes(imageUrl.protocol)) throw new Error("Unsupported image URL");
      } catch (error) {
        productMessage.textContent = "Enter a valid HTTP or HTTPS image URL.";
        productMessage.className = "alert alert-danger";
        return;
      }

      const productData = {
        name: cleanText(data.name, 100),
        brand: cleanText(data.brand, 50),
        category: cleanText(data.category, 50),
        price: Number(data.price),
        stock: Number(data.stock),
        sold: Number(data.sold),
        rating: Number(data.rating),
        image: imageUrl.href,
        description: cleanText(data.description, 350),
        specs
      };

      const existingProduct = allProducts.find((product) => product.id === productId);
      if (existingProduct) {
        Object.assign(existingProduct, productData);
      } else {
        allProducts.push({
          id: Date.now(),
          ...productData
        });
      }

      setData(STORAGE_KEYS.products, allProducts);
      renderAdmin();
    });

    cancelEditButton.addEventListener("click", resetProductForm);
  }

  document.querySelectorAll("[data-admin-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.adminDelete);
      const product = products().find((entry) => entry.id === id);
      if (!window.confirm(`Delete ${product?.name || "this product"}? This cannot be undone.`)) return;
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
      if (!product || !productForm) return;

      productForm.elements.id.value = product.id;
      productForm.elements.name.value = product.name;
      productForm.elements.brand.value = product.brand || "MAXTECH";
      productForm.elements.category.value = product.category;
      productForm.elements.price.value = product.price;
      productForm.elements.stock.value = product.stock;
      productForm.elements.sold.value = product.sold;
      productForm.elements.rating.value = product.rating;
      productForm.elements.image.value = product.image;
      productForm.elements.description.value = product.description;
      setSpecificationRows(product.specs);
      formTitle.textContent = `Edit ${product.name}`;
      submitLabel.textContent = "Save Changes";
      cancelEditButton.classList.remove("d-none");
      productMessage.className = "d-none";
      productForm.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelector("[data-admin-reset-products]")?.addEventListener("click", () => {
    if (!window.confirm("Reset the full catalog to the MAXTECH starter products?")) return;
    setData(STORAGE_KEYS.products, starterProducts);
    localStorage.setItem(STORAGE_KEYS.catalogVersion, String(CATALOG_VERSION));
    renderAdmin();
  });

  document.querySelectorAll("[data-admin-order-status]").forEach((select) => {
    select.addEventListener("change", () => {
      const orders = getData(STORAGE_KEYS.orders, []);
      const order = orders.find((entry) => entry.id === Number(select.dataset.adminOrderStatus));
      if (!order) return;
      order.status = select.value;
      setData(STORAGE_KEYS.orders, orders);
    });
  });

  document.querySelectorAll("[data-admin-order-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!window.confirm("Delete this order record? This cannot be undone.")) return;
      setData(STORAGE_KEYS.orders, getData(STORAGE_KEYS.orders, []).filter((order) => order.id !== Number(button.dataset.adminOrderDelete)));
      renderAdmin("ordersTab");
    });
  });

  document.querySelectorAll("[data-admin-role]").forEach((button) => {
    button.addEventListener("click", () => {
      const users = getData(STORAGE_KEYS.users, []);
      const user = users.find((entry) => entry.email === button.dataset.adminRole);
      if (!user || user.email === currentUser()?.email) return;
      user.role = user.role === "admin" ? "customer" : "admin";
      setData(STORAGE_KEYS.users, users);
      renderAdmin("usersTab");
      updateNav();
    });
  });

  document.querySelectorAll("[data-admin-user-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const email = button.dataset.adminUserDelete;
      if (email === currentUser()?.email || !window.confirm(`Delete the account for ${email}?`)) return;
      setData(STORAGE_KEYS.users, getData(STORAGE_KEYS.users, []).filter((user) => user.email !== email));
      renderAdmin("usersTab");
    });
  });

  document.querySelectorAll("[data-admin-message-read]").forEach((button) => {
    button.addEventListener("click", () => {
      const messages = getData(STORAGE_KEYS.messages, []);
      const message = messages.find((entry) => entry.id === Number(button.dataset.adminMessageRead));
      if (!message) return;
      message.status = "Read";
      setData(STORAGE_KEYS.messages, messages);
      renderAdmin("messagesTab");
    });
  });

  document.querySelectorAll("[data-admin-message-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!window.confirm("Delete this customer message?")) return;
      setData(STORAGE_KEYS.messages, getData(STORAGE_KEYS.messages, []).filter((message) => message.id !== Number(button.dataset.adminMessageDelete)));
      renderAdmin("messagesTab");
    });
  });
}

function bindContact() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const messages = getData(STORAGE_KEYS.messages, []);
    messages.push({
      id: Date.now(),
      name: cleanText(data.name, 80),
      email: String(data.email || "").trim().toLowerCase(),
      subject: cleanText(data.subject, 120),
      message: cleanText(data.message, 1000),
      status: "New",
      createdAt: new Date().toISOString()
    });
    setData(STORAGE_KEYS.messages, messages);
    form.innerHTML = '<div class="alert alert-success mb-0"><h1 class="h4">Message sent.</h1><p class="mb-0">Your message has been saved and the MAXTECH team will contact you soon.</p></div>';
  });
}

document.addEventListener("DOMContentLoaded", () => {
  seedProducts();
  seedAdminUser();
  renderFooter();
  bindNumericInputs();
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
