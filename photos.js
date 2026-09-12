/* ═══════════════════════════════════════════════════════════
   ДАННЫЕ САЙТА «Кофе шка» — создано автоматически через admin.html
   Править вручную тоже можно (в Блокноте), но панель удобнее.
   ═══════════════════════════════════════════════════════════ */

/* 1. ТОВАРЫ — блок «Торты и десерты»
   cat: cakes/desserts/kitchen/coffee · t: название · d: описание
   p: цена текстом · u: единица · img: фото · tag: плашка */
const SITE_PRODUCTS = [
{"cat":"cakes","t":"3D-торт","d":"123123","p":"по запросу","u":"","img":"https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80","tag":"3D"},
{"cat":"cakes","t":"Праздничный торт","d":"Скульптурный торт: персонаж, предмет, целая сц","p":"от 2 200","u":"₽/кг","img":"https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80","tag":"фирменный"},
{"cat":"cakes","t":"Торт с пищевой печатью","d":"Корпус из белого шоколада, точное изображение","p":"от 2 400","u":"₽/кг","img":"https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=600&q=80"},
{"cat":"cakes","t":"Свадебный торт","d":"Ярусы, живые цветы, мастика","p":"от 2 800","u":"₽/кг","img":"photos/svadebnyy-tort-2q4p.jpg"},
{"cat":"desserts","t":"Кейк-попсы ассорти","d":"Из меню кондитерской","p":"160","u":"₽/шт","img":"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80","tag":"меню"},
{"cat":"desserts","t":"Капкейки","d":"Крем-чиз, ягоды, шоколад","p":"от 180","u":"₽/шт","img":"https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&q=80"},
{"cat":"desserts","t":"Десерты витрины","d":"Пирожные и тарталетки — свежие каждый день","p":"от 160","u":"₽/шт","img":"https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&q=80"},
{"cat":"kitchen","t":"Блинчики фаршированные","d":"Курица, свинина, говядина или сыр","p":"150","u":"₽/шт","img":"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80","tag":"меню"},
{"cat":"kitchen","t":"Сэндвич с курицей","d":"Сытный перекус из меню","p":"300","u":"₽/шт","img":"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80","tag":"меню"},
{"cat":"kitchen","t":"Домашние пельмени и вареники","d":"Лепим сами — гости берут на дом","p":"по запросу","u":"","img":"https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600&q=80","tag":"домашние"},
{"cat":"coffee","t":"Капучино и латте","d":"Зерно средней обжарки, вилка из меню","p":"140–350","u":"₽","img":"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80","tag":"меню"},
{"cat":"coffee","t":"Бабл-ти","d":"Есть в карточке заведения","p":"от 200","u":"₽","img":"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80"},
{"cat":"coffee","t":"Кофе с собой","d":"Эспрессо, американо и сезонные напитки","p":"от 140","u":"₽","img":"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80"}

];

/* 2. ГАЛЕРЕЯ — блок «Галерея работ»
   src: фото · cap: подпись · cat: author/threed/wedding/desserts/kitchen */
const SITE_GALLERY = [
{"src":"https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80","cap":"Праздничный торт с ягодами","cat":"author"},
{"src":"https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80","cap":"3D-торт — скульптурная форма","cat":"threed"},
{"src":"photos/svadebnyy-mnogoyarusnyy-yb5v.jpg","cap":"Свадебный многоярусный","cat":"wedding"},
{"src":"https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=800&q=80","cap":"Пищевая печать на белом шоколаде","cat":"author"},
{"src":"https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&q=80","cap":"Капкейки с крем-чиз","cat":"desserts"},
{"src":"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80","cap":"Кейк-попсы ассорти","cat":"desserts"},
{"src":"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80","cap":"Блинчики фаршированные","cat":"kitchen"},
{"src":"https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800&q=80","cap":"Витрина десертов дня","cat":"desserts"},
{"src":"https://images.unsplash.com/photo-1519869325930-281384150729?w=800&q=80","cap":"Торт с живыми цветами","cat":"wedding"},
{"src":"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80","cap":"Кофе и десерт в зале","cat":"desserts"},
{"src":"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80","cap":"Ягодный торт на заказ","cat":"author"},
{"src":"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80","cap":"Кофе с собой","cat":"desserts"}

];

/* 3. МЕНЮ ОНЛАЙН-ЗАКАЗА — блок «Онлайн-заказ»
   cat: coffee/desserts/kitchen · t: название · d: описание
   p: ТОЛЬКО ЧИСЛО (по нему считается сумма заказа) · img: фото */
const SITE_MENU = [
{"cat":"coffee","t":"Капучино","d":"Зерно средней обжарки","p":180,"img":"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&q=80"},
{"cat":"coffee","t":"Латте","d":"Классический, 250/350 мл","p":200,"img":"https://images.unsplash.com/photo-1561047029-3000c68339ca?w=300&q=80"},
{"cat":"coffee","t":"Раф","d":"Спросите сезонный рецепт","p":260,"img":"https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=300&q=80"},
{"cat":"coffee","t":"Эспрессо","d":"Классика, 30 мл","p":140,"img":"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&q=80"},
{"cat":"coffee","t":"Американо","d":"150 мл","p":150,"img":"https://images.unsplash.com/photo-1551030173-122aabc4489c?w=300&q=80"},
{"cat":"coffee","t":"Бабл-ти","d":"Молочный или фруктовый","p":220,"img":"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&q=80"},
{"cat":"desserts","t":"Кейк-попс","d":"Ассорти из меню","p":160,"img":"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&q=80"},
{"cat":"desserts","t":"Капкейк","d":"Крем-чиз, ягоды, шоколад","p":180,"img":"https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=300&q=80"},
{"cat":"desserts","t":"Пирожное витрины","d":"Меняется каждый день","p":160,"img":"https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=300&q=80"},
{"cat":"desserts","t":"Тарталетка","d":"Сезонные ягоды и крем","p":190,"img":"photos/tartaletka-qnai.jpg"},
{"cat":"desserts","t":"Эклер","d":"Классические и авторские начинки","p":150,"img":"photos/ekler-qpx2.jpg"},
{"cat":"kitchen","t":"Блинчик фаршированный","d":"Курица, свинина, говядина или сыр","p":150,"img":"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&q=80"},
{"cat":"kitchen","t":"Сэндвич с курицей","d":"Сытный перекус","p":300,"img":"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&q=80"}

];
/* 4. КАЛЬКУЛЯТОР ТОРТА — цены опций расчёта (редактируется в admin.html)
   types: label, price, perKg (true=за кг) · fillings/covers/tiers/decor/delivery: label, price
   tiers: + minWeight · декор: default:true — включён по умолчанию */
const SITE_CALC = {
  types: [
    {"label":"Бенто-торт","price":1800,"perKg":false},
    {"label":"Праздничный торт","price":2200,"perKg":true,"default":true},
    {"label":"Торт-цифра","price":2600,"perKg":true},
    {"label":"Свадебный торт","price":2800,"perKg":true}
  ],
  fillings: [
    {"label":"Крем-чиз и ягоды (базовая)","price":0},
    {"label":"Шоколадный ганаш","price":200},
    {"label":"Фисташка — малина","price":350},
    {"label":"Сникерс, карамель","price":150}
  ],
  covers: [
    {"label":"Крем (стандарт)","price":0},
    {"label":"Глазурь-гляссаж","price":300},
    {"label":"Кондитерская печать","price":600}
  ],
  tiers: [
    {"label":"1 ярус","price":0,"minWeight":1,"default":true},
    {"label":"2 яруса","price":1500,"minWeight":4},
    {"label":"3 яруса","price":3500,"minWeight":8}
  ],
  decor: [
    {"label":"Без декора","price":0,"default":true},
    {"label":"Свежие ягоды","price":500},
    {"label":"Цветы, мастика","price":900},
    {"label":"Топпер","price":300}
  ],
  delivery: [
    {"label":"Самовывоз — Карбышева, 1","price":0},
    {"label":"Железнодорожный","price":500},
    {"label":"Балашиха","price":800}
  ]
};

