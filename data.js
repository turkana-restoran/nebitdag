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
  phone: "+99362998301",

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
  },
};

/* ==========================================================================
   4. MENU — kategoriler ve ürünler / categories and products
Resimler "uploads/" klasöründen gelir. Images are served from uploads/.
   ========================================================================== */
const MENU = [
  {
    id: "breakfast",
    name: {
      tk: "Ertirlikler",
      ru: "Завтраки",
    },
    image: "breakfast-ertirlik1.webp",
    items: [
      {
        id: "p6845",
        name: {
          tk: "Türk ertirligi",
          ru: "Турецкий завтрак",
        },
        price: 80,
        image: "1785481404547-493407356-sm.webp",
      },
      {
        id: "p6846",
        name: {
          tk: "Peýnirli we kömelekli ýumurtga",
          ru: "Яичница с сыром и грибами",
        },
        price: 35,
        image: "1785481412887-221794588-sm.webp",
      },
      {
        id: "p6847",
        name: {
          tk: "Gowurdakly ýumurtga",
          ru: "Яичница с говурдаком",
        },
        price: 40,
        image: "1785481420893-314687771-sm.webp",
      },
      {
        id: "p6848",
        name: {
          tk: "Menemen",
          ru: "Менемен",
        },
        price: 30,
        image: "1785481429437-881160463-sm.webp",
      },
      {
        id: "p6849",
        name: {
          tk: "Meksikan omleti",
          ru: "Омлет по-мексикански",
        },
        price: 30,
        image: "1785482552688-786096037-sm.webp",
      },
      {
        id: "p6850",
        name: {
          tk: "Kolbasaly omlet",
          ru: "Омлет с колбасой",
        },
        price: 35,
        image: "1785482562076-127875839-sm.webp",
      },
      {
        id: "p6851",
        name: {
          tk: "Kömelekli omlet",
          ru: "Омлет с грибами",
        },
        price: 35,
        image: "1785482571449-604486077-sm.webp",
      },
      {
        id: "p6852",
        name: {
          tk: "Brusketta",
          ru: "Брускетты",
        },
        price: 55,
        image: "1785482578348-943057132-sm.webp",
      },
      {
        id: "p6853",
        name: {
          tk: "Tost",
          ru: "Тост",
        },
        price: 25,
        image: "1785482584674-642842869-sm.webp",
      },
      {
        id: "p6854",
        name: {
          tk: "Uly sendwiç",
          ru: "Биг сэндвич",
        },
        price: 55,
        image: "1785482596412-859097634-sm.webp",
      },
      {
        id: "p6855",
        name: {
          tk: "Wetçinaly sendwiç",
          ru: "Сэндвич с ветчиной",
        },
        price: 50,
        image: "1785482623140-663715073-sm.webp",
      },
      {
        id: "p6856",
        name: {
          tk: "Klub sendwiç",
          ru: "Клаб сэндвич",
        },
        price: 50,
        image: "1785482631053-881963506-sm.webp",
      },
    ],
  },
  {
    id: "fast-food",
    name: {
      tk: "Fast Fud",
      ru: "Фаст фуд",
    },
    image: "burger-burger1.webp",
    items: [
      {
        id: "p6857",
        name: {
          tk: "Çörekli döner",
          ru: "Донер с хлебом",
        },
        price: 55,
        image: "doner-doner1.webp",
      },
      {
        id: "p6858",
        name: {
          tk: "Lawaşly döner",
          ru: "Донер с лавашом",
        },
        price: 55,
        image: "doner-doner2.webp",
      },
      {
        id: "p6859",
        name: {
          tk: "Burger",
          ru: "Бургер",
        },
        price: 60,
        image: "burger-burger1.webp",
      },
      {
        id: "p6860",
        name: {
          tk: "Towuk burger",
          ru: "Чикен бургер",
        },
        price: 60,
        image: "burger-burger2.webp",
      },
      {
        id: "p6861",
        name: {
          tk: "Çizburger",
          ru: "Чизбургер",
        },
        price: 70,
        image: "hamburger-ciz-burger.webp",
      },
      {
        id: "p6862",
        name: {
          tk: "Goşa burger",
          ru: "Дабл бургер",
        },
        price: 80,
        image: "burger-burger3.webp",
      },
      {
        id: "p6863",
        name: {
          tk: "Şef burger",
          ru: "Шеф бургер",
        },
        price: 90,
        image: "hamburger-asado-burger.webp",
      },
      {
        id: "p6864",
        name: {
          tk: "KFS towuk",
          ru: "КФС",
        },
        price: 80,
        image: "nagetsy-nagetsy1.webp",
      },
    ],
  },
  {
    id: "salads",
    name: {
      tk: "Salatlar",
      ru: "Салаты",
    },
    items: [
      {
        id: "p6865",
        name: {
          tk: "Mylaýym sygyr etli salat",
          ru: "Тёплый салат с говядиной",
        },
        price: 70,
        image: "1785482644107-864778979-sm.webp",
      },
      {
        id: "p6869",
        name: {
          tk: "Kurbaş salady",
          ru: "Салат Курбас",
        },
        price: 70,
        image: "1785482883576-531647019-sm.webp",
      },
      {
        id: "p6870",
        name: {
          tk: "Şuba astyndaky seld",
          ru: "Селёдка под шубой",
        },
        price: 70,
        image: "1785482908919-202017366-sm.webp",
      },
      {
        id: "p6871",
        name: {
          tk: "Krab salady",
          ru: "Крабовый салат",
        },
        price: 70,
        image: "1785482919839-88643602-sm.webp",
      },
      {
        id: "p6872",
        name: {
          tk: "Badamjan salady",
          ru: "Баклажановый салат",
        },
        price: 50,
        image: "1785482929362-320042215-sm.webp",
      },
      {
        id: "p6873",
        name: {
          tk: "Grek salady",
          ru: "Греческий салат",
        },
        price: 50,
        image: "1785482946711-991098136-sm.webp",
      },
      {
        id: "p6874",
        name: {
          tk: "Taý salady",
          ru: "Тайский салат",
        },
        price: 70,
        image: "1785482957093-280798959-sm.webp",
      },
      {
        id: "p6875",
        name: {
          tk: "Türk salady",
          ru: "Турецкий салат",
        },
        price: 70,
        image: "1785482966294-135213833-sm.webp",
      },
      {
        id: "p6876",
        name: {
          tk: "Italýan salady",
          ru: "Итальянский салат",
        },
        price: 65,
        image: "1785482973684-934463402-sm.webp",
      },
      {
        id: "p6877",
        name: {
          tk: "Olihwe salady",
          ru: "Оливье",
        },
        price: 50,
        image: "1785482985316-905408395-sm.webp",
      },
      {
        id: "p6878",
        name: {
          tk: "Erkek islegi salady",
          ru: "Мужской каприз",
        },
        price: 70,
        image: "1785482993603-676389521-sm.webp",
      },
      {
        id: "p6879",
        name: {
          tk: "Dostlar üçin salat",
          ru: "Для друзей",
        },
        price: 70,
        image: "1785483003888-228827647-sm.webp",
      },
      {
        id: "p6881",
        name: {
          tk: "Süýjüjik salat",
          ru: "Вкусняшка",
        },
        price: 70,
        image: "1785483023549-68109335-sm.webp",
      },
      {
        id: "p6882",
        name: {
          tk: "Tüsseli salat",
          ru: "Дымок",
        },
        price: 50,
        image: "1785483031968-681924928-sm.webp",
      },
      {
        id: "p6883",
        name: {
          tk: "Sarymsakly süzme",
          ru: "Сюзьма с чесноком",
        },
        price: 30,
        image: "1785483042169-523740168-sm.webp",
      },
      {
        id: "p6884",
        name: {
          tk: "Täze salat",
          ru: "Свежий салат",
        },
        price: 50,
        image: "1785483060161-310345586-sm.webp",
      },
      {
        id: "p6885",
        name: {
          tk: "Çopan salady",
          ru: "Чобан салат",
        },
        price: 50,
        image: "1785483074738-31048329-sm.webp",
      },
    ],
  },
  {
    id: "dessert-salads-fruits",
    name: {
      tk: "Süýji salatlar we miweler",
      ru: "Салаты-десерты и фрукты",
    },
    image: "ice-cream-disert-su.webp",
    items: [
      {
        id: "p8825",
        name: {
          tk: "Miweli Sokolad",
          ru: "Miweli Sokolad",
        },
        price: 90,
        image: "1785483097581-791481606-sm.webp",
      },
      {
        id: "p6888",
        name: {
          tk: "Miwe bagy",
          ru: "Фруктовый сад",
        },
        price: 80,
        image: "1785483105498-470071-sm.webp",
      },
      {
        id: "p6889",
        name: {
          tk: "Miwe perisi",
          ru: "Фруктовая фея",
        },
        price: 90,
        image: "1785483113201-874442021-sm.webp",
      },
    ],
  },
  {
    id: "cold-appetizers",
    name: {
      tk: "Sowuk işdäaçarlar",
      ru: "Холодные закуски",
    },
    items: [
      {
        id: "p6890",
        name: {
          tk: "Gök önüm assorti",
          ru: "Овощное ассорти",
        },
        price: 60,
        image: "1785483123335-421554619-sm.webp",
      },
      {
        id: "p6891",
        name: {
          tk: "Duzly assorti",
          ru: "Солёное ассорти",
        },
        price: 75,
        image: "1785483137170-363655470-sm.webp",
      },
      {
        id: "p6892",
        name: {
          tk: "Miwe assorti",
          ru: "Фруктовое ассорти",
        },
        price: 180,
        image: "1785483146826-218784485-sm.webp",
      },
      {
        id: "p6893",
        name: {
          tk: "Et assorti",
          ru: "Мясное ассорти",
        },
        price: 200,
        image: "1785483154834-963239560-sm.webp",
      },
      {
        id: "p6894",
        name: {
          tk: "Peýnir assorti",
          ru: "Сырное ассорти",
        },
        price: 180,
        image: "1785483167327-11586455-sm.webp",
      },
      {
        id: "p6895",
        name: {
          tk: "Kaprese",
          ru: "Капрезе",
        },
        price: 90,
        image: "1785483179961-274071305-sm.webp",
      },
      {
        id: "p6896",
        name: {
          tk: "Limon",
          ru: "Лимон",
        },
        price: 30,
        image: "1785483189285-654484970-sm.webp",
      },
      {
        id: "p6897",
        name: {
          tk: "Limon / Ananas / Zeýtun",
          ru: "Лимон / ананас / маслины",
        },
        price: 80,
        image: "1785483200179-309808603-sm.webp",
      },
      {
        id: "p6898",
        name: {
          tk: "Kartoşkaly seld",
          ru: "Селёдка с картофелем",
        },
        price: 100,
        image: "1785483275466-154953670-sm.webp",
      },
      {
        id: "p6900",
        name: {
          tk: "Badamjan ruletjikleri",
          ru: "Рулетики из баклажан",
        },
        price: 60,
        image: "1785483242497-774941238-sm.webp",
      },
      {
        id: "p6901",
        name: {
          tk: "Sarymsakly we gök otly süzme",
          ru: "Сюзьма с чесноком и зеленью",
        },
        price: 50,
        image: "1785483254394-337253503-sm.webp",
      },
    ],
  },
  {
    id: "soups",
    name: {
      tk: "Çorbalar",
      ru: "Супы",
    },
    image: "soup-soup.webp",
    items: [
      {
        id: "p6902",
        name: {
          tk: "Kömelek krem çorbasy",
          ru: "Грибной крем-суп",
        },
        price: 50,
        image: "1785483289871-320161522-sm.webp",
      },
      {
        id: "p6903",
        name: {
          tk: "Towuk krem çorbasy",
          ru: "Куриный крем-суп",
        },
        price: 50,
        image: "1785483300100-537956760-sm.webp",
      },
      {
        id: "p6904",
        name: {
          tk: "Merjimek çorbasy",
          ru: "Мерджимек",
        },
        price: 30,
        image: "soup-merjimek.webp",
      },
      {
        id: "p6905",
        name: {
          tk: "Ezogelin çorbasy",
          ru: "Эзогелин",
        },
        price: 35,
        image: "soup-ezogelin.webp",
      },
      {
        id: "p6907",
        name: {
          tk: "Mengen çorbasy",
          ru: "Менген",
        },
        price: 50,
        image: "1785483316105-899303834-sm.webp",
      },
      {
        id: "p6908",
        name: {
          tk: "Pomidor çorbasy",
          ru: "Томатный суп",
        },
        price: 35,
        image: "soup-tomatny-corba.webp",
      },
      {
        id: "p6910",
        name: {
          tk: "Ysmanak çorbasy",
          ru: "Шпинатный суп",
        },
        price: 40,
        image: "1785483340669-518843073-sm.webp",
      },
      {
        id: "p6912",
        name: {
          tk: "Un aş",
          ru: "Ун-аш",
        },
        price: 50,
        image: "1785483355691-236726922-sm.webp",
      },
      {
        id: "p6913",
        name: {
          tk: "Lagman",
          ru: "Лагман",
        },
        price: 50,
        image: "1785483369228-363579253-sm.webp",
      },
      {
        id: "p6914",
        name: {
          tk: "Toý çorbasy",
          ru: "Той чорба",
        },
        price: 50,
        image: "1785483380860-21918100-sm.webp",
      },
      {
        id: "p6915",
        name: {
          tk: "Çorbaly pelmeni",
          ru: "Пельмени с бульоном",
        },
        price: 45,
        image: "1785483397254-424941798-sm.webp",
      },
      {
        id: "p6917",
        name: {
          tk: "Okroşka",
          ru: "Окрошка",
        },
        price: 35,
        image: "1785483419244-140026721-sm.webp",
      },
      {
        id: "p6919",
        name: {
          tk: "Dogroma",
          ru: "Дограма",
        },
        price: 50,
        image: "1785483450346-650250666-sm.webp",
      },
      {
        id: "p6920",
        name: {
          tk: "Tefteli çorba",
          ru: "Тефтельный суп",
        },
        price: 50,
        image: "1785483468969-171557744-sm.webp",
      },
    ],
  },
  {
    id: "pasta-side-dishes",
    name: {
      tk: "Pasta we garnirler",
      ru: "Паста и гарниры",
    },
    image: "sagaetti-balonez-sapagetti.webp",
    items: [
      {
        id: "p6921",
        name: {
          tk: "Tüwi",
          ru: "Рис",
        },
        price: 25,
        image: "1785483480426-343966312-sm.webp",
      },
      {
        id: "p6922",
        name: {
          tk: "Grečka",
          ru: "Гречка",
        },
        price: 25,
        image: "1785483493397-928642838-sm.webp",
      },
      {
        id: "p6923",
        name: {
          tk: "Kartoşka pýuresi",
          ru: "Картофельное пюре",
        },
        price: 40,
        image: "1785483533970-700813061-sm.webp",
      },
      {
        id: "p6924",
        name: {
          tk: "Fri kartoşka",
          ru: "Картофель фри",
        },
        price: 40,
        image: "hamburger-nageccy-bilen-free.webp",
      },
      {
        id: "p6925",
        name: {
          tk: "Öý usulynda kömelekli kartoşka",
          ru: "Картофель по-домашнему с грибами",
        },
        price: 50,
        image: "1785483547787-978087121-sm.webp",
      },
      {
        id: "p6926",
        name: {
          tk: "Pesto sously spagetti",
          ru: "Спагетти с соусом песто",
        },
        price: 70,
        image: "1785483512403-308016983-sm.webp",
      },
      {
        id: "p6927",
        name: {
          tk: "Spagetti bolonez",
          ru: "Спагетти болоньезе",
        },
        price: 70,
        image: "sagaetti-balonez-sapagetti.webp",
      },
      {
        id: "p6928",
        name: {
          tk: "Fettuçino Alfredo",
          ru: "Феттуччине Альфредо",
        },
        price: 70,
        image: "sagaetti-towukly-fettucino.webp",
      },
    ],
  },
  {
    id: "pastry-dough-dishes",
    name: {
      tk: "Un önümleri",
      ru: "Мучные изделия",
    },
    items: [
      {
        id: "p6930",
        name: {
          tk: "Somsa",
          ru: "Сомса",
        },
        price: 10,
        image: "1785483571904-239900108-sm.webp",
      },
      {
        id: "p6931",
        name: {
          tk: "Fitçi",
          ru: "Фитчи",
        },
        price: 15,
        image: "1785483580451-40061432-sm.webp",
      },
      {
        id: "p6932",
        name: {
          tk: "Çeburek",
          ru: "Чебуреки",
        },
        price: 10,
        image: "1785483594950-898513223-sm.webp",
      },
      {
        id: "p6934",
        name: {
          tk: "Farşly manty",
          ru: "Манты с фаршем",
        },
        price: 55,
        image: "1785483607074-405839634-sm.webp",
      },
      {
        id: "p6935",
        name: {
          tk: "Dogralan etli manty",
          ru: "Манты из нарезного мяса",
        },
        price: 65,
        image: "1785483614616-318845622-sm.webp",
      },
      {
        id: "p6936",
        name: {
          tk: "Pelmeni",
          ru: "Пельмени",
        },
        price: 50,
        image: "1785483640034-960832724-sm.webp",
      },
      {
        id: "p6937",
        name: {
          tk: "Kesadilýa",
          ru: "Кесадилья",
        },
        price: 60,
        image: "1785483648434-731914400-sm.webp",
      },
      {
        id: "p6938",
        name: {
          tk: "Assorti pirog",
          ru: "Пирог ассорти",
        },
        price: 90,
        image: "1785483655815-549085822-sm.webp",
      },
      {
        id: "p6939",
        name: {
          tk: "Farşly pirog",
          ru: "Пирог с фаршем",
        },
        price: 70,
        image: "1785483695175-823610238-sm.webp",
      },
      {
        id: "p6940",
        name: {
          tk: "Lezgin pirogy",
          ru: "Пирог лезгинский",
        },
        price: 80,
        image: "1785483685686-918782823-sm.webp",
      },
      {
        id: "p6941",
        name: {
          tk: "Dört pasyl pizza",
          ru: "Пицца 4 сезона",
        },
        price: 80,
        image: "1785483707239-372524563-sm.webp",
      },
      {
        id: "p6942",
        name: {
          tk: "Assorti pizza",
          ru: "Пицца ассорти",
        },
        price: 80,
        image: "1785483797000-415902602-sm.webp",
      },
      {
        id: "p6943",
        name: {
          tk: "Towukly pizza",
          ru: "Пицца куриная",
        },
        price: 80,
        image: "1785483823329-556678115-sm.webp",
      },
      {
        id: "p6944",
        name: {
          tk: "Etli pizza",
          ru: "Пицца мясная",
        },
        price: 80,
        image: "1785483835774-235808592-sm.webp",
      },
      {
        id: "p6945",
        name: {
          tk: "Kömelekli pizza",
          ru: "Пицца грибная",
        },
        price: 80,
        image: "1785483853150-205886067-sm.webp",
      },
      {
        id: "p6946",
        name: {
          tk: "Pepperoni pizza",
          ru: "Пицца пепперони",
        },
        price: 80,
        image: "1785483868572-916713438-sm.webp",
      },
      {
        id: "p6948",
        name: {
          tk: "Ak sously pizza",
          ru: "Пицца на белом соусе",
        },
        price: 80,
        image: "1785483889324-478767006-sm.webp",
      },
      {
        id: "p6949",
        name: {
          tk: "Margarita pizza",
          ru: "Пицца Маргарита",
        },
        price: 80,
        image: "1785483900603-775102041-sm.webp",
      },
      {
        id: "p6950",
        name: {
          tk: "Dogralan etli pide",
          ru: "Пиде с нарезным мясом",
        },
        price: 65,
        image: "1785483922904-8577618-sm.webp",
      },
      {
        id: "p6951",
        name: {
          tk: "Garyşyk pide",
          ru: "Пиде микс",
        },
        price: 65,
        image: "1785483931455-497396319-sm.webp",
      },
      {
        id: "p6952",
        name: {
          tk: "Garadeňiz pide",
          ru: "Пиде Карадениз",
        },
        price: 65,
        image: "1785483942364-294331217-sm.webp",
      },
      {
        id: "p6953",
        name: {
          tk: "Lahmajun",
          ru: "Лахмаджун",
        },
        price: 40,
        image: "1785483955602-260243650-sm.webp",
      },
    ],
  },
  {
    id: "hot-meat-dishes",
    name: {
      tk: "Gyzgyn et tagamlary",
      ru: "Горячие блюда из мяса",
    },
    image: "doner-palaw-doner-palaw1.webp",
    items: [
      {
        id: "p6956",
        name: {
          tk: "Şef aşpezden tagam",
          ru: "Блюдо от шеф-повара",
        },
        price: 150,
        image: "1785483974895-306590277-sm.webp",
      },
      {
        id: "p6957",
        name: {
          tk: "Mesgeli kakmaç",
          ru: "Какмач на сливочном масле",
        },
        price: 100,
        image: "1785483983692-271175417-sm.webp",
      },
      {
        id: "p6958",
        name: {
          tk: "Kakmaç batyrma",
          ru: "Какмач батырма",
        },
        price: 100,
        image: "1785484005183-651617818-sm.webp",
      },
      {
        id: "p6959",
        name: {
          tk: "Fahitos",
          ru: "Фахитос",
        },
        price: 90,
        image: "1785484024711-550825795-sm.webp",
      },
      {
        id: "p6960",
        name: {
          tk: "Befstroganow",
          ru: "Бефстроганов",
        },
        price: 110,
        image: "1785484035821-53680416-sm.webp",
      },
      {
        id: "p6961",
        name: {
          tk: "Gorçisa sously et",
          ru: "Мясо в горчичном соусе",
        },
        price: 110,
        image: "1785484054716-414607073-sm.webp",
      },
      {
        id: "p6962",
        name: {
          tk: "Fransuz usulynda et",
          ru: "Мясо по-французски",
        },
        price: 120,
        image: "1785484066098-287781587-sm.webp",
      },
      {
        id: "p6963",
        name: {
          tk: "Hytaý usulynda et",
          ru: "Мясо по-китайски",
        },
        price: 110,
        image: "1785484081968-562053375-sm.webp",
      },
      {
        id: "p6964",
        name: {
          tk: "Gowrulan bagyr",
          ru: "Печень жареная",
        },
        price: 100,
        image: "1785484091579-36175399-sm.webp",
      },
      {
        id: "p6965",
        name: {
          tk: "Kömelekli goýun eti",
          ru: "Баранина с грибами",
        },
        price: 90,
        image: "1785484117191-289393600-sm.webp",
      },
      {
        id: "p6966",
        name: {
          tk: "Goýun gapyrgasy",
          ru: "Бараньи рёбрышки",
        },
        price: 120,
        image: "1785484126628-186276107-sm.webp",
      },
      {
        id: "p6967",
        name: {
          tk: "Goýun injigi",
          ru: "Бараньи голени",
        },
        price: 110,
        image: "1785484141366-112482507-sm.webp",
      },
      {
        id: "p6969",
        name: {
          tk: "Nagetsy",
          ru: "Нагетсы",
        },
        price: 80,
        image: "1785484169828-403224324-sm.webp",
      },
      {
        id: "p6972",
        name: {
          tk: "Palow",
          ru: "Палов",
        },
        price: 50,
        image: "1785484204817-917663649-sm.webp",
      },
      {
        id: "p6973",
        name: {
          tk: "Izmir köfte",
          ru: "Измир кёфте",
        },
        price: 100,
        image: "1785484216835-883821770-sm.webp",
      },
      {
        id: "p6974",
        name: {
          tk: "Jyz-jyz köfte",
          ru: "Джыз-джыз кёфте",
        },
        price: 100,
        image: "1785484236312-856315596-sm.webp",
      },
    ],
  },
  {
    id: "hot-fish-dishes",
    name: {
      tk: "Gyzgyn balyk tagamlary",
      ru: "Горячие блюда из рыбы",
    },
    image: "steak-syomga-gyzyl-balyk.webp",
    items: [
      {
        id: "p6980",
        name: {
          tk: "Gowrulan kefal",
          ru: "Кефаль жареная",
        },
        price: 0,
        image: "1785484283570-654874635-sm.webp",
      },
      {
        id: "p6981",
        name: {
          tk: "Folgada bişirilen kefal",
          ru: "Кефаль запечённая в фольге",
        },
        price: 0,
        image: "1785484292024-457393231-sm.webp",
      },
      {
        id: "p6982",
        name: {
          tk: "Gowrulan sudak",
          ru: "Судак жареный",
        },
        price: 0,
        image: "1785484304602-735804788-sm.webp",
      },
      {
        id: "p6983",
        name: {
          tk: "Folgada bişirilen sudak",
          ru: "Судак запечённый в фольге",
        },
        price: 0,
        image: "1785484314132-956176690-sm.webp",
      },
      {
        id: "p6984",
        name: {
          tk: "Gowrulan bekre",
          ru: "Осетрина жареная",
        },
        price: 0,
        image: "1785484325390-867029476-sm.webp",
      },
      {
        id: "p6985",
        name: {
          tk: "Fransuz usulynda bekre",
          ru: "Осетрина по-французски",
        },
        price: 0,
        image: "1785484334354-687374686-sm.webp",
      },
      {
        id: "p6986",
        name: {
          tk: "Mangalda kefal",
          ru: "Кефаль на мангале",
        },
        price: 0,
        image: "1785484344992-524215540-sm.webp",
      },
      {
        id: "p6987",
        name: {
          tk: "Mangalda bekre",
          ru: "Осетрина на мангале",
        },
        price: 0,
        image: "1785484354640-636044474-sm.webp",
      },
      {
        id: "p6988",
        name: {
          tk: "Kefal",
          ru: "Кефаль",
        },
        price: 0,
        image: "1785484369090-892203566-sm.webp",
      },
    ],
  },
  {
    id: "hot-chicken-dishes",
    name: {
      tk: "Gyzgyn towuk tagamlary",
      ru: "Горячие блюда из курицы",
    },
    image: "nagetsy-nagetsy1.webp",
    items: [
      {
        id: "p6991",
        name: {
          tk: "Krekerli towuk filesi",
          ru: "Куриное филе в крекерах",
        },
        price: 110,
        image: "1785484387179-261175991-sm.webp",
      },
      {
        id: "p6992",
        name: {
          tk: "Kömelek kremli towuk döşi",
          ru: "Куриная грудка под сливочно-грибным соусом",
        },
        price: 100,
        image: "1785484400957-125323382-sm.webp",
      },
      {
        id: "p6993",
        name: {
          tk: "Karri sously towuk döşi",
          ru: "Куриная грудка в карри соусе",
        },
        price: 100,
        image: "1785484409470-423177980-sm.webp",
      },
      {
        id: "p6994",
        name: {
          tk: "Ysmanakly towuk döşi",
          ru: "Куриная грудка со шпинатом",
        },
        price: 110,
        image: "1785484421358-36481412-sm.webp",
      },
      {
        id: "p6995",
        name: {
          tk: "Towuk sote",
          ru: "Куриное соте",
        },
        price: 80,
        image: "1785484433574-645638238-sm.webp",
      },
      {
        id: "p6996",
        name: {
          tk: "Towuk çahohbili",
          ru: "Курица чахохбили",
        },
        price: 90,
        image: "1785484447316-510115284-sm.webp",
      },
      {
        id: "p6997",
        name: {
          tk: "Towukly lazanýa",
          ru: "Куриная лазанья",
        },
        price: 80,
        image: "1785484463726-368887722-sm.webp",
      },
      {
        id: "p6998",
        name: {
          tk: "Fransuz usulynda towuk filesi",
          ru: "Куриное филе по-французски",
        },
        price: 110,
        image: "1785484476825-997804151-sm.webp",
      },
      {
        id: "p6999",
        name: {
          tk: "Teriýaki sously towuk ganady",
          ru: "Куриные крылышки в терияки соусе",
        },
        price: 90,
        image: "1785484485805-546168556-sm.webp",
      },
      {
        id: "p7000",
        name: {
          tk: "Kiýew kotleti",
          ru: "Котлеты по-киевски",
        },
        price: 80,
        image: "1785484514137-859910559-sm.webp",
      },
      {
        id: "p7001",
        name: {
          tk: "Mesgeli jüýje",
          ru: "Цыплёнок на сливочном масле",
        },
        price: 75,
        image: "1785484522046-886289718-sm.webp",
      },
      {
        id: "p7002",
        name: {
          tk: "Jüýje batyrma",
          ru: "Цыплёнок батырма",
        },
        price: 75,
        image: "1785484531113-895506844-sm.webp",
      },
    ],
  },
  {
    id: "steaks",
    name: {
      tk: "Steýkler",
      ru: "Стейки",
    },
    image: "steak-t-bone-steik.webp",
    items: [
      {
        id: "p7003",
        name: {
          tk: "T-bone steýk",
          ru: "Стейк Т-бон",
        },
        price: 190,
        image: "1785484540128-844385491-sm.webp",
      },
      {
        id: "p7004",
        name: {
          tk: "Dallas steýk",
          ru: "Стейк Даллас",
        },
        price: 175,
        image: "1785484567236-625855486-sm.webp",
      },
      {
        id: "p7005",
        name: {
          tk: "Nýu-Ýork steýk",
          ru: "Стейк Нью-Йорк",
        },
        price: 175,
        image: "1785484577308-223950635-sm.webp",
      },
      {
        id: "p7006",
        name: {
          tk: "Medalýon steýk",
          ru: "Стейк медальон",
        },
        price: 160,
        image: "1785484591687-578026446-sm.webp",
      },
      {
        id: "p7007",
        name: {
          tk: "Towuk döş steýki",
          ru: "Куриная грудка",
        },
        price: 110,
        image: "1785484600499-215878119-sm.webp",
      },
    ],
  },
  {
    id: "turkish-dishes",
    name: {
      tk: "Türk tagamlary",
      ru: "Турецкие блюда",
    },
    image: "doner-palaw-doner-palaw5.webp",
    items: [
      {
        id: "p7008",
        name: {
          tk: "Adana kebap",
          ru: "Адана кебап",
        },
        price: 65,
        image: "1785484611524-381450505-sm.webp",
      },
      {
        id: "p7009",
        name: {
          tk: "Ali Nazik kebap",
          ru: "Али Назик кебап",
        },
        price: 80,
        image: "1785484624541-585259507-sm.webp",
      },
      {
        id: "p7010",
        name: {
          tk: "Beýti kebap",
          ru: "Бейти кебап",
        },
        price: 75,
        image: "1785484633721-457972200-sm.webp",
      },
      {
        id: "p7011",
        name: {
          tk: "Badamjan kebap",
          ru: "Баклажан кебап",
        },
        price: 65,
        image: "1785484645675-967592578-sm.webp",
      },
      {
        id: "p7012",
        name: {
          tk: "Iskender kebap",
          ru: "Искендер кебап",
        },
        price: 70,
        image: "1785484661877-358485351-sm.webp",
      },
      {
        id: "p7014",
        name: {
          tk: "Guzy pirzola",
          ru: "Кузу пирзола",
        },
        price: 80,
        image: "1785484685789-146099001-sm.webp",
      },
      {
        id: "p7016",
        name: {
          tk: "Yzgara köfte",
          ru: "Изгара кёфте",
        },
        price: 65,
        image: "1785484720736-148630908-sm.webp",
      },
      {
        id: "p7017",
        name: {
          tk: "Kaşarly köfte",
          ru: "Кашарлы кёфте",
        },
        price: 75,
        image: "1785484731592-785329548-sm.webp",
      },
      {
        id: "p7018",
        name: {
          tk: "Izmir köfte",
          ru: "Измир кёфте",
        },
        price: 75,
        image: "1785484746654-11178568-sm.webp",
      },
    ],
  },
  {
    id: "grill-skewers",
    name: {
      tk: "Şaşlyklar",
      ru: "Шашлыки",
    },
    image: "doner-palaw-doner-palaw3.webp",
    items: [
      {
        id: "p8826",
        name: {
          tk: "Assorty mangal",
          ru: "Ассорти на мангале",
        },
        price: 600,
        image: "1785484794125-391596544-sm.webp",
      },
      {
        id: "p8827",
        name: {
          tk: "Assorty mangal",
          ru: "Ассорти на мангале",
        },
        price: 800,
        image: "1785484800448-941123552-sm.webp",
      },
      {
        id: "p7020",
        name: {
          tk: "Sygyr etli lýulýa",
          ru: "Люля говяжье",
        },
        price: 50,
        image: "1785484821002-850623108-sm.webp",
      },
      {
        id: "p7021",
        name: {
          tk: "Towuk lýulýa",
          ru: "Люля куриный",
        },
        price: 50,
        image: "1785484831590-558711755-sm.webp",
      },
      {
        id: "p7022",
        name: {
          tk: "Peýnirli sygyr kotleti",
          ru: "Котлет говяжий с сыром",
        },
        price: 75,
        image: "1785484847925-629518876-sm.webp",
      },
      {
        id: "p7023",
        name: {
          tk: "Peýnirli towuk kotleti",
          ru: "Котлет куриный с сыром",
        },
        price: 75,
        image: "1785484862542-303344966-sm.webp",
      },
      {
        id: "p7024",
        name: {
          tk: "Goýun şaşlygy",
          ru: "Баранина",
        },
        price: 65,
        image: "1785484877300-557768837-sm.webp",
      },
      {
        id: "p7026",
        name: {
          tk: "Ýagly bagyr",
          ru: "Печень в жиру",
        },
        price: 70,
        image: "1785484910386-68711542-sm.webp",
      },
      {
        id: "p7027",
        name: {
          tk: "Sygyr şaşlygy",
          ru: "Говядина",
        },
        price: 75,
        image: "1785484922816-470846166-sm.webp",
      },
      {
        id: "p7028",
        name: {
          tk: "Lakomka şaşlyk",
          ru: "Лакомка",
        },
        price: 75,
        image: "1785484971414-985551288-sm.webp",
      },
      {
        id: "p7029",
        name: {
          tk: "Süňkli towuk şaşlygy",
          ru: "Курица с косточкой",
        },
        price: 60,
        image: "1785484994065-840575049-sm.webp",
      },
      {
        id: "p7030",
        name: {
          tk: "Towuk ganady",
          ru: "Куриные крылышки",
        },
        price: 60,
        image: "1785485002035-433461717-sm.webp",
      },
      {
        id: "p7031",
        name: {
          tk: "Towuk tabaka",
          ru: "Куриный табака",
        },
        price: 140,
        image: "1785485023514-880673393-sm.webp",
      },
      {
        id: "p7032",
        name: {
          tk: "Mangalda jüýje",
          ru: "Цыплёнок на мангале",
        },
        price: 75,
        image: "1785485037734-274342555-sm.webp",
      },
      {
        id: "p7033",
        name: {
          tk: "Mangalda bedene",
          ru: "Перепёлка на мангале",
        },
        price: 100,
        image: "1785485049727-72630975-sm.webp",
      },
      {
        id: "p7034",
        name: {
          tk: "Mangal assorti",
          ru: "Ассорти на мангале",
        },
        price: 400,
        image: "1785485067522-735674731-sm.webp",
      },
      {
        id: "p7036",
        name: {
          tk: "Beýti sarma",
          ru: "Бейти сарма",
        },
        price: 80,
        image: "1785485082325-450149868-sm.webp",
      },
      {
        id: "p7038",
        name: {
          tk: "Goýun gapyrga",
          ru: "Гойун гапурга",
        },
        price: 120,
        image: "1785485099028-552668113-sm.webp",
      },
      {
        id: "p7043",
        name: {
          tk: "Towuk döş",
          ru: "Куриная грудка",
        },
        price: 80,
        image: "steak-towuk-cop.webp",
      },
    ],
  },
  {
    id: "mocktails",
    name: {
      tk: "Alkogolsyz kokteýller",
      ru: "Безалкогольные коктейли",
    },
    items: [
      {
        id: "p7046",
        name: {
          tk: "Klassiki limonad",
          ru: "Классический лимонад",
        },
        price: 55,
        image: "1785485121708-717613655-sm.webp",
      },
      {
        id: "p7047",
        name: {
          tk: "Ýer tudanaly limonad",
          ru: "Клубничный лимонад",
        },
        price: 55,
        image: "1785485132180-628099989-sm.webp",
      },
      {
        id: "p7048",
        name: {
          tk: "Sitrus limonady",
          ru: "Цитрусовый лимонад",
        },
        price: 55,
        image: "1785485142531-770897374-sm.webp",
      },
      {
        id: "p7049",
        name: {
          tk: "Gök lagun mohito",
          ru: "Мохито Голубая лагуна",
        },
        price: 55,
        image: "1785485150751-698266196-sm.webp",
      },
      {
        id: "p7050",
        name: {
          tk: "Klassiki mohito",
          ru: "Мохито классический",
        },
        price: 45,
        image: "1785485160214-461769757-sm.webp",
      },
      {
        id: "p7051",
        name: {
          tk: "Kiwili mohito",
          ru: "Мохито киви",
        },
        price: 45,
        image: "1785485171213-517817409-sm.webp",
      },
      {
        id: "p7052",
        name: {
          tk: "Miweli mohito",
          ru: "Мохито ягодный",
        },
        price: 45,
        image: "1785485181074-879314566-sm.webp",
      },
      {
        id: "p7053",
        name: {
          tk: "Energetik mohito",
          ru: "Мохито энергетический",
        },
        price: 50,
        image: "1785485192378-474240889-sm.webp",
      },
    ],
  },
  {
    id: "milkshakes",
    name: {
      tk: "Süýtli kokteýller",
      ru: "Молочные коктейли",
    },
    image: "kokteyl-kokteyl1.webp",
    items: [
      {
        id: "p7054",
        name: {
          tk: "Oreo kokteýli",
          ru: "Молочный коктейль Oreo",
        },
        price: 60,
        image: "1785485201843-117093268-sm.webp",
      },
      {
        id: "p7055",
        name: {
          tk: "Snickers kokteýli",
          ru: "Сникерс",
        },
        price: 65,
        image: "1785485212323-798593652-sm.webp",
      },
      {
        id: "p7056",
        name: {
          tk: "Rafaello kokteýli",
          ru: "Рафаэлло",
        },
        price: 55,
        image: "1785485221704-294612592-sm.webp",
      },
      {
        id: "p7057",
        name: {
          tk: "Şokoladly kokteýl",
          ru: "Шоколадный",
        },
        price: 50,
        image: "1785485230015-604440-sm.webp",
      },
      {
        id: "p7058",
        name: {
          tk: "Karamelli kokteýl",
          ru: "Карамельный",
        },
        price: 50,
        image: "1785485238921-864456397-sm.webp",
      },
      {
        id: "p7059",
        name: {
          tk: "Ýer tudanaly kokteýl",
          ru: "Клубничный",
        },
        price: 50,
        image: "1785485247136-691261491-sm.webp",
      },
      {
        id: "p7060",
        name: {
          tk: "Banan kokteýli",
          ru: "Банановый",
        },
        price: 50,
        image: "1785485254892-875522619-sm.webp",
      },
      {
        id: "p7061",
        name: {
          tk: "Dondurma assorti",
          ru: "Ассорти мороженое",
        },
        price: 50,
        image: "1785485266204-433563501-sm.webp",
      },
    ],
  },
  {
    id: "smoothies",
    name: {
      tk: "Smuzi",
      ru: "Смузи",
    },
    items: [
      {
        id: "p7063",
        name: {
          tk: "Banan we kiwi smuzi",
          ru: "Банан и киви",
        },
        price: 60,
        image: "1785485287274-810979456-sm.webp",
      },
      {
        id: "p7064",
        name: {
          tk: "Ýer tudanaly smuzi",
          ru: "Клубничный",
        },
        price: 60,
        image: "1785485296664-457607990-sm.webp",
      },
      {
        id: "p7065",
        name: {
          tk: "Detoks smuzi",
          ru: "Детокс",
        },
        price: 60,
        image: "1785485309252-774169431-sm.webp",
      },
      {
        id: "p7066",
        name: {
          tk: "Miweli smuzi",
          ru: "Фруктовый",
        },
        price: 60,
        image: "1785485321334-480098174-sm.webp",
      },
    ],
  },
  {
    id: "lemonade",
    name: {
      tk: "Limonad",
      ru: "Лимонад",
    },
    image: "limonad-limonad1.webp",
    items: [
      {
        id: "p7075",
        name: {
          tk: "Miweli limonad",
          ru: "Ягодный",
        },
        price: 50,
        image: "limonad-limonad1.webp",
      },
      {
        id: "p7076",
        name: {
          tk: "Klassiki limonad",
          ru: "Классический",
        },
        price: 50,
        image: "limonad-limonad2.webp",
      },
      {
        id: "p7077",
        name: {
          tk: "Ýer tudanaly limonad",
          ru: "Клубничный",
        },
        price: 50,
        image: "limonad-limonad3.webp",
      },
      {
        id: "p7078",
        name: {
          tk: "Almaly limonad",
          ru: "Яблочный",
        },
        price: 50,
        image: "limonad-limonad4.webp",
      },
    ],
  },
];
