/*
  AirPods Store
  IMPORTANT: Replace STORE_WHATSAPP_NUMBER with your own WhatsApp number.
  Use country code, no + sign, spaces, or leading 0. Example Pakistan: 923001234567.
  Product prices and image URLs below are examples; update them before publishing.
*/
const STORE_WHATSAPP_NUMBER = "923092702542";

const products = [
  {
    id: "pro2-usbc",
    name: "AirPods Pro 2 (USB-C)",
    category: "earbuds",
    badge: "Featured",
    description: "Premium wireless earbuds. Confirm authenticity and included accessories with the seller.",
    price: 68500,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "airpods-4",
    name: "AirPods 4",
    category: "earbuds",
    badge: "Everyday audio",
    description: "A compact wireless-earbud option for everyday listening.",
    price: 42500,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1606742050787-0a2c6e3a5d9f?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "airpods-3",
    name: "AirPods 3",
    category: "earbuds",
    badge: "Classic choice",
    description: "A familiar open-fit style. Check model, condition and warranty before purchase.",
    price: 32500,
    image: "https://images.unsplash.com/photo-1606742050787-0a2c6e3a5d9f?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1606742050787-0a2c6e3a5d9f?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "airpods-max",
    name: "AirPods Max",
    category: "earbuds",
    badge: "Over-ear headphones",
    description: "Over-ear wireless headphone option. Confirm exact model, condition, authenticity and warranty with the seller.",
    price: 149000,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "airpods-pro-3",
    name: "AirPods Pro 3",
    category: "earbuds",
    badge: "Pro collection",
    description: "Premium in-ear model listing. Confirm availability, exact model and authenticity before ordering.",
    price: 79900,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "pro2-compatible",
    name: "Pro 2 Compatible Edition",
    category: "earbuds",
    badge: "Third-party compatible",
    description: "Third-party compatible product; not an original Apple product. Verify features before buying.",
    price: 6499,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "protective-case",
    name: "Protective Charging Case Cover",
    category: "accessories",
    badge: "Accessory",
    description: "Protective cover for your charging case. Check exact model compatibility.",
    price: 1850,
    image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "cleaning-kit",
    name: "Earbuds Cleaning Kit",
    category: "accessories",
    badge: "Accessory",
    description: "A handy cleaning accessory for everyday care. Use gently and follow product instructions.",
    price: 950,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "airpods-2",
    name: "AirPods 2",
    category: "earbuds",
    badge: "Classic fit",
    description: "Classic wireless earbuds listing. Confirm generation, condition, authenticity and warranty before ordering.",
    price: 18900,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1606742050787-0a2c6e3a5d9f?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "airpods-pro-1",
    name: "AirPods Pro (1st generation)",
    category: "earbuds",
    badge: "Pro collection",
    description: "First-generation Pro-style listing. Confirm exact model, condition and authenticity with the seller.",
    price: 27900,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "airpods-4-anc",
    name: "AirPods 4 with ANC",
    category: "earbuds",
    badge: "Noise control",
    description: "AirPods 4 noise-cancellation model listing. Confirm model and availability before ordering.",
    price: 52900,
    image: "https://images.unsplash.com/photo-1606742050787-0a2c6e3a5d9f?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1606742050787-0a2c6e3a5d9f?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "airpods-max-usbc",
    name: "AirPods Max (USB-C)",
    category: "earbuds",
    badge: "Premium over-ear",
    description: "Premium over-ear headphone listing. Confirm colour, connector, authenticity and warranty before purchase.",
    price: 169000,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1606742050787-0a2c6e3a5d9f?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "airpods-pro-compatible",
    name: "Pro-Style Compatible Earbuds",
    category: "earbuds",
    badge: "Compatible · third-party",
    description: "Third-party compatible earbuds, not an original Apple product. Features and quality vary by supplier.",
    price: 4999,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "airpods-basic-compatible",
    name: "Everyday Wireless Earbuds",
    category: "earbuds",
    badge: "Budget · third-party",
    description: "Budget third-party wireless earbuds, not an original Apple product. Confirm battery life and included accessories.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "silicone-case",
    name: "Silicone Case Cover",
    category: "accessories",
    badge: "Accessory",
    description: "Soft protective cover. Choose the correct AirPods case size and colour before ordering.",
    price: 650,
    image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1606742050787-0a2c6e3a5d9f?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "premium-case",
    name: "Premium Protective Case",
    category: "accessories",
    badge: "Accessory",
    description: "Protective case option for compatible charging cases. Confirm model fit and colour.",
    price: 1250,
    image: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "ear-tips",
    name: "Replacement Ear Tips",
    category: "accessories",
    badge: "Accessory",
    description: "Replacement silicone ear tips for supported Pro models. Confirm size and model compatibility.",
    price: 450,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1000&q=85"]
  },
  {
    id: "lanyard",
    name: "Charging Case Lanyard",
    category: "accessories",
    badge: "Accessory",
    description: "Carry strap for supported protective cases. Check whether the case has a lanyard loop.",
    price: 350,
    image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&w=900&q=85"
  ,
    images: ["https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1606742050787-0a2c6e3a5d9f?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=85"]
  }
];

const $ = (selector) => document.querySelector(selector);
const productGrid = $("#productGrid");
const searchInput = $("#searchInput");
const categoryFilter = $("#categoryFilter");
const priceFilter = $("#priceFilter");
const sortFilter = $("#sortFilter");
const cartOverlay = $("#cartOverlay");
const cartItems = $("#cartItems");
const cartCount = $("#cartCount");
const cartSubtotal = $("#cartSubtotal");
const toast = $("#toast");
const galleryIndexes = {};

let cart = [];
try {
  const stored = JSON.parse(localStorage.getItem("airpods-store-cart") || "[]");
  if (Array.isArray(stored)) cart = stored.filter(row => products.some(p => p.id === row.id) && Number.isInteger(row.qty) && row.qty > 0);
} catch (_) { cart = []; }

const money = amount => "Rs " + Number(amount).toLocaleString("en-PK");
const getProduct = id => products.find(product => product.id === id);
const safeText = value => String(value).replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderProducts() {
  const term = (searchInput.value || "").trim().toLowerCase();
  const category = categoryFilter.value;
  const priceRange = priceFilter ? priceFilter.value : "all";
  const sortMode = sortFilter ? sortFilter.value : "featured";
  let filtered = products.filter(product => {
    const matchesTerm = `${product.name} ${product.description} ${product.badge}`.toLowerCase().includes(term);
    const matchesCategory = category === "all" || product.category === category;
    const matchesPrice = priceRange === "all"
      || (priceRange === "budget" && product.price < 10000)
      || (priceRange === "mid" && product.price >= 10000 && product.price < 50000)
      || (priceRange === "premium" && product.price >= 50000);
    return matchesTerm && matchesCategory && matchesPrice;
  });
  if (sortMode === "low-high") filtered.sort((a, b) => a.price - b.price);
  if (sortMode === "high-low") filtered.sort((a, b) => b.price - a.price);

  if (!filtered.length) {
    productGrid.innerHTML = '<p class="no-results">No products found. Try another search.</p>';
    return;
  }

  productGrid.innerHTML = filtered.map(product => {
    const tier = product.price < 10000 ? "budget" : (product.price < 50000 ? "mid" : "premium");
    const tierLabel = tier === "budget" ? "Budget pick" : (tier === "mid" ? "Mid-range" : "Premium");
    const gallery = product.images && product.images.length ? product.images : [product.image];
    const galleryIndex = (galleryIndexes[product.id] || 0) % gallery.length;
    const currentImage = gallery[galleryIndex];
    return `
    <article class="product-card">
      <div class="product-image gallery-image">
        <img src="${safeText(currentImage)}" alt="${safeText(product.name)} photo ${galleryIndex + 1}" loading="lazy"
          onerror="this.classList.add('broken');this.parentElement.classList.add('fallback')">
        <span class="product-placeholder">PRODUCT PHOTO<br><small>Replace with real product image</small></span>
        <span class="product-tag tier-${tier}">${safeText(tierLabel)} · ${safeText(product.badge)}</span>
        <button class="gallery-arrow gallery-prev" type="button" data-gallery="${safeText(product.id)}" data-step="-1" aria-label="Previous photo">‹</button>
        <button class="gallery-arrow gallery-next" type="button" data-gallery="${safeText(product.id)}" data-step="1" aria-label="Next photo">›</button>
        <span class="gallery-count">${galleryIndex + 1} / ${gallery.length}</span>
      </div>
      <div class="gallery-thumbnails">
        ${gallery.map((image, index) => `<button type="button" class="gallery-thumb ${index === galleryIndex ? "active" : ""}" data-gallery-to="${safeText(product.id)}" data-index="${index}" aria-label="Show photo ${index + 1} of ${safeText(product.name)}"><img src="${safeText(image)}" alt="" loading="lazy"></button>`).join("")}
      </div>
      <h3>${safeText(product.name)}</h3>
      <p class="product-description">${safeText(product.description)}</p>
      <div class="price-row"><span class="price">${money(product.price)}</span><span class="stock">● Check availability</span></div>
      <div class="product-actions">
        <button class="button button-outline" type="button" data-add="${safeText(product.id)}">Add to list</button>
        <button class="button button-light" type="button" data-buy="${safeText(product.id)}">Order on WhatsApp ↗</button>
      </div>
    </article>
  `;
  }).join("");
}

function saveCart() {
  try { localStorage.setItem("airpods-store-cart", JSON.stringify(cart)); } catch (_) {}
  renderCart();
}

function addToCart(id) {
  const product = getProduct(id);
  if (!product) return;
  const row = cart.find(item => item.id === id);
  if (row) row.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart();
  showToast("Added to your order list");
}

function setQty(id, delta) {
  const row = cart.find(item => item.id === id);
  if (!row) return;
  row.qty += delta;
  if (row.qty <= 0) cart = cart.filter(item => item.id !== id);
  saveCart();
}

function cartTotal() {
  return cart.reduce((total, row) => {
    const product = getProduct(row.id);
    return total + (product ? product.price * row.qty : 0);
  }, 0);
}

function renderCart() {
  cartCount.textContent = cart.reduce((total, row) => total + row.qty, 0);
  cartSubtotal.textContent = money(cartTotal());

  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">Your order list is empty.<br>Add a product to get started.</p>';
    return;
  }

  cartItems.innerHTML = cart.map(row => {
    const product = getProduct(row.id);
    if (!product) return "";
    return `<div class="cart-item">
      <img class="cart-thumb" src="${safeText(product.image)}" alt="" onerror="this.style.visibility='hidden'">
      <div><h3>${safeText(product.name)}</h3><p>${money(product.price)} each</p>
        <div class="qty-controls">
          <button type="button" data-qty="${safeText(row.id)}" data-delta="-1" aria-label="Decrease quantity">−</button>
          <span>${row.qty}</span>
          <button type="button" data-qty="${safeText(row.id)}" data-delta="1" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-remove="${safeText(row.id)}">Remove</button>
    </div>`;
  }).join("");
}

function openCart() {
  cartOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  $("#cartCloseBtn").focus();
}
function closeCart() {
  cartOverlay.hidden = true;
  document.body.style.overflow = "";
}
function makeWhatsAppUrl(items, customerText = "") {
  const lines = ["*New order enquiry — AirPods Store*", ""];
  let total = 0;
  items.forEach(row => {
    const product = getProduct(row.id);
    if (!product) return;
    const lineTotal = product.price * row.qty;
    total += lineTotal;
    lines.push(`• ${product.name} × ${row.qty} — ${money(lineTotal)}`);
  });
  lines.push("", `*Estimated subtotal: ${money(total)}*`, "Please confirm stock, final price, delivery charges and payment options.");
  if (customerText) lines.push("", customerText);
  lines.push("", "Thank you.");
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
function goWhatsApp(items, customerText = "") {
  if (!/^\d{10,15}$/.test(STORE_WHATSAPP_NUMBER) || STORE_WHATSAPP_NUMBER === "923001234567") {
    showToast("Please add your own WhatsApp number in script.js first.");
    return;
  }
  if (!items.length) {
    showToast("Add a product to your order list first.");
    return;
  }
  window.open(makeWhatsAppUrl(items, customerText), "_blank", "noopener,noreferrer");
}

productGrid.addEventListener("click", event => {
  const galleryButton = event.target.closest("[data-gallery]");
  const galleryThumb = event.target.closest("[data-gallery-to]");
  if (galleryButton) {
    const product = getProduct(galleryButton.dataset.gallery);
    const count = product && product.images ? product.images.length : 1;
    galleryIndexes[galleryButton.dataset.gallery] = ((galleryIndexes[galleryButton.dataset.gallery] || 0) + Number(galleryButton.dataset.step) + count) % count;
    renderProducts();
    return;
  }
  if (galleryThumb) {
    galleryIndexes[galleryThumb.dataset.galleryTo] = Number(galleryThumb.dataset.index);
    renderProducts();
    return;
  }
  const addButton = event.target.closest("[data-add]");
  const buyButton = event.target.closest("[data-buy]");
  if (addButton) {
    addToCart(addButton.dataset.add);
    openCart();
  }
  if (buyButton) goWhatsApp([{ id: buyButton.dataset.buy, qty: 1 }]);
});
cartItems.addEventListener("click", event => {
  const qtyButton = event.target.closest("[data-qty]");
  const removeButton = event.target.closest("[data-remove]");
  if (qtyButton) setQty(qtyButton.dataset.qty, Number(qtyButton.dataset.delta));
  if (removeButton) {
    cart = cart.filter(row => row.id !== removeButton.dataset.remove);
    saveCart();
  }
});
searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
if (priceFilter) priceFilter.addEventListener("change", renderProducts);
if (sortFilter) sortFilter.addEventListener("change", renderProducts);
$("#cartOpenBtn").addEventListener("click", openCart);
$("#cartCloseBtn").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", event => { if (event.target === cartOverlay) closeCart(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !cartOverlay.hidden) closeCart(); });
$("#clearCartBtn").addEventListener("click", () => { cart = []; saveCart(); showToast("Order list cleared"); });
$("#checkoutBtn").addEventListener("click", () => goWhatsApp(cart));
$("#contactWhatsApp").href = `https://wa.me/${STORE_WHATSAPP_NUMBER}`;
$("#contactWhatsApp").addEventListener("click", event => {
  if (STORE_WHATSAPP_NUMBER === "923001234567") {
    event.preventDefault();
    showToast("Please add your own WhatsApp number in script.js first.");
  }
});
$("#menuToggle").addEventListener("click", () => {
  const nav = $("#navLinks");
  const isOpen = nav.classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  $("#menuToggle").setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
$("#navLinks").querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  $("#navLinks").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
}));
$("#year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
