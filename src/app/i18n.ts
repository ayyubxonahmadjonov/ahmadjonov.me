export type Lang = 'en' | 'ru' | 'uz';

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'uz', label: 'UZ' },
];

type ProjectText = { category: string; description: string };
type CardText = { title: string; desc: string };
type JobText = { title: string; period: string; place: string; bullets: string[] };
type EduText = { name: string; sub: string; period: string; extra?: string };

export interface Translation {
  nav: { about: string; resume: string; portfolio: string; contact: string };
  role: string;
  available: string;
  atCompany: string;
  info: { email: string; phone: string; birthday: string; location: string };
  birthdayValue: string;
  locationValue: string;
  copy: string;
  about: { title: string; intro: string; bullets: string[] };
  stats: { years: string; apps: string; downloads: string; projects: string };
  doing: { title: string; cards: CardText[] };
  techStackTitle: string;
  skillsTitle: string;
  skillCategories: string[];
  resume: { downloadCv: string; workExp: string; education: string; skillsTitle: string; jobs: JobText[]; edu: EduText[] };
  portfolio: { title: string; subtitle: (n: number) => string; details: string };
  projects: ProjectText[];
  contact: { openToWork: string; title: string; subtitle: string; locationLabel: string };
  modal: { builtWith: string; visit: string; internal: string };
}

export const translations: Record<Lang, Translation> = {
  en: {
    nav: { about: 'About', resume: 'Resume', portfolio: 'Portfolio', contact: 'Contact' },
    role: 'Flutter Developer',
    available: 'Available',
    atCompany: '@ Invan Soft, Tashkent',
    info: { email: 'EMAIL', phone: 'PHONE', birthday: 'BIRTHDAY', location: 'LOCATION' },
    birthdayValue: 'May 8, 2008',
    locationValue: 'Fergana, Uzbekistan',
    copy: 'Copy',
    about: {
      title: 'About Me',
      intro: "I'm a Flutter Developer with nearly 1 year of experience building cross-platform mobile apps for iOS and Android. I currently work full-time at Invan Soft, Tashkent — developing production-grade apps used by real businesses across Uzbekistan.",
      bullets: [
        '🚀 Building clean architecture Flutter apps since 2023.',
        '📱 10+ apps published on Google Play & App Store.',
        '🎯 Focused on performance, clean code, and great UX.',
      ],
    },
    stats: { years: 'Years Exp.', apps: 'Apps Published', downloads: 'Downloads', projects: 'Projects' },
    doing: {
      title: "What I'm Doing",
      cards: [
        { title: 'Mobile Apps', desc: 'Cross-platform Flutter development for iOS & Android. Clean architecture, BLoC, Firebase.' },
        { title: 'Backend Integration', desc: 'RESTful APIs, WebSocket, Firebase Auth/Firestore, real-time data sync.' },
        { title: 'Clean Architecture', desc: 'Feature-first folder structure, repository pattern, dependency injection.' },
        { title: 'App Deployment', desc: 'Google Play & App Store publishing, versioning, signing, release management.' },
      ],
    },
    techStackTitle: 'Tech Stack',
    skillsTitle: 'My Skills',
    skillCategories: ['Mobile Development', 'State Management', 'Backend & Data', 'AI-Assisted Development', 'Design & Tools', 'Publishing', 'Languages'],
    resume: {
      downloadCv: 'Download CV',
      workExp: 'Work Experience',
      education: 'Education',
      skillsTitle: 'Skills',
      jobs: [
        {
          title: 'Flutter Developer',
          period: 'Jun 2025 – Present',
          place: 'Invan Soft · Tashkent, Uzbekistan',
          bullets: [
            'Developed and maintained 5+ production mobile apps',
            'Built POS system: sales, discounts, barcode scanning, receipt printing',
            'Invan Mobile — inventory & business management app',
            'Tiin Loyalty — cashback & loyalty card app (40K+ downloads)',
            'Inventory Turnover — stock rotation analytics',
          ],
        },
        {
          title: 'Flutter Developer Intern',
          period: 'Jun 2024 – May 2025',
          place: 'Invan Soft · Tashkent, Uzbekistan',
          bullets: [
            'Learned BLoC and Clean Architecture patterns',
            'Contributed to real production projects under senior guidance',
            'Completed Flutter & Dart Training Program',
          ],
        },
      ],
      edu: [
        { name: 'Invan Soft', sub: 'Flutter & Dart Training Program', period: '2023 – 2024', extra: 'Mobile Development Practical Course' },
        { name: 'Vocational School No.1, Fergana', sub: 'IT Specialization', period: '2024 – 2026', extra: '2nd year student' },
        { name: 'Everest Language Learning Center', sub: 'English Language Program', period: 'IELTS Band 6.0' },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: (n) => `${n} apps — published on Google Play & App Store`,
      details: 'View details',
    },
    projects: [
      { category: 'Retail / POS', description: 'A store-automation system (POS) for retail shops & supermarkets — it runs the whole checkout counter: scanning products, taking cash & Payme/Click/Uzum payments, printing fiscal receipts, and managing discounts, returns and sales reports. A Windows desktop app (Flutter) with real-time sync, live on 100+ terminals.' },
      { category: 'Loyalty / E-commerce', description: 'A cashback, loyalty and e-commerce app for supermarkets — customers collect cashback, keep their loyalty cards in one place, and shop online through the in-app store. Users can place online orders for delivery; the e-commerce section is integrated via a WebView. 40,000+ downloads across Google Play and the App Store.' },
      { category: 'Business / Inventory', description: 'Business management & inventory-control app — real-time sales tracking, stock management and reports for shop owners on the go.' },
      { category: 'Lifestyle / Islamic', description: 'Islamic prayer companion — accurate prayer times, Qibla direction compass and Azan alerts based on the user’s location.' },
      { category: 'Marketplace', description: 'Construction-materials marketplace — browse products, prices and suppliers of building materials in one app.' },
      { category: 'Utility / QR', description: 'Scan a car’s QR sticker to reach the owner without sharing a phone number — a privacy-friendly contact system for Uzbekistan’s roads.' },
      { category: 'Education', description: 'A smart Uzbek–English dictionary with fast offline search and a clean, distraction-free interface.' },
      { category: 'Game', description: 'A modern twist on Tic Tac Toe with an infinite board, local multiplayer and an AI opponent.' },
      { category: 'Education', description: 'Learn English vocabulary efficiently with a spaced-repetition system that shows words right before you forget them.' },
    ],
    contact: {
      openToWork: 'Open to work',
      title: "Let's Work Together",
      subtitle: "Have a project in mind? I'd love to hear about it. Reach out via any channel below.",
      locationLabel: 'LOCATION',
    },
    modal: { builtWith: 'Built with', visit: 'Visit website', internal: 'Internal Product' },
  },

  ru: {
    nav: { about: 'Обо мне', resume: 'Резюме', portfolio: 'Портфолио', contact: 'Контакты' },
    role: 'Flutter-разработчик',
    available: 'Доступен',
    atCompany: '@ Invan Soft, Ташкент',
    info: { email: 'ПОЧТА', phone: 'ТЕЛЕФОН', birthday: 'ДЕНЬ РОЖДЕНИЯ', location: 'ЛОКАЦИЯ' },
    birthdayValue: '8 мая 2008',
    locationValue: 'Фергана, Узбекистан',
    copy: 'Копировать',
    about: {
      title: 'Обо мне',
      intro: 'Я Flutter-разработчик с почти годовым опытом создания кроссплатформенных мобильных приложений для iOS и Android. Сейчас работаю полный день в Invan Soft, Ташкент — разрабатываю production-приложения, которыми пользуется реальный бизнес по всему Узбекистану.',
      bullets: [
        '🚀 Создаю Flutter-приложения на чистой архитектуре с 2023 года.',
        '📱 10+ приложений опубликовано в Google Play и App Store.',
        '🎯 Фокус на производительности, чистом коде и удобстве.',
      ],
    },
    stats: { years: 'Лет опыта', apps: 'Приложений', downloads: 'Загрузок', projects: 'Проектов' },
    doing: {
      title: 'Чем я занимаюсь',
      cards: [
        { title: 'Мобильные приложения', desc: 'Кроссплатформенная разработка на Flutter для iOS и Android. Чистая архитектура, BLoC, Firebase.' },
        { title: 'Интеграция бэкенда', desc: 'REST API, WebSocket, Firebase Auth/Firestore, синхронизация данных в реальном времени.' },
        { title: 'Чистая архитектура', desc: 'Feature-first структура, паттерн репозитория, внедрение зависимостей.' },
        { title: 'Публикация приложений', desc: 'Публикация в Google Play и App Store, версии, подпись, управление релизами.' },
      ],
    },
    techStackTitle: 'Технологии',
    skillsTitle: 'Навыки',
    skillCategories: ['Мобильная разработка', 'Управление состоянием', 'Бэкенд и данные', 'Разработка с ИИ', 'Дизайн и инструменты', 'Публикация', 'Языки'],
    resume: {
      downloadCv: 'Скачать резюме',
      workExp: 'Опыт работы',
      education: 'Образование',
      skillsTitle: 'Навыки',
      jobs: [
        {
          title: 'Flutter-разработчик',
          period: 'Июнь 2025 – наст. время',
          place: 'Invan Soft · Ташкент, Узбекистан',
          bullets: [
            'Разработал и поддерживал 5+ production-приложений',
            'Создал POS-систему: продажи, скидки, сканирование штрихкодов, печать чеков',
            'Invan Mobile — приложение для управления складом и бизнесом',
            'Tiin Loyalty — приложение кэшбэка и карт лояльности (40K+ загрузок)',
            'Inventory Turnover — аналитика оборота товаров',
          ],
        },
        {
          title: 'Стажёр Flutter-разработчика',
          period: 'Июнь 2024 – Май 2025',
          place: 'Invan Soft · Ташкент, Узбекистан',
          bullets: [
            'Изучил паттерны BLoC и чистой архитектуры',
            'Участвовал в реальных production-проектах под руководством senior-разработчиков',
            'Прошёл учебную программу Flutter & Dart',
          ],
        },
      ],
      edu: [
        { name: 'Invan Soft', sub: 'Учебная программа Flutter & Dart', period: '2023 – 2024', extra: 'Практический курс мобильной разработки' },
        { name: 'Профессиональный колледж №1, Фергана', sub: 'IT-специализация', period: '2024 – 2026', extra: 'Студент 2 курса' },
        { name: 'Учебный центр Everest', sub: 'Программа английского языка', period: 'IELTS 6.0' },
      ],
    },
    portfolio: {
      title: 'Портфолио',
      subtitle: (n) => `${n} приложений — опубликованы в Google Play и App Store`,
      details: 'Подробнее',
    },
    projects: [
      { category: 'Ритейл / POS', description: 'Система автоматизации магазинов (POS) для розницы и супермаркетов — управляет всей кассовой зоной: сканирование товаров, приём наличных и оплат Payme/Click/Uzum, печать фискальных чеков, скидки, возвраты и отчёты о продажах. Десктоп-приложение для Windows (Flutter) с синхронизацией в реальном времени, работает на 100+ терминалах.' },
      { category: 'Лояльность / E-commerce', description: 'Приложение кэшбэка, лояльности и электронной коммерции для супермаркетов — клиенты копят кэшбэк, хранят карты лояльности в одном месте и делают покупки онлайн во встроенном магазине. Можно оформлять онлайн-заказы с доставкой; раздел e-commerce интегрирован через WebView. 40 000+ загрузок в Google Play и App Store.' },
      { category: 'Бизнес / Склад', description: 'Приложение для управления бизнесом и складом — отслеживание продаж в реальном времени, управление остатками и отчёты для владельцев магазинов.' },
      { category: 'Образ жизни / Ислам', description: 'Исламский помощник — точное время намаза, компас направления Киблы и уведомления азана по геолокации.' },
      { category: 'Маркетплейс', description: 'Маркетплейс стройматериалов — товары, цены и поставщики строительных материалов в одном приложении.' },
      { category: 'Утилита / QR', description: 'Отсканируйте QR-наклейку на авто, чтобы связаться с владельцем без обмена номером телефона — приватная система контактов для дорог Узбекистана.' },
      { category: 'Образование', description: 'Умный узбекско-английский словарь с быстрым офлайн-поиском и чистым интерфейсом без отвлекающих элементов.' },
      { category: 'Игра', description: 'Современная версия крестиков-ноликов с бесконечным полем, локальным мультиплеером и ИИ-соперником.' },
      { category: 'Образование', description: 'Учите английские слова эффективно с системой интервального повторения, которая показывает слова прямо перед тем, как вы их забудете.' },
    ],
    contact: {
      openToWork: 'Открыт к работе',
      title: 'Давайте работать вместе',
      subtitle: 'Есть проект на примете? Буду рад услышать о нём. Свяжитесь любым удобным способом ниже.',
      locationLabel: 'ЛОКАЦИЯ',
    },
    modal: { builtWith: 'Технологии', visit: 'Открыть сайт', internal: 'Внутренний продукт' },
  },

  uz: {
    nav: { about: 'Men haqimda', resume: 'Rezyume', portfolio: 'Portfolio', contact: 'Aloqa' },
    role: 'Flutter Dasturchi',
    available: 'Bandmasman',
    atCompany: '@ Invan Soft, Toshkent',
    info: { email: 'EMAIL', phone: 'TELEFON', birthday: "TUG'ILGAN KUN", location: 'MANZIL' },
    birthdayValue: '8-may, 2008',
    locationValue: "Farg'ona, O'zbekiston",
    copy: 'Nusxalash',
    about: {
      title: 'Men haqimda',
      intro: "Men Flutter dasturchisiman, iOS va Android uchun kross-platforma mobil ilovalar yaratishda deyarli 1 yillik tajribaga egaman. Hozir Invan Soft, Toshkent kompaniyasida to'liq stavkada ishlayman — O'zbekiston bo'ylab real bizneslar foydalanadigan professional ilovalarni ishlab chiqaman.",
      bullets: [
        "🚀 2023-yildan beri clean architecture asosida Flutter ilovalar yarataman.",
        "📱 Google Play va App Store'da 10+ ilova chop etilgan.",
        "🎯 Tezkorlik, toza kod va qulay UX'ga e'tibor qarataman.",
      ],
    },
    stats: { years: 'Yil tajriba', apps: 'Ilovalar', downloads: 'Yuklab olishlar', projects: 'Loyihalar' },
    doing: {
      title: 'Nima bilan shug‘ullanaman',
      cards: [
        { title: 'Mobil ilovalar', desc: "iOS va Android uchun kross-platforma Flutter dasturlash. Clean architecture, BLoC, Firebase." },
        { title: 'Backend integratsiyasi', desc: "REST API, WebSocket, Firebase Auth/Firestore, real vaqtdagi ma'lumot sinxronizatsiyasi." },
        { title: 'Clean Architecture', desc: "Feature-first papka tuzilmasi, repository pattern, dependency injection." },
        { title: 'Ilova joylashtirish', desc: "Google Play va App Store'ga chiqarish, versiyalash, imzolash, relizlarni boshqarish." },
      ],
    },
    techStackTitle: 'Texnologiyalar',
    skillsTitle: 'Ko‘nikmalar',
    skillCategories: ['Mobil dasturlash', 'State Management', "Backend va ma'lumotlar", 'AI bilan ishlash', 'Dizayn va vositalar', 'Chop etish', 'Tillar'],
    resume: {
      downloadCv: 'CV yuklab olish',
      workExp: 'Ish tajribasi',
      education: "Ta'lim",
      skillsTitle: 'Ko‘nikmalar',
      jobs: [
        {
          title: 'Flutter Dasturchi',
          period: '2025 Iyun – Hozirgacha',
          place: "Invan Soft · Toshkent, O'zbekiston",
          bullets: [
            "5+ ta professional mobil ilova ishlab chiqdim va qo'llab-quvvatladim",
            "POS tizimini yaratdim: savdo, chegirmalar, barcode o'qish, chek chop etish",
            "Invan Mobile — ombor va biznes boshqaruv ilovasi",
            "Tiin Loyalty — cashback va sodiqlik kartasi ilovasi (40K+ yuklab olish)",
            "Inventory Turnover — tovar aylanmasi tahlili",
          ],
        },
        {
          title: 'Flutter Dasturchi Stajyor',
          period: '2024 Iyun – 2025 May',
          place: "Invan Soft · Toshkent, O'zbekiston",
          bullets: [
            "BLoC va Clean Architecture patternlarini o'rgandim",
            "Katta dasturchilar rahbarligida real loyihalarga hissa qo'shdim",
            "Flutter & Dart o'quv dasturini tugatdim",
          ],
        },
      ],
      edu: [
        { name: 'Invan Soft', sub: "Flutter & Dart o'quv dasturi", period: '2023 – 2024', extra: 'Mobil dasturlash amaliy kursi' },
        { name: "1-sonli kasb-hunar maktabi, Farg'ona", sub: 'IT yo‘nalishi', period: '2024 – 2026', extra: '2-kurs talabasi' },
        { name: "Everest til o'rganish markazi", sub: 'Ingliz tili dasturi', period: 'IELTS 6.0' },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: (n) => `${n} ta ilova — Google Play va App Store'da chop etilgan`,
      details: 'Batafsil',
    },
    projects: [
      { category: 'Savdo / POS', description: "Do'kon va supermarketlar uchun avtomatlashtirish (POS) tizimi — butun kassa jarayonini boshqaradi: mahsulot skanerlash, naqd va Payme/Click/Uzum to'lovlari, fiskal chek chop etish, chegirmalar, qaytarishlar va savdo hisobotlari. Windows desktop ilovasi (Flutter), real vaqtda sinxronizatsiya bilan, 100+ terminalda ishlaydi." },
      { category: 'Loyalty / E-commerce', description: "Supermarketlar uchun cashback, sodiqlik va e-commerce ilovasi — mijozlar cashback yig'adi, sodiqlik kartalarini bir joyda saqlaydi va ilova ichidagi do'kondan onlayn xarid qiladi. Foydalanuvchilar yetkazib berish uchun onlayn zakaz berishlari mumkin; e-commerce qismi WebView orqali ulangan. Google Play va App Store'da 40 000+ yuklab olish." },
      { category: 'Biznes / Ombor', description: "Biznes va ombor boshqaruv ilovasi — real vaqtdagi savdo kuzatuvi, qoldiqlarni boshqarish va do'kon egalari uchun hisobotlar." },
      { category: 'Turmush / Islomiy', description: "Islomiy hamroh — aniq namoz vaqtlari, Qibla yo'nalishi kompasi va joylashuvga qarab azon eslatmalari." },
      { category: 'Marketplace', description: "Qurilish materiallari bozori — bitta ilovada qurilish materiallari mahsulotlari, narxlari va yetkazib beruvchilari." },
      { category: 'Utility / QR', description: "Mashinaning QR stikerini skanerlab, telefon raqamini ulashmasdan egasi bilan bog'laning — O'zbekiston yo'llari uchun maxfiy aloqa tizimi." },
      { category: "Ta'lim", description: "Tez oflayn qidiruvli va toza, chalg'itmaydigan interfeysli aqlli o'zbekcha-inglizcha lug'at." },
      { category: 'O‘yin', description: "Cheksiz maydon, lokal multiplayer va AI raqib bilan Tic Tac Toe o'yinining zamonaviy ko'rinishi." },
      { category: "Ta'lim", description: "Ingliz tili so'zlarini samarali o'rganing — so'zlarni unutishingizdan oldin ko'rsatadigan interval takrorlash tizimi bilan." },
    ],
    contact: {
      openToWork: 'Ishga tayyor',
      title: 'Keling, birga ishlaymiz',
      subtitle: "Loyihangiz bormi? Uni eshitishdan mamnun bo'laman. Quyidagi istalgan kanal orqali bog'laning.",
      locationLabel: 'MANZIL',
    },
    modal: { builtWith: 'Texnologiyalar', visit: 'Saytga o‘tish', internal: 'Ichki mahsulot' },
  },
};
