/* Turkana Restoran — uygulama / application code.
   Sayfayı çizen kod. Normalde buraya dokunmanız gerekmez —
   değiştirilecek her şey data.js içindedir.
   The code that draws the page. You should not need to touch this file:
   everything meant to be edited lives in data.js.
   Sayfa: index.html */

/* ==========================================================================
   5. APP
   ========================================================================== */
const LS = {
  cart: "sm.market.cart",
  lang: "sm.market.lang",
  theme: "sm.market.theme",
  who: "sm.market.who",
  counted: "sm.market.counted", // son sayım zamanı / last counted at (ms)
};

const $ = (sel) => document.querySelector(sel);
const els = {
  html: document.documentElement,
  header: $("header.topbar"),
  heroDecor: $("#heroDecor"),
  heroContent: $("#heroContent"),
  heroLogo: $("#heroLogo"),
  heroLeft: $("#heroLeft"),
  heroRight: $("#heroRight"),
  bannerWrap: $("#bannerWrap"),
  bannerTrack: $("#bannerTrack"),
  bannerDots: $("#bannerDots"),
  catrail: $("#catrail"),
  catrailNav: $("nav.catrail"),
  content: $("#content"),
  langBtn: $("#langBtn"),
  langMenu: $("#langMenu"),
  langFlag: $("#langFlag"),
  langCode: $("#langCode"),
  themeBtn: $("#themeBtn"),
  iconSun: $("#iconSun"),
  iconMoon: $("#iconMoon"),
  fab: $("#fab"),
  fabBadge: $("#fabBadge"),
  visits: $("#visits"),
  visitsNum: $("#visitsNum"),
  topOrder: $("#topOrder"),
  backdrop: $("#backdrop"),
  sheet: $("#sheet"),
  sheetBody: $("#sheetBody"),
  sheetCount: $("#sheetCount"),
  sheetClose: $("#sheetClose"),
  deliveryValue: $("#deliveryValue"),
  totalValue: $("#totalValue"),
  orderBtn: $("#orderBtn"),
  callBtn: $("#callBtn"),
  clearBtn: $("#clearBtn"),
  pop: $("#pop"),
  popBack: $("#popBack"),
  popCard: $("#popCard"),
  popClose: $("#popClose"),
  popImg: $("#popImg"),
  popImgWrap: $("#popImgWrap"),
  popBadge: $("#popBadge"),
  popTitle: $("#popTitle"),
  popPricePill: $("#popPricePill"),
  popPriceBig: $("#popPriceBig"),
  popStepper: $("#popStepper"),
  popQty: $("#popQty"),
  popDec: $("#popDec"),
  popInc: $("#popInc"),
  popCta: $("#popCta"),
  toasts: $("#toasts"),
};

const store = (() => {
  const read = (key, fallback) => {
    try {
      const v = localStorage.getItem(key);
      return v == null ? fallback : JSON.parse(v);
    } catch {
      return fallback;
    }
  };
  const write = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* private mode */
    }
  };
  return { read, write };
})();

const state = {
  lang: LANGS.some((l) => l.code === store.read(LS.lang, null))
    ? store.read(LS.lang, null)
    : CONFIG.defaultLanguage,
  active: MENU.length ? MENU[0].id : null, // category highlighted in the rail
  cart: store.read(LS.cart, {}), // { productId: qty }
  who: store.read(LS.who, { name: "", address: "" }),
  sheetOpen: false,
  popId: null, // product shown in the big popup
};

const PRODUCTS = new Map();
const CATEGORY_OF = new Map();
MENU.forEach((cat) =>
  cat.items.forEach((p) => {
    PRODUCTS.set(p.id, p);
    CATEGORY_OF.set(p.id, cat);
  }),
);

const t = (key) => (T[state.lang] || T.ru)[key] || key;
const tr = (obj) =>
  obj ? obj[state.lang] || obj.ru || Object.values(obj)[0] || "" : "";
const nameOf = (item) => tr(item.name);
const money = (n) => {
  const num = Number(n).toFixed(2).replace(/\.00$/, "");
  return CONFIG.currencyAfter
    ? `${num} ${CONFIG.currency}`
    : `${CONFIG.currency}${num}`;
};
const imgUrl = (file) => `uploads/${file}`;
const escape = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );

const cartCount = () =>
  Object.values(state.cart).reduce((n, q) => n + q, 0);
const cartTotal = () =>
  Object.entries(state.cart).reduce((sum, [id, q]) => {
    const p = PRODUCTS.get(id);
    return p ? sum + p.price * q : sum;
  }, 0);
const deliveryFee = () => (cartCount() > 0 ? CONFIG.deliveryFee : 0);
const grandTotal = () => cartTotal() + deliveryFee();

const lockScroll = () => {
  document.body.classList.toggle(
    "locked",
    state.sheetOpen || state.popId !== null,
  );
};

/* -------------------------------------------------------------------- hero */
function renderHero() {
  els.heroLogo.src = CONFIG.logo;
  els.heroLogo.alt = CONFIG.brand;
  els.heroLeft.src = CONFIG.heroLeft;
  els.heroRight.src = CONFIG.heroRight;
  [els.heroLogo, els.heroLeft, els.heroRight].forEach((img) => {
    img.onerror = () => {
      img.style.visibility = "hidden";
    };
  });
}

// Both layers trail the page at a fraction of the scroll speed and the hero
// fades out as it leaves — the same feel as the Electron menu.
function parallax(y) {
  els.heroContent.style.transform = `translate3d(0, ${Math.min(y * 0.4, 200)}px, 0)`;
  els.heroDecor.style.transform = `translate3d(0, ${Math.min(y * 0.22, 110)}px, 0)`;
  els.html.style.setProperty(
    "--hero-op",
    String(Math.max(0, 1 - y / 220)),
  );
}

/* ------------------------------------------------------------------ banner */
// A clone of the last banner sits in front and a clone of the first at the end,
// so sliding past either edge keeps moving the same way instead of rewinding.
const banner = {
  slides: [],
  index: 0,
  first: 0,
  last: 0,
  loop: false,
  timer: null,
  startX: null,
  dragX: 0,
};

function renderBanner() {
  if (!BANNERS.length) {
    els.bannerWrap.style.display = "none";
    return;
  }

  banner.loop = BANNERS.length > 1;
  banner.slides = banner.loop
    ? [BANNERS[BANNERS.length - 1], ...BANNERS, BANNERS[0]]
    : BANNERS.slice();
  banner.first = banner.loop ? 1 : 0;
  banner.last = banner.loop ? BANNERS.length : 0;
  banner.index = banner.first;

  els.bannerTrack.innerHTML = banner.slides
    .map((b) => {
      const title = tr(b.title),
        text = tr(b.text);
      return `
<div class="slide">
  ${b.image ? `<img src="${imgUrl(b.image)}" alt="${escape(title)}" draggable="false" onerror="this.remove()" />` : ""}
  <div class="veil"></div>
  ${title || text ? `<div class="txt">${title ? `<b>${escape(title)}</b>` : ""}${text ? `<span>${escape(text)}</span>` : ""}</div>` : ""}
</div>`;
    })
    .join("");

  els.bannerDots.innerHTML = banner.loop
    ? BANNERS.map(
        (_, i) =>
          `<button type="button" data-dot="${i}" aria-label="${i + 1}"></button>`,
      ).join("")
    : "";

  moveBanner(false);
  restartBanner();
}

// A clone shows the same picture as its twin, so stepping from either is equal.
const twin = (i) =>
  i === banner.slides.length - 1
    ? banner.first
    : i === 0
      ? banner.last
      : i;

function moveBanner(animate = true) {
  els.bannerTrack.style.transition = animate
    ? "transform 500ms ease-in-out"
    : "none";
  els.bannerTrack.style.transform = `translateX(calc(-${banner.index * 100}% + ${banner.dragX}px))`;
  const dot = banner.loop
    ? (banner.index - 1 + BANNERS.length) % BANNERS.length
    : 0;
  els.bannerDots.querySelectorAll("[data-dot]").forEach((b) => {
    b.setAttribute("aria-current", Number(b.dataset.dot) === dot);
  });
}

function stepBanner(dir) {
  banner.index = twin(banner.index) + dir;
  moveBanner(true);
}

function stopBanner() {
  if (banner.timer) clearInterval(banner.timer);
  banner.timer = null;
}

function restartBanner() {
  stopBanner();
  if (!banner.loop) return;
  banner.timer = setInterval(
    () => stepBanner(1),
    CONFIG.bannerAutoplayMs,
  );
}

// Once the slide onto a clone has finished we are visually already on its twin,
// so jump to the twin's real index with the transition switched off.
els.bannerTrack.addEventListener("transitionend", (e) => {
  if (!banner.loop || e.target !== els.bannerTrack) return;
  const next = twin(banner.index);
  if (next === banner.index) return;
  banner.index = next;
  moveBanner(false);
  void els.bannerTrack.offsetHeight; // commit before transitions come back
});

els.bannerTrack.addEventListener("pointerdown", (e) => {
  if (!banner.loop) return;
  stopBanner();
  banner.startX = e.clientX;
  els.bannerTrack.classList.add("dragging");
  els.bannerTrack.setPointerCapture(e.pointerId);
});

els.bannerTrack.addEventListener("pointermove", (e) => {
  if (banner.startX === null) return;
  banner.dragX = e.clientX - banner.startX;
  moveBanner(false);
});

function endBannerDrag(e) {
  if (banner.startX === null) return;
  const dx = e.clientX - banner.startX;
  banner.startX = null;
  banner.dragX = 0;
  els.bannerTrack.classList.remove("dragging");
  // A phone needs a shorter commit distance than a wide tablet, so scale it.
  const threshold = Math.max(50, els.bannerTrack.clientWidth * 0.15);
  if (dx <= -threshold) stepBanner(1);
  else if (dx >= threshold) stepBanner(-1);
  else moveBanner(true);
  restartBanner();
}
els.bannerTrack.addEventListener("pointerup", endBannerDrag);
els.bannerTrack.addEventListener("pointercancel", endBannerDrag);

els.bannerDots.addEventListener("click", (e) => {
  const dot = e.target.closest("[data-dot]");
  if (!dot) return;
  banner.index = Number(dot.dataset.dot) + banner.first;
  moveBanner(true);
  restartBanner();
});

/* -------------------------------------------------------------- categories */
function renderCategories() {
  els.catrail.innerHTML = MENU.map((cat) => {
    const thumb = cat.image
      ? `<img src="${imgUrl(cat.image)}" alt="" loading="lazy" decoding="async" onerror="this.remove()" />`
      : "";
    return `
<button class="chip${thumb ? "" : " plain"}" type="button" data-cat="${escape(cat.id)}" aria-selected="${state.active === cat.id}">
  ${thumb}${escape(nameOf(cat))} <span class="count">${cat.items.length}</span>
</button>`;
  }).join("");
}

// Where the page must land so a section header clears the header + rail.
const anchorOffset = () =>
  els.header.offsetHeight + els.catrailNav.offsetHeight + 10;

let clickScrolling = null;

function scrollToCategory(id) {
  const section = document.getElementById(`cat-${id}`);
  if (!section) return;
  setActive(id);
  // While the smooth scroll runs, the spy would fight it over the active chip.
  clearTimeout(clickScrolling);
  clickScrolling = setTimeout(() => {
    clickScrolling = null;
  }, 700);
  const top =
    section.getBoundingClientRect().top + window.scrollY - anchorOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function setActive(id) {
  if (state.active === id) return;
  state.active = id;
  const chips = [...els.catrail.querySelectorAll(".chip")];
  chips.forEach((c) =>
    c.setAttribute("aria-selected", c.dataset.cat === id),
  );
  const chip = chips.find((c) => c.dataset.cat === id);
  if (!chip) return;
  // Scroll the rail itself — scrollIntoView would drag the whole page along.
  const target =
    chip.offsetLeft - (els.catrail.clientWidth - chip.offsetWidth) / 2;
  els.catrail.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
}

// Scrolling down walks the rail through the categories, like the Electron app.
function spy() {
  if (clickScrolling) return;
  const anchor = anchorOffset() + 8;
  const sections = els.content.querySelectorAll(".section");
  if (!sections.length) return;
  let current = null;
  for (const s of sections) {
    const r = s.getBoundingClientRect();
    if (r.top - anchor <= 0 && r.bottom - anchor > 0) {
      current = s.dataset.cat;
      break;
    }
  }
  // Above the first section (still on the hero) keep the first chip lit; past
  // the last one keep the last chip lit.
  if (!current) {
    current =
      sections[0].getBoundingClientRect().top - anchor > 0
        ? MENU[0].id
        : MENU[MENU.length - 1].id;
  }
  setActive(current);
}

/* ------------------------------------------------------------ product grid */
// One product = one card div.
function card(p) {
  const qty = state.cart[p.id] || 0;
  const media = p.image
    ? `<img src="${imgUrl(p.image)}" alt="${escape(nameOf(p))}" loading="lazy" decoding="async" onerror="this.style.display='none'" />`
    : "";
  return `
    <div class="card${qty ? " in-cart" : ""}" data-id="${escape(p.id)}">
<div class="card-img">
  <span class="ph" aria-hidden="true">🍽️</span>
  ${media}
  <span class="qty-flag">${qty}</span>
  <span class="zoom" aria-hidden="true">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
  </span>
</div>
<div class="card-body">
  <div class="card-name">${escape(nameOf(p))}</div>
  <div class="card-foot">
    <span class="price">${escape(money(p.price))}</span>
    <button class="add" type="button" data-act="inc" aria-label="+">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
    </button>
    <div class="stepper">
      <button type="button" data-act="dec" aria-label="-">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M5 12h14"/></svg>
      </button>
      <button type="button" data-act="inc" aria-label="+">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
      </button>
    </div>
  </div>
</div>
    </div>`;
}

function renderContent() {
  els.content.innerHTML = MENU.map(
    (cat) => `
    <section class="section" id="cat-${escape(cat.id)}" data-cat="${escape(cat.id)}">
<div class="section-head">
  <h2>${escape(nameOf(cat))}</h2>
  <span class="n">${cat.items.length} ${escape(t("item"))}</span>
</div>
<div class="grid">${cat.items.map(card).join("")}</div>
    </section>`,
  ).join("");
}

/* ------------------------------------------------------- big image popup */
function renderPop() {
  const p = PRODUCTS.get(state.popId);
  if (!p) return;
  const qty = state.cart[p.id] || 0;

  els.popTitle.textContent = nameOf(p);
  els.popBadge.textContent = tr(CATEGORY_OF.get(p.id)?.name);
  els.popBadge.style.display = els.popBadge.textContent ? "" : "none";
  els.popPricePill.textContent = money(p.price);
  els.popPriceBig.textContent = money(p.price);

  // Popup tek bir <img> kullanır: yeni ürün açılırken parıltıyı geri getir.
  // The popup reuses one <img>, so bring the shimmer back for each product.
  if (p.image) {
    const url = imgUrl(p.image);
    if (els.popImg.getAttribute("src") !== url) {
      els.popImgWrap.classList.remove("ok");
      els.popImg.src = url;
    }
    els.popImg.alt = nameOf(p);
    els.popImg.style.display = "";
    if (els.popImg.complete && els.popImg.currentSrc)
      els.popImgWrap.classList.add("ok");
  } else {
    els.popImg.removeAttribute("src");
    els.popImg.style.display = "none";
    els.popImgWrap.classList.add("ok"); // resim yok, parıltı da yok / no image, no shimmer
  }

  els.popQty.textContent = qty;
  els.popStepper.classList.toggle("on", qty > 0);
  els.popCta.textContent = qty > 0 ? t("viewCart") : t("addToCart");
}

function openProduct(id) {
  if (!PRODUCTS.has(id)) return;
  state.popId = id;
  renderPop();
  els.pop.classList.add("open");
  els.popBack.classList.add("open");
  lockScroll();
  // Android's back gesture should close the picture, not leave the page.
  history.pushState({ productPopup: true }, "", location.href);
}

function closeProduct(fromPopState = false) {
  if (state.popId === null) return;
  state.popId = null;
  els.pop.classList.remove("open");
  els.popBack.classList.remove("open");
  lockScroll();
  if (!fromPopState && history.state && history.state.productPopup)
    history.back();
}

window.addEventListener("popstate", () => {
  if (state.popId !== null) closeProduct(true);
});

els.popBack.addEventListener("click", () => closeProduct());
els.popClose.addEventListener("click", () => closeProduct());
els.pop.addEventListener("click", (e) => {
  if (!els.popCard.contains(e.target)) closeProduct();
});

els.popInc.addEventListener("click", () => {
  setQty(state.popId, (state.cart[state.popId] || 0) + 1);
});
els.popDec.addEventListener("click", () => {
  setQty(state.popId, (state.cart[state.popId] || 0) - 1);
});
els.popCta.addEventListener("click", () => {
  const qty = state.cart[state.popId] || 0;
  if (qty > 0) {
    closeProduct();
    openSheet(true);
    return;
  }
  add(state.popId);
});

/* -------------------------------------------------------------------- cart */
function renderCart() {
  const ids = Object.keys(state.cart);
  const count = cartCount();

  els.fabBadge.textContent = count;
  els.fabBadge.classList.toggle("on", count > 0);
  els.topOrder.classList.toggle("on", count > 0);
  els.sheetCount.textContent = count ? `${count} ${t("item")}` : "";
  els.deliveryValue.textContent = money(deliveryFee());
  els.totalValue.textContent = money(grandTotal());
  els.orderBtn.disabled = count === 0;

  if (!ids.length) {
    els.sheetBody.innerHTML = `<div class="empty"><div class="big">🛒</div><div>${escape(t("empty"))}</div><div>${escape(t("emptyHint"))}</div></div>`;
    return;
  }

  const lines = ids
    .map((id) => {
      const p = PRODUCTS.get(id);
      if (!p) return "";
      const qty = state.cart[id];
      const media = p.image
        ? `<img src="${imgUrl(p.image)}" alt="" loading="lazy" onerror="this.remove()" />`
        : "";
      return `
<div class="line" data-id="${escape(id)}">
  <div class="line-img">${media}</div>
  <div class="line-main">
    <div class="line-name">${escape(nameOf(p))}</div>
    <div class="line-price">${escape(money(p.price))}</div>
  </div>
  <div class="stepper" style="display:flex">
    <button type="button" data-act="dec" aria-label="-">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M5 12h14"/></svg>
    </button>
    <span class="q">${qty}</span>
    <button type="button" data-act="inc" aria-label="+">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
    </button>
  </div>
  <div class="line-sum">${escape(money(p.price * qty))}</div>
</div>`;
    })
    .join("");

  els.sheetBody.innerHTML = `${lines}
    <div class="fields">
<input id="fName" type="text" required value="${escape(state.who.name)}" placeholder="${escape(t("name"))}" />
<textarea id="fAddress" required placeholder="${escape(t("address"))}">${escape(state.who.address)}</textarea>
    </div>`;

  els.sheetBody.querySelector("#fName").addEventListener("input", (e) => {
    state.who.name = e.target.value;
    store.write(LS.who, state.who);
  });
  els.sheetBody
    .querySelector("#fAddress")
    .addEventListener("input", (e) => {
      state.who.address = e.target.value;
      store.write(LS.who, state.who);
    });
}

function setQty(id, qty) {
  if (qty > 0) state.cart[id] = Math.min(qty, 99);
  else delete state.cart[id];
  store.write(LS.cart, state.cart);

  // Keep the product's card in sync without re-rendering the whole grid.
  document
    .querySelectorAll(`.card[data-id="${CSS.escape(id)}"]`)
    .forEach((el) => {
      const q = state.cart[id] || 0;
      el.classList.toggle("in-cart", q > 0);
      el.querySelector(".qty-flag").textContent = q;
    });

  if (state.popId === id) renderPop();
  renderCart();
}

function add(id) {
  const p = PRODUCTS.get(id);
  if (!p) return;
  setQty(id, (state.cart[id] || 0) + 1);
  toast(`${nameOf(p)} — ${t("added")}`);
  els.fab.classList.remove("pulse");
  void els.fab.offsetWidth;
  els.fab.classList.add("pulse");
}

function toast(text) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = text;
  els.toasts.appendChild(el);
  setTimeout(() => el.remove(), 2150);
}

/* ------------------------------------------------------------- SMS ordering */
function buildMessage() {
  const lines = [t("msgHello"), ""];

  Object.keys(state.cart).forEach((id) => {
    const p = PRODUCTS.get(id);
    if (!p) return;
    const qty = state.cart[id];
    lines.push(`${qty} x ${nameOf(p)} - ${money(p.price * qty)}`);
  });

  lines.push(`${t("delivery")}: ${money(deliveryFee())}`);
  lines.push("", `${t("msgTotal")}: ${money(grandTotal())}`);
  lines.push(`${t("msgName")}: ${state.who.name.trim()}`);
  lines.push(`${t("msgAddress")}: ${state.who.address.trim()}`);

  return lines.join("\n");
}

// CONFIG.phone'u arama/SMS bağlantısına uygun hale getirir; geçersizse "".
// Normalises CONFIG.phone for tel:/sms: links; returns "" when unusable.
const phoneNumber = () => {
  const number = String(CONFIG.phone || "").replace(/[^\d+]/g, "");
  return number.replace(/\D/g, "").length < 8 ? "" : number;
};

// Numara yoksa arama düğmesini hiç gösterme.
// Hide the call button when there is no usable number.
function setupCallButton() {
  const number = phoneNumber();
  if (!number) {
    els.callBtn.hidden = true;
    return;
  }
  els.callBtn.href = `tel:${number}`;
}

function sendOrder() {
  if (!cartCount()) {
    toast(t("cartEmptyWarn"));
    return;
  }

  // Name and address are required so the order can actually be delivered.
  if (!state.who.name.trim() || !state.who.address.trim()) {
    toast(t("missingInfo"));
    const target = !state.who.name.trim()
      ? els.sheetBody.querySelector("#fName")
      : els.sheetBody.querySelector("#fAddress");
    target?.focus();
    return;
  }

  const number = phoneNumber();
  if (!number) {
    toast(t("noPhone"));
    return;
  }

  // iOS wants sms:<number>&body=…, Android and the rest want ?body=…
  const sep = /iP(hone|ad|od)|Macintosh/i.test(navigator.userAgent)
    ? "&"
    : "?";
  toast(t("opening"));
  window.location.href = `sms:${number}${sep}body=${encodeURIComponent(buildMessage())}`;
}

/* -------------------------------------------------------------- cart sheet */
function openSheet(open) {
  state.sheetOpen = open;
  els.sheet.classList.toggle("open", open);
  els.backdrop.classList.toggle("open", open);
  lockScroll();
}

/* ------------------------------------------------------------------- theme */
function setTheme(theme) {
  els.html.dataset.theme = theme;
  els.iconSun.style.display = theme === "dark" ? "block" : "none";
  els.iconMoon.style.display = theme === "dark" ? "none" : "block";
  $('meta[name="theme-color"]').content =
    theme === "dark" ? "#0a1018" : "#fafafa";
  store.write(LS.theme, theme);
}

/* ------------------------------------------------------------- static text */
function renderStatic() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  els.html.lang = state.lang;
  document.title = `${CONFIG.brand} — ${t("tagline")}`;
  $("#brandName").textContent = CONFIG.brand;
  $("#footBrand").textContent = CONFIG.brand;

  // Sayı zaten geldiyse yeni dilin binlik ayracıyla yaz.
  // If the total already arrived, redraw it with the new locale.
  if (els.visits.dataset.total)
    els.visitsNum.textContent = Number(
      els.visits.dataset.total,
    ).toLocaleString(state.lang);

  const lang = LANGS.find((l) => l.code === state.lang) || LANGS[0];
  els.fab.setAttribute("aria-label", t("cart"));
  els.fab.title = t("cart");

  // Arama düğmesi ikonlu; adı dille birlikte değişsin.
  // The call button is icon-only, so its name follows the language.
  els.callBtn.setAttribute("aria-label", t("callNow"));
  els.callBtn.title = t("callNow");

  els.langFlag.textContent = lang.flag;
  els.langCode.textContent = lang.code.toUpperCase();
  els.langMenu.innerHTML = LANGS.map(
    (l) => `
    <button class="lang-item" type="button" role="menuitem" data-lang="${l.code}" aria-current="${l.code === state.lang}">
<span style="font-size:17px">${l.flag}</span><span>${escape(l.label)}</span>
    </button>`,
  ).join("");
}

function renderAll() {
  renderStatic();
  renderBanner();
  renderCategories();
  renderContent();
  renderCart();
  if (state.popId !== null) renderPop();
  sweepImages();
}

/* ------------------------------------------------------------------ events */
els.catrail.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (chip) scrollToCategory(chip.dataset.cat);
});

els.content.addEventListener("click", (e) => {
  const el = e.target.closest(".card");
  if (!el) return;
  const id = el.dataset.id;
  const act = e.target.closest("[data-act]")?.dataset.act;

  if (act === "inc") add(id);
  else if (act === "dec") setQty(id, (state.cart[id] || 0) - 1);
  else openProduct(id); // tapping the meal opens the big picture
});

els.sheetBody.addEventListener("click", (e) => {
  const line = e.target.closest(".line");
  const act = e.target.closest("[data-act]")?.dataset.act;
  if (!line || !act) return;
  setQty(
    line.dataset.id,
    (state.cart[line.dataset.id] || 0) + (act === "inc" ? 1 : -1),
  );
  renderCart();
});

els.langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = els.langMenu.classList.toggle("open");
  els.langBtn.setAttribute("aria-expanded", open);
});

els.langMenu.addEventListener("click", (e) => {
  const item = e.target.closest("[data-lang]");
  if (!item) return;
  state.lang = item.dataset.lang;
  store.write(LS.lang, state.lang);
  els.langMenu.classList.remove("open");
  els.langBtn.setAttribute("aria-expanded", "false");
  const keep = state.active;
  renderAll();
  state.active = null;
  setActive(keep);
});

document.addEventListener("click", () => {
  els.langMenu.classList.remove("open");
  els.langBtn.setAttribute("aria-expanded", "false");
});

els.themeBtn.addEventListener("click", () => {
  setTheme(els.html.dataset.theme === "dark" ? "light" : "dark");
});

els.fab.addEventListener("click", () => openSheet(true));
els.topOrder.addEventListener("click", () => openSheet(true));
els.sheetClose.addEventListener("click", () => openSheet(false));
els.backdrop.addEventListener("click", () => openSheet(false));
els.orderBtn.addEventListener("click", sendOrder);

els.clearBtn.addEventListener("click", () => {
  state.cart = {};
  store.write(LS.cart, state.cart);
  renderContent();
  renderCart();
  if (state.popId !== null) renderPop();
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (state.popId !== null) closeProduct();
  else if (state.sheetOpen) openSheet(false);
  els.langMenu.classList.remove("open");
});

// Parallax and the category spy share one throttled scroll pass.
let ticking = false;
window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      parallax(window.scrollY);
      spy();
      ticking = false;
    });
  },
  { passive: true },
);

// Keep the sticky rail glued right under the header on any screen size.
const syncHeaderHeight = () => {
  els.html.style.setProperty(
    "--header-h",
    `${els.header.offsetHeight}px`,
  );
};
window.addEventListener("resize", () => {
  syncHeaderHeight();
  moveBanner(false);
});

// Autoplay is pointless while the tab is hidden, and browsers batch the timers.
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopBanner();
  else restartBanner();
});

/* --------------------------------------------------- ziyaretçi / visitors */
// Backend yok, bu yüzden sayı ücretsiz bir sayaç servisinde tutuluyor.
// İlk servis cevap vermezse ikincisi denenir; ikisi de olmazsa satır
// gizli kalır — kırık bir "—" göstermektense hiç göstermemek daha iyi.
// No backend, so the total lives on a free counter service. If the first
// one is down the second is tried; if both fail the row stays hidden —
// better to show nothing than a broken "—".
//
// Not: bu sayı herkese açıktır ve isteyen artırabilir. Kabaca bir fikir
// verir, ciddi istatistik değildir.
// Note: the number is public and anyone can inflate it. It is a rough
// signal, not real analytics.
const COUNTER_APIS = [
  {
    hit: (n, k) => `https://abacus.jasoncameron.dev/hit/${n}/${k}`,
    get: (n, k) => `https://abacus.jasoncameron.dev/get/${n}/${k}`,
  },
  {
    hit: (n, k) => `https://api.counterapi.dev/v1/${n}/${k}/up`,
    get: (n, k) => `https://api.counterapi.dev/v1/${n}/${k}/`,
  },
];

async function countVisit() {
  const cfg = CONFIG.counter;
  if (!cfg?.enabled || !cfg.name || !cfg.key) return;

  // Aynı tarayıcıyı her yenilemede saymayalım.
  // Do not re-count the same browser on every refresh.
  const windowMs = Math.max(0, cfg.everyHours || 0) * 3600e3;
  const last = Number(store.read(LS.counted, 0)) || 0;
  const isNew = Date.now() - last >= windowMs;

  const n = encodeURIComponent(cfg.name);
  const k = encodeURIComponent(cfg.key);

  for (const api of COUNTER_APIS) {
    try {
      const res = await fetch(isNew ? api.hit(n, k) : api.get(n, k), {
        cache: "no-store",
      });
      if (!res.ok) continue;
      const data = await res.json();
      // Abacus "value", CounterAPI "count" döndürür / returns "count".
      const total = Number(data.value ?? data.count);
      if (!Number.isFinite(total)) continue;

      if (isNew) store.write(LS.counted, Date.now());
      els.visits.dataset.total = String(total);
      els.visitsNum.textContent = total.toLocaleString(state.lang);
      els.visits.hidden = false;
      return;
    } catch {
      /* servis kapalı ya da ağ yok / service down or offline */
    }
  }
}

/* ------------------------------------------------------- resim yükleyicisi */
// Tek dinleyici tüm resimleri karşılar: kart, sepet, kategori, popup, banner.
// load/error olayları köpürmediği için yakalama (capture) evresindeyiz.
// One listener serves every picture — cards, cart, rail, popup, banner.
// load/error do not bubble, hence the capture phase.
const imgDone = (e) => {
  const img = e.target;
  if (img.tagName === "IMG") img.parentElement?.classList.add("ok");
};
document.addEventListener("load", imgDone, true);
document.addEventListener("error", imgDone, true);

// Önbellekten gelen resimler dinleyiciden önce bitmiş olabilir.
// Cached pictures may already be done before the listener ever runs.
const sweepImages = () => {
  document.querySelectorAll("img").forEach((img) => {
    if (img.complete && img.currentSrc)
      img.parentElement?.classList.add("ok");
  });
};

/* --------------------------------------------------------------------- init */
// Drop cart entries whose product no longer exists in MENU.
Object.keys(state.cart).forEach((id) => {
  if (!PRODUCTS.has(id)) delete state.cart[id];
});

setTheme(store.read(LS.theme, null) || CONFIG.defaultTheme);
setupCallButton();
renderHero();
renderAll();
syncHeaderHeight();
parallax(window.scrollY);

// Menüyü bekletmesin diye ağ isteği en sona bırakıldı.
// Fired last so the network request never holds up the menu.
countVisit();

// Menü çizildi; açılış ekranını kaldır. / Menu is on screen, drop the boot screen.
requestAnimationFrame(() => {
  els.html.classList.add("ready");
  const boot = document.getElementById("boot");
  boot?.addEventListener("transitionend", () => boot.remove(), {
    once: true,
  });
  setTimeout(() => boot?.remove(), 600);
});
