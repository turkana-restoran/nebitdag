/* Turkana Restoran — düzenlenecek veriler / editable data.
   Menüyü, banner'ları, dil metinlerini ve ayarları burada değiştirin.
   app.js bu dosyadaki CONFIG, BANNERS, LANGS, T ve MENU'yü kullanır,
   bu yüzden index.html'de app.js'ten ÖNCE yüklenmelidir.
   Edit the menu, banners, translations and settings here. app.js consumes
   CONFIG, BANNERS, LANGS, T and MENU, so this file must load first.
   Sayfa: index.html */

/* ==========================================================================
   1. CONFIG — düzenlemesi gereken tek yer / the only place you need to edit
   ========================================================================== */
const CONFIG = {
  // Siparişin SMS ile gideceği numara. Ülke kodu ile, başında + olabilir.
  // The order is sent here as a text message. Include the country code.
  phone: "+99371861323",

  brand: "Turkana-Restoran Nebitdag", // üst barda görünen isim / name in the header
  currency: "m", // para birimi / currency symbol
  currencyAfter: true, // simge fiyatın sonunda mı? / symbol after the price
  deliveryFee: 10, // dostawka hyzmaty / delivery fee, added on top of the cart total
  defaultLanguage: "ru", // ru | tk
  defaultTheme: "light", // dark | light

  // Parallax alanı / parallax hero artwork
  logo: "uploads/logo.webp",
  heroLeft: "uploads/hero-left.png",
  heroRight: "uploads/hero-right.png",

  bannerAutoplayMs: 3500, // banner kaç ms'de bir kayar / autoplay delay

  // Ziyaretçi sayacı / visit counter.
  // Sunucu yok: sayı ücretsiz bir sayaç servisinde tutulur. "name" bu
  // siteye özel olmalı — aynı adı başkası kullanırsa sayılar karışır.
  // Aynı tarayıcı 24 saatte bir kez sayılır, yani "kaç kişi açtı".
  // No server: the number lives on a free counter service. "name" must be
  // unique to this site — a shared name would mix your count with theirs.
  // One browser counts once per 24h, so it reads as "how many people".
  counter: {
    enabled: true,
    name: "turkana-restoran-github-io", // benzersiz olsun / keep unique
    key: "visits",
    everyHours: 24, // 0 → her açılışı say / count every page load
  },
};

/* ==========================================================================
   2. BANNERS — kendiliğinden kayar, parmakla sürüklenebilir
          auto-scrolls, drag / swipe also works
   ========================================================================== */
const BANNERS = [
  {
    image: "pizza.webp",
    title: {
      ru: "Tagamly pizzalar bizde",
      tk: "Tagamly pizzalar bizde",
    },
    text: {
      ru: "Turkana restoran sizin hyzmatynyzda!",
      tk: "Turkana restoran sizin hyzmatynyzda!",
    },
  },
  {
    image: "turkana.webp",
    title: {
      ru: "+993xxxxxxxx",
      tk: "+993xxxxxxxx",
    },
    text: {
      ru: "Biz bilen galyn!",
      tk: "Biz bilen galyn!",
    },
  },
];

/* ==========================================================================
   3. LANGUAGES + UI TEXT
   ========================================================================== */
const LANGS = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "tk", label: "Türkmençe", flag: "🇹🇲" },
];

const T = {
  ru: {
    tagline: "Заказ онлайн",
    welcome: "Добро пожаловать",
    cart: "Корзина",
    empty: "Корзина пуста",
    emptyHint: "Нажмите на товар — он появится здесь.",
    delivery: "Dostawka hyzmaty",
    total: "Итого",
    order: "Заказ",
    sendOrder: "Заказать по СМС",
    callNow: "Позвонить",
    clear: "Очистить корзину",
    added: "добавлено в корзину",
    item: "товаров",
    addToCart: "В корзину",
    viewCart: "Открыть корзину",
    name: "Ваше имя *",
    address: "Ваш адрес *",
    cartEmptyWarn: "Корзина пуста",
    noPhone: "Номер телефона не указан (CONFIG.phone)",
    missingInfo: "Укажите, пожалуйста, имя и адрес",
    opening: "Открываем приложение сообщений…",
    msgHello: "Здравствуйте! Хочу сделать заказ:",
    msgTotal: "Итого",
    msgName: "Имя",
    msgAddress: "Адрес",
    visitors: "посетителей",
    cartShort: "Корзина",
    reviewBadge: "Подарок за отзыв",
    reviewTitle: "Оставьте отзыв — получите подарок",
    reviewText:
      "Поделитесь впечатлениями о нас в Google и покажите свой отзыв сотруднику — подарок ваш!",
    reviewBtn: "Оставить отзыв в Google",
  },
  tk: {
    tagline: "Onlaýn sargyt",
    welcome: "Hoş geldiňiz",
    cart: "Sebedim",
    empty: "Sebediňiz boş",
    emptyHint: "Haryda basyň, şu ýere goşulýar.",
    delivery: "Dostawka hyzmaty",
    total: "Jemi",
    order: "Sargyt",
    sendOrder: "SMS bilen sargyt et",
    callNow: "Jaň et",
    clear: "Sebedi boşat",
    added: "sebede goşuldy",
    item: "haryt",
    addToCart: "Sebede goş",
    viewCart: "Sebede git",
    name: "Adyňyz *",
    address: "Salgyňyz *",
    cartEmptyWarn: "Sebediňiz boş",
    noPhone: "Telefon belgisi bellenmedi (CONFIG.phone)",
    missingInfo: "Adyňyzy we salgyňyzy giriziň",
    opening: "Habar programmasy açylýar…",
    msgHello: "Salam! Sargyt etmek isleýärin:",
    msgTotal: "Jemi",
    msgName: "Ady",
    msgAddress: "Salgy",
    visitors: "myhman",
    cartShort: "Sebet",
    reviewBadge: "Teswir üçin sowgat",
    reviewTitle: "Teswir ýazyň — sowgat alyň",
    reviewText:
      "Biz barada pikiriňizi Google-da paýlaşyň we teswiriňizi işgärimize görkeziň — sowgat siziňki!",
    reviewBtn: "Google-da teswir ýaz",
  },
};

/* ==========================================================================
   4. MENU — kategoriler ve ürünler / categories and products
Resimler "uploads/" klasöründen gelir. Images are served from uploads/.

   Kaynak / source: kagyz menýu, 2026-10-30 (iki sahypa / two flyers).
   Iki-üç bahasy bolan nahar kiçi/orta/uly diýip aýry ýazyldy.
   A dish with two or three prices is split into kiçi/orta/uly items.
   Täze naharlaryň suraty ýok (image: null). New dishes have no photo yet.
   ========================================================================== */
const MENU = [
  {
    id: "salads",
    name: {
      tk: "Salatlar",
      ru: "Салаты",
    },
    image: null,
    items: [
      {
        id: "p28",
        name: {
          tk: "Swežiý",
          ru: "Свежее ассорти",
        },
        price: 35,
        image: "1786841504501-786269938.webp",
      },
      {
        id: "p29",
        name: {
          tk: "Çopan",
          ru: "Чопан салат",
        },
        price: 35,
        image: "1786697777511-308146307.webp",
      },
      {
        id: "p30",
        name: {
          tk: "Greçeskiý",
          ru: "Греческий",
        },
        price: 50,
        image: "1786700262295-815781240.webp",
      },
      {
        id: "p33",
        name: {
          tk: "Oliwýe",
          ru: "Оливье",
        },
        price: 40,
        image: "1786700241365-499781196.webp",
      },
      {
        id: "p47",
        name: {
          tk: "Ostryý",
          ru: "Острый",
        },
        price: 50,
        image: "1786842689412-884877842.webp",
      },
      {
        id: "p43",
        name: {
          tk: "Taýskiý",
          ru: "Тайский салат",
        },
        price: 50,
        image: "1786700730506-598702483.webp",
      },
      {
        id: "p40",
        name: {
          tk: "Mužskoý",
          ru: "Мужской",
        },
        price: 50,
        image: "1786700435214-35246217.webp",
      },
      {
        id: "p34",
        name: {
          tk: "Sezar",
          ru: "Цезарь",
        },
        price: 45,
        image: "1786700316561-889886295.webp",
      },
      {
        id: "p42",
        name: {
          tk: "Týoplyý",
          ru: "Теплый салат",
        },
        price: 60,
        image: "1786841726985-27554465.webp",
      },
      {
        id: "p200",
        name: {
          tk: "Kartoşka Selýotka",
          ru: "Картошка с селёдкой",
        },
        price: 60,
        image: null,
      },
      {
        id: "p201",
        name: {
          tk: "Wkusnýaşka",
          ru: "Вкусняшка",
        },
        price: 50,
        image: null,
      },
    ],
  },
  {
    id: "soups",
    name: {
      tk: "Çorbalar",
      ru: "Супы",
    },
    image: null,
    items: [
      {
        id: "p18",
        name: {
          tk: "Merjimek",
          ru: "Мерджимек",
        },
        price: 25,
        image: "1786697025107-390457656.webp",
      },
      {
        id: "p19",
        name: {
          tk: "Ezogelin",
          ru: "Езогелин",
        },
        price: 25,
        image: "1786697142859-427536132.webp",
      },
      {
        id: "p17",
        name: {
          tk: "Ýaýla",
          ru: "Яйла",
        },
        price: 30,
        image: "1786697011733-615461792.webp",
      },
      {
        id: "p16",
        name: {
          tk: "Paça",
          ru: "Пача",
        },
        price: 35,
        image: "1786696999457-280388063.webp",
      },
      {
        id: "p21",
        name: {
          tk: "Pelmen",
          ru: "Пельмени",
        },
        price: 35,
        image: "1786696854899-989766841.webp",
      },
      {
        id: "p20",
        name: {
          tk: "Unaş",
          ru: "Унаш",
        },
        price: 35,
        image: "1786697048262-322742781.webp",
      },
      {
        id: "p26",
        name: {
          tk: "Towuk Çorba",
          ru: "Куриный суп",
        },
        price: 30,
        image: "1786841491480-190998239.webp",
      },
      {
        id: "p23",
        name: {
          tk: "Teftel",
          ru: "Тефтели",
        },
        price: 45,
        image: "1786845021919-407711820.webp",
      },
      {
        id: "p27",
        name: {
          tk: "Kömelek Kremaly Çorba",
          ru: "Сливочно-грибной суп",
        },
        price: 40,
        image: "1786697096326-487965363.webp",
      },
      {
        id: "p22",
        name: {
          tk: "Dograma",
          ru: "Дограма",
        },
        price: 35,
        image: "1786697073954-20330550.webp",
      },
      {
        id: "p25",
        name: {
          tk: "Jüyje Çorba",
          ru: "Суп с цыпленком",
        },
        price: 50,
        image: "1786841378795-74083103.webp",
      },
      {
        id: "p202",
        name: {
          tk: "Köýten Unaş",
          ru: "Кёйтен унаш",
        },
        price: 40,
        image: null,
      },
      {
        id: "p203",
        name: {
          tk: "Golupsy",
          ru: "Голубцы",
        },
        price: 45,
        image: null,
      },
    ],
  },
  {
    id: "fastfood",
    name: {
      tk: "Fastfood",
      ru: "Фастфуд",
    },
    image: null,
    items: [
      {
        id: "p143",
        name: {
          tk: "Nagetsi Fri",
          ru: "Наггетсы с фри",
        },
        price: 60,
        image: "1786845227610-445125432.webp",
      },
      {
        id: "p73",
        name: {
          tk: "Çizburger",
          ru: "Чизбургер",
        },
        price: 50,
        image: "1786701501318-943454227.webp",
      },
      {
        id: "p204",
        name: {
          tk: "Çikenburger",
          ru: "Чикенбургер",
        },
        price: 50,
        image: null,
      },
      {
        id: "p70",
        name: {
          tk: "Döner Çörek (etli)",
          ru: "Донер в лепёшке (мясной)",
        },
        price: 40,
        image: "1786843050377-461096829.webp",
      },
      {
        id: "p69",
        name: {
          tk: "Döner Çörek (towuk)",
          ru: "Донер в лепёшке (куриный)",
        },
        price: 30,
        image: "1786843037400-483964379.webp",
      },
      {
        id: "p76",
        name: {
          tk: "Palow Üsti Döner",
          ru: "Донер с рисом и овощами",
        },
        price: 50,
        image: "1786701443460-105028117.webp",
      },
      {
        id: "p77",
        name: {
          tk: "Iskender Kebap",
          ru: "Искендер кебап",
        },
        price: 60,
        image: "1786701454351-597953299.webp",
      },
      {
        id: "p132",
        name: {
          tk: "Beýti Kebap",
          ru: "Бейти кебап",
        },
        price: 60,
        image: "1786703130784-256459940.webp",
      },
      {
        id: "p137",
        name: {
          tk: "Fri",
          ru: "Фри",
        },
        price: 30,
        image: "1786697585150-405807949.webp",
      },
      {
        id: "p138",
        name: {
          tk: "KFS Fri",
          ru: "КФС фри",
        },
        price: 35,
        image: "1786697596583-311707595.webp",
      },
    ],
  },
  {
    id: "pastries",
    name: {
      tk: "Hamyrly Naharlar",
      ru: "Мучные изделия",
    },
    image: null,
    items: [
      {
        id: "p58",
        name: {
          tk: "Pide (kiçi)",
          ru: "Пиде (маленькая)",
        },
        price: 60,
        image: "1786842929390-108692027.webp",
      },
      {
        id: "p205",
        name: {
          tk: "Pide (uly)",
          ru: "Пиде (большая)",
        },
        price: 80,
        image: "1786842929390-108692027.webp",
      },
      {
        id: "p59",
        name: {
          tk: "Lahmajun",
          ru: "Лахмаджун",
        },
        price: 35,
        image: "1786697334186-942718303.webp",
      },
      {
        id: "p57",
        name: {
          tk: "Işlekli",
          ru: "Ишлекли",
        },
        price: 60,
        image: "1786842920133-540633590.webp",
      },
      {
        id: "p81",
        name: {
          tk: "Manty Üwelen",
          ru: "Манты с фаршем",
        },
        price: 40,
        image: "1786697397660-625526128.webp",
      },
      {
        id: "p206",
        name: {
          tk: "Manty Dogralan",
          ru: "Манты с рубленым мясом",
        },
        price: 50,
        image: null,
      },
      {
        id: "p82",
        name: {
          tk: "Türk Manty",
          ru: "Турецкие манты",
        },
        price: 40,
        image: "1786702251562-335967679.webp",
      },
      {
        id: "p207",
        name: {
          tk: "Hinkaly (uly)",
          ru: "Хинкали (большие)",
        },
        price: 45,
        image: null,
      },
      {
        id: "p208",
        name: {
          tk: "Hinkaly (kiçi)",
          ru: "Хинкали (маленькие)",
        },
        price: 35,
        image: null,
      },
      {
        id: "p64",
        name: {
          tk: "Somsa",
          ru: "Сомса",
        },
        price: 6,
        image: "1786842974100-962945842.webp",
      },
      {
        id: "p209",
        name: {
          tk: "Somsa Dogralan",
          ru: "Сомса с рубленым мясом",
        },
        price: 7,
        image: "1786842974100-962945842.webp",
      },
      {
        id: "p65",
        name: {
          tk: "Gubadag Fitçi",
          ru: "Губадаг фитчи",
        },
        price: 7,
        image: "1786843002293-403053737.webp",
      },
      {
        id: "p210",
        name: {
          tk: "Çeburek",
          ru: "Чебурек",
        },
        price: 6,
        image: null,
      },
      {
        id: "p61",
        name: {
          tk: "Gutap",
          ru: "Гутап",
        },
        price: 30,
        image: "1786697392219-225970040.webp",
      },
      {
        id: "p211",
        name: {
          tk: "Tabörek",
          ru: "Табёрек",
        },
        price: 40,
        image: null,
      },
      {
        id: "p5",
        name: {
          tk: "Sigara Börek",
          ru: "Сигара бёрек",
        },
        price: 30,
        image: "1786696854899-989766841.webp",
      },
      {
        id: "p62",
        name: {
          tk: "Ýumurtgaly Börek",
          ru: "Вареники с яйцом",
        },
        price: 40,
        image: "1786842946793-752233826.webp",
      },
      {
        id: "p60",
        name: {
          tk: "Lezgin Pirog",
          ru: "Лезгинский пирог",
        },
        price: 60,
        image: "1786696845387-828675382.webp",
      },
      {
        id: "p212",
        name: {
          tk: "Asetin Pirog",
          ru: "Осетинский пирог",
        },
        price: 50,
        image: null,
      },
      {
        id: "p213",
        name: {
          tk: "Petir Ýagly",
          ru: "Петир с маслом",
        },
        price: 20,
        image: null,
      },
      {
        id: "p214",
        name: {
          tk: "Petir Etli",
          ru: "Петир с мясом",
        },
        price: 30,
        image: null,
      },
    ],
  },
  {
    id: "hot-dishes",
    name: {
      tk: "Gyzgyn Naharlar",
      ru: "Горячие блюда",
    },
    image: null,
    items: [
      {
        id: "p215",
        name: {
          tk: "Kakmaç Mesge",
          ru: "Какмач на сливочном масле",
        },
        price: 80,
        image: "1786700940504-980534465.webp",
      },
      {
        id: "p93",
        name: {
          tk: "Kakmaç Batyrma",
          ru: "Какмач",
        },
        price: 70,
        image: "1786700940504-980534465.webp",
      },
      {
        id: "p94",
        name: {
          tk: "Et Sote",
          ru: "Мясное соте",
        },
        price: 70,
        image: "1786701058282-476281290.webp",
      },
      {
        id: "p216",
        name: {
          tk: "Palow Etli",
          ru: "Плов с мясом",
        },
        price: 40,
        image: "1786696845387-828675382.webp",
      },
      {
        id: "p217",
        name: {
          tk: "Palow Balykly",
          ru: "Плов с рыбой",
        },
        price: 35,
        image: null,
      },
      {
        id: "p141",
        name: {
          tk: "Greçka Podliwa",
          ru: "Гречка с подливой",
        },
        price: 30,
        image: "1786702071794-273210824.webp",
      },
      {
        id: "p139",
        name: {
          tk: "Püre Kotlet",
          ru: "Пюре с котлетой",
        },
        price: 45,
        image: "1786697632722-45771851.webp",
      },
      {
        id: "p218",
        name: {
          tk: "Tüwi Kotlet",
          ru: "Рис с котлетой",
        },
        price: 45,
        image: null,
      },
      {
        id: "p219",
        name: {
          tk: "Greçka Kotlet",
          ru: "Гречка с котлетой",
        },
        price: 45,
        image: null,
      },
      {
        id: "p220",
        name: {
          tk: "Kartoşka Domaşny",
          ru: "Картошка по-домашнему",
        },
        price: 35,
        image: null,
      },
      {
        id: "p83",
        name: {
          tk: "Maklube",
          ru: "Маклубе",
        },
        price: 300,
        image: "1786702223979-295321528.webp",
      },
      {
        id: "p221",
        name: {
          tk: "Süzme Aş",
          ru: "Сюзме аш",
        },
        price: 50,
        image: null,
      },
      {
        id: "p84",
        name: {
          tk: "Syrly Kotlet",
          ru: "Котлеты с сыром",
        },
        price: 70,
        image: "1786843116559-457277780.webp",
      },
      {
        id: "p86",
        name: {
          tk: "Karny Ýaryk",
          ru: "Фаршированные баклажаны",
        },
        price: 60,
        image: "1786843125584-126687319.webp",
      },
      {
        id: "p85",
        name: {
          tk: "Ýaprak Sarma",
          ru: "Долма с виноградных листьев",
        },
        price: 55,
        image: "1786701049687-188214921.webp",
      },
      {
        id: "p111",
        name: {
          tk: "Jüyje Mesge",
          ru: "Цыпленок в сливочном масле",
        },
        price: 60,
        image: "1786702315116-423386374.webp",
      },
      {
        id: "p222",
        name: {
          tk: "Jüýje Batyrma",
          ru: "Цыплёнок батырма",
        },
        price: 60,
        image: null,
      },
      {
        id: "p110",
        name: {
          tk: "Towuk Sote",
          ru: "Куриное соте",
        },
        price: 50,
        image: "1786702305989-711033605.webp",
      },
      {
        id: "p115",
        name: {
          tk: "Towuk Şnitsel",
          ru: "Куриный шницель",
        },
        price: 70,
        image: "1786702864385-500946062.webp",
      },
      {
        id: "p116",
        name: {
          tk: "Towuk Kömelek Kremaly",
          ru: "Курица с грибами под сливочным соусом",
        },
        price: 55,
        image: "1786843575865-803005715.webp",
      },
      {
        id: "p223",
        name: {
          tk: "Izmir Köfte",
          ru: "Измир кёфте",
        },
        price: 60,
        image: null,
      },
      {
        id: "p89",
        name: {
          tk: "Jyz Byz Köfte",
          ru: "Джыз быз кёфте",
        },
        price: 60,
        image: "1786843194976-373593762.webp",
      },
    ],
  },
  {
    id: "pizza",
    name: {
      tk: "Pizza",
      ru: "Пицца",
    },
    image: null,
    items: [
      {
        id: "p224",
        name: {
          tk: "Pizza Şa (kiçi)",
          ru: "Пицца «Ша» (маленькая)",
        },
        price: 60,
        image: null,
      },
      {
        id: "p225",
        name: {
          tk: "Pizza Şa (orta)",
          ru: "Пицца «Ша» (средняя)",
        },
        price: 80,
        image: null,
      },
      {
        id: "p226",
        name: {
          tk: "Pizza Şa (uly)",
          ru: "Пицца «Ша» (большая)",
        },
        price: 100,
        image: null,
      },
      {
        id: "p227",
        name: {
          tk: "Pizza Assorti (kiçi)",
          ru: "Пицца ассорти (маленькая)",
        },
        price: 55,
        image: null,
      },
      {
        id: "p228",
        name: {
          tk: "Pizza Assorti (uly)",
          ru: "Пицца ассорти (большая)",
        },
        price: 75,
        image: null,
      },
      {
        id: "p52",
        name: {
          tk: "Pizza Pepperoni (kiçi)",
          ru: "Пицца пепперони (маленькая)",
        },
        price: 55,
        image: "1786845077515-548964399.webp",
      },
      {
        id: "p229",
        name: {
          tk: "Pizza Pepperoni (uly)",
          ru: "Пицца пепперони (большая)",
        },
        price: 75,
        image: "1786845077515-548964399.webp",
      },
      {
        id: "p55",
        name: {
          tk: "Pizza Margarita (kiçi)",
          ru: "Пицца «Маргарита» (маленькая)",
        },
        price: 55,
        image: "1786842895215-339918251.webp",
      },
      {
        id: "p230",
        name: {
          tk: "Pizza Margarita (uly)",
          ru: "Пицца «Маргарита» (большая)",
        },
        price: 75,
        image: "1786842895215-339918251.webp",
      },
      {
        id: "p231",
        name: {
          tk: "Pizza Kömelekli (kiçi)",
          ru: "Пицца с грибами (маленькая)",
        },
        price: 55,
        image: null,
      },
      {
        id: "p232",
        name: {
          tk: "Pizza Kömelekli (uly)",
          ru: "Пицца с грибами (большая)",
        },
        price: 75,
        image: null,
      },
      {
        id: "p53",
        name: {
          tk: "Pizza Towukly (kiçi)",
          ru: "Пицца с курицей (маленькая)",
        },
        price: 55,
        image: "1786842861370-445896100.webp",
      },
      {
        id: "p233",
        name: {
          tk: "Pizza Towukly (uly)",
          ru: "Пицца с курицей (большая)",
        },
        price: 75,
        image: "1786842861370-445896100.webp",
      },
      {
        id: "p234",
        name: {
          tk: "Pizza 4 Peýnir (kiçi)",
          ru: "Пицца 4 сыра (маленькая)",
        },
        price: 55,
        image: null,
      },
      {
        id: "p235",
        name: {
          tk: "Pizza 4 Peýnir (uly)",
          ru: "Пицца 4 сыра (большая)",
        },
        price: 75,
        image: null,
      },
      {
        id: "p236",
        name: {
          tk: "Pizza Rançero (kiçi)",
          ru: "Пицца ранчеро (маленькая)",
        },
        price: 55,
        image: null,
      },
      {
        id: "p237",
        name: {
          tk: "Pizza Rançero (uly)",
          ru: "Пицца ранчеро (большая)",
        },
        price: 75,
        image: null,
      },
      {
        id: "p238",
        name: {
          tk: "Pizza Domaşniý (kiçi)",
          ru: "Пицца домашняя (маленькая)",
        },
        price: 55,
        image: null,
      },
      {
        id: "p239",
        name: {
          tk: "Pizza Domaşniý (uly)",
          ru: "Пицца домашняя (большая)",
        },
        price: 75,
        image: null,
      },
      {
        id: "p240",
        name: {
          tk: "Pizza Smit",
          ru: "Пицца «Смит»",
        },
        price: 70,
        image: null,
      },
      // Kagyz menýuda bahasy görünmeýär — bahasyny goşup açyň.
      // Price is hidden on the flyer; add it and uncomment.
      // {
      //   id: "p245",
      //   name: {
      //     tk: "Pizza 4 Möwsüm",
      //     ru: "Пицца 4 сезона",
      //   },
      //   price: 0,
      //   image: null,
      // },
    ],
  },
  {
    id: "cocktails",
    name: {
      tk: "Kofe we Kokteýller",
      ru: "Кофе и коктейли",
    },
    image: null,
    items: [
      {
        id: "p241",
        name: {
          tk: "Espresso",
          ru: "Эспрессо",
        },
        price: 15,
        image: null,
      },
      {
        id: "p242",
        name: {
          tk: "Amerikano",
          ru: "Американо",
        },
        price: 15,
        image: null,
      },
      {
        id: "p243",
        name: {
          tk: "Kapuçino",
          ru: "Капучино",
        },
        price: 25,
        image: null,
      },
      {
        id: "p148",
        name: {
          tk: "Mohita Ýagodniý",
          ru: "Мохито ягодный",
        },
        price: 30,
        image: "1786843829157-728920194.webp",
      },
      {
        id: "p147",
        name: {
          tk: "Mohita Klassik",
          ru: "Мохито классический",
        },
        price: 30,
        image: "1786843820464-141818053.webp",
      },
      {
        id: "p150",
        name: {
          tk: "Kokteýl Şokoladnyý",
          ru: "Коктейль шоколадный",
        },
        price: 25,
        image: "1786843898783-684402748.webp",
      },
      {
        id: "p244",
        name: {
          tk: "Kokteýl Moloçniý",
          ru: "Коктейль молочный",
        },
        price: 25,
        image: null,
      },
      {
        id: "p152",
        name: {
          tk: "Klubniçniý",
          ru: "Клубничный",
        },
        price: 30,
        image: "1786843917711-379335970.webp",
      },
    ],
  },

  /* ------------------------------------------------------------------------
     Kagyz menýuda ýok (2026-10-30) — gerek bolsa degişli bölüme göçürip açyň.
     Not on the paper menu (2026-10-30) — move into a category and uncomment.
     ------------------------------------------------------------------------ */

  // --- Ertklikler / Завтраки
  // {
  //   id: "p15",
  //   name: {
  //     tk: "Şa Ertirlik",
  //     ru: "Şa завтрак",
  //   },
  //   price: 50,
  //   image: "1786696913426-527212455.webp",
  // },
  // {
  //   id: "p2",
  //   name: {
  //     tk: "Mix Tost",
  //     ru: "Мих тост",
  //   },
  //   price: 30,
  //   image: "1786841076864-905625444.webp",
  // },
  // {
  //   id: "p3",
  //   name: {
  //     tk: "Sada Omlet",
  //     ru: "Омлет",
  //   },
  //   price: 25,
  //   image: "1786696685771-218194172.webp",
  // },
  // {
  //   id: "p4",
  //   name: {
  //     tk: "İspanyol Omlet",
  //     ru: "Омлет \"Испанский\"",
  //   },
  //   price: 25,
  //   image: "1786696685771-218194172.webp",
  // },
  // {
  //   id: "p6",
  //   name: {
  //     tk: "Göz Yumurtğa",
  //     ru: "Яичница-глазунья",
  //   },
  //   price: 20,
  //   image: "1786696536090-330041972.webp",
  // },
  // {
  //   id: "p7",
  //   name: {
  //     tk: "Peynirli Yumurtğa",
  //     ru: "Яичница с сыром",
  //   },
  //   price: 30,
  //   image: "1786696676959-758029928.webp",
  // },
  // {
  //   id: "p8",
  //   name: {
  //     tk: "Syrly Pomidorly Omlet",
  //     ru: "Омлет с сыром и помидорами",
  //   },
  //   price: 35,
  //   image: "1786841102479-895726992.webp",
  // },
  // {
  //   id: "p9",
  //   name: {
  //     tk: "Farsly Yumurtğa",
  //     ru: "Яичница с фаршем",
  //   },
  //   price: 35,
  //   image: "1786696696861-55590998.webp",
  // },
  // {
  //   id: "p10",
  //   name: {
  //     tk: "Club Sendwiç",
  //     ru: "Club сэндвич",
  //   },
  //   price: 35,
  //   image: "1786841140810-873825082.webp",
  // },
  // {
  //   id: "p11",
  //   name: {
  //     tk: "Syrly Tost",
  //     ru: "Тост с сыром",
  //   },
  //   price: 25,
  //   image: "1786841152373-374355477.webp",
  // },
  // {
  //   id: "p12",
  //   name: {
  //     tk: "Sujukly Yumurtğa",
  //     ru: "Яичница с колбасой",
  //   },
  //   price: 35,
  //   image: "1786841164091-183247753.webp",
  // },
  // {
  //   id: "p13",
  //   name: {
  //     tk: "Menemen",
  //     ru: "Менемен",
  //   },
  //   price: 25,
  //   image: "1786696619269-164562947.webp",
  // },
  // {
  //   id: "p14",
  //   name: {
  //     tk: "Syrly Omlet",
  //     ru: "Омлет с сыром",
  //   },
  //   price: 35,
  //   image: "1786841312500-166220051.webp",
  // },

  // --- Çorbalar / Супы
  // {
  //   id: "p24",
  //   name: {
  //     tk: "Borş",
  //     ru: "Борщ",
  //   },
  //   price: 30,
  //   image: "1786841353168-243982093.webp",
  // },

  // --- Salatlar / Салаты
  // {
  //   id: "p31",
  //   name: {
  //     tk: "Okroşka",
  //     ru: "Окрошка",
  //   },
  //   price: 35,
  //   image: "1786700148177-645110513.webp",
  // },
  // {
  //   id: "p32",
  //   name: {
  //     tk: "Jajik",
  //     ru: "Джаджик",
  //   },
  //   price: 35,
  //   image: "1786841553708-498817440.webp",
  // },
  // {
  //   id: "p35",
  //   name: {
  //     tk: "Mimoza",
  //     ru: "Мимоза",
  //   },
  //   price: 55,
  //   image: "1786700327438-241770274.webp",
  // },
  // {
  //   id: "p36",
  //   name: {
  //     tk: "Winegret",
  //     ru: "Винегрет",
  //   },
  //   price: 45,
  //   image: "1786700367732-992250843.webp",
  // },
  // {
  //   id: "p37",
  //   name: {
  //     tk: "Möwsüm",
  //     ru: "Сезонный овощной",
  //   },
  //   price: 55,
  //   image: "1786845049400-554344753.webp",
  // },
  // {
  //   id: "p38",
  //   name: {
  //     tk: "Baklajan",
  //     ru: "Баклажановый салат",
  //   },
  //   price: 35,
  //   image: "1786841658653-480356959.webp",
  // },
  // {
  //   id: "p39",
  //   name: {
  //     tk: "Dlya Druzey",
  //     ru: "Для друзей",
  //   },
  //   price: 55,
  //   image: "1786841667967-95993979.webp",
  // },
  // {
  //   id: "p41",
  //   name: {
  //     tk: "Lýubimyý",
  //     ru: "Любимый",
  //   },
  //   price: 50,
  //   image: "1786841696731-263398779.webp",
  // },
  // {
  //   id: "p44",
  //   name: {
  //     tk: "Kitayskiy (çin)",
  //     ru: "Китайский (чин)",
  //   },
  //   price: 50,
  //   image: "1786841782911-684703113.webp",
  // },
  // {
  //   id: "p45",
  //   name: {
  //     tk: "Selyotka pod şuboy",
  //     ru: "Селедка под шубой",
  //   },
  //   price: 55,
  //   image: "1786842669074-761938573.webp",
  // },
  // {
  //   id: "p46",
  //   name: {
  //     tk: "Nežnyý",
  //     ru: "Нежный салат",
  //   },
  //   price: 55,
  //   image: "1786842680411-990836984.webp",
  // },
  // {
  //   id: "p48",
  //   name: {
  //     tk: "Dymok",
  //     ru: "Дымок",
  //   },
  //   price: 55,
  //   image: "1786700633799-783889217.webp",
  // },
  // {
  //   id: "p49",
  //   name: {
  //     tk: "Duzly Gök Önümleri",
  //     ru: "Соленое ассорти",
  //   },
  //   price: 55,
  //   image: "1786845060735-254130138.webp",
  // },
  // {
  //   id: "p50",
  //   name: {
  //     tk: "Miwe",
  //     ru: "Фруктовое ассорти",
  //   },
  //   price: 75,
  //   image: "1786700543555-547273171.webp",
  // },

  // --- Hamyrly Naharlar / Мучные изделия
  // {
  //   id: "p51",
  //   name: {
  //     tk: "Pizza kiçi",
  //     ru: "Пицца маленькая",
  //   },
  //   price: 55,
  //   image: "1786703234941-933478142.webp",
  // },
  // {
  //   id: "p54",
  //   name: {
  //     tk: "Pizza Etli",
  //     ru: "Пицца с мясом",
  //   },
  //   price: 55,
  //   image: "1786842825414-109882814.webp",
  // },
  // {
  //   id: "p56",
  //   name: {
  //     tk: "Gök Önümli Pizza",
  //     ru: "Оващная пицца",
  //   },
  //   price: 55,
  //   image: "1786842905193-608118778.webp",
  // },
  // {
  //   id: "p63",
  //   name: {
  //     tk: "Piroşki etli",
  //     ru: "Пирожки с мясом",
  //   },
  //   price: 0,
  //   image: "1786701784959-723853494.webp",
  // },

  // --- Dönerler / Донеры
  // {
  //   id: "p66",
  //   name: {
  //     tk: "Sada Blinçik",
  //     ru: "Обычный блинчик",
  //   },
  //   price: 15,
  //   image: "1786843012149-619865858.webp",
  // },
  // {
  //   id: "p67",
  //   name: {
  //     tk: "Blinçik Syrly, Etli",
  //     ru: "Блинчик с сыром",
  //   },
  //   price: 35,
  //   image: "1786843024879-440986906.webp",
  // },
  // {
  //   id: "p68",
  //   name: {
  //     tk: "Muçnoy",
  //     ru: "Мучной",
  //   },
  //   price: 55,
  //   image: "1786696932603-389519463.webp",
  // },
  // {
  //   id: "p71",
  //   name: {
  //     tk: "Döner Lawaşly etli",
  //     ru: "Донер в лаваше с мясом",
  //   },
  //   price: 35,
  //   image: "1786843069780-501480996.webp",
  // },
  // {
  //   id: "p72",
  //   name: {
  //     tk: "Hot-Dog",
  //     ru: "Хот-дог",
  //   },
  //   price: 20,
  //   image: "1786701523847-895007510.webp",
  // },
  // {
  //   id: "p74",
  //   name: {
  //     tk: "Lüle Dolama",
  //     ru: "Донер в лаваше с люля",
  //   },
  //   price: 40,
  //   image: "1786843088854-411547497.webp",
  // },
  // {
  //   id: "p75",
  //   name: {
  //     tk: "Döner Tabakda",
  //     ru: "Донер в тарелке",
  //   },
  //   price: 55,
  //   image: "1786843106586-654770881.webp",
  // },

  // --- Türkmen-Türk Naharlar / Туркмено-турецкие блюда
  // {
  //   id: "p78",
  //   name: {
  //     tk: "Türkmen Palow towukly",
  //     ru: "Туркменский плов с курицей",
  //   },
  //   price: 35,
  //   image: "1786696845387-828675382.webp",
  // },
  // {
  //   id: "p79",
  //   name: {
  //     tk: "Spagetti Bolonez",
  //     ru: "Спагетти болоньезе",
  //   },
  //   price: 45,
  //   image: "1786702184983-869447990.webp",
  // },
  // {
  //   id: "p80",
  //   name: {
  //     tk: "Fetuçini Alfredo",
  //     ru: "Фетучинни альфредо",
  //   },
  //   price: 45,
  //   image: "1786702280605-356521480.webp",
  // },
  // {
  //   id: "p87",
  //   name: {
  //     tk: "Gowyžat Ýazyk Pod Sousom Izmir",
  //     ru: "Говяжий язык под соусом измир",
  //   },
  //   price: 55,
  //   image: "1786845112952-292178159.webp",
  // },
  // {
  //   id: "p88",
  //   name: {
  //     tk: "Hünkär Begendi",
  //     ru: "Хункар бегенди",
  //   },
  //   price: 65,
  //   image: "1786843182697-380854671.webp",
  // },

  // --- Etli Naharlar / Блюда из мяса
  // {
  //   id: "p90",
  //   name: {
  //     tk: "Güweç",
  //     ru: "Мясо тушеное с овощами под сыром",
  //   },
  //   price: 75,
  //   image: "1786700962999-943143155.webp",
  // },
  // {
  //   id: "p91",
  //   name: {
  //     tk: "Saç Gowurma",
  //     ru: "Жаркое из говядины",
  //   },
  //   price: 65,
  //   image: "1786843207208-351207422.webp",
  // },
  // {
  //   id: "p92",
  //   name: {
  //     tk: "Beef Stroganoff",
  //     ru: "Бефстроганов",
  //   },
  //   price: 75,
  //   image: "1786700972892-684505257.webp",
  // },
  // {
  //   id: "p95",
  //   name: {
  //     tk: "Et Çopan Gowurma",
  //     ru: "Жареное мясо с овощами",
  //   },
  //   price: 65,
  //   image: "1786700998166-692344537.webp",
  // },
  // {
  //   id: "p96",
  //   name: {
  //     tk: "Steak Lokum Beef",
  //     ru: "Стейк локум биф",
  //   },
  //   price: 155,
  //   image: "1786843369990-113411506.webp",
  // },
  // {
  //   id: "p97",
  //   name: {
  //     tk: "New York Steak",
  //     ru: "Стейк нью-йорк",
  //   },
  //   price: 155,
  //   image: "1786700802124-52402007.webp",
  // },
  // {
  //   id: "p98",
  //   name: {
  //     tk: "Steak T-Bone",
  //     ru: "Стейк т-боне",
  //   },
  //   price: 155,
  //   image: "1786843384662-587230199.webp",
  // },
  // {
  //   id: "p99",
  //   name: {
  //     tk: "Steak Antrikot",
  //     ru: "Стейк антрикот",
  //   },
  //   price: 155,
  //   image: "1786843417586-453473088.webp",
  // },

  // --- Balykly Naharlar / Блюда из рыбы
  // {
  //   id: "p100",
  //   name: {
  //     tk: "Hamsi Tawa Doka",
  //     ru: "Донер с жареной килькой",
  //   },
  //   price: 45,
  //   image: "1786843428479-433675564.webp",
  // },
  // {
  //   id: "p101",
  //   name: {
  //     tk: "Kefal Tawa",
  //     ru: "Кефаль жареный",
  //   },
  //   price: 65,
  //   image: "1786701122177-821701126.webp",
  // },
  // {
  //   id: "p102",
  //   name: {
  //     tk: "Kefal Bitin",
  //     ru: "Кефаль жареный целиком",
  //   },
  //   price: 65,
  //   image: "1786701104386-565236730.webp",
  // },
  // {
  //   id: "p103",
  //   name: {
  //     tk: "Kefir Tawa",
  //     ru: "Сазан жареный",
  //   },
  //   price: 0,
  //   image: "1786843438670-183230246.webp",
  // },
  // {
  //   id: "p104",
  //   name: {
  //     tk: "Sudak Tawa",
  //     ru: "Судак жареный целиком",
  //   },
  //   price: 0,
  //   image: "1786701154242-614507472.webp",
  // },
  // {
  //   id: "p105",
  //   name: {
  //     tk: "Bekre Bitin",
  //     ru: "Осетрина жареная целиком",
  //   },
  //   price: 0,
  //   image: "1786843448536-248912513.webp",
  // },
  // {
  //   id: "p106",
  //   name: {
  //     tk: "Bekre Tawa",
  //     ru: "Осетрина жареная",
  //   },
  //   price: 0,
  //   image: "1786843481749-199845596.webp",
  // },
  // {
  //   id: "p107",
  //   name: {
  //     tk: "Balyk Görnüşleri Podnos",
  //     ru: "Рыба жаренная ассорти поднос",
  //   },
  //   price: 0,
  //   image: "1786701217660-332713168.webp",
  // },
  // {
  //   id: "p108",
  //   name: {
  //     tk: "Kefal Podnos",
  //     ru: "Кефаль поднос",
  //   },
  //   price: 0,
  //   image: "1786845133216-381065895.webp",
  // },

  // --- Towuk Naharlar / Блюда из курицы
  // {
  //   id: "p109",
  //   name: {
  //     tk: "Towuk Kakmaç",
  //     ru: "Какмач куриный",
  //   },
  //   price: 55,
  //   image: "1786843535415-664467361.webp",
  // },
  // {
  //   id: "p112",
  //   name: {
  //     tk: "Towuk File Izgara",
  //     ru: "Куриное филе на гриле",
  //   },
  //   price: 55,
  //   image: "1786843556101-2082277.webp",
  // },
  // {
  //   id: "p113",
  //   name: {
  //     tk: "Pliç Izgara",
  //     ru: "Куриная грудка",
  //   },
  //   price: 55,
  //   image: "1786702710643-518219163.webp",
  // },
  // {
  //   id: "p114",
  //   name: {
  //     tk: "Patişah Sefasi Towuk Ruýaly",
  //     ru: "Курица «по королевски»",
  //   },
  //   price: 55,
  //   image: "1786843567497-967993663.webp",
  // },
  // {
  //   id: "p117",
  //   name: {
  //     tk: "Köri Sously Towuk",
  //     ru: "Курица карри",
  //   },
  //   price: 55,
  //   image: "1786702432428-251551153.webp",
  // },
  // {
  //   id: "p118",
  //   name: {
  //     tk: "Ýogurtly Towuk",
  //     ru: "Курица с йогуртом",
  //   },
  //   price: 55,
  //   image: "1786702551162-88046142.webp",
  // },
  // {
  //   id: "p119",
  //   name: {
  //     tk: "\"Sultan\"",
  //     ru: "«Султан»",
  //   },
  //   price: 55,
  //   image: "1786843586184-191755844.webp",
  // },
  // {
  //   id: "p120",
  //   name: {
  //     tk: "Bitin Towuk Dykma",
  //     ru: "Курица начиненная",
  //   },
  //   price: 105,
  //   image: "1786845148629-477609200.webp",
  // },

  // --- Şaşlyklar / Шашлыки
  // {
  //   id: "p121",
  //   name: {
  //     tk: "Towuk Lüle",
  //     ru: "Куриное люля",
  //   },
  //   price: 25,
  //   image: "1786702931235-101156300.webp",
  // },
  // {
  //   id: "p122",
  //   name: {
  //     tk: "Towuk Şaşlyk",
  //     ru: "Куриный щашлык",
  //   },
  //   price: 30,
  //   image: "1786702945651-210438503.webp",
  // },
  // {
  //   id: "p123",
  //   name: {
  //     tk: "Towuk Döş Fri",
  //     ru: "Куриная грудка с фри",
  //   },
  //   price: 55,
  //   image: "1786702710643-518219163.webp",
  // },
  // {
  //   id: "p124",
  //   name: {
  //     tk: "Towuk Ganat Fri (3 şt)",
  //     ru: "Крылышки с фри",
  //   },
  //   price: 55,
  //   image: "1786702662453-4190306.webp",
  // },
  // {
  //   id: "p125",
  //   name: {
  //     tk: "Towuk Nožka Fri (3 şt)",
  //     ru: "Куриные ножки с фри",
  //   },
  //   price: 55,
  //   image: "1786845190986-224292501.webp",
  // },
  // {
  //   id: "p126",
  //   name: {
  //     tk: "Towuk Budy",
  //     ru: "Куриное бедро",
  //   },
  //   price: 45,
  //   image: "1786703045983-276135669.webp",
  // },
  // {
  //   id: "p127",
  //   name: {
  //     tk: "Et Lüle",
  //     ru: "Люля говяжий",
  //   },
  //   price: 30,
  //   image: "1786703064746-398405919.webp",
  // },
  // {
  //   id: "p128",
  //   name: {
  //     tk: "Bagyr Dolama",
  //     ru: "Печень",
  //   },
  //   price: 55,
  //   image: "1786703076099-732310802.webp",
  // },
  // {
  //   id: "p129",
  //   name: {
  //     tk: "Goýun Şaşlyk",
  //     ru: "Баранина",
  //   },
  //   price: 75,
  //   image: "1786703085887-647823669.webp",
  // },
  // {
  //   id: "p130",
  //   name: {
  //     tk: "Goýun Gapyrga",
  //     ru: "Бараньи ребрышки",
  //   },
  //   price: 85,
  //   image: "1786703116224-158966391.webp",
  // },
  // {
  //   id: "p131",
  //   name: {
  //     tk: "Adana Kebap",
  //     ru: "Турецкий люля-кебаб",
  //   },
  //   price: 55,
  //   image: "1786703122719-514826536.webp",
  // },
  // {
  //   id: "p133",
  //   name: {
  //     tk: "Sebze Şiş",
  //     ru: "Овощи на гриле",
  //   },
  //   price: 45,
  //   image: "1786843650236-366609814.webp",
  // },
  // {
  //   id: "p134",
  //   name: {
  //     tk: "Padnos kiçi",
  //     ru: "Поднос маленький",
  //   },
  //   price: 505,
  //   image: null,
  // },

  // --- Garnirler / Гарниры
  // {
  //   id: "p135",
  //   name: {
  //     tk: "Türk Palow",
  //     ru: "Рис по-турецки",
  //   },
  //   price: 30,
  //   image: "1786702142950-984458642.webp",
  // },
  // {
  //   id: "p136",
  //   name: {
  //     tk: "Sada Pyure",
  //     ru: "Пюре простой",
  //   },
  //   price: 25,
  //   image: "1786843696405-561801125.webp",
  // },
  // {
  //   id: "p140",
  //   name: {
  //     tk: "Kömelekli Ýer Alma",
  //     ru: "Жаренная картошка с грибами",
  //   },
  //   price: 40,
  //   image: "1786697649639-164654238.webp",
  // },
  // {
  //   id: "p142",
  //   name: {
  //     tk: "Gowurma Ýer Alma",
  //     ru: "Картошка с мясом",
  //   },
  //   price: 65,
  //   image: "1786697661510-860534339.webp",
  // },

  // --- Kokteýl / Коктейли
  // {
  //   id: "p144",
  //   name: {
  //     tk: "Классический лимонад",
  //     ru: "Классический лимонад",
  //   },
  //   price: 35,
  //   image: "1786704323325-706226360.webp",
  // },
  // {
  //   id: "p145",
  //   name: {
  //     tk: "Ягодный лимонад",
  //     ru: "Ягодный лимонад",
  //   },
  //   price: 35,
  //   image: "1786843793271-187946760.webp",
  // },
  // {
  //   id: "p146",
  //   name: {
  //     tk: "Ситрусовый лимонад",
  //     ru: "Ситрусовый лимонад",
  //   },
  //   price: 35,
  //   image: "1786843807481-144658713.webp",
  // },
  // {
  //   id: "p149",
  //   name: {
  //     tk: "Oreo",
  //     ru: "Oreo",
  //   },
  //   price: 45,
  //   image: "1786843837543-262812005.webp",
  // },
  // {
  //   id: "p151",
  //   name: {
  //     tk: "Карамельный",
  //     ru: "Карамельный",
  //   },
  //   price: 40,
  //   image: "1786843907831-815257969.webp",
  // },
  // {
  //   id: "p153",
  //   name: {
  //     tk: "Банановый",
  //     ru: "Банановый",
  //   },
  //   price: 35,
  //   image: "1786843925982-894306848.webp",
  // },

  // --- Sowuk icgiler / Холодные напитки
  // {
  //   id: "p12168",
  //   name: {
  //     tk: "Kola Cynar",
  //     ru: "Кола Чынар",
  //   },
  //   price: 10,
  //   image: "1786844134065-97105978.webp",
  // },
  // {
  //   id: "p12169",
  //   name: {
  //     tk: "Gosa Cynar",
  //     ru: "Гоша Чынар",
  //   },
  //   price: 7,
  //   image: "1786844134065-55480124.webp",
  // },
  // {
  //   id: "p12170",
  //   name: {
  //     tk: "Coca Cola 1l",
  //     ru: "Кока-Кола 1 л",
  //   },
  //   price: 20,
  //   image: "1786844134065-922508404.webp",
  // },
  // {
  //   id: "p12171",
  //   name: {
  //     tk: "Pepsi 0.5 l",
  //     ru: "Пепси 0,5 л",
  //   },
  //   price: 8,
  //   image: "1786844134065-662492932.webp",
  // },
  // {
  //   id: "p12172",
  //   name: {
  //     tk: "Arcalyk suw",
  //     ru: "Вода Арчалык",
  //   },
  //   price: 3,
  //   image: "1786844134065-968035160.webp",
  // },
  // {
  //   id: "p12173",
  //   name: {
  //     tk: "Lipton gok",
  //     ru: "Липтон зелёный",
  //   },
  //   price: 8,
  //   image: "1786844134065-900766771.webp",
  // },
  // {
  //   id: "p12174",
  //   name: {
  //     tk: "Lipton Gara",
  //     ru: "Липтон чёрный",
  //   },
  //   price: 8,
  //   image: "1786844134065-384265970.webp",
  // },
  // {
  //   id: "p12175",
  //   name: {
  //     tk: "Coca cola 0.5l",
  //     ru: "Кока-Кола 0,5 л",
  //   },
  //   price: 10,
  //   image: "1786844134065-382784778.webp",
  // },
  // {
  //   id: "p12176",
  //   name: {
  //     tk: "Powrize",
  //     ru: "Повризе",
  //   },
  //   price: 5,
  //   image: "1786844134065-830671356.webp",
  // },
  // {
  //   id: "p12177",
  //   name: {
  //     tk: "Kola Cynar",
  //     ru: "Кола Чынар",
  //   },
  //   price: 7,
  //   image: "1786844134065-631334713.webp",
  // },
  // {
  //   id: "p12178",
  //   name: {
  //     tk: "Sprite",
  //     ru: "Спрайт",
  //   },
  //   price: 15,
  //   image: "1786844134065-302063009.webp",
  // },
  // {
  //   id: "p12179",
  //   name: {
  //     tk: "Ecil ulje",
  //     ru: "Эчил Вишня",
  //   },
  //   price: 20,
  //   image: "1786844134065-953788399.webp",
  // },
  // {
  //   id: "p12180",
  //   name: {
  //     tk: "Ecil Pyrtykal",
  //     ru: "Эчил Апельсин",
  //   },
  //   price: 20,
  //   image: "1786844134065-333122479.webp",
  // },
  // {
  //   id: "p12181",
  //   name: {
  //     tk: "Ecil Setdaly",
  //     ru: "Эчил Персик",
  //   },
  //   price: 20,
  //   image: "1786844134065-357859189.webp",
  // },
  // {
  //   id: "p12182",
  //   name: {
  //     tk: "Ecil Alma",
  //     ru: "Эчил Яблоко",
  //   },
  //   price: 20,
  //   image: "1786844134065-243926901.webp",
  // },
  // {
  //   id: "p12183",
  //   name: {
  //     tk: "Ecil Nar",
  //     ru: "Эчил Гранат",
  //   },
  //   price: 20,
  //   image: "1786844134065-212646758.webp",
  // },
  // {
  //   id: "p12184",
  //   name: {
  //     tk: "7 Gun Alma",
  //     ru: "7 Гюн Яблоко",
  //   },
  //   price: 15,
  //   image: "1786844134065-907139639.webp",
  // },
  // {
  //   id: "p12185",
  //   name: {
  //     tk: "7 Gun Ulje",
  //     ru: "7 Гюн Вишня",
  //   },
  //   price: 15,
  //   image: "1786844134065-672350812.webp",
  // },
  // {
  //   id: "p12186",
  //   name: {
  //     tk: "7 Gun Pyrtykal",
  //     ru: "7 Гюн Апельсин",
  //   },
  //   price: 15,
  //   image: "1786844134065-424813781.webp",
  // },
  // {
  //   id: "p12187",
  //   name: {
  //     tk: "7 Gun Setdaly",
  //     ru: "7 Гюн Персик",
  //   },
  //   price: 15,
  //   image: "1786844134065-873533774.webp",
  // },
  // {
  //   id: "p12188",
  //   name: {
  //     tk: "7 Gun Tropik",
  //     ru: "7 Гюн Тропик",
  //   },
  //   price: 15,
  //   image: "1786844134065-507763250.webp",
  // },
];
