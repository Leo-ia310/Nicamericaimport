const products = [
  {
    id: "queso-morolique",
    name: "Queso Morolique",
    brand: "La Bendición Foods",
    category: "Lácteos",
    origin: "Producto de Nicaragua",
    description: "Queso semiduro tradicional elaborado con leche 100% de vaca semidescremada pasteurizada.",
    presentation: "45 lb, 12 lb, porcionado, 1 lb, 12 oz",
    image: "assets/products/queso-morolique.jpg"
  },
  {
    id: "queso-morolique-duro",
    name: "Queso Morolique Duro",
    brand: "La Bendición Foods",
    category: "Lácteos",
    origin: "Producto de Nicaragua",
    description: "Queso madurado tradicional elaborado con leche 100% de vaca semidescremada.",
    presentation: "45 lb, 12 lb, porcionado, 1 lb, 12 oz",
    image: "assets/products/queso-morolique-duro.jpg"
  },
  {
    id: "quesillo-pupusas",
    name: "Quesillo / Queso para Pupusas",
    brand: "La Bendición Foods",
    category: "Lácteos",
    origin: "Producto de Nicaragua",
    description: "Queso fresco de pasta hilada para fundir, cremoso y de sabor natural intenso.",
    presentation: "10 lb, 5 lb, 1 lb, 12 oz",
    image: "assets/products/queso-morolique-cubos.jpg"
  },
  {
    id: "briomol-pasta-ajos",
    name: "Pasta de Ajo",
    brand: "Briomol",
    category: "Condimentos",
    origin: "Estelí, Nicaragua",
    description: "Pasta lista para usar en carnes, aves, mariscos, salsas, adobos y sopas.",
    presentation: "500 g",
    image: "assets/products/briomol-pasta-ajos.jpg"
  },
  {
    id: "briomol-condimento-achiote",
    name: "Condimento Achiote",
    brand: "Briomol",
    category: "Condimentos",
    origin: "Estelí, Nicaragua",
    description: "Condimento para dar color, sabor y autenticidad a platillos tradicionales.",
    presentation: "500 g",
    image: "assets/products/briomol-condimento-achiote.jpg"
  },
  {
    id: "lizano-salsa-original",
    name: "Salsa Original",
    brand: "Lizano",
    category: "Salsas",
    description: "Salsa centroamericana con notas dulces, ácidas y especiadas.",
    presentation: "700 ml, 280 ml",
    image: "assets/products/lizano-salsa-original.jpg"
  },
  {
    id: "lizano-salsa-chile",
    name: "Salsa de Chile",
    brand: "Lizano",
    category: "Salsas",
    description: "Salsa Lizano con toque picante balanceado.",
    presentation: "62 g",
    image: "assets/products/lizano-salsa-chile.jpg"
  },
  {
    id: "kola-shaler",
    name: "Kola Shaler",
    brand: "Kola Shaler",
    category: "Bebidas",
    origin: "Producto de Nicaragua",
    description: "Bebida gaseosa emblemática de Nicaragua, elaborada desde 1904.",
    presentation: "355 ml, 473 ml, 2 L",
    icon: "local_drink"
  },
  {
    id: "coca-cola-1-litro",
    name: "Coca-Cola",
    brand: "Coca-Cola",
    category: "Bebidas",
    origin: "Producto de Nicaragua",
    description: "Bebida refrescante elaborada en Nicaragua.",
    presentation: "355 ml vidrio, 500 ml vidrio",
    image: "assets/products/coca-cola-1-litro.jpg"
  },
  {
    id: "rojita-3-litros",
    name: "Rojita",
    brand: "Rojita",
    category: "Bebidas",
    origin: "Producto de Nicaragua",
    description: "Gaseosa roja nicaragüense de sabor tradicional.",
    presentation: "500 ml, 1.5 L, 3 L",
    image: "assets/products/rojita-3-litros.jpg"
  },
  {
    id: "vilchez-tinoco-rosquillas",
    name: "Rosquillas somoteñas",
    brand: "Vílchez Tinoco",
    category: "Snacks",
    description: "Rosquillas y hojaldras tradicionales horneadas, elaboradas con maíz y queso.",
    presentation: "110 g, 220 g, 560 g",
    image: "assets/products/vilchez-tinoco-rosquillas.jpg"
  },
  {
    id: "frijol-rojo-seda",
    name: "Frijol Rojo Seda",
    brand: "Nicamerica",
    category: "Granos Básicos",
    origin: "Producto de Nicaragua",
    description: "Frijol rojo de alta calidad, cultivado en Nicaragua y seleccionado por su sabor, rendimiento, suavidad y tradición.",
    presentation: "50 lb",
    image: "assets/products/frijol-rojo-seda.jpeg"
  },
  {
    id: "yuca-congelada",
    name: "Yuca Congelada",
    brand: "Nicamerica",
    category: "Productos Congelados",
    origin: "Producto de Nicaragua",
    description: "Yuca pelada y cortada, empacada para mantener frescura y practicidad en cocina.",
    presentation: "Consulta disponibilidad",
    image: "assets/products/yuca-congelada.jpg"
  }
];

const menuButton = document.getElementById("menuButton");
const siteHeader = document.querySelector(".site-header");
const mobileNav = document.getElementById("mobileNav");
const productGrid = document.getElementById("productGrid");
const featuredGrid = document.getElementById("featuredGrid");
const filterBar = document.getElementById("filterBar");
const catalogSearch = document.getElementById("catalogSearch");
const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDetails = document.getElementById("modalDetails");
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const transparentPixel = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const currentPage = document.body.dataset.page;

function markIconFontReady() {
  document.body.classList.add("icons-ready");
}

if (document.fonts?.load) {
  document.fonts.load('24px "Material Symbols Outlined"').then(markIconFontReady).catch(() => {});
} else {
  markIconFontReady();
}

document.querySelectorAll("[data-page-link]").forEach((link) => {
  if (link.dataset.pageLink === currentPage) link.setAttribute("aria-current", "page");
});

function updateHeaderState() {
  siteHeader?.classList.toggle("is-scrolled", window.scrollY > 16);
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

menuButton?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.querySelector(".material-symbols-outlined").textContent = isOpen ? "close" : "menu";
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector(".material-symbols-outlined").textContent = "menu";
  });
});

function productCard(product) {
  const button = document.createElement("button");
  button.className = "product-card reveal";
  button.type = "button";
  button.dataset.productId = product.id;
  button.dataset.category = product.category;
  button.setAttribute("aria-label", `Ver detalle de ${product.name}`);
  const media = product.image
    ? `<img src="${product.image}" alt="${product.name}${product.brand ? " - " + product.brand : ""}" loading="lazy" decoding="async">`
    : `<div class="product-media-placeholder"><span class="material-symbols-outlined" aria-hidden="true">${product.icon || "inventory_2"}</span><strong>Imagen pendiente</strong></div>`;
  button.innerHTML = `
    <div class="product-media">${media}</div>
    <div class="product-body">
      <span class="pill">${product.category}</span>
      <h3>${product.name}</h3>
      <div class="meta">
        ${product.brand ? `<span>${product.brand}</span>` : ""}
        ${product.presentation ? `<span>${product.presentation}</span>` : ""}
      </div>
    </div>
  `;
  button.addEventListener("click", () => openProduct(product.id));
  return button;
}

let activeCategory = "Todos";
let activeSearch = "";

function renderProducts() {
  if (!productGrid) return;
  productGrid.innerHTML = "";
  const normalizedSearch = activeSearch.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const searchable = [product.name, product.brand, product.category, product.origin, product.presentation]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return matchesCategory && (!normalizedSearch || searchable.includes(normalizedSearch));
  });

  if (!visibleProducts.length) {
    const empty = document.createElement("p");
    empty.className = "catalog-empty";
    empty.textContent = "No encontramos productos con esos filtros. Prueba con otra categoría o palabra.";
    productGrid.appendChild(empty);
  } else {
    visibleProducts.forEach((product) => productGrid.appendChild(productCard(product)));
  }
  observeReveals();
}

function renderFeatured() {
  if (!featuredGrid) return;
  featuredGrid.innerHTML = "";
  ["queso-morolique-duro", "briomol-condimento-achiote", "frijol-rojo-seda"]
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean)
    .forEach((product) => featuredGrid.appendChild(productCard(product)));
}

function renderFilters() {
  if (!filterBar) return;
  const categories = ["Todos", ...new Set(products.map((product) => product.category))];
  filterBar.innerHTML = "";
  categories.forEach((category, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${index === 0 ? " active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeCategory = category;
      renderProducts();
    });
    filterBar.appendChild(button);
  });
}

catalogSearch?.addEventListener("input", (event) => {
  activeSearch = event.target.value;
  renderProducts();
});

function openProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product || !modal) return;

  modalImage.src = product.image || transparentPixel;
  modalImage.alt = product.image ? `${product.name}${product.brand ? " - " + product.brand : ""}` : "";
  modalImage.closest(".modal-image")?.classList.toggle("is-placeholder", !product.image);
  modalTitle.textContent = product.name;
  modalCategory.textContent = product.category;

  const details = [
    ["Marca", product.brand],
    ["Categoría", product.category],
    ["Presentación", product.presentation],
    ["Origen visible", product.origin],
    ["Descripción", product.description]
  ].filter(([, value]) => Boolean(value));

  modalDetails.innerHTML = details
    .map(([label, value]) => `<div><strong>${label}</strong><span>${value}</span></div>`)
    .join("");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close")?.focus();
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

modal?.querySelectorAll("[data-close-modal]").forEach((item) => item.addEventListener("click", closeModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal?.classList.contains("open")) closeModal();
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  status?.classList.remove("show");

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const subject = encodeURIComponent("Consulta comercial - Nicamerica Import Corp.");
  const body = encodeURIComponent(
    `Nombre: ${data.get("name")}\nCorreo: ${data.get("email")}\nTeléfono: ${data.get("phone") || ""}\nEmpresa: ${data.get("company") || ""}\n\nMensaje:\n${data.get("message")}`
  );

  if (status) {
    status.textContent = "Abriendo tu correo para enviar la consulta a sales@nicamericaimport.com.";
    status.classList.add("show");
  }
  window.location.href = `mailto:sales@nicamericaimport.com?subject=${subject}&body=${body}`;
});

document.querySelectorAll(".copyright").forEach((item) => {
  item.textContent = `© ${new Date().getFullYear()} Nicamerica Import Corp. Todos los derechos reservados.`;
});

let revealObserver;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
    return;
  }

  revealObserver ||= new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal:not(.visible)").forEach((item) => revealObserver.observe(item));
}

function setupCatalogThumbs() {
  document.querySelectorAll(".catalog-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const panel = thumb.closest(".catalog-visual-panel");
      const mainImage = panel?.querySelector("img.catalog-main-photo");
      const nextSrc = thumb.dataset.largeSrc;
      const nextAlt = thumb.dataset.largeAlt || thumb.querySelector("img")?.alt || "";

      if (!mainImage || !nextSrc || mainImage.getAttribute("src") === nextSrc) return;

      panel.querySelectorAll(".catalog-thumb").forEach((item) => item.classList.remove("is-active"));
      thumb.classList.add("is-active");
      mainImage.classList.add("is-changing");

      window.setTimeout(() => {
        mainImage.src = nextSrc;
        mainImage.alt = nextAlt;
        mainImage.classList.remove("is-changing");
      }, 120);
    });
  });
}

function setupMediaPerformance() {
  document.querySelectorAll("img").forEach((image) => {
    image.decoding = "async";

    if (
      !image.hasAttribute("loading") &&
      !image.closest(".brand, .footer-logo-lockup") &&
      !image.closest(".hero, .page-hero")
    ) {
      image.loading = "lazy";
    }
  });
}

function setupHeroCarouselImages() {
  const slides = document.querySelectorAll(".hero-carousel-slide[data-bg]");
  if (!slides.length) return;

  const loadSlides = () => {
    slides.forEach((slide, index) => {
      window.setTimeout(() => {
        slide.style.backgroundImage = `url("${slide.dataset.bg}")`;
        slide.removeAttribute("data-bg");
      }, index * 220);
    });
  };

  if (document.readyState === "complete") {
    window.setTimeout(loadSlides, 500);
  } else {
    window.addEventListener("load", () => window.setTimeout(loadSlides, 500), { once: true });
  }
}

function setupAmbientVideos() {
  const videos = document.querySelectorAll(".catalog-main-video--ambient");

  const loadVideo = (video) => {
    if (!video.dataset.loaded) {
      video.querySelectorAll("source[data-src]").forEach((source) => {
        source.src = source.dataset.src;
      });
      video.dataset.loaded = "true";
      video.load();
    }

    video.play().catch(() => {});
  };

  videos.forEach((video) => {
    video.controls = false;
    video.muted = true;
    video.loop = true;
    video.preload = "none";
    video.setAttribute("tabindex", "-1");
    video.addEventListener("contextmenu", (event) => event.preventDefault());
    video.addEventListener("pause", () => {
      if (video.dataset.inView === "true" && !video.ended) video.play().catch(() => {});
    });
  });

  if (!("IntersectionObserver" in window)) {
    videos.forEach(loadVideo);
    return;
  }

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.dataset.inView = "true";
        loadVideo(video);
      } else {
        video.dataset.inView = "false";
        video.pause();
      }
    });
  }, { rootMargin: "240px 0px", threshold: 0.01 });

  videos.forEach((video) => videoObserver.observe(video));
}

function setupPlantCarousel() {
  document.querySelectorAll(".plant-carousel").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".plant-carousel-slide"));
    const dotsWrap = carousel.querySelector(".plant-carousel-dots");
    const prev = carousel.querySelector('[data-plant-carousel="prev"]');
    const next = carousel.querySelector('[data-plant-carousel="next"]');
    if (!slides.length || !dotsWrap) return;

    let active = slides.findIndex((slide) => slide.classList.contains("is-active"));
    if (active < 0) active = 0;

    const dots = slides.map((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Ver foto ${index + 1}`);
      dot.addEventListener("click", () => show(index));
      dotsWrap.appendChild(dot);
      return dot;
    });

    function show(index) {
      active = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === active));
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === active);
        dot.setAttribute("aria-current", dotIndex === active ? "true" : "false");
      });
    }

    prev?.addEventListener("click", () => show(active - 1));
    next?.addEventListener("click", () => show(active + 1));
    show(active);
  });
}

renderFeatured();
renderFilters();
renderProducts();
setupMediaPerformance();
setupHeroCarouselImages();
setupCatalogThumbs();
setupAmbientVideos();
setupPlantCarousel();
observeReveals();
