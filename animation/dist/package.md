<!-- story-pipeline-task {"v": 1, "story": 1, "part": 1, "workflow": "voice-first", "duration": 161.643174, "speech": "ee54c6df2b155bfcabde1e2f52432d0a4b3e3e6c65cf404e1275460a340ed5fe"} -->
# STORY-PIPELINE-ANIMATION v1

## PLAN
```json
{
 "concept": "Тихая власть в один клик. Медальон превращает деревню Берёзовку в стратегию: каждое нажатие героя на прозрачной панели наутро оборачивается тем, что люди «сами» делают нужное. Визуальная нить — тёплые сумерки деревни против холодного стекла интерфейса: чем больше герой управляет, тем меньше в кадре живых решений людей и тем ближе к красному становится свет панели. Цифры не пишутся — они растут полосами, пипсами и счётчиками ровно в момент, когда их произносит голос. Финал — красное скрытое меню, где у всех есть «внушаемость», а у героя — лимит влияния 83 из 100.",
 "styleBible": "ЛИСТ ПЕРСОНАЖЕЙ (масштаб s=1 — средний план; контур везде #1F2236, 3 px на экране при любом зуме; внутренние линии — цветом тени; кожа у всех #C98972 / тень #885C70 / свет #F2B895). 1) ГЕРОЙ («вы»), ~19 лет: рост 300 px (6 голов, голова r=24 px), худощавый, плечи 62 px, таз 44 px, бедро=голень 72 px, плечо 54 / предплечье 50 px, стопа 26 px. Лицо: вытянутый овал, прямой нос, тонкие брови #302B49, тёмные глаза #1F2236, РОДИНКА #5E3F55 под ЛЕВЫМ глазом героя (в фас — справа на экране; при повороте вправо уходит на дальнюю щёку). Волосы короткие неровные, зубчатая чёлка, #49384F / тень #302B49 / блик #79566A. Рубаха-косоворотка свободная до середины бедра #B9A6A2 / #79677F / #E7C6AD, разрез ворота на правой стороне груди, красная тесьма ворота #7A4E4A; кушак #7A4E4A с узлом и двумя концами на ЛЕВОМ бедре; штаны #3B3352; сапоги до середины голени #2B2338. Медальон: круг Ø16 px на s=1, серебро #9A9AAB / #615C79 / #E1C8B8, выбиты мельница с четырьмя лопастями и три колоса под ней, шнурок #5A4A44. Сцены 1–2: медальон в ПРАВОЙ руке; с конца сцены 2 и далее спрятан под рубахой — видны только шнурок на шее и бугорок на груди; когда открывает интерфейс, достаёт его ПРАВОЙ рукой, выбирает пункты указательным пальцем ПРАВОЙ руки. В сцене 1 в ЛЕВОЙ руке пустое деревянное ведро #6B5A60 с обручами #8C8FA3. 2) СОСЕДКА Марья, ~35 лет: рост 260 px (5,5 головы, r=23), ниже героя и шире в плечах (72 px), круглое лицо с румянцем #D98A80, коса #5A3F4A через ЛЕВОЕ плечо до пояса с лентой #8E4F5E, платок #8E4F5E / #5E3346 / #C07884 в белый горошек, узел под подбородком; рубаха #D9C2B0, сарафан до щиколоток #5E4C72, передник #CDB39C, башмаки #3A2E3E. 3) СТАРОСТА Фрол, ~60 лет: рост 330 px (r=25), высокий и сутулый (наклон торса 0,16 рад вперёд), окладистая седая борода до середины груди #A9A2B4 / #6F6884, густые брови, высокая войлочная шапка #4A3A55 с отворотом; кафтан до колен #5B4A6E, кушак #8A6A4A, штаны #3B3352, сапоги #2B2338; пожимает плечами обеими руками ладонями вверх. 4) ПЛОТНИК Ерёма, ~40 лет: рост 300 px, коренастый (плечи 70 px), лысеющий — волосы только на висках и затылке #7A4E3E, короткая рыжеватая борода #7A4E3E, рубаха #8C7F92 с закатанными рукавами, кожаный фартук #7A5A48, тряпка #CDB39C в ПРАВОЙ руке. 5) КУЗНЕЦ Гордей: рост 310 px, самый широкий (плечи 84 px), чёрные короткие волосы и борода #2E2838, рубаха #6D6280 с закатанными рукавами, кожаный фартук #4E3A40, несёт железные скобы #8C8FA3 в обеих руках у груди. 6) МАЛЬЧИШКИ (двое): рост 180 px (r=20), волосы #79566A, рубахи #B0A0A8, босые, подол рубахи подобран обеими руками — в нём камни #7D7890. 7) СТАРУШКА из дома напротив: рост 230 px, сильно сгорблена (0,42 рад), белый платок #D8CFE0, кофта #9A8AA0, сарафан #4A3D5C, подушка #C48A8A с вышивкой #E7C6AD в обеих руках перед грудью. 8) СОСЕД с досками: рост 300 px, рубаха #79677F, волосы и борода #5A4048, доски #C8A07A на ПРАВОМ плече. 9) ЖЕНЩИНЫ у колодца: рост 270 px, платки #7A5A8A и #A0606A, рубахи #C8B4AC, сарафаны #6A4E6E. 10) ДРОВОСЕКИ (15 мужчин): рост 300 px, рубахи #8C7F92 / #79677F / #9C8478, у каждого топор #8C8FA3 на рукояти #A0704A в ПРАВОЙ руке на плече; лица пустые, взгляд вперёд, рты закрыты. ПАЛИТРА: небо #241F4A → #6C4377 → #F09A6C, даль #4B3463 без контура и в дымке, земля #2C2140, ключевой свет #FFB36B, контровой/подсветка героя #FFCF9A; ночь — синий multiply #241F4A, свеча/лампа — тёплый screen #FFB36B; берёзы — стволы #D9CCD6 с чёрточками #302B49, листва #4F5470 с бликом #C9926F; избы — брёвна #6B4A4E, кровля #3E3048, наличники #B9A6A2, окна #FFB36B. МАТЕРИАЛЫ: дерево, грязь, ткань — редкие векторные мазки; старый колодец — тёмный сруб #5E4648 с трещинами и кривой крышей, новый — светлые брёвна #A07A60, ровная крыша #8A6A58, железные полосы #8C8FA3; скамейка — #A07A60, резные подлокотники, высокая спинка, подушка #C48A8A. ИНТЕРФЕЙС: стеклянные панели rgba(#241F4A, 0,55) со скруглением 14 px, рамка и свечение #E1C8B8; полосы ресурсов: дерево #A0704A, железо #8C8FA3, камень #7D7890, зерно #E0B060, еда #C88A50, счастье — золото #FFCF9A по шкале из 10 делений; тревога и скрытое меню — красный #E0505A, рамка #D8404E. Букв и цифр нет: числа показываются длиной полос, делениями и пипсами в момент произнесения. ПОСТОЯННЫЕ КООРДИНАТЫ: горизонт деревни y≈520, земля переднего плана y≈880 на среднем плане; изба героя слева, колодец на площади в центре, частокол справа, дальний лес на горизонте справа; в избе стол у окна, свеча на правом краю стола. Зона y=730..930 — без лиц и важных предметов.",
 "scenes": [
  {
   "title": "Медальон в колее",
   "start": 0,
   "end": 14.2,
   "alternatives": [
    "Макро: серебро в колее отражает рассвет, камера поднимается к идущему герою",
    "Общий план дороги сверху, герой — маленькая фигура, блик зовёт его",
    "Субъективная камера героя: ноги, ведро, лужи, затем находка"
   ],
   "direction": "Выбрано А. Вход — затемнение из чёрного. Макро колеи на рассвете: тусклый круг серебра в грязи, капли и рябь в луже, блик ключевого света #FFB36B (c1). Склейка на общий план деревенской дороги: берёзы, избы с дымом, герой идёт вправо с пустым ведром в левой руке, колени сгибаются, стопы чередуются; камера сопровождает с параллаксом. Средний план: блик в колее, герой останавливается, глаза, затем голова, затем тело. Присед, правой рукой поднимает медальон. Вставка: большой палец стирает грязь — проступают мельница и три колоса (c3). Крупный план лица: белая вспышка, перед глазами вспыхивают прозрачные строки-полосы. Субтитровая зона свободна от лиц.",
   "beats": [
    {
     "time": 0,
     "action": "затемнение раскрывается: макро медальона в колее, рябь и блик"
    },
    {
     "time": 4.2,
     "action": "общий план: герой идёт за водой с ведром, дым из труб, листья"
    },
    {
     "time": 6.9,
     "action": "блик — герой замечает, останавливается, приседает и поднимает медальон правой рукой"
    },
    {
     "time": 10,
     "action": "вставка: большой палец стирает грязь, проступают мельница и колосья"
    },
    {
     "time": 12.4,
     "action": "крупный план: вспышка, перед глазами загораются прозрачные строки"
    }
   ],
   "continuity": "Вход: чёрный кадр. Выход: крупный план героя, медальон в правой руке у груди, перед лицом светятся полупрозрачные строки, ведро стоит у левой ноги."
  },
  {
   "title": "Строки, лужа и тайна",
   "start": 14.2,
   "end": 28.13,
   "alternatives": [
    "Панель парит перед героем, данные собираются из пипсов; медальон падает в лужу, панель рассыпается",
    "Только вставки рук и лужи, панель видна через отражение",
    "Общий план с панелью над деревней как над картой"
   ],
   "direction": "Выбрано А. Средний план через плечо: стеклянная панель над дорогой — эмблема деревни, 86 человечков-пипсов набираются при «86 человек», медальон в рамке загорается. Испуг: рука дрогнула, вставка — медальон падает и шлёпает в лужу, брызги и круги, панель гаснет осколками. Присед, поднимает — панель снова собирается. Общий план: герой оглядывается влево и вправо, дорога пустая, только дым из труб и листья. Крупный план: прячет медальон под рубаху, прижимает ладонь к груди, решительный прищур. Выход — затемнение через чёрное (наступает вечер).",
   "beats": [
    {
     "time": 0,
     "action": "панель собирается: эмблема деревни, 86 пипсов населения, рамка медальона загорается"
    },
    {
     "time": 4.9,
     "action": "рука дрогнула, медальон падает в лужу, панель гаснет"
    },
    {
     "time": 6.6,
     "action": "присед, поднимает медальон, панель появляется снова"
    },
    {
     "time": 8.4,
     "action": "общий план: оглядывается — вокруг никого"
    },
    {
     "time": 10.7,
     "action": "прячет медальон под рубаху, ладонь на груди, затемнение"
    }
   ],
   "continuity": "Вход: крупный план из сцены 1, медальон в правой руке. Выход: медальон под рубахой (виден шнурок), правая ладонь на груди, ведро у ног; затемнение в чёрное."
  },
  {
   "title": "Главное окно в избе",
   "start": 28.13,
   "end": 41.13,
   "alternatives": [
    "Изба при свече, панель разворачивается над столом как свиток",
    "Экран-панель занимает весь кадр, герой отражается в стекле",
    "Камера из-за плеча через окно с ночной улицей"
   ],
   "direction": "Выбрано А. Вход из чёрного: вечер, снаружи изба героя с тёплым окном, герой задвигает засов изнутри (средний план, свеча). Достаёт медальон правой рукой, касается — над столом раскрывается главное окно (стекло, свечение #E1C8B8). Средний план из-за плеча: строки таблицы появляются по очереди точно на словах: дерево (полоса до 140), железо (23), камень (60), зерно (410), еда (380), счастье — золотая шкала 41 из 100. Крупный план лица в синем свете панели и тёплом свете свечи. Рядом начинает мигать список проблем — три красные строки с иконками. Пыль в луче свечи, дрожь пламени, мотылёк. Камера медленно наезжает 1.0→1.1.",
   "beats": [
    {
     "time": 0,
     "action": "вечерняя изба снаружи, засов задвигается"
    },
    {
     "time": 2.4,
     "action": "медальон в правой руке, касание — раскрывается окно"
    },
    {
     "time": 5.4,
     "action": "строки ресурсов растут по очереди: дерево, железо, камень, зерно, еда"
    },
    {
     "time": 10.3,
     "action": "золотая шкала счастья заполняется до 41 из 100"
    },
    {
     "time": 11.4,
     "action": "сбоку мигает список проблем"
    }
   ],
   "continuity": "Вход: чёрный кадр, вечер. Выход: герой сидит за столом слева от панели, правая рука с медальоном у края стола, свеча справа; панель с таблицей и мигающим списком проблем."
  },
  {
   "title": "Старый колодец и цена улучшения",
   "start": 41.13,
   "end": 53.74,
   "alternatives": [
    "Нырок в строку проблемы — иллюстрация-воспоминание о колодце, затем возврат и выбор",
    "Схема колодца чертежом на стекле панели",
    "Ряд крупных планов спин женщин и рук на вороте"
   ],
   "direction": "Выбрано А. Строка «колодец» вспыхивает самыми большими звёздами очков; нырок внутрь — тёплая иллюстрация-воспоминание: старый кривой сруб, две женщины вдвоём тянут ворот, ведро тяжело ползёт, одна держится за поясницу (крупно спина и ладонь). Обратный нырок в избу: указательный палец правой руки героя жмёт кнопку улучшения — круги нажатия. Медальон «требует»: от полос дерева, железа и камня отрываются куски (30, 8, 20) и летят в иконку колодца; полосы тут же укорачиваются. Выход — затемнение через чёрное (наступает утро).",
   "beats": [
    {
     "time": 0,
     "action": "строка колодца вспыхивает самыми большими звёздами"
    },
    {
     "time": 1.2,
     "action": "нырок: две женщины тянут ворот старого колодца вдвоём"
    },
    {
     "time": 3.6,
     "action": "крупно: женщина держится за больную спину"
    },
    {
     "time": 6.2,
     "action": "палец героя нажимает «улучшить колодец»"
    },
    {
     "time": 8.6,
     "action": "куски дерева, железа, камня отлетают — полосы уменьшаются; затемнение"
    }
   ],
   "continuity": "Вход: панель из сцены 3. Выход: полосы дерева, железа, камня короче; герой за столом, медальон в правой руке; затемнение в чёрное."
  },
  {
   "title": "Утро: деревня сама идёт к колодцу",
   "start": 53.74,
   "end": 67.56,
   "alternatives": [
    "Герой открывает дверь — общий план площади, люди стекаются со всех сторон",
    "Вид сверху на площадь, потоки людей как стрелки",
    "Через щель забора: ноги, доски, камни"
   ],
   "direction": "Выбрано А. Вход из чёрного: утро. Средний план: дверь избы распахивается, герой делает шаг и замирает (глаза, голова, тело). Общий план площади: люди сами сходятся к старому колодцу с досками, камнями, инструментами, параллакс берёз и изб. Средние планы с проводкой: плотник идёт и вытирает руки тряпкой; кузнец несёт скобы; двое мальчишек тащат камни в подолах. Герой идёт к старосте (ходьба с чередованием опор), спрашивает — староста удивлённо пожимает плечами, ладони вверх. Пыль в лучах, дым из труб, листья.",
   "beats": [
    {
     "time": 0,
     "action": "дверь открывается, герой выходит и замирает"
    },
    {
     "time": 2.4,
     "action": "общий план: люди сходятся к колодцу с досками и камнями"
    },
    {
     "time": 5,
     "action": "плотник вытирает руки, кузнец несёт скобы, мальчишки с камнями"
    },
    {
     "time": 9.5,
     "action": "герой подходит к старосте и спрашивает"
    },
    {
     "time": 11.8,
     "action": "староста удивлённо пожимает плечами"
    }
   ],
   "continuity": "Вход: чёрный кадр, утро. Выход: двухплановый средний — герой слева смотрит вправо, староста справа после пожатия плечами, ладони ещё раскрыты; колодец с людьми за ними."
  },
  {
   "title": "«Так надо» и смех у воды",
   "start": 67.56,
   "end": 79.73,
   "alternatives": [
    "Староста кивает на колодец, крупно настороженное лицо героя, затем закат и смеющиеся женщины",
    "Монтаж ремонта по шагам за один кадр",
    "Отражение в воде колодца"
   ],
   "direction": "Выбрано А. Средний план: староста машет рукой в сторону колодца, говорит уверенно. Крупный план героя — подозрение: брови сведены, взгляд на старосту. Переход через короткое затемнение в закат: новый светлый сруб, ровная крыша, железные полосы. Средний план: женщина одной рукой легко крутит ворот, ведро идёт быстро; две женщины смеются, запрокинув головы, брызги и рябь. Вставка панели: золотая шкала счастья растёт с 41 до 47 на словах «до 47».",
   "beats": [
    {
     "time": 0,
     "action": "староста показывает на колодец: «все ведь знают»"
    },
    {
     "time": 2.3,
     "action": "крупно: подозрительный взгляд героя"
    },
    {
     "time": 4.1,
     "action": "затемнение — закат, колодец отремонтирован"
    },
    {
     "time": 5.2,
     "action": "женщины легко поднимают ведро и смеются"
    },
    {
     "time": 9.8,
     "action": "вставка: шкала счастья 41 → 47"
    }
   ],
   "continuity": "Вход: двухплановый со старостой из сцены 5. Выход: вставка панели со шкалой счастья 47, тёплый закатный свет."
  },
  {
   "title": "Проверка мелочью: скамейка",
   "start": 79.73,
   "end": 91.9,
   "alternatives": [
    "Герой у своей избы задумывается, выбирает иконку скамейки; затем таймлапс прихода соседа и гвоздей",
    "Схема скамейки на стекле",
    "Наблюдение из окна избы"
   ],
   "direction": "Выбрано А. Средний план у избы героя днём: герой думает (рука у подбородка, локоть вниз), смотрит на пустое место у стены. Вставка панели: иконка скамейки, цена — от полос дерева и железа отщипываются крошечные кусочки 4 и 1. Таймлапс: тень от избы поворачивается, солнце сдвигается — сосед идёт с отшлифованными досками на правом плече и укладывает их; ещё сдвиг солнца — крупно молоток вбивает новые гвозди, искры щепы. Герой наблюдает, сидя на чурбаке. Переход по свету без затемнения.",
   "beats": [
    {
     "time": 0,
     "action": "герой думает, рука у подбородка, взгляд на место у стены"
    },
    {
     "time": 2.7,
     "action": "вставка: выбрана скамейка"
    },
    {
     "time": 5.1,
     "action": "цена: дерево 4, железо 1 — крошечные кусочки"
    },
    {
     "time": 7.8,
     "action": "таймлапс: сосед приносит доски"
    },
    {
     "time": 10.6,
     "action": "крупно: молоток вбивает новые гвозди"
    }
   ],
   "continuity": "Вход: тёплая вставка панели из сцены 6. Выход: недостроенная скамейка у стены избы, сосед ушёл, герой сидит на чурбаке слева, медальон под рубахой; вечереет."
  },
  {
   "title": "Подушка, закат и пустая улица",
   "start": 91.9,
   "end": 105.4,
   "alternatives": [
    "Старушка с подушкой пересекает улицу, затем широкий закатный план на скамейке",
    "Только крупные планы предметов на скамейке",
    "Вид из дома напротив"
   ],
   "direction": "Выбрано А. Средний план: сгорбленная старушка идёт через улицу (ходьба с переносом веса), прижимает подушку к груди, на лице растерянность — сама не понимает зачем; кладёт подушку на скамейку. Общий закатный план: скамейка широкая, высокая спинка, резные подлокотники; герой садится и смотрит на закат, солнце и облака. Камера облетает дугой. Затем люди расходятся по домам, не оглядываясь, двери закрываются; герой один, улыбка уходит. Выход — затемнение через чёрное (ночь).",
   "beats": [
    {
     "time": 0,
     "action": "старушка несёт подушку через улицу, растеряна"
    },
    {
     "time": 2.6,
     "action": "кладёт подушку на скамейку"
    },
    {
     "time": 3.3,
     "action": "общий план: широкая резная скамейка, герой садится, закат"
    },
    {
     "time": 10.6,
     "action": "люди молча расходятся по домам"
    },
    {
     "time": 12.4,
     "action": "герой один, тревожный взгляд; затемнение"
    }
   ],
   "continuity": "Вход: недостроенная скамейка у избы. Выход: герой сидит на новой скамейке с подушкой, сумерки, улица пустая; затемнение в чёрное."
  },
  {
   "title": "Красный индикатор дерева",
   "start": 105.4,
   "end": 118.4,
   "alternatives": [
    "Ночь в избе, строка дерева мигает красным, график падения запасов",
    "Иконки построек сыплются и съедают бревна",
    "Только крупный план полосы"
   ],
   "direction": "Выбрано А. Из чёрного — ночь, изба, свеча. Крупный план: строка «дерево» мигает красным, полоса короткая (61), рядом лесенка падения — после каждой иконки постройки полоса укорачивается. Герой хмурится. Нырок в схему: вид сверху на деревню — вокруг пни, лес только у горизонта. Возврат: палец выбирает пункт добычи, иконку бревна, и выставляет пятнадцать работников — пятнадцать человечков-пипсов загораются по одному. Свеча колеблется, пыль в луче.",
   "beats": [
    {
     "time": 0,
     "action": "ночь, панель: строка дерева мигает красным"
    },
    {
     "time": 2.5,
     "action": "лесенка падения: постройки съедают запас"
    },
    {
     "time": 7,
     "action": "схема: вокруг деревни пни, лес далеко"
    },
    {
     "time": 9.2,
     "action": "палец выбирает добычу и дерево"
    },
    {
     "time": 11,
     "action": "загораются пятнадцать работников"
    }
   ],
   "continuity": "Вход: чёрный кадр, ночь. Выход: панель с назначенными 15 работниками, герой за столом при свече, медальон в правой руке."
  },
  {
   "title": "Пятнадцать молчаливых",
   "start": 118.4,
   "end": 132.3,
   "alternatives": [
    "Строй мужчин у частокола, марш к лесу, возвращение с брёвнами, рост полосы",
    "Тени людей на частоколе",
    "Вид из-за частокола глазами героя"
   ],
   "direction": "Выбрано А. Утро у частокола: пятнадцать мужчин с топорами на плечах молча стоят в шеренге, пустые лица; герой выглядывает из-за угла избы. Шеренга поворачивается и уходит к дальнему лесу — ноги чередуются, топоры качаются, пыль. Короткое затемнение — вечер: они возвращаются, волоча брёвна на плечах, один на вопрос женщины только разводит руками. Вставка панели: полоса дерева вырастает до 118 золотом, красный индикатор гаснет. Ночь: герой листает интерфейс, строки уезжают вверх.",
   "beats": [
    {
     "time": 0,
     "action": "шеренга с топорами у частокола, пустые лица"
    },
    {
     "time": 2.9,
     "action": "уходят к дальнему лесу"
    },
    {
     "time": 5.4,
     "action": "вечер: возвращаются с брёвнами, не могут объяснить"
    },
    {
     "time": 8.5,
     "action": "полоса дерева растёт до 118"
    },
    {
     "time": 12.4,
     "action": "ночь: герой листает интерфейс"
    }
   ],
   "continuity": "Вход: панель из сцены 9. Выход: ночь, герой за столом листает панель правым пальцем, строки едут вверх."
  },
  {
   "title": "Серая строка и скрытое меню",
   "start": 132.3,
   "end": 146.72,
   "alternatives": [
    "Внизу панели проступает тонкая серая строка, касание — красная рамка раскрывается",
    "Красный свет заливает избу",
    "Панель трескается и показывает изнанку"
   ],
   "direction": "Выбрано А. Крупный план низа панели: тонкая серая строка проступает, которой раньше не было; герой щурится, наклоняется. Палец касается — красная вспышка, раскрывается новое меню с красной рамкой #D8404E и иконкой закрытого глаза в заголовке. Свет в избе становится красноватым. Список имён жителей прокручивается: портреты-иконки и неразборчивые подписи, напротив каждого пустая шкала внушаемости, которую герой никогда не выбирал. Крупный план лица в красном свете, свеча гаснет до уголька.",
   "beats": [
    {
     "time": 0,
     "action": "внизу проступает тонкая серая строка"
    },
    {
     "time": 3.3,
     "action": "палец касается строки"
    },
    {
     "time": 4.4,
     "action": "красная вспышка — меню скрытых параметров"
    },
    {
     "time": 8.5,
     "action": "прокручивается список жителей со шкалами"
    },
    {
     "time": 12,
     "action": "крупно: лицо героя в красном свете"
    }
   ],
   "continuity": "Вход: ночь, листание панели. Выход: красное меню со списком жителей, шкалы пока пустые, герой наклонён к панели."
  },
  {
   "title": "Внушаемость: 0. Лимит влияния: 83",
   "start": 146.72,
   "end": 161.643174,
   "alternatives": [
    "Строки заполняются по очереди, строка героя мигает, кнопка лимита горит; финальный взгляд в камеру",
    "Деревня за окном гаснет по мере чтения",
    "Силуэт предыдущего управляющего проступает в стекле"
   ],
   "direction": "Выбрано А с элементом C. Средний план списка: шкалы заполняются на словах — староста 12 (короткая), плотник 9, соседка 87 (длинная, красная). Строка героя с иконкой медальона-короны мигает. Шкала героя пустая — 0. «Предыдущий управляющий: исчез» — в стекле проступает силуэт человека и рассыпается в пыль; иконка предупреждения. Внизу загорается кнопка: красная полоса лимита влияния наполняется до 83 из 100 с делениями. Крупный план героя: страх, рука на медальоне под рубахой; финальная пауза — он поднимает глаза в камеру, мигание кнопки, затемнение в последние 0,3 с.",
   "beats": [
    {
     "time": 0,
     "action": "шкалы: староста 12, плотник 9"
    },
    {
     "time": 3.7,
     "action": "соседка — длинная красная шкала 87"
    },
    {
     "time": 4.3,
     "action": "мигает строка героя «управляющий»"
    },
    {
     "time": 7.7,
     "action": "внушаемость героя 0; силуэт предыдущего управляющего рассыпается"
    },
    {
     "time": 12.6,
     "action": "кнопка лимита влияния 83 из 100; герой смотрит в камеру"
    }
   ],
   "continuity": "Вход: красное меню из сцены 11. Выход: крупный план героя в красном свете, взгляд в камеру, кнопка лимита 83 из 100 горит; затемнение в чёрное."
  }
 ]
}
```

## SCENE 1
```javascript
function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function eout(u){u=cl(u,0,1);return 1-Math.pow(1-u,3)}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function sky(c0,c1,c2,y1,y2){const gr=g.createLinearGradient(0,y1,0,y2);gr.addColorStop(0,c0);gr.addColorStop(.55,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.fillRect(-2000,-2000,4540,4960)}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function sun(x,y,r){glow(x,y,r*6,PAL.key,.35);glow(x,y,r*2.2,'#FFE0B8',.5);ell(x,y,r,r);g.fillStyle='#FFE6C4';g.fill()}
function clouds(y,n,seed,col,a,sp){for(let i=0;i<n;i++){const w=90+hash(seed+i)*140,x=((hash(seed+i*3)*900+t*sp*(.6+hash(i)*.6))%900)-180,yy=y+hash(seed+i*7)*70;g.fillStyle=rgba(col,a);ell(x,yy,w*.5,12+hash(i+seed)*8);g.fill();ell(x+w*.2,yy-8,w*.3,10);g.fill()}}
function hills(y,amp,col,seed,x0,x1){g.beginPath();g.moveTo(x0,y+400);for(let x=x0;x<=x1;x+=20){g.lineTo(x,y-amp*(.5+.5*nz(x*.006+seed))-amp*.3*nz(x*.02+seed*3))}g.lineTo(x1,y+400);g.closePath();g.fillStyle=col;g.fill()}
function forestLine(y,col,seed,x0,x1,h){g.fillStyle=col;g.beginPath();g.moveTo(x0,y+60);for(let x=x0;x<=x1;x+=9){const hh=h*(.5+hash(seed+x*.13)*.7);g.lineTo(x,y);g.lineTo(x+4.5,y-hh);g.lineTo(x+9,y)}g.lineTo(x1,y+60);g.closePath();g.fill()}
function birch(x,gy,h,seed,col){
  const sw=Math.sin(t*.9+seed)*4,lean=(hash(seed)-.5)*.08;
  const tx=x+lean*h,tw=7+h*.02;
  g.beginPath();g.moveTo(x-tw,gy);g.quadraticCurveTo(x-tw*.8+lean*h*.5,gy-h*.5,tx-tw*.4+sw*.3,gy-h);g.lineTo(tx+tw*.4+sw*.3,gy-h);g.quadraticCurveTo(x+tw*.8+lean*h*.5,gy-h*.5,x+tw,gy);g.closePath();fo(tc('#D9CCD6'));
  g.fillStyle=tc('#302B49');for(let i=0;i<9;i++){const yy=gy-h*hash(seed+i*2.1)*.9,xx=lerp(x,tx,(gy-yy)/h);g.fillRect(xx-tw*.6+hash(i+seed)*3,yy,tw*(.5+hash(seed+i)*.6),2.2)}
  const fc=col||['#4F5470','#6E6A86','#C9926F'];
  // weeping crown: soft volume, then drooping branches covered with small leaf clusters
  for(let i=0;i<4;i++){ell(tx+sw*.7+(hash(seed+i*4.1)-.5)*h*.3,gy-h*(.7+hash(seed+i*1.9)*.25),h*.17,h*.13);g.fillStyle=rgba(tc(fc[0]),.45);g.fill()}
  for(let b=0;b<10;b++){
    const by=gy-h*(.48+hash(seed+b*1.3)*.5),k0=(gy-by)/h,bx=lerp(x,tx,k0)+sw*k0;
    const dir=(b%2?1:-1)*(.45+hash(seed+b)*.55),len=h*(.16+hash(seed+b*2.2)*.16),sy_=Math.sin(t*1.3+b+seed)*3;
    const cx_=bx+dir*len*.6,cy_=by-len*.22,ex=bx+dir*len+sy_,ey=by+len*.6;
    g.strokeStyle=tc('#3A3048');g.lineWidth=1.5;g.beginPath();g.moveTo(bx,by);g.quadraticCurveTo(cx_,cy_,ex,ey);g.stroke();
    for(let k=0;k<7;k++){const u=k/6,px=lerp(lerp(bx,cx_,u),lerp(cx_,ex,u),u),py=lerp(lerp(by,cy_,u),lerp(cy_,ey,u),u)+4,r=h*.042*(1.15-u*.45);
      ell(px,py,r*1.35,r);g.fillStyle=tc(k%3?fc[0]:fc[1]);g.fill();ell(px+r*.35,py-r*.35,r*.6,r*.38);g.fillStyle=rgba(tc(fc[2]),.5);g.fill()}
  }
}
function izba(x,gy,w,h,seed,lit,smokeOn){
  const wall=tc('#6B4A4E'),log=tc('#4A3442'),roof=tc('#3E3048'),rl=tc('#5E4A62');
  const rh=h*.75;
  // wall
  g.beginPath();g.rect(x-w/2,gy-h,w,h);fo(wall);
  g.strokeStyle=log;g.lineWidth=2;for(let y=gy-h+10;y<gy;y+=12){g.beginPath();g.moveTo(x-w/2,y);g.lineTo(x+w/2,y);g.stroke()}
  for(let y=gy-h+4;y<gy;y+=12){for(const sd of[-1,1]){ell(x+sd*(w/2+3),y,5,5.5);fo(tc('#8A6A64'),.6)}}
  brush(x-w/2,gy-h,w,h,rgba(tc('#8A6A64'),1),seed,10,.25);
  // roof
  g.beginPath();g.moveTo(x-w/2-16,gy-h+4);g.lineTo(x,gy-h-rh);g.lineTo(x+w/2+16,gy-h+4);g.closePath();fo(roof);
  g.strokeStyle=rl;g.lineWidth=2;for(let i=1;i<7;i++){const u=i/7;g.beginPath();g.moveTo(lerp(x,x-w/2-16,u),lerp(gy-h-rh,gy-h+4,u));g.lineTo(lerp(x,x+w/2+16,u),lerp(gy-h-rh,gy-h+4,u));g.stroke()}
  // gable with carved board
  g.beginPath();g.moveTo(x-w*.3,gy-h);g.lineTo(x,gy-h-rh*.75);g.lineTo(x+w*.3,gy-h);g.closePath();fo(tc('#5A3E48'),.8);
  g.beginPath();g.moveTo(x,gy-h-rh-2);g.lineTo(x,gy-h-rh+16);ol(1.2);
  // okno
  const wx=x,wy=gy-h*.55,ww=w*.22,wh=h*.32;
  g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);g.fillStyle=lit>0?mixc('#2A2440','#FFB36B',lit):'#2A2440';g.fill();ol();
  if(lit>0)glow(wx,wy,ww*1.6,'#FFB36B',.35*lit);
  g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2.5;g.stroke();
  g.beginPath();g.moveTo(wx-ww*.75,wy-wh*.6);g.lineTo(wx,wy-wh*.95);g.lineTo(wx+ww*.75,wy-wh*.6);g.lineTo(wx+ww*.7,wy-wh*.5);g.lineTo(wx-ww*.7,wy-wh*.5);g.closePath();fo(tc('#B9A6A2'),.8);
  g.beginPath();g.rect(wx-ww*.7,wy+wh*.5,ww*1.4,5);fo(tc('#B9A6A2'),.8);
  // chimney + smoke
  const chx=x+w*.22,chy=gy-h-rh*.42;g.beginPath();g.rect(chx-7,chy-24,14,28);fo(tc('#4A3A48'));
  if(smokeOn)smoke(chx,chy-26,seed,.5);
}
function smoke(x,y,seed,a){for(let i=0;i<9;i++){const u=((t*.18+i/9+hash(seed+i)*.1)%1),r=6+u*26;g.fillStyle=rgba(tc('#B9A6C2'),a*(1-u)*(u*4>1?1:u*4));ell(x+u*30+Math.sin(t*.8+i)*6*u,y-u*120,r,r*.8);g.fill()}}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function leaves(n,seed,x0,y0,w,h,col){for(let i=0;i<n;i++){const ph=hash(seed+i),u=((t*(.08+ph*.06)+ph)%1),x=x0+hash(seed+i*2)*w+Math.sin(t*1.5+i)*25+u*60,y=y0+u*h;g.save();g.translate(x,y);g.rotate(t*2+i);ell(0,0,4,2);g.fillStyle=rgba(col,.85*Math.sin(u*Math.PI));g.fill();g.restore()}}
function ripples(x,y,w,t0,col,a){for(let i=0;i<3;i++){const u=((t-t0)*.5+i/3)%1;if(t<t0)continue;g.strokeStyle=rgba(col,a*(1-u));g.lineWidth=1.5;ell(x,y,w*(.2+u),w*(.2+u)*.32);g.stroke()}}
function fenceW(x0,x1,gy,h,seed){g.strokeStyle=tc('#5A4450');for(let x=x0;x<=x1;x+=22){g.beginPath();g.moveTo(x,gy);g.lineTo(x+(hash(seed+x)-.5)*4,gy-h);g.lineWidth=5;g.stroke()}g.lineWidth=3;for(let k=0;k<4;k++){g.strokeStyle=tc(k%2?'#6B5260':'#4E3A4A');g.beginPath();g.moveTo(x0,gy-h*.2-k*h*.18);for(let x=x0;x<=x1;x+=11)g.lineTo(x,gy-h*.2-k*h*.18+((x/11+k)%2?3:-3));g.stroke()}}
function bucket(x,y,s,ang,water){g.save();g.translate(x,y);g.rotate(ang||0);g.scale(s,s);const LW0=LW;LW/=s;g.beginPath();g.moveTo(-14,-16);g.quadraticCurveTo(0,-34,14,-16);ol(1);g.strokeStyle=tc('#8C8FA3');g.lineWidth=2;g.stroke();g.beginPath();g.moveTo(-14,-16);g.lineTo(14,-16);g.lineTo(11,12);g.lineTo(-11,12);g.closePath();fo(tc('#6B5A60'));g.strokeStyle=tc('#8C8FA3');g.lineWidth=2.5;g.beginPath();g.moveTo(-13,-6);g.lineTo(13,-6);g.moveTo(-12,5);g.lineTo(12,5);g.stroke();if(water){ell(0,-16,13,3.5);g.fillStyle=rgba('#9AB0D0',.9);g.fill()}LW=LW0;g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function spark(x,y,r,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r*2.5,'#FFE6C4',.6*a);g.fillStyle=rgba('#FFF4EA',a);g.beginPath();g.moveTo(x,y-r);g.quadraticCurveTo(x+r*.12,y-r*.12,x+r,y);g.quadraticCurveTo(x+r*.12,y+r*.12,x,y+r);g.quadraticCurveTo(x-r*.12,y+r*.12,x-r,y);g.quadraticCurveTo(x-r*.12,y-r*.12,x,y-r);g.fill();g.restore()}
function grassRow(y,seed,n,x0,x1,h,col){g.lineCap='round';for(let i=0;i<n;i++){const x=x0+hash(seed+i)*(x1-x0),hh=h*(.5+hash(seed+i*3)*.7),sw=Math.sin(t*1.6+x*.05)*hh*.15;g.strokeStyle=col;g.lineWidth=2.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+sw*.3,y-hh*.6,x+sw+(hash(i)-.5)*10,y-hh);g.stroke()}}
function birds(){g.strokeStyle=rgba('#241F4A',.8);g.lineWidth=2;for(let i=0;i<5;i++){const x=((t*28+i*40+hash(i)*30)%900)-200,y=330+i*9+Math.sin(t*2+i)*4,f=Math.sin(t*9+i*2)*4;g.beginPath();g.moveTo(x-7,y-f);g.quadraticCurveTo(x-3,y-2,x,y);g.quadraticCurveTo(x+3,y-2,x+7,y-f);g.stroke()}}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function villageGround(T){
  const gr=g.createLinearGradient(0,600,0,1100);gr.addColorStop(0,mixc(PAL.ground,PAL.far,.5));gr.addColorStop(.25,PAL.ground);gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-1200,618,3600,1400);
  g.fillStyle=tc('#4A3848');g.beginPath();g.moveTo(-1200,676);for(let x=-1200;x<=2400;x+=40)g.lineTo(x,676+nz(x*.02)*4);g.lineTo(2400,770);for(let x=2400;x>=-1200;x-=40)g.lineTo(x,770+nz(x*.03+5)*5);g.closePath();g.fill();
  brush(-200,680,1200,90,'#6A5468',21,60,.35);
  for(const ry of[704,738]){g.strokeStyle=rgba('#1F2236',.55);g.lineWidth=4;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke();g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=1.5;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+3+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke()}
  for(const pd of[[150,740,60],[420,706,48],[700,738,70],[-150,706,50]]){ell(pd[0],pd[1],pd[2],7);const pg=g.createLinearGradient(pd[0]-pd[2],0,pd[0]+pd[2],0);pg.addColorStop(0,T.sky[1]);pg.addColorStop(.6,T.sky[2]);pg.addColorStop(1,T.moon?'#4B3463':'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);ripples(pd[0]+10,pd[1],pd[2]*.5,0,'#FFE6C4',.4)}
  grassRow(676,1,60,-600,1400,22,tc('#4F5470'));
}
const TOD={
  dawn:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[470,520],tint:'#6C4377',ta:.12,lit:.5},
  day:{sky:['#4B3463','#9A6A8E','#F2B895'],sun:[410,300],tint:'#F09A6C',ta:.04,lit:0},
  sunset:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[330,590],tint:'#F09A6C',ta:.14,lit:.8},
  night:{sky:['#120F2A','#241F4A','#4B3463'],sun:null,moon:[400,210],tint:'#241F4A',ta:.42,lit:1}
};
function villageWorld(o){
  const T=TOD[op(o,'tod','dawn')];TINT=T.tint;TA=T.ta;
  const bF=op(o,'bF',0),bM=op(o,'bM',0),bFg=op(o,'bFg',2.5);
  layer(0,()=>sky(T.sky[0],T.sky[1],T.sky[2],-150,620));
  layer(.06,()=>{if(T.sun)sun(T.sun[0],T.sun[1],20);if(T.moon){stars(60,5,-300,-200,1200,700);glow(T.moon[0],T.moon[1],110,'#E1C8B8',.22);ell(T.moon[0],T.moon[1],16,16);g.fillStyle='#E7DCE6';g.fill()}clouds(380,7,3,T.sky[2],.22,6);clouds(260,5,8,T.sky[1],.3,4)},bF*.5);
  layer(.2,()=>{if(!T.moon)birds();hills(575,42,mixc(PAL.far,T.sky[2],.32),1,-600,1300);forestLine(592,mixc(PAL.far,T.sky[1],.15),4,-600,1300,24);if(o.far)o.far()},bF);
  layer(.5,()=>{g.fillStyle=mixc(PAL.ground,PAL.far,.55);g.fillRect(-900,600,2600,300);
    izba(-120,622,150,90,1,T.lit,1);birch(30,628,170,2);izba(160,620,130,80,2,T.lit*.8,1);birch(300,628,200,5);izba(470,622,160,92,3,T.lit,1);birch(600,630,180,8);izba(760,620,140,86,4,T.lit*.7,1);fenceW(-300,900,640,26,3);if(o.mid)o.mid()},bM);
  layer(1,()=>{villageGround(T);if(o.main)o.main()},op(o,'bMain',0));
  if(op(o,'fg',1))layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---- scene
// SCENE 1 — «Медальон в колее» (0 – 14.2)
const ST=[0,4.2,6.9,10.0,12.4];
const S=shot(t,ST);
TINT='#6C4377';TA=.12;
const MX=306,MY=722,GY=716,HS=.62;
// hero path: walks right, decelerates and stops near the medallion
function heroD(tt){if(tt<6.9)return 70*Math.max(0,tt-4.2);const u=Math.min(tt-6.9,.6);return 189+70*(u-u*u/1.2)}
const hx0=60;
const crouch=ease((t-7.75)/.85)*(1-ease((t-9.35)/.6)*.55);
const grab=t>9.05;
function heroPose(){
  const d=heroD(t),x=hx0+d;
  const o={x,y:GY,s:HS,yaw:.95,t,ls:1,rimC:PAL.rim,rimA:.7};
  if(t<7.5)o.walk={d,st:110*HS};
  else{const st=110,c=(210/HS)/st;const a=gait(c*st,0,0,1,1,st,9,0),b=gait(c*st,0,0,1,1,st,9,.5);o.fr=[a.fx,a.fy];o.fl=[b.fx,b.fy]}
  const cr=t>=7.5?crouch:0;
  o.hipY=lerp(-142.8,-84,cr);o.lean=lerp(.04,.42,cr);o.hipX=lerp(0,-6,cr);
  // look: eyes first, then head, then body
  const notice=sm(7.0,7.15,t),headN=sm(7.08,7.3,t);
  o.em={look:[.5*notice,.8*notice],brow:.5*notice*(1-sm(8.5,9,t)),open:.15*notice};
  o.tilt=.28*headN-.1*cr;o.turn=0;
  // left hand: bucket while walking, then sets it down on the knee
  if(t<7.9){o.itemL=(gg,ex,ey)=>bucket(ex,ey+30,1.7,Math.sin(t*5.5)*.08*(t<7?1:sm(7.9,7.2,t)),0)}
  else o.hl=[lerp(10,30,cr),-62];
  // right hand reaches medallion, lifts it toward the chest
  const reach=sm(8.3,9.05,t),lift=sm(9.35,9.95,t);
  if(t>=8.3){const tgt=[(MX-x)/HS,(MY-GY)/HS-4];o.hr=[lerp(lerp(18,tgt[0],reach),40,lift),lerp(lerp(-40,tgt[1],reach),-205,lift)];
    if(grab)o.itemR=(gg,ex,ey,an)=>medallion(ex+4,ey-2,9,an,lerp(.85,.7,lift),0)}
  o.headDY=0;return o;
}
function world(bF,bM,bFg,heroOn){
  villageWorld({tod:'dawn',bF,bM,bFg,main:()=>{
    // medallion lying in the rut until grabbed; dawn glint calls the hero
    if(!grab){g.save();g.translate(MX,MY);g.scale(1,.5);medallion(0,0,9,0,.8,0);g.restore();
      const gl=Math.max(0,Math.sin((t-6.95)*9))*sm(6.9,7.0,t)*(1-sm(7.6,7.9,t));if(gl>0)spark(MX-3,MY-3,14*gl,gl)}
    if(heroOn){const o=heroPose();if(t>=7.9)bucket(o.x-26*HS,GY-1,1.05,0,0);person(HERO,o)}
    grassRow(772,2,50,-600,1400,26,tc('#3E3A58'))}});
}
// ---------------- shot 0: macro of the rut
if(S.i===0){
  const u=t/4.2;setCam(270,500,1+u*.14,-.03+u*.03);
  layer(0,()=>{const gr=g.createLinearGradient(0,0,0,960);gr.addColorStop(0,'#6C4377');gr.addColorStop(.22,'#F09A6C');gr.addColorStop(.3,mixc(PAL.ground,PAL.far,.4));gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(0,0,540,960)});
  // far misty road edge and silhouettes of houses, defocused
  layer(.3,()=>{hills(250,30,mixc(PAL.far,PAL.sky2,.4),6,-200,800);izba(120,262,120,60,9,.8,0);izba(420,258,110,58,8,.6,0);sun(330,215,14)},7);
  layer(.75,()=>{ // mud plane with perspective ruts
    g.fillStyle=tc('#3A2C44');g.beginPath();g.moveTo(-300,300);g.lineTo(840,300);g.lineTo(1100,1300);g.lineTo(-560,1300);g.closePath();g.fill();
    brush(-100,300,740,600,'#5A4458',4,80,.4);
    for(const k of[-1,1]){g.strokeStyle=rgba('#1F2236',.7);g.lineWidth=18;g.beginPath();g.moveTo(270+k*60,300);g.quadraticCurveTo(270+k*120,600,270+k*330,1100);g.stroke();g.strokeStyle=rgba('#F09A6C',.25);g.lineWidth=3;g.beginPath();g.moveTo(270+k*60+10,302);g.quadraticCurveTo(270+k*120+12,600,270+k*330+14,1100);g.stroke()}
  },2.5);
  layer(1,()=>{
    // puddle in the left rut reflecting the sky
    ell(170,640,150,48,-.15);const pg=g.createLinearGradient(40,600,300,680);pg.addColorStop(0,'#6C4377');pg.addColorStop(.6,'#F09A6C');pg.addColorStop(1,'#FFCF9A');g.fillStyle=pg;g.fill();ol(.8);
    g.save();ell(170,640,150,48,-.15);g.clip();clouds(620,4,11,'#FFE6C4',.25,10);g.restore();
    const drop=(t%1.4)/1.4;ripples(150,640,70,0,'#FFE6C4',.7);if(drop<.3){ell(150,520+drop/.3*120,2.5,4);g.fillStyle=rgba('#FFE6C4',.8);g.fill()}
    // medallion half in mud, lying flat
    g.save();g.translate(330,590);g.rotate(-.2);g.scale(1,.5);medallion(0,0,74,0,.62,.15+.25*Math.max(0,Math.sin(t*2.4-1))**4);g.restore();
    g.fillStyle=tc('#3A2C44');g.beginPath();g.moveTo(262,612);g.quadraticCurveTo(300,600,340,628);g.quadraticCurveTo(380,640,400,618);g.lineTo(410,660);g.lineTo(255,660);g.closePath();g.fill();
    brush(250,600,170,40,'#5A4458',8,14,.6);
    const gl=Math.max(0,Math.sin(t*2.4-1))**6;spark(300,578,36*gl+4,.3+gl*.7);
    // a boot steps into frame near the find
    const st=ease((t-3.35)/.45);if(t>3.2){const by=lerp(-120,560,st),bx=lerp(60,120,st);g.save();g.translate(bx,by);g.rotate(-.15+st*.15);segs([[ -8,-420,0,-150,74,tc(HERO.pants)],[0,-150,6,-60,66,tc(HERO.boots)]]);g.strokeStyle=rgba("#FFCF9A",.25);g.lineWidth=6;g.beginPath();g.moveTo(22,-140);g.lineTo(26,-70);g.stroke();g.beginPath();g.moveTo(-36,-70);g.quadraticCurveTo(-46,10,-30,18);g.lineTo(78,18);g.quadraticCurveTo(92,-10,34,-60);g.closePath();fo(tc(HERO.boots));g.restore();
      if(t>3.8){ripples(140,600,120,3.8,'#FFE6C4',.6);for(let i=0;i<8;i++){const u=cl((t-3.8)/.5,0,1),a=i/8*Math.PI+Math.PI;ell(120+Math.cos(a)*90*u,600+Math.sin(a)*60*u+u*u*80,5,4);g.fillStyle=rgba('#4A3848',1-u);g.fill()}}}
  });
  layer(1.6,()=>{grassRow(960,5,24,-100,700,260,'#241F36')},6);
  g.save();g.globalCompositeOperation='screen';beam(560,140,250,620,30,140,'#FFB36B',.22);g.restore();
  motes(26,3,0,200,540,500,'#FFE6C4',.5,1.8);
}
// ---------------- shot 1: wide village road, hero walks right
if(S.i===1){
  const x=hx0+heroD(t),u=S.u;
  setCam(x+60+u*20,560-u*10,1.0+u*.05,.01-u*.02);
  world(0,0,2.5,1);
  leaves(8,4,0,200,540,600,'#C9926F');
}
// ---------------- shot 2: medium — stops, notices, crouches and picks it up
if(S.i===2){
  const x=hx0+heroD(t),cr=crouch;
  setCam(lerp(x+40,x+30,cr),lerp(600,640,cr)-sm(9.35,10,t)*30,1.75+S.u*.08,-.015);
  CAM.sy=kick(t,9.05,2.5,.25);
  world(2,1.5,3,1);
  leaves(5,8,0,100,540,700,'#C9926F');
}
// ---------------- shot 3: insert — thumb wipes the mud off
if(S.i===3){
  const lt=S.lt;setCam(300,560,2.6+lt*.06,.02);
  world(8,6,8,0);
  layer(0,()=>{wash('#1F2236',.25);
    const cx=270,cy=470,R=96;
    // palm and curled fingers under the medallion
    ell(cx+30,cy+120,150,110,-.3);fo(tc(SKIN[0]));ell(cx-60,cy+140,60,40,-.4);g.fillStyle=rgba(SKIN[1],.35);g.fill();
    for(let i=0;i<3;i++){segs([[cx-118+i*12,cy-40+i*58,cx-92+i*10,cy+10+i*58,40,tc(SKIN[0])]])}
    const sw=[[.35,.85],[.95,1.45],[1.55,1.95]];let dirt=.88;for(const w of sw)dirt-=.29*sm(w[0],w[1],lt);
    const glow_=sm(1.95,2.3,lt)*.5;
    medallion(cx,cy,R,-.05,Math.max(0,dirt),glow_);
    // clean streak left by each swipe
    g.save();ell(cx,cy,R*.95,R*.95);g.clip();for(let k=0;k<3;k++){const p=sm(sw[k][0],sw[k][1],lt);if(p<=0)continue;g.strokeStyle=rgba('#E1C8B8',.25*(1-sm(1.9,2.3,lt)));g.lineWidth=36;g.beginPath();g.arc(cx+150,cy+160,200-k*34,-2.5,-2.5+p*1.1);g.stroke()}g.restore();
    // thumb sweeping arcs (pivot bottom-right)
    let a=-.25;for(const w of sw){const q=(lt-w[0])/(w[1]-w[0]);if(q>=0&&q<=1)a=lerp(-.25,-1.25,ease(q));else if(lt>w[1])a=lerp(a,-.25,sm(w[1],w[1]+.1,lt))}
    g.save();g.translate(cx+190,cy+230);g.rotate(a-.6);segs([[0,0,0,-170,72,tc(SKIN[0])],[0,-170,0,-250,58,tc(SKIN[0])]]);
    g.beginPath();g.roundRect(-20,-275,40,46,16);g.fillStyle=tc('#E7C6AD');g.fill();ol(.7);g.strokeStyle=rgba(SKIN[1],.6);g.lineWidth=3;g.beginPath();g.moveTo(-26,-170);g.quadraticCurveTo(0,-160,26,-172);g.stroke();g.restore();
    if(lt>1.95)spark(cx-40,cy-50,40*sm(1.95,2.15,lt)*(1-sm(2.2,2.4,lt))+6,.8);
  });
  motes(14,8,0,200,540,560,'#FFE6C4',.45,2);
}
// ---------------- shot 4: close-up — flash, transparent lines appear before the eyes
if(S.i===4){
  const lt=S.lt,fl=12.85;
  const x=hx0+heroD(t);
  setCam(x-2,553+lerp(5,0,ease(lt/1.8)),6.6+lt*.22,0);
  CAM.sx=kick(t,fl,4,.3);
  villageWorld({tod:"dawn",bF:9,bM:7,bFg:0,fg:0,main:()=>{
    const w=sm(fl-.2,fl+.1,t);
    const o={x,y:GY,s:HS,yaw:lerp(.75,.35,sm(12.5,12.9,t)),t,ls:1,rimC:PAL.rim,rimA:.8+w*.2,
      fr:[22,0],fl:[-28,0],tilt:lerp(.18,-.04,sm(12.6,12.85,t)),turn:0,
      em:{look:[lerp(.4,.1,w),lerp(.7,-.2,w)],brow:lerp(.2,1,w),open:lerp(.1,.55,w),eyeOpen:lerp(1,1.3,w),blink:t>fl&&t<fl+.12?1:0},
      hr:[10,-198],itemR:(gg,ex,ey,an)=>medallion(ex+4,ey-2,9,an,0,.4+w*.6)};
    person(HERO,o);
  }});
  // glass lines before the eyes
  const ap=sm(fl,fl+.25,t);
  for(let i=0;i<5;i++){const tt=t-fl-.1-i*.12;if(tt<0)continue;const q=eout(tt/.35),y=150+i*50+Math.sin(t*1.3+i)*3,w=(340-i*30)*q,xx=270-w/2+(i%2?14:-10);
    g.save();g.globalAlpha=.85*ap;g.shadowColor=rgba('#E1C8B8',.9);g.shadowBlur=18;g.beginPath();g.roundRect(xx,y,w,24,12);g.fillStyle=rgba('#241F4A',.35);g.fill();g.strokeStyle=rgba('#E1C8B8',.9);g.lineWidth=1.5;g.stroke();g.shadowBlur=0;
    for(let k=0;k<6;k++){const dx=xx+18+k*(w-36)/6,dw=((w-36)/6)*(.4+hash(i*7+k)*.5);if(dx+dw>xx+w-14)break;g.fillStyle=rgba('#FFE6C4',.6+.3*Math.sin(t*6+k+i));g.fillRect(dx,y+10,dw,4)}g.restore()}
  wash('#E1C8B8',.12*ap,'screen');
  const f=Math.max(0,1-Math.abs(t-fl)/.18);wash('#FFFFFF',f*.95);
}
// ---------------- finishing
g.save();g.globalCompositeOperation='multiply';wash('#6C4377',.12);g.restore();
vignette(.55);
grain(.05);
wash('#000000',cutDip(t,[0,4.2,6.9,10.0]));
wash('#000000',1-sm(0,.9,t));
}
```

## SCENE 2
```javascript
function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function eout(u){u=cl(u,0,1);return 1-Math.pow(1-u,3)}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function blob(pts){const n=pts.length;g.beginPath();let m=[(pts[n-1][0]+pts[0][0])/2,(pts[n-1][1]+pts[0][1])/2];g.moveTo(m[0],m[1]);for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];g.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}g.closePath()}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function sky(c0,c1,c2,y1,y2){const gr=g.createLinearGradient(0,y1,0,y2);gr.addColorStop(0,c0);gr.addColorStop(.55,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.fillRect(-2000,-2000,4540,4960)}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function sun(x,y,r){glow(x,y,r*6,PAL.key,.35);glow(x,y,r*2.2,'#FFE0B8',.5);ell(x,y,r,r);g.fillStyle='#FFE6C4';g.fill()}
function clouds(y,n,seed,col,a,sp){for(let i=0;i<n;i++){const w=90+hash(seed+i)*140,x=((hash(seed+i*3)*900+t*sp*(.6+hash(i)*.6))%900)-180,yy=y+hash(seed+i*7)*70;g.fillStyle=rgba(col,a);ell(x,yy,w*.5,12+hash(i+seed)*8);g.fill();ell(x+w*.2,yy-8,w*.3,10);g.fill()}}
function hills(y,amp,col,seed,x0,x1){g.beginPath();g.moveTo(x0,y+400);for(let x=x0;x<=x1;x+=20){g.lineTo(x,y-amp*(.5+.5*nz(x*.006+seed))-amp*.3*nz(x*.02+seed*3))}g.lineTo(x1,y+400);g.closePath();g.fillStyle=col;g.fill()}
function forestLine(y,col,seed,x0,x1,h){g.fillStyle=col;g.beginPath();g.moveTo(x0,y+60);for(let x=x0;x<=x1;x+=9){const hh=h*(.5+hash(seed+x*.13)*.7);g.lineTo(x,y);g.lineTo(x+4.5,y-hh);g.lineTo(x+9,y)}g.lineTo(x1,y+60);g.closePath();g.fill()}
function birch(x,gy,h,seed,col){
  const sw=Math.sin(t*.9+seed)*4,lean=(hash(seed)-.5)*.08;
  const tx=x+lean*h,tw=7+h*.02;
  g.beginPath();g.moveTo(x-tw,gy);g.quadraticCurveTo(x-tw*.8+lean*h*.5,gy-h*.5,tx-tw*.4+sw*.3,gy-h);g.lineTo(tx+tw*.4+sw*.3,gy-h);g.quadraticCurveTo(x+tw*.8+lean*h*.5,gy-h*.5,x+tw,gy);g.closePath();fo(tc('#D9CCD6'));
  g.fillStyle=tc('#302B49');for(let i=0;i<9;i++){const yy=gy-h*hash(seed+i*2.1)*.9,xx=lerp(x,tx,(gy-yy)/h);g.fillRect(xx-tw*.6+hash(i+seed)*3,yy,tw*(.5+hash(seed+i)*.6),2.2)}
  const fc=col||['#4F5470','#6E6A86','#C9926F'];
  // weeping crown: soft volume, then drooping branches covered with small leaf clusters
  for(let i=0;i<4;i++){ell(tx+sw*.7+(hash(seed+i*4.1)-.5)*h*.3,gy-h*(.7+hash(seed+i*1.9)*.25),h*.17,h*.13);g.fillStyle=rgba(tc(fc[0]),.45);g.fill()}
  for(let b=0;b<10;b++){
    const by=gy-h*(.48+hash(seed+b*1.3)*.5),k0=(gy-by)/h,bx=lerp(x,tx,k0)+sw*k0;
    const dir=(b%2?1:-1)*(.45+hash(seed+b)*.55),len=h*(.16+hash(seed+b*2.2)*.16),sy_=Math.sin(t*1.3+b+seed)*3;
    const cx_=bx+dir*len*.6,cy_=by-len*.22,ex=bx+dir*len+sy_,ey=by+len*.6;
    g.strokeStyle=tc('#3A3048');g.lineWidth=1.5;g.beginPath();g.moveTo(bx,by);g.quadraticCurveTo(cx_,cy_,ex,ey);g.stroke();
    for(let k=0;k<7;k++){const u=k/6,px=lerp(lerp(bx,cx_,u),lerp(cx_,ex,u),u),py=lerp(lerp(by,cy_,u),lerp(cy_,ey,u),u)+4,r=h*.042*(1.15-u*.45);
      ell(px,py,r*1.35,r);g.fillStyle=tc(k%3?fc[0]:fc[1]);g.fill();ell(px+r*.35,py-r*.35,r*.6,r*.38);g.fillStyle=rgba(tc(fc[2]),.5);g.fill()}
  }
}
function izba(x,gy,w,h,seed,lit,smokeOn){
  const wall=tc('#6B4A4E'),log=tc('#4A3442'),roof=tc('#3E3048'),rl=tc('#5E4A62');
  const rh=h*.75;
  // wall
  g.beginPath();g.rect(x-w/2,gy-h,w,h);fo(wall);
  g.strokeStyle=log;g.lineWidth=2;for(let y=gy-h+10;y<gy;y+=12){g.beginPath();g.moveTo(x-w/2,y);g.lineTo(x+w/2,y);g.stroke()}
  for(let y=gy-h+4;y<gy;y+=12){for(const sd of[-1,1]){ell(x+sd*(w/2+3),y,5,5.5);fo(tc('#8A6A64'),.6)}}
  brush(x-w/2,gy-h,w,h,rgba(tc('#8A6A64'),1),seed,10,.25);
  // roof
  g.beginPath();g.moveTo(x-w/2-16,gy-h+4);g.lineTo(x,gy-h-rh);g.lineTo(x+w/2+16,gy-h+4);g.closePath();fo(roof);
  g.strokeStyle=rl;g.lineWidth=2;for(let i=1;i<7;i++){const u=i/7;g.beginPath();g.moveTo(lerp(x,x-w/2-16,u),lerp(gy-h-rh,gy-h+4,u));g.lineTo(lerp(x,x+w/2+16,u),lerp(gy-h-rh,gy-h+4,u));g.stroke()}
  // gable with carved board
  g.beginPath();g.moveTo(x-w*.3,gy-h);g.lineTo(x,gy-h-rh*.75);g.lineTo(x+w*.3,gy-h);g.closePath();fo(tc('#5A3E48'),.8);
  g.beginPath();g.moveTo(x,gy-h-rh-2);g.lineTo(x,gy-h-rh+16);ol(1.2);
  // okno
  const wx=x,wy=gy-h*.55,ww=w*.22,wh=h*.32;
  g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);g.fillStyle=lit>0?mixc('#2A2440','#FFB36B',lit):'#2A2440';g.fill();ol();
  if(lit>0)glow(wx,wy,ww*1.6,'#FFB36B',.35*lit);
  g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2.5;g.stroke();
  g.beginPath();g.moveTo(wx-ww*.75,wy-wh*.6);g.lineTo(wx,wy-wh*.95);g.lineTo(wx+ww*.75,wy-wh*.6);g.lineTo(wx+ww*.7,wy-wh*.5);g.lineTo(wx-ww*.7,wy-wh*.5);g.closePath();fo(tc('#B9A6A2'),.8);
  g.beginPath();g.rect(wx-ww*.7,wy+wh*.5,ww*1.4,5);fo(tc('#B9A6A2'),.8);
  // chimney + smoke
  const chx=x+w*.22,chy=gy-h-rh*.42;g.beginPath();g.rect(chx-7,chy-24,14,28);fo(tc('#4A3A48'));
  if(smokeOn)smoke(chx,chy-26,seed,.5);
}
function smoke(x,y,seed,a){for(let i=0;i<9;i++){const u=((t*.18+i/9+hash(seed+i)*.1)%1),r=6+u*26;g.fillStyle=rgba(tc('#B9A6C2'),a*(1-u)*(u*4>1?1:u*4));ell(x+u*30+Math.sin(t*.8+i)*6*u,y-u*120,r,r*.8);g.fill()}}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function leaves(n,seed,x0,y0,w,h,col){for(let i=0;i<n;i++){const ph=hash(seed+i),u=((t*(.08+ph*.06)+ph)%1),x=x0+hash(seed+i*2)*w+Math.sin(t*1.5+i)*25+u*60,y=y0+u*h;g.save();g.translate(x,y);g.rotate(t*2+i);ell(0,0,4,2);g.fillStyle=rgba(col,.85*Math.sin(u*Math.PI));g.fill();g.restore()}}
function ripples(x,y,w,t0,col,a){for(let i=0;i<3;i++){const u=((t-t0)*.5+i/3)%1;if(t<t0)continue;g.strokeStyle=rgba(col,a*(1-u));g.lineWidth=1.5;ell(x,y,w*(.2+u),w*(.2+u)*.32);g.stroke()}}
function fenceW(x0,x1,gy,h,seed){g.strokeStyle=tc('#5A4450');for(let x=x0;x<=x1;x+=22){g.beginPath();g.moveTo(x,gy);g.lineTo(x+(hash(seed+x)-.5)*4,gy-h);g.lineWidth=5;g.stroke()}g.lineWidth=3;for(let k=0;k<4;k++){g.strokeStyle=tc(k%2?'#6B5260':'#4E3A4A');g.beginPath();g.moveTo(x0,gy-h*.2-k*h*.18);for(let x=x0;x<=x1;x+=11)g.lineTo(x,gy-h*.2-k*h*.18+((x/11+k)%2?3:-3));g.stroke()}}
function bucket(x,y,s,ang,water){g.save();g.translate(x,y);g.rotate(ang||0);g.scale(s,s);const LW0=LW;LW/=s;g.beginPath();g.moveTo(-14,-16);g.quadraticCurveTo(0,-34,14,-16);ol(1);g.strokeStyle=tc('#8C8FA3');g.lineWidth=2;g.stroke();g.beginPath();g.moveTo(-14,-16);g.lineTo(14,-16);g.lineTo(11,12);g.lineTo(-11,12);g.closePath();fo(tc('#6B5A60'));g.strokeStyle=tc('#8C8FA3');g.lineWidth=2.5;g.beginPath();g.moveTo(-13,-6);g.lineTo(13,-6);g.moveTo(-12,5);g.lineTo(12,5);g.stroke();if(water){ell(0,-16,13,3.5);g.fillStyle=rgba('#9AB0D0',.9);g.fill()}LW=LW0;g.restore()}
function panel(x,y,w,h,a,frame,glowA){
  if(a<=0)return;
  g.save();g.globalAlpha*=a;
  if(glowA>0){g.shadowColor=rgba(frame||'#E1C8B8',.8*glowA);g.shadowBlur=24}
  g.beginPath();g.roundRect(x,y,w,h,14);g.fillStyle=rgba('#241F4A',.55);g.fill();g.shadowBlur=0;
  const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,rgba('#E1C8B8',.18));gr.addColorStop(.25,rgba('#E1C8B8',.04));gr.addColorStop(1,rgba('#6C4377',.12));g.fillStyle=gr;g.fill();
  g.strokeStyle=rgba(frame||'#E1C8B8',.9);g.lineWidth=2;g.stroke();
  g.beginPath();g.roundRect(x+5,y+5,w-10,h-10,10);g.strokeStyle=rgba(frame||'#E1C8B8',.25);g.lineWidth=1;g.stroke();
  g.restore();
}
function bar(x,y,w,h,v,col,a,blinkA){g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,h/2);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
  const vv=cl(v,0,1);if(vv>.001){g.beginPath();g.roundRect(x,y,Math.max(h,w*vv),h,h/2);const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,mixc(col,'#FFFFFF',.35));gr.addColorStop(1,col);g.fillStyle=gr;g.fill();g.shadowColor=col;g.shadowBlur=10*(blinkA||.4);g.fill()}
  g.restore()}
function icon(kind,x,y,s,a){g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha*=a;g.lineJoin='round';g.lineCap='round';const ow=2/s;
  const st=(c)=>{g.fillStyle=c;g.fill();g.strokeStyle='#1F2236';g.lineWidth=ow;g.stroke()};
  if(kind==='wood'){g.beginPath();g.roundRect(-12,-5,22,10,5);st('#A0704A');ell(10,0,4,5);st('#D8A878');g.beginPath();g.arc(10,0,2,0,7);g.strokeStyle='#8A5A3A';g.lineWidth=1;g.stroke()}
  if(kind==='iron'){g.beginPath();g.moveTo(-11,5);g.lineTo(-7,-5);g.lineTo(7,-5);g.lineTo(11,5);g.closePath();st('#8C8FA3');g.beginPath();g.moveTo(-6,-3);g.lineTo(5,-3);g.strokeStyle='#D8DAE6';g.lineWidth=1.5;g.stroke()}
  if(kind==='stone'){blob([[-10,4],[-8,-5],[0,-8],[9,-4],[11,4],[2,7]]);st('#7D7890');ell(-3,-3,3,2);g.fillStyle='#A8A2B8';g.fill()}
  if(kind==='grain'){for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*4,9);g.lineTo(i*5,-4);g.strokeStyle='#C89040';g.lineWidth=2;g.stroke();ell(i*5,-6,2.6,5,i*.3);st('#E0B060')}}
  if(kind==='food'){ell(0,1,11,8);st('#C88A50');g.strokeStyle='#8A5A3A';g.lineWidth=1.4;for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*5-2,-3);g.lineTo(i*5+2,1);g.stroke()}}
  if(kind==='happy'){ell(0,0,10,10);st('#FFCF9A');g.beginPath();g.arc(0,1,5,.3,Math.PI-.3);g.strokeStyle='#1F2236';g.lineWidth=1.6;g.stroke();ell(-3.5,-3,1.3,1.6);g.fillStyle='#1F2236';g.fill();ell(3.5,-3,1.3,1.6);g.fill()}
  if(kind==='well'){g.beginPath();g.rect(-9,-1,18,9);st('#8A6A58');g.beginPath();g.moveTo(-11,-6);g.lineTo(0,-13);g.lineTo(11,-6);g.closePath();st('#6B5A60');g.beginPath();g.moveTo(-8,-6);g.lineTo(-8,-1);g.moveTo(8,-6);g.lineTo(8,-1);g.stroke()}
  if(kind==='bench'){g.beginPath();g.rect(-11,-2,22,4);st('#A07A60');g.beginPath();g.moveTo(-8,2);g.lineTo(-8,8);g.moveTo(8,2);g.lineTo(8,8);g.strokeStyle='#1F2236';g.lineWidth=2;g.stroke();g.beginPath();g.rect(-11,-10,22,4);st('#A07A60')}
  if(kind==='roof'){g.beginPath();g.moveTo(-11,6);g.lineTo(-11,-2);g.lineTo(0,-10);g.lineTo(11,-2);g.lineTo(11,6);g.closePath();st('#7A5A68')}
  if(kind==='road'){g.beginPath();g.moveTo(-4,-9);g.lineTo(4,-9);g.lineTo(10,9);g.lineTo(-10,9);g.closePath();st('#6A5468')}
  if(kind==='axe'){g.beginPath();g.moveTo(-8,9);g.lineTo(6,-7);g.strokeStyle='#A0704A';g.lineWidth=3;g.stroke();g.beginPath();g.moveTo(2,-11);g.quadraticCurveTo(12,-10,11,0);g.lineTo(5,-5);g.closePath();st('#8C8FA3')}
  if(kind==='person'){ell(0,-5,4.5,4.5);st('#C98972');g.beginPath();g.moveTo(-7,9);g.quadraticCurveTo(-7,0,0,0);g.quadraticCurveTo(7,0,7,9);g.closePath();st('#B9A6A2')}
  if(kind==='warn'){g.beginPath();g.moveTo(0,-10);g.lineTo(10,8);g.lineTo(-10,8);g.closePath();st('#E0505A');g.fillStyle='#1F2236';g.fillRect(-1.2,-4,2.4,7);ell(0,5,1.4,1.4);g.fill()}
  g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function toScreen(x,y,f){const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f,q=rot((x-cx)*z,(y-cy)*z,CAM.r*f);return [270+CAM.sx*f+q[0],480+CAM.sy*f+q[1]]}
function spark(x,y,r,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r*2.5,'#FFE6C4',.6*a);g.fillStyle=rgba('#FFF4EA',a);g.beginPath();g.moveTo(x,y-r);g.quadraticCurveTo(x+r*.12,y-r*.12,x+r,y);g.quadraticCurveTo(x+r*.12,y+r*.12,x,y+r);g.quadraticCurveTo(x-r*.12,y+r*.12,x-r,y);g.quadraticCurveTo(x-r*.12,y-r*.12,x,y-r);g.fill();g.restore()}
function grassRow(y,seed,n,x0,x1,h,col){g.lineCap='round';for(let i=0;i<n;i++){const x=x0+hash(seed+i)*(x1-x0),hh=h*(.5+hash(seed+i*3)*.7),sw=Math.sin(t*1.6+x*.05)*hh*.15;g.strokeStyle=col;g.lineWidth=2.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+sw*.3,y-hh*.6,x+sw+(hash(i)-.5)*10,y-hh);g.stroke()}}
function birds(){g.strokeStyle=rgba('#241F4A',.8);g.lineWidth=2;for(let i=0;i<5;i++){const x=((t*28+i*40+hash(i)*30)%900)-200,y=330+i*9+Math.sin(t*2+i)*4,f=Math.sin(t*9+i*2)*4;g.beginPath();g.moveTo(x-7,y-f);g.quadraticCurveTo(x-3,y-2,x,y);g.quadraticCurveTo(x+3,y-2,x+7,y-f);g.stroke()}}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function villageGround(T){
  const gr=g.createLinearGradient(0,600,0,1100);gr.addColorStop(0,mixc(PAL.ground,PAL.far,.5));gr.addColorStop(.25,PAL.ground);gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-1200,618,3600,1400);
  g.fillStyle=tc('#4A3848');g.beginPath();g.moveTo(-1200,676);for(let x=-1200;x<=2400;x+=40)g.lineTo(x,676+nz(x*.02)*4);g.lineTo(2400,770);for(let x=2400;x>=-1200;x-=40)g.lineTo(x,770+nz(x*.03+5)*5);g.closePath();g.fill();
  brush(-200,680,1200,90,'#6A5468',21,60,.35);
  for(const ry of[704,738]){g.strokeStyle=rgba('#1F2236',.55);g.lineWidth=4;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke();g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=1.5;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+3+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke()}
  for(const pd of[[150,740,60],[420,706,48],[700,738,70],[-150,706,50]]){ell(pd[0],pd[1],pd[2],7);const pg=g.createLinearGradient(pd[0]-pd[2],0,pd[0]+pd[2],0);pg.addColorStop(0,T.sky[1]);pg.addColorStop(.6,T.sky[2]);pg.addColorStop(1,T.moon?'#4B3463':'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);ripples(pd[0]+10,pd[1],pd[2]*.5,0,'#FFE6C4',.4)}
  grassRow(676,1,60,-600,1400,22,tc('#4F5470'));
}
const TOD={
  dawn:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[470,520],tint:'#6C4377',ta:.12,lit:.5},
  day:{sky:['#4B3463','#9A6A8E','#F2B895'],sun:[410,300],tint:'#F09A6C',ta:.04,lit:0},
  sunset:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[330,590],tint:'#F09A6C',ta:.14,lit:.8},
  night:{sky:['#120F2A','#241F4A','#4B3463'],sun:null,moon:[400,210],tint:'#241F4A',ta:.42,lit:1}
};
function villageWorld(o){
  const T=TOD[op(o,'tod','dawn')];TINT=T.tint;TA=T.ta;
  const bF=op(o,'bF',0),bM=op(o,'bM',0),bFg=op(o,'bFg',2.5);
  layer(0,()=>sky(T.sky[0],T.sky[1],T.sky[2],-150,620));
  layer(.06,()=>{if(T.sun)sun(T.sun[0],T.sun[1],20);if(T.moon){stars(60,5,-300,-200,1200,700);glow(T.moon[0],T.moon[1],110,'#E1C8B8',.22);ell(T.moon[0],T.moon[1],16,16);g.fillStyle='#E7DCE6';g.fill()}clouds(380,7,3,T.sky[2],.22,6);clouds(260,5,8,T.sky[1],.3,4)},bF*.5);
  layer(.2,()=>{if(!T.moon)birds();hills(575,42,mixc(PAL.far,T.sky[2],.32),1,-600,1300);forestLine(592,mixc(PAL.far,T.sky[1],.15),4,-600,1300,24);if(o.far)o.far()},bF);
  layer(.5,()=>{g.fillStyle=mixc(PAL.ground,PAL.far,.55);g.fillRect(-900,600,2600,300);
    izba(-120,622,150,90,1,T.lit,1);birch(30,628,170,2);izba(160,620,130,80,2,T.lit*.8,1);birch(300,628,200,5);izba(470,622,160,92,3,T.lit,1);birch(600,630,180,8);izba(760,620,140,86,4,T.lit*.7,1);fenceW(-300,900,640,26,3);if(o.mid)o.mid()},bM);
  layer(1,()=>{villageGround(T);if(o.main)o.main()},op(o,'bMain',0));
  if(op(o,'fg',1))layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---- scene
// SCENE 2 — «Строки, лужа и тайна» (14.2 – 28.13)
// shots: 0 CU lines→emblem | 1 UI 86 pips | 2 two-shot, medallion frame lights | 3 insert puddle splash, panel shatters |
//        4 medium pick-up, panel re-forms | 5 wide look-around | 6 medium-close hides medallion | 7 CU determined squint
const ST=[0,1.3,3.25,4.75,6.4,8.3,10.55,12.3];
const S=shot(t,ST);
TINT='#6C4377';TA=.12;
const GY=716,HX=270,HS=.62,MX=300,MY=724;
const PCX=366,PCY=512,PK=.5; // world position / scale of the floating glass panel
const tDrop=4.78,tSplash=5.0,tShat=5.97,tGrab=7.35;

// ---------- helpers
function qPip(x,y,r,col,a){g.fillStyle=rgba(col,a);ell(x,y-r*.62,r*.4,r*.4);g.fill();g.beginPath();g.moveTo(x-r*.72,y+r*.72);g.quadraticCurveTo(x-r*.68,y-r*.05,x,y-r*.05);g.quadraticCurveTo(x+r*.68,y-r*.05,x+r*.72,y+r*.72);g.closePath();g.fill()}
// village emblem: ring, two roofs and a birch; pr 0..1 draws it stroke by stroke
function qEmblem(x,y,r,pr,a){
  if(pr<=0||a<=0)return;g.save();g.globalAlpha*=a;g.lineCap='round';g.lineJoin='round';
  g.shadowColor='#FFCF9A';g.shadowBlur=8;
  g.strokeStyle=rgba('#FFCF9A',.95);g.lineWidth=r*.09;g.beginPath();g.arc(x,y,r,-Math.PI/2,-Math.PI/2+Math.PI*2*sm(0,.45,pr));g.stroke();
  const q=sm(.3,.75,pr);
  if(q>0){g.strokeStyle=rgba('#E1C8B8',.95*q);g.lineWidth=r*.07;
    for(const h_ of[[-.42,.42],[.38,.36]]){const hx_=x+r*h_[0],w_=r*h_[1];g.beginPath();g.moveTo(hx_-w_*.75,y+r*.28);g.lineTo(hx_,y-r*.08);g.lineTo(hx_+w_*.75,y+r*.28);g.moveTo(hx_-w_*.55,y+r*.24);g.lineTo(hx_-w_*.55,y+r*.58);g.lineTo(hx_+w_*.55,y+r*.58);g.lineTo(hx_+w_*.55,y+r*.24);g.stroke()}
    g.beginPath();g.moveTo(x-r*.8,y+r*.6);g.quadraticCurveTo(x,y+r*.7,x+r*.8,y+r*.6);g.stroke()}
  const b=sm(.55,1,pr);
  if(b>0){g.strokeStyle=rgba('#FFE6C4',b);g.lineWidth=r*.08;g.beginPath();g.moveTo(x+r*.02,y+r*.6);g.lineTo(x-r*.02,y+r*(.6-1.25*b));g.stroke();
    for(let i=0;i<7;i++){const yy=y-r*(.6-i*.14),sd=i%2?1:-1;if(yy>y+r*(.6-1.25*b)+2){g.fillStyle=rgba(i%3?'#FFCF9A':'#E1C8B8',.9*b);ell(x+sd*r*(.16+.05*Math.sin(t*2+i)),yy+r*.06,r*.09,r*.06,sd*.6);g.fill()}}}
  g.restore();
}
// glass shards of the 300×280 panel; u 0 = whole .. 1 = scattered and fallen
function qShards(u,a){
  if(a<=0)return;
  const V=(i,j)=>[i*75+(i>0&&i<4?(hash(i*7+j*3)-.5)*44:0),j*93.3+(j>0&&j<3?(hash(i*5+j*11)-.5)*44:0)];
  for(let i=0;i<4;i++)for(let j=0;j<3;j++)for(let h_=0;h_<2;h_++){
    const p0=V(i,j),p1=V(i+1,j),p2=V(i+1,j+1),p3=V(i,j+1),tri=h_?[p0,p1,p2]:[p0,p2,p3];
    const cx=(tri[0][0]+tri[1][0]+tri[2][0])/3,cy=(tri[0][1]+tri[1][1]+tri[2][1])/3,sd=i*6+j*2+h_;
    const dx=(cx-150)*(.6+hash(sd))*u+(hash(sd+3)-.5)*90*u,dy=(cy-140)*.5*u-60*u+520*u*u,ro=(hash(sd+5)-.5)*5*u;
    g.save();g.translate(cx+dx,cy+dy);g.rotate(ro);g.beginPath();g.moveTo(tri[0][0]-cx,tri[0][1]-cy);g.lineTo(tri[1][0]-cx,tri[1][1]-cy);g.lineTo(tri[2][0]-cx,tri[2][1]-cy);g.closePath();
    g.fillStyle=rgba('#E1C8B8',.16*a);g.fill();g.strokeStyle=rgba('#FFE6C4',.85*a);g.lineWidth=1.6;g.stroke();
    g.beginPath();g.moveTo(tri[0][0]-cx,tri[0][1]-cy);g.lineTo((tri[1][0]-cx)*.5,(tri[1][1]-cy)*.5);g.strokeStyle=rgba('#FFFFFF',.35*a);g.lineWidth=1;g.stroke();g.restore()}
}
// panel state as a function of time
function pState(){
  const o={a:1,em:sm(.1,1.25,t),pips:Math.floor(cl((t-1.45)/.85,0,1)*86+.001),flash:Math.max(0,1-Math.abs(t-2.32)/.3),ring:sm(3.45,4.35,t),ringF:Math.max(0,1-Math.abs(t-4.4)/.35),rev:1,shat:0,sa:0};
  if(t>tSplash&&t<tShat){const k=sm(tSplash,tShat,t);o.a=1-k*.55*(hash(Math.floor(t*22))>.45?1:.25)-.35*k}
  if(t>=tShat&&t<7.45){o.shat=cl((t-tShat)/.75,0,1);o.sa=1-sm(.55,1,o.shat);o.a=1-sm(tShat,tShat+.12,t)}
  if(t>=7.45){const u=1-eout((t-7.45)/.6);o.shat=u;o.sa=u>0?1:0;o.a=sm(7.8,8.15,t);o.rev=sm(7.8,8.3,t);o.flash=Math.max(0,1-Math.abs(t-8.1)/.25)*.6}
  if(t>8.3)o.a*=lerp(1,.62,sm(8.3,8.7,t));
  if(t>10.7)o.a*=1-sm(10.9,11.35,t);
  return o;
}
// the floating panel, local 300×280 units, centred at (cx,cy) with scale k
function qVPanel(k,cx,cy,o){
  g.save();g.translate(cx,cy);g.scale(k,k);g.translate(-150,-140);
  if(o.shat>0)qShards(o.shat,o.sa);
  const a=o.a;
  if(a>.01){
    panel(0,0,300,280,a,o.ringF>.05?'#FFCF9A':'#E1C8B8',.5+.5*o.flash+.4*o.ringF);
    g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(0,0,300,280*o.rev,14);g.clip();
    qEmblem(44,42,26,o.em,1);
    g.fillStyle=rgba('#FFCF9A',.85*sm(.4,.9,o.em));g.beginPath();g.roundRect(86,28,150*sm(.35,1,o.em),8,4);g.fill();
    g.fillStyle=rgba('#E1C8B8',.45*sm(.6,1,o.em));g.beginPath();g.roundRect(86,44,90*sm(.5,1,o.em),5,2.5);g.fill();
    g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(16,78);g.lineTo(284,78);g.stroke();
    // population: 86 person pips in rows of ten
    icon('person',26,98,1,.9);
    for(let i=0;i<o.pips;i++){const c=i%10,r=Math.floor(i/10),x=56+c*23,y=96+r*14;const pop=cl((t-1.45-i/86*.85)/.12,0,1),s_=r>=0?(o.pips<86?lerp(1.6,1,pop):1):1;
      qPip(x,y,5.6*s_*(1+.25*o.flash),mixc('#E1C8B8','#FFCF9A',.55+.45*o.flash),.95)}
    if(o.pips>0&&o.pips<86){const i=o.pips-1;spark(56+(i%10)*23,96+Math.floor(i/10)*14,9,.7)}
    // medallion slot: frame ring lights up around the medallion
    const ry=236;g.beginPath();g.roundRect(14,ry-22,272,44,12);g.fillStyle=rgba('#1F2236',.45);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
    medallion(42,ry,14,0,0,.3*o.ring+.6*o.ringF);
    if(o.ring>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=12;g.strokeStyle=rgba('#FFCF9A',.95);g.lineWidth=3;g.beginPath();g.arc(42,ry,19,-Math.PI/2,-Math.PI/2+Math.PI*2*o.ring);g.stroke();
      g.beginPath();g.roundRect(14,ry-22,272*o.ring,44,12);g.strokeStyle=rgba('#FFCF9A',.7*o.ring);g.lineWidth=2;g.stroke();g.restore();
      bar(72,ry-6,196,12,o.ring,'#FFCF9A',1,.6+o.ringF)}
    g.restore();
    // glass sheen sweeping over
    g.save();g.beginPath();g.roundRect(0,0,300,280,14);g.clip();const sx=((t*.35)%1.6)*500-200;g.fillStyle=rgba('#FFFFFF',.06*a);g.beginPath();g.moveTo(sx,0);g.lineTo(sx+40,0);g.lineTo(sx-30,280);g.lineTo(sx-70,280);g.closePath();g.fill();g.restore();
  }
  g.restore();
}
function qPalm(ex,ey,an){ // flat right palm pressed to the chest
  g.save();g.translate(ex,ey);g.rotate(-.35);const sk=tc(SKIN[0]);
  segs([[2,-2,15,-6,5,sk],[3,1,17,0,5,sk],[3,4,16,6,5,sk],[2,6,13,11,4.5,sk],[-2,-3,4,-11,5,sk]]);
  ell(3,1,8,7.5);fo(sk);g.strokeStyle=rgba(SKIN[1],.6);g.lineWidth=1;g.beginPath();g.moveTo(9,-3);g.lineTo(14,-4);g.moveTo(10,2);g.lineTo(15,2);g.stroke();g.restore();
}
// ---------- hero
const cr=ease((t-6.5)/.55)*(1-ease((t-7.7)/.6));
function heroO(){
  const o={x:HX,y:GY,s:HS,t,ls:1,rimC:PAL.rim,rimA:.75,fr:[22,0],fl:[-28,0],medal:t>11.3?'hidden':'none'};
  let yaw=lerp(.35,.6,sm(.2,1.0,t));
  yaw=lerp(yaw,-.6,sm(8.75,9.2,t));yaw=lerp(yaw,1.0,sm(9.75,10.2,t));yaw=lerp(yaw,.5,sm(10.45,10.95,t));
  yaw=lerp(yaw,.85,cr);o.yaw=yaw;
  o.hipY=lerp(-142.8,-84,cr);o.lean=lerp(.03,.42,cr)-.04*sm(tSplash,tSplash+.25,t)*(1-sm(5.8,6.3,t));o.hipX=lerp(0,-6,cr);
  // eyes → head → body
  const lx=-.9*sm(8.45,8.6,t)*(1-sm(9.4,9.5,t))+.9*sm(9.45,9.6,t)*(1-sm(10.3,10.5,t));
  o.turn=-.55*sm(8.55,8.85,t)*(1-sm(9.55,9.85,t))+.3*sm(9.55,9.85,t)*(1-sm(10.35,10.65,t));
  const shock=sm(tSplash+.02,tSplash+.15,t)*(1-sm(6.3,6.8,t));
  let look=[lerp(.45,.7,sm(.1,.9,t))*(1-sm(4.5,4.8,t)),lerp(-.1,-.35,sm(.2,1,t))];
  if(t>4.75){look=[.3,.9]}
  if(t>6.6){look=[.5,.8]}
  if(t>8.1){look=[lx,0]}
  if(t>10.5){look=[.2,lerp(.2,.05,sm(11.5,12,t))]}
  const det=sm(11.5,12.1,t),w0=1-sm(.15,.75,t); // w0: amazed face carried over from scene 1
  if(t<1)look=[lerp(look[0],.1,w0),lerp(look[1],-.2,w0)];
  o.em={look,brow:Math.max(w0,lerp(.55*sm(.2,1,t)*(1-sm(4.4,4.7,t)),1,shock))-.25*sm(8.4,8.6,t)*(1-det)-.2*det,
    browIn:.5*sm(6,6.3,t)*(1-sm(7.5,8,t))+.35*sm(8.4,8.6,t)*(1-det)-.35*det,
    smile:.3*sm(.3,1.2,t)*(1-sm(4.3,4.6,t))+.12*det,open:lerp(.25*(1-sm(3.8,4.3,t)),.6,shock)+.15*(t>6&&t<6.4?1:0)+.3*w0,
    eyeOpen:lerp(lerp(1.1,1.3,w0),1.35,shock)*(1-det)+.68*det,blink:(t>tSplash+.02&&t<tSplash+.12)||(t>tShat&&t<tShat+.1)||(t>11.85&&t<11.97)?1:0};
  o.tilt=lerp(-.05,.05,sm(.3,1,t))+.3*sm(tSplash+.06,tSplash+.25,t)*(1-sm(6.3,6.8,t))-.1*cr+.08*sm(11.5,12,t);
  // right hand: holds medallion at chest, trembles, drops it, picks it up, hides it, palm on chest
  let hr=[lerp(10,22,sm(.3,1.2,t)),lerp(-198,-210,sm(.3,1.2,t))];
  const tr=sm(4.35,4.6,t)*(t<tDrop?1:0);hr[0]+=Math.sin(t*71)*3*tr;hr[1]+=Math.cos(t*53)*2.5*tr;
  if(t>=tDrop){const j=ease((t-tDrop)/.15),d=ease((t-5.3)/.5);hr=[lerp(lerp(22,36,j),18,d),lerp(lerp(-210,-188,j),-150,d)]}
  if(t>=6.8){const tgt=[(MX-HX)/HS-4,(MY-GY)/HS-6],re=sm(6.8,tGrab,t),li=sm(7.55,8.15,t);hr=[lerp(lerp(18,tgt[0],re),22,li),lerp(lerp(-150,tgt[1],re),-210,li)]}
  if(t>=10.65){const u=sm(10.7,11.25,t),v=sm(11.35,11.8,t);hr=[lerp(lerp(22,8,u),3,v),lerp(lerp(-210,-232,u),-206,v)]}
  o.hr=hr;
  const held=t<tDrop||(t>=tGrab&&t<11.3);
  if(held){const dirt=t<tDrop?0:lerp(.4,.12,sm(7.6,9,t)),gl=t<tDrop?.55+.25*Math.sin(t*4)+.4*Math.max(0,1-Math.abs(t-4.4)/.35):(.25+.3*sm(7.45,8.1,t))*(1-sm(8.5,9,t)*.6),
    rr=9*(1-sm(11.0,11.3,t)*.5);
    o.itemR=(gg,ex,ey,an)=>{g.save();g.globalAlpha*=1-sm(11.05,11.3,t);medallion(ex+4,ey-2,rr,an,dirt,gl*(1-sm(10.7,11,t)));g.restore()}}
  else if(t>11.3)o.itemR=(gg,ex,ey,an)=>qPalm(ex,ey,an);
  // left hand: on the knee in the crouch, rises in fright
  if(cr>.05)o.hl=[lerp(10,30,cr),lerp(-90,-62,cr)];
  else if(t>tSplash&&t<6.4)o.hl=[lerp(-14,-6,sm(5.8,6.3,t)),lerp(-110,-140,sm(5.8,6.3,t))-26*sm(tSplash+.1,tSplash+.3,t)*(1-sm(5.8,6.3,t))];
  o.cloth=Math.sin(t*1.3)*.3;
  return o;
}
function puddle(){ // small puddle in the rut where the medallion was found
  ell(MX+4,MY,34,6.5);const pg=g.createLinearGradient(MX-30,0,MX+38,0);pg.addColorStop(0,'#6C4377');pg.addColorStop(.6,'#F09A6C');pg.addColorStop(1,'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);
  ripples(MX+2,MY,26,0,'#FFE6C4',.35);if(t>tSplash)ripples(MX,MY,40,tSplash,'#FFE6C4',.8*(1-sm(6.5,8,t)));
  if(t<tGrab&&t>tSplash){g.save();g.translate(MX,MY+.5);g.scale(1,.45);medallion(0,0,9,.4,.45,0);g.restore();ell(MX,MY+1.5,10,2.4);g.fillStyle=rgba('#F09A6C',.45);g.fill()}
}
function world(bF,bM,bFg,bMain,panelOn){
  villageWorld({tod:'dawn',bF,bM,bFg,bMain,main:()=>{
    puddle();
    const o=heroO();bucket(o.x-26*HS,GY-1,1.05,0,0);person(HERO,o);
    if(panelOn){const ps=pState();g.save();g.translate(0,Math.sin(t*1.4)*2);qVPanel(PK,PCX,PCY,ps);g.restore()}
    grassRow(772,2,50,-600,1400,26,tc('#3E3A58'))}});
  // the glass casts a faint cool light on the hero
  if(panelOn){const ps=pState(),c=toScreen(PCX,PCY,1);lampLight(c[0],c[1],180*CAM.z,'#E1C8B8',.16*ps.a)}
}

// ---------------- shot 0: close-up — the glowing lines fold into the village emblem
if(S.i===0){
  const lt=S.lt;setCam(lerp(268,286,ease(lt/1.3)),lerp(553,548,ease(lt/1.3)),lerp(6.95,6.1,eout(lt/1.3)),0);
  villageWorld({tod:'dawn',bF:9,bM:7,bFg:0,fg:0,main:()=>{const o=heroO();o.tilt=lerp(-.04,.02,sm(0,1,lt));person(HERO,o)}});
  const E=[418,236],cv=ease(cl((lt-.05)/.75,0,1));
  for(let i=0;i<5;i++){const y0=150+i*50+Math.sin(t*1.3+i)*3,w0=340-i*30,x0=270+(i%2?14:-10);
    const xc=lerp(x0,E[0],cv),yc=lerp(y0,E[1],cv),w=lerp(w0,10,cv),a=1-sm(.7,1,cv);if(a<=0)continue;
    g.save();g.globalAlpha=.85*a;g.shadowColor=rgba('#E1C8B8',.9);g.shadowBlur=18;g.beginPath();g.roundRect(xc-w/2,yc-12*(1-cv*.6),w,24*(1-cv*.6),12);g.fillStyle=rgba('#241F4A',.35);g.fill();g.strokeStyle=rgba('#E1C8B8',.9);g.lineWidth=1.5;g.stroke();g.shadowBlur=0;
    for(let k=0;k<6;k++){const dx=xc-w/2+18+k*(w-36)/6,dw=((w-36)/6)*(.4+hash(i*7+k)*.5);if(w<60)break;g.fillStyle=rgba('#FFE6C4',.6+.3*Math.sin(t*6+k+i));g.fillRect(dx,yc-2,dw,4)}g.restore()}
  const ep=sm(.55,1.3,lt);
  if(ep>0){g.save();g.globalAlpha=sm(.5,.7,lt);ell(E[0],E[1],86,86);g.fillStyle=rgba('#241F4A',.35);g.fill();g.restore();qEmblem(E[0],E[1],70,ep,1);spark(E[0],E[1]-70,16*Math.max(0,1-Math.abs(lt-.75)/.25)+2,.8)}
  wash('#E1C8B8',.1,'screen');
  motes(16,5,0,100,540,600,'#FFE6C4',.4,2.2);
}
// ---------------- shot 1: UI — population: 86 pips fill the glass
if(S.i===1){
  const u=S.u;setCam(330,545,2.3+u*.12,-.01);
  world(10,9,6,5,0);
  wash('#1F2236',.25);
  const k=1.33+u*.07;g.save();g.translate(0,Math.sin(t*1.4)*2);qVPanel(k,312,348,pState());g.restore();
  wash('#E1C8B8',.05+.08*pState().flash,'screen');
  motes(20,7,0,80,540,640,'#FFE6C4',.45,2);
}
// ---------------- shot 2: two-shot — hero and the panel, the medallion slot lights up; hand starts to tremble
if(S.i===2){
  const u=S.u;setCam(336+u*6,546-u*4,2.45+u*.15,-.01);
  CAM.sx=kick(t,4.4,2.5,.3);
  world(4,3,4,0,1);
  leaves(5,8,0,100,540,700,'#C9926F');
}
// ---------------- shot 3: insert — the medallion falls into the puddle; the reflected glass flickers and shatters
if(S.i===3){
  const lt=S.lt,u=S.u;setCam(270,520,1+u*.08,.02-u*.02);
  CAM.sy=kick(t,tSplash,4,.3)+kick(t,tShat,2.5,.25);
  layer(0,()=>{const gr=g.createLinearGradient(0,0,0,960);gr.addColorStop(0,'#6C4377');gr.addColorStop(.2,'#F09A6C');gr.addColorStop(.28,mixc(PAL.ground,PAL.far,.4));gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-100,-100,740,1160)});
  layer(.3,()=>{hills(235,26,mixc(PAL.far,PAL.sky2,.4),6,-200,800);izba(110,250,120,60,9,.8,1);izba(430,246,110,58,8,.6,1);sun(330,200,14)},7);
  layer(.75,()=>{g.fillStyle=tc('#3A2C44');g.beginPath();g.moveTo(-300,280);g.lineTo(840,280);g.lineTo(1100,1300);g.lineTo(-560,1300);g.closePath();g.fill();
    brush(-100,280,740,620,'#5A4458',4,80,.4);
    for(const k of[-1,1]){g.strokeStyle=rgba('#1F2236',.7);g.lineWidth=18;g.beginPath();g.moveTo(270+k*60,280);g.quadraticCurveTo(270+k*120,600,270+k*330,1100);g.stroke()}},2.5);
  layer(1,()=>{
    // the puddle mirrors the dawn sky — and the glass panel above it
    const PX=280,PY=610;
    ell(PX,PY,205,66,-.05);const pg=g.createLinearGradient(80,560,480,660);pg.addColorStop(0,'#6C4377');pg.addColorStop(.55,'#F09A6C');pg.addColorStop(1,'#FFCF9A');g.fillStyle=pg;g.fill();ol(.8);
    g.save();ell(PX,PY,205,66,-.05);g.clip();clouds(570,4,11,'#FFE6C4',.25,10);
    const ps=pState();g.translate(PX+30,PY-6);g.scale(1,-.4);g.globalAlpha=.75;qVPanel(.9,0,0,ps);g.restore();
    g.save();ell(PX,PY,205,66,-.05);g.clip();ripples(PX-80,PY+8,90,0,'#FFE6C4',.5);
    if(t>tSplash){ripples(PX+10,PY,260,tSplash,'#FFE6C4',.9);ripples(PX+10,PY,160,tSplash+.3,'#FFE6C4',.7)}
    if(t>tShat)for(let i=0;i<9;i++){const tt=tShat+.12+i*.06;if(t>tt)ripples(PX-150+hash(i)*300,PY-30+hash(i+4)*60,50,tt,'#FFE6C4',.6)}
    g.restore();
    // hero's boot and the bucket at the edge of the frame
    g.save();g.translate(70,470);g.rotate(-.1);
    segs([[4,-520,0,-170,96,tc(HERO.pants)]]);segLight(4,-520,0,-170,96,'#FFCF9A',.18,1);
    g.beginPath();g.moveTo(-40,-190);g.lineTo(-38,-40);g.quadraticCurveTo(-52,20,-30,26);g.lineTo(96,26);g.quadraticCurveTo(112,-6,40,-44);g.lineTo(40,-190);g.closePath();fo(tc(HERO.boots));
    g.strokeStyle=rgba('#FFCF9A',.3);g.lineWidth=5;g.beginPath();g.moveTo(34,-180);g.lineTo(34,-50);g.quadraticCurveTo(80,-20,98,14);g.stroke();
    g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=3;g.beginPath();g.moveTo(-38,-160);g.quadraticCurveTo(0,-150,40,-162);g.moveTo(-30,20);g.lineTo(90,20);g.stroke();
    ell(30,30,90,12);g.fillStyle=rgba('#4A3848',.6);g.fill();g.restore();
    bucket(470,470,4.2,.05,0);
    // the hand trembles at the top of the frame and lets go
    {const op_=sm(tDrop-.02,tDrop+.08,t),jx=Math.sin(t*71)*4*(1-op_),hy=lerp(70,-260,sm(tDrop+.12,5.45,t));g.save();g.translate(250+jx,hy-30);g.rotate(.15);g.scale(1.6,1.6);const sk=tc(SKIN[0]);
      segs([[-20,-200,0,-40,70,tc(HERO.top[0])]]);ell(0,0,46,40);fo(sk);
      for(let i=0;i<4;i++){const a=lerp(1.9,1.2,op_)-i*.22,l=lerp(34,58,op_);segs([[-30+i*20,14,-30+i*20+Math.cos(a)*l*.3,14+Math.sin(a)*l,17,sk]])}
      segs([[34,-6,lerp(40,66,op_),lerp(28,10,op_),18,sk]]);g.restore()}
    // falling medallion, tumbling
    if(t<tSplash){const q=cl((t-tDrop)/(tSplash-tDrop),0,1),y=lerp(110,PY,q*q),x=lerp(250,PX+10,q),ro=t*14;
      g.save();g.translate(x,y);g.scale(1,Math.max(.15,Math.abs(Math.cos(ro))));medallion(0,0,46,ro*.3,0,.6);g.restore();
      g.strokeStyle=rgba('#FFE6C4',.4);g.lineWidth=3;g.beginPath();g.moveTo(x-4,y-70);g.lineTo(x-14,y-170);g.stroke()}
    else{g.save();g.translate(PX+10,PY+4);g.scale(1,.42);medallion(0,0,50,.4,lerp(.1,.45,sm(tSplash,5.6,t)),.25*(1-sm(5.2,tShat,t)));g.restore();
      g.save();ell(PX+10,PY+20,70,16);g.fillStyle=rgba('#F09A6C',.4);g.fill();g.restore();
      // splash crown and droplets
      const su=(t-tSplash)/.55;if(su<1){for(let i=0;i<16;i++){const a=Math.PI+i/15*Math.PI,v=180+hash(i)*120,x=PX+10+Math.cos(a)*v*su*.9,y=PY-Math.sin(-a)*0+(-Math.abs(Math.sin(a))*v*su*1.2+su*su*420);
        ell(x,y,7*(1-su*.5),9*(1-su*.5));g.fillStyle=rgba('#FFE6C4',.9*(1-su));g.fill()}
        g.beginPath();g.ellipse(PX+10,PY,90*eout(su*1.4),28*eout(su*1.4),0,Math.PI,0);g.strokeStyle=rgba('#FFE6C4',.8*(1-su));g.lineWidth=6;g.stroke()}}
    // glass shards rain down after the panel breaks
    if(t>tShat){for(let i=0;i<14;i++){const tt=t-tShat-hash(i+20)*.2;if(tt<0)continue;const y=-40+tt*tt*1400+hash(i)*120,x=60+hash(i+9)*420+Math.sin(tt*3+i)*14,a=1-sm(PY-60,PY+20,y);if(a<=0)continue;
      g.save();g.translate(x,y);g.rotate(tt*6*(hash(i+3)-.5)+i);g.beginPath();g.moveTo(0,-16);g.lineTo(11,10);g.lineTo(-8,12);g.closePath();g.fillStyle=rgba('#E1C8B8',.25*a);g.fill();g.strokeStyle=rgba('#FFE6C4',.9*a);g.lineWidth=1.5;g.stroke();g.restore()}}
  });
  layer(1.6,()=>{grassRow(980,5,26,-100,700,280,'#241F36')},6);
  g.save();g.globalCompositeOperation='screen';beam(560,120,250,620,30,140,'#FFB36B',.2);g.restore();
  motes(22,3,0,200,540,500,'#FFE6C4',.5,1.8);
}
// ---------------- shot 4: medium — crouch, pick it up, the panel assembles again
if(S.i===4){
  const u=S.u;setCam(lerp(300,312,u),lerp(600,612,cr)-sm(7.6,8.2,t)*24,1.72+u*.1,-.015);
  CAM.sy=kick(t,tGrab,2.5,.25);
  world(2,1.5,3,0,1);
  leaves(5,9,0,100,540,700,'#C9926F');
}
// ---------------- shot 5: wide — he looks left and right: the road is empty
if(S.i===5){
  const u=S.u;setCam(lerp(250,290,ease(u)),560-u*8,1.0+u*.06,lerp(-.01,.01,u));
  world(0,0,2.5,0,1);
  leaves(9,4,0,200,540,600,'#C9926F');
}
// ---------------- shot 6: medium-close — hides the medallion under the shirt, palm on the chest
if(S.i===6){
  const u=S.u;setCam(282-u*6,540+u*4,3.1+u*.25,.01);
  CAM.sy=kick(t,11.8,2,.25);
  world(8,6,6,0,1);
  motes(14,6,0,100,540,600,'#FFE6C4',.4,2);
}
// ---------------- shot 7: close-up — determined squint, fade to black
if(S.i===7){
  const u=S.u;setCam(271,lerp(556,551,u),6.0+u*.5,0);
  villageWorld({tod:'dawn',bF:10,bM:8,bFg:0,fg:0,main:()=>{person(HERO,heroO())}});
  motes(14,8,0,80,540,600,'#FFE6C4',.4,2.4);
}
// ---------------- finishing
g.save();g.globalCompositeOperation='multiply';wash('#6C4377',.12+.1*sm(12,13.9,t));g.restore();
vignette(.55+.15*sm(12,13.9,t));
grain(.05);
wash('#000000',cutDip(t,ST));
wash('#000000',sm(13.45,13.9,t));
}
```

## SCENE 3
```javascript
function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function eout(u){u=cl(u,0,1);return 1-Math.pow(1-u,3)}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function blob(pts){const n=pts.length;g.beginPath();let m=[(pts[n-1][0]+pts[0][0])/2,(pts[n-1][1]+pts[0][1])/2];g.moveTo(m[0],m[1]);for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];g.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}g.closePath()}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function sky(c0,c1,c2,y1,y2){const gr=g.createLinearGradient(0,y1,0,y2);gr.addColorStop(0,c0);gr.addColorStop(.55,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.fillRect(-2000,-2000,4540,4960)}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function sun(x,y,r){glow(x,y,r*6,PAL.key,.35);glow(x,y,r*2.2,'#FFE0B8',.5);ell(x,y,r,r);g.fillStyle='#FFE6C4';g.fill()}
function clouds(y,n,seed,col,a,sp){for(let i=0;i<n;i++){const w=90+hash(seed+i)*140,x=((hash(seed+i*3)*900+t*sp*(.6+hash(i)*.6))%900)-180,yy=y+hash(seed+i*7)*70;g.fillStyle=rgba(col,a);ell(x,yy,w*.5,12+hash(i+seed)*8);g.fill();ell(x+w*.2,yy-8,w*.3,10);g.fill()}}
function hills(y,amp,col,seed,x0,x1){g.beginPath();g.moveTo(x0,y+400);for(let x=x0;x<=x1;x+=20){g.lineTo(x,y-amp*(.5+.5*nz(x*.006+seed))-amp*.3*nz(x*.02+seed*3))}g.lineTo(x1,y+400);g.closePath();g.fillStyle=col;g.fill()}
function forestLine(y,col,seed,x0,x1,h){g.fillStyle=col;g.beginPath();g.moveTo(x0,y+60);for(let x=x0;x<=x1;x+=9){const hh=h*(.5+hash(seed+x*.13)*.7);g.lineTo(x,y);g.lineTo(x+4.5,y-hh);g.lineTo(x+9,y)}g.lineTo(x1,y+60);g.closePath();g.fill()}
function birch(x,gy,h,seed,col){
  const sw=Math.sin(t*.9+seed)*4,lean=(hash(seed)-.5)*.08;
  const tx=x+lean*h,tw=7+h*.02;
  g.beginPath();g.moveTo(x-tw,gy);g.quadraticCurveTo(x-tw*.8+lean*h*.5,gy-h*.5,tx-tw*.4+sw*.3,gy-h);g.lineTo(tx+tw*.4+sw*.3,gy-h);g.quadraticCurveTo(x+tw*.8+lean*h*.5,gy-h*.5,x+tw,gy);g.closePath();fo(tc('#D9CCD6'));
  g.fillStyle=tc('#302B49');for(let i=0;i<9;i++){const yy=gy-h*hash(seed+i*2.1)*.9,xx=lerp(x,tx,(gy-yy)/h);g.fillRect(xx-tw*.6+hash(i+seed)*3,yy,tw*(.5+hash(seed+i)*.6),2.2)}
  const fc=col||['#4F5470','#6E6A86','#C9926F'];
  // weeping crown: soft volume, then drooping branches covered with small leaf clusters
  for(let i=0;i<4;i++){ell(tx+sw*.7+(hash(seed+i*4.1)-.5)*h*.3,gy-h*(.7+hash(seed+i*1.9)*.25),h*.17,h*.13);g.fillStyle=rgba(tc(fc[0]),.45);g.fill()}
  for(let b=0;b<10;b++){
    const by=gy-h*(.48+hash(seed+b*1.3)*.5),k0=(gy-by)/h,bx=lerp(x,tx,k0)+sw*k0;
    const dir=(b%2?1:-1)*(.45+hash(seed+b)*.55),len=h*(.16+hash(seed+b*2.2)*.16),sy_=Math.sin(t*1.3+b+seed)*3;
    const cx_=bx+dir*len*.6,cy_=by-len*.22,ex=bx+dir*len+sy_,ey=by+len*.6;
    g.strokeStyle=tc('#3A3048');g.lineWidth=1.5;g.beginPath();g.moveTo(bx,by);g.quadraticCurveTo(cx_,cy_,ex,ey);g.stroke();
    for(let k=0;k<7;k++){const u=k/6,px=lerp(lerp(bx,cx_,u),lerp(cx_,ex,u),u),py=lerp(lerp(by,cy_,u),lerp(cy_,ey,u),u)+4,r=h*.042*(1.15-u*.45);
      ell(px,py,r*1.35,r);g.fillStyle=tc(k%3?fc[0]:fc[1]);g.fill();ell(px+r*.35,py-r*.35,r*.6,r*.38);g.fillStyle=rgba(tc(fc[2]),.5);g.fill()}
  }
}
function izba(x,gy,w,h,seed,lit,smokeOn){
  const wall=tc('#6B4A4E'),log=tc('#4A3442'),roof=tc('#3E3048'),rl=tc('#5E4A62');
  const rh=h*.75;
  // wall
  g.beginPath();g.rect(x-w/2,gy-h,w,h);fo(wall);
  g.strokeStyle=log;g.lineWidth=2;for(let y=gy-h+10;y<gy;y+=12){g.beginPath();g.moveTo(x-w/2,y);g.lineTo(x+w/2,y);g.stroke()}
  for(let y=gy-h+4;y<gy;y+=12){for(const sd of[-1,1]){ell(x+sd*(w/2+3),y,5,5.5);fo(tc('#8A6A64'),.6)}}
  brush(x-w/2,gy-h,w,h,rgba(tc('#8A6A64'),1),seed,10,.25);
  // roof
  g.beginPath();g.moveTo(x-w/2-16,gy-h+4);g.lineTo(x,gy-h-rh);g.lineTo(x+w/2+16,gy-h+4);g.closePath();fo(roof);
  g.strokeStyle=rl;g.lineWidth=2;for(let i=1;i<7;i++){const u=i/7;g.beginPath();g.moveTo(lerp(x,x-w/2-16,u),lerp(gy-h-rh,gy-h+4,u));g.lineTo(lerp(x,x+w/2+16,u),lerp(gy-h-rh,gy-h+4,u));g.stroke()}
  // gable with carved board
  g.beginPath();g.moveTo(x-w*.3,gy-h);g.lineTo(x,gy-h-rh*.75);g.lineTo(x+w*.3,gy-h);g.closePath();fo(tc('#5A3E48'),.8);
  g.beginPath();g.moveTo(x,gy-h-rh-2);g.lineTo(x,gy-h-rh+16);ol(1.2);
  // okno
  const wx=x,wy=gy-h*.55,ww=w*.22,wh=h*.32;
  g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);g.fillStyle=lit>0?mixc('#2A2440','#FFB36B',lit):'#2A2440';g.fill();ol();
  if(lit>0)glow(wx,wy,ww*1.6,'#FFB36B',.35*lit);
  g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2.5;g.stroke();
  g.beginPath();g.moveTo(wx-ww*.75,wy-wh*.6);g.lineTo(wx,wy-wh*.95);g.lineTo(wx+ww*.75,wy-wh*.6);g.lineTo(wx+ww*.7,wy-wh*.5);g.lineTo(wx-ww*.7,wy-wh*.5);g.closePath();fo(tc('#B9A6A2'),.8);
  g.beginPath();g.rect(wx-ww*.7,wy+wh*.5,ww*1.4,5);fo(tc('#B9A6A2'),.8);
  // chimney + smoke
  const chx=x+w*.22,chy=gy-h-rh*.42;g.beginPath();g.rect(chx-7,chy-24,14,28);fo(tc('#4A3A48'));
  if(smokeOn)smoke(chx,chy-26,seed,.5);
}
function smoke(x,y,seed,a){for(let i=0;i<9;i++){const u=((t*.18+i/9+hash(seed+i)*.1)%1),r=6+u*26;g.fillStyle=rgba(tc('#B9A6C2'),a*(1-u)*(u*4>1?1:u*4));ell(x+u*30+Math.sin(t*.8+i)*6*u,y-u*120,r,r*.8);g.fill()}}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function ripples(x,y,w,t0,col,a){for(let i=0;i<3;i++){const u=((t-t0)*.5+i/3)%1;if(t<t0)continue;g.strokeStyle=rgba(col,a*(1-u));g.lineWidth=1.5;ell(x,y,w*(.2+u),w*(.2+u)*.32);g.stroke()}}
function fenceW(x0,x1,gy,h,seed){g.strokeStyle=tc('#5A4450');for(let x=x0;x<=x1;x+=22){g.beginPath();g.moveTo(x,gy);g.lineTo(x+(hash(seed+x)-.5)*4,gy-h);g.lineWidth=5;g.stroke()}g.lineWidth=3;for(let k=0;k<4;k++){g.strokeStyle=tc(k%2?'#6B5260':'#4E3A4A');g.beginPath();g.moveTo(x0,gy-h*.2-k*h*.18);for(let x=x0;x<=x1;x+=11)g.lineTo(x,gy-h*.2-k*h*.18+((x/11+k)%2?3:-3));g.stroke()}}
function panel(x,y,w,h,a,frame,glowA){
  if(a<=0)return;
  g.save();g.globalAlpha*=a;
  if(glowA>0){g.shadowColor=rgba(frame||'#E1C8B8',.8*glowA);g.shadowBlur=24}
  g.beginPath();g.roundRect(x,y,w,h,14);g.fillStyle=rgba('#241F4A',.55);g.fill();g.shadowBlur=0;
  const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,rgba('#E1C8B8',.18));gr.addColorStop(.25,rgba('#E1C8B8',.04));gr.addColorStop(1,rgba('#6C4377',.12));g.fillStyle=gr;g.fill();
  g.strokeStyle=rgba(frame||'#E1C8B8',.9);g.lineWidth=2;g.stroke();
  g.beginPath();g.roundRect(x+5,y+5,w-10,h-10,10);g.strokeStyle=rgba(frame||'#E1C8B8',.25);g.lineWidth=1;g.stroke();
  g.restore();
}
function bar(x,y,w,h,v,col,a,blinkA){g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,h/2);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
  const vv=cl(v,0,1);if(vv>.001){g.beginPath();g.roundRect(x,y,Math.max(h,w*vv),h,h/2);const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,mixc(col,'#FFFFFF',.35));gr.addColorStop(1,col);g.fillStyle=gr;g.fill();g.shadowColor=col;g.shadowBlur=10*(blinkA||.4);g.fill()}
  g.restore()}
function ticks(x,y,w,h,n,a){g.save();g.strokeStyle=rgba('#1F2236',.45*a);g.lineWidth=1;for(let i=1;i<n;i++){const xx=x+w*i/n;g.beginPath();g.moveTo(xx,y+2);g.lineTo(xx,y+h-2);g.stroke()}g.restore()}
function icon(kind,x,y,s,a){g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha*=a;g.lineJoin='round';g.lineCap='round';const ow=2/s;
  const st=(c)=>{g.fillStyle=c;g.fill();g.strokeStyle='#1F2236';g.lineWidth=ow;g.stroke()};
  if(kind==='wood'){g.beginPath();g.roundRect(-12,-5,22,10,5);st('#A0704A');ell(10,0,4,5);st('#D8A878');g.beginPath();g.arc(10,0,2,0,7);g.strokeStyle='#8A5A3A';g.lineWidth=1;g.stroke()}
  if(kind==='iron'){g.beginPath();g.moveTo(-11,5);g.lineTo(-7,-5);g.lineTo(7,-5);g.lineTo(11,5);g.closePath();st('#8C8FA3');g.beginPath();g.moveTo(-6,-3);g.lineTo(5,-3);g.strokeStyle='#D8DAE6';g.lineWidth=1.5;g.stroke()}
  if(kind==='stone'){blob([[-10,4],[-8,-5],[0,-8],[9,-4],[11,4],[2,7]]);st('#7D7890');ell(-3,-3,3,2);g.fillStyle='#A8A2B8';g.fill()}
  if(kind==='grain'){for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*4,9);g.lineTo(i*5,-4);g.strokeStyle='#C89040';g.lineWidth=2;g.stroke();ell(i*5,-6,2.6,5,i*.3);st('#E0B060')}}
  if(kind==='food'){ell(0,1,11,8);st('#C88A50');g.strokeStyle='#8A5A3A';g.lineWidth=1.4;for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*5-2,-3);g.lineTo(i*5+2,1);g.stroke()}}
  if(kind==='happy'){ell(0,0,10,10);st('#FFCF9A');g.beginPath();g.arc(0,1,5,.3,Math.PI-.3);g.strokeStyle='#1F2236';g.lineWidth=1.6;g.stroke();ell(-3.5,-3,1.3,1.6);g.fillStyle='#1F2236';g.fill();ell(3.5,-3,1.3,1.6);g.fill()}
  if(kind==='well'){g.beginPath();g.rect(-9,-1,18,9);st('#8A6A58');g.beginPath();g.moveTo(-11,-6);g.lineTo(0,-13);g.lineTo(11,-6);g.closePath();st('#6B5A60');g.beginPath();g.moveTo(-8,-6);g.lineTo(-8,-1);g.moveTo(8,-6);g.lineTo(8,-1);g.stroke()}
  if(kind==='bench'){g.beginPath();g.rect(-11,-2,22,4);st('#A07A60');g.beginPath();g.moveTo(-8,2);g.lineTo(-8,8);g.moveTo(8,2);g.lineTo(8,8);g.strokeStyle='#1F2236';g.lineWidth=2;g.stroke();g.beginPath();g.rect(-11,-10,22,4);st('#A07A60')}
  if(kind==='roof'){g.beginPath();g.moveTo(-11,6);g.lineTo(-11,-2);g.lineTo(0,-10);g.lineTo(11,-2);g.lineTo(11,6);g.closePath();st('#7A5A68')}
  if(kind==='road'){g.beginPath();g.moveTo(-4,-9);g.lineTo(4,-9);g.lineTo(10,9);g.lineTo(-10,9);g.closePath();st('#6A5468')}
  if(kind==='axe'){g.beginPath();g.moveTo(-8,9);g.lineTo(6,-7);g.strokeStyle='#A0704A';g.lineWidth=3;g.stroke();g.beginPath();g.moveTo(2,-11);g.quadraticCurveTo(12,-10,11,0);g.lineTo(5,-5);g.closePath();st('#8C8FA3')}
  if(kind==='person'){ell(0,-5,4.5,4.5);st('#C98972');g.beginPath();g.moveTo(-7,9);g.quadraticCurveTo(-7,0,0,0);g.quadraticCurveTo(7,0,7,9);g.closePath();st('#B9A6A2')}
  if(kind==='warn'){g.beginPath();g.moveTo(0,-10);g.lineTo(10,8);g.lineTo(-10,8);g.closePath();st('#E0505A');g.fillStyle='#1F2236';g.fillRect(-1.2,-4,2.4,7);ell(0,5,1.4,1.4);g.fill()}
  g.restore()}
function scribble(x,y,w,seed,col,a){g.save();g.strokeStyle=rgba(col,a);g.lineWidth=1.8;g.lineCap='round';g.beginPath();g.moveTo(x,y);const n=Math.floor(w/7);for(let i=1;i<=n;i++){const xx=x+i*w/n,up=hash(seed+i)>.7?-7:-3;g.quadraticCurveTo(xx-w/n*.6,y+up,xx-w/n*.2,y+(hash(seed+i*2)>.5?2:0))}g.stroke();g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function toScreen(x,y,f){const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f,q=rot((x-cx)*z,(y-cy)*z,CAM.r*f);return [270+CAM.sx*f+q[0],480+CAM.sy*f+q[1]]}
function spark(x,y,r,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r*2.5,'#FFE6C4',.6*a);g.fillStyle=rgba('#FFF4EA',a);g.beginPath();g.moveTo(x,y-r);g.quadraticCurveTo(x+r*.12,y-r*.12,x+r,y);g.quadraticCurveTo(x+r*.12,y+r*.12,x,y+r);g.quadraticCurveTo(x-r*.12,y+r*.12,x-r,y);g.quadraticCurveTo(x-r*.12,y-r*.12,x,y-r);g.fill();g.restore()}
function grassRow(y,seed,n,x0,x1,h,col){g.lineCap='round';for(let i=0;i<n;i++){const x=x0+hash(seed+i)*(x1-x0),hh=h*(.5+hash(seed+i*3)*.7),sw=Math.sin(t*1.6+x*.05)*hh*.15;g.strokeStyle=col;g.lineWidth=2.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+sw*.3,y-hh*.6,x+sw+(hash(i)-.5)*10,y-hh);g.stroke()}}
function birds(){g.strokeStyle=rgba('#241F4A',.8);g.lineWidth=2;for(let i=0;i<5;i++){const x=((t*28+i*40+hash(i)*30)%900)-200,y=330+i*9+Math.sin(t*2+i)*4,f=Math.sin(t*9+i*2)*4;g.beginPath();g.moveTo(x-7,y-f);g.quadraticCurveTo(x-3,y-2,x,y);g.quadraticCurveTo(x+3,y-2,x+7,y-f);g.stroke()}}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function villageGround(T){
  const gr=g.createLinearGradient(0,600,0,1100);gr.addColorStop(0,mixc(PAL.ground,PAL.far,.5));gr.addColorStop(.25,PAL.ground);gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-1200,618,3600,1400);
  g.fillStyle=tc('#4A3848');g.beginPath();g.moveTo(-1200,676);for(let x=-1200;x<=2400;x+=40)g.lineTo(x,676+nz(x*.02)*4);g.lineTo(2400,770);for(let x=2400;x>=-1200;x-=40)g.lineTo(x,770+nz(x*.03+5)*5);g.closePath();g.fill();
  brush(-200,680,1200,90,'#6A5468',21,60,.35);
  for(const ry of[704,738]){g.strokeStyle=rgba('#1F2236',.55);g.lineWidth=4;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke();g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=1.5;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+3+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke()}
  for(const pd of[[150,740,60],[420,706,48],[700,738,70],[-150,706,50]]){ell(pd[0],pd[1],pd[2],7);const pg=g.createLinearGradient(pd[0]-pd[2],0,pd[0]+pd[2],0);pg.addColorStop(0,T.sky[1]);pg.addColorStop(.6,T.sky[2]);pg.addColorStop(1,T.moon?'#4B3463':'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);ripples(pd[0]+10,pd[1],pd[2]*.5,0,'#FFE6C4',.4)}
  grassRow(676,1,60,-600,1400,22,tc('#4F5470'));
}
const TOD={
  dawn:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[470,520],tint:'#6C4377',ta:.12,lit:.5},
  day:{sky:['#4B3463','#9A6A8E','#F2B895'],sun:[410,300],tint:'#F09A6C',ta:.04,lit:0},
  sunset:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[330,590],tint:'#F09A6C',ta:.14,lit:.8},
  night:{sky:['#120F2A','#241F4A','#4B3463'],sun:null,moon:[400,210],tint:'#241F4A',ta:.42,lit:1}
};
function villageWorld(o){
  const T=TOD[op(o,'tod','dawn')];TINT=T.tint;TA=T.ta;
  const bF=op(o,'bF',0),bM=op(o,'bM',0),bFg=op(o,'bFg',2.5);
  layer(0,()=>sky(T.sky[0],T.sky[1],T.sky[2],-150,620));
  layer(.06,()=>{if(T.sun)sun(T.sun[0],T.sun[1],20);if(T.moon){stars(60,5,-300,-200,1200,700);glow(T.moon[0],T.moon[1],110,'#E1C8B8',.22);ell(T.moon[0],T.moon[1],16,16);g.fillStyle='#E7DCE6';g.fill()}clouds(380,7,3,T.sky[2],.22,6);clouds(260,5,8,T.sky[1],.3,4)},bF*.5);
  layer(.2,()=>{if(!T.moon)birds();hills(575,42,mixc(PAL.far,T.sky[2],.32),1,-600,1300);forestLine(592,mixc(PAL.far,T.sky[1],.15),4,-600,1300,24);if(o.far)o.far()},bF);
  layer(.5,()=>{g.fillStyle=mixc(PAL.ground,PAL.far,.55);g.fillRect(-900,600,2600,300);
    izba(-120,622,150,90,1,T.lit,1);birch(30,628,170,2);izba(160,620,130,80,2,T.lit*.8,1);birch(300,628,200,5);izba(470,622,160,92,3,T.lit,1);birch(600,630,180,8);izba(760,620,140,86,4,T.lit*.7,1);fenceW(-300,900,640,26,3);if(o.mid)o.mid()},bM);
  layer(1,()=>{villageGround(T);if(o.main)o.main()},op(o,'bMain',0));
  if(op(o,'fg',1))layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
function candle(x,y,s){const fl=1+.08*Math.sin(t*13)+.05*Math.sin(t*23+1)+.04*nz(t*6);g.save();g.translate(x,y);g.scale(s,s);
  ell(0,0,26,7);fo(tc('#8C8FA3'));g.beginPath();g.rect(-8,-48,16,48);const cg=g.createLinearGradient(-8,0,8,0);cg.addColorStop(0,'#C8B0A0');cg.addColorStop(1,'#F2DCC8');g.fillStyle=cg;g.fill();ol(.8);
  g.beginPath();g.moveTo(-6,-46);g.quadraticCurveTo(-9,-36,-6,-30);ol(.6);
  glow(0,-64,60*fl,'#FFB36B',.35);g.save();g.translate(0,-50);g.rotate(Math.sin(t*3)*.08);g.beginPath();g.moveTo(0,-30*fl);g.quadraticCurveTo(9,-8,0,0);g.quadraticCurveTo(-9,-8,0,-30*fl);g.fillStyle='#FFCF9A';g.fill();g.beginPath();g.moveTo(0,-18*fl);g.quadraticCurveTo(4,-5,0,0);g.quadraticCurveTo(-4,-5,0,-18*fl);g.fillStyle='#FFF4EA';g.fill();g.restore();
  g.restore();return fl}
function hutInterior(o){
  const night=op(o,'night',1),red=op(o,'red',0),cd=op(o,'candle',1);
  TINT='#241F4A';TA=.22*night;
  layer(.6,()=>{
    g.fillStyle=tc('#4A3442');g.fillRect(-700,-500,1900,1700);
    for(let y=-480;y<1100;y+=38){const lg=g.createLinearGradient(0,y,0,y+38);lg.addColorStop(0,tc('#6B4A4E'));lg.addColorStop(.5,tc('#5A3E48'));lg.addColorStop(1,tc('#3A2836'));g.fillStyle=lg;g.fillRect(-700,y+2,1900,34);g.fillStyle=rgba('#1F2236',.6);g.fillRect(-700,y,1900,3)}
    brush(-300,-200,1100,1000,'#8A6A64',31,70,.18);
    for(let i=0;i<10;i++){ell(-200+hash(i+3)*900,-100+hash(i*5)*900,6,4);g.fillStyle=rgba('#2A1E2E',.6);g.fill()}
    // okno with night sky
    g.save();g.beginPath();g.rect(70,250,140,170);const wg=g.createLinearGradient(0,250,0,420);wg.addColorStop(0,'#120F2A');wg.addColorStop(1,mixc('#4B3463','#6C4377',.4));g.fillStyle=wg;g.fill();g.clip();stars(14,9,70,250,140,120);ell(170,295,13,13);g.fillStyle='#E7DCE6';g.fill();ell(176,291,11,11);g.fillStyle='#1A1636';g.fill();g.fillStyle=rgba('#241F4A',.9);g.beginPath();g.moveTo(70,400);for(let x=70;x<=210;x+=10)g.lineTo(x,388-hash(x)*16);g.lineTo(210,420);g.lineTo(70,420);g.closePath();g.fill();g.restore();
    g.beginPath();g.rect(70,250,140,170);ol(1.2);g.strokeStyle=tc('#B9A6A2');g.lineWidth=7;g.beginPath();g.moveTo(140,250);g.lineTo(140,420);g.moveTo(70,330);g.lineTo(210,330);g.stroke();
    g.beginPath();g.moveTo(52,246);g.lineTo(140,212);g.lineTo(228,246);g.lineTo(220,256);g.lineTo(60,256);g.closePath();fo(tc('#B9A6A2'));g.beginPath();g.rect(56,420,168,12);fo(tc('#B9A6A2'));
    // embroidered towel (rushnyk) beside the okno
    const sw=Math.sin(t*.9)*2;g.beginPath();g.moveTo(232,236);g.lineTo(262,236);g.lineTo(264+sw,400);g.lineTo(234+sw,400);g.closePath();fo(tc('#E7C6AD'),.8);g.strokeStyle=tc('#A0505A');g.lineWidth=3;for(let k=0;k<3;k++){g.beginPath();g.moveTo(236+sw,372+k*9);for(let x=0;x<6;x++)g.lineTo(238+x*5+sw,(x%2?366:372)+k*9);g.stroke()}
    // shelf with clay pots
    g.beginPath();g.rect(290,236,170,10);fo(tc('#6B4A4E'));for(let i=0;i<4;i++){const px=310+i*40,ph=26+hash(i+4)*14;g.beginPath();g.moveTo(px-12,236);g.quadraticCurveTo(px-18,236-ph*.6,px-7,236-ph);g.lineTo(px+7,236-ph);g.quadraticCurveTo(px+18,236-ph*.6,px+12,236);g.closePath();fo(tc(i%2?'#8A5A50':'#7A6A70'),.8)}
    // drying herbs swaying
    for(let i=0;i<3;i++){g.save();g.translate(320+i*42,120);g.rotate(Math.sin(t*.8+i)*.06);g.strokeStyle=tc('#5A4450');g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,40);g.stroke();for(let k=0;k<6;k++){ell((k-2.5)*4,48+k%3*10,4,16,(k-2.5)*.15);g.fillStyle=tc(k%2?'#6E6A86':'#4F5470');g.fill()}g.restore()}
    // whitewashed stove at right with ember mouth
    g.beginPath();g.moveTo(430,980);g.lineTo(430,180);g.quadraticCurveTo(430,150,460,150);g.lineTo(760,150);g.lineTo(760,980);g.closePath();const sg=g.createLinearGradient(430,0,600,0);sg.addColorStop(0,tc('#9C8494'));sg.addColorStop(.3,tc('#B9A6A2'));sg.addColorStop(1,tc('#8C7890'));g.fillStyle=sg;g.fill();ol();
    brush(440,170,200,700,'#E7C6AD',41,30,.2);g.beginPath();g.moveTo(462,600);g.lineTo(462,520);g.quadraticCurveTo(500,480,538,520);g.lineTo(538,600);g.closePath();g.fillStyle='#1F1626';g.fill();ol();
    const em=.5+.3*Math.sin(t*2.1)+.2*nz(t*3);glow(500,590,70,'#FFB36B',.45*em);ell(500,592,30,7);g.fillStyle=rgba('#FFB36B',.7*em);g.fill();
  },op(o,'bBack',2));
  layer(.85,()=>{g.fillStyle=tc('#3A2836');g.fillRect(-500,860,1500,500);g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=2;for(let i=-12;i<14;i++){g.beginPath();g.moveTo(270+i*40,860);g.lineTo(270+i*90,1300);g.stroke()}},op(o,'bBack',2)*.5);
  layer(1,()=>{
    if(o.main)o.main();
    // table: worn top, long embroidered cloth hiding the legs
    g.beginPath();g.moveTo(-80,690);g.lineTo(620,690);g.lineTo(620,716);g.lineTo(-80,716);g.closePath();const tg=g.createLinearGradient(0,690,0,716);tg.addColorStop(0,tc('#8A6A64'));tg.addColorStop(1,tc('#6B4A4E'));g.fillStyle=tg;g.fill();ol();
    brush(-60,692,660,22,'#B08A7A',51,30,.3);
    g.beginPath();g.moveTo(-80,714);g.lineTo(620,714);g.lineTo(624,940);for(let x=620;x>=-80;x-=35)g.quadraticCurveTo(x-17,948+Math.sin(x+t)*2,x-35,940);g.closePath();const cg=g.createLinearGradient(0,714,0,940);cg.addColorStop(0,tc('#B9A6A2'));cg.addColorStop(1,tc('#79677F'));g.fillStyle=cg;g.fill();ol();
    g.strokeStyle=tc('#A0505A');g.lineWidth=4;g.beginPath();for(let x=-80;x<=620;x+=14)g.lineTo(x,(x/14)%2?898:910);g.stroke();g.strokeStyle=rgba(tc('#79677F'),.8);g.lineWidth=2;for(let x=-40;x<620;x+=70){g.beginPath();g.moveTo(x,720);g.quadraticCurveTo(x+8,820,x-4,936);g.stroke()}
    // clay mug at left
    g.beginPath();g.moveTo(70,700);g.lineTo(74,660);g.lineTo(112,660);g.lineTo(116,700);g.closePath();fo(tc('#8A5A50'));g.beginPath();g.arc(118,680,10,-1.2,1.2);ol(1.2);
    if(cd>0)candle(455,702,1);
    if(o.front)o.front();
  });
  layer(1.45,()=>{g.fillStyle='#1A1424';g.beginPath();g.moveTo(-300,-80);g.lineTo(900,-80);g.lineTo(900,60);g.quadraticCurveTo(300,90,-300,40);g.closePath();g.fill();g.save();g.translate(80,40);g.rotate(Math.sin(t*.7)*.05);g.strokeStyle='#2A2036';g.lineWidth=3;g.beginPath();g.moveTo(0,0);g.lineTo(0,70);g.stroke();for(let k=0;k<5;k++){ell((k-2)*6,90+k%2*12,6,24);g.fillStyle='#2A2036';g.fill()}g.restore()},4);
  // light: night blue multiply, candle warm screen, optional red menu light
  g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.35*night);g.restore();
  if(cd>0){const c=toScreen(455,640,1),f=1+.06*Math.sin(t*13)+.05*nz(t*6);lampLight(c[0],c[1],430*CAM.z*.6+180,'#FFB36B',.38*cd*f)}
  const wn=toScreen(140,330,.6);beamStatic(wn,night);
  if(red>0){g.save();g.globalCompositeOperation='multiply';wash('#E0505A',.22*red);g.restore();lampLight(380,420,520,'#E0505A',.28*red)}
  motes(18,13,0,200,540,600,'#FFE6C4',.35*cd,1.5);
}
function beamStatic(wn,night){beam(wn[0],wn[1],wn[0]+260,wn[1]+520,60,160,'#6C4377',.16*night)}
const RES=[['wood','#A0704A',200],['iron','#8C8FA3',50],['stone','#7D7890',100],['grain','#E0B060',500],['food','#C88A50',500]];
function resPanel(x,y,w,o){
  const a=op(o,'a',1),v=o.v||{},ra=o.rows||[1,1,1,1,1,1],red=op(o,'red',-1),rA=op(o,'redA',0),rh=50,h=74+6*rh;
  if(a<=0)return h;
  panel(x,y,w,h,a,'#E1C8B8',.7);
  g.save();g.globalAlpha*=a;
  medallion(x+34,y+36,15,0,0,.25);
  g.fillStyle=rgba('#E1C8B8',.85);g.beginPath();g.roundRect(x+62,y+26,w*.42,7,3.5);g.fill();
  g.fillStyle=rgba('#E1C8B8',.4);g.beginPath();g.roundRect(x+62,y+40,w*.26,5,2.5);g.fill();
  g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(x+16,y+64);g.lineTo(x+w-16,y+64);g.stroke();
  for(let i=0;i<6;i++){const q=cl(ra[i]||0,0,1);if(q<=0)continue;const yy=y+74+i*rh,dx=(1-eout(q))*24;g.save();g.globalAlpha*=q;
    if(i<5){const R_=RES[i],val=op(v,R_[0],0),isR=red===i;
      if(isR&&rA>0){g.save();g.shadowColor='#E0505A';g.shadowBlur=16*rA;g.beginPath();g.roundRect(x+10+dx,yy+2,w-20,rh-8,10);g.fillStyle=rgba('#E0505A',.12*rA);g.fill();g.strokeStyle=rgba('#E0505A',rA);g.lineWidth=2;g.stroke();g.restore()}
      icon(R_[0],x+34+dx,yy+20,1.25,1);
      const bw=w-110;bar(x+60+dx,yy+12,bw,16,val/R_[2],isR?mixc(R_[1],'#E0505A',.4+.6*rA):R_[1],1,isR?rA:.4);ticks(x+60+dx,yy+12,bw,16,10,1);
      ell(x+w-30+dx,yy+20,6,6);g.fillStyle=isR?rgba('#E0505A',.4+.6*rA):rgba(R_[1],.9);g.fill();
    }else{icon('happy',x+34+dx,yy+20,1.25,1);const hv=op(v,'happy',0)/100,sw=(w-110)/10;
      for(let k=0;k<10;k++){const f=cl(hv*10-k,0,1);g.beginPath();g.roundRect(x+60+dx+k*sw,yy+10,sw-4,20,4);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.4);g.lineWidth=1;g.stroke();if(f>0){g.beginPath();g.roundRect(x+60+dx+k*sw,yy+10,Math.max(2,(sw-4)*f),20,4);g.fillStyle='#FFCF9A';g.fill()}}}
    g.restore()}
  g.restore();return h;
}
function star5(x,y,r){g.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.45:r;g.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr)}g.closePath()}
const PROB=[['well',5],['roof',2],['road',3]];
function problemsPanel(x,y,w,o){
  const a=op(o,'a',1),ra=o.rows||[1,1,1],hi=op(o,'hi',0),rh=52,h=44+3*rh;if(a<=0)return h;
  panel(x,y,w,h,a,'#E0505A',.5);
  g.save();g.globalAlpha*=a;
  icon('warn',x+26,y+24,1,1);g.fillStyle=rgba('#E0505A',.8);g.beginPath();g.roundRect(x+44,y+20,w*.4,6,3);g.fill();
  for(let i=0;i<3;i++){const q=cl(ra[i]||0,0,1);if(q<=0)continue;const yy=y+40+i*rh;g.save();g.globalAlpha*=q;
    if(i===0&&hi>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=20*hi;g.beginPath();g.roundRect(x+8,yy+2,w-16,rh-6,10);g.fillStyle=rgba('#FFCF9A',.18*hi);g.fill();g.strokeStyle=rgba('#FFCF9A',.9*hi);g.lineWidth=2;g.stroke();g.restore()}
    const bl=.5+.5*Math.sin(t*7+i*1.3);ell(x+20,yy+24,5,5);g.fillStyle=rgba('#E0505A',.4+.6*bl);g.fill();
    icon(PROB[i][0],x+44,yy+24,1.2,1);scribble(x+66,yy+28,w*.26,i*5+3,'#E1C8B8',.6);
    for(let k=0;k<PROB[i][1];k++){const s_=i===0?1+.25*hi*Math.sin(t*6+k):1;star5(x+w-22-k*19,yy+24,7*s_);g.fillStyle=i===0?'#FFCF9A':rgba('#FFCF9A',.65);g.fill()}
    g.restore()}
  g.restore();return h;
}
// ---- scene
// SCENE 3 — «Главное окно в избе» (28.13 – 41.13)
// shots: 0 wide exterior: lit izba at night | 1 insert: the bolt slides | 2 medium: medallion out, okno unrolls |
//        3 over-shoulder: wood, iron | 4 UI: stone, grain, food | 5 CU through the glass: happiness 41/100 | 6 layout: problems blink
const ST=[0,1.5,2.85,4.55,7.3,9.95,11.3];
const S=shot(t,ST);
const WT=[5.7,6.7,7.55,8.5,9.5,10.3]; // spoken numbers: wood, iron, stone, grain, food, happiness
const VAL={wood:140,iron:23,stone:60,grain:410,food:380};
const RX=208,RY=128,RK=.84,RW=250,QX=250,QY=470,QK=.84,QW=210;
const tTouch=3.95,tOpen=4.0;

// ---------- helpers
function qFireflies(n,seed,x0,y0,w,h,a){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+hash(seed+i*3)*w+Math.sin(t*(.5+ph)+i)*30,y=y0+hash(seed+i*5)*h+Math.cos(t*(.7+ph*.5)+i*2)*18,f=Math.max(0,Math.sin(t*(1.5+ph*2)+i*3));if(f<.05)continue;glow(x,y,10,'#FFE6A0',.5*f*a);ell(x,y,1.6,1.6);g.fillStyle=rgba('#FFF4D0',f*a);g.fill()}}
function qRows(){return WT.map((w,i)=>sm(w-.32,w-.1,t))}
function qVals(){const v={};['wood','iron','stone','grain','food'].forEach((k,i)=>{v[k]=VAL[k]*eout((t-WT[i]+.2)/.45)});v.happy=41*sm(WT[5],11.2,t);return v}
function hutHero(o2){
  const o={x:150,y:1000,s:1.35,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],t,ls:1,rimC:'#9AB0D0',rimA:.55*sm(tOpen,4.6,t)};
  const pull=sm(2.95,3.3,t),out=sm(3.32,3.72,t),low=sm(4.4,5.2,t);
  o.medal=t<3.32?'hidden':'none';
  o.hr=[lerp(lerp(lerp(34,8,pull),44,out),40,low),lerp(lerp(lerp(-226,-288,pull),-262,out),-230,low)];
  o.hl=[70,-224];
  // reaction: eyes → head → body when the okno opens
  const wow=sm(tOpen+.02,tOpen+.15,t),hd=sm(tOpen+.1,tOpen+.35,t);
  let look=[.25,.5];if(t<2.95)look=[.6,.2];if(t>tOpen)look=[lerp(.3,.65,wow),lerp(.5,-.5,wow)];
  if(t>5.3)look=[.65,lerp(-.55,.05,sm(5.4,10.4,t))];
  if(t>11.3)look=[.85,lerp(.05,.35,sm(11.35,11.6,t))];
  const worry=sm(11.45,11.8,t);
  o.em={look,brow:.6*wow*(1-sm(5,6,t))+.15*sm(6,7,t)-.1*worry,browIn:.2*pull*(1-wow)+.25*sm(9.6,10.4,t)+.3*worry,open:.35*wow*(1-sm(4.6,5.2,t))+.08*worry,eyeOpen:1+.25*wow*(1-sm(5,5.8,t))+.1*worry,smile:.1*sm(5.8,6.5,t)*(1-sm(9.8,10.4,t)),blink:t>tOpen+.25&&t<tOpen+.37?1:0};
  o.tilt=.12*pull*(1-out)-.12*hd+.06*sm(5.6,10.4,t)+.04*worry;o.turn=.08*hd;o.lean=.04+.04*sm(5,6,t)+.06*worry;
  const gl=.3+.7*Math.max(0,1-Math.abs(t-tTouch)/.25)+.2*Math.sin(t*3)*sm(4.5,5,t);
  if(t>=3.32)o.itemR=(gg,ex,ey,an)=>{ // medallion on its cord, pulled out from the collar
    g.strokeStyle=tc(HERO.cord);g.lineWidth=1.6;g.beginPath();g.moveTo(4,-292);g.quadraticCurveTo((ex+4)/2,(ey-292)/2+16,ex+4,ey-10);g.stroke();
    medallion(ex+4,ey-2,9,an,0,gl)};
  if(o2)Object.assign(o,o2);
  return o;
}
// the main okno (resource table) and problems list, drawn in world space over the table
function qPanels(pa,unroll,probA){
  const op_=eout((t-tOpen)/.55),cx=lerp(209,RX+RW*RK/2,op_),cy=lerp(660,RY+187*RK,op_),sc=lerp(.06,1,op_);
  if(pa>0){g.save();g.translate(cx,cy);g.scale(sc,sc);g.translate(-RW*RK/2,-187*RK);g.scale(RK,RK);
    g.save();g.beginPath();g.rect(-30,-30,RW+60,(374+60)*unroll);g.clip();
    const h=resPanel(0,0,RW,{a:pa,v:qVals(),rows:qRows()});
    // a gold spark at the end of each bar exactly on its spoken number
    for(let i=0;i<5;i++){const k=Math.max(0,1-Math.abs(t-WT[i]-.15)/.25);if(k>0){const R_=RES[i],xx=60+(RW-110)*VAL[R_[0]]/R_[2],yy=74+i*50+20;spark(xx,yy,14*k+2,k)}}
    {const k=Math.max(0,1-Math.abs(t-11.2)/.3);if(k>0)spark(60+(RW-110)*.41,74+5*50+20,16*k+2,k)}
    g.restore();
    if(unroll<1){g.fillStyle=rgba('#FFE6C4',.9*pa);g.fillRect(-6,(374)*unroll-2,RW+12,4);glow(RW/2,374*unroll,120,'#E1C8B8',.5*pa)}
    g.restore()}
  if(probA>0){g.save();g.translate(QX,QY);g.scale(QK,QK);const bl=.5+.5*Math.sin(t*9);
    problemsPanel(0,0,QW,{a:probA*(.8+.2*bl),rows:[sm(11.35,11.55,t),sm(11.5,11.7,t),sm(11.65,11.85,t)],hi:0});
    g.save();g.globalAlpha=probA*.6*bl;g.shadowColor='#E0505A';g.shadowBlur=30;g.beginPath();g.roundRect(0,0,QW,44+3*52,14);g.strokeStyle='#E0505A';g.lineWidth=3;g.stroke();g.restore();
    g.restore()}
}
function panelA(){return t<tOpen?0:sm(tOpen,tOpen+.15,t)}

// ---------------- shot 0: wide exterior — the hero's izba glows in the night, a shadow passes the okno
if(S.i===0){
  const u=S.u;setCam(272,598-u*14,1.18+u*.08,0);
  villageWorld({tod:'night',bF:1,bM:1.2,main:()=>{
    const X=270,GY_=716,W_=300,H_=190;
    birch(70,GY_,330,13);
    izba(X,GY_,W_,H_,5,1,1);
    // shadow of the hero crossing the lit okno
    const wx=X,wy=GY_-H_*.55,ww=W_*.22,wh=H_*.32,sx=lerp(wx-ww*.9,wx+ww*.9,sm(.45,1.35,t));
    g.save();g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);g.clip();g.fillStyle=rgba('#4A2E3A',.75);ell(sx,wy-4,9,10);g.fill();g.beginPath();g.moveTo(sx-24,wy+wh/2);g.quadraticCurveTo(sx-20,wy+8,sx,wy+6);g.quadraticCurveTo(sx+20,wy+8,sx+24,wy+wh/2);g.fill();g.restore();
    g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2.5;g.stroke();
    // plank door at the left with warm light leaking at its edge
    const dx=X-112;g.beginPath();g.rect(dx-26,GY_-118,52,118);fo(tc('#4A3442'));g.strokeStyle=tc('#3A2836');g.lineWidth=2;for(let k=-1;k<=1;k++){g.beginPath();g.moveTo(dx+k*13,GY_-116);g.lineTo(dx+k*13,GY_);g.stroke()}
    const lk=1-sm(1.1,1.45,t)*.7;g.fillStyle=rgba('#FFB36B',.85*lk);g.fillRect(dx+25,GY_-116,2.5,116);glow(dx+27,GY_-60,40,'#FFB36B',.3*lk);
    g.beginPath();g.rect(dx-32,GY_-124,64,8);fo(tc('#5A3E48'));
    ell(dx,GY_+4,40,6);g.fillStyle=rgba('#FFB36B',.15*lk);g.fill();
    fenceW(380,700,GY_,30,7);
    grassRow(772,2,50,-600,1400,26,tc('#3E3A58'))}});
  // the okno spills warm light; fireflies over the grass
  const w=toScreen(270,611,1);lampLight(w[0],w[1],170*CAM.z,'#FFB36B',.28+.04*Math.sin(t*11)+.03*nz(t*5));
  layer(1,()=>qFireflies(12,4,-40,560,620,200,1));
  layer(1.4,()=>{g.save();g.translate(520,-20);g.rotate(Math.sin(t*.8)*.03);for(let i=0;i<5;i++){g.strokeStyle='#1A1424';g.lineWidth=2;g.beginPath();g.moveTo(-i*30,0);g.quadraticCurveTo(-i*30-10,120,-i*34+Math.sin(t*1.2+i)*6,240+i*20);g.stroke();for(let k=0;k<8;k++){ell(-i*32-6+Math.sin(t*1.2+i)*k,40+k*26+i*4,7,4,.6);g.fillStyle='#1A1424';g.fill()}}g.restore()},5);
}
// ---------------- shot 1: insert — inside, the hand slides the bolt home
if(S.i===1){
  const lt=S.lt,u=S.u;setCam(270,470,1.02+u*.07,-.02+u*.02);
  const bs=lerp(lerp(0,-12,sm(.2,.32,lt)),118,ease((lt-.36)/.36)),slam=.72+ST[1];
  CAM.sx=kick(t,slam,3.5,.28);
  TINT='#241F4A';TA=.18;
  layer(.85,()=>{
    // door planks lit by the candle
    for(let i=0;i<5;i++){const x=-60+i*108;const pg=g.createLinearGradient(x,0,x+104,0);pg.addColorStop(0,tc('#5A3E48'));pg.addColorStop(.5,tc('#7A5654'));pg.addColorStop(1,tc('#4A3442'));g.fillStyle=pg;g.fillRect(x,-100,104,1200);g.fillStyle=rgba('#1F2236',.7);g.fillRect(x+104,-100,4,1200);brush(x,-60,104,1000,'#9A7468',61+i,26,.3)}
    for(let i=0;i<5;i++)for(const y of[150,790]){ell(-8+i*108,y,5,5);fo(tc('#3A3048'),.6)}
    // iron straps
    for(const y of[150,790]){g.beginPath();g.rect(-80,y-14,520,28);fo(tc('#3E3A4E'));g.strokeStyle=rgba('#8C8FA3',.5);g.lineWidth=2;g.beginPath();g.moveTo(-80,y-10);g.lineTo(440,y-10);g.stroke()}
    // jamb (log wall) at the right; a cold moonlit crack between door and jamb
    g.beginPath();g.rect(446,-100,200,1200);fo(tc('#4A3442'));for(let y=-80;y<1100;y+=60){g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=3;g.beginPath();g.moveTo(446,y);g.lineTo(640,y+6);g.stroke()}
    const ck=1-sm(.45,.75,lt)*.6;g.fillStyle=rgba('#9AB0D0',.9*ck);g.fillRect(440,-100,5,1200);g.save();g.globalCompositeOperation='screen';glow(442,470,80,'#9AB0D0',.25*ck);g.restore();
  },1.2);
  layer(1,()=>{
    const by=470;
    // staples on the door and the receiving staple on the jamb
    const staple=(x)=>{g.beginPath();g.moveTo(x-22,by-26);g.lineTo(x-22,by+26);g.lineTo(x+22,by+26);g.lineTo(x+22,by-26);g.lineWidth=10+2*LW;g.strokeStyle=PAL.out;g.stroke();g.lineWidth=10;g.strokeStyle=tc('#6E6A86');g.stroke();ell(x-22,by-30,6,6);fo(tc('#8C8FA3'));ell(x+22,by-30,6,6);fo(tc('#8C8FA3'))};
    // shadow of bolt and hand on the planks
    g.fillStyle=rgba('#1F2236',.35);g.beginPath();g.roundRect(30+bs-14,by+8,400,40,18);g.fill();ell(150+bs-20,by+120,90,70);g.fill();
    // the bolt (wooden bar) with its knob
    g.beginPath();g.roundRect(30+bs,by-17,400,34,10);const bg=g.createLinearGradient(0,by-17,0,by+17);bg.addColorStop(0,tc('#B08A6A'));bg.addColorStop(1,tc('#6B4A3E'));g.fillStyle=bg;g.fill();ol();
    brush(40+bs,by-14,380,28,'#D0A888',71,16,.4);
    staple(110);staple(300);staple(486);
    const kx=170+bs;segs([[kx,by,kx-6,by+60,20,tc('#8A6A58')]]);
    // the hero's right hand grips the knob
    g.save();g.translate(kx-8,by+70);g.rotate(-.25);g.scale(1.2,1.2);const sk=tc(SKIN[0]);
    segs([[-250,240,-30,50,66,tc(HERO.top[1])],[-60,78,-16,40,72,tc(HERO.top[0])]]);segLight(-250,240,-30,50,66,'#E7C6AD',.3,1);g.strokeStyle=rgba(HERO.top[1],.8);g.lineWidth=3;g.beginPath();g.moveTo(-150,150);g.quadraticCurveTo(-120,120,-128,96);g.moveTo(-110,190);g.quadraticCurveTo(-90,160,-80,150);g.stroke();
    ell(0,0,44,36,-.3);fo(sk);for(let i=0;i<4;i++)segs([[18,-22+i*16,36,-16+i*16,15,sk]]);segs([[-24,-18,10,-40,17,sk]]);
    g.strokeStyle=rgba(SKIN[1],.6);g.lineWidth=2;g.beginPath();g.moveTo(-20,10);g.quadraticCurveTo(0,20,22,8);g.stroke();g.restore();
    if(t>slam){const q=cl((t-slam)/.5,0,1);for(let i=0;i<8;i++){ell(450+hash(i)*30+q*30*hash(i+2),by-20+hash(i+5)*40-q*20,4*(1-q)+1,4*(1-q)+1);g.fillStyle=rgba('#E7C6AD',.6*(1-q));g.fill()}}
  });
  layer(1.5,()=>{g.save();g.translate(30,-30);g.rotate(Math.sin(t*.9)*.05);g.strokeStyle='#2A1E2E';g.lineWidth=4;g.beginPath();g.moveTo(0,0);g.lineTo(0,90);g.stroke();for(let k=0;k<7;k++){ell((k-3)*9,120+k%3*18,9,40,(k-3)*.12);g.fillStyle='#2A2036';g.fill()}g.restore()},7);
  g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.3);g.restore();
  lampLight(60,760,560,'#FFB36B',.4*(1+.06*Math.sin(t*13)+.05*nz(t*6)));
  motes(20,11,0,150,540,700,'#FFE6C4',.4,1.8);
}
// ---------------- shot 2: medium — medallion pulled out, touched; the okno unrolls over the table
if(S.i===2){
  const u=S.u,cm=ease((t-tOpen)/.6);setCam(lerp(lerp(196,204,u),262,cm),lerp(604,430,cm),lerp(2.0+u*.1,1.22,cm),.01);
  CAM.sy=kick(t,tOpen,3,.3);
  hutInterior({night:1,candle:1,bBack:2,main:()=>person(HERO,hutHero())});
  layer(1,()=>{qPanels(panelA(),sm(4.1,4.55,t),0);const k=Math.max(0,1-Math.abs(t-tTouch)/.3);if(k>0){const hx_=150+44*1.35,hy_=1000-262*1.35;for(let r=0;r<2;r++){g.strokeStyle=rgba('#FFE6C4',k*(1-r*.4));g.lineWidth=2;ell(hx_+6,hy_,(1-k)*60+10+r*14,(1-k)*60+10+r*14);g.stroke()}}});
  const pc=toScreen(313,285,1);lampLight(pc[0],pc[1],320*CAM.z,'#9AB0D0',.22*panelA());
}
// ---------------- shot 3: over the shoulder — wood and iron rows grow on their numbers
if(S.i===3){
  const u=S.u;setCam(318-u*4,300-u*6,1.6+u*.1,-.01);
  hutInterior({night:1,candle:1,bBack:3,main:()=>{}});
  layer(1,()=>qPanels(1,1,0));
  const pc=toScreen(313,285,1);lampLight(pc[0],pc[1],300*CAM.z,'#9AB0D0',.2);
  // the hero in the foreground, in profile, lit by the glass
  TA=.3;
  layer(1.12,()=>person(HERO,hutHero({x:214,y:1000,s:2.05,yaw:1.05,hr:[60,-200],hl:[70,-205],rimC:'#E1C8B8',rimA:.9,ls:1,turn:-.05,tilt:-.08})));
  g.save();g.globalCompositeOperation='multiply';const sh=g.createLinearGradient(0,0,200,0);sh.addColorStop(0,'rgba(36,31,74,.55)');sh.addColorStop(1,'rgba(36,31,74,0)');g.fillStyle=sh;g.fillRect(0,0,540,960);g.restore();
}
// ---------------- shot 4: UI — stone, grain, food fill in, camera slides down the table
if(S.i===4){
  const u=S.u;setCam(318,lerp(318,372,ease(u)),2.25+u*.12,.01);
  hutInterior({night:1,candle:1,bBack:6,main:()=>person(HERO,hutHero())});
  wash('#1F2236',.25);
  layer(1,()=>qPanels(1,1,0));
  wash('#9AB0D0',.05,'screen');
  motes(16,17,0,100,540,640,'#E1C8B8',.4,1.6);
}
// ---------------- shot 5: close-up through the glass — the gold happiness scale fills to 41 of 100
if(S.i===5){
  const u=S.u;setCam(160,lerp(584,578,u),4.2+u*.25,0);
  hutInterior({night:1,candle:1,bBack:5,main:()=>person(HERO,hutHero({yaw:-.28,turn:0,tilt:.06,em:{look:[.05,.55],brow:.1,browIn:lerp(0,.3,sm(10.6,11.2,t)),smile:.08,eyeOpen:1},rimC:'#FFCF9A',rimA:.35,ls:1}))});
  lampLight(330,660,420,'#9AB0D0',.3);
  // the near edge of the glass with the happiness row (seen from behind the panel)
  const hv=41*sm(WT[5],11.2,t)/100,x0=40,y0=598,w0=460;
  panel(x0,y0,w0,92,1,'#FFCF9A',.5+.5*Math.max(0,1-Math.abs(t-11.2)/.3));
  g.save();icon('happy',x0+40,y0+46,1.6,1);const sw=(w0-110)/10;
  for(let k=0;k<10;k++){const f=cl(hv*10-k,0,1),xx=x0+80+k*sw;g.beginPath();g.roundRect(xx,y0+28,sw-6,36,6);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.45);g.lineWidth=1.5;g.stroke();
    if(f>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=14;g.beginPath();g.roundRect(xx,y0+28,Math.max(3,(sw-6)*f),36,6);g.fillStyle='#FFCF9A';g.fill();g.restore()}
    if(f>0&&f<1)spark(xx+(sw-6)*f,y0+46,12,.9)}
  g.restore();
  wash('#9AB0D0',.04,'screen');
  motes(16,19,0,120,540,560,'#FFE6C4',.45,2.2);
}
// ---------------- shot 6: layout — hero at the table, main okno, the problems list blinks red
if(S.i===6){
  const u=S.u;setCam(lerp(300,296,u),lerp(496,500,u),1.22+u*.08,0);
  const probA=sm(11.32,11.5,t);
  hutInterior({night:1,candle:1,bBack:1.5,main:()=>person(HERO,hutHero())});
  layer(1,()=>qPanels(1,1,probA));
  const pc=toScreen(313,285,1);lampLight(pc[0],pc[1],300*CAM.z,'#9AB0D0',.2);
  const qc=toScreen(QX+88,QY+84,1),bl=.5+.5*Math.sin(t*9);lampLight(qc[0],qc[1],260,'#E0505A',.22*probA*bl);
}
// ---------------- finishing
vignette(.6);
grain(.05);
wash("#000000",cutDip(t,ST));
wash('#000000',1-sm(0,.45,t));
}
```

## SCENE 4
```javascript
function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function eout(u){u=cl(u,0,1);return 1-Math.pow(1-u,3)}
function ein(u){u=cl(u,0,1);return u*u*u}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function blob(pts){const n=pts.length;g.beginPath();let m=[(pts[n-1][0]+pts[0][0])/2,(pts[n-1][1]+pts[0][1])/2];g.moveTo(m[0],m[1]);for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];g.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}g.closePath()}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
function woman(seed,kc){return {seed,r:22,l1:62,l2:62,a1:46,a2:42,torso:82,neck:7,sw:62,hw:50,thigh:22,shin:17,uarm:15,farm:12,foot:22,skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'kerchief',kerchief:kc,top:['#C8B4AC','#8C7890','#E8D4C8'],skirt:['#6A4E6E','#46344E','#8A6E8E'],apron:'#B8A090',boots:'#3A2E3E',dress:1,blush:'#D98A80'}}
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function sky(c0,c1,c2,y1,y2){const gr=g.createLinearGradient(0,y1,0,y2);gr.addColorStop(0,c0);gr.addColorStop(.55,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.fillRect(-2000,-2000,4540,4960)}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function sun(x,y,r){glow(x,y,r*6,PAL.key,.35);glow(x,y,r*2.2,'#FFE0B8',.5);ell(x,y,r,r);g.fillStyle='#FFE6C4';g.fill()}
function clouds(y,n,seed,col,a,sp){for(let i=0;i<n;i++){const w=90+hash(seed+i)*140,x=((hash(seed+i*3)*900+t*sp*(.6+hash(i)*.6))%900)-180,yy=y+hash(seed+i*7)*70;g.fillStyle=rgba(col,a);ell(x,yy,w*.5,12+hash(i+seed)*8);g.fill();ell(x+w*.2,yy-8,w*.3,10);g.fill()}}
function hills(y,amp,col,seed,x0,x1){g.beginPath();g.moveTo(x0,y+400);for(let x=x0;x<=x1;x+=20){g.lineTo(x,y-amp*(.5+.5*nz(x*.006+seed))-amp*.3*nz(x*.02+seed*3))}g.lineTo(x1,y+400);g.closePath();g.fillStyle=col;g.fill()}
function forestLine(y,col,seed,x0,x1,h){g.fillStyle=col;g.beginPath();g.moveTo(x0,y+60);for(let x=x0;x<=x1;x+=9){const hh=h*(.5+hash(seed+x*.13)*.7);g.lineTo(x,y);g.lineTo(x+4.5,y-hh);g.lineTo(x+9,y)}g.lineTo(x1,y+60);g.closePath();g.fill()}
function birch(x,gy,h,seed,col){
  const sw=Math.sin(t*.9+seed)*4,lean=(hash(seed)-.5)*.08;
  const tx=x+lean*h,tw=7+h*.02;
  g.beginPath();g.moveTo(x-tw,gy);g.quadraticCurveTo(x-tw*.8+lean*h*.5,gy-h*.5,tx-tw*.4+sw*.3,gy-h);g.lineTo(tx+tw*.4+sw*.3,gy-h);g.quadraticCurveTo(x+tw*.8+lean*h*.5,gy-h*.5,x+tw,gy);g.closePath();fo(tc('#D9CCD6'));
  g.fillStyle=tc('#302B49');for(let i=0;i<9;i++){const yy=gy-h*hash(seed+i*2.1)*.9,xx=lerp(x,tx,(gy-yy)/h);g.fillRect(xx-tw*.6+hash(i+seed)*3,yy,tw*(.5+hash(seed+i)*.6),2.2)}
  const fc=col||['#4F5470','#6E6A86','#C9926F'];
  // weeping crown: soft volume, then drooping branches covered with small leaf clusters
  for(let i=0;i<4;i++){ell(tx+sw*.7+(hash(seed+i*4.1)-.5)*h*.3,gy-h*(.7+hash(seed+i*1.9)*.25),h*.17,h*.13);g.fillStyle=rgba(tc(fc[0]),.45);g.fill()}
  for(let b=0;b<10;b++){
    const by=gy-h*(.48+hash(seed+b*1.3)*.5),k0=(gy-by)/h,bx=lerp(x,tx,k0)+sw*k0;
    const dir=(b%2?1:-1)*(.45+hash(seed+b)*.55),len=h*(.16+hash(seed+b*2.2)*.16),sy_=Math.sin(t*1.3+b+seed)*3;
    const cx_=bx+dir*len*.6,cy_=by-len*.22,ex=bx+dir*len+sy_,ey=by+len*.6;
    g.strokeStyle=tc('#3A3048');g.lineWidth=1.5;g.beginPath();g.moveTo(bx,by);g.quadraticCurveTo(cx_,cy_,ex,ey);g.stroke();
    for(let k=0;k<7;k++){const u=k/6,px=lerp(lerp(bx,cx_,u),lerp(cx_,ex,u),u),py=lerp(lerp(by,cy_,u),lerp(cy_,ey,u),u)+4,r=h*.042*(1.15-u*.45);
      ell(px,py,r*1.35,r);g.fillStyle=tc(k%3?fc[0]:fc[1]);g.fill();ell(px+r*.35,py-r*.35,r*.6,r*.38);g.fillStyle=rgba(tc(fc[2]),.5);g.fill()}
  }
}
function izba(x,gy,w,h,seed,lit,smokeOn){
  const wall=tc('#6B4A4E'),log=tc('#4A3442'),roof=tc('#3E3048'),rl=tc('#5E4A62');
  const rh=h*.75;
  // wall
  g.beginPath();g.rect(x-w/2,gy-h,w,h);fo(wall);
  g.strokeStyle=log;g.lineWidth=2;for(let y=gy-h+10;y<gy;y+=12){g.beginPath();g.moveTo(x-w/2,y);g.lineTo(x+w/2,y);g.stroke()}
  for(let y=gy-h+4;y<gy;y+=12){for(const sd of[-1,1]){ell(x+sd*(w/2+3),y,5,5.5);fo(tc('#8A6A64'),.6)}}
  brush(x-w/2,gy-h,w,h,rgba(tc('#8A6A64'),1),seed,10,.25);
  // roof
  g.beginPath();g.moveTo(x-w/2-16,gy-h+4);g.lineTo(x,gy-h-rh);g.lineTo(x+w/2+16,gy-h+4);g.closePath();fo(roof);
  g.strokeStyle=rl;g.lineWidth=2;for(let i=1;i<7;i++){const u=i/7;g.beginPath();g.moveTo(lerp(x,x-w/2-16,u),lerp(gy-h-rh,gy-h+4,u));g.lineTo(lerp(x,x+w/2+16,u),lerp(gy-h-rh,gy-h+4,u));g.stroke()}
  // gable with carved board
  g.beginPath();g.moveTo(x-w*.3,gy-h);g.lineTo(x,gy-h-rh*.75);g.lineTo(x+w*.3,gy-h);g.closePath();fo(tc('#5A3E48'),.8);
  g.beginPath();g.moveTo(x,gy-h-rh-2);g.lineTo(x,gy-h-rh+16);ol(1.2);
  // okno
  const wx=x,wy=gy-h*.55,ww=w*.22,wh=h*.32;
  g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);g.fillStyle=lit>0?mixc('#2A2440','#FFB36B',lit):'#2A2440';g.fill();ol();
  if(lit>0)glow(wx,wy,ww*1.6,'#FFB36B',.35*lit);
  g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2.5;g.stroke();
  g.beginPath();g.moveTo(wx-ww*.75,wy-wh*.6);g.lineTo(wx,wy-wh*.95);g.lineTo(wx+ww*.75,wy-wh*.6);g.lineTo(wx+ww*.7,wy-wh*.5);g.lineTo(wx-ww*.7,wy-wh*.5);g.closePath();fo(tc('#B9A6A2'),.8);
  g.beginPath();g.rect(wx-ww*.7,wy+wh*.5,ww*1.4,5);fo(tc('#B9A6A2'),.8);
  // chimney + smoke
  const chx=x+w*.22,chy=gy-h-rh*.42;g.beginPath();g.rect(chx-7,chy-24,14,28);fo(tc('#4A3A48'));
  if(smokeOn)smoke(chx,chy-26,seed,.5);
}
function smoke(x,y,seed,a){for(let i=0;i<9;i++){const u=((t*.18+i/9+hash(seed+i)*.1)%1),r=6+u*26;g.fillStyle=rgba(tc('#B9A6C2'),a*(1-u)*(u*4>1?1:u*4));ell(x+u*30+Math.sin(t*.8+i)*6*u,y-u*120,r,r*.8);g.fill()}}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function leaves(n,seed,x0,y0,w,h,col){for(let i=0;i<n;i++){const ph=hash(seed+i),u=((t*(.08+ph*.06)+ph)%1),x=x0+hash(seed+i*2)*w+Math.sin(t*1.5+i)*25+u*60,y=y0+u*h;g.save();g.translate(x,y);g.rotate(t*2+i);ell(0,0,4,2);g.fillStyle=rgba(col,.85*Math.sin(u*Math.PI));g.fill();g.restore()}}
function ripples(x,y,w,t0,col,a){for(let i=0;i<3;i++){const u=((t-t0)*.5+i/3)%1;if(t<t0)continue;g.strokeStyle=rgba(col,a*(1-u));g.lineWidth=1.5;ell(x,y,w*(.2+u),w*(.2+u)*.32);g.stroke()}}
function fenceW(x0,x1,gy,h,seed){g.strokeStyle=tc('#5A4450');for(let x=x0;x<=x1;x+=22){g.beginPath();g.moveTo(x,gy);g.lineTo(x+(hash(seed+x)-.5)*4,gy-h);g.lineWidth=5;g.stroke()}g.lineWidth=3;for(let k=0;k<4;k++){g.strokeStyle=tc(k%2?'#6B5260':'#4E3A4A');g.beginPath();g.moveTo(x0,gy-h*.2-k*h*.18);for(let x=x0;x<=x1;x+=11)g.lineTo(x,gy-h*.2-k*h*.18+((x/11+k)%2?3:-3));g.stroke()}}
function well(x,gy,s,state,crank){
  g.save();g.translate(x,gy);g.scale(s,s);const LW0=LW;LW/=s;
  const old=1-state,lg=mixc(tc('#5E4648'),tc('#A07A60'),state),lgd=mixc(tc('#3E2E3A'),tc('#7A5848'),state);
  ell(0,4,110,14);g.fillStyle=rgba(PAL.out,.35);g.fill();
  // posts
  const pl=old*.06;for(const sd of[-1,1]){g.save();g.translate(sd*70,-60);g.rotate(sd*pl);g.beginPath();g.rect(-6,-130,12,140);fo(lgd);g.restore()}
  // roof
  g.save();g.translate(0,-195);g.rotate(old*.05);g.beginPath();g.moveTo(-100,20);g.lineTo(0,-38);g.lineTo(100,20);g.lineTo(92,28);g.lineTo(0,-24);g.lineTo(-92,28);g.closePath();fo(mixc(tc('#3E3048'),tc('#8A6A58'),state));
  g.strokeStyle=rgba(tc('#1F2236'),.4);g.lineWidth=1.5;for(let i=-4;i<=4;i++){g.beginPath();g.moveTo(i*20,-30+Math.abs(i)*10);g.lineTo(i*22,22);g.stroke()}
  if(old>.5){g.beginPath();g.moveTo(30,0);g.lineTo(50,10);g.lineTo(38,16);g.closePath();g.fillStyle=tc('#241F4A');g.fill()}
  g.restore();
  // windlass
  const wy=-125;g.beginPath();g.rect(-66,wy-9,132,18);fo(lg);
  g.strokeStyle=tc('#B8A0A0');g.lineWidth=2;for(let i=-3;i<=3;i++){const a=crank+i*.6;g.beginPath();g.moveTo(i*14+Math.sin(a)*3,wy-8);g.lineTo(i*14+Math.sin(a)*3,wy+8);g.stroke()}
  const ca=crank;g.beginPath();g.moveTo(70,wy);g.lineTo(84,wy);ol();g.strokeStyle=lgd;g.lineWidth=5;g.stroke();
  const hx_=84+0,hy_=wy;g.beginPath();g.moveTo(hx_,hy_);g.lineTo(hx_+Math.cos(ca)*24,hy_+Math.sin(ca)*24);g.lineWidth=7+2*LW;g.strokeStyle=PAL.out;g.stroke();g.lineWidth=7;g.strokeStyle=lgd;g.stroke();
  // log box (srub)
  for(let i=0;i<5;i++){const y=-12-i*14,wb=old*Math.sin(i*1.7)*4;g.beginPath();g.rect(-80+wb,y-7,160,14);fo(i%2?lg:mixc(lg,lgd,.3),.9);ell(-80+wb,y,6,7);fo(lgd,.7);ell(80+wb,y,6,7);fo(lgd,.7);
    if(old>.5&&i%2===0){g.strokeStyle=rgba(tc('#241F4A'),.7);g.lineWidth=1.5;g.beginPath();g.moveTo(-40+i*12,y-5);g.lineTo(-30+i*12,y+2);g.lineTo(-20+i*12,y-1);g.stroke()}}
  if(state>.5){g.strokeStyle=tc('#8C8FA3');g.lineWidth=4;for(const sx of[-50,50]){g.beginPath();g.moveTo(sx,-82);g.lineTo(sx,-6);g.stroke()}}
  brush(-80,-80,160,72,rgba(tc('#E7C6AD'),1),11,8,.15);
  LW=LW0;g.restore();
  return [x,gy+wy*s];
}
function bucket(x,y,s,ang,water){g.save();g.translate(x,y);g.rotate(ang||0);g.scale(s,s);const LW0=LW;LW/=s;g.beginPath();g.moveTo(-14,-16);g.quadraticCurveTo(0,-34,14,-16);ol(1);g.strokeStyle=tc('#8C8FA3');g.lineWidth=2;g.stroke();g.beginPath();g.moveTo(-14,-16);g.lineTo(14,-16);g.lineTo(11,12);g.lineTo(-11,12);g.closePath();fo(tc('#6B5A60'));g.strokeStyle=tc('#8C8FA3');g.lineWidth=2.5;g.beginPath();g.moveTo(-13,-6);g.lineTo(13,-6);g.moveTo(-12,5);g.lineTo(12,5);g.stroke();if(water){ell(0,-16,13,3.5);g.fillStyle=rgba('#9AB0D0',.9);g.fill()}LW=LW0;g.restore()}
function panel(x,y,w,h,a,frame,glowA){
  if(a<=0)return;
  g.save();g.globalAlpha*=a;
  if(glowA>0){g.shadowColor=rgba(frame||'#E1C8B8',.8*glowA);g.shadowBlur=24}
  g.beginPath();g.roundRect(x,y,w,h,14);g.fillStyle=rgba('#241F4A',.55);g.fill();g.shadowBlur=0;
  const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,rgba('#E1C8B8',.18));gr.addColorStop(.25,rgba('#E1C8B8',.04));gr.addColorStop(1,rgba('#6C4377',.12));g.fillStyle=gr;g.fill();
  g.strokeStyle=rgba(frame||'#E1C8B8',.9);g.lineWidth=2;g.stroke();
  g.beginPath();g.roundRect(x+5,y+5,w-10,h-10,10);g.strokeStyle=rgba(frame||'#E1C8B8',.25);g.lineWidth=1;g.stroke();
  g.restore();
}
function bar(x,y,w,h,v,col,a,blinkA){g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,h/2);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
  const vv=cl(v,0,1);if(vv>.001){g.beginPath();g.roundRect(x,y,Math.max(h,w*vv),h,h/2);const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,mixc(col,'#FFFFFF',.35));gr.addColorStop(1,col);g.fillStyle=gr;g.fill();g.shadowColor=col;g.shadowBlur=10*(blinkA||.4);g.fill()}
  g.restore()}
function ticks(x,y,w,h,n,a){g.save();g.strokeStyle=rgba('#1F2236',.45*a);g.lineWidth=1;for(let i=1;i<n;i++){const xx=x+w*i/n;g.beginPath();g.moveTo(xx,y+2);g.lineTo(xx,y+h-2);g.stroke()}g.restore()}
function icon(kind,x,y,s,a){g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha*=a;g.lineJoin='round';g.lineCap='round';const ow=2/s;
  const st=(c)=>{g.fillStyle=c;g.fill();g.strokeStyle='#1F2236';g.lineWidth=ow;g.stroke()};
  if(kind==='wood'){g.beginPath();g.roundRect(-12,-5,22,10,5);st('#A0704A');ell(10,0,4,5);st('#D8A878');g.beginPath();g.arc(10,0,2,0,7);g.strokeStyle='#8A5A3A';g.lineWidth=1;g.stroke()}
  if(kind==='iron'){g.beginPath();g.moveTo(-11,5);g.lineTo(-7,-5);g.lineTo(7,-5);g.lineTo(11,5);g.closePath();st('#8C8FA3');g.beginPath();g.moveTo(-6,-3);g.lineTo(5,-3);g.strokeStyle='#D8DAE6';g.lineWidth=1.5;g.stroke()}
  if(kind==='stone'){blob([[-10,4],[-8,-5],[0,-8],[9,-4],[11,4],[2,7]]);st('#7D7890');ell(-3,-3,3,2);g.fillStyle='#A8A2B8';g.fill()}
  if(kind==='grain'){for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*4,9);g.lineTo(i*5,-4);g.strokeStyle='#C89040';g.lineWidth=2;g.stroke();ell(i*5,-6,2.6,5,i*.3);st('#E0B060')}}
  if(kind==='food'){ell(0,1,11,8);st('#C88A50');g.strokeStyle='#8A5A3A';g.lineWidth=1.4;for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*5-2,-3);g.lineTo(i*5+2,1);g.stroke()}}
  if(kind==='happy'){ell(0,0,10,10);st('#FFCF9A');g.beginPath();g.arc(0,1,5,.3,Math.PI-.3);g.strokeStyle='#1F2236';g.lineWidth=1.6;g.stroke();ell(-3.5,-3,1.3,1.6);g.fillStyle='#1F2236';g.fill();ell(3.5,-3,1.3,1.6);g.fill()}
  if(kind==='well'){g.beginPath();g.rect(-9,-1,18,9);st('#8A6A58');g.beginPath();g.moveTo(-11,-6);g.lineTo(0,-13);g.lineTo(11,-6);g.closePath();st('#6B5A60');g.beginPath();g.moveTo(-8,-6);g.lineTo(-8,-1);g.moveTo(8,-6);g.lineTo(8,-1);g.stroke()}
  if(kind==='bench'){g.beginPath();g.rect(-11,-2,22,4);st('#A07A60');g.beginPath();g.moveTo(-8,2);g.lineTo(-8,8);g.moveTo(8,2);g.lineTo(8,8);g.strokeStyle='#1F2236';g.lineWidth=2;g.stroke();g.beginPath();g.rect(-11,-10,22,4);st('#A07A60')}
  if(kind==='roof'){g.beginPath();g.moveTo(-11,6);g.lineTo(-11,-2);g.lineTo(0,-10);g.lineTo(11,-2);g.lineTo(11,6);g.closePath();st('#7A5A68')}
  if(kind==='road'){g.beginPath();g.moveTo(-4,-9);g.lineTo(4,-9);g.lineTo(10,9);g.lineTo(-10,9);g.closePath();st('#6A5468')}
  if(kind==='axe'){g.beginPath();g.moveTo(-8,9);g.lineTo(6,-7);g.strokeStyle='#A0704A';g.lineWidth=3;g.stroke();g.beginPath();g.moveTo(2,-11);g.quadraticCurveTo(12,-10,11,0);g.lineTo(5,-5);g.closePath();st('#8C8FA3')}
  if(kind==='person'){ell(0,-5,4.5,4.5);st('#C98972');g.beginPath();g.moveTo(-7,9);g.quadraticCurveTo(-7,0,0,0);g.quadraticCurveTo(7,0,7,9);g.closePath();st('#B9A6A2')}
  if(kind==='warn'){g.beginPath();g.moveTo(0,-10);g.lineTo(10,8);g.lineTo(-10,8);g.closePath();st('#E0505A');g.fillStyle='#1F2236';g.fillRect(-1.2,-4,2.4,7);ell(0,5,1.4,1.4);g.fill()}
  g.restore()}
function scribble(x,y,w,seed,col,a){g.save();g.strokeStyle=rgba(col,a);g.lineWidth=1.8;g.lineCap='round';g.beginPath();g.moveTo(x,y);const n=Math.floor(w/7);for(let i=1;i<=n;i++){const xx=x+i*w/n,up=hash(seed+i)>.7?-7:-3;g.quadraticCurveTo(xx-w/n*.6,y+up,xx-w/n*.2,y+(hash(seed+i*2)>.5?2:0))}g.stroke();g.restore()}
function finger(x,y,s,ang,pressA){g.save();g.translate(x,y);g.rotate(ang);g.scale(s,s);const LW0=LW;LW=3/s;
  segs([[0,60,0,26,30,tc('#B9A6A2')]]);ell(0,10,15,18);fo(tc(SKIN[0]));g.beginPath();g.roundRect(-5,-22,10,30,5);fo(tc(SKIN[0]));ell(0,-18,3.5,2.5);g.fillStyle=rgba('#F2B895',.8);g.fill();
  if(pressA>0){g.strokeStyle=rgba('#FFCF9A',pressA);g.lineWidth=2/s;ell(0,-24,14*(1.6-pressA*.6),5*(1.6-pressA*.6));g.stroke()}
  LW=LW0;g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function toScreen(x,y,f){const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f,q=rot((x-cx)*z,(y-cy)*z,CAM.r*f);return [270+CAM.sx*f+q[0],480+CAM.sy*f+q[1]]}
function spark(x,y,r,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r*2.5,'#FFE6C4',.6*a);g.fillStyle=rgba('#FFF4EA',a);g.beginPath();g.moveTo(x,y-r);g.quadraticCurveTo(x+r*.12,y-r*.12,x+r,y);g.quadraticCurveTo(x+r*.12,y+r*.12,x,y+r);g.quadraticCurveTo(x-r*.12,y+r*.12,x-r,y);g.quadraticCurveTo(x-r*.12,y-r*.12,x,y-r);g.fill();g.restore()}
function grassRow(y,seed,n,x0,x1,h,col){g.lineCap='round';for(let i=0;i<n;i++){const x=x0+hash(seed+i)*(x1-x0),hh=h*(.5+hash(seed+i*3)*.7),sw=Math.sin(t*1.6+x*.05)*hh*.15;g.strokeStyle=col;g.lineWidth=2.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+sw*.3,y-hh*.6,x+sw+(hash(i)-.5)*10,y-hh);g.stroke()}}
function birds(){g.strokeStyle=rgba('#241F4A',.8);g.lineWidth=2;for(let i=0;i<5;i++){const x=((t*28+i*40+hash(i)*30)%900)-200,y=330+i*9+Math.sin(t*2+i)*4,f=Math.sin(t*9+i*2)*4;g.beginPath();g.moveTo(x-7,y-f);g.quadraticCurveTo(x-3,y-2,x,y);g.quadraticCurveTo(x+3,y-2,x+7,y-f);g.stroke()}}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function villageGround(T){
  const gr=g.createLinearGradient(0,600,0,1100);gr.addColorStop(0,mixc(PAL.ground,PAL.far,.5));gr.addColorStop(.25,PAL.ground);gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-1200,618,3600,1400);
  g.fillStyle=tc('#4A3848');g.beginPath();g.moveTo(-1200,676);for(let x=-1200;x<=2400;x+=40)g.lineTo(x,676+nz(x*.02)*4);g.lineTo(2400,770);for(let x=2400;x>=-1200;x-=40)g.lineTo(x,770+nz(x*.03+5)*5);g.closePath();g.fill();
  brush(-200,680,1200,90,'#6A5468',21,60,.35);
  for(const ry of[704,738]){g.strokeStyle=rgba('#1F2236',.55);g.lineWidth=4;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke();g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=1.5;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+3+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke()}
  for(const pd of[[150,740,60],[420,706,48],[700,738,70],[-150,706,50]]){ell(pd[0],pd[1],pd[2],7);const pg=g.createLinearGradient(pd[0]-pd[2],0,pd[0]+pd[2],0);pg.addColorStop(0,T.sky[1]);pg.addColorStop(.6,T.sky[2]);pg.addColorStop(1,T.moon?'#4B3463':'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);ripples(pd[0]+10,pd[1],pd[2]*.5,0,'#FFE6C4',.4)}
  grassRow(676,1,60,-600,1400,22,tc('#4F5470'));
}
const TOD={
  dawn:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[470,520],tint:'#6C4377',ta:.12,lit:.5},
  day:{sky:['#4B3463','#9A6A8E','#F2B895'],sun:[410,300],tint:'#F09A6C',ta:.04,lit:0},
  sunset:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[330,590],tint:'#F09A6C',ta:.14,lit:.8},
  night:{sky:['#120F2A','#241F4A','#4B3463'],sun:null,moon:[400,210],tint:'#241F4A',ta:.42,lit:1}
};
function villageWorld(o){
  const T=TOD[op(o,'tod','dawn')];TINT=T.tint;TA=T.ta;
  const bF=op(o,'bF',0),bM=op(o,'bM',0),bFg=op(o,'bFg',2.5);
  layer(0,()=>sky(T.sky[0],T.sky[1],T.sky[2],-150,620));
  layer(.06,()=>{if(T.sun)sun(T.sun[0],T.sun[1],20);if(T.moon){stars(60,5,-300,-200,1200,700);glow(T.moon[0],T.moon[1],110,'#E1C8B8',.22);ell(T.moon[0],T.moon[1],16,16);g.fillStyle='#E7DCE6';g.fill()}clouds(380,7,3,T.sky[2],.22,6);clouds(260,5,8,T.sky[1],.3,4)},bF*.5);
  layer(.2,()=>{if(!T.moon)birds();hills(575,42,mixc(PAL.far,T.sky[2],.32),1,-600,1300);forestLine(592,mixc(PAL.far,T.sky[1],.15),4,-600,1300,24);if(o.far)o.far()},bF);
  layer(.5,()=>{g.fillStyle=mixc(PAL.ground,PAL.far,.55);g.fillRect(-900,600,2600,300);
    izba(-120,622,150,90,1,T.lit,1);birch(30,628,170,2);izba(160,620,130,80,2,T.lit*.8,1);birch(300,628,200,5);izba(470,622,160,92,3,T.lit,1);birch(600,630,180,8);izba(760,620,140,86,4,T.lit*.7,1);fenceW(-300,900,640,26,3);if(o.mid)o.mid()},bM);
  layer(1,()=>{villageGround(T);if(o.main)o.main()},op(o,'bMain',0));
  if(op(o,'fg',1))layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
function candle(x,y,s){const fl=1+.08*Math.sin(t*13)+.05*Math.sin(t*23+1)+.04*nz(t*6);g.save();g.translate(x,y);g.scale(s,s);
  ell(0,0,26,7);fo(tc('#8C8FA3'));g.beginPath();g.rect(-8,-48,16,48);const cg=g.createLinearGradient(-8,0,8,0);cg.addColorStop(0,'#C8B0A0');cg.addColorStop(1,'#F2DCC8');g.fillStyle=cg;g.fill();ol(.8);
  g.beginPath();g.moveTo(-6,-46);g.quadraticCurveTo(-9,-36,-6,-30);ol(.6);
  glow(0,-64,60*fl,'#FFB36B',.35);g.save();g.translate(0,-50);g.rotate(Math.sin(t*3)*.08);g.beginPath();g.moveTo(0,-30*fl);g.quadraticCurveTo(9,-8,0,0);g.quadraticCurveTo(-9,-8,0,-30*fl);g.fillStyle='#FFCF9A';g.fill();g.beginPath();g.moveTo(0,-18*fl);g.quadraticCurveTo(4,-5,0,0);g.quadraticCurveTo(-4,-5,0,-18*fl);g.fillStyle='#FFF4EA';g.fill();g.restore();
  g.restore();return fl}
function hutInterior(o){
  const night=op(o,'night',1),red=op(o,'red',0),cd=op(o,'candle',1);
  TINT='#241F4A';TA=.22*night;
  layer(.6,()=>{
    g.fillStyle=tc('#4A3442');g.fillRect(-700,-500,1900,1700);
    for(let y=-480;y<1100;y+=38){const lg=g.createLinearGradient(0,y,0,y+38);lg.addColorStop(0,tc('#6B4A4E'));lg.addColorStop(.5,tc('#5A3E48'));lg.addColorStop(1,tc('#3A2836'));g.fillStyle=lg;g.fillRect(-700,y+2,1900,34);g.fillStyle=rgba('#1F2236',.6);g.fillRect(-700,y,1900,3)}
    brush(-300,-200,1100,1000,'#8A6A64',31,70,.18);
    for(let i=0;i<10;i++){ell(-200+hash(i+3)*900,-100+hash(i*5)*900,6,4);g.fillStyle=rgba('#2A1E2E',.6);g.fill()}
    // okno with night sky
    g.save();g.beginPath();g.rect(70,250,140,170);const wg=g.createLinearGradient(0,250,0,420);wg.addColorStop(0,'#120F2A');wg.addColorStop(1,mixc('#4B3463','#6C4377',.4));g.fillStyle=wg;g.fill();g.clip();stars(14,9,70,250,140,120);ell(170,295,13,13);g.fillStyle='#E7DCE6';g.fill();ell(176,291,11,11);g.fillStyle='#1A1636';g.fill();g.fillStyle=rgba('#241F4A',.9);g.beginPath();g.moveTo(70,400);for(let x=70;x<=210;x+=10)g.lineTo(x,388-hash(x)*16);g.lineTo(210,420);g.lineTo(70,420);g.closePath();g.fill();g.restore();
    g.beginPath();g.rect(70,250,140,170);ol(1.2);g.strokeStyle=tc('#B9A6A2');g.lineWidth=7;g.beginPath();g.moveTo(140,250);g.lineTo(140,420);g.moveTo(70,330);g.lineTo(210,330);g.stroke();
    g.beginPath();g.moveTo(52,246);g.lineTo(140,212);g.lineTo(228,246);g.lineTo(220,256);g.lineTo(60,256);g.closePath();fo(tc('#B9A6A2'));g.beginPath();g.rect(56,420,168,12);fo(tc('#B9A6A2'));
    // embroidered towel (rushnyk) beside the okno
    const sw=Math.sin(t*.9)*2;g.beginPath();g.moveTo(232,236);g.lineTo(262,236);g.lineTo(264+sw,400);g.lineTo(234+sw,400);g.closePath();fo(tc('#E7C6AD'),.8);g.strokeStyle=tc('#A0505A');g.lineWidth=3;for(let k=0;k<3;k++){g.beginPath();g.moveTo(236+sw,372+k*9);for(let x=0;x<6;x++)g.lineTo(238+x*5+sw,(x%2?366:372)+k*9);g.stroke()}
    // shelf with clay pots
    g.beginPath();g.rect(290,236,170,10);fo(tc('#6B4A4E'));for(let i=0;i<4;i++){const px=310+i*40,ph=26+hash(i+4)*14;g.beginPath();g.moveTo(px-12,236);g.quadraticCurveTo(px-18,236-ph*.6,px-7,236-ph);g.lineTo(px+7,236-ph);g.quadraticCurveTo(px+18,236-ph*.6,px+12,236);g.closePath();fo(tc(i%2?'#8A5A50':'#7A6A70'),.8)}
    // drying herbs swaying
    for(let i=0;i<3;i++){g.save();g.translate(320+i*42,120);g.rotate(Math.sin(t*.8+i)*.06);g.strokeStyle=tc('#5A4450');g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,40);g.stroke();for(let k=0;k<6;k++){ell((k-2.5)*4,48+k%3*10,4,16,(k-2.5)*.15);g.fillStyle=tc(k%2?'#6E6A86':'#4F5470');g.fill()}g.restore()}
    // whitewashed stove at right with ember mouth
    g.beginPath();g.moveTo(430,980);g.lineTo(430,180);g.quadraticCurveTo(430,150,460,150);g.lineTo(760,150);g.lineTo(760,980);g.closePath();const sg=g.createLinearGradient(430,0,600,0);sg.addColorStop(0,tc('#9C8494'));sg.addColorStop(.3,tc('#B9A6A2'));sg.addColorStop(1,tc('#8C7890'));g.fillStyle=sg;g.fill();ol();
    brush(440,170,200,700,'#E7C6AD',41,30,.2);g.beginPath();g.moveTo(462,600);g.lineTo(462,520);g.quadraticCurveTo(500,480,538,520);g.lineTo(538,600);g.closePath();g.fillStyle='#1F1626';g.fill();ol();
    const em=.5+.3*Math.sin(t*2.1)+.2*nz(t*3);glow(500,590,70,'#FFB36B',.45*em);ell(500,592,30,7);g.fillStyle=rgba('#FFB36B',.7*em);g.fill();
  },op(o,'bBack',2));
  layer(.85,()=>{g.fillStyle=tc('#3A2836');g.fillRect(-500,860,1500,500);g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=2;for(let i=-12;i<14;i++){g.beginPath();g.moveTo(270+i*40,860);g.lineTo(270+i*90,1300);g.stroke()}},op(o,'bBack',2)*.5);
  layer(1,()=>{
    if(o.main)o.main();
    // table: worn top, long embroidered cloth hiding the legs
    g.beginPath();g.moveTo(-80,690);g.lineTo(620,690);g.lineTo(620,716);g.lineTo(-80,716);g.closePath();const tg=g.createLinearGradient(0,690,0,716);tg.addColorStop(0,tc('#8A6A64'));tg.addColorStop(1,tc('#6B4A4E'));g.fillStyle=tg;g.fill();ol();
    brush(-60,692,660,22,'#B08A7A',51,30,.3);
    g.beginPath();g.moveTo(-80,714);g.lineTo(620,714);g.lineTo(624,940);for(let x=620;x>=-80;x-=35)g.quadraticCurveTo(x-17,948+Math.sin(x+t)*2,x-35,940);g.closePath();const cg=g.createLinearGradient(0,714,0,940);cg.addColorStop(0,tc('#B9A6A2'));cg.addColorStop(1,tc('#79677F'));g.fillStyle=cg;g.fill();ol();
    g.strokeStyle=tc('#A0505A');g.lineWidth=4;g.beginPath();for(let x=-80;x<=620;x+=14)g.lineTo(x,(x/14)%2?898:910);g.stroke();g.strokeStyle=rgba(tc('#79677F'),.8);g.lineWidth=2;for(let x=-40;x<620;x+=70){g.beginPath();g.moveTo(x,720);g.quadraticCurveTo(x+8,820,x-4,936);g.stroke()}
    // clay mug at left
    g.beginPath();g.moveTo(70,700);g.lineTo(74,660);g.lineTo(112,660);g.lineTo(116,700);g.closePath();fo(tc('#8A5A50'));g.beginPath();g.arc(118,680,10,-1.2,1.2);ol(1.2);
    if(cd>0)candle(455,702,1);
    if(o.front)o.front();
  });
  layer(1.45,()=>{g.fillStyle='#1A1424';g.beginPath();g.moveTo(-300,-80);g.lineTo(900,-80);g.lineTo(900,60);g.quadraticCurveTo(300,90,-300,40);g.closePath();g.fill();g.save();g.translate(80,40);g.rotate(Math.sin(t*.7)*.05);g.strokeStyle='#2A2036';g.lineWidth=3;g.beginPath();g.moveTo(0,0);g.lineTo(0,70);g.stroke();for(let k=0;k<5;k++){ell((k-2)*6,90+k%2*12,6,24);g.fillStyle='#2A2036';g.fill()}g.restore()},4);
  // light: night blue multiply, candle warm screen, optional red menu light
  g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.35*night);g.restore();
  if(cd>0){const c=toScreen(455,640,1),f=1+.06*Math.sin(t*13)+.05*nz(t*6);lampLight(c[0],c[1],430*CAM.z*.6+180,'#FFB36B',.38*cd*f)}
  const wn=toScreen(140,330,.6);beamStatic(wn,night);
  if(red>0){g.save();g.globalCompositeOperation='multiply';wash('#E0505A',.22*red);g.restore();lampLight(380,420,520,'#E0505A',.28*red)}
  motes(18,13,0,200,540,600,'#FFE6C4',.35*cd,1.5);
}
function beamStatic(wn,night){beam(wn[0],wn[1],wn[0]+260,wn[1]+520,60,160,'#6C4377',.16*night)}
const RES=[['wood','#A0704A',200],['iron','#8C8FA3',50],['stone','#7D7890',100],['grain','#E0B060',500],['food','#C88A50',500]];
function resPanel(x,y,w,o){
  const a=op(o,'a',1),v=o.v||{},ra=o.rows||[1,1,1,1,1,1],red=op(o,'red',-1),rA=op(o,'redA',0),rh=50,h=74+6*rh;
  if(a<=0)return h;
  panel(x,y,w,h,a,'#E1C8B8',.7);
  g.save();g.globalAlpha*=a;
  medallion(x+34,y+36,15,0,0,.25);
  g.fillStyle=rgba('#E1C8B8',.85);g.beginPath();g.roundRect(x+62,y+26,w*.42,7,3.5);g.fill();
  g.fillStyle=rgba('#E1C8B8',.4);g.beginPath();g.roundRect(x+62,y+40,w*.26,5,2.5);g.fill();
  g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(x+16,y+64);g.lineTo(x+w-16,y+64);g.stroke();
  for(let i=0;i<6;i++){const q=cl(ra[i]||0,0,1);if(q<=0)continue;const yy=y+74+i*rh,dx=(1-eout(q))*24;g.save();g.globalAlpha*=q;
    if(i<5){const R_=RES[i],val=op(v,R_[0],0),isR=red===i;
      if(isR&&rA>0){g.save();g.shadowColor='#E0505A';g.shadowBlur=16*rA;g.beginPath();g.roundRect(x+10+dx,yy+2,w-20,rh-8,10);g.fillStyle=rgba('#E0505A',.12*rA);g.fill();g.strokeStyle=rgba('#E0505A',rA);g.lineWidth=2;g.stroke();g.restore()}
      icon(R_[0],x+34+dx,yy+20,1.25,1);
      const bw=w-110;bar(x+60+dx,yy+12,bw,16,val/R_[2],isR?mixc(R_[1],'#E0505A',.4+.6*rA):R_[1],1,isR?rA:.4);ticks(x+60+dx,yy+12,bw,16,10,1);
      ell(x+w-30+dx,yy+20,6,6);g.fillStyle=isR?rgba('#E0505A',.4+.6*rA):rgba(R_[1],.9);g.fill();
    }else{icon('happy',x+34+dx,yy+20,1.25,1);const hv=op(v,'happy',0)/100,sw=(w-110)/10;
      for(let k=0;k<10;k++){const f=cl(hv*10-k,0,1);g.beginPath();g.roundRect(x+60+dx+k*sw,yy+10,sw-4,20,4);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.4);g.lineWidth=1;g.stroke();if(f>0){g.beginPath();g.roundRect(x+60+dx+k*sw,yy+10,Math.max(2,(sw-4)*f),20,4);g.fillStyle='#FFCF9A';g.fill()}}}
    g.restore()}
  g.restore();return h;
}
function star5(x,y,r){g.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.45:r;g.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr)}g.closePath()}
const PROB=[['well',5],['roof',2],['road',3]];
function problemsPanel(x,y,w,o){
  const a=op(o,'a',1),ra=o.rows||[1,1,1],hi=op(o,'hi',0),rh=52,h=44+3*rh;if(a<=0)return h;
  panel(x,y,w,h,a,'#E0505A',.5);
  g.save();g.globalAlpha*=a;
  icon('warn',x+26,y+24,1,1);g.fillStyle=rgba('#E0505A',.8);g.beginPath();g.roundRect(x+44,y+20,w*.4,6,3);g.fill();
  for(let i=0;i<3;i++){const q=cl(ra[i]||0,0,1);if(q<=0)continue;const yy=y+40+i*rh;g.save();g.globalAlpha*=q;
    if(i===0&&hi>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=20*hi;g.beginPath();g.roundRect(x+8,yy+2,w-16,rh-6,10);g.fillStyle=rgba('#FFCF9A',.18*hi);g.fill();g.strokeStyle=rgba('#FFCF9A',.9*hi);g.lineWidth=2;g.stroke();g.restore()}
    const bl=.5+.5*Math.sin(t*7+i*1.3);ell(x+20,yy+24,5,5);g.fillStyle=rgba('#E0505A',.4+.6*bl);g.fill();
    icon(PROB[i][0],x+44,yy+24,1.2,1);scribble(x+66,yy+28,w*.26,i*5+3,'#E1C8B8',.6);
    for(let k=0;k<PROB[i][1];k++){const s_=i===0?1+.25*hi*Math.sin(t*6+k):1;star5(x+w-22-k*19,yy+24,7*s_);g.fillStyle=i===0?'#FFCF9A':rgba('#FFCF9A',.65);g.fill()}
    g.restore()}
  g.restore();return h;
}
// ---- scene
// SCENE 4 — «Старый колодец и цена улучшения» (41.13 – 53.74)
// shots: 0 UI: well row flares with the biggest stars → dive | 1 wide memory: old well, two women | 2 medium: cranking together |
//        3 CU: aching back | 4 insert: finger presses "improve well" | 5 medium: the medallion demands |
//        6 UI: chips 30/8/20 fly from the bars into the well | 7 layout: shorter bars, fade to black
const ST=[0,1.3,2.3,3.95,5.95,7.5,8.75,10.95];
const S=shot(t,ST);
const RX=208,RY=128,RK=.84,RW=250,QX=250,QY=470,QK=.84,QW=210;
const CT=[9.0,9.7,10.4],COST=[30,8,20],V0={wood:140,iron:23,stone:60,grain:410,food:380,happy:41};
const WLX=462,WLY=232; // world spot of the well target icon for the cost chips
const tPress=6.75;
const WX=300,WS=.9,GY=716;

// ---------- helpers
function qVals(){const v=Object.assign({},V0);['wood','iron','stone'].forEach((k,i)=>{v[k]=V0[k]-COST[i]*eout((t-CT[i]+.1)/.3)});return v}
function qBtn(x,y,w,h,hv,pr){ // "improve" button: gold up-chevron over a well icon
  g.save();g.shadowColor='#FFCF9A';g.shadowBlur=10+20*pr;g.beginPath();g.roundRect(x,y,w,h,10);g.fillStyle=rgba('#FFCF9A',.15+.25*hv+.4*pr);g.fill();g.strokeStyle=rgba('#FFCF9A',.6+.4*hv);g.lineWidth=2;g.stroke();g.restore();
  icon('well',x+w*.36,y+h*.58,1.1,1);
  g.save();g.strokeStyle='#FFE6C4';g.lineWidth=3.5;g.lineCap='round';g.lineJoin='round';g.beginPath();const cx=x+w*.76,cy=y+h*.5-2*Math.sin(t*5)*hv;g.moveTo(cx-7,cy+5);g.lineTo(cx,cy-4);g.lineTo(cx+7,cy+5);g.stroke();g.restore();
}
function qPanels(o){
  const pa=op(o,'pa',1),qa=op(o,'qa',1),hi=op(o,'hi',0),btn=op(o,'btn',0),pr=op(o,'pr',0);
  if(pa>0){g.save();g.translate(RX,RY);g.scale(RK,RK);resPanel(0,0,RW,{a:pa,v:qVals(),rows:[1,1,1,1,1,1]});
    // red ghost of what was taken, fading
    for(let i=0;i<3;i++){const R_=RES[i],k=sm(CT[i]-.05,CT[i]+.1,t)*(1-sm(CT[i]+.6,CT[i]+2.2,t));if(k<=0)continue;const bw=RW-110,x0=60+bw*(V0[R_[0]]-COST[i])/R_[2],x1=60+bw*V0[R_[0]]/R_[2],yy=74+i*50+12;
      g.save();g.globalAlpha=k*pa;g.setLineDash([4,3]);g.strokeStyle='#E0505A';g.lineWidth=2;g.beginPath();g.roundRect(x0,yy,x1-x0,16,6);g.stroke();g.setLineDash([]);g.fillStyle=rgba('#E0505A',.2);g.fill();g.restore()}
    g.restore()}
  if(qa>0){g.save();g.translate(QX,QY);g.scale(QK,QK);
    problemsPanel(0,0,QW,{a:qa,rows:[1,1,1],hi});
    // the biggest stars of the well row pop out
    if(hi>0)for(let k=0;k<5;k++){const pop=sm(.25+k*.08,.55+k*.08,t)*(1-sm(1.0,1.2,t)*.4),x=QW-22-k*19,y=64;g.save();g.shadowColor='#FFCF9A';g.shadowBlur=14;star5(x,y-pop*8,7+pop*7+Math.sin(t*6+k)*1.2);g.fillStyle=rgba('#FFE6C4',.9*pop*hi);g.fill();g.restore()}
    if(btn>0){g.save();g.globalAlpha*=btn;qBtn(QW+6,44,54,42,1,pr);g.restore()}
    g.restore()}
}
function hutHero(o2){
  const o={x:150,y:1000,s:1.35,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],t,ls:1,rimC:'#9AB0D0',rimA:.55,medal:'none',hl:[70,-224]};
  const dem=sm(7.6,7.75,t),hd=sm(7.7,7.95,t),back=sm(11.0,11.8,t);
  o.hr=[lerp(40,48,dem)*(1-back)+36*back,lerp(-230,-248,dem*(1-sm(8.4,8.8,t)))*(1-back)-226*back];
  let look=[.75,.25];if(t>7.55)look=[lerp(.75,.35,dem),lerp(.25,.75,dem)];if(t>8.6)look=[.7,-.2];if(t>10.95)look=[.7,lerp(-.25,-.05,back)];
  o.em={look,brow:.7*dem*(1-sm(8.6,9.2,t))+.1*back,browIn:.25*sm(8.8,9.6,t)+.15*back,open:.3*dem*(1-sm(8.4,8.8,t))+.05,eyeOpen:1+.3*dem*(1-sm(8.6,9.2,t))-.12*back,smile:-.1*back,
    blink:(t>7.62&&t<7.74)||(t>11.9&&t<12.05)?1:0};
  o.tilt=.14*hd*(1-sm(8.5,8.9,t))+.04*back;o.lean=.06-.1*back;o.hipX=-4*back;
  const gl=.35+.8*dem*(1-sm(8.6,9.0,t))*(.7+.3*Math.sin(t*14))+.2*Math.sin(t*3);
  o.itemR=(gg,ex,ey,an)=>{g.strokeStyle=tc(HERO.cord);g.lineWidth=1.6;g.beginPath();g.moveTo(4,-292);g.quadraticCurveTo((ex+4)/2,(ey-292)/2+16,ex+4,ey-10);g.stroke();medallion(ex+4,ey-2,9,an,0,gl)};
  if(o2)Object.assign(o,o2);
  return o;
}
function hutLights(){const pc=toScreen(313,285,1);lampLight(pc[0],pc[1],300*CAM.z,'#9AB0D0',.2)}
// ---- memory: old well and two women, one at each crank handle
function crank(){return -t*1.5-.45*Math.sin(t*3)}
function handle(c){return [WX+84*WS+Math.cos(c)*24*WS,GY-125*WS+Math.sin(c)*24*WS]}
function handleL(c){return [WX-84*WS-Math.cos(c)*24*WS,GY-125*WS+Math.sin(c)*24*WS]}
const relB=sm(4.0,4.25,t); // woman B lets go of the crank
function womanA(){
  const c=crank(),h=handle(c),x=404,s=.72,push=Math.sin(c);
  return {x,y:GY,s,yaw:-.95,t,ls:1,rimC:PAL.rim,rimA:.6,lean:.3+.14*push,hipX:7*push,fr:[-26,0],fl:[24,0],
    hr:[(h[0]-x)/s-3,(h[1]-GY)/s+3],hl:[(h[0]-x)/s+4,(h[1]-GY)/s-3],turn:-.45*sm(4.9,5.2,t),tilt:.08+.05*push,
    em:{look:[lerp(-.3,-.8,sm(4.85,5,t)),.15],browIn:.5+.2*sm(4.9,5.2,t),eyeOpen:.72,open:.14+.08*Math.abs(push),smile:-.3}};
}
function womanB(){
  const c=crank(),h=handleL(c),x=194,s=.72,push=Math.sin(c);
  const st=sm(4.1,4.5,t),hb=sm(4.3,4.7,t);
  const o={x,y:GY,s,yaw:lerp(.95,.55,st),t,ls:-1,rimC:PAL.rim,rimA:.6,lean:lerp(.32-.14*push,-.14,st),hipX:lerp(-7*push,6,st),fr:[24,0],fl:[-24,0],
    tilt:lerp(.08-.05*push,-.14,st),turn:.1*st,
    em:{look:[lerp(.3,-.3,st),lerp(.2,-.2,st)],browIn:lerp(.55,.95,st),brow:-.1,eyeOpen:lerp(.7,.28,hb),open:lerp(.14+.08*Math.abs(push),.3,hb),smile:lerp(-.3,-.7,hb),blink:t>4.02&&t<4.14?1:0}};
  const hr0=[(h[0]-x)/s-3,(h[1]-GY)/s-3],hl0=[(h[0]-x)/s+3,(h[1]-GY)/s+3];
  // the near (right) hand goes to the small of her back, palm flat
  o.hr=[lerp(lerp(hr0[0],10,relB),-25,hb),lerp(lerp(hr0[1],-90,relB),-124,hb)];
  o.hl=[lerp(hl0[0],8,relB),lerp(hl0[1],-82,relB)];
  if(hb>.2)o.itemR=(gg,ex,ey,an)=>{const sk=tc(SKIN[0]);g.save();g.translate(ex,ey);g.rotate(.15);segs([[0,2,1,19,6,sk],[-5,1,-5,17,5.5,sk],[5,1,7,16,5.5,sk],[9,-2,13,6,5,sk]]);ell(0,2,8.5,8);fo(sk);g.strokeStyle=rgba(SKIN[1],.7);g.lineWidth=1;g.beginPath();g.moveTo(-4,9);g.lineTo(-4,14);g.moveTo(1,10);g.lineTo(1,16);g.stroke();g.restore()};
  return o;
}
function memoryWell(bucketUp){
  const c=crank();
  // rope and the heavy bucket inside the shaft
  const by=lerp(704,622,bucketUp),wl=[WX,GY-125*WS];
  g.strokeStyle=tc('#8A7A6A');g.lineWidth=2;g.beginPath();g.moveTo(wl[0]+4,wl[1]+6);g.lineTo(WX+4,by-26);g.stroke();
  bucket(WX+4,by,1.7,Math.sin(t*2.3)*.05,1);
  if(bucketUp>.95)for(let i=0;i<4;i++){const u=((t*1.3+i/4)%1);ell(WX-14+i*9,by+16+u*30,1.8,3);g.fillStyle=rgba('#9AB0D0',.8*(1-u));g.fill()}
  well(WX,GY,WS,0,c);
  // second crank handle on the left end of the axle
  const wy=GY-125*WS,hL=handleL(c),lgd=tc('#3E2E3A');segs([[WX-66*WS,wy,WX-84*WS,wy,5*WS,lgd],[WX-84*WS,wy,hL[0],hL[1],7*WS,lgd]]);
}
function memoryGrade(){ // warm, slightly faded "illustration" look with a glowing edge
  g.save();g.globalCompositeOperation='multiply';wash('#F09A6C',.16);g.restore();
  wash('#FFB36B',.07,'screen');
  g.save();g.globalCompositeOperation='screen';const gr=g.createRadialGradient(270,440,260,270,480,620);gr.addColorStop(0,'rgba(255,230,196,0)');gr.addColorStop(1,'rgba(255,230,196,.42)');g.fillStyle=gr;g.fillRect(0,0,540,960);g.restore();
}
function memoryWorld(bMain,bF,bM,drawB,bucketUp){
  villageWorld({tod:'day',bF,bM,bMain,bFg:3,main:()=>{
    memoryWell(bucketUp);
    if(drawB)person(woman(12,['#A0606A','#703E4A','#C08088']),womanB());
    person(woman(11,['#7A5A8A','#4E3A60','#9A7AAA']),womanA());
    grassRow(772,2,50,-600,1400,26,tc('#3E3A58'))}});
}

// ---------------- shot 0: UI — the well row flares with the biggest stars, then we dive into it
if(S.i===0){
  const lt=S.lt,dv=ein(cl((lt-1.0)/.3,0,1));
  const z=lerp(2.35,2.6,sm(0,1,lt))*(1+dv*6),ic=[QX+44*QK,QY+64*QK];
  setCam(lerp(330,ic[0],sm(.6,1.3,lt)),lerp(540,ic[1],sm(.6,1.3,lt)),z,0);
  hutInterior({night:1,candle:1,bBack:6,main:()=>person(HERO,hutHero())});
  wash('#1F2236',.2);
  layer(1,()=>qPanels({hi:sm(.1,.4,lt)}));
  hutLights();
  wash('#FFE6C4',sm(1.05,1.3,lt)*.95);
}
// ---------------- shot 1: wide memory — the old crooked well, two women at the crank
if(S.i===1){
  const lt=S.lt,u=S.u;setCam(lerp(296,304,u),lerp(588,582,u),lerp(1.3,1.18,eout(lt/.5))+u*.04,0);
  memoryWorld(0,0,0,1,0);
  leaves(7,3,0,200,540,600,'#C9926F');
  memoryGrade();
  wash('#FFE6C4',.95*(1-sm(0,.35,lt)));
}
// ---------------- shot 2: medium — both pull, the bucket crawls up
if(S.i===2){
  const u=S.u;setCam(lerp(296,304,u),lerp(612,606,u),1.68+u*.12,-.01);
  memoryWorld(0,2,2,1,sm(2.6,3.9,t));
  motes(14,5,0,200,540,500,'#FFE6C4',.4,1.8);
  memoryGrade();
}
// ---------------- shot 3: close-up — she straightens and holds her aching back
if(S.i===3){
  const lt=S.lt,u=S.u,dv=ein(cl((lt-1.78)/.22,0,1));
  setCam(lerp(214,206,u),lerp(586,592,u),(3.6+u*.3)*(1+dv*1.5),.01);
  memoryWorld(3.5,8,6,0,1);
  layer(1,()=>{const o=womanB();person(woman(12,['#A0606A','#703E4A','#C08088']),o);
    // throbbing ache marks at the small of the back
    const k=sm(4.55,4.8,t)*(1-sm(5.75,5.95,t));if(k>0){const bx=o.x+(o.hipX-24)*o.s,by=GY-128*o.s,pu=.5+.5*Math.sin(t*10);
      for(let i=0;i<3;i++){const a=Math.PI+(i-1)*.55,r=10+pu*3;g.strokeStyle=rgba('#E0505A',.75*k);g.lineWidth=1.6;g.lineCap='round';g.beginPath();g.moveTo(bx+Math.cos(a)*r,by+Math.sin(a)*r);g.lineTo(bx+Math.cos(a)*(r+6),by+Math.sin(a)*(r+6));g.stroke()}}});
  motes(14,6,0,150,540,560,'#FFE6C4',.45,2.2);
  memoryGrade();
  wash('#FFFFFF',dv*.85);
}
// ---------------- shot 4: insert — the right index finger presses "improve well"; the medallion swings below
if(S.i===4){
  const lt=S.lt,u=S.u;setCam(386,lerp(540,532,u),lerp(2.6,2.2,eout(lt/.4))+u*.08,0);
  CAM.sy=kick(t,tPress,2.5,.25);
  hutInterior({night:1,candle:1,bBack:6,main:()=>person(HERO,hutHero())});
  wash('#1F2236',.2);
  const pr=Math.max(0,1-Math.abs(t-tPress-.05)/.3);
  layer(1,()=>{
    qPanels({hi:.6,btn:sm(6.0,6.25,t),pr});
    // hand path: approach, tiny pull-back (anticipation), press, hold, release
    const bx=QX+(QW+6+27)*QK,byy=QY+(44+21)*QK,ap=ease((t-6.05)/.5),pb=sm(6.55,6.65,t)*(1-sm(6.65,tPress,t)),rl=sm(7.15,7.45,t);
    const ang=.5,s=.8,tip=[bx,byy],off=lerp(70,0,ap)+6*pb+30*rl;
    const fx=tip[0]-Math.sin(ang)*(22*s)-Math.sin(ang)*off,fy=tip[1]+Math.cos(ang)*(22*s)+Math.cos(ang)*off;
    g.save();g.translate(fx,fy);g.rotate(ang);g.scale(s,s);const LW0=LW;LW=LW/s;segs([[0,250,0,40,30,tc(HERO.top[1])]]);segLight(0,250,0,40,30,'#E7C6AD',.35,1);LW=LW0;g.restore();
    finger(fx,fy,s,ang,pr);
    // medallion hangs from the fist on its cord
    const fist=[fx-Math.sin(ang)*(-10*s),fy+Math.cos(ang)*(10*s)],sw=Math.sin(t*3.1)*.28+.15*Math.sin(t*1.3),L=26;
    const mx=fist[0]+Math.sin(sw)*L,my=fist[1]+Math.cos(sw)*L;g.strokeStyle=tc(HERO.cord);g.lineWidth=1.2;g.beginPath();g.moveTo(fist[0],fist[1]);g.lineTo(mx,my-4);g.stroke();
    medallion(mx,my,6,sw,0,.5+.5*pr);
    if(pr>0){for(let r=0;r<3;r++){const q=cl((t-tPress-r*.08)/.45,0,1);if(q>0&&q<1){g.strokeStyle=rgba('#FFCF9A',1-q);g.lineWidth=1.5;ell(tip[0],tip[1],4+q*34,4+q*34);g.stroke()}}}
  });
  hutLights();
  wash('#FFFFFF',.85*(1-sm(0,.3,lt)));
}
// ---------------- shot 5: medium — the medallion flares and demands its price
if(S.i===5){
  const u=S.u;setCam(lerp(204,212,u),lerp(600,590,u),2.0+u*.12,.01);
  CAM.sx=kick(t,7.65,3,.3);
  hutInterior({night:1,candle:1,bBack:2.5,main:()=>person(HERO,hutHero())});
  layer(1,()=>{qPanels({hi:.3});
    // three resource icons rise from the medallion: what it wants
    const mx=150+48*1.35+5,my=1000-248*1.35;
    for(let i=0;i<3;i++){const q=sm(7.7+i*.12,8.1+i*.12,t),a=-Math.PI/2+(i-1)*.75,r=lerp(8,46,eout(q)),x=mx+Math.cos(a)*r,y=my+Math.sin(a)*r-10*q;if(q<=0)continue;
      g.save();g.globalAlpha=q;g.shadowColor='#E0505A';g.shadowBlur=12;ell(x,y,13,13);g.fillStyle=rgba('#241F4A',.7);g.fill();g.strokeStyle=rgba('#E0505A',.8+.2*Math.sin(t*9));g.lineWidth=1.5;g.stroke();g.restore();
      icon(RES[i][0],x,y,.8,q)}
    const k=sm(7.6,7.75,t)*(1-sm(8.5,8.8,t));if(k>0){g.save();g.globalCompositeOperation='screen';for(let i=0;i<8;i++){const a=i/8*Math.PI*2+t*.8;g.strokeStyle=rgba('#FFE6C4',.35*k);g.lineWidth=2;g.beginPath();g.moveTo(mx+Math.cos(a)*14,my+Math.sin(a)*14);g.lineTo(mx+Math.cos(a)*(40+10*Math.sin(t*9+i)),my+Math.sin(a)*(40+10*Math.sin(t*9+i)));g.stroke()}g.restore()}
  });
  hutLights();
  const mc=toScreen(150+48*1.35+5,1000-248*1.35,1);lampLight(mc[0],mc[1],220,'#FFCF9A',.3*sm(7.6,7.75,t)*(1-sm(8.5,8.9,t)));
}
// ---------------- shot 6: UI — chips break off the wood, iron and stone bars and fly into the well
if(S.i===6){
  const u=S.u;setCam(lerp(350,354,u),lerp(244,236,u),1.8+u*.1,0);
  CAM.sy=kick(t,CT[0]+.45,2,.2)+kick(t,CT[1]+.45,2,.2)+kick(t,CT[2]+.45,2,.2);
  hutInterior({night:1,candle:1,bBack:6,main:()=>person(HERO,hutHero())});
  wash('#1F2236',.25);
  layer(1,()=>{
    qPanels({qa:0});
    // target: the well icon in a glass ring with three slots that fill as the price is paid
    let hit=0;for(let i=0;i<3;i++)hit+=Math.max(0,1-Math.abs(t-CT[i]-.45)/.25);
    panel(WLX-34,WLY-40,68,96,1,'#FFCF9A',.5+hit);
    icon('well',WLX,WLY-6,2.3*(1+.15*hit),1);
    for(let i=0;i<3;i++){const f=sm(CT[i]+.38,CT[i]+.5,t);ell(WLX-18+i*18,WLY+34,6,6);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba(RES[i][1],.9);g.lineWidth=1.2;g.stroke();if(f>0){ell(WLX-18+i*18,WLY+34,5*f,5*f);g.fillStyle=RES[i][1];g.fill()}}
    // flying chips: sized exactly like the part of the bar they leave
    for(let i=0;i<3;i++){const q=cl((t-CT[i]+.08)/.55,0,1);if(q<=0||q>=1)continue;const R_=RES[i],bw=RW-110,v1=V0[R_[0]]-COST[i],w=bw*COST[i]/R_[2]*RK;
      const x0=RX+(60+bw*v1/R_[2])*RK,y0=RY+(74+i*50+12)*RK,cx=lerp(x0,WLX-w/2,.5),cy=Math.min(y0,WLY)-70,e=ein(q)*.6+q*.4;
      const x=lerp(lerp(x0,cx,e),lerp(cx,WLX-w/2,e),e),y=lerp(lerp(y0,cy,e),lerp(cy,WLY-8,e),e),sc=lerp(1,.45,e);
      g.save();g.translate(x+w/2,y+7);g.rotate(e*2.4*(i%2?-1:1));g.scale(sc,sc);g.shadowColor=R_[1];g.shadowBlur=12;g.beginPath();g.roundRect(-w/2,-7,w,14,6);g.fillStyle=mixc(R_[1],'#FFFFFF',.25);g.fill();g.strokeStyle='#FFE6C4';g.lineWidth=1;g.stroke();g.restore();
      for(let k=1;k<5;k++){const qq=Math.max(0,e-k*.05);const xx=lerp(lerp(x0,cx,qq),lerp(cx,WLX-w/2,qq),qq)+w/2,yy=lerp(lerp(y0,cy,qq),lerp(cy,WLY-8,qq),qq)+7;ell(xx,yy,2.5,2.5);g.fillStyle=rgba(R_[1],.5-k*.1);g.fill()}}
    for(let i=0;i<3;i++){const k=Math.max(0,1-Math.abs(t-CT[i]-.45)/.2);if(k>0)spark(WLX,WLY-6,22*k+3,k)}
  });
  hutLights();
  motes(16,23,0,100,540,640,'#E1C8B8',.4,1.6);
}
// ---------------- shot 7: layout — the bars are shorter; he sits back; fade to black
if(S.i===7){
  const u=S.u;setCam(lerp(300,294,u),lerp(500,506,u),1.24+u*.08,0);
  hutInterior({night:1,candle:1,bBack:1.5,main:()=>person(HERO,hutHero())});
  layer(1,()=>qPanels({qa:1,hi:.25*(1-u)}));
  hutLights();
  const qc=toScreen(QX+88,QY+84,1);lampLight(qc[0],qc[1],220,'#E0505A',.08+.05*Math.sin(t*9));
}
// ---------------- finishing
vignette(.6);
grain(.05);
wash('#000000',cutDip(t,[0,2.3,7.5,8.75,10.95]));
wash('#000000',sm(12.2,12.58,t));
}
```

## SCENE 5
```javascript
function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function blob(pts){const n=pts.length;g.beginPath();let m=[(pts[n-1][0]+pts[0][0])/2,(pts[n-1][1]+pts[0][1])/2];g.moveTo(m[0],m[1]);for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];g.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}g.closePath()}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
const ELDER={seed:3,r:25,l1:80,l2:80,a1:58,a2:54,torso:104,neck:8,sw:64,hw:46,thigh:24,shin:19,uarm:16,farm:14,foot:27,stoop:.16,
  skin:SKIN,hair:['#A9A2B4','#6F6884','#D2CCDA'],hairStyle:'hat',hat:['#4A3A55','#2E2440','#6A5878'],beard:['#A9A2B4','#6F6884','#D2CCDA'],beardLen:1.75,brows:1,top:['#5B4A6E','#3A2E4E','#7E6A90'],kaftan:1,pants:'#3B3352',boots:'#2B2338',belt:'#8A6A4A',hem:84};
const CARP={seed:4,r:24,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:70,hw:50,thigh:25,shin:20,uarm:16,farm:12,foot:27,
  skin:SKIN,hair:['#7A4E3E','#4E3236','#9A6A54'],hairStyle:'bald',beard:['#7A4E3E','#4E3236','#9A6A54'],beardLen:1.2,top:['#8C7F92','#5E5470','#B2A6B4'],rolled:1,apron:'#7A5A48',pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30};
const SMITH={seed:5,r:25,l1:74,l2:74,a1:56,a2:52,torso:100,neck:10,sw:84,hw:56,thigh:28,shin:22,uarm:19,farm:16,foot:28,
  skin:SKIN,hair:['#2E2838','#1F1A2A','#4A4058'],hairStyle:'short',beard:['#2E2838','#1F1A2A','#4A4058'],beardLen:1.45,top:['#6D6280','#4A4060','#8E84A0'],rolled:1,apron:'#4E3A40',pants:'#2E2840',boots:'#231C30',belt:'#3A2C34',hem:30};
const BOY={seed:6,r:20,l1:42,l2:42,a1:32,a2:30,torso:56,neck:5,sw:40,hw:32,thigh:16,shin:13,uarm:11,farm:10,foot:17,
  skin:SKIN,hair:['#79566A','#4E3A50','#A07A88'],hairStyle:'short',top:['#B0A0A8','#7A6A80','#D8C8C8'],pants:'#4B3463',boots:'#C98972',bare:1,belt:'#6B5050',hem:20};
function woman(seed,kc){return {seed,r:22,l1:62,l2:62,a1:46,a2:42,torso:82,neck:7,sw:62,hw:50,thigh:22,shin:17,uarm:15,farm:12,foot:22,skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'kerchief',kerchief:kc,top:['#C8B4AC','#8C7890','#E8D4C8'],skirt:['#6A4E6E','#46344E','#8A6E8E'],apron:'#B8A090',boots:'#3A2E3E',dress:1,blush:'#D98A80'}}
function worker(seed){const sh=[['#8C7F92','#5E5470','#B2A6B4'],['#79677F','#4E4060','#A08EA4'],['#9C8478','#6A5460','#C0A496']][seed%3];return {seed,r:23,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:66,hw:48,thigh:24,shin:19,uarm:15,farm:13,foot:26,skin:SKIN,hair:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],hairStyle:seed%2?'short':'bald',beard:seed%3===1?null:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],beardLen:1.2,top:sh,pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30}}
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function sky(c0,c1,c2,y1,y2){const gr=g.createLinearGradient(0,y1,0,y2);gr.addColorStop(0,c0);gr.addColorStop(.55,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.fillRect(-2000,-2000,4540,4960)}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function sun(x,y,r){glow(x,y,r*6,PAL.key,.35);glow(x,y,r*2.2,'#FFE0B8',.5);ell(x,y,r,r);g.fillStyle='#FFE6C4';g.fill()}
function clouds(y,n,seed,col,a,sp){for(let i=0;i<n;i++){const w=90+hash(seed+i)*140,x=((hash(seed+i*3)*900+t*sp*(.6+hash(i)*.6))%900)-180,yy=y+hash(seed+i*7)*70;g.fillStyle=rgba(col,a);ell(x,yy,w*.5,12+hash(i+seed)*8);g.fill();ell(x+w*.2,yy-8,w*.3,10);g.fill()}}
function hills(y,amp,col,seed,x0,x1){g.beginPath();g.moveTo(x0,y+400);for(let x=x0;x<=x1;x+=20){g.lineTo(x,y-amp*(.5+.5*nz(x*.006+seed))-amp*.3*nz(x*.02+seed*3))}g.lineTo(x1,y+400);g.closePath();g.fillStyle=col;g.fill()}
function forestLine(y,col,seed,x0,x1,h){g.fillStyle=col;g.beginPath();g.moveTo(x0,y+60);for(let x=x0;x<=x1;x+=9){const hh=h*(.5+hash(seed+x*.13)*.7);g.lineTo(x,y);g.lineTo(x+4.5,y-hh);g.lineTo(x+9,y)}g.lineTo(x1,y+60);g.closePath();g.fill()}
function birch(x,gy,h,seed,col){
  const sw=Math.sin(t*.9+seed)*4,lean=(hash(seed)-.5)*.08;
  const tx=x+lean*h,tw=7+h*.02;
  g.beginPath();g.moveTo(x-tw,gy);g.quadraticCurveTo(x-tw*.8+lean*h*.5,gy-h*.5,tx-tw*.4+sw*.3,gy-h);g.lineTo(tx+tw*.4+sw*.3,gy-h);g.quadraticCurveTo(x+tw*.8+lean*h*.5,gy-h*.5,x+tw,gy);g.closePath();fo(tc('#D9CCD6'));
  g.fillStyle=tc('#302B49');for(let i=0;i<9;i++){const yy=gy-h*hash(seed+i*2.1)*.9,xx=lerp(x,tx,(gy-yy)/h);g.fillRect(xx-tw*.6+hash(i+seed)*3,yy,tw*(.5+hash(seed+i)*.6),2.2)}
  const fc=col||['#4F5470','#6E6A86','#C9926F'];
  // weeping crown: soft volume, then drooping branches covered with small leaf clusters
  for(let i=0;i<4;i++){ell(tx+sw*.7+(hash(seed+i*4.1)-.5)*h*.3,gy-h*(.7+hash(seed+i*1.9)*.25),h*.17,h*.13);g.fillStyle=rgba(tc(fc[0]),.45);g.fill()}
  for(let b=0;b<10;b++){
    const by=gy-h*(.48+hash(seed+b*1.3)*.5),k0=(gy-by)/h,bx=lerp(x,tx,k0)+sw*k0;
    const dir=(b%2?1:-1)*(.45+hash(seed+b)*.55),len=h*(.16+hash(seed+b*2.2)*.16),sy_=Math.sin(t*1.3+b+seed)*3;
    const cx_=bx+dir*len*.6,cy_=by-len*.22,ex=bx+dir*len+sy_,ey=by+len*.6;
    g.strokeStyle=tc('#3A3048');g.lineWidth=1.5;g.beginPath();g.moveTo(bx,by);g.quadraticCurveTo(cx_,cy_,ex,ey);g.stroke();
    for(let k=0;k<7;k++){const u=k/6,px=lerp(lerp(bx,cx_,u),lerp(cx_,ex,u),u),py=lerp(lerp(by,cy_,u),lerp(cy_,ey,u),u)+4,r=h*.042*(1.15-u*.45);
      ell(px,py,r*1.35,r);g.fillStyle=tc(k%3?fc[0]:fc[1]);g.fill();ell(px+r*.35,py-r*.35,r*.6,r*.38);g.fillStyle=rgba(tc(fc[2]),.5);g.fill()}
  }
}
function izba(x,gy,w,h,seed,lit,smokeOn){
  const wall=tc('#6B4A4E'),log=tc('#4A3442'),roof=tc('#3E3048'),rl=tc('#5E4A62');
  const rh=h*.75;
  // wall
  g.beginPath();g.rect(x-w/2,gy-h,w,h);fo(wall);
  g.strokeStyle=log;g.lineWidth=2;for(let y=gy-h+10;y<gy;y+=12){g.beginPath();g.moveTo(x-w/2,y);g.lineTo(x+w/2,y);g.stroke()}
  for(let y=gy-h+4;y<gy;y+=12){for(const sd of[-1,1]){ell(x+sd*(w/2+3),y,5,5.5);fo(tc('#8A6A64'),.6)}}
  brush(x-w/2,gy-h,w,h,rgba(tc('#8A6A64'),1),seed,10,.25);
  // roof
  g.beginPath();g.moveTo(x-w/2-16,gy-h+4);g.lineTo(x,gy-h-rh);g.lineTo(x+w/2+16,gy-h+4);g.closePath();fo(roof);
  g.strokeStyle=rl;g.lineWidth=2;for(let i=1;i<7;i++){const u=i/7;g.beginPath();g.moveTo(lerp(x,x-w/2-16,u),lerp(gy-h-rh,gy-h+4,u));g.lineTo(lerp(x,x+w/2+16,u),lerp(gy-h-rh,gy-h+4,u));g.stroke()}
  // gable with carved board
  g.beginPath();g.moveTo(x-w*.3,gy-h);g.lineTo(x,gy-h-rh*.75);g.lineTo(x+w*.3,gy-h);g.closePath();fo(tc('#5A3E48'),.8);
  g.beginPath();g.moveTo(x,gy-h-rh-2);g.lineTo(x,gy-h-rh+16);ol(1.2);
  // okno
  const wx=x,wy=gy-h*.55,ww=w*.22,wh=h*.32;
  g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);g.fillStyle=lit>0?mixc('#2A2440','#FFB36B',lit):'#2A2440';g.fill();ol();
  if(lit>0)glow(wx,wy,ww*1.6,'#FFB36B',.35*lit);
  g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2.5;g.stroke();
  g.beginPath();g.moveTo(wx-ww*.75,wy-wh*.6);g.lineTo(wx,wy-wh*.95);g.lineTo(wx+ww*.75,wy-wh*.6);g.lineTo(wx+ww*.7,wy-wh*.5);g.lineTo(wx-ww*.7,wy-wh*.5);g.closePath();fo(tc('#B9A6A2'),.8);
  g.beginPath();g.rect(wx-ww*.7,wy+wh*.5,ww*1.4,5);fo(tc('#B9A6A2'),.8);
  // chimney + smoke
  const chx=x+w*.22,chy=gy-h-rh*.42;g.beginPath();g.rect(chx-7,chy-24,14,28);fo(tc('#4A3A48'));
  if(smokeOn)smoke(chx,chy-26,seed,.5);
}
function smoke(x,y,seed,a){for(let i=0;i<9;i++){const u=((t*.18+i/9+hash(seed+i)*.1)%1),r=6+u*26;g.fillStyle=rgba(tc('#B9A6C2'),a*(1-u)*(u*4>1?1:u*4));ell(x+u*30+Math.sin(t*.8+i)*6*u,y-u*120,r,r*.8);g.fill()}}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function leaves(n,seed,x0,y0,w,h,col){for(let i=0;i<n;i++){const ph=hash(seed+i),u=((t*(.08+ph*.06)+ph)%1),x=x0+hash(seed+i*2)*w+Math.sin(t*1.5+i)*25+u*60,y=y0+u*h;g.save();g.translate(x,y);g.rotate(t*2+i);ell(0,0,4,2);g.fillStyle=rgba(col,.85*Math.sin(u*Math.PI));g.fill();g.restore()}}
function ripples(x,y,w,t0,col,a){for(let i=0;i<3;i++){const u=((t-t0)*.5+i/3)%1;if(t<t0)continue;g.strokeStyle=rgba(col,a*(1-u));g.lineWidth=1.5;ell(x,y,w*(.2+u),w*(.2+u)*.32);g.stroke()}}
function fenceW(x0,x1,gy,h,seed){g.strokeStyle=tc('#5A4450');for(let x=x0;x<=x1;x+=22){g.beginPath();g.moveTo(x,gy);g.lineTo(x+(hash(seed+x)-.5)*4,gy-h);g.lineWidth=5;g.stroke()}g.lineWidth=3;for(let k=0;k<4;k++){g.strokeStyle=tc(k%2?'#6B5260':'#4E3A4A');g.beginPath();g.moveTo(x0,gy-h*.2-k*h*.18);for(let x=x0;x<=x1;x+=11)g.lineTo(x,gy-h*.2-k*h*.18+((x/11+k)%2?3:-3));g.stroke()}}
function palisade(x0,x1,gy,h,seed){for(let x=x0;x<=x1;x+=16){const hh=h*(.9+hash(seed+x)*.2);g.beginPath();g.moveTo(x-7,gy);g.lineTo(x-7,gy-hh);g.lineTo(x,gy-hh-12);g.lineTo(x+7,gy-hh);g.lineTo(x+7,gy);g.closePath();fo(tc(hash(x+seed)>.5?'#5A4448':'#4E3A44'),.8);g.strokeStyle=rgba(tc('#8A6A64'),.5);g.lineWidth=2;g.beginPath();g.moveTo(x-3,gy-hh+6);g.lineTo(x-3,gy-8);g.stroke()}}
function well(x,gy,s,state,crank){
  g.save();g.translate(x,gy);g.scale(s,s);const LW0=LW;LW/=s;
  const old=1-state,lg=mixc(tc('#5E4648'),tc('#A07A60'),state),lgd=mixc(tc('#3E2E3A'),tc('#7A5848'),state);
  ell(0,4,110,14);g.fillStyle=rgba(PAL.out,.35);g.fill();
  // posts
  const pl=old*.06;for(const sd of[-1,1]){g.save();g.translate(sd*70,-60);g.rotate(sd*pl);g.beginPath();g.rect(-6,-130,12,140);fo(lgd);g.restore()}
  // roof
  g.save();g.translate(0,-195);g.rotate(old*.05);g.beginPath();g.moveTo(-100,20);g.lineTo(0,-38);g.lineTo(100,20);g.lineTo(92,28);g.lineTo(0,-24);g.lineTo(-92,28);g.closePath();fo(mixc(tc('#3E3048'),tc('#8A6A58'),state));
  g.strokeStyle=rgba(tc('#1F2236'),.4);g.lineWidth=1.5;for(let i=-4;i<=4;i++){g.beginPath();g.moveTo(i*20,-30+Math.abs(i)*10);g.lineTo(i*22,22);g.stroke()}
  if(old>.5){g.beginPath();g.moveTo(30,0);g.lineTo(50,10);g.lineTo(38,16);g.closePath();g.fillStyle=tc('#241F4A');g.fill()}
  g.restore();
  // windlass
  const wy=-125;g.beginPath();g.rect(-66,wy-9,132,18);fo(lg);
  g.strokeStyle=tc('#B8A0A0');g.lineWidth=2;for(let i=-3;i<=3;i++){const a=crank+i*.6;g.beginPath();g.moveTo(i*14+Math.sin(a)*3,wy-8);g.lineTo(i*14+Math.sin(a)*3,wy+8);g.stroke()}
  const ca=crank;g.beginPath();g.moveTo(70,wy);g.lineTo(84,wy);ol();g.strokeStyle=lgd;g.lineWidth=5;g.stroke();
  const hx_=84+0,hy_=wy;g.beginPath();g.moveTo(hx_,hy_);g.lineTo(hx_+Math.cos(ca)*24,hy_+Math.sin(ca)*24);g.lineWidth=7+2*LW;g.strokeStyle=PAL.out;g.stroke();g.lineWidth=7;g.strokeStyle=lgd;g.stroke();
  // log box (srub)
  for(let i=0;i<5;i++){const y=-12-i*14,wb=old*Math.sin(i*1.7)*4;g.beginPath();g.rect(-80+wb,y-7,160,14);fo(i%2?lg:mixc(lg,lgd,.3),.9);ell(-80+wb,y,6,7);fo(lgd,.7);ell(80+wb,y,6,7);fo(lgd,.7);
    if(old>.5&&i%2===0){g.strokeStyle=rgba(tc('#241F4A'),.7);g.lineWidth=1.5;g.beginPath();g.moveTo(-40+i*12,y-5);g.lineTo(-30+i*12,y+2);g.lineTo(-20+i*12,y-1);g.stroke()}}
  if(state>.5){g.strokeStyle=tc('#8C8FA3');g.lineWidth=4;for(const sx of[-50,50]){g.beginPath();g.moveTo(sx,-82);g.lineTo(sx,-6);g.stroke()}}
  brush(-80,-80,160,72,rgba(tc('#E7C6AD'),1),11,8,.15);
  LW=LW0;g.restore();
  return [x,gy+wy*s];
}
function bucket(x,y,s,ang,water){g.save();g.translate(x,y);g.rotate(ang||0);g.scale(s,s);const LW0=LW;LW/=s;g.beginPath();g.moveTo(-14,-16);g.quadraticCurveTo(0,-34,14,-16);ol(1);g.strokeStyle=tc('#8C8FA3');g.lineWidth=2;g.stroke();g.beginPath();g.moveTo(-14,-16);g.lineTo(14,-16);g.lineTo(11,12);g.lineTo(-11,12);g.closePath();fo(tc('#6B5A60'));g.strokeStyle=tc('#8C8FA3');g.lineWidth=2.5;g.beginPath();g.moveTo(-13,-6);g.lineTo(13,-6);g.moveTo(-12,5);g.lineTo(12,5);g.stroke();if(water){ell(0,-16,13,3.5);g.fillStyle=rgba('#9AB0D0',.9);g.fill()}LW=LW0;g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function grassRow(y,seed,n,x0,x1,h,col){g.lineCap='round';for(let i=0;i<n;i++){const x=x0+hash(seed+i)*(x1-x0),hh=h*(.5+hash(seed+i*3)*.7),sw=Math.sin(t*1.6+x*.05)*hh*.15;g.strokeStyle=col;g.lineWidth=2.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+sw*.3,y-hh*.6,x+sw+(hash(i)-.5)*10,y-hh);g.stroke()}}
function birds(){g.strokeStyle=rgba('#241F4A',.8);g.lineWidth=2;for(let i=0;i<5;i++){const x=((t*28+i*40+hash(i)*30)%900)-200,y=330+i*9+Math.sin(t*2+i)*4,f=Math.sin(t*9+i*2)*4;g.beginPath();g.moveTo(x-7,y-f);g.quadraticCurveTo(x-3,y-2,x,y);g.quadraticCurveTo(x+3,y-2,x+7,y-f);g.stroke()}}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function villageGround(T){
  const gr=g.createLinearGradient(0,600,0,1100);gr.addColorStop(0,mixc(PAL.ground,PAL.far,.5));gr.addColorStop(.25,PAL.ground);gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-1200,618,3600,1400);
  g.fillStyle=tc('#4A3848');g.beginPath();g.moveTo(-1200,676);for(let x=-1200;x<=2400;x+=40)g.lineTo(x,676+nz(x*.02)*4);g.lineTo(2400,770);for(let x=2400;x>=-1200;x-=40)g.lineTo(x,770+nz(x*.03+5)*5);g.closePath();g.fill();
  brush(-200,680,1200,90,'#6A5468',21,60,.35);
  for(const ry of[704,738]){g.strokeStyle=rgba('#1F2236',.55);g.lineWidth=4;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke();g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=1.5;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+3+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke()}
  for(const pd of[[150,740,60],[420,706,48],[700,738,70],[-150,706,50]]){ell(pd[0],pd[1],pd[2],7);const pg=g.createLinearGradient(pd[0]-pd[2],0,pd[0]+pd[2],0);pg.addColorStop(0,T.sky[1]);pg.addColorStop(.6,T.sky[2]);pg.addColorStop(1,T.moon?'#4B3463':'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);ripples(pd[0]+10,pd[1],pd[2]*.5,0,'#FFE6C4',.4)}
  grassRow(676,1,60,-600,1400,22,tc('#4F5470'));
}
const TOD={
  dawn:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[470,520],tint:'#6C4377',ta:.12,lit:.5},
  day:{sky:['#4B3463','#9A6A8E','#F2B895'],sun:[410,300],tint:'#F09A6C',ta:.04,lit:0},
  sunset:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[330,590],tint:'#F09A6C',ta:.14,lit:.8},
  night:{sky:['#120F2A','#241F4A','#4B3463'],sun:null,moon:[400,210],tint:'#241F4A',ta:.42,lit:1}
};
function villageWorld(o){
  const T=TOD[op(o,'tod','dawn')];TINT=T.tint;TA=T.ta;
  const bF=op(o,'bF',0),bM=op(o,'bM',0),bFg=op(o,'bFg',2.5);
  layer(0,()=>sky(T.sky[0],T.sky[1],T.sky[2],-150,620));
  layer(.06,()=>{if(T.sun)sun(T.sun[0],T.sun[1],20);if(T.moon){stars(60,5,-300,-200,1200,700);glow(T.moon[0],T.moon[1],110,'#E1C8B8',.22);ell(T.moon[0],T.moon[1],16,16);g.fillStyle='#E7DCE6';g.fill()}clouds(380,7,3,T.sky[2],.22,6);clouds(260,5,8,T.sky[1],.3,4)},bF*.5);
  layer(.2,()=>{if(!T.moon)birds();hills(575,42,mixc(PAL.far,T.sky[2],.32),1,-600,1300);forestLine(592,mixc(PAL.far,T.sky[1],.15),4,-600,1300,24);if(o.far)o.far()},bF);
  layer(.5,()=>{g.fillStyle=mixc(PAL.ground,PAL.far,.55);g.fillRect(-900,600,2600,300);
    izba(-120,622,150,90,1,T.lit,1);birch(30,628,170,2);izba(160,620,130,80,2,T.lit*.8,1);birch(300,628,200,5);izba(470,622,160,92,3,T.lit,1);birch(600,630,180,8);izba(760,620,140,86,4,T.lit*.7,1);fenceW(-300,900,640,26,3);if(o.mid)o.mid()},bM);
  layer(1,()=>{villageGround(T);if(o.main)o.main()},op(o,'bMain',0));
  if(op(o,'fg',1))layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---- scene
// SCENE 5 — «Утро: деревня сама идёт к колодцу» (0 – 13.82)
// shots: door/freeze · wide square · carpenter · smith · boys · hero walks to elder · elder shrugs (two-shot)
const ST=[0,2.2,4.95,6.45,7.55,9.4,11.75];
const S=shot(t,ST);
const GY=716,HS=.62,WX=410,WGY=692,EX=520;
// ---------- motion helpers
// walked distance: constant speed v from t0, soft stop at D
function wd(tt,t0,v,D){const l=Math.max(0,tt-t0)*v;return l<D-40?l:D-40+40*(1-Math.exp(-(l-(D-40))/40))}
function gaitFeet(C,d,st,s,face){const L=(C.l1+C.l2)*.09,a=gait(d/s,0,0,face,1,st/s,L,0),b=gait(d/s,0,0,face,1,st/s,L,.5);return [[a.fx,a.fy],[b.fx,b.fy]]}
function standFeet(C,face,yaw){const rx=-Math.cos(yaw)*C.hw*.36;return [[rx*1.1+face*6,0],[-rx*1.1-face*5,0]]}
// walker: returns person options; blends from the last stride into a standing pose after arrival
function walker(C,x0,face,t0,v,D,y,s){
  const d=wd(t,t0,v,D),st=(C.l1+C.l2)*.76*s,yaw=.95*face,o={x:x0+face*d,y,s,yaw,t,lean:.04*face};
  const ts=t0+(D+60)/v,b=sm(ts,ts+.4,t);
  if(b<=0&&t>=t0)o.walk={d,st};
  else{const f=gaitFeet(C,d,st,s,face),q=standFeet(C,face,yaw),bb=t<t0?1:b;
    o.fr=[lerp(f[0][0],q[0][0],bb),lerp(f[0][1],q[0][1],bb)-Math.sin(sm(0,.5,bb)*Math.PI)*5];
    o.fl=[lerp(f[1][0],q[1][0],bb),lerp(f[1][1],q[1][1],bb)-Math.sin(sm(.5,1,bb)*Math.PI)*5];o.lean=.04*face*(1-bb)}
  o.arr=b;return o;
}
function talk(tt,k){return (.5+.5*Math.sin(tt*15+k))*(.55+.45*Math.sin(tt*4.3+k*2))}
// ---------- props
function boards(x,y,ang,len,n,col){g.save();g.translate(x,y);g.rotate(ang);for(let i=0;i<n;i++){g.beginPath();g.roundRect(-len/2+i*7-7,-i*7-6,len,7,2);fo(tc(i%2?mixc(col,'#6B4A4E',.2):col),.8);g.strokeStyle=rgba('#FFE6C4',.25);g.lineWidth=1.5;g.beginPath();g.moveTo(-len/2+i*7,-i*7-4);g.lineTo(len/2+i*7-14,-i*7-4);g.stroke()}g.restore()}
function axeOnShoulder(x,y,face){g.save();g.translate(x,y);g.rotate(face*-.9);segs([[0,10,0,-70,5,tc('#A0704A')]]);g.beginPath();g.moveTo(-face*2,-62);g.lineTo(-face*22,-74);g.quadraticCurveTo(-face*28,-62,-face*22,-48);g.lineTo(-face*2,-56);g.closePath();fo(tc('#8C8FA3'),.8);g.restore()}
function rag(x,y,ang){g.save();g.translate(x,y);const sw=Math.sin(t*7)*4;g.beginPath();g.moveTo(-8,-6);g.quadraticCurveTo(6,-10,10,-2);g.quadraticCurveTo(8+sw*.5,14,4+sw,28);g.lineTo(-6+sw,26);g.quadraticCurveTo(-4,10,-8,-6);g.closePath();fo(tc('#CDB39C'),.8);g.strokeStyle=rgba('#8A7A70',.7);g.lineWidth=1.4;g.beginPath();g.moveTo(-2,0);g.lineTo(sw*.6,22);g.stroke();g.restore()}
function brackets(x,y,face){g.save();g.translate(x,y);for(let i=0;i<3;i++){const yy=-i*7,xx=i*4*face;g.beginPath();g.moveTo(xx-30,yy-10);g.lineTo(xx-30,yy);g.lineTo(xx+30,yy);g.lineTo(xx+30,yy-10);g.lineWidth=5+2*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.stroke();g.lineWidth=5;g.strokeStyle=tc(i===1?'#9A9EB2':'#8C8FA3');g.stroke();g.strokeStyle=rgba('#E1E4F0',.6);g.lineWidth=1.5;g.beginPath();g.moveTo(xx-26,yy-1);g.lineTo(xx+20,yy-1);g.stroke()}g.restore()}
function hemStones(x,y,face,k){g.save();g.translate(x,y);g.beginPath();g.moveTo(-22,-6);g.quadraticCurveTo(0,4,22,-6);g.quadraticCurveTo(26,26,0,34);g.quadraticCurveTo(-26,26,-22,-6);g.closePath();fo(tc('#B0A0A8'),.8);
  g.strokeStyle=tc('#7A6A80');g.lineWidth=1.5;g.beginPath();g.moveTo(-12,4);g.quadraticCurveTo(-8,20,0,28);g.moveTo(10,4);g.quadraticCurveTo(8,18,2,28);g.stroke();
  for(let i=0;i<4;i++){const bx=-12+i*8+Math.sin(t*9+i+k)*.8,by=-6+(i%2)*3;blob([[bx-6,by+2],[bx-4,by-5],[bx+3,by-6],[bx+6,by],[bx+2,by+5]]);fo(tc(i%2?'#7D7890':'#8E89A0'),.7)}g.restore()}
function palmUp(x,y,sd){g.save();g.translate(x,y);ell(0,-2,8,4.5,sd*.15);fo(tc(SKIN[0]),.7);g.strokeStyle=tc(SKIN[1]);g.lineWidth=1.3;for(let i=0;i<3;i++){g.beginPath();g.moveTo(sd*(3+i*1.5),-4-i);g.lineTo(sd*(9+i*1.5),-6-i*1.5);g.stroke()}ell(-sd*5,-5,2.6,3.6,-sd*.6);fo(tc(SKIN[0]),.6);g.restore()}
// hero's izba front on the action plane: log wall, carved okno, door (open 0..1)
function izbaFront(x0,x1,gy,h,dx,open){
  const top=gy-h;
  g.beginPath();g.rect(x0,top,x1-x0,h);g.fillStyle=tc('#5A3E48');g.fill();
  for(let y=top;y<gy;y+=24){const lg=g.createLinearGradient(0,y,0,y+24);lg.addColorStop(0,tc('#7A5A5C'));lg.addColorStop(.45,tc('#6B4A4E'));lg.addColorStop(1,tc('#3E2C3A'));g.fillStyle=lg;g.fillRect(x0,y+1,x1-x0,22);g.fillStyle=rgba('#1F2236',.55);g.fillRect(x0,y,x1-x0,2);
    ell(x1+6,y+12,11,11);fo(tc('#8A6A64'),.7);g.strokeStyle=rgba('#5A3E48',.8);g.lineWidth=1.2;g.beginPath();g.arc(x1+6,y+12,5,0,6.3);g.stroke()}
  brush(x0,top,x1-x0,h,'#8A6A64',17,40,.22);
  // eave with carved edge
  g.beginPath();g.moveTo(x0-40,top-30);g.lineTo(x1+40,top-30);g.lineTo(x1+40,top+4);for(let x=x1+40;x>x0-40;x-=16)g.quadraticCurveTo(x-8,top+16,x-16,top+4);g.closePath();fo(tc('#3E3048'));
  g.fillStyle=tc('#2E2440');g.fillRect(x0-40,top-60,x1-x0+80,30);
  // okno with nalichnik
  const wx=dx-190,wy=top+70;g.beginPath();g.rect(wx-34,wy,68,70);g.fillStyle=tc('#2A2440');g.fill();ol();
  g.save();g.beginPath();g.rect(wx-34,wy,68,70);g.clip();g.fillStyle=rgba('#F09A6C',.25);g.beginPath();g.moveTo(wx-34,wy+70);g.lineTo(wx+10,wy);g.lineTo(wx+30,wy);g.lineTo(wx-14,wy+70);g.fill();g.restore();
  g.strokeStyle=tc('#B9A6A2');g.lineWidth=4;g.beginPath();g.moveTo(wx,wy);g.lineTo(wx,wy+70);g.moveTo(wx-34,wy+30);g.lineTo(wx+34,wy+30);g.stroke();
  g.beginPath();g.moveTo(wx-50,wy-4);g.lineTo(wx,wy-30);g.lineTo(wx+50,wy-4);g.lineTo(wx+44,wy+4);g.lineTo(wx-44,wy+4);g.closePath();fo(tc('#B9A6A2'),.9);
  g.beginPath();g.rect(wx-46,wy+70,92,9);fo(tc('#B9A6A2'),.9);
  for(let i=0;i<5;i++){ell(wx-36+i*18,wy+84,4,5);fo(tc('#B9A6A2'),.6)}
  // doorway
  const dw=74,dh=198,hxL=dx-dw/2;
  g.beginPath();g.rect(hxL,gy-dh,dw,dh);const ig=g.createLinearGradient(0,gy-dh,0,gy);ig.addColorStop(0,'#16121F');ig.addColorStop(1,'#2A1E2E');g.fillStyle=ig;g.fill();
  glow(dx,gy-60,60,'#FFB36B',.18);
  // door leaf swinging toward the camera around the left hinge
  const a=open*1.25,fw=dw*Math.cos(a),gr=Math.sin(a)*10;
  g.beginPath();g.moveTo(hxL,gy-dh);g.lineTo(hxL+fw,gy-dh-gr);g.lineTo(hxL+fw,gy+gr*.6);g.lineTo(hxL,gy);g.closePath();g.fillStyle=tc(mixc('#6B4A4E','#3E2C3A',open*.5));g.fill();ol();
  g.strokeStyle=rgba('#2E2234',.8);g.lineWidth=2;for(let i=1;i<4;i++){g.beginPath();g.moveTo(hxL+fw*i/4,gy-dh-gr*i/4);g.lineTo(hxL+fw*i/4,gy+gr*.6*i/4);g.stroke()}
  if(fw>8){ell(hxL+fw*.82,gy-dh*.5,3,3);fo(tc('#8C8FA3'),.6)}
  // jambs, lintel, threshold log
  g.beginPath();g.rect(hxL-10,gy-dh-12,dw+20,12);fo(tc('#7A5A5C'),.9);for(const sd of[-1,1]){g.beginPath();g.rect(dx+sd*(dw/2+5)-5,gy-dh,10,dh);fo(tc('#7A5A5C'),.9)}
  g.beginPath();g.roundRect(hxL-16,gy-6,dw+32,12,6);fo(tc('#6B4A4E'),.9);
  // firewood stack and a broom by the wall
  for(let r=0;r<4;r++)for(let i=0;i<6-r;i++){ell(x0+80+i*22+r*11,gy-10-r*19,11,10);fo(tc(hash(i+r*7)>.5?'#8A6A64':'#7A5A5C'),.7);g.beginPath();g.arc(x0+80+i*22+r*11,gy-10-r*19,4,0,6.3);g.strokeStyle=rgba('#5A3E48',.7);g.lineWidth=1;g.stroke()}
}
// pecking hen (wanders slowly, head bobs)
function hen(x,y,s,seed){const pk=Math.max(0,Math.sin(t*3.1+seed*2))**6,dir=Math.sin(t*.35+seed)>0?1:-1,hx_=x+Math.sin(t*.35+seed)*14;g.save();g.translate(hx_,y);g.scale(s*dir,s);
  ell(0,-14,14,10,-.2);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.8);poly([[-12,-18],[-22,-28],[-18,-12]],1);fo(tc(seed%2?'#C0B0AC':'#7A5048'),.8);
  const hy=lerp(-26,-6,pk),hxx=lerp(12,18,pk);segs([[8,-18,hxx,hy,5,tc(seed%2?'#D8C8C0':'#A0705A')]],1);ell(hxx,hy,5,5);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.7);poly([[hxx+4,hy-1],[hxx+9,hy+1],[hxx+4,hy+2]],1);g.fillStyle=tc('#E0B060');g.fill();ell(hxx,hy-5,2.5,2.5);g.fillStyle=tc('#C04050');g.fill();
  g.strokeStyle=tc('#C89040');g.lineWidth=1.6;g.beginPath();g.moveTo(-2,-5);g.lineTo(-3,0);g.moveTo(3,-5);g.lineTo(4,0);g.stroke();g.restore()}
function burdock(x,y,s,seed){g.save();g.translate(x,y);g.scale(s,s);for(let i=0;i<5;i++){const a=-1.9+i*.45+Math.sin(t*1.1+i+seed)*.05;g.save();g.rotate(a+Math.PI/2);g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(-26,-60,0,-110);g.quadraticCurveTo(26,-60,0,0);g.fillStyle=i%2?'#2A2238':'#241E34';g.fill();g.strokeStyle='#3A3050';g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,-100);g.stroke();g.restore()}g.restore()}

// ---------- cast (positions are continuous over the whole scene)
const PC=[CARP,-150,1,-.2,60,480,698,HS],PS=[SMITH,1000,-1,2.9,56,330,698,HS],PB=[BOY,860,-1,4.6,52,290,708,HS];
const W1=worker(2),W2=worker(0),W8=worker(8),WM2=woman(12,['#A0606A','#703E4A','#C08088']),BOY2=Object.assign({},BOY,{seed:16}),WM=woman(11,['#7A5A8A','#4E3A60','#9A7AAA']);
function cast(){
  const L=[];
  // planks man from the right: sets the boards down by the well
  {const o=walker(W1,760,-1,1.0,60,240,682,HS),sh=-238,dn=sm(6.2,6.9,t);
    if(dn<1){o.hl=[lerp(12,-30,dn),lerp(sh-10,-130,dn)];o.lean=lerp(o.lean,-.25,dn);const px=lerp(4,-40,dn),py=lerp(sh-16,-120,dn);o.itemL=()=>boards(px,py,lerp(.1,-.02,dn),230,3,'#A07A60')}
    else{o.lean=-.2*(1-sm(6.9,7.4,t));o.hr=[-40,-150+Math.sin(t*3)*4];o.em={look:[-.6,.3]}}
    L.push({o,C:W1})}
  // man with an axe from the left (enters after the door shot)
  {const o=walker(W2,60,1,2.2,64,200,684,HS);o.hr=[6,-246];o.itemR=(gg,ex,ey)=>axeOnShoulder(ex,ey,1);L.push({o,C:W2,gate:2.2})}
  // second well woman brings her bucket too
  {const o=walker(WM2,700,-1,1.4,50,120,678,HS);o.itemR=(gg,ex,ey)=>bucket(ex,ey+26,1.7,Math.sin(t*3)*.08,0);o.em={look:[-.5,.1],smile:.2};L.push({o,C:WM2})}
  // a man already crouching at the old log box, feeling the rotten logs
  {const o={x:322,y:700,s:HS,yaw:.95,t,hipY:-84,lean:.42,hipX:-6,fr:[34,0],fl:[-14,0],hr:[66+Math.sin(t*2.3)*6,-72],hl:[58,-96],em:{look:[.6,.5],browIn:.3},tilt:.15};L.push({o,C:W8})}
  // carpenter wiping his hands with a rag (right hand)
  {const o=walker(...PC),w=t*8.5;o.hl=[44,-150+Math.sin(t*2)*2];o.hr=[46+9*Math.cos(w),-146+6*Math.sin(w)];o.itemR=(gg,ex,ey)=>rag(ex+2,ey,0);
    o.em={look:[.2,.3],smile:.15};o.tilt=.12;L.push({o,C:CARP})}
  // smith with iron brackets at the chest, both hands
  {const o=walker(...PS);o.hr=[-40,-196];o.hl=[-30,-192];o.itemL=(gg,ex,ey)=>brackets(ex-6,ey-4,-1);o.em={look:[-.3,.1]};L.push({o,C:SMITH})}
  // two boys with stones in their shirt hems
  for(const k of[0,1]){const C=k?BOY2:BOY,o=walker(C,PB[1]+k*44,-1,PB[3]+k*.15,PB[4],PB[5],PB[6]+k*5,HS);o.hr=[-14,-78];o.hl=[-8,-76];o.itemL=(gg,ex,ey)=>hemStones(ex-4,ey+10,-1,k);o.em={look:[-.4+k*.5,.1],smile:.3};o.turn=k?.5*Math.sin(t*1.5):0;L.push({o,C})}
  // woman already waiting at the well with an empty bucket
  {const o={x:545,y:690,s:HS,yaw:-.35,t,em:{look:[-.6+.3*Math.sin(t*.7),.1]},itemR:(gg,ex,ey)=>bucket(ex,ey+26,1.7,Math.sin(t*1.2)*.05,0)};L.push({o,C:WM})}
  return L;
}
// elder near the well; shrug with palms up 11.9..
function elderO(){
  const look=sm(10.25,10.35,t),head=sm(10.32,10.55,t),body=sm(10.45,10.8,t);
  const sh=ease((t-11.95)/.4),pre=sm(11.8,11.95,t)*(1-sh);
  const o={x:EX,y:730,s:HS,yaw:lerp(lerp(-.35,-.75,body),-.42,sh),t,turn:lerp(.25,-.1,head)*(1-sh)-.2*sh,ls:1};
  o.em={look:[lerp(-.3,-.8,look),.1],brow:lerp(0,.85,sh),smile:lerp(0,-.45,sh),eyeOpen:lerp(1,1.15,sh),open:t>12.6?.12*talk(t,3)*sm(12.6,12.8,t):0};
  o.tilt=lerp(0,.12,sh);o.headDY=lerp(0,6,sh)+pre*-2;o.lean=lerp(0,.06,sh);
  const rest=[[-14,-150],[16,-148]],up=[[-92,-206],[92,-204]];
  o.hr=[lerp(rest[0][0],up[0][0],sh)+pre*4,lerp(rest[0][1],up[0][1],sh)+pre*8];o.hl=[lerp(rest[1][0],up[1][0],sh)-pre*4,lerp(rest[1][1],up[1][1],sh)+pre*8];
  if(sh>.5){o.itemR=(gg,ex,ey)=>palmUp(ex,ey,-1);o.itemL=(gg,ex,ey)=>palmUp(ex,ey,1)}
  return o;
}
// hero: steps out of the door and freezes; later walks to the elder and asks
function heroO(){
  let o;
  if(t<9){const d=40*ease(cl((t-.55)/.8,0,1)),x=78+d;o={x,y:GY,s:HS,yaw:.95,t};
    const ph=d/(110*HS);if(t<1.35&&t>.55)o.walk={d,st:110*HS};else{const f=gaitFeet(HERO,t<=.55?0:40,110*HS,HS,1);o.fr=f[0];o.fl=f[1];if(t<=.55){const q=standFeet(HERO,1,.95);o.fr=q[0];o.fl=q[1]}}
    // freeze: eyes, then head, then body
    const e=sm(1.5,1.6,t),hd=sm(1.58,1.8,t),bd=sm(1.7,2.0,t);
    o.em={look:[lerp(.2,.85,e),lerp(.2,-.1,e)],eyeOpen:lerp(1,1.3,e),brow:lerp(0,.8,e),open:.25*hd,blink:t>1.5&&t<1.57?1:0};
    o.tilt=lerp(.05,-.12,hd);o.turn=lerp(0,.15,hd);o.lean=lerp(.05,-.07,bd);o.medal='hidden';
    o.hl=t<1.0?[lerp(-30,30,sm(.5,1,t)),-160]:null;o.hr=bd>0?[lerp(18,30,bd),lerp(-60,-110,bd)]:null;
    void ph;
  }else{
    const d=wd(t,8.75,80,130),x=300+d;o={x,y:GY+10,s:HS,yaw:.95,t,medal:'hidden'};
    const ts=8.75+190/80,b=sm(ts,ts+.4,t);
    if(b<=0)o.walk={d,st:110*HS};else{const f=gaitFeet(HERO,d,110*HS,HS,1),q=standFeet(HERO,1,.85);o.fr=[lerp(f[0][0],q[0][0],b),lerp(f[0][1],q[0][1],b)-Math.sin(sm(0,.5,b)*Math.PI)*5];o.fl=[lerp(f[1][0],q[1][0],b),lerp(f[1][1],q[1][1],b)-Math.sin(sm(.5,1,b)*Math.PI)*5]}
    const ask=sm(10.65,11.05,t)*(1-sm(11.9,12.3,t)*.6);
    o.yaw=lerp(.95,.8,b);o.lean=lerp(.04,.08,ask)-sm(12.0,12.4,t)*.06;
    o.em={look:[.7,-.05],brow:.5*ask+.3*sm(12.1,12.4,t),browIn:.35*sm(12.1,12.5,t),open:t>10.75&&t<11.8?.4*talk(t,1):0,smile:0};
    o.tilt=-.06*ask;o.hr=ask>0?[lerp(16,56,ask),lerp(-55,-186,ask)]:null;if(ask>.6)o.itemR=(gg,ex,ey)=>palmUp(ex,ey,1);
  }
  o.ls=1;o.rimC=PAL.rim;o.rimA=.6;return o;
}
// opt.focus: characters kept sharp; everyone else on the action plane gets opt.bb px of depth-of-field blur
const WELLK={};
function world(bF,bM,bFg,opt){
  const foc=op(opt,'focus',null),bb=op(opt,'bb',0);
  villageWorld({tod:'day',bF,bM,fg:0,
    far:()=>{palisade(820,1300,600,46,4)},
    mid:()=>{ // far villagers drifting toward the square on the house plane
      for(let i=0;i<3;i++){const C=worker(5+i),f=i%2?1:-1,x0=i%2?-140+i*30:760-i*20,d=wd(t,i*.6,30,260);person(C,{x:x0+f*d,y:646+i*3,s:.3,yaw:.95*f,t,walk:{d,st:(C.l1+C.l2)*.76*.3},shadowA:.5})}},
    main:()=>{
      izbaFront(-560,120,GY-8,290,78,sm(.15,.75,t));
      // stones and boards already brought, piling up by the well
      const pile=sm(5,11,t);for(let i=0;i<Math.floor(3+pile*6);i++){blob([[480+i*9,697],[483+i*9,689-(i%3)*3],[490+i*9,688],[494+i*9,696]]);fo(tc(i%2?'#7D7890':'#8E89A0'),.6)}
      boards(250,700,0,150,Math.floor(1+pile*3),'#A07A60');
      hen(230,708,.62,1);hen(300,716,.6,2);hen(640,712,.58,3);
    }});
  const L=cast();L.push({o:elderO(),C:ELDER});L.push({o:heroO(),C:HERO,hero:1});L.push({o:{y:WGY},C:WELLK});
  L.sort((a,b)=>a.o.y-b.o.y);
  for(const a of L){if(a.gate&&t<a.gate)continue;
    layer(1,()=>{if(a.C===WELLK)well(WX,WGY,.85,0,Math.sin(t*.6)*.3);else person(a.C,a.o);
      // doorway shadow while the hero is still inside
      if(a.hero&&t<1.3){const k=1-sm(.5,1.25,t);g.beginPath();g.rect(78-37,GY-8-198,74,198);g.clip();g.fillStyle=rgba('#16121F',.75*k);g.fillRect(0,0,300,800)}
    },!foc||foc.includes(a.C)?0:bb)}
  layer(1,()=>grassRow(770,4,40,-600,1400,30,tc('#3E3A58')));
  layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---------------- shot 0: door opens, hero steps out and freezes
if(S.i===0){
  const u=S.u;setCam(140+u*10,592-u*8,1.85+u*.12,-.01+u*.012);
  CAM.sx=kick(t,.3,2,.25);
  world(4,2.5,3,{focus:[HERO],bb:2});
  layer(1.35,()=>{burdock(-30,820,1.2,1);burdock(560,840,1,4)},4);
  motes(18,5,200,150,340,500,'#FFE6C4',.45,1.8);
}
// ---------------- shot 1: wide — people gather at the old well
if(S.i===1){
  const u=S.u;setCam(372-u*12,548-u*6,1.2+u*.07,.008-u*.016);
  world(0,0,2.5);
  leaves(8,4,0,200,540,600,'#C9926F');
}
// ---------------- shot 2: carpenter tracking — wipes his hands with the rag
if(S.i===2){
  const c=walker(...PC);setCam(c.x+42+S.u*6,598,1.95+S.u*.08,-.012);
  world(3,2,4,{focus:[CARP],bb:2.2});
  layer(1.4,()=>{burdock(c.x-160,860,1.1,2)},5);
  leaves(6,9,0,150,540,600,'#C9926F');
}
// ---------------- shot 3: smith, low medium — brackets at the chest
if(S.i===3){
  const c=walker(...PS);setCam(c.x-28-S.u*8,592,2.35+S.u*.1,.02);
  world(4,3,5,{focus:[SMITH],bb:2.5});
  motes(14,8,0,200,540,500,'#FFE6C4',.4,1.8);
}
// ---------------- shot 4: the two boys, low angle
if(S.i===4){
  const c=walker(...PB);setCam(c.x+24-S.u*10,642,2.3+S.u*.08,-.02+S.u*.01);
  world(4,3,4,{focus:[BOY,BOY2],bb:2.5});
  layer(1.4,()=>{burdock(c.x+150-S.u*40,880,1.3,5)},5);
  leaves(6,2,0,200,540,500,'#C9926F');
}
// ---------------- shot 5: hero walks to the elder and asks
if(S.i===5){
  const h=heroO(),u=S.u;setCam(lerp(h.x+60,475,sm(.45,1,u)),596,1.65+u*.15,.006);
  world(3,2,4,{focus:[HERO,ELDER],bb:1.6});
  motes(16,3,0,150,540,560,'#FFE6C4',.4,1.8);
}
// ---------------- shot 6: two-shot — elder shrugs, palms up
if(S.i===6){
  const u=S.u;setCam(486+u*6,588-u*6,2.45+u*.12,-.014);
  CAM.sy=kick(t,12.2,2,.25);
  world(4,2.5,4,{focus:[HERO,ELDER],bb:2.2});
  leaves(5,6,0,150,540,500,'#C9926F');
}
// ---------------- finishing
g.save();g.globalCompositeOperation='screen';beam(600,60,320,700,30,170,'#FFB36B',.14);g.restore();
vignette(.42);
grain(.05);
wash('#000000',cutDip(t,ST));
wash('#000000',1-sm(0,.4,t));
}
```

## SCENE 6
```javascript
function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function eout(u){u=cl(u,0,1);return 1-Math.pow(1-u,3)}
function ein(u){u=cl(u,0,1);return u*u*u}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function blob(pts){const n=pts.length;g.beginPath();let m=[(pts[n-1][0]+pts[0][0])/2,(pts[n-1][1]+pts[0][1])/2];g.moveTo(m[0],m[1]);for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];g.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}g.closePath()}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
const ELDER={seed:3,r:25,l1:80,l2:80,a1:58,a2:54,torso:104,neck:8,sw:64,hw:46,thigh:24,shin:19,uarm:16,farm:14,foot:27,stoop:.16,
  skin:SKIN,hair:['#A9A2B4','#6F6884','#D2CCDA'],hairStyle:'hat',hat:['#4A3A55','#2E2440','#6A5878'],beard:['#A9A2B4','#6F6884','#D2CCDA'],beardLen:1.75,brows:1,top:['#5B4A6E','#3A2E4E','#7E6A90'],kaftan:1,pants:'#3B3352',boots:'#2B2338',belt:'#8A6A4A',hem:84};
const CARP={seed:4,r:24,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:70,hw:50,thigh:25,shin:20,uarm:16,farm:12,foot:27,
  skin:SKIN,hair:['#7A4E3E','#4E3236','#9A6A54'],hairStyle:'bald',beard:['#7A4E3E','#4E3236','#9A6A54'],beardLen:1.2,top:['#8C7F92','#5E5470','#B2A6B4'],rolled:1,apron:'#7A5A48',pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30};
const SMITH={seed:5,r:25,l1:74,l2:74,a1:56,a2:52,torso:100,neck:10,sw:84,hw:56,thigh:28,shin:22,uarm:19,farm:16,foot:28,
  skin:SKIN,hair:['#2E2838','#1F1A2A','#4A4058'],hairStyle:'short',beard:['#2E2838','#1F1A2A','#4A4058'],beardLen:1.45,top:['#6D6280','#4A4060','#8E84A0'],rolled:1,apron:'#4E3A40',pants:'#2E2840',boots:'#231C30',belt:'#3A2C34',hem:30};
const BOY={seed:6,r:20,l1:42,l2:42,a1:32,a2:30,torso:56,neck:5,sw:40,hw:32,thigh:16,shin:13,uarm:11,farm:10,foot:17,
  skin:SKIN,hair:['#79566A','#4E3A50','#A07A88'],hairStyle:'short',top:['#B0A0A8','#7A6A80','#D8C8C8'],pants:'#4B3463',boots:'#C98972',bare:1,belt:'#6B5050',hem:20};
function woman(seed,kc){return {seed,r:22,l1:62,l2:62,a1:46,a2:42,torso:82,neck:7,sw:62,hw:50,thigh:22,shin:17,uarm:15,farm:12,foot:22,skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'kerchief',kerchief:kc,top:['#C8B4AC','#8C7890','#E8D4C8'],skirt:['#6A4E6E','#46344E','#8A6E8E'],apron:'#B8A090',boots:'#3A2E3E',dress:1,blush:'#D98A80'}}
function worker(seed){const sh=[['#8C7F92','#5E5470','#B2A6B4'],['#79677F','#4E4060','#A08EA4'],['#9C8478','#6A5460','#C0A496']][seed%3];return {seed,r:23,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:66,hw:48,thigh:24,shin:19,uarm:15,farm:13,foot:26,skin:SKIN,hair:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],hairStyle:seed%2?'short':'bald',beard:seed%3===1?null:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],beardLen:1.2,top:sh,pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30}}
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function sky(c0,c1,c2,y1,y2){const gr=g.createLinearGradient(0,y1,0,y2);gr.addColorStop(0,c0);gr.addColorStop(.55,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.fillRect(-2000,-2000,4540,4960)}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function sun(x,y,r){glow(x,y,r*6,PAL.key,.35);glow(x,y,r*2.2,'#FFE0B8',.5);ell(x,y,r,r);g.fillStyle='#FFE6C4';g.fill()}
function clouds(y,n,seed,col,a,sp){for(let i=0;i<n;i++){const w=90+hash(seed+i)*140,x=((hash(seed+i*3)*900+t*sp*(.6+hash(i)*.6))%900)-180,yy=y+hash(seed+i*7)*70;g.fillStyle=rgba(col,a);ell(x,yy,w*.5,12+hash(i+seed)*8);g.fill();ell(x+w*.2,yy-8,w*.3,10);g.fill()}}
function hills(y,amp,col,seed,x0,x1){g.beginPath();g.moveTo(x0,y+400);for(let x=x0;x<=x1;x+=20){g.lineTo(x,y-amp*(.5+.5*nz(x*.006+seed))-amp*.3*nz(x*.02+seed*3))}g.lineTo(x1,y+400);g.closePath();g.fillStyle=col;g.fill()}
function forestLine(y,col,seed,x0,x1,h){g.fillStyle=col;g.beginPath();g.moveTo(x0,y+60);for(let x=x0;x<=x1;x+=9){const hh=h*(.5+hash(seed+x*.13)*.7);g.lineTo(x,y);g.lineTo(x+4.5,y-hh);g.lineTo(x+9,y)}g.lineTo(x1,y+60);g.closePath();g.fill()}
function birch(x,gy,h,seed,col){
  const sw=Math.sin(t*.9+seed)*4,lean=(hash(seed)-.5)*.08;
  const tx=x+lean*h,tw=7+h*.02;
  g.beginPath();g.moveTo(x-tw,gy);g.quadraticCurveTo(x-tw*.8+lean*h*.5,gy-h*.5,tx-tw*.4+sw*.3,gy-h);g.lineTo(tx+tw*.4+sw*.3,gy-h);g.quadraticCurveTo(x+tw*.8+lean*h*.5,gy-h*.5,x+tw,gy);g.closePath();fo(tc('#D9CCD6'));
  g.fillStyle=tc('#302B49');for(let i=0;i<9;i++){const yy=gy-h*hash(seed+i*2.1)*.9,xx=lerp(x,tx,(gy-yy)/h);g.fillRect(xx-tw*.6+hash(i+seed)*3,yy,tw*(.5+hash(seed+i)*.6),2.2)}
  const fc=col||['#4F5470','#6E6A86','#C9926F'];
  // weeping crown: soft volume, then drooping branches covered with small leaf clusters
  for(let i=0;i<4;i++){ell(tx+sw*.7+(hash(seed+i*4.1)-.5)*h*.3,gy-h*(.7+hash(seed+i*1.9)*.25),h*.17,h*.13);g.fillStyle=rgba(tc(fc[0]),.45);g.fill()}
  for(let b=0;b<10;b++){
    const by=gy-h*(.48+hash(seed+b*1.3)*.5),k0=(gy-by)/h,bx=lerp(x,tx,k0)+sw*k0;
    const dir=(b%2?1:-1)*(.45+hash(seed+b)*.55),len=h*(.16+hash(seed+b*2.2)*.16),sy_=Math.sin(t*1.3+b+seed)*3;
    const cx_=bx+dir*len*.6,cy_=by-len*.22,ex=bx+dir*len+sy_,ey=by+len*.6;
    g.strokeStyle=tc('#3A3048');g.lineWidth=1.5;g.beginPath();g.moveTo(bx,by);g.quadraticCurveTo(cx_,cy_,ex,ey);g.stroke();
    for(let k=0;k<7;k++){const u=k/6,px=lerp(lerp(bx,cx_,u),lerp(cx_,ex,u),u),py=lerp(lerp(by,cy_,u),lerp(cy_,ey,u),u)+4,r=h*.042*(1.15-u*.45);
      ell(px,py,r*1.35,r);g.fillStyle=tc(k%3?fc[0]:fc[1]);g.fill();ell(px+r*.35,py-r*.35,r*.6,r*.38);g.fillStyle=rgba(tc(fc[2]),.5);g.fill()}
  }
}
function izba(x,gy,w,h,seed,lit,smokeOn){
  const wall=tc('#6B4A4E'),log=tc('#4A3442'),roof=tc('#3E3048'),rl=tc('#5E4A62');
  const rh=h*.75;
  // wall
  g.beginPath();g.rect(x-w/2,gy-h,w,h);fo(wall);
  g.strokeStyle=log;g.lineWidth=2;for(let y=gy-h+10;y<gy;y+=12){g.beginPath();g.moveTo(x-w/2,y);g.lineTo(x+w/2,y);g.stroke()}
  for(let y=gy-h+4;y<gy;y+=12){for(const sd of[-1,1]){ell(x+sd*(w/2+3),y,5,5.5);fo(tc('#8A6A64'),.6)}}
  brush(x-w/2,gy-h,w,h,rgba(tc('#8A6A64'),1),seed,10,.25);
  // roof
  g.beginPath();g.moveTo(x-w/2-16,gy-h+4);g.lineTo(x,gy-h-rh);g.lineTo(x+w/2+16,gy-h+4);g.closePath();fo(roof);
  g.strokeStyle=rl;g.lineWidth=2;for(let i=1;i<7;i++){const u=i/7;g.beginPath();g.moveTo(lerp(x,x-w/2-16,u),lerp(gy-h-rh,gy-h+4,u));g.lineTo(lerp(x,x+w/2+16,u),lerp(gy-h-rh,gy-h+4,u));g.stroke()}
  // gable with carved board
  g.beginPath();g.moveTo(x-w*.3,gy-h);g.lineTo(x,gy-h-rh*.75);g.lineTo(x+w*.3,gy-h);g.closePath();fo(tc('#5A3E48'),.8);
  g.beginPath();g.moveTo(x,gy-h-rh-2);g.lineTo(x,gy-h-rh+16);ol(1.2);
  // okno
  const wx=x,wy=gy-h*.55,ww=w*.22,wh=h*.32;
  g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);g.fillStyle=lit>0?mixc('#2A2440','#FFB36B',lit):'#2A2440';g.fill();ol();
  if(lit>0)glow(wx,wy,ww*1.6,'#FFB36B',.35*lit);
  g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2.5;g.stroke();
  g.beginPath();g.moveTo(wx-ww*.75,wy-wh*.6);g.lineTo(wx,wy-wh*.95);g.lineTo(wx+ww*.75,wy-wh*.6);g.lineTo(wx+ww*.7,wy-wh*.5);g.lineTo(wx-ww*.7,wy-wh*.5);g.closePath();fo(tc('#B9A6A2'),.8);
  g.beginPath();g.rect(wx-ww*.7,wy+wh*.5,ww*1.4,5);fo(tc('#B9A6A2'),.8);
  // chimney + smoke
  const chx=x+w*.22,chy=gy-h-rh*.42;g.beginPath();g.rect(chx-7,chy-24,14,28);fo(tc('#4A3A48'));
  if(smokeOn)smoke(chx,chy-26,seed,.5);
}
function smoke(x,y,seed,a){for(let i=0;i<9;i++){const u=((t*.18+i/9+hash(seed+i)*.1)%1),r=6+u*26;g.fillStyle=rgba(tc('#B9A6C2'),a*(1-u)*(u*4>1?1:u*4));ell(x+u*30+Math.sin(t*.8+i)*6*u,y-u*120,r,r*.8);g.fill()}}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function leaves(n,seed,x0,y0,w,h,col){for(let i=0;i<n;i++){const ph=hash(seed+i),u=((t*(.08+ph*.06)+ph)%1),x=x0+hash(seed+i*2)*w+Math.sin(t*1.5+i)*25+u*60,y=y0+u*h;g.save();g.translate(x,y);g.rotate(t*2+i);ell(0,0,4,2);g.fillStyle=rgba(col,.85*Math.sin(u*Math.PI));g.fill();g.restore()}}
function ripples(x,y,w,t0,col,a){for(let i=0;i<3;i++){const u=((t-t0)*.5+i/3)%1;if(t<t0)continue;g.strokeStyle=rgba(col,a*(1-u));g.lineWidth=1.5;ell(x,y,w*(.2+u),w*(.2+u)*.32);g.stroke()}}
function fenceW(x0,x1,gy,h,seed){g.strokeStyle=tc('#5A4450');for(let x=x0;x<=x1;x+=22){g.beginPath();g.moveTo(x,gy);g.lineTo(x+(hash(seed+x)-.5)*4,gy-h);g.lineWidth=5;g.stroke()}g.lineWidth=3;for(let k=0;k<4;k++){g.strokeStyle=tc(k%2?'#6B5260':'#4E3A4A');g.beginPath();g.moveTo(x0,gy-h*.2-k*h*.18);for(let x=x0;x<=x1;x+=11)g.lineTo(x,gy-h*.2-k*h*.18+((x/11+k)%2?3:-3));g.stroke()}}
function palisade(x0,x1,gy,h,seed){for(let x=x0;x<=x1;x+=16){const hh=h*(.9+hash(seed+x)*.2);g.beginPath();g.moveTo(x-7,gy);g.lineTo(x-7,gy-hh);g.lineTo(x,gy-hh-12);g.lineTo(x+7,gy-hh);g.lineTo(x+7,gy);g.closePath();fo(tc(hash(x+seed)>.5?'#5A4448':'#4E3A44'),.8);g.strokeStyle=rgba(tc('#8A6A64'),.5);g.lineWidth=2;g.beginPath();g.moveTo(x-3,gy-hh+6);g.lineTo(x-3,gy-8);g.stroke()}}
function well(x,gy,s,state,crank){
  g.save();g.translate(x,gy);g.scale(s,s);const LW0=LW;LW/=s;
  const old=1-state,lg=mixc(tc('#5E4648'),tc('#A07A60'),state),lgd=mixc(tc('#3E2E3A'),tc('#7A5848'),state);
  ell(0,4,110,14);g.fillStyle=rgba(PAL.out,.35);g.fill();
  // posts
  const pl=old*.06;for(const sd of[-1,1]){g.save();g.translate(sd*70,-60);g.rotate(sd*pl);g.beginPath();g.rect(-6,-130,12,140);fo(lgd);g.restore()}
  // roof
  g.save();g.translate(0,-195);g.rotate(old*.05);g.beginPath();g.moveTo(-100,20);g.lineTo(0,-38);g.lineTo(100,20);g.lineTo(92,28);g.lineTo(0,-24);g.lineTo(-92,28);g.closePath();fo(mixc(tc('#3E3048'),tc('#8A6A58'),state));
  g.strokeStyle=rgba(tc('#1F2236'),.4);g.lineWidth=1.5;for(let i=-4;i<=4;i++){g.beginPath();g.moveTo(i*20,-30+Math.abs(i)*10);g.lineTo(i*22,22);g.stroke()}
  if(old>.5){g.beginPath();g.moveTo(30,0);g.lineTo(50,10);g.lineTo(38,16);g.closePath();g.fillStyle=tc('#241F4A');g.fill()}
  g.restore();
  // windlass
  const wy=-125;g.beginPath();g.rect(-66,wy-9,132,18);fo(lg);
  g.strokeStyle=tc('#B8A0A0');g.lineWidth=2;for(let i=-3;i<=3;i++){const a=crank+i*.6;g.beginPath();g.moveTo(i*14+Math.sin(a)*3,wy-8);g.lineTo(i*14+Math.sin(a)*3,wy+8);g.stroke()}
  const ca=crank;g.beginPath();g.moveTo(70,wy);g.lineTo(84,wy);ol();g.strokeStyle=lgd;g.lineWidth=5;g.stroke();
  const hx_=84+0,hy_=wy;g.beginPath();g.moveTo(hx_,hy_);g.lineTo(hx_+Math.cos(ca)*24,hy_+Math.sin(ca)*24);g.lineWidth=7+2*LW;g.strokeStyle=PAL.out;g.stroke();g.lineWidth=7;g.strokeStyle=lgd;g.stroke();
  // log box (srub)
  for(let i=0;i<5;i++){const y=-12-i*14,wb=old*Math.sin(i*1.7)*4;g.beginPath();g.rect(-80+wb,y-7,160,14);fo(i%2?lg:mixc(lg,lgd,.3),.9);ell(-80+wb,y,6,7);fo(lgd,.7);ell(80+wb,y,6,7);fo(lgd,.7);
    if(old>.5&&i%2===0){g.strokeStyle=rgba(tc('#241F4A'),.7);g.lineWidth=1.5;g.beginPath();g.moveTo(-40+i*12,y-5);g.lineTo(-30+i*12,y+2);g.lineTo(-20+i*12,y-1);g.stroke()}}
  if(state>.5){g.strokeStyle=tc('#8C8FA3');g.lineWidth=4;for(const sx of[-50,50]){g.beginPath();g.moveTo(sx,-82);g.lineTo(sx,-6);g.stroke()}}
  brush(-80,-80,160,72,rgba(tc('#E7C6AD'),1),11,8,.15);
  LW=LW0;g.restore();
  return [x,gy+wy*s];
}
function bucket(x,y,s,ang,water){g.save();g.translate(x,y);g.rotate(ang||0);g.scale(s,s);const LW0=LW;LW/=s;g.beginPath();g.moveTo(-14,-16);g.quadraticCurveTo(0,-34,14,-16);ol(1);g.strokeStyle=tc('#8C8FA3');g.lineWidth=2;g.stroke();g.beginPath();g.moveTo(-14,-16);g.lineTo(14,-16);g.lineTo(11,12);g.lineTo(-11,12);g.closePath();fo(tc('#6B5A60'));g.strokeStyle=tc('#8C8FA3');g.lineWidth=2.5;g.beginPath();g.moveTo(-13,-6);g.lineTo(13,-6);g.moveTo(-12,5);g.lineTo(12,5);g.stroke();if(water){ell(0,-16,13,3.5);g.fillStyle=rgba('#9AB0D0',.9);g.fill()}LW=LW0;g.restore()}
function panel(x,y,w,h,a,frame,glowA){
  if(a<=0)return;
  g.save();g.globalAlpha*=a;
  if(glowA>0){g.shadowColor=rgba(frame||'#E1C8B8',.8*glowA);g.shadowBlur=24}
  g.beginPath();g.roundRect(x,y,w,h,14);g.fillStyle=rgba('#241F4A',.55);g.fill();g.shadowBlur=0;
  const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,rgba('#E1C8B8',.18));gr.addColorStop(.25,rgba('#E1C8B8',.04));gr.addColorStop(1,rgba('#6C4377',.12));g.fillStyle=gr;g.fill();
  g.strokeStyle=rgba(frame||'#E1C8B8',.9);g.lineWidth=2;g.stroke();
  g.beginPath();g.roundRect(x+5,y+5,w-10,h-10,10);g.strokeStyle=rgba(frame||'#E1C8B8',.25);g.lineWidth=1;g.stroke();
  g.restore();
}
function bar(x,y,w,h,v,col,a,blinkA){g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,h/2);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
  const vv=cl(v,0,1);if(vv>.001){g.beginPath();g.roundRect(x,y,Math.max(h,w*vv),h,h/2);const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,mixc(col,'#FFFFFF',.35));gr.addColorStop(1,col);g.fillStyle=gr;g.fill();g.shadowColor=col;g.shadowBlur=10*(blinkA||.4);g.fill()}
  g.restore()}
function ticks(x,y,w,h,n,a){g.save();g.strokeStyle=rgba('#1F2236',.45*a);g.lineWidth=1;for(let i=1;i<n;i++){const xx=x+w*i/n;g.beginPath();g.moveTo(xx,y+2);g.lineTo(xx,y+h-2);g.stroke()}g.restore()}
function icon(kind,x,y,s,a){g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha*=a;g.lineJoin='round';g.lineCap='round';const ow=2/s;
  const st=(c)=>{g.fillStyle=c;g.fill();g.strokeStyle='#1F2236';g.lineWidth=ow;g.stroke()};
  if(kind==='wood'){g.beginPath();g.roundRect(-12,-5,22,10,5);st('#A0704A');ell(10,0,4,5);st('#D8A878');g.beginPath();g.arc(10,0,2,0,7);g.strokeStyle='#8A5A3A';g.lineWidth=1;g.stroke()}
  if(kind==='iron'){g.beginPath();g.moveTo(-11,5);g.lineTo(-7,-5);g.lineTo(7,-5);g.lineTo(11,5);g.closePath();st('#8C8FA3');g.beginPath();g.moveTo(-6,-3);g.lineTo(5,-3);g.strokeStyle='#D8DAE6';g.lineWidth=1.5;g.stroke()}
  if(kind==='stone'){blob([[-10,4],[-8,-5],[0,-8],[9,-4],[11,4],[2,7]]);st('#7D7890');ell(-3,-3,3,2);g.fillStyle='#A8A2B8';g.fill()}
  if(kind==='grain'){for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*4,9);g.lineTo(i*5,-4);g.strokeStyle='#C89040';g.lineWidth=2;g.stroke();ell(i*5,-6,2.6,5,i*.3);st('#E0B060')}}
  if(kind==='food'){ell(0,1,11,8);st('#C88A50');g.strokeStyle='#8A5A3A';g.lineWidth=1.4;for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*5-2,-3);g.lineTo(i*5+2,1);g.stroke()}}
  if(kind==='happy'){ell(0,0,10,10);st('#FFCF9A');g.beginPath();g.arc(0,1,5,.3,Math.PI-.3);g.strokeStyle='#1F2236';g.lineWidth=1.6;g.stroke();ell(-3.5,-3,1.3,1.6);g.fillStyle='#1F2236';g.fill();ell(3.5,-3,1.3,1.6);g.fill()}
  if(kind==='well'){g.beginPath();g.rect(-9,-1,18,9);st('#8A6A58');g.beginPath();g.moveTo(-11,-6);g.lineTo(0,-13);g.lineTo(11,-6);g.closePath();st('#6B5A60');g.beginPath();g.moveTo(-8,-6);g.lineTo(-8,-1);g.moveTo(8,-6);g.lineTo(8,-1);g.stroke()}
  if(kind==='bench'){g.beginPath();g.rect(-11,-2,22,4);st('#A07A60');g.beginPath();g.moveTo(-8,2);g.lineTo(-8,8);g.moveTo(8,2);g.lineTo(8,8);g.strokeStyle='#1F2236';g.lineWidth=2;g.stroke();g.beginPath();g.rect(-11,-10,22,4);st('#A07A60')}
  if(kind==='roof'){g.beginPath();g.moveTo(-11,6);g.lineTo(-11,-2);g.lineTo(0,-10);g.lineTo(11,-2);g.lineTo(11,6);g.closePath();st('#7A5A68')}
  if(kind==='road'){g.beginPath();g.moveTo(-4,-9);g.lineTo(4,-9);g.lineTo(10,9);g.lineTo(-10,9);g.closePath();st('#6A5468')}
  if(kind==='axe'){g.beginPath();g.moveTo(-8,9);g.lineTo(6,-7);g.strokeStyle='#A0704A';g.lineWidth=3;g.stroke();g.beginPath();g.moveTo(2,-11);g.quadraticCurveTo(12,-10,11,0);g.lineTo(5,-5);g.closePath();st('#8C8FA3')}
  if(kind==='person'){ell(0,-5,4.5,4.5);st('#C98972');g.beginPath();g.moveTo(-7,9);g.quadraticCurveTo(-7,0,0,0);g.quadraticCurveTo(7,0,7,9);g.closePath();st('#B9A6A2')}
  if(kind==='warn'){g.beginPath();g.moveTo(0,-10);g.lineTo(10,8);g.lineTo(-10,8);g.closePath();st('#E0505A');g.fillStyle='#1F2236';g.fillRect(-1.2,-4,2.4,7);ell(0,5,1.4,1.4);g.fill()}
  g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function spark(x,y,r,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r*2.5,'#FFE6C4',.6*a);g.fillStyle=rgba('#FFF4EA',a);g.beginPath();g.moveTo(x,y-r);g.quadraticCurveTo(x+r*.12,y-r*.12,x+r,y);g.quadraticCurveTo(x+r*.12,y+r*.12,x,y+r);g.quadraticCurveTo(x-r*.12,y+r*.12,x-r,y);g.quadraticCurveTo(x-r*.12,y-r*.12,x,y-r);g.fill();g.restore()}
function grassRow(y,seed,n,x0,x1,h,col){g.lineCap='round';for(let i=0;i<n;i++){const x=x0+hash(seed+i)*(x1-x0),hh=h*(.5+hash(seed+i*3)*.7),sw=Math.sin(t*1.6+x*.05)*hh*.15;g.strokeStyle=col;g.lineWidth=2.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+sw*.3,y-hh*.6,x+sw+(hash(i)-.5)*10,y-hh);g.stroke()}}
function birds(){g.strokeStyle=rgba('#241F4A',.8);g.lineWidth=2;for(let i=0;i<5;i++){const x=((t*28+i*40+hash(i)*30)%900)-200,y=330+i*9+Math.sin(t*2+i)*4,f=Math.sin(t*9+i*2)*4;g.beginPath();g.moveTo(x-7,y-f);g.quadraticCurveTo(x-3,y-2,x,y);g.quadraticCurveTo(x+3,y-2,x+7,y-f);g.stroke()}}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function villageGround(T){
  const gr=g.createLinearGradient(0,600,0,1100);gr.addColorStop(0,mixc(PAL.ground,PAL.far,.5));gr.addColorStop(.25,PAL.ground);gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-1200,618,3600,1400);
  g.fillStyle=tc('#4A3848');g.beginPath();g.moveTo(-1200,676);for(let x=-1200;x<=2400;x+=40)g.lineTo(x,676+nz(x*.02)*4);g.lineTo(2400,770);for(let x=2400;x>=-1200;x-=40)g.lineTo(x,770+nz(x*.03+5)*5);g.closePath();g.fill();
  brush(-200,680,1200,90,'#6A5468',21,60,.35);
  for(const ry of[704,738]){g.strokeStyle=rgba('#1F2236',.55);g.lineWidth=4;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke();g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=1.5;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+3+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke()}
  for(const pd of[[150,740,60],[420,706,48],[700,738,70],[-150,706,50]]){ell(pd[0],pd[1],pd[2],7);const pg=g.createLinearGradient(pd[0]-pd[2],0,pd[0]+pd[2],0);pg.addColorStop(0,T.sky[1]);pg.addColorStop(.6,T.sky[2]);pg.addColorStop(1,T.moon?'#4B3463':'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);ripples(pd[0]+10,pd[1],pd[2]*.5,0,'#FFE6C4',.4)}
  grassRow(676,1,60,-600,1400,22,tc('#4F5470'));
}
const TOD={
  dawn:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[470,520],tint:'#6C4377',ta:.12,lit:.5},
  day:{sky:['#4B3463','#9A6A8E','#F2B895'],sun:[410,300],tint:'#F09A6C',ta:.04,lit:0},
  sunset:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[330,590],tint:'#F09A6C',ta:.14,lit:.8},
  night:{sky:['#120F2A','#241F4A','#4B3463'],sun:null,moon:[400,210],tint:'#241F4A',ta:.42,lit:1}
};
function villageWorld(o){
  const T=TOD[op(o,'tod','dawn')];TINT=T.tint;TA=T.ta;
  const bF=op(o,'bF',0),bM=op(o,'bM',0),bFg=op(o,'bFg',2.5);
  layer(0,()=>sky(T.sky[0],T.sky[1],T.sky[2],-150,620));
  layer(.06,()=>{if(T.sun)sun(T.sun[0],T.sun[1],20);if(T.moon){stars(60,5,-300,-200,1200,700);glow(T.moon[0],T.moon[1],110,'#E1C8B8',.22);ell(T.moon[0],T.moon[1],16,16);g.fillStyle='#E7DCE6';g.fill()}clouds(380,7,3,T.sky[2],.22,6);clouds(260,5,8,T.sky[1],.3,4)},bF*.5);
  layer(.2,()=>{if(!T.moon)birds();hills(575,42,mixc(PAL.far,T.sky[2],.32),1,-600,1300);forestLine(592,mixc(PAL.far,T.sky[1],.15),4,-600,1300,24);if(o.far)o.far()},bF);
  layer(.5,()=>{g.fillStyle=mixc(PAL.ground,PAL.far,.55);g.fillRect(-900,600,2600,300);
    izba(-120,622,150,90,1,T.lit,1);birch(30,628,170,2);izba(160,620,130,80,2,T.lit*.8,1);birch(300,628,200,5);izba(470,622,160,92,3,T.lit,1);birch(600,630,180,8);izba(760,620,140,86,4,T.lit*.7,1);fenceW(-300,900,640,26,3);if(o.mid)o.mid()},bM);
  layer(1,()=>{villageGround(T);if(o.main)o.main()},op(o,'bMain',0));
  if(op(o,'fg',1))layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
const RES=[['wood','#A0704A',200],['iron','#8C8FA3',50],['stone','#7D7890',100],['grain','#E0B060',500],['food','#C88A50',500]];
function resPanel(x,y,w,o){
  const a=op(o,'a',1),v=o.v||{},ra=o.rows||[1,1,1,1,1,1],red=op(o,'red',-1),rA=op(o,'redA',0),rh=50,h=74+6*rh;
  if(a<=0)return h;
  panel(x,y,w,h,a,'#E1C8B8',.7);
  g.save();g.globalAlpha*=a;
  medallion(x+34,y+36,15,0,0,.25);
  g.fillStyle=rgba('#E1C8B8',.85);g.beginPath();g.roundRect(x+62,y+26,w*.42,7,3.5);g.fill();
  g.fillStyle=rgba('#E1C8B8',.4);g.beginPath();g.roundRect(x+62,y+40,w*.26,5,2.5);g.fill();
  g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(x+16,y+64);g.lineTo(x+w-16,y+64);g.stroke();
  for(let i=0;i<6;i++){const q=cl(ra[i]||0,0,1);if(q<=0)continue;const yy=y+74+i*rh,dx=(1-eout(q))*24;g.save();g.globalAlpha*=q;
    if(i<5){const R_=RES[i],val=op(v,R_[0],0),isR=red===i;
      if(isR&&rA>0){g.save();g.shadowColor='#E0505A';g.shadowBlur=16*rA;g.beginPath();g.roundRect(x+10+dx,yy+2,w-20,rh-8,10);g.fillStyle=rgba('#E0505A',.12*rA);g.fill();g.strokeStyle=rgba('#E0505A',rA);g.lineWidth=2;g.stroke();g.restore()}
      icon(R_[0],x+34+dx,yy+20,1.25,1);
      const bw=w-110;bar(x+60+dx,yy+12,bw,16,val/R_[2],isR?mixc(R_[1],'#E0505A',.4+.6*rA):R_[1],1,isR?rA:.4);ticks(x+60+dx,yy+12,bw,16,10,1);
      ell(x+w-30+dx,yy+20,6,6);g.fillStyle=isR?rgba('#E0505A',.4+.6*rA):rgba(R_[1],.9);g.fill();
    }else{icon('happy',x+34+dx,yy+20,1.25,1);const hv=op(v,'happy',0)/100,sw=(w-110)/10;
      for(let k=0;k<10;k++){const f=cl(hv*10-k,0,1);g.beginPath();g.roundRect(x+60+dx+k*sw,yy+10,sw-4,20,4);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.4);g.lineWidth=1;g.stroke();if(f>0){g.beginPath();g.roundRect(x+60+dx+k*sw,yy+10,Math.max(2,(sw-4)*f),20,4);g.fillStyle='#FFCF9A';g.fill()}}}
    g.restore()}
  g.restore();return h;
}
// ---- scene
// SCENE 6 — «Так надо» и смех у воды (0 – 12.17)
// shots: elder gestures at the well · hero suspicious close-up · dip → sunset wide, new well · one-hand crank ·
//        pouring + laugh · laughing faces close · happiness panel insert 41→47
const ST=[0,1.85,4.0,5.55,6.85,8.3,9.75];
const S=shot(t,ST);
const GY=716,HS=.62,WX=410,WGY=692,WS=.85,EX=520,HX=430;
// ---------- helpers (local to this scene)
function wd(tt,t0,v,D){const l=Math.max(0,tt-t0)*v;return l<D-40?l:D-40+40*(1-Math.exp(-(l-(D-40))/40))}
function walker(C,x0,face,t0,v,D,y,s){const d=wd(t,t0,v,D);return {x:x0+face*d,y,s,yaw:.95*face,t,lean:.04*face,walk:{d,st:(C.l1+C.l2)*.76*s}}}
function talk(tt,k){return (.5+.5*Math.sin(tt*15+k))*(.55+.45*Math.sin(tt*4.3+k*2))}
function palmUp(x,y,sd){g.save();g.translate(x,y);ell(0,-2,8,4.5,sd*.15);fo(tc(SKIN[0]),.7);g.strokeStyle=tc(SKIN[1]);g.lineWidth=1.3;for(let i=0;i<3;i++){g.beginPath();g.moveTo(sd*(3+i*1.5),-4-i);g.lineTo(sd*(9+i*1.5),-6-i*1.5);g.stroke()}ell(-sd*5,-5,2.6,3.6,-sd*.6);fo(tc(SKIN[0]),.6);g.restore()}
function axeOnShoulder(x,y,face){g.save();g.translate(x,y);g.rotate(face*-.9);segs([[0,10,0,-70,5,tc('#A0704A')]]);g.beginPath();g.moveTo(-face*2,-62);g.lineTo(-face*22,-74);g.quadraticCurveTo(-face*28,-62,-face*22,-48);g.lineTo(-face*2,-56);g.closePath();fo(tc('#8C8FA3'),.8);g.restore()}
function hammer(x,y,ang){g.save();g.translate(x,y);g.rotate(ang);segs([[0,6,0,-34,4,tc('#A0704A')]]);g.beginPath();g.roundRect(-9,-42,18,9,2);fo(tc('#8C8FA3'),.8);g.restore()}
function hen(x,y,s,seed){const pk=Math.max(0,Math.sin(t*3.1+seed*2))**6,dir=Math.sin(t*.35+seed)>0?1:-1,hx_=x+Math.sin(t*.35+seed)*14;g.save();g.translate(hx_,y);g.scale(s*dir,s);
  ell(0,-14,14,10,-.2);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.8);poly([[-12,-18],[-22,-28],[-18,-12]],1);fo(tc(seed%2?'#C0B0AC':'#7A5048'),.8);
  const hy=lerp(-26,-6,pk),hxx=lerp(12,18,pk);segs([[8,-18,hxx,hy,5,tc(seed%2?'#D8C8C0':'#A0705A')]],1);ell(hxx,hy,5,5);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.7);poly([[hxx+4,hy-1],[hxx+9,hy+1],[hxx+4,hy+2]],1);g.fillStyle=tc('#E0B060');g.fill();ell(hxx,hy-5,2.5,2.5);g.fillStyle=tc('#C04050');g.fill();
  g.strokeStyle=tc('#C89040');g.lineWidth=1.6;g.beginPath();g.moveTo(-2,-5);g.lineTo(-3,0);g.moveTo(3,-5);g.lineTo(4,0);g.stroke();g.restore()}
// water drops flying in arcs from (x,y) after t0
function drops(x,y,t0,n,spd,col,seed){for(let i=0;i<n;i++){const u=t-t0-hash(seed+i)*.25;if(u<0||u>.7)continue;const a=-Math.PI/2+(hash(seed+i*3)-.5)*2.2,v=spd*(.5+hash(seed+i*7)*.6);
  const px=x+Math.cos(a)*v*u,py=y+Math.sin(a)*v*u+260*u*u;ell(px,py,2.6,3.4);g.fillStyle=rgba(col,.9*(1-u/.7));g.fill()}}
const WM=woman(11,['#7A5A8A','#4E3A60','#9A7AAA']),WM2=woman(12,['#A0606A','#703E4A','#C08088']);
const W1=worker(2),W2=worker(0),W8=worker(8),BOY2=Object.assign({},BOY,{seed:16});
const WELLK={};
// ---------- morning: the elder explains, crowd around the old well (continues scene 5)
function elderMorning(){
  const sp=t<1.9?talk(t,2):0,gs=sm(.1,.5,t);
  const o={x:EX,y:730,s:HS,yaw:lerp(-.42,-.62,gs),t,turn:-.15+.08*Math.sin(t*2.2),tilt:.06*Math.sin(t*5)*sm(.2,.5,t),ls:1};
  o.em={look:[-.75,.05],brow:.35+.15*Math.sin(t*3),smile:.25,open:.4*sp};
  // confident sweep of the far (right) hand toward the well, palm open
  const sw=Math.sin(t*2.6)*.5+.5;o.hr=[lerp(-92,-100+sw*8,gs),lerp(-206,-214+sw*8,gs)];o.itemR=(gg,ex,ey)=>palmUp(ex,ey,-1);
  o.hl=[lerp(92,18,gs),lerp(-204,-150,gs)];return o;
}
function heroMorning(){
  // suspicion: eyes narrow first, then a slight head tilt, then the body leans back
  const e=sm(2.05,2.25,t),h=sm(2.15,2.45,t),b=sm(2.3,2.65,t);
  return {x:HX,y:GY+10,s:HS,yaw:lerp(.8,.7,b),t,medal:'hidden',fr:[24,0],fl:[-20,0],ls:1,rimC:PAL.rim,rimA:.55,
    em:{look:[lerp(.6,.85,e),lerp(-.05,.08,e)],eyeOpen:lerp(1,.62,e),browIn:lerp(0,-.75,e),brow:lerp(0,-.3,e),smile:lerp(0,-.25,h),open:0,blink:t>3.2&&t<3.3?1:0},
    tilt:lerp(0,.1,h),turn:lerp(0,-.12,h),lean:lerp(.02,-.04,b),hl:[14,-150],hr:[-6,-148]};
}
function crowdMorning(){
  const L=[];
  L.push({C:W2,o:{x:260,y:684,s:HS,yaw:.6,t,hr:[6,-246],itemR:(gg,ex,ey)=>axeOnShoulder(ex,ey,1),em:{look:[.6,.1]}}});
  L.push({C:W8,o:{x:322,y:700,s:HS,yaw:.95,t,hipY:-84,lean:.42,hipX:-6,fr:[34,0],fl:[-14,0],hr:[66+Math.sin(t*2.3)*6,-72],hl:[58,-96],em:{look:[.6,.5]},tilt:.15}});
  L.push({C:CARP,o:{x:330,y:698,s:HS,yaw:.7,t,hl:[40,-150],hr:[46+9*Math.cos(t*7),-146+6*Math.sin(t*7)],em:{look:[.6,0]}}});
  L.push({C:W1,o:{x:520,y:682,s:HS,yaw:-.6,t,hr:[-40,-150+Math.sin(t*3)*4],em:{look:[-.6,.3]}}});
  L.push({C:WM,o:{x:545,y:690,s:HS,yaw:-.35,t,em:{look:[-.6,.1],smile:.2}}});
  L.push({C:WM2,o:{x:580,y:678,s:HS,yaw:-.5,t,em:{look:[-.5,.1],smile:.2}}});
  for(const k of[0,1]){const C=k?BOY2:BOY,dump=sm(.3+k*.4,.8+k*.4,t);L.push({C,o:{x:570+k*44,y:708+k*5,s:HS,yaw:-.95,t,hipY:lerp(-86,-60,dump*(1-sm(1.5,2,t))),lean:-.3*dump,hr:[-18,lerp(-78,-40,dump)],hl:[-10,lerp(-76,-40,dump)],em:{smile:.4}}})}
  L.push({C:ELDER,o:elderMorning()});L.push({C:HERO,o:heroMorning()});L.push({C:WELLK,o:{y:WGY},st:0});
  return L;
}
// ---------- sunset: repaired well, work done, women at the water
function crankA(){return t<5.0?0:Math.pow(Math.max(0,t-5.3),1.15)*9}
function riseU(){return eout((t-5.5)/1.15)}
function crowdSunset(){
  const L=[];
  // last taps of the carpenter at the log box
  const hit=t%.55,sw=hit<.18?ease(hit/.18):1-ease((hit-.18)/.37);
  L.push({C:CARP,o:{x:318,y:704,s:HS,yaw:.95,t,hipY:-84,lean:.4,hipX:-6,fr:[34,0],fl:[-14,0],hl:[62,-88],hr:[lerp(30,72,sw),lerp(-150,-96,sw)],itemR:(gg,ex,ey,an)=>hammer(ex,ey,an-Math.PI/2+.4),em:{look:[.6,.4],smile:.2}}});
  // people leave the square after the work
  L.push({C:SMITH,o:walker(SMITH,560,1,3.6,52,500,700,HS)});
  {const o=walker(W2,240,-1,3.4,58,500,690,HS);o.hl=[4,-246];o.itemL=(gg,ex,ey)=>axeOnShoulder(ex,ey,-1);L.push({C:W2,o})}
  for(const k of[0,1]){const o=walker(k?BOY2:BOY,600+k*40,1,3.8+k*.1,95,600,710+k*4,HS);o.em={smile:.6};L.push({C:k?BOY2:BOY,o})}
  {const o=walker(W1,540,1,3.3,48,500,684,HS);L.push({C:W1,o})}
  L.push({C:ELDER,o:{x:600,y:722,s:HS,yaw:-.5,t,hl:[18,-150],hr:[-14,-150],em:{look:[-.6,.1],smile:.35},tilt:.04*Math.sin(t*1.3)}});
  L.push({C:HERO,o:{x:225,y:726,s:HS,yaw:.6,t,medal:'hidden',fr:[22,0],fl:[-20,0],hl:[30,-196],hr:[22,-190],em:{look:[.7,0],browIn:-.3},ls:1,rimC:PAL.rim,rimA:.8}});
  // woman 11 cranks with ONE hand, the other on her hip; woman 12 waits with her bucket
  {const hub=[WX+84*WS,WGY-125*WS],ca=crankA(),hx_=hub[0]+Math.cos(ca)*24*WS,hy_=hub[1]+Math.sin(ca)*24*WS,x=505,y=702;
    const pour=sm(6.85,7.3,t),laugh=sm(7.25,7.6,t);
    const o={x,y,s:HS,yaw:-.7,t,ls:1,rimC:PAL.rim,rimA:.8};
    if(t<6.85){o.hl=[(hx_-x)/HS,(hy_-y)/HS];o.hr=[-6,-128];o.em={look:[-.5,-.3],smile:lerp(.2,.7,sm(5.9,6.4,t)),brow:lerp(0,.6,sm(5.8,6.2,t))};o.tilt=-.05}
    else{o.hl=[lerp(-52,-60,pour),lerp(-176,-168,pour)];o.itemL=(gg,ex,ey)=>{bucket(ex-2,ey+24,1.75,-.9*pour*(1-sm(7.6,8,t)*.7),1);if(pour>.3&&t<7.7){g.strokeStyle=rgba('#9AB0D0',.8);g.lineWidth=5;g.beginPath();g.moveTo(ex-22,ey+6);g.quadraticCurveTo(ex-46,ey+10,ex-58,ey+60);g.stroke()}};
      o.hr=[lerp(-6,-20,laugh),lerp(-128,-150,laugh)];}
    if(t>=6.85){const lf=laugh,bb=Math.sin(t*15);o.em={look:[-.2,-.5],smile:lerp(.7,1,lf),open:lf*(.5+.2*bb),eyeOpen:lerp(1,.35,lf),brow:.6*lf};o.tilt=-.3*lf+.04*bb*lf;o.headDY=-2*lf*Math.abs(bb);o.lean=.08*lf}
    L.push({C:WM,o})}
  {const laugh=sm(7.3,7.65,t),bb=Math.sin(t*14+1);
    // walks up with her bucket in the wide; stands left of the log box during the crank shot; by the well for the pour
    const wk=walker(WM2,230,1,3.9,55,100,714,HS),x2=t<5.55?wk.x:t<6.85?318:428;
    const o={x:x2,y:714,s:HS,yaw:.7,t,walk:t<5.55?wk.walk:null,ls:1,rimC:PAL.rim,rimA:.8,hr:[34,-100],itemR:(gg,ex,ey)=>{bucket(ex,ey+24,1.75,.15,t>7.05?1:0);if(t>7.05&&t<7.9){drops(ex+2,ey+10,7.05,10,150,'#B8CCE8',3);ripples(ex,ey+8,26,7.05,'#E8F0FF',.8)}},hl:[lerp(-16,6,laugh),lerp(-150,-196,laugh)],
      em:{look:[.5,-.3],smile:lerp(.4,1,laugh),open:laugh*(.55+.2*bb),eyeOpen:lerp(1,.35,laugh),brow:.5*laugh},tilt:-.32*laugh+.04*bb*laugh,lean:-.08*laugh,headDY:-2*laugh*Math.abs(bb)};
    L.push({C:WM2,o})}
  L.push({C:WELLK,o:{y:WGY},st:1});
  return L;
}
function drawCrowd(L,foc,bb){
  L.sort((a,b)=>a.o.y-b.o.y);
  for(const a of L){layer(1,()=>{
    if(a.C===WELLK){well(WX,WGY,WS,a.st,a.st?crankA():Math.sin(t*.6)*.3);
      if(a.st&&t<6.85){// bucket rising out of the shaft on the rope
        const ry=lerp(WGY+30,WGY-125*WS+52,riseU()),top=WGY-75*WS;g.save();g.beginPath();g.rect(WX-80,0,160,top+1);g.clip();
        g.strokeStyle=tc('#B8A0A0');g.lineWidth=2;g.beginPath();g.moveTo(WX,WGY-125*WS+8);g.lineTo(WX,ry-34);g.stroke();bucket(WX,ry,1.4,Math.sin(t*9)*.06*(1-riseU()),1);
        if(riseU()>.98&&t<6.85)drops(WX,ry-10,6.65,6,90,'#B8CCE8',9);g.restore()}}
    else person(a.C,a.o)},!foc||foc.includes(a.C)?0:bb)}
}
function world(tod,bF,bM,bFg,L,foc,bb){
  villageWorld({tod,bF,bM,fg:0,far:()=>{palisade(820,1300,600,46,4)},
    main:()=>{const pile=tod==='sunset'?0:1;if(pile){for(let i=0;i<9;i++){blob([[480+i*9,697],[483+i*9,689-(i%3)*3],[490+i*9,688],[494+i*9,696]]);fo(tc(i%2?'#7D7890':'#8E89A0'),.6)}}
      else{g.save();g.globalAlpha=.6;for(let i=0;i<6;i++){ell(330+i*30+hash(i)*20,712+hash(i*3)*10,7,2,hash(i)*3);g.fillStyle=tc('#C8A07A');g.fill()}g.restore()}
      hen(230,708,.62,1);hen(300,716,.6,2);hen(640,712,.58,3)}});
  drawCrowd(L,foc,bb);
  layer(1,()=>grassRow(770,4,40,-600,1400,30,tc('#3E3A58')));
  layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---------------- shot 0: medium on the elder — "it's time to fix the well, everyone knows"
if(S.i===0){
  const u=S.u;setCam(538-u*8,572-u*6,2.75+u*.15,.02);
  world('day',4,3,4,crowdMorning(),[ELDER],2.4);
  motes(14,3,0,150,540,560,'#FFE6C4',.4,1.8);
}
// ---------------- shot 1: close-up — hero's suspicious look
if(S.i===1){
  const u=S.u;setCam(HX-4-u*3,GY+10-271*HS+6,7.6+u*.5,-.01);
  villageWorld({tod:'day',bF:10,bM:9,bMain:7,fg:0,main:()=>{for(const a of crowdMorning())if(a.C!==HERO&&a.C!==WELLK&&a.C!==ELDER)person(a.C,a.o);well(WX,WGY,WS,0,0)}});
  layer(1,()=>person(HERO,heroMorning()));
  wash('#241F4A',.08);
  motes(16,7,0,100,540,700,'#FFE6C4',.55,2.4);
  leaves(4,3,0,100,540,600,'#C9926F');
}
// ---------------- shot 2: sunset wide — the well is repaired, people leave
if(S.i===2){
  const u=S.u;setCam(400-u*10,552-u*8,1.18+u*.07,-.01+u*.014);
  CAM.sy=kick(t,4.55,2,.2)+kick(t,5.1,2,.2);
  world('sunset',0,0,2.5,crowdSunset(),null,0);
  leaves(8,4,0,200,540,600,'#C9926F');
}
// ---------------- shot 3: medium — one hand on the crank, the bucket flies up
if(S.i===3){
  const u=S.u;setCam(452-u*6,604-u*10,2.35+u*.12,-.015);
  world('sunset',4,3,4,crowdSunset(),[WM,WELLK],2.4);
  motes(16,5,0,150,540,560,'#FFE6C4',.5,1.8);
}
// ---------------- shot 4: two-shot — water poured, the women laugh
if(S.i===4){
  const u=S.u;setCam(470+u*6,600-u*6,2.15+u*.1,.01);
  world('sunset',4,3,4,crowdSunset(),[WM,WM2,WELLK],2.4);
  motes(16,9,0,150,540,560,'#FFE6C4',.5,1.8);
}
// ---------------- shot 5: close two-shot — laughing faces against the sun
if(S.i===5){
  const u=S.u;setCam(468,GY-262*HS+u*4,3.5+u*.25,-.01+u*.02);
  world('sunset',9,7,5,crowdSunset(),[WM,WM2],3);
  for(let i=0;i<7;i++){const q=(t*.5+i/7)%1;spark(80+i*70+Math.sin(t+i)*12,700-q*240,4+3*Math.sin(t*5+i),.4*(1-q))}
  motes(20,11,0,150,540,600,'#FFE6C4',.6,2.2);
}
// ---------------- shot 6: insert — happiness grows 41 → 47 on the word
if(S.i===6){
  const lt=S.lt;setCam(450,560,1.6,0);
  villageWorld({tod:'sunset',bF:12,bM:10,bMain:9,fg:0,main:()=>{well(WX,WGY,WS,1,0);person(WM,{x:505,y:702,s:HS,yaw:-.7,t,em:{smile:1,open:.4}});person(WM2,{x:428,y:714,s:HS,yaw:.7,t,em:{smile:1,open:.4}})}});
  wash('#241F4A',.2);lampLight(330,700,560,'#FFB36B',.45);lampLight(270,560,300,'#FFCF9A',.12*(1+Math.max(0,1-Math.abs(t-11.42)/.35)));
  const gv=41+6*eout((t-11.05)/.45),pulse=Math.max(0,1-Math.abs(t-11.42)/.35);
  const z=1.17+lt*.035,cx=270,cy=436+lt*3;
  g.save();g.translate(270+kick(t,11.42,3,.25),480);g.scale(z,z);g.rotate(-.025+lt*.006);g.translate(-cx,-cy);
  resPanel(60,180,420,{a:sm(9.75,10.05,t),v:{wood:110,iron:15,stone:40,grain:410,food:380,happy:gv},rows:[.55,.55,.55,.55,.55,1]});
  // happiness row highlight; six gold motes fly into the bar
  const ry=180+74+5*50,bx=60+60,sw=(420-110)/10;
  g.save();g.shadowColor='#FFCF9A';g.shadowBlur=24*(.4+pulse);g.beginPath();g.roundRect(70,ry+2,400,42,10);g.strokeStyle=rgba('#FFCF9A',.5+.5*pulse);g.lineWidth=2;g.stroke();g.restore();
  for(let k=0;k<6;k++){const u_=cl((t-10.85-k*.07)/.45,0,1);if(u_<=0||u_>=1)continue;const tx=bx+4*sw+k*sw*.12,ty=ry+20,sx=150+k*40,sy=ry-150-hash(k)*60;
    const px=lerp(sx,tx,ein(u_)),py=lerp(sy,ty,u_)-Math.sin(u_*Math.PI)*30;spark(px,py,6,.9)}
  if(pulse>0)spark(bx+4*sw+sw*.7,ry+20,22*pulse,pulse);
  g.restore();
  motes(16,4,0,100,540,700,'#FFE6C4',.5,2);
}
// ---------------- finishing
if(S.i>=2&&S.i<6){g.save();g.globalCompositeOperation='screen';beam(560,520,200,760,40,220,'#FFB36B',.16);g.restore();lampLight(380,600,600,'#FFB36B',.12)}
else if(S.i<2){g.save();g.globalCompositeOperation='screen';beam(600,60,320,700,30,170,'#FFB36B',.14);g.restore()}
vignette(S.i===1?.6:.45);
grain(.05);
wash('#000000',cutDip(t,[0,1.85,5.55,6.85,8.3,9.75]));
wash('#000000',(1-sm(0,.07,t))*.85);
// dip to black into the sunset
wash('#000000',sm(3.75,3.98,t)*(1-sm(4.0,4.3,t)));
}
```

## SCENE 7
```javascript
function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function ein(u){u=cl(u,0,1);return u*u*u}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function blob(pts){const n=pts.length;g.beginPath();let m=[(pts[n-1][0]+pts[0][0])/2,(pts[n-1][1]+pts[0][1])/2];g.moveTo(m[0],m[1]);for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];g.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}g.closePath()}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
function worker(seed){const sh=[['#8C7F92','#5E5470','#B2A6B4'],['#79677F','#4E4060','#A08EA4'],['#9C8478','#6A5460','#C0A496']][seed%3];return {seed,r:23,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:66,hw:48,thigh:24,shin:19,uarm:15,farm:13,foot:26,skin:SKIN,hair:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],hairStyle:seed%2?'short':'bald',beard:seed%3===1?null:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],beardLen:1.2,top:sh,pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30}}
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function sky(c0,c1,c2,y1,y2){const gr=g.createLinearGradient(0,y1,0,y2);gr.addColorStop(0,c0);gr.addColorStop(.55,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.fillRect(-2000,-2000,4540,4960)}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function sun(x,y,r){glow(x,y,r*6,PAL.key,.35);glow(x,y,r*2.2,'#FFE0B8',.5);ell(x,y,r,r);g.fillStyle='#FFE6C4';g.fill()}
function clouds(y,n,seed,col,a,sp){for(let i=0;i<n;i++){const w=90+hash(seed+i)*140,x=((hash(seed+i*3)*900+t*sp*(.6+hash(i)*.6))%900)-180,yy=y+hash(seed+i*7)*70;g.fillStyle=rgba(col,a);ell(x,yy,w*.5,12+hash(i+seed)*8);g.fill();ell(x+w*.2,yy-8,w*.3,10);g.fill()}}
function hills(y,amp,col,seed,x0,x1){g.beginPath();g.moveTo(x0,y+400);for(let x=x0;x<=x1;x+=20){g.lineTo(x,y-amp*(.5+.5*nz(x*.006+seed))-amp*.3*nz(x*.02+seed*3))}g.lineTo(x1,y+400);g.closePath();g.fillStyle=col;g.fill()}
function forestLine(y,col,seed,x0,x1,h){g.fillStyle=col;g.beginPath();g.moveTo(x0,y+60);for(let x=x0;x<=x1;x+=9){const hh=h*(.5+hash(seed+x*.13)*.7);g.lineTo(x,y);g.lineTo(x+4.5,y-hh);g.lineTo(x+9,y)}g.lineTo(x1,y+60);g.closePath();g.fill()}
function birch(x,gy,h,seed,col){
  const sw=Math.sin(t*.9+seed)*4,lean=(hash(seed)-.5)*.08;
  const tx=x+lean*h,tw=7+h*.02;
  g.beginPath();g.moveTo(x-tw,gy);g.quadraticCurveTo(x-tw*.8+lean*h*.5,gy-h*.5,tx-tw*.4+sw*.3,gy-h);g.lineTo(tx+tw*.4+sw*.3,gy-h);g.quadraticCurveTo(x+tw*.8+lean*h*.5,gy-h*.5,x+tw,gy);g.closePath();fo(tc('#D9CCD6'));
  g.fillStyle=tc('#302B49');for(let i=0;i<9;i++){const yy=gy-h*hash(seed+i*2.1)*.9,xx=lerp(x,tx,(gy-yy)/h);g.fillRect(xx-tw*.6+hash(i+seed)*3,yy,tw*(.5+hash(seed+i)*.6),2.2)}
  const fc=col||['#4F5470','#6E6A86','#C9926F'];
  // weeping crown: soft volume, then drooping branches covered with small leaf clusters
  for(let i=0;i<4;i++){ell(tx+sw*.7+(hash(seed+i*4.1)-.5)*h*.3,gy-h*(.7+hash(seed+i*1.9)*.25),h*.17,h*.13);g.fillStyle=rgba(tc(fc[0]),.45);g.fill()}
  for(let b=0;b<10;b++){
    const by=gy-h*(.48+hash(seed+b*1.3)*.5),k0=(gy-by)/h,bx=lerp(x,tx,k0)+sw*k0;
    const dir=(b%2?1:-1)*(.45+hash(seed+b)*.55),len=h*(.16+hash(seed+b*2.2)*.16),sy_=Math.sin(t*1.3+b+seed)*3;
    const cx_=bx+dir*len*.6,cy_=by-len*.22,ex=bx+dir*len+sy_,ey=by+len*.6;
    g.strokeStyle=tc('#3A3048');g.lineWidth=1.5;g.beginPath();g.moveTo(bx,by);g.quadraticCurveTo(cx_,cy_,ex,ey);g.stroke();
    for(let k=0;k<7;k++){const u=k/6,px=lerp(lerp(bx,cx_,u),lerp(cx_,ex,u),u),py=lerp(lerp(by,cy_,u),lerp(cy_,ey,u),u)+4,r=h*.042*(1.15-u*.45);
      ell(px,py,r*1.35,r);g.fillStyle=tc(k%3?fc[0]:fc[1]);g.fill();ell(px+r*.35,py-r*.35,r*.6,r*.38);g.fillStyle=rgba(tc(fc[2]),.5);g.fill()}
  }
}
function izba(x,gy,w,h,seed,lit,smokeOn){
  const wall=tc('#6B4A4E'),log=tc('#4A3442'),roof=tc('#3E3048'),rl=tc('#5E4A62');
  const rh=h*.75;
  // wall
  g.beginPath();g.rect(x-w/2,gy-h,w,h);fo(wall);
  g.strokeStyle=log;g.lineWidth=2;for(let y=gy-h+10;y<gy;y+=12){g.beginPath();g.moveTo(x-w/2,y);g.lineTo(x+w/2,y);g.stroke()}
  for(let y=gy-h+4;y<gy;y+=12){for(const sd of[-1,1]){ell(x+sd*(w/2+3),y,5,5.5);fo(tc('#8A6A64'),.6)}}
  brush(x-w/2,gy-h,w,h,rgba(tc('#8A6A64'),1),seed,10,.25);
  // roof
  g.beginPath();g.moveTo(x-w/2-16,gy-h+4);g.lineTo(x,gy-h-rh);g.lineTo(x+w/2+16,gy-h+4);g.closePath();fo(roof);
  g.strokeStyle=rl;g.lineWidth=2;for(let i=1;i<7;i++){const u=i/7;g.beginPath();g.moveTo(lerp(x,x-w/2-16,u),lerp(gy-h-rh,gy-h+4,u));g.lineTo(lerp(x,x+w/2+16,u),lerp(gy-h-rh,gy-h+4,u));g.stroke()}
  // gable with carved board
  g.beginPath();g.moveTo(x-w*.3,gy-h);g.lineTo(x,gy-h-rh*.75);g.lineTo(x+w*.3,gy-h);g.closePath();fo(tc('#5A3E48'),.8);
  g.beginPath();g.moveTo(x,gy-h-rh-2);g.lineTo(x,gy-h-rh+16);ol(1.2);
  // okno
  const wx=x,wy=gy-h*.55,ww=w*.22,wh=h*.32;
  g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);g.fillStyle=lit>0?mixc('#2A2440','#FFB36B',lit):'#2A2440';g.fill();ol();
  if(lit>0)glow(wx,wy,ww*1.6,'#FFB36B',.35*lit);
  g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2.5;g.stroke();
  g.beginPath();g.moveTo(wx-ww*.75,wy-wh*.6);g.lineTo(wx,wy-wh*.95);g.lineTo(wx+ww*.75,wy-wh*.6);g.lineTo(wx+ww*.7,wy-wh*.5);g.lineTo(wx-ww*.7,wy-wh*.5);g.closePath();fo(tc('#B9A6A2'),.8);
  g.beginPath();g.rect(wx-ww*.7,wy+wh*.5,ww*1.4,5);fo(tc('#B9A6A2'),.8);
  // chimney + smoke
  const chx=x+w*.22,chy=gy-h-rh*.42;g.beginPath();g.rect(chx-7,chy-24,14,28);fo(tc('#4A3A48'));
  if(smokeOn)smoke(chx,chy-26,seed,.5);
}
function smoke(x,y,seed,a){for(let i=0;i<9;i++){const u=((t*.18+i/9+hash(seed+i)*.1)%1),r=6+u*26;g.fillStyle=rgba(tc('#B9A6C2'),a*(1-u)*(u*4>1?1:u*4));ell(x+u*30+Math.sin(t*.8+i)*6*u,y-u*120,r,r*.8);g.fill()}}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function leaves(n,seed,x0,y0,w,h,col){for(let i=0;i<n;i++){const ph=hash(seed+i),u=((t*(.08+ph*.06)+ph)%1),x=x0+hash(seed+i*2)*w+Math.sin(t*1.5+i)*25+u*60,y=y0+u*h;g.save();g.translate(x,y);g.rotate(t*2+i);ell(0,0,4,2);g.fillStyle=rgba(col,.85*Math.sin(u*Math.PI));g.fill();g.restore()}}
function ripples(x,y,w,t0,col,a){for(let i=0;i<3;i++){const u=((t-t0)*.5+i/3)%1;if(t<t0)continue;g.strokeStyle=rgba(col,a*(1-u));g.lineWidth=1.5;ell(x,y,w*(.2+u),w*(.2+u)*.32);g.stroke()}}
function fenceW(x0,x1,gy,h,seed){g.strokeStyle=tc('#5A4450');for(let x=x0;x<=x1;x+=22){g.beginPath();g.moveTo(x,gy);g.lineTo(x+(hash(seed+x)-.5)*4,gy-h);g.lineWidth=5;g.stroke()}g.lineWidth=3;for(let k=0;k<4;k++){g.strokeStyle=tc(k%2?'#6B5260':'#4E3A4A');g.beginPath();g.moveTo(x0,gy-h*.2-k*h*.18);for(let x=x0;x<=x1;x+=11)g.lineTo(x,gy-h*.2-k*h*.18+((x/11+k)%2?3:-3));g.stroke()}}
function panel(x,y,w,h,a,frame,glowA){
  if(a<=0)return;
  g.save();g.globalAlpha*=a;
  if(glowA>0){g.shadowColor=rgba(frame||'#E1C8B8',.8*glowA);g.shadowBlur=24}
  g.beginPath();g.roundRect(x,y,w,h,14);g.fillStyle=rgba('#241F4A',.55);g.fill();g.shadowBlur=0;
  const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,rgba('#E1C8B8',.18));gr.addColorStop(.25,rgba('#E1C8B8',.04));gr.addColorStop(1,rgba('#6C4377',.12));g.fillStyle=gr;g.fill();
  g.strokeStyle=rgba(frame||'#E1C8B8',.9);g.lineWidth=2;g.stroke();
  g.beginPath();g.roundRect(x+5,y+5,w-10,h-10,10);g.strokeStyle=rgba(frame||'#E1C8B8',.25);g.lineWidth=1;g.stroke();
  g.restore();
}
function bar(x,y,w,h,v,col,a,blinkA){g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,h/2);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
  const vv=cl(v,0,1);if(vv>.001){g.beginPath();g.roundRect(x,y,Math.max(h,w*vv),h,h/2);const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,mixc(col,'#FFFFFF',.35));gr.addColorStop(1,col);g.fillStyle=gr;g.fill();g.shadowColor=col;g.shadowBlur=10*(blinkA||.4);g.fill()}
  g.restore()}
function ticks(x,y,w,h,n,a){g.save();g.strokeStyle=rgba('#1F2236',.45*a);g.lineWidth=1;for(let i=1;i<n;i++){const xx=x+w*i/n;g.beginPath();g.moveTo(xx,y+2);g.lineTo(xx,y+h-2);g.stroke()}g.restore()}
function icon(kind,x,y,s,a){g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha*=a;g.lineJoin='round';g.lineCap='round';const ow=2/s;
  const st=(c)=>{g.fillStyle=c;g.fill();g.strokeStyle='#1F2236';g.lineWidth=ow;g.stroke()};
  if(kind==='wood'){g.beginPath();g.roundRect(-12,-5,22,10,5);st('#A0704A');ell(10,0,4,5);st('#D8A878');g.beginPath();g.arc(10,0,2,0,7);g.strokeStyle='#8A5A3A';g.lineWidth=1;g.stroke()}
  if(kind==='iron'){g.beginPath();g.moveTo(-11,5);g.lineTo(-7,-5);g.lineTo(7,-5);g.lineTo(11,5);g.closePath();st('#8C8FA3');g.beginPath();g.moveTo(-6,-3);g.lineTo(5,-3);g.strokeStyle='#D8DAE6';g.lineWidth=1.5;g.stroke()}
  if(kind==='stone'){blob([[-10,4],[-8,-5],[0,-8],[9,-4],[11,4],[2,7]]);st('#7D7890');ell(-3,-3,3,2);g.fillStyle='#A8A2B8';g.fill()}
  if(kind==='grain'){for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*4,9);g.lineTo(i*5,-4);g.strokeStyle='#C89040';g.lineWidth=2;g.stroke();ell(i*5,-6,2.6,5,i*.3);st('#E0B060')}}
  if(kind==='food'){ell(0,1,11,8);st('#C88A50');g.strokeStyle='#8A5A3A';g.lineWidth=1.4;for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*5-2,-3);g.lineTo(i*5+2,1);g.stroke()}}
  if(kind==='happy'){ell(0,0,10,10);st('#FFCF9A');g.beginPath();g.arc(0,1,5,.3,Math.PI-.3);g.strokeStyle='#1F2236';g.lineWidth=1.6;g.stroke();ell(-3.5,-3,1.3,1.6);g.fillStyle='#1F2236';g.fill();ell(3.5,-3,1.3,1.6);g.fill()}
  if(kind==='well'){g.beginPath();g.rect(-9,-1,18,9);st('#8A6A58');g.beginPath();g.moveTo(-11,-6);g.lineTo(0,-13);g.lineTo(11,-6);g.closePath();st('#6B5A60');g.beginPath();g.moveTo(-8,-6);g.lineTo(-8,-1);g.moveTo(8,-6);g.lineTo(8,-1);g.stroke()}
  if(kind==='bench'){g.beginPath();g.rect(-11,-2,22,4);st('#A07A60');g.beginPath();g.moveTo(-8,2);g.lineTo(-8,8);g.moveTo(8,2);g.lineTo(8,8);g.strokeStyle='#1F2236';g.lineWidth=2;g.stroke();g.beginPath();g.rect(-11,-10,22,4);st('#A07A60')}
  if(kind==='roof'){g.beginPath();g.moveTo(-11,6);g.lineTo(-11,-2);g.lineTo(0,-10);g.lineTo(11,-2);g.lineTo(11,6);g.closePath();st('#7A5A68')}
  if(kind==='road'){g.beginPath();g.moveTo(-4,-9);g.lineTo(4,-9);g.lineTo(10,9);g.lineTo(-10,9);g.closePath();st('#6A5468')}
  if(kind==='axe'){g.beginPath();g.moveTo(-8,9);g.lineTo(6,-7);g.strokeStyle='#A0704A';g.lineWidth=3;g.stroke();g.beginPath();g.moveTo(2,-11);g.quadraticCurveTo(12,-10,11,0);g.lineTo(5,-5);g.closePath();st('#8C8FA3')}
  if(kind==='person'){ell(0,-5,4.5,4.5);st('#C98972');g.beginPath();g.moveTo(-7,9);g.quadraticCurveTo(-7,0,0,0);g.quadraticCurveTo(7,0,7,9);g.closePath();st('#B9A6A2')}
  if(kind==='warn'){g.beginPath();g.moveTo(0,-10);g.lineTo(10,8);g.lineTo(-10,8);g.closePath();st('#E0505A');g.fillStyle='#1F2236';g.fillRect(-1.2,-4,2.4,7);ell(0,5,1.4,1.4);g.fill()}
  g.restore()}
function finger(x,y,s,ang,pressA){g.save();g.translate(x,y);g.rotate(ang);g.scale(s,s);const LW0=LW;LW=3/s;
  segs([[0,60,0,26,30,tc('#B9A6A2')]]);ell(0,10,15,18);fo(tc(SKIN[0]));g.beginPath();g.roundRect(-5,-22,10,30,5);fo(tc(SKIN[0]));ell(0,-18,3.5,2.5);g.fillStyle=rgba('#F2B895',.8);g.fill();
  if(pressA>0){g.strokeStyle=rgba('#FFCF9A',pressA);g.lineWidth=2/s;ell(0,-24,14*(1.6-pressA*.6),5*(1.6-pressA*.6));g.stroke()}
  LW=LW0;g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function toScreen(x,y,f){const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f,q=rot((x-cx)*z,(y-cy)*z,CAM.r*f);return [270+CAM.sx*f+q[0],480+CAM.sy*f+q[1]]}
function spark(x,y,r,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r*2.5,'#FFE6C4',.6*a);g.fillStyle=rgba('#FFF4EA',a);g.beginPath();g.moveTo(x,y-r);g.quadraticCurveTo(x+r*.12,y-r*.12,x+r,y);g.quadraticCurveTo(x+r*.12,y+r*.12,x,y+r);g.quadraticCurveTo(x-r*.12,y+r*.12,x-r,y);g.quadraticCurveTo(x-r*.12,y-r*.12,x,y-r);g.fill();g.restore()}
function grassRow(y,seed,n,x0,x1,h,col){g.lineCap='round';for(let i=0;i<n;i++){const x=x0+hash(seed+i)*(x1-x0),hh=h*(.5+hash(seed+i*3)*.7),sw=Math.sin(t*1.6+x*.05)*hh*.15;g.strokeStyle=col;g.lineWidth=2.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+sw*.3,y-hh*.6,x+sw+(hash(i)-.5)*10,y-hh);g.stroke()}}
function birds(){g.strokeStyle=rgba('#241F4A',.8);g.lineWidth=2;for(let i=0;i<5;i++){const x=((t*28+i*40+hash(i)*30)%900)-200,y=330+i*9+Math.sin(t*2+i)*4,f=Math.sin(t*9+i*2)*4;g.beginPath();g.moveTo(x-7,y-f);g.quadraticCurveTo(x-3,y-2,x,y);g.quadraticCurveTo(x+3,y-2,x+7,y-f);g.stroke()}}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function villageGround(T){
  const gr=g.createLinearGradient(0,600,0,1100);gr.addColorStop(0,mixc(PAL.ground,PAL.far,.5));gr.addColorStop(.25,PAL.ground);gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-1200,618,3600,1400);
  g.fillStyle=tc('#4A3848');g.beginPath();g.moveTo(-1200,676);for(let x=-1200;x<=2400;x+=40)g.lineTo(x,676+nz(x*.02)*4);g.lineTo(2400,770);for(let x=2400;x>=-1200;x-=40)g.lineTo(x,770+nz(x*.03+5)*5);g.closePath();g.fill();
  brush(-200,680,1200,90,'#6A5468',21,60,.35);
  for(const ry of[704,738]){g.strokeStyle=rgba('#1F2236',.55);g.lineWidth=4;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke();g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=1.5;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+3+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke()}
  for(const pd of[[150,740,60],[420,706,48],[700,738,70],[-150,706,50]]){ell(pd[0],pd[1],pd[2],7);const pg=g.createLinearGradient(pd[0]-pd[2],0,pd[0]+pd[2],0);pg.addColorStop(0,T.sky[1]);pg.addColorStop(.6,T.sky[2]);pg.addColorStop(1,T.moon?'#4B3463':'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);ripples(pd[0]+10,pd[1],pd[2]*.5,0,'#FFE6C4',.4)}
  grassRow(676,1,60,-600,1400,22,tc('#4F5470'));
}
const TOD={
  dawn:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[470,520],tint:'#6C4377',ta:.12,lit:.5},
  day:{sky:['#4B3463','#9A6A8E','#F2B895'],sun:[410,300],tint:'#F09A6C',ta:.04,lit:0},
  sunset:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[330,590],tint:'#F09A6C',ta:.14,lit:.8},
  night:{sky:['#120F2A','#241F4A','#4B3463'],sun:null,moon:[400,210],tint:'#241F4A',ta:.42,lit:1}
};
function villageWorld(o){
  const T=TOD[op(o,'tod','dawn')];TINT=T.tint;TA=T.ta;
  const bF=op(o,'bF',0),bM=op(o,'bM',0),bFg=op(o,'bFg',2.5);
  layer(0,()=>sky(T.sky[0],T.sky[1],T.sky[2],-150,620));
  layer(.06,()=>{if(T.sun)sun(T.sun[0],T.sun[1],20);if(T.moon){stars(60,5,-300,-200,1200,700);glow(T.moon[0],T.moon[1],110,'#E1C8B8',.22);ell(T.moon[0],T.moon[1],16,16);g.fillStyle='#E7DCE6';g.fill()}clouds(380,7,3,T.sky[2],.22,6);clouds(260,5,8,T.sky[1],.3,4)},bF*.5);
  layer(.2,()=>{if(!T.moon)birds();hills(575,42,mixc(PAL.far,T.sky[2],.32),1,-600,1300);forestLine(592,mixc(PAL.far,T.sky[1],.15),4,-600,1300,24);if(o.far)o.far()},bF);
  layer(.5,()=>{g.fillStyle=mixc(PAL.ground,PAL.far,.55);g.fillRect(-900,600,2600,300);
    izba(-120,622,150,90,1,T.lit,1);birch(30,628,170,2);izba(160,620,130,80,2,T.lit*.8,1);birch(300,628,200,5);izba(470,622,160,92,3,T.lit,1);birch(600,630,180,8);izba(760,620,140,86,4,T.lit*.7,1);fenceW(-300,900,640,26,3);if(o.mid)o.mid()},bM);
  layer(1,()=>{villageGround(T);if(o.main)o.main()},op(o,'bMain',0));
  if(op(o,'fg',1))layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---- scene
// SCENE 7 — Проверка мелочью: скамейка (0 – 12.17)
// shots: hero thinks by his wall · build menu, finger picks the bench · glass outline of the bench by the wall ·
//        cost insert: 4 wood chips + 1 iron chip · time-lapse: neighbour brings planks · hammer drives nails · evening, unfinished bench
const ST=[0,2.65,4.0,5.05,7.7,10.05,11.15];
const S=shot(t,ST);
const GY=716,HS=.62,BX=290,BLX=108,BLH=40,WL0=-380,WL1=430,WH=250;
// ---------- helpers (local)
function wd(tt,t0,v,D){const l=Math.max(0,tt-t0)*v;return l<D-40?l:D-40+40*(1-Math.exp(-(l-(D-40))/40))}
function gaitFeet(C,d,st,s,face){const L=(C.l1+C.l2)*.09,a=gait(d/s,0,0,face,1,st/s,L,0),b=gait(d/s,0,0,face,1,st/s,L,.5);return [[a.fx,a.fy],[b.fx,b.fy]]}
function standFeet(C,face,yaw){const rx=-Math.cos(yaw)*C.hw*.36;return [[rx*1.1+face*6,0],[-rx*1.1-face*5,0]]}
function walker(C,x0,face,t0,v,D,y,s){
  const d=wd(t,t0,v,D),st=(C.l1+C.l2)*.76*s,yaw=.95*face,o={x:x0+face*d,y,s,yaw,t,lean:.04*face};
  const ts=t0+(D+60)/v,b=sm(ts,ts+.4,t);
  if(b<=0&&t>=t0)o.walk={d,st};
  else{const f=gaitFeet(C,d,st,s,face),q=standFeet(C,face,yaw),bb=t<t0?1:b;
    o.fr=[lerp(f[0][0],q[0][0],bb),lerp(f[0][1],q[0][1],bb)-Math.sin(sm(0,.5,bb)*Math.PI)*5];
    o.fl=[lerp(f[1][0],q[1][0],bb),lerp(f[1][1],q[1][1],bb)-Math.sin(sm(.5,1,bb)*Math.PI)*5];o.lean=.04*face*(1-bb)}
  return o;
}
// time-lapse clock: the day jumps forward twice; k = 0 day .. 1 evening
const K=lerp(0,.45,sm(7.7,8.3,t))+.35*sm(10.05,10.55,t)+.2*sm(11.15,11.6,t);
const LT=t+38*sm(7.7,8.3,t)+30*sm(10.05,10.55,t)+20*sm(11.15,11.6,t);
const SUN=[lerp(440,170,K),lerp(270,575,K*K*.6+K*.4)];
TOD.lapse={sky:[mixc('#4B3463','#241F4A',K),mixc('#9A6A8E','#6C4377',K),mixc('#F2B895','#F09A6C',K)],sun:SUN,tint:'#F09A6C',ta:lerp(.04,.15,K),lit:K*K*.85};
function lapseClouds(){for(let i=0;i<6;i++){const w=110+hash(i+3)*120,x=((hash(i*3+1)*900+LT*9*(.6+hash(i)*.6))%900)-180,y=250+hash(i*7)*120;g.fillStyle=rgba(mixc('#F2B895','#F09A6C',K),.25);ell(x,y,w*.5,14);g.fill();ell(x+w*.2,y-9,w*.3,10);g.fill()}}
function boards(x,y,ang,len,n,col){g.save();g.translate(x,y);g.rotate(ang);for(let i=0;i<n;i++){g.beginPath();g.roundRect(-len/2+i*5-5,-i*7-6,len,7,2);fo(tc(i%2?mixc(col,'#A07A60',.3):col),.8);g.strokeStyle=rgba('#FFF4EA',.35);g.lineWidth=1.5;g.beginPath();g.moveTo(-len/2+i*5,-i*7-4);g.lineTo(len/2+i*5-12,-i*7-4);g.stroke()}g.restore()}
function hen(x,y,s,seed){const pk=Math.max(0,Math.sin(t*3.1+seed*2))**6,dir=Math.sin(t*.35+seed)>0?1:-1,hx_=x+Math.sin(t*.35+seed)*14;g.save();g.translate(hx_,y);g.scale(s*dir,s);
  ell(0,-14,14,10,-.2);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.8);poly([[-12,-18],[-22,-28],[-18,-12]],1);fo(tc(seed%2?'#C0B0AC':'#7A5048'),.8);
  const hy=lerp(-26,-6,pk),hxx=lerp(12,18,pk);segs([[8,-18,hxx,hy,5,tc(seed%2?'#D8C8C0':'#A0705A')]],1);ell(hxx,hy,5,5);fo(tc(seed%2?'#D8C8C0':'#A0705A'),.7);poly([[hxx+4,hy-1],[hxx+9,hy+1],[hxx+4,hy+2]],1);g.fillStyle=tc('#E0B060');g.fill();ell(hxx,hy-5,2.5,2.5);g.fillStyle=tc('#C04050');g.fill();
  g.strokeStyle=tc('#C89040');g.lineWidth=1.6;g.beginPath();g.moveTo(-2,-5);g.lineTo(-3,0);g.moveTo(3,-5);g.lineTo(4,0);g.stroke();g.restore()}
function burdock(x,y,s,seed){g.save();g.translate(x,y);g.scale(s,s);for(let i=0;i<5;i++){const a=-1.9+i*.45+Math.sin(t*1.1+i+seed)*.05;g.save();g.rotate(a+Math.PI/2);g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(-26,-60,0,-110);g.quadraticCurveTo(26,-60,0,0);g.fillStyle=i%2?'#2A2238':'#241E34';g.fill();g.strokeStyle='#3A3050';g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,-100);g.stroke();g.restore()}g.restore()}
// hero's izba side wall on the action plane (same logs and carved okno as scene 5), eave shadow follows the sun
function wall(x0,x1,gy,h){
  const top=gy-h;
  g.beginPath();g.rect(x0,top,x1-x0,h);g.fillStyle=tc('#5A3E48');g.fill();
  for(let y=top;y<gy;y+=24){const lg=g.createLinearGradient(0,y,0,y+24);lg.addColorStop(0,tc('#7A5A5C'));lg.addColorStop(.45,tc('#6B4A4E'));lg.addColorStop(1,tc('#3E2C3A'));g.fillStyle=lg;g.fillRect(x0,y+1,x1-x0,22);g.fillStyle=rgba('#1F2236',.55);g.fillRect(x0,y,x1-x0,2);
    ell(x1+6,y+12,11,11);fo(tc('#8A6A64'),.7);g.strokeStyle=rgba('#5A3E48',.8);g.lineWidth=1.2;g.beginPath();g.arc(x1+6,y+12,5,0,6.3);g.stroke()}
  brush(x0,top,x1-x0,h,'#8A6A64',27,50,.22);
  // eave
  g.beginPath();g.moveTo(x0-40,top-30);g.lineTo(x1+40,top-30);g.lineTo(x1+40,top+4);for(let x=x1+40;x>x0-40;x-=16)g.quadraticCurveTo(x-8,top+16,x-16,top+4);g.closePath();fo(tc('#3E3048'));
  // roof slope receding to the ridge, own chimney with smoke
  g.beginPath();g.moveTo(x0-40,top-28);g.lineTo(x1+40,top-28);g.lineTo(x1+6,top-90);g.lineTo(x0-6,top-90);g.closePath();fo(tc('#3E3048'));
  g.strokeStyle=tc('#5E4A62');g.lineWidth=2;for(let i=1;i<4;i++){const y=top-28-i*16;g.beginPath();g.moveTo(x0-40+i*7,y);g.lineTo(x1+40-i*7,y);g.stroke()}
  g.beginPath();g.rect(x0+330,top-122,22,50);fo(tc("#4A3A48"));smoke(x0+341,top-124,5,.55);
  // okno with open shutters
  const wx=BX,wy=top+60;g.beginPath();g.rect(wx-40,wy,80,80);g.fillStyle=mixc(tc('#2A2440'),'#FFB36B',K*K*.8);g.fill();ol();
  if(K>.5)glow(wx,wy+40,90,'#FFB36B',.35*(K-.5)*2);
  g.strokeStyle=tc('#B9A6A2');g.lineWidth=4;g.beginPath();g.moveTo(wx,wy);g.lineTo(wx,wy+80);g.moveTo(wx-40,wy+36);g.lineTo(wx+40,wy+36);g.stroke();
  for(const sd of[-1,1]){g.beginPath();g.rect(wx+sd*40+(sd<0?-34:0),wy-2,34,84);fo(tc('#6B5A70'),.8);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2;g.beginPath();g.moveTo(wx+sd*57,wy+8);g.lineTo(wx+sd*57,wy+74);g.stroke()}
  g.beginPath();g.moveTo(wx-58,wy-4);g.lineTo(wx,wy-34);g.lineTo(wx+58,wy-4);g.lineTo(wx+50,wy+4);g.lineTo(wx-50,wy+4);g.closePath();fo(tc('#B9A6A2'),.9);
  g.beginPath();g.rect(wx-52,wy+80,104,10);fo(tc('#B9A6A2'),.9);for(let i=0;i<5;i++){ell(wx-40+i*20,wy+96,4,5);fo(tc('#B9A6A2'),.6)}
  // geranium pot on the sill
  g.beginPath();g.moveTo(wx+12,wy+80);g.lineTo(wx+16,wy+64);g.lineTo(wx+34,wy+64);g.lineTo(wx+38,wy+80);g.closePath();fo(tc('#8A5A50'),.7);for(let i=0;i<4;i++){ell(wx+20+i*5,wy+58-(i%2)*6+Math.sin(t*1.5+i)*1,5,4);g.fillStyle=tc(i%2?'#C04050':'#4F5470');g.fill()}
  // sun light on the logs and the eave shadow (time-lapse)
  g.save();g.beginPath();g.rect(x0,top,x1-x0,h);g.clip();
  const sx=lerp(x1+200,x0+300,K),lgr=g.createLinearGradient(sx-500,0,sx+200,0);lgr.addColorStop(0,rgba('#FFB36B',0));lgr.addColorStop(.8,rgba(mixc('#FFE6C4','#FFB36B',K),.2));lgr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=lgr;g.fillRect(x0,top,x1-x0,h);
  const eh=lerp(70,18,K),sl=lerp(-.25,.55,K);g.fillStyle=rgba('#1F2236',.32);g.beginPath();g.moveTo(x0,top);g.lineTo(x1,top);g.lineTo(x1,top+eh-sl*40);g.lineTo(x0,top+eh+sl*40);g.closePath();g.fill();
  g.restore();
  // ground shadow strip at the wall foot
  g.fillStyle=rgba('#1F2236',lerp(.35,.2,K));g.beginPath();g.moveTo(x0,gy);g.lineTo(x1,gy);g.lineTo(x1+lerp(10,90,K),gy+lerp(10,22,K));g.lineTo(x0+lerp(10,90,K),gy+lerp(10,22,K));g.closePath();g.fill();
}
// chopping block with an axe leaning on it
function block(x,gy){ell(x,gy+2,34,8);g.fillStyle=rgba(PAL.out,.35);g.fill();g.beginPath();g.moveTo(x-28,gy-BLH);g.lineTo(x-30,gy);g.quadraticCurveTo(x,gy+8,x+30,gy);g.lineTo(x+28,gy-BLH);g.closePath();fo(tc('#6B4A4E'));
  g.strokeStyle=rgba('#3E2C3A',.7);g.lineWidth=1.5;for(let i=0;i<4;i++){g.beginPath();g.moveTo(x-22+i*14,gy-BLH+6);g.lineTo(x-24+i*15,gy-2);g.stroke()}
  ell(x,gy-BLH,28,8);fo(tc('#C8A07A'));g.strokeStyle=rgba('#8A6A58',.8);g.lineWidth=1;for(let r=2;r<8;r+=2){ell(x,gy-BLH,r*3.4,r);g.stroke()}
  g.save();g.translate(x+36,gy);g.rotate(.32);segs([[0,0,0,-60,4,tc('#A0704A')]]);g.beginPath();g.moveTo(-2,-56);g.lineTo(-16,-66);g.quadraticCurveTo(-20,-56,-16,-44);g.lineTo(-2,-50);g.closePath();fo(tc('#8C8FA3'),.8);g.restore()}
// the bench under the okno: 0 none, 1 planks stacked, 2 legs + nailed seat (unfinished)
function benchSite(stage){
  if(stage>=1){boards(BX+44,GY-6,0,150,stage>=2?2:4,'#C8A07A')}
  if(stage>=2){for(const sd of[-1,1]){g.beginPath();g.roundRect(BX+sd*58-12,GY-46,24,38,4);fo(tc('#A07A60'),.9);ell(BX+sd*58,GY-46,12,4);fo(tc('#C8A07A'),.7)}
    g.beginPath();g.roundRect(BX-86,GY-56,172,11,3);fo(tc('#C8A07A'),.9);g.strokeStyle=rgba('#FFF4EA',.4);g.lineWidth=1.5;g.beginPath();g.moveTo(BX-80,GY-53);g.lineTo(BX+70,GY-53);g.stroke();
    for(const sd of[-1,1]){ell(BX+sd*58,GY-50,2.2,2.2);g.fillStyle=tc('#D8DAE6');g.fill()}
    // back plank leaning on the wall, not yet fixed
    g.save();g.translate(BX+70,GY-10);g.rotate(-.12);g.beginPath();g.roundRect(-6,-120,12,120,3);fo(tc('#C8A07A'),.8);g.restore()}
}
// glass outline of the planned bench
function ghostBench(a){if(a<=0)return;g.save();g.globalAlpha=a;g.shadowColor='#E1C8B8';g.shadowBlur=14;g.strokeStyle=rgba('#E1C8B8',.9);g.lineWidth=2.2;g.setLineDash([7,5]);g.lineDashOffset=-t*20;
  g.beginPath();g.rect(BX-88,GY-58,176,12);g.moveTo(BX-70,GY-46);g.lineTo(BX-70,GY-8);g.moveTo(BX+70,GY-46);g.lineTo(BX+70,GY-8);g.rect(BX-88,GY-150,176,14);g.moveTo(BX-80,GY-136);g.lineTo(BX-80,GY-58);g.moveTo(BX+80,GY-136);g.lineTo(BX+80,GY-58);g.stroke();
  g.setLineDash([]);g.fillStyle=rgba('#E1C8B8',.08);g.fillRect(BX-88,GY-150,176,142);g.restore()}
// ---------- characters
const NB=worker(1);
function heroO(){
  // 0..4.9 standing, thinking; 7.7.. sitting on the chopping block
  if(t<7.7){const th=sm(.15,.55,t),med=sm(4.0,4.4,t);
    const o={x:142,y:726,s:HS,yaw:.62,t,medal:med>0?'hidden':'hidden',fr:[26,0],fl:[-18,0],ls:1,rimC:PAL.rim,rimA:.5,lean:.03};
    o.hr=[lerp(14,10,th)+med*22,lerp(-60,-247,th)+med*55];o.hl=[lerp(-10,22,th)*(1-med),lerp(-150,-176,th)];
    if(med>0)o.itemR=(gg,ex,ey,an)=>medallion(ex+4,ey-4,9,an,0,.4+.4*med);
    o.em={look:[.75,.35-.2*med],browIn:.35*th*(1-med),brow:.1+.4*med,smile:lerp(-.1,.15,sm(2.2,2.6,t)),open:0};
    o.tilt=.12*th*(1-med)+.04*Math.sin(t*1.2);o.turn=-.05*Math.sin(t*.8);return o}
  const look=nbO(),lx=cl((look.x-200)/220,-1,1);
  const o={x:BLX,y:GY+8,s:HS,yaw:.7,t,medal:'hidden',hipY:-(BLH/HS)-10,fr:[52,0],fl:[30,0],lean:.12,ls:1,rimC:PAL.rim,rimA:.7,
    hr:[48,-100],hl:[40,-96],em:{look:[lx,.15],brow:.15,smile:.05},turn:lerp(-.1,.25,(lx+1)/2),tilt:.06};
  return o;
}
function nbO(){
  // time-lapse: he walks briskly
  const o=walker(NB,600,-1,7.75,140,215,724,HS),dn=ease((t-9.2)/.55),up=sm(9.78,10.05,t);
  const crouch=dn*(1-up*.8);o.hipY=lerp(-142.8,-102,crouch);o.lean=lerp(o.lean,-.45,crouch);
  const sh=[-4,-252],lo=[-58,-78];
  if(dn<1){const hp=[lerp(sh[0],lo[0],dn),lerp(sh[1],lo[1],dn)];o.hr=hp;o.hl=dn>.4?[lerp(30,-40,dn),lerp(-150,-90,dn)]:null;
    o.itemR=(gg,ex,ey)=>boards(ex-12*dn,ey-6*(1-dn),lerp(.08,0,dn),240,4,'#C8A07A')}
  else{o.hr=[lerp(-40,-10,up),lerp(-90,-150,up)];o.hl=[lerp(-30,10,up),lerp(-96,-150,up)]}
  o.em={look:[-.6,.4*crouch],smile:.1};o.tilt=.2*crouch;return o;
}
function yard(bF,bM,bFg,stage,people,ghost){
  villageWorld({tod:'lapse',bF,bM,fg:0,
    far:()=>{lapseClouds()},
    main:()=>{
      wall(WL0,WL1,GY-8,WH);
      // long shadows swing with the time-lapse sun
      const L=(x,w)=>{const dir=x<SUN[0]?-1:1,len=lerp(20,150,K);ell(x+dir*len*.5,GY+6,w*.5+len*.5,5+K*2);g.fillStyle=rgba(PAL.out,.22+.1*K);g.fill()};
      L(BLX,60);if(people){L(heroO().x,50);if(t>=7.7&&t<10.05)L(nbO().x,50)}if(stage>=2)L(BX,170);
      benchSite(stage);ghostBench(ghost||0);
      hen(560,720,.62,1);
      block(BLX,GY+6);
      if(people){const L=[];if(t>=7.7&&t<10.05)L.push({C:NB,o:nbO()});L.push({C:HERO,o:heroO()});L.sort((a,b)=>a.o.y-b.o.y);for(const a of L)person(a.C,a.o)}
      grassRow(770,4,40,-600,1400,30,tc('#3E3A58'));
    }});
  layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---------------- shot 0: medium — the hero thinks, eyes on the empty place under his okno
if(S.i===0){
  const u=S.u;setCam(222+u*10,556-u*6,1.62+u*.1,-.01+u*.01);
  yard(3,2,4,0,1);
  layer(1.4,()=>{burdock(-20,830,1.2,3)},4);
  motes(18,5,180,150,360,520,'#FFE6C4',.45,1.8);
}
// ---------------- shot 1: insert — build menu, the right index finger picks the bench
if(S.i===1){
  const lt=S.lt;setCam(300,560,2.4,0);
  villageWorld({tod:'lapse',bF:10,bM:9,bMain:8,fg:0,main:()=>{wall(WL0,WL1,GY-8,WH);block(BLX,GY+6);person(HERO,heroO())}});
  wash('#241F4A',.3);
  const z=1+lt*.05,ap=sm(2.65,2.9,t),press=sm(3.35,3.45,t)*(1-sm(3.7,4,t)),pick=sm(3.45,3.6,t);
  g.save();g.translate(270,470);g.scale(z,z);g.rotate(.02-lt*.01);g.translate(-270,-470);
  panel(50,330,440,250,ap,'#E1C8B8',.6);
  g.save();g.globalAlpha*=ap;medallion(84,366,16,0,0,.6);g.fillStyle=rgba('#E1C8B8',.8);g.beginPath();g.roundRect(112,358,150,7,3.5);g.fill();
  const kinds=['well','bench','roof','road'];
  for(let i=0;i<4;i++){const x=70+i*102,y=400,sel=i===1,hv=sel?Math.max(pick,sm(3.0,3.35,t)*.4):0,dim=i===0?.45:1;
    g.save();if(hv>0){g.shadowColor='#FFCF9A';g.shadowBlur=26*hv}g.beginPath();g.roundRect(x,y,92,150,12);g.fillStyle=rgba(sel?mixc('#241F4A','#FFCF9A',.18*hv):'#241F4A',.6);g.fill();g.strokeStyle=rgba(sel&&hv>0?'#FFCF9A':'#E1C8B8',sel?.5+.5*hv:.35);g.lineWidth=2;g.stroke();g.restore();
    icon(kinds[i],x+46,y+58,2.3*(sel?1+.15*pick:1),dim);
    // size pips: the bench is the smallest job (one pip)
    const np=[4,1,3,3][i];for(let k=0;k<np;k++){ell(x+46-(np-1)*7+k*14,y+122,4.5,4.5);g.fillStyle=rgba(sel?'#FFCF9A':'#E1C8B8',sel?.9:.5);g.fill()}
    if(i===0){g.strokeStyle=rgba('#FFCF9A',.7);g.lineWidth=3;g.beginPath();g.moveTo(x+64,y+18);g.lineTo(x+72,y+28);g.lineTo(x+86,y+10);g.stroke()}}
  g.restore();
  // finger approaches from below-right, anticipation dip, taps the bench tile
  const ap2=ease((t-2.8)/.5),tap=Math.sin(cl((t-3.3)/.25,0,1)*Math.PI);
  const fx=lerp(470,226,ap2)+4*Math.sin(t*2),fy=lerp(900,500,ap2)+lerp(0,-8,sm(3.15,3.3,t))+tap*14;
  finger(fx,fy,1.35,-.12,press);
  if(press>0){g.strokeStyle=rgba('#FFCF9A',press);g.lineWidth=2;for(let r=0;r<2;r++){ell(222,476,30+r*16+(t-3.4)*60,10+r*5+(t-3.4)*20);g.stroke()}}
  g.restore();
  motes(14,6,0,200,540,600,'#FFE6C4',.4,2);
}
// ---------------- shot 2: medium-wide — a glass outline of the bench appears under the okno
if(S.i===2){
  const u=S.u;setCam(222+u*12,556-u*6,1.4+u*.07,.008);
  yard(2,1.5,3,0,1,sm(4.15,4.6,t)*(.85+.15*Math.sin(t*6)));
  motes(16,8,0,150,540,560,'#FFE6C4',.45,1.8);
}
// ---------------- shot 3: insert — cost: four wood chips, one iron chip
if(S.i===3){
  const lt=S.lt;setCam(300,560,2.4,0);
  villageWorld({tod:'lapse',bF:10,bM:9,bMain:9,fg:0,main:()=>{wall(WL0,WL1,GY-8,WH);ghostBench(.6);block(BLX,GY+6);person(HERO,heroO())}});
  wash('#241F4A',.35);
  // camera: whole panel → push to the wood bar end → slide to the iron bar end
  const pu=ease((lt-.5)/.9),sl=ease((t-6.75)/.35);
  const PX=40,PY=330,PW=460,bw=PW-120,woodE=PX+70+bw*110/200,ironE=PX+70+bw*15/50,ry0=PY+74,ry1=PY+124;
  const z=lerp(1.05,1.9,pu)+lt*.02,cx=lerp(270,lerp(woodE+70,ironE+90,sl),pu),cy=lerp(430,lerp(ry0+20,ry1,sl),pu);
  g.save();g.translate(270,470+kick(t,6.4,2,.2)+kick(t,7.2,3,.25));g.scale(z,z);g.translate(-cx,-cy);
  panel(PX,PY,PW,190,sm(5.05,5.3,t),'#E1C8B8',.6);
  g.save();g.globalAlpha*=sm(5.05,5.3,t);
  icon('bench',PX+40,PY+34,1.6,1);g.fillStyle=rgba('#E1C8B8',.7);g.beginPath();g.roundRect(PX+70,PY+30,120,6,3);g.fill();
  const wc=[6.3,6.38,6.46,6.54],nW=wc.filter(c=>t>=c).length,nI=t>=7.2?1:0;
  icon('wood',PX+36,ry0+12,1.25,1);bar(PX+70,ry0,bw,24,(110-nW)/200,'#A0704A',1,.4);ticks(PX+70,ry0,bw,24,20,1);
  icon('iron',PX+36,ry1+12,1.25,1);bar(PX+70,ry1,bw,24,(15-nI)/50,'#8C8FA3',1,.4);ticks(PX+70,ry1,bw,24,10,1);
  // the bench cost slot on the right: fills with what was taken
  const slot=[PX+PW-36,PY+98],got=nW+nI;g.save();g.shadowColor='#FFCF9A';g.shadowBlur=12*sm(6.3,6.6,t);g.beginPath();g.roundRect(slot[0]-22,slot[1]-26,44,52,8);g.fillStyle=rgba('#241F4A',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.4+.1*got);g.lineWidth=1.5;g.stroke();g.restore();
  icon('bench',slot[0],slot[1]-8,1,1);for(let k=0;k<got;k++){ell(slot[0]-12+k*6,slot[1]+14,2.2,2.2);g.fillStyle=k<nW?'#D8A878':'#C8CBE0';g.fill()}
  // flying chips (tiny on purpose)
  function chip(t0,sx,sy,col,w){const u=(t-t0)/.55;if(u<0||u>1)return;const px=lerp(sx,slot[0]-10,ein(u)),py=lerp(sy,slot[1]+12,u)-Math.sin(u*Math.PI)*28;g.save();g.translate(px,py);g.rotate(u*7);g.fillStyle=col;g.fillRect(-w/2,-4,w,8);g.restore();if(u<.25)spark(sx,sy,6*(1-u*4),1-u*4)}
  wc.forEach(c=>chip(c,woodE-bw/400,ry0+12,'#D8A878',bw/200));chip(7.2,ironE-bw/100,ry1+12,'#C8CBE0',bw/50);
  g.restore();g.restore();
  motes(12,4,0,200,540,600,'#FFE6C4',.4,2);
}
// ---------------- shot 4: time-lapse — sun jumps, the neighbour brings sanded planks on his right shoulder
if(S.i===4){
  const u=S.u;setCam(268-u*14,550-u*8,1.32+u*.08,-.006);
  yard(2,1.5,3,t>=9.75?1:0,1);
  leaves(8,4,0,200,540,600,'#C9926F');
}
// ---------------- shot 5: insert — a hammer drives new nails, chips fly
if(S.i===5){
  const lt=S.lt;setCam(300,560,2,0);
  villageWorld({tod:'lapse',bF:10,bM:9,bMain:10,fg:0,main:()=>{wall(WL0,WL1,GY-8,WH);benchSite(1);block(BLX,GY+6);person(HERO,heroO())}});
  wash('#241F4A',.2);
  const hits=[10.3,10.62,10.94],z=1+lt*.05;
  g.save();g.translate(270+kick(t,10.3,3,.2)+kick(t,10.62,3,.2),480+kick(t,10.94,3,.2));g.scale(z*1.45,z*1.45);g.rotate(-.04);g.translate(-232,-548);
  // plank seat, big
  g.beginPath();g.roundRect(-40,500,640,110,10);const pg=g.createLinearGradient(0,500,0,610);pg.addColorStop(0,tc('#E0BC94'));pg.addColorStop(1,tc('#A07A60'));g.fillStyle=pg;g.fill();ol();
  g.strokeStyle=rgba('#8A6A58',.55);g.lineWidth=2;for(let i=0;i<6;i++){g.beginPath();g.moveTo(-40,516+i*16);for(let x=-40;x<600;x+=40)g.quadraticCurveTo(x+20,516+i*16+Math.sin(x*.05+i)*5,x+40,516+i*16);g.stroke()}
  g.beginPath();g.roundRect(-40,610,640,40,6);fo(tc('#7A5848'));
  // nails: one per hit goes in; earlier nails already flush
  const nx=[110,210,310];
  for(let k=0;k<3;k++){const h=hits[k],dn=t<h-.02?0:1,hh=lerp(46,3,dn)*(t<h-.6&&k>0?1:1),x=nx[k];if(t<h-.6&&k>0)continue;
    g.beginPath();g.rect(x-3,548-hh,6,hh);fo(tc('#8C8FA3'),.6);ell(x,548-hh,10,4);fo(tc('#D8DAE6'),.8);if(dn)spark(x,546,10*Math.max(0,1-(t-h)/.25),Math.max(0,1-(t-h)/.25))}
  // wood chips fly on every hit
  for(const h of hits){const u=t-h;if(u<0||u>.6)continue;for(let i=0;i<9;i++){const a=-Math.PI/2+(hash(i+h)-.5)*2.4,v=180+hash(i*3+h)*220,px=nx[hits.indexOf(h)]+Math.cos(a)*v*u,py=548+Math.sin(a)*v*u+500*u*u;
    g.save();g.translate(px,py);g.rotate(u*12+i);g.fillStyle=rgba(i%2?'#E0BC94':'#C8A07A',1-u/.6);g.fillRect(-5,-2,10,4);g.restore()}}
  // the hammer and the hand of "someone": raise (anticipation), strike
  let cur=0;for(let k=0;k<3;k++)if(t>=hits[k]-.32)cur=k;
  // positive angle lifts the head; strike lands the head's face on the nail (head centre 160 left of the fist)
  const ph=Math.max(0,(t-(hits[cur]-.32))/.32),ang=ph<.7?lerp(.1,1.15,ease(ph/.7)):ph<1?lerp(1.15,0,ein((ph-.7)/.3)):lerp(0,.12,sm(hits[cur],hits[cur]+.15,t));
  const px_=cur>0?lerp(nx[cur-1],nx[cur],ease(ph/.55))+160:nx[0]+160,piv=[px_,517];
  segs([[piv[0],piv[1],piv[0]+260,piv[1]+190,46,tc('#8C7F92')]]);
  g.save();g.translate(piv[0],piv[1]);g.rotate(ang);
  segs([[0,0,-150,0,14,tc('#A0704A')]]);g.beginPath();g.roundRect(-176,-28,32,56,5);fo(tc('#8C8FA3'));g.fillStyle=rgba('#E1E4F0',.5);g.fillRect(-172,-24,6,48);
  ell(6,4,30,24,.5);fo(tc(SKIN[0]));for(let i=0;i<4;i++){ell(-12+i*9,-14+i*3,8,10,.3);fo(tc(SKIN[0]),.7)}ell(-14,8,9,6,-.4);fo(tc(SKIN[0]),.7);
  g.restore();g.restore();
  motes(16,9,0,150,540,600,'#FFE6C4',.55,2);
}
// ---------------- shot 6: evening — the unfinished bench, the hero on his block
if(S.i===6){
  const u=S.u;setCam(244-u*10,552-u*6,1.36+u*.06,.006);
  yard(2,1.5,3,2,1);
  leaves(6,2,0,200,540,600,'#C9926F');
  motes(14,3,0,200,540,500,'#FFE6C4',.45,1.8);
}
// ---------------- finishing: light-only transitions between time-lapse beats (no darkening)
g.save();g.globalCompositeOperation='screen';const bs=toScreen(SUN[0],SUN[1],.06);beam(bs[0],bs[1],270,820,30,200,'#FFB36B',.05+.06*K);g.restore();
if(S.i!==1&&S.i!==3&&S.i!==5)lampLight(bs[0],bs[1]+200,760,mixc('#FFE6C4','#FFB36B',K),.1*(1-K)+.03);
if(K>.3){g.save();g.globalCompositeOperation='multiply';wash('#6C4377',.14*K);g.restore()}
vignette(.42+.1*K);
grain(.05);
wash('#000000',cutDip(t,[0,2.65,4.0,5.05]));
for(const c of[7.7,10.05,11.15]){const f=Math.max(0,1-Math.abs(t-c)/.14);if(f>0){g.save();g.globalCompositeOperation='screen';wash('#FFCF9A',.45*f);g.restore()}}
wash('#000000',(1-sm(0,.07,t))*.85);
}
```

## SCENE 8
```javascript
function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function blob(pts){const n=pts.length;g.beginPath();let m=[(pts[n-1][0]+pts[0][0])/2,(pts[n-1][1]+pts[0][1])/2];g.moveTo(m[0],m[1]);for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];g.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}g.closePath()}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
const CARP={seed:4,r:24,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:70,hw:50,thigh:25,shin:20,uarm:16,farm:12,foot:27,
  skin:SKIN,hair:['#7A4E3E','#4E3236','#9A6A54'],hairStyle:'bald',beard:['#7A4E3E','#4E3236','#9A6A54'],beardLen:1.2,top:['#8C7F92','#5E5470','#B2A6B4'],rolled:1,apron:'#7A5A48',pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30};
const BOY={seed:6,r:20,l1:42,l2:42,a1:32,a2:30,torso:56,neck:5,sw:40,hw:32,thigh:16,shin:13,uarm:11,farm:10,foot:17,
  skin:SKIN,hair:['#79566A','#4E3A50','#A07A88'],hairStyle:'short',top:['#B0A0A8','#7A6A80','#D8C8C8'],pants:'#4B3463',boots:'#C98972',bare:1,belt:'#6B5050',hem:20};
const GRANNY={seed:7,r:21,l1:54,l2:54,a1:42,a2:38,torso:72,neck:5,sw:56,hw:48,thigh:20,shin:16,uarm:13,farm:11,foot:20,stoop:.42,
  skin:SKIN,hair:['#D8CFE0','#9A90A8','#F0E8F2'],hairStyle:'kerchief',kerchief:['#D8CFE0','#9A90A8','#F4ECF4'],top:['#9A8AA0','#6A5C78','#C0B0C4'],skirt:['#4A3D5C','#302844','#6A5A7E'],apron:'#8A7A90',boots:'#2E2438',dress:1};
function woman(seed,kc){return {seed,r:22,l1:62,l2:62,a1:46,a2:42,torso:82,neck:7,sw:62,hw:50,thigh:22,shin:17,uarm:15,farm:12,foot:22,skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'kerchief',kerchief:kc,top:['#C8B4AC','#8C7890','#E8D4C8'],skirt:['#6A4E6E','#46344E','#8A6E8E'],apron:'#B8A090',boots:'#3A2E3E',dress:1,blush:'#D98A80'}}
function worker(seed){const sh=[['#8C7F92','#5E5470','#B2A6B4'],['#79677F','#4E4060','#A08EA4'],['#9C8478','#6A5460','#C0A496']][seed%3];return {seed,r:23,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:66,hw:48,thigh:24,shin:19,uarm:15,farm:13,foot:26,skin:SKIN,hair:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],hairStyle:seed%2?'short':'bald',beard:seed%3===1?null:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],beardLen:1.2,top:sh,pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30}}
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function sky(c0,c1,c2,y1,y2){const gr=g.createLinearGradient(0,y1,0,y2);gr.addColorStop(0,c0);gr.addColorStop(.55,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.fillRect(-2000,-2000,4540,4960)}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function sun(x,y,r){glow(x,y,r*6,PAL.key,.35);glow(x,y,r*2.2,'#FFE0B8',.5);ell(x,y,r,r);g.fillStyle='#FFE6C4';g.fill()}
function clouds(y,n,seed,col,a,sp){for(let i=0;i<n;i++){const w=90+hash(seed+i)*140,x=((hash(seed+i*3)*900+t*sp*(.6+hash(i)*.6))%900)-180,yy=y+hash(seed+i*7)*70;g.fillStyle=rgba(col,a);ell(x,yy,w*.5,12+hash(i+seed)*8);g.fill();ell(x+w*.2,yy-8,w*.3,10);g.fill()}}
function hills(y,amp,col,seed,x0,x1){g.beginPath();g.moveTo(x0,y+400);for(let x=x0;x<=x1;x+=20){g.lineTo(x,y-amp*(.5+.5*nz(x*.006+seed))-amp*.3*nz(x*.02+seed*3))}g.lineTo(x1,y+400);g.closePath();g.fillStyle=col;g.fill()}
function forestLine(y,col,seed,x0,x1,h){g.fillStyle=col;g.beginPath();g.moveTo(x0,y+60);for(let x=x0;x<=x1;x+=9){const hh=h*(.5+hash(seed+x*.13)*.7);g.lineTo(x,y);g.lineTo(x+4.5,y-hh);g.lineTo(x+9,y)}g.lineTo(x1,y+60);g.closePath();g.fill()}
function birch(x,gy,h,seed,col){
  const sw=Math.sin(t*.9+seed)*4,lean=(hash(seed)-.5)*.08;
  const tx=x+lean*h,tw=7+h*.02;
  g.beginPath();g.moveTo(x-tw,gy);g.quadraticCurveTo(x-tw*.8+lean*h*.5,gy-h*.5,tx-tw*.4+sw*.3,gy-h);g.lineTo(tx+tw*.4+sw*.3,gy-h);g.quadraticCurveTo(x+tw*.8+lean*h*.5,gy-h*.5,x+tw,gy);g.closePath();fo(tc('#D9CCD6'));
  g.fillStyle=tc('#302B49');for(let i=0;i<9;i++){const yy=gy-h*hash(seed+i*2.1)*.9,xx=lerp(x,tx,(gy-yy)/h);g.fillRect(xx-tw*.6+hash(i+seed)*3,yy,tw*(.5+hash(seed+i)*.6),2.2)}
  const fc=col||['#4F5470','#6E6A86','#C9926F'];
  // weeping crown: soft volume, then drooping branches covered with small leaf clusters
  for(let i=0;i<4;i++){ell(tx+sw*.7+(hash(seed+i*4.1)-.5)*h*.3,gy-h*(.7+hash(seed+i*1.9)*.25),h*.17,h*.13);g.fillStyle=rgba(tc(fc[0]),.45);g.fill()}
  for(let b=0;b<10;b++){
    const by=gy-h*(.48+hash(seed+b*1.3)*.5),k0=(gy-by)/h,bx=lerp(x,tx,k0)+sw*k0;
    const dir=(b%2?1:-1)*(.45+hash(seed+b)*.55),len=h*(.16+hash(seed+b*2.2)*.16),sy_=Math.sin(t*1.3+b+seed)*3;
    const cx_=bx+dir*len*.6,cy_=by-len*.22,ex=bx+dir*len+sy_,ey=by+len*.6;
    g.strokeStyle=tc('#3A3048');g.lineWidth=1.5;g.beginPath();g.moveTo(bx,by);g.quadraticCurveTo(cx_,cy_,ex,ey);g.stroke();
    for(let k=0;k<7;k++){const u=k/6,px=lerp(lerp(bx,cx_,u),lerp(cx_,ex,u),u),py=lerp(lerp(by,cy_,u),lerp(cy_,ey,u),u)+4,r=h*.042*(1.15-u*.45);
      ell(px,py,r*1.35,r);g.fillStyle=tc(k%3?fc[0]:fc[1]);g.fill();ell(px+r*.35,py-r*.35,r*.6,r*.38);g.fillStyle=rgba(tc(fc[2]),.5);g.fill()}
  }
}
function izba(x,gy,w,h,seed,lit,smokeOn){
  const wall=tc('#6B4A4E'),log=tc('#4A3442'),roof=tc('#3E3048'),rl=tc('#5E4A62');
  const rh=h*.75;
  // wall
  g.beginPath();g.rect(x-w/2,gy-h,w,h);fo(wall);
  g.strokeStyle=log;g.lineWidth=2;for(let y=gy-h+10;y<gy;y+=12){g.beginPath();g.moveTo(x-w/2,y);g.lineTo(x+w/2,y);g.stroke()}
  for(let y=gy-h+4;y<gy;y+=12){for(const sd of[-1,1]){ell(x+sd*(w/2+3),y,5,5.5);fo(tc('#8A6A64'),.6)}}
  brush(x-w/2,gy-h,w,h,rgba(tc('#8A6A64'),1),seed,10,.25);
  // roof
  g.beginPath();g.moveTo(x-w/2-16,gy-h+4);g.lineTo(x,gy-h-rh);g.lineTo(x+w/2+16,gy-h+4);g.closePath();fo(roof);
  g.strokeStyle=rl;g.lineWidth=2;for(let i=1;i<7;i++){const u=i/7;g.beginPath();g.moveTo(lerp(x,x-w/2-16,u),lerp(gy-h-rh,gy-h+4,u));g.lineTo(lerp(x,x+w/2+16,u),lerp(gy-h-rh,gy-h+4,u));g.stroke()}
  // gable with carved board
  g.beginPath();g.moveTo(x-w*.3,gy-h);g.lineTo(x,gy-h-rh*.75);g.lineTo(x+w*.3,gy-h);g.closePath();fo(tc('#5A3E48'),.8);
  g.beginPath();g.moveTo(x,gy-h-rh-2);g.lineTo(x,gy-h-rh+16);ol(1.2);
  // okno
  const wx=x,wy=gy-h*.55,ww=w*.22,wh=h*.32;
  g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);g.fillStyle=lit>0?mixc('#2A2440','#FFB36B',lit):'#2A2440';g.fill();ol();
  if(lit>0)glow(wx,wy,ww*1.6,'#FFB36B',.35*lit);
  g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2.5;g.stroke();
  g.beginPath();g.moveTo(wx-ww*.75,wy-wh*.6);g.lineTo(wx,wy-wh*.95);g.lineTo(wx+ww*.75,wy-wh*.6);g.lineTo(wx+ww*.7,wy-wh*.5);g.lineTo(wx-ww*.7,wy-wh*.5);g.closePath();fo(tc('#B9A6A2'),.8);
  g.beginPath();g.rect(wx-ww*.7,wy+wh*.5,ww*1.4,5);fo(tc('#B9A6A2'),.8);
  // chimney + smoke
  const chx=x+w*.22,chy=gy-h-rh*.42;g.beginPath();g.rect(chx-7,chy-24,14,28);fo(tc('#4A3A48'));
  if(smokeOn)smoke(chx,chy-26,seed,.5);
}
function smoke(x,y,seed,a){for(let i=0;i<9;i++){const u=((t*.18+i/9+hash(seed+i)*.1)%1),r=6+u*26;g.fillStyle=rgba(tc('#B9A6C2'),a*(1-u)*(u*4>1?1:u*4));ell(x+u*30+Math.sin(t*.8+i)*6*u,y-u*120,r,r*.8);g.fill()}}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function leaves(n,seed,x0,y0,w,h,col){for(let i=0;i<n;i++){const ph=hash(seed+i),u=((t*(.08+ph*.06)+ph)%1),x=x0+hash(seed+i*2)*w+Math.sin(t*1.5+i)*25+u*60,y=y0+u*h;g.save();g.translate(x,y);g.rotate(t*2+i);ell(0,0,4,2);g.fillStyle=rgba(col,.85*Math.sin(u*Math.PI));g.fill();g.restore()}}
function ripples(x,y,w,t0,col,a){for(let i=0;i<3;i++){const u=((t-t0)*.5+i/3)%1;if(t<t0)continue;g.strokeStyle=rgba(col,a*(1-u));g.lineWidth=1.5;ell(x,y,w*(.2+u),w*(.2+u)*.32);g.stroke()}}
function fenceW(x0,x1,gy,h,seed){g.strokeStyle=tc('#5A4450');for(let x=x0;x<=x1;x+=22){g.beginPath();g.moveTo(x,gy);g.lineTo(x+(hash(seed+x)-.5)*4,gy-h);g.lineWidth=5;g.stroke()}g.lineWidth=3;for(let k=0;k<4;k++){g.strokeStyle=tc(k%2?'#6B5260':'#4E3A4A');g.beginPath();g.moveTo(x0,gy-h*.2-k*h*.18);for(let x=x0;x<=x1;x+=11)g.lineTo(x,gy-h*.2-k*h*.18+((x/11+k)%2?3:-3));g.stroke()}}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function toScreen(x,y,f){const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f,q=rot((x-cx)*z,(y-cy)*z,CAM.r*f);return [270+CAM.sx*f+q[0],480+CAM.sy*f+q[1]]}
function grassRow(y,seed,n,x0,x1,h,col){g.lineCap='round';for(let i=0;i<n;i++){const x=x0+hash(seed+i)*(x1-x0),hh=h*(.5+hash(seed+i*3)*.7),sw=Math.sin(t*1.6+x*.05)*hh*.15;g.strokeStyle=col;g.lineWidth=2.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+sw*.3,y-hh*.6,x+sw+(hash(i)-.5)*10,y-hh);g.stroke()}}
function birds(){g.strokeStyle=rgba('#241F4A',.8);g.lineWidth=2;for(let i=0;i<5;i++){const x=((t*28+i*40+hash(i)*30)%900)-200,y=330+i*9+Math.sin(t*2+i)*4,f=Math.sin(t*9+i*2)*4;g.beginPath();g.moveTo(x-7,y-f);g.quadraticCurveTo(x-3,y-2,x,y);g.quadraticCurveTo(x+3,y-2,x+7,y-f);g.stroke()}}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function villageGround(T){
  const gr=g.createLinearGradient(0,600,0,1100);gr.addColorStop(0,mixc(PAL.ground,PAL.far,.5));gr.addColorStop(.25,PAL.ground);gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-1200,618,3600,1400);
  g.fillStyle=tc('#4A3848');g.beginPath();g.moveTo(-1200,676);for(let x=-1200;x<=2400;x+=40)g.lineTo(x,676+nz(x*.02)*4);g.lineTo(2400,770);for(let x=2400;x>=-1200;x-=40)g.lineTo(x,770+nz(x*.03+5)*5);g.closePath();g.fill();
  brush(-200,680,1200,90,'#6A5468',21,60,.35);
  for(const ry of[704,738]){g.strokeStyle=rgba('#1F2236',.55);g.lineWidth=4;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke();g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=1.5;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+3+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke()}
  for(const pd of[[150,740,60],[420,706,48],[700,738,70],[-150,706,50]]){ell(pd[0],pd[1],pd[2],7);const pg=g.createLinearGradient(pd[0]-pd[2],0,pd[0]+pd[2],0);pg.addColorStop(0,T.sky[1]);pg.addColorStop(.6,T.sky[2]);pg.addColorStop(1,T.moon?'#4B3463':'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);ripples(pd[0]+10,pd[1],pd[2]*.5,0,'#FFE6C4',.4)}
  grassRow(676,1,60,-600,1400,22,tc('#4F5470'));
}
const TOD={
  dawn:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[470,520],tint:'#6C4377',ta:.12,lit:.5},
  day:{sky:['#4B3463','#9A6A8E','#F2B895'],sun:[410,300],tint:'#F09A6C',ta:.04,lit:0},
  sunset:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[330,590],tint:'#F09A6C',ta:.14,lit:.8},
  night:{sky:['#120F2A','#241F4A','#4B3463'],sun:null,moon:[400,210],tint:'#241F4A',ta:.42,lit:1}
};
function villageWorld(o){
  const T=TOD[op(o,'tod','dawn')];TINT=T.tint;TA=T.ta;
  const bF=op(o,'bF',0),bM=op(o,'bM',0),bFg=op(o,'bFg',2.5);
  layer(0,()=>sky(T.sky[0],T.sky[1],T.sky[2],-150,620));
  layer(.06,()=>{if(T.sun)sun(T.sun[0],T.sun[1],20);if(T.moon){stars(60,5,-300,-200,1200,700);glow(T.moon[0],T.moon[1],110,'#E1C8B8',.22);ell(T.moon[0],T.moon[1],16,16);g.fillStyle='#E7DCE6';g.fill()}clouds(380,7,3,T.sky[2],.22,6);clouds(260,5,8,T.sky[1],.3,4)},bF*.5);
  layer(.2,()=>{if(!T.moon)birds();hills(575,42,mixc(PAL.far,T.sky[2],.32),1,-600,1300);forestLine(592,mixc(PAL.far,T.sky[1],.15),4,-600,1300,24);if(o.far)o.far()},bF);
  layer(.5,()=>{g.fillStyle=mixc(PAL.ground,PAL.far,.55);g.fillRect(-900,600,2600,300);
    izba(-120,622,150,90,1,T.lit,1);birch(30,628,170,2);izba(160,620,130,80,2,T.lit*.8,1);birch(300,628,200,5);izba(470,622,160,92,3,T.lit,1);birch(600,630,180,8);izba(760,620,140,86,4,T.lit*.7,1);fenceW(-300,900,640,26,3);if(o.mid)o.mid()},bM);
  layer(1,()=>{villageGround(T);if(o.main)o.main()},op(o,'bMain',0));
  if(op(o,'fg',1))layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
// ---- scene
// SCENE 8 — «Подушка, закат и пустая улица» (91.9 – 105.4)
// shots: granny crosses (wide) | puts pillow (medium) | finished bench, sunset arc (wide) | face in sunset (close) |
//        nobody asks for a reward (medium) | doors close (wide) | smile fades (close) + fade to black
const ST=[0,1.7,3.15,6.35,8.8,10.45,12.2];
const S=shot(t,ST);
const GY=716,WY=700,WC=340,BX0=100,BX1=300,SEAT=664,HX=262,HY=712,HS=.6;
const PIL=['#C48A8A','#8E5A66','#E7C6AD'];
const WOOD=['#A07A60','#7A5848','#C8A080'];
const W11=woman(11,['#7A5A8A','#4E3A60','#9A7AAA']),W12=woman(12,['#A0606A','#703E4A','#C08088']),NB=worker(1);
function wD(tt,t0,v,acc){const u=tt-t0;if(u<=0)return 0;if(u<acc)return v*u*u/(2*acc);return v*(acc/2+u-acc)}
// embroidered pillow (#C48A8A, embroidery #E7C6AD)
function pillow(x,y,w,h,a){g.save();g.translate(x,y);g.rotate(a||0);
  const P=[[-w*.5,-h*.4],[0,-h*.56],[w*.5,-h*.4],[w*.57,0],[w*.5,h*.42],[0,h*.54],[-w*.5,h*.42],[-w*.57,0]];
  blob(P);const pg=g.createLinearGradient(0,-h*.5,0,h*.5);pg.addColorStop(0,tc(mixc(PIL[0],'#FFFFFF',.15)));pg.addColorStop(1,tc(PIL[1]));g.fillStyle=pg;g.fill();ol();
  g.strokeStyle=tc(PIL[2]);g.lineWidth=Math.max(1,h*.06);g.lineJoin='round';g.beginPath();
  for(let i=0;i<=8;i++){const xx=-w*.36+i*w*.09;g.lineTo(xx,(i%2?-1:1)*h*.1)}g.stroke();
  for(const sd of[-1,1]){g.beginPath();g.moveTo(-w*.38,sd*h*.28);g.lineTo(w*.38,sd*h*.28);g.lineWidth=Math.max(.8,h*.035);g.stroke();
    for(let i=0;i<4;i++){const xx=-w*.27+i*w*.18;ell(xx,sd*h*.28,h*.05,h*.05);g.fillStyle=tc(PIL[2]);g.fill()}}
  for(const c of[[-w*.5,-h*.4],[w*.5,-h*.4],[w*.5,h*.42],[-w*.5,h*.42]]){ell(c[0]*1.04,c[1]*1.05,h*.07,h*.07);fo(tc(PIL[1]),.6)}
  g.restore()}
// hero's izba: long log wall on the far side of the road, corner at WC
function heroWall(){
  const top=392;
  g.beginPath();g.rect(-900,top,900+WC,WY-top);
  const wg=g.createLinearGradient(-200,0,WC,0);wg.addColorStop(0,tc('#3A2836'));wg.addColorStop(.75,tc('#664650'));wg.addColorStop(1,tc('#7E5A58'));g.fillStyle=wg;g.fill();
  for(let y=top;y<WY;y+=26){
    g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=3;g.beginPath();g.moveTo(-900,y);g.lineTo(WC,y);g.stroke();
    g.strokeStyle=rgba(tc('#B08A7A'),.3);g.lineWidth=2;g.beginPath();g.moveTo(-900,y+6);g.lineTo(WC-16,y+6);g.stroke();
    ell(WC+3,y+13,15,13);fo(tc('#8A6A64'),.8);g.strokeStyle=rgba(tc('#5A3E48'),.8);g.lineWidth=1.2;ell(WC+3,y+13,8,7);g.stroke();ell(WC+3,y+13,2.5,2.5);g.stroke()}
  brush(-300,top,WC+300,WY-top,'#8A6A64',17,26,.22);
  // okno with carved frame, glass reflects the sky
  const wx=200,wy=494,ww=74,wh=86;
  g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);const gg=g.createLinearGradient(0,wy-wh/2,0,wy+wh/2);gg.addColorStop(0,tc('#4B3463'));gg.addColorStop(1,tc('#F09A6C'));g.fillStyle=gg;g.fill();ol();
  g.strokeStyle=rgba('#FFE6C4',.35);g.lineWidth=5;g.beginPath();g.moveTo(wx-24,wy+30);g.lineTo(wx+6,wy-36);g.stroke();
  g.strokeStyle=tc('#B9A6A2');g.lineWidth=5;g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.stroke();
  g.beginPath();g.moveTo(wx-ww*.78,wy-wh*.56);g.lineTo(wx,wy-wh*.92);g.lineTo(wx+ww*.78,wy-wh*.56);g.lineTo(wx+ww*.7,wy-wh*.47);g.lineTo(wx-ww*.7,wy-wh*.47);g.closePath();fo(tc('#B9A6A2'),.8);
  for(let i=-2;i<=2;i++){ell(wx+i*ww*.26,wy-wh*.5+2,4,4);g.fillStyle=tc('#8C7890');g.fill()}
  g.beginPath();g.rect(wx-ww*.7,wy+wh*.5,ww*1.4,7);fo(tc('#B9A6A2'),.8);
  for(const sd of[-1,1]){g.beginPath();g.rect(wx+sd*ww*.62-5,wy-wh*.47,10,wh*.97);fo(tc('#B9A6A2'),.7)}
  // roof slope above the eave + carved eave board
  g.beginPath();g.moveTo(-900,top+4);g.lineTo(WC+38,top+4);g.lineTo(WC-70,top-190);g.lineTo(-900,top-190);g.closePath();fo(tc('#3E3048'));
  g.strokeStyle=rgba(tc('#5E4A62'),.9);g.lineWidth=2;for(let i=1;i<7;i++){const y=top+4-i*27;g.beginPath();g.moveTo(-900,y);g.lineTo(lerp(WC+38,WC-70,i/7),y);g.stroke()}
  g.beginPath();g.moveTo(-900,top-2);g.lineTo(WC+40,top-2);g.lineTo(WC+40,top+12);for(let x=WC+40;x>-900;x-=22)g.quadraticCurveTo(x-11,top+22,x-22,top+12);g.closePath();fo(tc('#B9A6A2'),.8);
  // bundle of dry herbs swaying under the eave
  g.save();g.translate(60,top+14);g.rotate(Math.sin(t*1.1)*.07);g.strokeStyle=tc('#5A4450');g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,30);g.stroke();
  for(let k=0;k<6;k++){ell((k-2.5)*4,40+k%3*8,4,15,(k-2.5)*.15);g.fillStyle=tc(k%2?'#6E6A86':'#4F5470');g.fill()}g.restore();
  // grass and a few flowers at the foot of the wall
  grassRow(WY+2,31,24,-200,WC+30,16,tc('#4F5470'));
  for(let i=0;i<5;i++){const fx=-80+i*80+hash(i+3)*30,fy=WY-6-hash(i)*8+Math.sin(t*1.7+i)*1.5;ell(fx,fy,3,3);g.fillStyle=tc(i%2?'#E7C6AD':'#C9926F');g.fill()}
}
// unfinished bench: planks laid on two stumps
function benchRaw(){
  for(const x of[BX0+44,BX1-30]){g.beginPath();g.rect(x-16,SEAT+6,32,WY+6-SEAT-6);fo(tc('#5E4648'));ell(x,SEAT+6,16,5);fo(tc('#8A6A58'),.8);g.strokeStyle=rgba('#5A3E48',.8);g.lineWidth=1;ell(x,SEAT+6,8,2.5);g.stroke()}
  for(let k=0;k<3;k++){const y=SEAT-2+k*3,dx=(k-1)*4;g.beginPath();g.rect(BX0+16+dx,y-5,BX1-BX0-10,7);fo(tc(k%2?'#C8A07A':'#B8906A'),.8)}
  g.beginPath();g.rect(BX0+40,WY-6,90,6);fo(tc('#B8906A'),.7);
}
// finished bench #A07A60: wide, high back, carved armrests
function benchNew(){
  const w0=BX0,w1=BX1,s=SEAT,back=s-112;
  const wd=tc(WOOD[0]),wk=tc(WOOD[1]),wl=tc(WOOD[2]);
  for(const x of[w0+10,w1-10]){g.beginPath();g.rect(x-6,back-6,12,WY-back);fo(wk)}
  for(let k=0;k<3;k++){const y=back+8+k*26;g.beginPath();g.rect(w0+6,y,w1-w0-12,18);fo(k===1?wd:mixc(wd,wk,.25),.9);g.strokeStyle=rgba(wl,.5);g.lineWidth=2;g.beginPath();g.moveTo(w0+12,y+4);g.lineTo(w1-12,y+4);g.stroke()}
  // carved crest
  g.beginPath();g.moveTo(w0,back+6);g.lineTo(w0,back-4);for(let i=0;i<8;i++){const x=lerp(w0,w1,i/8),x2=lerp(w0,w1,(i+1)/8),hc=i===3||i===4?-24:-12;g.quadraticCurveTo((x+x2)/2,back+hc,x2,back-4)}g.lineTo(w1,back+6);g.closePath();fo(wd);
  for(let i=0;i<8;i++){const x=lerp(w0,w1,(i+.5)/8);ell(x,back-2,3,3);g.fillStyle=wk;g.fill()}
  // seat
  g.beginPath();g.rect(w0-8,s-10,w1-w0+16,10);fo(wl);g.beginPath();g.rect(w0-8,s,w1-w0+16,9);fo(wd);
  for(const x of[w0+16,w1-16,(w0+w1)/2]){g.beginPath();g.rect(x-6,s+9,12,GY-6-s-9);fo(wk)}
  // armrests with scroll ends
  for(const sd of[-1,1]){const x=sd<0?w0-2:w1+2,top=s-40;
    g.beginPath();g.moveTo(x-7,s);g.quadraticCurveTo(x-12,s-20,x-5,top+6);g.lineTo(x+5,top+6);g.quadraticCurveTo(x+12,s-20,x+7,s);g.closePath();fo(wd);
    g.beginPath();g.moveTo(x-sd*30,top+4);g.lineTo(x+sd*14,top+4);g.quadraticCurveTo(x+sd*26,top+4,x+sd*24,top-6);g.quadraticCurveTo(x+sd*20,top-14,x+sd*10,top-6);g.lineTo(x-sd*30,top-6);g.closePath();fo(wl);
    ell(x+sd*17,top-3,4.5,4.5);g.strokeStyle=wk;g.lineWidth=2;g.stroke();
    g.strokeStyle=wk;g.lineWidth=1.5;for(let k=0;k<3;k++){g.beginPath();g.arc(x,s-12-k*9,3,0,Math.PI*2);g.stroke()}}
  brush(w0,back,w1-w0,s-back,'#E7C6AD',23,10,.15);
}
function block(x){g.beginPath();g.rect(x-22,670,44,44);fo(tc('#5E4648'));ell(x,670,22,6);fo(tc('#9A7A64'),.8);g.strokeStyle=rgba('#5A3E48',.8);g.lineWidth=1;ell(x,670,12,3);g.stroke();ell(x,670,5,1.4);g.stroke()}
// granny walk: constant speed then a 0.5 s deceleration; stride chosen so both feet are planted at the stop
const GV=85,GT1=1.96,GST=73.7,GX0=530,GS=.55;
function grannyD(tt){if(tt<GT1)return GV*tt;const u=Math.min(tt-GT1,.5);return GV*GT1+GV*(u-u*u)}
function grannyO(){
  const d=grannyD(t),x=GX0-d;
  const place=sm(2.42,2.78,t),rel=t>2.8,back=sm(2.85,3.2,t);
  const o={x,y:GY,s:GS,yaw:-.95,walk:{d,st:GST},ls:1,rimC:PAL.rim,rimA:.5,medal:0};
  o.lean=-(.15*place*(1-back));
  const hugL=[-58,-128],hugR=[-50,-134],tgt=[-91,-121];
  if(!rel){o.hl=[lerp(hugL[0],tgt[0]+4,place),lerp(hugL[1],tgt[1]+4,place)];o.hr=[lerp(hugR[0],tgt[0],place),lerp(hugR[1],tgt[1]-6,place)];
    o.itemL=(gg,ex,ey)=>{pillow(ex-8,ey-10,88,52,lerp(-.35,0,place));ell(ex-30,ey-2,6,5);fo(tc(SKIN[0]),.8);ell(ex+12,ey-6,6,5);fo(tc(SKIN[0]),.8)}}
  else{const h1=[lerp(tgt[0],-24,back),lerp(tgt[1],-118,back)];o.hl=h1;o.hr=[h1[0]+8,h1[1]-4]}
  const lookDown=1-sm(2.9,3.05,t);
  o.em={browIn:.55,brow:.25+.2*Math.sin(t*1.3),look:[lerp(-.6,-.2,lookDown),lerp(-.1,.5,lookDown)],smile:-.18,open:.08+.06*Math.sin(t*2)};
  o.tilt=.06*Math.sin(t*2.6)+.1*place;o.turn=-.15*back;
  return o;
}
function heroBlock(look){
  return {x:62,y:GY,s:HS,yaw:.85,hipY:-87,lean:.14,fr:[52,0],fl:[38,0],hr:[48,-76],hl:[38,-80],medal:'hidden',ls:1,rimC:PAL.rim,rimA:.6,
    em:{look,brow:.35,browIn:.15,smile:.1},tilt:.06,turn:.05};
}
// seated hero on the finished bench
function heroBench(e){
  const o={x:HX,y:HY,s:HS,yaw:.55,hipY:-88,lean:-.06,fr:[44,0],fl:[28,0],hr:[-6,-100],hl:[56,-142],medal:'hidden',ls:1,rimC:PAL.rim,rimA:.85,
    em:{look:[.55,-.25],smile:.35,eyeOpen:.9},tilt:-.05};
  return Object.assign(o,e||{});
}
// ---------------- world for exterior shots
// low sun drawn on the hill plane so it reads above the horizon in sunset shots
function lowSun(){g.save();g.globalCompositeOperation='screen';glow(306,432,200,'#FFB36B',.5);glow(306,432,64,'#FFE0B8',.6);g.restore();ell(306,432,24,24);g.fillStyle='#FFE6C4';g.fill();
  g.fillStyle=rgba('#F09A6C',.5);for(let i=0;i<3;i++){ell(250+i*70+((t*5)%40),428+i*16,60-i*10,3);g.fill()}}
function world(tod,bF,bM,bFg,main,mid,bMain){
  villageWorld({tod,bF,bM,bFg,mid,bMain:bMain||0,fg:bMain?0:1,far:tod==='sunset'?lowSun:null,main:()=>{heroWall();if(main)main()}});
}
// close-up: wall and bench softly defocused behind the sharp hero, warm side light
function closeWorld(fall,heroO){
  world('sunset',10,8,0,()=>{benchNew();pillow(196,640,56,34,-.12)},null,5);
  const k=toScreen(380,560,1);g.save();g.globalCompositeOperation='screen';glow(k[0]+200,k[1],620,'#FFB36B',.32*(1-fall*.6));g.restore();
  heroO.hl=[30,-102];layer(1,()=>person(HERO,heroO));
}
// ---------------- shot 0: wide — granny crosses the street with the pillow
if(S.i===0){
  const u=S.u;setCam(lerp(280,296,u),lerp(592,586,u),1.15+u*.05,-.012+u*.012);
  world('day',1.5,.5,2.5,()=>{benchRaw();block(62);
    const go=grannyO();person(HERO,heroBlock([lerp(.9,.7,u),.05]));person(GRANNY,go)});
  leaves(6,4,0,150,540,600,'#C9926F');
}
// ---------------- shot 1: medium — she puts the pillow on the planks, puzzled
if(S.i===1){
  const lt=S.lt;setCam(lerp(328,318,S.u),lerp(626,620,S.u),2.9+S.u*.2,.01);
  CAM.sy=kick(t,2.8,2,.25);
  world('day',4,3,4,()=>{benchRaw();if(t>2.8)pillow(287.5,644,48.4,28.6,0);person(GRANNY,grannyO())});
  leaves(5,9,0,100,540,700,'#C9926F');motes(10,3,0,250,540,500,'#FFE6C4',.4,1.6);
}
// hero sitting-down timeline on the new bench (shot 2)
function heroSitO(){
  const sit=ease((t-3.55)/.55),ant=sm(3.3,3.55,t)*(1-sit);
  const st0=[-8,0],sl0=[10,0];
  const o=heroBench({hipY:lerp(-142.8,-88,sit),lean:lerp(0,-.06,sm(4.0,4.4,t))+.28*Math.sin(Math.PI*cl((t-3.5)/.75,0,1))+.04*ant,
    fr:[lerp(st0[0],44,sit),0],fl:[lerp(sl0[0],28,sit),0],yaw:lerp(.35,.55,sit)});
  const hs=sm(3.55,3.9,t)*(1-sm(4.1,4.5,t));
  o.hr=[lerp(lerp(8,28,sit),20,hs),lerp(lerp(-50,-96,sit),-90,hs)];o.hl=[lerp(lerp(30,56,sit),36,hs),lerp(lerp(-48,-142,sm(4.0,4.5,t)),-92,hs)];
  o.turn=-.5*ant;o.em={look:[lerp(-.4,.55,sm(3.9,4.3,t)),lerp(.3,-.25,sm(3.9,4.3,t))],smile:.35*sm(4.2,4.8,t),eyeOpen:lerp(1,.9,sit)};
  return o;
}
// ---------------- shot 2: wide sunset — finished bench, hero sits down, camera arcs
if(S.i===2){
  const u=ease(S.u);setCam(lerp(330,420,u),lerp(562,548,u),lerp(1.22,1.1,u),lerp(.03,-.025,u));
  world('sunset',0,0,2.5,()=>{benchNew();pillow(196,640,56,34,-.12);person(HERO,heroSitO())},
    ()=>{const wd=wD(t,3.15,22,.2);person(W12,{x:640-wd,y:628,s:.22,yaw:-.95,walk:{d:wd,st:24},ls:1})});
  leaves(7,4,0,150,540,600,'#C9926F');
  g.save();g.globalCompositeOperation='screen';const sp=toScreen(330,590,.06);beam(sp[0],sp[1],sp[0]-420,sp[1]+40,10,120,'#FFB36B',.16);g.restore();
}
// ---------------- shot 3: close-up — face in the sunset, quiet smile
if(S.i===3){
  const lt=S.lt;setCam(268+lt*1.2,580+lt*.6,8.2+lt*.22,-.01);
  closeWorld(0,heroBench({em:{look:[.55+.1*Math.sin(t*.7),-.28],smile:.38+.06*Math.sin(t*.9),eyeOpen:.88,blink:0},rimA:1,tilt:-.07+.02*Math.sin(t*.6)}));
  const sp=toScreen(306,432,.2);lampLight(sp[0],sp[1],260,'#FFB36B',.3);
  for(let i=0;i<3;i++){const k=.35+i*.3,fx=lerp(sp[0],540-sp[0],k),fy=lerp(sp[1],960-sp[1],k);g.save();g.globalCompositeOperation='screen';ell(fx,fy,10+i*8,10+i*8);g.fillStyle=rgba('#FFCF9A',.08);g.fill();g.restore()}
  motes(16,7,0,200,540,560,'#FFE6C4',.55,2.2);
}
// ---------------- shot 4: medium — he offers thanks, the carpenter just turns away
function carpO(){
  const turn=sm(9.4,9.75,t),d=wD(t,9.6,70,.35);
  const o={x:400+d,y:GY,s:HS,yaw:lerp(-.9,.95,turn),ls:1,rimC:PAL.rim,rimA:.7,t};
  if(d>0)o.walk={d,st:66};
  o.tilt=.12*Math.sin(Math.PI*cl((t-9.05)/.35,0,1));
  o.em={look:[lerp(-.3,.2,turn),0],eyeOpen:.85,smile:0,browIn:0};
  o.itemR=(gg,ex,ey,an)=>{g.save();g.translate(ex,ey);g.rotate(Math.sin(t*3)*.15);g.beginPath();g.moveTo(-6,0);g.quadraticCurveTo(-10,22,-4,40);g.lineTo(8,38);g.quadraticCurveTo(10,18,6,0);g.closePath();fo(tc('#CDB39C'));g.restore()};
  return o;
}
if(S.i===4){
  const lt=S.lt;setCam(lerp(300,318,S.u),lerp(604,596,S.u),1.55+S.u*.08,.012-S.u*.012);
  world('sunset',3,2,3,()=>{benchNew();pillow(196,640,56,34,-.12);
    const off=sm(8.95,9.3,t)*(1-sm(9.9,10.35,t));
    const o=heroBench({lean:lerp(-.06,.18,off),hr:[lerp(28,82,off),lerp(-96,-158,off)],
      em:{look:[lerp(.55,.7,sm(9,9.2,t)),lerp(-.25,-.05,sm(9,9.2,t))],brow:.45*off,smile:lerp(.35,.15,sm(9.7,10.3,t)),open:.28*off*(1-sm(9.45,9.6,t))},turn:.1*off,tilt:-.04});
    person(HERO,o);person(CARP,carpO())},
    ()=>{const wd=wD(t,8.8,24,.2);person(W12,{x:520+wd,y:628,s:.22,yaw:.95,walk:{d:wd,st:24},ls:1});
      const wd2=wD(t,8.8,20,.2);person(NB,{x:430+wd2,y:630,s:.23,yaw:.95,walk:{d:wd2,st:24},ls:1,hr:[-30,-235],itemR:(gg,ex,ey)=>{g.beginPath();g.rect(ex-90,ey-10,180,10);fo(tc('#C8A07A'),.8)}})});
  leaves(6,8,0,100,540,700,'#C9926F');
}
// ---------------- shot 5: wide — everyone goes home, doors close one after another
const DOORS=[[510,622,26,56,11.5],[572,622,22,50,11.85]];
function door(D){const dt=t-D[4],cl_=sm(0,.35,dt),x=D[0],gy=D[1],w=D[2],h=D[3];
  g.beginPath();g.rect(x,gy-h,w,h);g.fillStyle=mixc('#1F1626','#FFB36B',.55);g.fill();glow(x+w/2,gy-h/2,w*1.4,'#FFB36B',.3*(1-cl_));
  const lw=w*lerp(.15,1,cl_);g.beginPath();g.rect(x+w-lw,gy-h,lw,h);fo(tc('#4A3442'),.7);
  g.strokeStyle=rgba('#1F2236',.5);g.lineWidth=1;for(let k=1;k<3;k++){g.beginPath();g.moveTo(x+w-lw*k/3,gy-h+3);g.lineTo(x+w-lw*k/3,gy-3);g.stroke()}}
function goer(C,x0,x1,t0,tIn,s,y){const face=x1>x0?1:-1,v=Math.abs(x1-x0)/(tIn-t0),d=Math.min(Math.abs(x1-x0),v*Math.max(0,t-t0)),a=1-sm(tIn,tIn+.2,t);
  if(a<=0)return;g.save();g.globalAlpha*=a;person(C,{x:x0+face*d,y,s,yaw:face*.95,walk:{d,st:22},ls:1,t});g.restore()}
if(S.i===5){
  const u=S.u;setCam(lerp(668,690,u),lerp(474,466,u),1.85+u*.08,-.008);
  world('sunset',0,0,2,null,
    ()=>{izba(620,622,118,80,6,.6,1);
      for(const D of DOORS)door(D);
      goer(CARP,430,518,10.3,11.2,.2,626);goer(BOY,452,522,10.3,11.32,.2,626);goer(W11,676,580,10.3,11.62,.19,626);
      const wd=wD(t,10.3,30,.1);person(W12,{x:380-wd,y:630,s:.19,yaw:-.95,walk:{d:wd,st:22},ls:1});
      const wd2=wD(t,10.3,26,.1);person(NB,{x:590+wd2,y:634,s:.22,yaw:.95,walk:{d:wd2,st:22},ls:1});
      for(const D of DOORS){const q=sm(D[4]+.3,D[4]+.8,t);if(q>0)glow(D[0]-30,D[1]-50,40,'#FFB36B',.4*q)}});
  leaves(5,3,0,150,540,600,'#C9926F');
}
// ---------------- shot 6: close-up — alone, the smile fades
if(S.i===6){
  const lt=S.lt;setCam(262,580,8.4+lt*.4,.01);
  const fall=sm(12.45,13.0,t);
  closeWorld(fall,heroBench({em:{look:[lerp(.7,.25,fall),lerp(-.05,.35,fall)],smile:lerp(.3,-.15,fall),browIn:.6*fall,brow:-.1*fall,eyeOpen:lerp(.95,.85,fall),blink:t>12.95&&t<13.07?1:0},
      rimA:lerp(.8,.35,fall),tilt:lerp(-.04,.1,fall),turn:-.12*fall}));
  g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.35*sm(12.2,13.4,t));g.restore();
  motes(10,7,0,200,540,560,'#FFE6C4',.4,2.2);
}
// ---------------- finishing
g.save();g.globalCompositeOperation='multiply';wash(S.i<2?'#F09A6C':'#6C4377',S.i<2?.08:.1+.12*sm(10.4,13.4,t));g.restore();
vignette(.5);
grain(.05);
wash('#000000',cutDip(t,ST));
wash('#000000',sm(13.1,13.48,t));
}
```

## SCENE 9
```javascript
function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function eout(u){u=cl(u,0,1);return 1-Math.pow(1-u,3)}
function ein(u){u=cl(u,0,1);return u*u*u}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function blob(pts){const n=pts.length;g.beginPath();let m=[(pts[n-1][0]+pts[0][0])/2,(pts[n-1][1]+pts[0][1])/2];g.moveTo(m[0],m[1]);for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];g.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}g.closePath()}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function panel(x,y,w,h,a,frame,glowA){
  if(a<=0)return;
  g.save();g.globalAlpha*=a;
  if(glowA>0){g.shadowColor=rgba(frame||'#E1C8B8',.8*glowA);g.shadowBlur=24}
  g.beginPath();g.roundRect(x,y,w,h,14);g.fillStyle=rgba('#241F4A',.55);g.fill();g.shadowBlur=0;
  const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,rgba('#E1C8B8',.18));gr.addColorStop(.25,rgba('#E1C8B8',.04));gr.addColorStop(1,rgba('#6C4377',.12));g.fillStyle=gr;g.fill();
  g.strokeStyle=rgba(frame||'#E1C8B8',.9);g.lineWidth=2;g.stroke();
  g.beginPath();g.roundRect(x+5,y+5,w-10,h-10,10);g.strokeStyle=rgba(frame||'#E1C8B8',.25);g.lineWidth=1;g.stroke();
  g.restore();
}
function bar(x,y,w,h,v,col,a,blinkA){g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,h/2);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
  const vv=cl(v,0,1);if(vv>.001){g.beginPath();g.roundRect(x,y,Math.max(h,w*vv),h,h/2);const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,mixc(col,'#FFFFFF',.35));gr.addColorStop(1,col);g.fillStyle=gr;g.fill();g.shadowColor=col;g.shadowBlur=10*(blinkA||.4);g.fill()}
  g.restore()}
function ticks(x,y,w,h,n,a){g.save();g.strokeStyle=rgba('#1F2236',.45*a);g.lineWidth=1;for(let i=1;i<n;i++){const xx=x+w*i/n;g.beginPath();g.moveTo(xx,y+2);g.lineTo(xx,y+h-2);g.stroke()}g.restore()}
function icon(kind,x,y,s,a){g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha*=a;g.lineJoin='round';g.lineCap='round';const ow=2/s;
  const st=(c)=>{g.fillStyle=c;g.fill();g.strokeStyle='#1F2236';g.lineWidth=ow;g.stroke()};
  if(kind==='wood'){g.beginPath();g.roundRect(-12,-5,22,10,5);st('#A0704A');ell(10,0,4,5);st('#D8A878');g.beginPath();g.arc(10,0,2,0,7);g.strokeStyle='#8A5A3A';g.lineWidth=1;g.stroke()}
  if(kind==='iron'){g.beginPath();g.moveTo(-11,5);g.lineTo(-7,-5);g.lineTo(7,-5);g.lineTo(11,5);g.closePath();st('#8C8FA3');g.beginPath();g.moveTo(-6,-3);g.lineTo(5,-3);g.strokeStyle='#D8DAE6';g.lineWidth=1.5;g.stroke()}
  if(kind==='stone'){blob([[-10,4],[-8,-5],[0,-8],[9,-4],[11,4],[2,7]]);st('#7D7890');ell(-3,-3,3,2);g.fillStyle='#A8A2B8';g.fill()}
  if(kind==='grain'){for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*4,9);g.lineTo(i*5,-4);g.strokeStyle='#C89040';g.lineWidth=2;g.stroke();ell(i*5,-6,2.6,5,i*.3);st('#E0B060')}}
  if(kind==='food'){ell(0,1,11,8);st('#C88A50');g.strokeStyle='#8A5A3A';g.lineWidth=1.4;for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*5-2,-3);g.lineTo(i*5+2,1);g.stroke()}}
  if(kind==='happy'){ell(0,0,10,10);st('#FFCF9A');g.beginPath();g.arc(0,1,5,.3,Math.PI-.3);g.strokeStyle='#1F2236';g.lineWidth=1.6;g.stroke();ell(-3.5,-3,1.3,1.6);g.fillStyle='#1F2236';g.fill();ell(3.5,-3,1.3,1.6);g.fill()}
  if(kind==='well'){g.beginPath();g.rect(-9,-1,18,9);st('#8A6A58');g.beginPath();g.moveTo(-11,-6);g.lineTo(0,-13);g.lineTo(11,-6);g.closePath();st('#6B5A60');g.beginPath();g.moveTo(-8,-6);g.lineTo(-8,-1);g.moveTo(8,-6);g.lineTo(8,-1);g.stroke()}
  if(kind==='bench'){g.beginPath();g.rect(-11,-2,22,4);st('#A07A60');g.beginPath();g.moveTo(-8,2);g.lineTo(-8,8);g.moveTo(8,2);g.lineTo(8,8);g.strokeStyle='#1F2236';g.lineWidth=2;g.stroke();g.beginPath();g.rect(-11,-10,22,4);st('#A07A60')}
  if(kind==='roof'){g.beginPath();g.moveTo(-11,6);g.lineTo(-11,-2);g.lineTo(0,-10);g.lineTo(11,-2);g.lineTo(11,6);g.closePath();st('#7A5A68')}
  if(kind==='road'){g.beginPath();g.moveTo(-4,-9);g.lineTo(4,-9);g.lineTo(10,9);g.lineTo(-10,9);g.closePath();st('#6A5468')}
  if(kind==='axe'){g.beginPath();g.moveTo(-8,9);g.lineTo(6,-7);g.strokeStyle='#A0704A';g.lineWidth=3;g.stroke();g.beginPath();g.moveTo(2,-11);g.quadraticCurveTo(12,-10,11,0);g.lineTo(5,-5);g.closePath();st('#8C8FA3')}
  if(kind==='person'){ell(0,-5,4.5,4.5);st('#C98972');g.beginPath();g.moveTo(-7,9);g.quadraticCurveTo(-7,0,0,0);g.quadraticCurveTo(7,0,7,9);g.closePath();st('#B9A6A2')}
  if(kind==='warn'){g.beginPath();g.moveTo(0,-10);g.lineTo(10,8);g.lineTo(-10,8);g.closePath();st('#E0505A');g.fillStyle='#1F2236';g.fillRect(-1.2,-4,2.4,7);ell(0,5,1.4,1.4);g.fill()}
  g.restore()}
function scribble(x,y,w,seed,col,a){g.save();g.strokeStyle=rgba(col,a);g.lineWidth=1.8;g.lineCap='round';g.beginPath();g.moveTo(x,y);const n=Math.floor(w/7);for(let i=1;i<=n;i++){const xx=x+i*w/n,up=hash(seed+i)>.7?-7:-3;g.quadraticCurveTo(xx-w/n*.6,y+up,xx-w/n*.2,y+(hash(seed+i*2)>.5?2:0))}g.stroke();g.restore()}
function finger(x,y,s,ang,pressA){g.save();g.translate(x,y);g.rotate(ang);g.scale(s,s);const LW0=LW;LW=3/s;
  segs([[0,60,0,26,30,tc('#B9A6A2')]]);ell(0,10,15,18);fo(tc(SKIN[0]));g.beginPath();g.roundRect(-5,-22,10,30,5);fo(tc(SKIN[0]));ell(0,-18,3.5,2.5);g.fillStyle=rgba('#F2B895',.8);g.fill();
  if(pressA>0){g.strokeStyle=rgba('#FFCF9A',pressA);g.lineWidth=2/s;ell(0,-24,14*(1.6-pressA*.6),5*(1.6-pressA*.6));g.stroke()}
  LW=LW0;g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function toScreen(x,y,f){const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f,q=rot((x-cx)*z,(y-cy)*z,CAM.r*f);return [270+CAM.sx*f+q[0],480+CAM.sy*f+q[1]]}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function candle(x,y,s){const fl=1+.08*Math.sin(t*13)+.05*Math.sin(t*23+1)+.04*nz(t*6);g.save();g.translate(x,y);g.scale(s,s);
  ell(0,0,26,7);fo(tc('#8C8FA3'));g.beginPath();g.rect(-8,-48,16,48);const cg=g.createLinearGradient(-8,0,8,0);cg.addColorStop(0,'#C8B0A0');cg.addColorStop(1,'#F2DCC8');g.fillStyle=cg;g.fill();ol(.8);
  g.beginPath();g.moveTo(-6,-46);g.quadraticCurveTo(-9,-36,-6,-30);ol(.6);
  glow(0,-64,60*fl,'#FFB36B',.35);g.save();g.translate(0,-50);g.rotate(Math.sin(t*3)*.08);g.beginPath();g.moveTo(0,-30*fl);g.quadraticCurveTo(9,-8,0,0);g.quadraticCurveTo(-9,-8,0,-30*fl);g.fillStyle='#FFCF9A';g.fill();g.beginPath();g.moveTo(0,-18*fl);g.quadraticCurveTo(4,-5,0,0);g.quadraticCurveTo(-4,-5,0,-18*fl);g.fillStyle='#FFF4EA';g.fill();g.restore();
  g.restore();return fl}
function hutInterior(o){
  const night=op(o,'night',1),red=op(o,'red',0),cd=op(o,'candle',1);
  TINT='#241F4A';TA=.22*night;
  layer(.6,()=>{
    g.fillStyle=tc('#4A3442');g.fillRect(-700,-500,1900,1700);
    for(let y=-480;y<1100;y+=38){const lg=g.createLinearGradient(0,y,0,y+38);lg.addColorStop(0,tc('#6B4A4E'));lg.addColorStop(.5,tc('#5A3E48'));lg.addColorStop(1,tc('#3A2836'));g.fillStyle=lg;g.fillRect(-700,y+2,1900,34);g.fillStyle=rgba('#1F2236',.6);g.fillRect(-700,y,1900,3)}
    brush(-300,-200,1100,1000,'#8A6A64',31,70,.18);
    for(let i=0;i<10;i++){ell(-200+hash(i+3)*900,-100+hash(i*5)*900,6,4);g.fillStyle=rgba('#2A1E2E',.6);g.fill()}
    // okno with night sky
    g.save();g.beginPath();g.rect(70,250,140,170);const wg=g.createLinearGradient(0,250,0,420);wg.addColorStop(0,'#120F2A');wg.addColorStop(1,mixc('#4B3463','#6C4377',.4));g.fillStyle=wg;g.fill();g.clip();stars(14,9,70,250,140,120);ell(170,295,13,13);g.fillStyle='#E7DCE6';g.fill();ell(176,291,11,11);g.fillStyle='#1A1636';g.fill();g.fillStyle=rgba('#241F4A',.9);g.beginPath();g.moveTo(70,400);for(let x=70;x<=210;x+=10)g.lineTo(x,388-hash(x)*16);g.lineTo(210,420);g.lineTo(70,420);g.closePath();g.fill();g.restore();
    g.beginPath();g.rect(70,250,140,170);ol(1.2);g.strokeStyle=tc('#B9A6A2');g.lineWidth=7;g.beginPath();g.moveTo(140,250);g.lineTo(140,420);g.moveTo(70,330);g.lineTo(210,330);g.stroke();
    g.beginPath();g.moveTo(52,246);g.lineTo(140,212);g.lineTo(228,246);g.lineTo(220,256);g.lineTo(60,256);g.closePath();fo(tc('#B9A6A2'));g.beginPath();g.rect(56,420,168,12);fo(tc('#B9A6A2'));
    // embroidered towel (rushnyk) beside the okno
    const sw=Math.sin(t*.9)*2;g.beginPath();g.moveTo(232,236);g.lineTo(262,236);g.lineTo(264+sw,400);g.lineTo(234+sw,400);g.closePath();fo(tc('#E7C6AD'),.8);g.strokeStyle=tc('#A0505A');g.lineWidth=3;for(let k=0;k<3;k++){g.beginPath();g.moveTo(236+sw,372+k*9);for(let x=0;x<6;x++)g.lineTo(238+x*5+sw,(x%2?366:372)+k*9);g.stroke()}
    // shelf with clay pots
    g.beginPath();g.rect(290,236,170,10);fo(tc('#6B4A4E'));for(let i=0;i<4;i++){const px=310+i*40,ph=26+hash(i+4)*14;g.beginPath();g.moveTo(px-12,236);g.quadraticCurveTo(px-18,236-ph*.6,px-7,236-ph);g.lineTo(px+7,236-ph);g.quadraticCurveTo(px+18,236-ph*.6,px+12,236);g.closePath();fo(tc(i%2?'#8A5A50':'#7A6A70'),.8)}
    // drying herbs swaying
    for(let i=0;i<3;i++){g.save();g.translate(320+i*42,120);g.rotate(Math.sin(t*.8+i)*.06);g.strokeStyle=tc('#5A4450');g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,40);g.stroke();for(let k=0;k<6;k++){ell((k-2.5)*4,48+k%3*10,4,16,(k-2.5)*.15);g.fillStyle=tc(k%2?'#6E6A86':'#4F5470');g.fill()}g.restore()}
    // whitewashed stove at right with ember mouth
    g.beginPath();g.moveTo(430,980);g.lineTo(430,180);g.quadraticCurveTo(430,150,460,150);g.lineTo(760,150);g.lineTo(760,980);g.closePath();const sg=g.createLinearGradient(430,0,600,0);sg.addColorStop(0,tc('#9C8494'));sg.addColorStop(.3,tc('#B9A6A2'));sg.addColorStop(1,tc('#8C7890'));g.fillStyle=sg;g.fill();ol();
    brush(440,170,200,700,'#E7C6AD',41,30,.2);g.beginPath();g.moveTo(462,600);g.lineTo(462,520);g.quadraticCurveTo(500,480,538,520);g.lineTo(538,600);g.closePath();g.fillStyle='#1F1626';g.fill();ol();
    const em=.5+.3*Math.sin(t*2.1)+.2*nz(t*3);glow(500,590,70,'#FFB36B',.45*em);ell(500,592,30,7);g.fillStyle=rgba('#FFB36B',.7*em);g.fill();
  },op(o,'bBack',2));
  layer(.85,()=>{g.fillStyle=tc('#3A2836');g.fillRect(-500,860,1500,500);g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=2;for(let i=-12;i<14;i++){g.beginPath();g.moveTo(270+i*40,860);g.lineTo(270+i*90,1300);g.stroke()}},op(o,'bBack',2)*.5);
  layer(1,()=>{
    if(o.main)o.main();
    // table: worn top, long embroidered cloth hiding the legs
    g.beginPath();g.moveTo(-80,690);g.lineTo(620,690);g.lineTo(620,716);g.lineTo(-80,716);g.closePath();const tg=g.createLinearGradient(0,690,0,716);tg.addColorStop(0,tc('#8A6A64'));tg.addColorStop(1,tc('#6B4A4E'));g.fillStyle=tg;g.fill();ol();
    brush(-60,692,660,22,'#B08A7A',51,30,.3);
    g.beginPath();g.moveTo(-80,714);g.lineTo(620,714);g.lineTo(624,940);for(let x=620;x>=-80;x-=35)g.quadraticCurveTo(x-17,948+Math.sin(x+t)*2,x-35,940);g.closePath();const cg=g.createLinearGradient(0,714,0,940);cg.addColorStop(0,tc('#B9A6A2'));cg.addColorStop(1,tc('#79677F'));g.fillStyle=cg;g.fill();ol();
    g.strokeStyle=tc('#A0505A');g.lineWidth=4;g.beginPath();for(let x=-80;x<=620;x+=14)g.lineTo(x,(x/14)%2?898:910);g.stroke();g.strokeStyle=rgba(tc('#79677F'),.8);g.lineWidth=2;for(let x=-40;x<620;x+=70){g.beginPath();g.moveTo(x,720);g.quadraticCurveTo(x+8,820,x-4,936);g.stroke()}
    // clay mug at left
    g.beginPath();g.moveTo(70,700);g.lineTo(74,660);g.lineTo(112,660);g.lineTo(116,700);g.closePath();fo(tc('#8A5A50'));g.beginPath();g.arc(118,680,10,-1.2,1.2);ol(1.2);
    if(cd>0)candle(455,702,1);
    if(o.front)o.front();
  });
  layer(1.45,()=>{g.fillStyle='#1A1424';g.beginPath();g.moveTo(-300,-80);g.lineTo(900,-80);g.lineTo(900,60);g.quadraticCurveTo(300,90,-300,40);g.closePath();g.fill();g.save();g.translate(80,40);g.rotate(Math.sin(t*.7)*.05);g.strokeStyle='#2A2036';g.lineWidth=3;g.beginPath();g.moveTo(0,0);g.lineTo(0,70);g.stroke();for(let k=0;k<5;k++){ell((k-2)*6,90+k%2*12,6,24);g.fillStyle='#2A2036';g.fill()}g.restore()},4);
  // light: night blue multiply, candle warm screen, optional red menu light
  g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.35*night);g.restore();
  if(cd>0){const c=toScreen(455,640,1),f=1+.06*Math.sin(t*13)+.05*nz(t*6);lampLight(c[0],c[1],430*CAM.z*.6+180,'#FFB36B',.38*cd*f)}
  const wn=toScreen(140,330,.6);beamStatic(wn,night);
  if(red>0){g.save();g.globalCompositeOperation='multiply';wash('#E0505A',.22*red);g.restore();lampLight(380,420,520,'#E0505A',.28*red)}
  motes(18,13,0,200,540,600,'#FFE6C4',.35*cd,1.5);
}
function beamStatic(wn,night){beam(wn[0],wn[1],wn[0]+260,wn[1]+520,60,160,'#6C4377',.16*night)}
const RES=[['wood','#A0704A',200],['iron','#8C8FA3',50],['stone','#7D7890',100],['grain','#E0B060',500],['food','#C88A50',500]];
function resPanel(x,y,w,o){
  const a=op(o,'a',1),v=o.v||{},ra=o.rows||[1,1,1,1,1,1],red=op(o,'red',-1),rA=op(o,'redA',0),rh=50,h=74+6*rh;
  if(a<=0)return h;
  panel(x,y,w,h,a,'#E1C8B8',.7);
  g.save();g.globalAlpha*=a;
  medallion(x+34,y+36,15,0,0,.25);
  g.fillStyle=rgba('#E1C8B8',.85);g.beginPath();g.roundRect(x+62,y+26,w*.42,7,3.5);g.fill();
  g.fillStyle=rgba('#E1C8B8',.4);g.beginPath();g.roundRect(x+62,y+40,w*.26,5,2.5);g.fill();
  g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(x+16,y+64);g.lineTo(x+w-16,y+64);g.stroke();
  for(let i=0;i<6;i++){const q=cl(ra[i]||0,0,1);if(q<=0)continue;const yy=y+74+i*rh,dx=(1-eout(q))*24;g.save();g.globalAlpha*=q;
    if(i<5){const R_=RES[i],val=op(v,R_[0],0),isR=red===i;
      if(isR&&rA>0){g.save();g.shadowColor='#E0505A';g.shadowBlur=16*rA;g.beginPath();g.roundRect(x+10+dx,yy+2,w-20,rh-8,10);g.fillStyle=rgba('#E0505A',.12*rA);g.fill();g.strokeStyle=rgba('#E0505A',rA);g.lineWidth=2;g.stroke();g.restore()}
      icon(R_[0],x+34+dx,yy+20,1.25,1);
      const bw=w-110;bar(x+60+dx,yy+12,bw,16,val/R_[2],isR?mixc(R_[1],'#E0505A',.4+.6*rA):R_[1],1,isR?rA:.4);ticks(x+60+dx,yy+12,bw,16,10,1);
      ell(x+w-30+dx,yy+20,6,6);g.fillStyle=isR?rgba('#E0505A',.4+.6*rA):rgba(R_[1],.9);g.fill();
    }else{icon('happy',x+34+dx,yy+20,1.25,1);const hv=op(v,'happy',0)/100,sw=(w-110)/10;
      for(let k=0;k<10;k++){const f=cl(hv*10-k,0,1);g.beginPath();g.roundRect(x+60+dx+k*sw,yy+10,sw-4,20,4);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.4);g.lineWidth=1;g.stroke();if(f>0){g.beginPath();g.roundRect(x+60+dx+k*sw,yy+10,Math.max(2,(sw-4)*f),20,4);g.fillStyle='#FFCF9A';g.fill()}}}
    g.restore()}
  g.restore();return h;
}
// ---- scene
// SCENE 9 — «Красный индикатор дерева» (105.4 – 118.4)
// shots: back at the table, medallion out (medium) | panel, wood row blinks red (UI) | frown in red light (close) |
//        61 + staircase of falling stock (infographic) | dive: map, stumps around, forest far (schematic) |
//        finger: assign extraction -> wood (UI insert) | fifteen worker pips light up (medium)
const ST=[0,1.2,2.6,3.9,6.9,8.85,11.15];
const S=shot(t,ST);
const V={wood:61,iron:14,stone:40,grain:410,food:380,happy:47};
const HX=150,HY=1000,HSc=1.35;
const redA=.55+.45*Math.sin(t*7.5);
function uiAt(x,y,s,fn){g.save();g.translate(x,y);g.scale(s,s);fn();g.restore()}
// hero at the table; o extends the seated pose
function heroO(e){
  const o={x:HX,y:HY,s:HSc,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],medal:'hidden',ls:1,rimC:'#FFB36B',rimA:.5,hl:[40,-215],
    em:{look:[.5,-.2],browIn:.3}};
  return Object.assign(o,e||{});
}
// medallion held in the right palm with the index finger extended along ang
function medHand(glowA,pt){return (gg,ex,ey,an)=>{medallion(ex+2,ey+6,9,an,0,glowA);
  if(pt){g.save();g.translate(ex,ey);g.rotate(an);g.beginPath();g.roundRect(2,-4,22,8,4);fo(tc(SKIN[0]),.8);g.restore()}}}
// thin glowing link from medallion to the hologram
function link(x1,y1,x2,y2,a){g.save();g.globalCompositeOperation='screen';g.strokeStyle=rgba('#E1C8B8',.35*a);g.lineWidth=2;g.setLineDash([4,6]);g.lineDashOffset=-t*30;g.beginPath();g.moveTo(x1,y1);g.lineTo(x2,y2);g.stroke();g.setLineDash([]);g.restore()}
// ---------------- shot 0: medium — back to the table, medallion pulled out, panel blooms
if(S.i===0){
  const u=S.u;setCam(lerp(214,226,u),lerp(548,536,u),1.62+u*.08,.01);
  const reach=sm(.15,.45,t),pull=sm(.5,.85,t),open=eout((t-.75)/.4);
  hutInterior({night:1,candle:1,bBack:2,main:()=>{
    const o=heroO({hr:[lerp(lerp(20,-8,reach),45,pull),lerp(lerp(-215,-262,reach),-245,pull)],medal:pull>.05?0:'hidden',
      em:{look:[lerp(.1,.5,pull),lerp(.3,-.2,pull)],browIn:.35,brow:.1},tilt:lerp(.15,0,pull)});
    if(pull>.05)o.itemR=medHand(.3+.6*pull,0);
    person(HERO,o)}});
  if(open>0)layer(1,()=>{uiAt(250,330,.62,()=>resPanel(0,0,380,{a:open,v:V,red:0,redA}));link(HX+45*HSc,HY-245*HSc,250,420,open)});
}
// ---------------- shot 1: UI — resource panel, the wood row keeps blinking red (over the shoulder)
if(S.i===1){
  const u=S.u;setCam(lerp(270,262,u),lerp(450,410,u),lerp(1.15,1.45,ease(u)),-.015+u*.02);
  hutInterior({night:1,candle:1,bBack:6});
  wash('#1F2236',.35);
  layer(1,()=>{resPanel(75,250,390,{a:1,v:V,red:0,redA});
    g.save();g.globalCompositeOperation='screen';glow(260,345,260,'#E0505A',.18*redA);g.restore()});

  motes(14,5,0,150,540,600,'#FFE6C4',.35,1.6);
}
// ---------------- shot 2: close-up — he frowns, lit red from the panel
if(S.i===2){
  const lt=S.lt;setCam(HX+14,HY-330*HSc+6,5.2+lt*.25,-.01);
  const fr=sm(2.7,3.1,t);
  hutInterior({night:1,candle:1,bBack:8,main:()=>{
    person(HERO,heroO({hr:[45,-245],medal:0,itemR:medHand(.5,0),em:{look:[.6,.05],browIn:lerp(.3,.85,fr),brow:-.25*fr,smile:-.3*fr,eyeOpen:lerp(1,.8,fr),blink:t>2.62&&t<2.72?1:0},tilt:.04+.04*fr,turn:.1,rimC:'#E0505A',rimA:.6+.3*redA}))}});
  lampLight(470,520,420,'#E0505A',.22*redA);
  motes(10,8,0,150,540,600,'#FFE6C4',.35,2);
}
// ---------------- shot 3: infographic — 61 lands red, then the staircase of buildings eating the stock
const STEPS=[[140,null],[110,'well'],[106,'bench'],[90,'roof'],[77,'road'],[68,'izba'],[61,'fence']];
function smallIcon(k,x,y,s,a){
  if(k==='izba'||k==='fence'){g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha*=a;g.lineWidth=2/s;g.strokeStyle='#1F2236';
    if(k==='izba'){g.beginPath();g.rect(-9,-2,18,11);g.fillStyle='#6B4A4E';g.fill();g.stroke();g.beginPath();g.moveTo(-12,-1);g.lineTo(0,-11);g.lineTo(12,-1);g.closePath();g.fillStyle='#3E3048';g.fill();g.stroke();g.fillStyle='#FFB36B';g.fillRect(-3,1,6,5)}
    else{for(let i=-2;i<=2;i++){g.beginPath();g.rect(i*5-1.5,-9,3,17);g.fillStyle='#A0704A';g.fill();g.stroke()}g.beginPath();g.moveTo(-12,-3);g.lineTo(12,-3);g.moveTo(-12,4);g.lineTo(12,4);g.strokeStyle='#A0704A';g.lineWidth=2;g.stroke()}
    g.restore()}else icon(k,x,y,s,a)}
if(S.i===3){
  const lt=S.lt,dive=ein((t-6.55)/.35);
  setCam(lerp(270,474,dive),lerp(470,600,dive),(1.02+lt*.03)*(1+dive*3.5),.01-lt*.005);
  CAM.sy=kick(t,4.1,3,.3);
  hutInterior({night:1,candle:1,bBack:9});
  wash('#120F2A',.6);
  layer(1,()=>{
    // big wood row: fills and lands on 61 at the spoken number
    const up=ease((t-4.35)/.45),ry=lerp(380,190,up),rs=lerp(1.25,.9,up);
    uiAt(270,ry,rs,()=>{panel(-200,-40,400,80,1,'#E0505A',.4+.5*redA);icon('wood',-160,0,1.8,1);
      const fill=eout((t-3.92)/.18)*61/200;bar(-125,-14,300,28,fill,mixc('#A0704A','#E0505A',.5+.5*redA),1,redA);ticks(-125,-14,300,28,10,1);
      const fl=Math.max(0,1-Math.abs(t-4.1)/.25);if(fl>0){g.save();g.globalCompositeOperation='screen';glow(-125+300*61/200,0,90,'#E0505A',.8*fl);g.restore()}
      ell(178,0,8,8);g.fillStyle=rgba('#E0505A',.4+.6*redA);g.fill()});
    // staircase: one column per state, a building icon eats a chunk each step
    const x0=78,bw=48,gap=14,base=700,k=2.3;
    g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1.5;g.beginPath();g.moveTo(x0-20,base);g.lineTo(x0+7*(bw+gap),base);g.stroke();
    for(let i=0;i<7;i++){const t0=4.7+i*.3,q=eout((t-t0)/.25);if(q<=0)continue;
      const v=STEPS[i][0],x=x0+i*(bw+gap),h=v*k*q,last=i===6,col=last?mixc('#A0704A','#E0505A',.5+.5*redA):'#A0704A';
      g.save();g.globalAlpha*=q;
      g.beginPath();g.roundRect(x,base-h,bw,h,6);const cg=g.createLinearGradient(0,base-h,0,base);cg.addColorStop(0,mixc(col,'#FFFFFF',.3));cg.addColorStop(1,col);g.fillStyle=cg;g.fill();g.strokeStyle=rgba('#E1C8B8',.5);g.lineWidth=1.5;g.stroke();
      g.strokeStyle=rgba('#1F2236',.4);g.lineWidth=1;for(let y=base-20*k;y>base-h;y-=20*k){g.beginPath();g.moveTo(x+3,y);g.lineTo(x+bw-3,y);g.stroke()}
      if(i>0){const pv=STEPS[i-1][0],cut=(pv-v)*k,ft=cl((t-t0)/.6,0,1);
        g.strokeStyle=rgba('#E1C8B8',.35);g.setLineDash([3,4]);g.beginPath();g.moveTo(x-gap,base-pv*k);g.lineTo(x+bw,base-pv*k);g.stroke();g.setLineDash([]);
        // chunk of stock falling off the column
        g.save();g.translate(x+bw/2+ft*14,base-v*k-cut/2+ft*ft*120);g.rotate(ft*1.4);g.globalAlpha*=1-ft;g.beginPath();g.rect(-bw/2,-cut/2,bw,cut);g.fillStyle='#E0505A';g.fill();g.restore();
        const iy=base-pv*k-34-Math.max(0,1-q)*40;smallIcon(STEPS[i][1],x+bw/2,iy,2.1,1)}
      if(last){g.save();g.shadowColor='#E0505A';g.shadowBlur=20*redA;g.strokeStyle=rgba('#E0505A',.6+.4*redA);g.lineWidth=3;g.beginPath();g.roundRect(x-4,base-h-4,bw+8,h+8,8);g.stroke();g.restore()}
      g.restore()}
    // trend line through column tops
    const n=Math.min(7,Math.floor((t-4.7)/.3)+1);if(n>1){g.strokeStyle=rgba('#E0505A',.7);g.lineWidth=2.5;g.beginPath();for(let i=0;i<n;i++){const x=x0+i*(bw+gap)+bw/2,y=base-STEPS[i][0]*k-6;if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.stroke()}
  });
  motes(12,4,0,150,540,600,'#FFE6C4',.3,1.6);
  wash('#E1C8B8',.9*sm(6.75,6.9,t));
}
// ---------------- shot 4: schematic — oblique plan of the village: stumps all around, forest only at the horizon
const MCX=270,MCY=640,MK=.56;
function mp(x,y){const d=cl((y-MCY)/800,-1,1),sc=1+.28*d;return [MCX+(x-MCX)*sc,MCY+(y-MCY)*MK*(1+.12*d),sc]}
function mapTree(x,y,s,seed){const h=26*s,r=13*s*(.85+hash(seed)*.4);ell(x,y,r*.9,r*.3);g.fillStyle=rgba('#0A0820',.45);g.fill();
  g.strokeStyle='#3A3048';g.lineWidth=2.5*s;g.beginPath();g.moveTo(x,y);g.lineTo(x,y-h*.5);g.stroke();
  blob([[x-r,y-h*.55],[x-r*.7,y-h*1.05],[x,y-h*1.3],[x+r*.75,y-h*1.05],[x+r,y-h*.55],[x,y-h*.35]]);g.fillStyle=hash(seed*2)>.5?'#4F5470':'#5E6280';g.fill();g.strokeStyle=rgba('#E1C8B8',.55);g.lineWidth=1.1;g.stroke();
  ell(x-r*.3,y-h*.95,r*.35,r*.22);g.fillStyle=rgba('#C9926F',.5);g.fill()}
function mapStump(x,y,s){const r=6.5*s;g.beginPath();g.rect(x-r,y-r*.9,r*2,r*.9);g.fillStyle='#7A5848';g.fill();ell(x,y,r,r*.38);g.fillStyle='#7A5848';g.fill();ell(x,y-r*.9,r,r*.38);g.fillStyle='#C8A07A';g.fill();g.strokeStyle=rgba('#E1C8B8',.7);g.lineWidth=1;g.stroke();ell(x,y-r*.9,r*.45,r*.17);g.strokeStyle=rgba('#7A5848',.9);g.stroke()}
function mapHouse(x,y,s,i){const w=15*s,h=10*s;g.beginPath();g.rect(x-w/2,y-h,w,h);g.fillStyle='#6B4A4E';g.fill();g.strokeStyle=rgba('#E1C8B8',.8);g.lineWidth=1;g.stroke();
  g.beginPath();g.moveTo(x-w*.62,y-h);g.lineTo(x,y-h-w*.55);g.lineTo(x+w*.62,y-h);g.closePath();g.fillStyle='#3E3048';g.fill();g.stroke();
  const lit=.5+.5*Math.sin(t*2.5+i*1.7);g.fillStyle=rgba('#FFB36B',.55+.4*lit);g.fillRect(x-2*s,y-h*.7,4*s,4*s)}
if(S.i===4){
  const lt=S.lt,u=ease(lt/1.95);
  setCam(lerp(270,282,u)+Math.sin(lt*.8)*4,lerp(610,500,u),lerp(2.5,.92,u)*(1+.4*(1-eout(lt/.3))),lerp(-.1,.03,u));
  layer(0,()=>{const sg=g.createLinearGradient(0,0,0,960);sg.addColorStop(0,'#120F2A');sg.addColorStop(1,'#241F4A');g.fillStyle=sg;g.fillRect(0,0,540,960)});
  layer(1,()=>{
    // map plate with a hazy horizon at the top
    const pg=g.createLinearGradient(0,MCY-460,0,MCY+600);pg.addColorStop(0,'#141030');pg.addColorStop(.18,'#2A2448');pg.addColorStop(.55,'#3A3058');pg.addColorStop(1,'#2A2448');g.fillStyle=pg;g.fillRect(-900,MCY-470,2340,1700);
    g.strokeStyle=rgba('#E1C8B8',.08);g.lineWidth=1;
    for(let k=-12;k<=12;k++){const a=mp(MCX+k*70,MCY-800),b=mp(MCX+k*70,MCY+800);g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()}
    for(let k=-11;k<=11;k++){const a=mp(MCX-900,MCY+k*70),b=mp(MCX+900,MCY+k*70);g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()}
    // dashed rings: where the forest edge stood in grandfathers' time, receding outward
    for(let k=0;k<4;k++){const rr=160+k*85,q=sm(7.0+k*.22,7.3+k*.22,t);if(q<=0)continue;g.strokeStyle=rgba('#E1C8B8',.25*q);g.setLineDash([6,8]);g.lineWidth=1.5;g.beginPath();
      for(let j=0;j<=48;j++){const a=j/48*Math.PI*2,P=mp(MCX+Math.cos(a)*rr,MCY+Math.sin(a)*rr);if(j)g.lineTo(P[0],P[1]);else g.moveTo(P[0],P[1])}g.stroke();g.setLineDash([])}
    // collect trees / stumps / houses and paint far-to-near
    const items=[];
    for(let i=0;i<300;i++){const a=hash(i*3.3)*Math.PI*2,r=125+Math.pow(hash(i*7.1),.9)*560,x=MCX+Math.cos(a)*r,y=MCY+Math.sin(a)*r;
      if(r>480&&Math.sin(a)>.05)continue;items.push([x,y,r>480?2:1,i,r])}
    for(let i=0;i<150;i++){const a=-Math.PI*(.04+.92*hash(i*5.3)),r=500+hash(i*2.9)*300;items.push([MCX+Math.cos(a)*r,MCY+Math.sin(a)*r,2,i+400,r])}
    for(let k=-3;k<=3;k++){if(!k)continue;for(const sd of[-1,1]){items.push([MCX+k*28,MCY+sd*24,3,k*2+sd]);items.push([MCX+sd*24,MCY+k*28,3,k*3+sd+20])}}
    items.sort((A,B)=>A[1]-B[1]);
    for(const it of items){const P=mp(it[0],it[1]);
      if(it[2]===3){mapHouse(P[0],P[1],P[2],it[3]);continue}
      if(it[2]===2){mapTree(P[0],P[1],P[2]*1.1,it[3]);continue}
      const tc_=6.95+(it[4]-125)/355*1.05;
      if(t<tc_)mapTree(P[0],P[1],P[2],it[3]);else{mapStump(P[0],P[1],P[2]);const pf=cl((t-tc_)/.35,0,1);if(pf<1){ell(P[0],P[1]-8-pf*12,8*(.5+pf),6*(.5+pf));g.fillStyle=rgba('#E1C8B8',.35*(1-pf));g.fill()}}}
    // roads and the well
    for(const R of[[[MCX-110,MCY],[MCX+110,MCY]],[[MCX,MCY-110],[MCX,MCY+110]]]){const a=mp(R[0][0],R[0][1]),b=mp(R[1][0],R[1][1]);g.strokeStyle=rgba('#E1C8B8',.5);g.lineWidth=6;g.lineCap='round';g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke();g.strokeStyle='#5A4458';g.lineWidth=3.5;g.stroke()}
    const W0=mp(MCX,MCY);ell(W0[0],W0[1],7,4);g.fillStyle='#A07A60';g.fill();g.strokeStyle='#E1C8B8';g.lineWidth=1.2;g.stroke();
    // palisade ring of stakes
    g.fillStyle='#8A6A58';for(let j=0;j<60;j++){const a=j/60*Math.PI*2,P=mp(MCX+Math.cos(a)*102,MCY+Math.sin(a)*102);g.fillRect(P[0]-1.2,P[1]-7*P[2],2.4,7*P[2])}
    // the long way from the gate to the far forest
    const pq=sm(7.85,8.6,t);if(pq>0){g.strokeStyle=rgba('#FFCF9A',.9);g.lineWidth=2.5;g.setLineDash([8,7]);g.lineDashOffset=-t*20;g.beginPath();
      for(let j=0;j<=20;j++){const q=j/20*pq,P=mp(MCX+lerp(100,380,q)+Math.sin(q*5)*20,MCY-lerp(10,520,q));if(j)g.lineTo(P[0],P[1]);else g.moveTo(P[0],P[1])}g.stroke();g.setLineDash([]);
      const E=mp(MCX+lerp(100,380,pq)+Math.sin(pq*5)*20,MCY-lerp(10,520,pq));icon('axe',E[0],E[1]-14,1.6,pq)}
    // drifting cloud shadows
    for(let i=0;i<3;i++){const x=((t*40+i*330)%1300)-450,y=MCY-260+i*230;ell(x,y,170,60);g.fillStyle=rgba('#0A0820',.2);g.fill()}
  });
  const sl=(t*260)%1100-70;g.save();g.globalCompositeOperation='screen';g.fillStyle=rgba('#E1C8B8',.05);g.fillRect(0,sl,540,40);g.restore();
  panel(14,20,512,920,.5,'#E1C8B8',.3);
  wash('#E1C8B8',.9*(1-sm(6.9,7.12,t)));
}
// ---------------- shot 5: UI insert — finger picks "assign extraction", then wood
const MI=['axe','roof','happy','person'];
function fingerAt(tx,ty,s,ang,pr){const sx=-Math.sin(ang),cy=Math.cos(ang),x=tx+22*s*sx,y=ty+22*s*cy;
  g.save();g.translate(x,y);g.rotate(ang);segs([[0,60*s,0,520,32*s,tc('#B9A6A2')]]);g.restore();finger(x,y,s,ang,pr)}
if(S.i===5){
  const lt=S.lt,u=S.u;setCam(lerp(276,290,u),lerp(470,480,u),1.12+u*.08,.01-u*.015);
  hutInterior({night:1,candle:1,bBack:8});
  wash('#120F2A',.45);
  const sub=eout((t-9.6)/.35);
  let tip;
  layer(1,()=>{
    const px=70,py=240,pw=400;
    panel(px,py,pw,300,1,'#E1C8B8',.7);medallion(px+34,py+36,15,0,0,.3);g.fillStyle=rgba('#E1C8B8',.85);g.beginPath();g.roundRect(px+62,py+26,pw*.42,7,3.5);g.fill();
    const p1=sm(9.4,9.6,t);
    for(let i=0;i<4;i++){const yy=py+74+i*54,hi=i===0?p1:0;
      if(hi>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=18*hi;g.beginPath();g.roundRect(px+12,yy,pw-24,46,10);g.fillStyle=rgba('#FFCF9A',.16*hi);g.fill();g.strokeStyle=rgba('#FFCF9A',.9*hi);g.lineWidth=2;g.stroke();g.restore()}
      icon(MI[i],px+40,yy+23,1.4,1);scribble(px+68,yy+28,pw*.42,i*9+5,'#E1C8B8',.65);
      ell(px+pw-32,yy+23,7,7);g.strokeStyle=rgba('#E1C8B8',.6);g.lineWidth=1.5;g.stroke()}
    // resource chooser slides out below the panel
    if(sub>0){const sy=py+316,p2=sm(10.6,10.78,t);panel(px+40,sy,pw-80,92,sub,'#FFCF9A',.5*sub);
      ['wood','stone','iron'].forEach((k,j)=>{const ix=px+100+j*100,iy=sy+46,on=j===0?p2:0;g.save();g.globalAlpha*=sub;
        ell(ix,iy,30,30);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba(on>0?'#FFCF9A':'#E1C8B8',.5+.5*on);g.lineWidth=2+2*on;g.stroke();
        if(on>0){g.save();g.globalCompositeOperation='screen';glow(ix,iy,70,'#FFCF9A',.6*on);g.restore()}
        icon(k,ix,iy,2,1);g.restore()})}
    // finger path: approach -> press axe row -> move to wood -> press
    const A=[px+60,py+100],B=[px+100,py+316+52],R=[470,940];
    const m1=ease((t-8.9)/.5),m2=ease((t-9.85)/.65);
    tip=[lerp(lerp(R[0],A[0],m1),B[0],m2),lerp(lerp(R[1],A[1],m1),B[1],m2)];
    const press=Math.max(sm(9.38,9.48,t)*(1-sm(9.6,9.75,t)),sm(10.58,10.66,t)*(1-sm(10.85,11,t)));
    tip[1]+=press*4;
    const ant=sm(9.25,9.38,t)*(1-sm(9.38,9.45,t))+sm(10.45,10.58,t)*(1-sm(10.58,10.64,t));tip[1]-=ant*8;
    fingerAt(tip[0],tip[1],1.7,-.32,press);
    const rp=[[9.46,A],[10.66,B]];for(const r of rp){const q=cl((t-r[0])/.4,0,1);if(q>0&&q<1){g.strokeStyle=rgba('#FFCF9A',1-q);g.lineWidth=2;ell(r[1][0],r[1][1],10+q*40,10+q*40);g.stroke()}}
  });
  CAM.sx=0;
  motes(10,6,0,150,540,600,'#FFE6C4',.3,1.6);
}
// ---------------- shot 6: medium — fifteen worker pips light up one by one (the 15th on the word, ~12.2)
if(S.i===6){
  const lt=S.lt,u=S.u;setCam(lerp(304,312,u),lerp(530,518,u),1.3+u*.07,-.01+u*.012);
  CAM.sy=kick(t,12.2,2.5,.3);
  const n=cl(Math.floor((t-11.36)/.0571)+1,0,15);
  const px=212,py=372,pw=276,hold=sm(11.25,11.35,t)*(1-sm(12.35,12.5,t));
  const tipX=px+34,tipY=py+176+3*hold;
  hutInterior({night:1,candle:1,bBack:2,main:()=>{
    const loc=[(tipX-24-HX)/HSc,(tipY+14-HY)/HSc];
    person(HERO,heroO({hr:[lerp(45,loc[0],sm(11.15,11.4,t)),lerp(-245,loc[1],sm(11.15,11.4,t))],medal:0,itemR:medHand(.7,1),
      em:{look:[.7,.1],browIn:lerp(.5,.2,sm(12.2,12.7,t)),smile:.15*sm(12.3,12.8,t),eyeOpen:1},tilt:.05,turn:.05,lean:.14*sm(11.15,11.4,t)}))}});
  layer(1,()=>{panel(px,py,pw,250,1,'#FFCF9A',.6);
    icon('axe',px+34,py+36,1.6,1);icon('wood',px+76,py+36,1.6,1);g.fillStyle=rgba('#E1C8B8',.7);g.beginPath();g.roundRect(px+104,py+32,pw*.4,7,3.5);g.fill();
    g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(px+14,py+70);g.lineTo(px+pw-14,py+70);g.stroke();
    for(let i=0;i<15;i++){const x=px+92+(i%5)*40,y=py+110+Math.floor(i/5)*44,on=i<n,jt=t-(11.36+i*.0571);
      if(on){const pop=1+.35*Math.max(0,1-jt/.2);g.save();g.globalCompositeOperation='screen';glow(x,y,26,'#FFCF9A',.5);g.restore();icon('person',x,y,1.5*pop,1);
        g.save();g.globalCompositeOperation='multiply';ell(x,y-2,13*pop,15*pop);g.fillStyle='#FFCF9A';g.fill();g.restore()}
      else{ell(x,y,12,14);g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1.5;g.setLineDash([3,3]);g.stroke();g.setLineDash([])}}
    // count bar under the pips fills in step
    bar(px+70,py+222,pw-94,10,n/15,'#FFCF9A',1,.6);
    ell(px+34,py+160,19,19);g.fillStyle=rgba("#1F2236",.6);g.fill();g.strokeStyle=rgba("#FFCF9A",.5+.5*hold);g.lineWidth=2+hold;g.stroke();if(hold>0){g.save();g.globalCompositeOperation="screen";glow(px+34,py+160,50,"#FFCF9A",.5*hold);g.restore()}icon("person",px+34,py+163,1.1,1);g.beginPath();g.moveTo(px+28,py+150);g.lineTo(px+34,py+144);g.lineTo(px+40,py+150);g.strokeStyle="#FFCF9A";g.lineWidth=2;g.stroke();
    ptr(tipX,tipY,hold*(.6+.4*Math.sin(t*20)));
    const fl=Math.max(0,1-Math.abs(t-12.2)/.3);if(fl>0){g.save();g.globalCompositeOperation='screen';glow(px+pw/2,py+160,180,'#FFCF9A',.35*fl);g.restore()}
  });
}
// ---------------- finishing
vignette(.55);
grain(.05);
wash('#000000',cutDip(t,[0,1.2,2.6,3.9,8.85,11.15]));
wash('#000000',1-sm(0,.4,t));
function ptr(tx,ty,pr){const hx=tx-24,hy=ty+14;segs([[hx,hy,tx,ty,7,tc(SKIN[0])]]);ell(hx,hy,10,9);fo(tc(SKIN[0]));ell(hx-5,hy+3,6,4);g.fillStyle=rgba(SKIN[1],.5);g.fill();if(pr>0){g.strokeStyle=rgba("#FFCF9A",pr);g.lineWidth=2;ell(tx,ty-2,12*(1.6-pr*.6),5*(1.6-pr*.6));g.stroke()}}
}
```

## SCENE 10
```javascript
function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function eout(u){u=cl(u,0,1);return 1-Math.pow(1-u,3)}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function blob(pts){const n=pts.length;g.beginPath();let m=[(pts[n-1][0]+pts[0][0])/2,(pts[n-1][1]+pts[0][1])/2];g.moveTo(m[0],m[1]);for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];g.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}g.closePath()}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
function woman(seed,kc){return {seed,r:22,l1:62,l2:62,a1:46,a2:42,torso:82,neck:7,sw:62,hw:50,thigh:22,shin:17,uarm:15,farm:12,foot:22,skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'kerchief',kerchief:kc,top:['#C8B4AC','#8C7890','#E8D4C8'],skirt:['#6A4E6E','#46344E','#8A6E8E'],apron:'#B8A090',boots:'#3A2E3E',dress:1,blush:'#D98A80'}}
function worker(seed){const sh=[['#8C7F92','#5E5470','#B2A6B4'],['#79677F','#4E4060','#A08EA4'],['#9C8478','#6A5460','#C0A496']][seed%3];return {seed,r:23,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:66,hw:48,thigh:24,shin:19,uarm:15,farm:13,foot:26,skin:SKIN,hair:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],hairStyle:seed%2?'short':'bald',beard:seed%3===1?null:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],beardLen:1.2,top:sh,pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30}}
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function sky(c0,c1,c2,y1,y2){const gr=g.createLinearGradient(0,y1,0,y2);gr.addColorStop(0,c0);gr.addColorStop(.55,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.fillRect(-2000,-2000,4540,4960)}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function sun(x,y,r){glow(x,y,r*6,PAL.key,.35);glow(x,y,r*2.2,'#FFE0B8',.5);ell(x,y,r,r);g.fillStyle='#FFE6C4';g.fill()}
function clouds(y,n,seed,col,a,sp){for(let i=0;i<n;i++){const w=90+hash(seed+i)*140,x=((hash(seed+i*3)*900+t*sp*(.6+hash(i)*.6))%900)-180,yy=y+hash(seed+i*7)*70;g.fillStyle=rgba(col,a);ell(x,yy,w*.5,12+hash(i+seed)*8);g.fill();ell(x+w*.2,yy-8,w*.3,10);g.fill()}}
function hills(y,amp,col,seed,x0,x1){g.beginPath();g.moveTo(x0,y+400);for(let x=x0;x<=x1;x+=20){g.lineTo(x,y-amp*(.5+.5*nz(x*.006+seed))-amp*.3*nz(x*.02+seed*3))}g.lineTo(x1,y+400);g.closePath();g.fillStyle=col;g.fill()}
function forestLine(y,col,seed,x0,x1,h){g.fillStyle=col;g.beginPath();g.moveTo(x0,y+60);for(let x=x0;x<=x1;x+=9){const hh=h*(.5+hash(seed+x*.13)*.7);g.lineTo(x,y);g.lineTo(x+4.5,y-hh);g.lineTo(x+9,y)}g.lineTo(x1,y+60);g.closePath();g.fill()}
function birch(x,gy,h,seed,col){
  const sw=Math.sin(t*.9+seed)*4,lean=(hash(seed)-.5)*.08;
  const tx=x+lean*h,tw=7+h*.02;
  g.beginPath();g.moveTo(x-tw,gy);g.quadraticCurveTo(x-tw*.8+lean*h*.5,gy-h*.5,tx-tw*.4+sw*.3,gy-h);g.lineTo(tx+tw*.4+sw*.3,gy-h);g.quadraticCurveTo(x+tw*.8+lean*h*.5,gy-h*.5,x+tw,gy);g.closePath();fo(tc('#D9CCD6'));
  g.fillStyle=tc('#302B49');for(let i=0;i<9;i++){const yy=gy-h*hash(seed+i*2.1)*.9,xx=lerp(x,tx,(gy-yy)/h);g.fillRect(xx-tw*.6+hash(i+seed)*3,yy,tw*(.5+hash(seed+i)*.6),2.2)}
  const fc=col||['#4F5470','#6E6A86','#C9926F'];
  // weeping crown: soft volume, then drooping branches covered with small leaf clusters
  for(let i=0;i<4;i++){ell(tx+sw*.7+(hash(seed+i*4.1)-.5)*h*.3,gy-h*(.7+hash(seed+i*1.9)*.25),h*.17,h*.13);g.fillStyle=rgba(tc(fc[0]),.45);g.fill()}
  for(let b=0;b<10;b++){
    const by=gy-h*(.48+hash(seed+b*1.3)*.5),k0=(gy-by)/h,bx=lerp(x,tx,k0)+sw*k0;
    const dir=(b%2?1:-1)*(.45+hash(seed+b)*.55),len=h*(.16+hash(seed+b*2.2)*.16),sy_=Math.sin(t*1.3+b+seed)*3;
    const cx_=bx+dir*len*.6,cy_=by-len*.22,ex=bx+dir*len+sy_,ey=by+len*.6;
    g.strokeStyle=tc('#3A3048');g.lineWidth=1.5;g.beginPath();g.moveTo(bx,by);g.quadraticCurveTo(cx_,cy_,ex,ey);g.stroke();
    for(let k=0;k<7;k++){const u=k/6,px=lerp(lerp(bx,cx_,u),lerp(cx_,ex,u),u),py=lerp(lerp(by,cy_,u),lerp(cy_,ey,u),u)+4,r=h*.042*(1.15-u*.45);
      ell(px,py,r*1.35,r);g.fillStyle=tc(k%3?fc[0]:fc[1]);g.fill();ell(px+r*.35,py-r*.35,r*.6,r*.38);g.fillStyle=rgba(tc(fc[2]),.5);g.fill()}
  }
}
function izba(x,gy,w,h,seed,lit,smokeOn){
  const wall=tc('#6B4A4E'),log=tc('#4A3442'),roof=tc('#3E3048'),rl=tc('#5E4A62');
  const rh=h*.75;
  // wall
  g.beginPath();g.rect(x-w/2,gy-h,w,h);fo(wall);
  g.strokeStyle=log;g.lineWidth=2;for(let y=gy-h+10;y<gy;y+=12){g.beginPath();g.moveTo(x-w/2,y);g.lineTo(x+w/2,y);g.stroke()}
  for(let y=gy-h+4;y<gy;y+=12){for(const sd of[-1,1]){ell(x+sd*(w/2+3),y,5,5.5);fo(tc('#8A6A64'),.6)}}
  brush(x-w/2,gy-h,w,h,rgba(tc('#8A6A64'),1),seed,10,.25);
  // roof
  g.beginPath();g.moveTo(x-w/2-16,gy-h+4);g.lineTo(x,gy-h-rh);g.lineTo(x+w/2+16,gy-h+4);g.closePath();fo(roof);
  g.strokeStyle=rl;g.lineWidth=2;for(let i=1;i<7;i++){const u=i/7;g.beginPath();g.moveTo(lerp(x,x-w/2-16,u),lerp(gy-h-rh,gy-h+4,u));g.lineTo(lerp(x,x+w/2+16,u),lerp(gy-h-rh,gy-h+4,u));g.stroke()}
  // gable with carved board
  g.beginPath();g.moveTo(x-w*.3,gy-h);g.lineTo(x,gy-h-rh*.75);g.lineTo(x+w*.3,gy-h);g.closePath();fo(tc('#5A3E48'),.8);
  g.beginPath();g.moveTo(x,gy-h-rh-2);g.lineTo(x,gy-h-rh+16);ol(1.2);
  // okno
  const wx=x,wy=gy-h*.55,ww=w*.22,wh=h*.32;
  g.beginPath();g.rect(wx-ww/2,wy-wh/2,ww,wh);g.fillStyle=lit>0?mixc('#2A2440','#FFB36B',lit):'#2A2440';g.fill();ol();
  if(lit>0)glow(wx,wy,ww*1.6,'#FFB36B',.35*lit);
  g.beginPath();g.moveTo(wx,wy-wh/2);g.lineTo(wx,wy+wh/2);g.moveTo(wx-ww/2,wy);g.lineTo(wx+ww/2,wy);g.strokeStyle=tc('#B9A6A2');g.lineWidth=2.5;g.stroke();
  g.beginPath();g.moveTo(wx-ww*.75,wy-wh*.6);g.lineTo(wx,wy-wh*.95);g.lineTo(wx+ww*.75,wy-wh*.6);g.lineTo(wx+ww*.7,wy-wh*.5);g.lineTo(wx-ww*.7,wy-wh*.5);g.closePath();fo(tc('#B9A6A2'),.8);
  g.beginPath();g.rect(wx-ww*.7,wy+wh*.5,ww*1.4,5);fo(tc('#B9A6A2'),.8);
  // chimney + smoke
  const chx=x+w*.22,chy=gy-h-rh*.42;g.beginPath();g.rect(chx-7,chy-24,14,28);fo(tc('#4A3A48'));
  if(smokeOn)smoke(chx,chy-26,seed,.5);
}
function smoke(x,y,seed,a){for(let i=0;i<9;i++){const u=((t*.18+i/9+hash(seed+i)*.1)%1),r=6+u*26;g.fillStyle=rgba(tc('#B9A6C2'),a*(1-u)*(u*4>1?1:u*4));ell(x+u*30+Math.sin(t*.8+i)*6*u,y-u*120,r,r*.8);g.fill()}}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function leaves(n,seed,x0,y0,w,h,col){for(let i=0;i<n;i++){const ph=hash(seed+i),u=((t*(.08+ph*.06)+ph)%1),x=x0+hash(seed+i*2)*w+Math.sin(t*1.5+i)*25+u*60,y=y0+u*h;g.save();g.translate(x,y);g.rotate(t*2+i);ell(0,0,4,2);g.fillStyle=rgba(col,.85*Math.sin(u*Math.PI));g.fill();g.restore()}}
function ripples(x,y,w,t0,col,a){for(let i=0;i<3;i++){const u=((t-t0)*.5+i/3)%1;if(t<t0)continue;g.strokeStyle=rgba(col,a*(1-u));g.lineWidth=1.5;ell(x,y,w*(.2+u),w*(.2+u)*.32);g.stroke()}}
function fenceW(x0,x1,gy,h,seed){g.strokeStyle=tc('#5A4450');for(let x=x0;x<=x1;x+=22){g.beginPath();g.moveTo(x,gy);g.lineTo(x+(hash(seed+x)-.5)*4,gy-h);g.lineWidth=5;g.stroke()}g.lineWidth=3;for(let k=0;k<4;k++){g.strokeStyle=tc(k%2?'#6B5260':'#4E3A4A');g.beginPath();g.moveTo(x0,gy-h*.2-k*h*.18);for(let x=x0;x<=x1;x+=11)g.lineTo(x,gy-h*.2-k*h*.18+((x/11+k)%2?3:-3));g.stroke()}}
function palisade(x0,x1,gy,h,seed){for(let x=x0;x<=x1;x+=16){const hh=h*(.9+hash(seed+x)*.2);g.beginPath();g.moveTo(x-7,gy);g.lineTo(x-7,gy-hh);g.lineTo(x,gy-hh-12);g.lineTo(x+7,gy-hh);g.lineTo(x+7,gy);g.closePath();fo(tc(hash(x+seed)>.5?'#5A4448':'#4E3A44'),.8);g.strokeStyle=rgba(tc('#8A6A64'),.5);g.lineWidth=2;g.beginPath();g.moveTo(x-3,gy-hh+6);g.lineTo(x-3,gy-8);g.stroke()}}
function panel(x,y,w,h,a,frame,glowA){
  if(a<=0)return;
  g.save();g.globalAlpha*=a;
  if(glowA>0){g.shadowColor=rgba(frame||'#E1C8B8',.8*glowA);g.shadowBlur=24}
  g.beginPath();g.roundRect(x,y,w,h,14);g.fillStyle=rgba('#241F4A',.55);g.fill();g.shadowBlur=0;
  const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,rgba('#E1C8B8',.18));gr.addColorStop(.25,rgba('#E1C8B8',.04));gr.addColorStop(1,rgba('#6C4377',.12));g.fillStyle=gr;g.fill();
  g.strokeStyle=rgba(frame||'#E1C8B8',.9);g.lineWidth=2;g.stroke();
  g.beginPath();g.roundRect(x+5,y+5,w-10,h-10,10);g.strokeStyle=rgba(frame||'#E1C8B8',.25);g.lineWidth=1;g.stroke();
  g.restore();
}
function bar(x,y,w,h,v,col,a,blinkA){g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,h/2);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
  const vv=cl(v,0,1);if(vv>.001){g.beginPath();g.roundRect(x,y,Math.max(h,w*vv),h,h/2);const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,mixc(col,'#FFFFFF',.35));gr.addColorStop(1,col);g.fillStyle=gr;g.fill();g.shadowColor=col;g.shadowBlur=10*(blinkA||.4);g.fill()}
  g.restore()}
function ticks(x,y,w,h,n,a){g.save();g.strokeStyle=rgba('#1F2236',.45*a);g.lineWidth=1;for(let i=1;i<n;i++){const xx=x+w*i/n;g.beginPath();g.moveTo(xx,y+2);g.lineTo(xx,y+h-2);g.stroke()}g.restore()}
function icon(kind,x,y,s,a){g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha*=a;g.lineJoin='round';g.lineCap='round';const ow=2/s;
  const st=(c)=>{g.fillStyle=c;g.fill();g.strokeStyle='#1F2236';g.lineWidth=ow;g.stroke()};
  if(kind==='wood'){g.beginPath();g.roundRect(-12,-5,22,10,5);st('#A0704A');ell(10,0,4,5);st('#D8A878');g.beginPath();g.arc(10,0,2,0,7);g.strokeStyle='#8A5A3A';g.lineWidth=1;g.stroke()}
  if(kind==='iron'){g.beginPath();g.moveTo(-11,5);g.lineTo(-7,-5);g.lineTo(7,-5);g.lineTo(11,5);g.closePath();st('#8C8FA3');g.beginPath();g.moveTo(-6,-3);g.lineTo(5,-3);g.strokeStyle='#D8DAE6';g.lineWidth=1.5;g.stroke()}
  if(kind==='stone'){blob([[-10,4],[-8,-5],[0,-8],[9,-4],[11,4],[2,7]]);st('#7D7890');ell(-3,-3,3,2);g.fillStyle='#A8A2B8';g.fill()}
  if(kind==='grain'){for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*4,9);g.lineTo(i*5,-4);g.strokeStyle='#C89040';g.lineWidth=2;g.stroke();ell(i*5,-6,2.6,5,i*.3);st('#E0B060')}}
  if(kind==='food'){ell(0,1,11,8);st('#C88A50');g.strokeStyle='#8A5A3A';g.lineWidth=1.4;for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*5-2,-3);g.lineTo(i*5+2,1);g.stroke()}}
  if(kind==='happy'){ell(0,0,10,10);st('#FFCF9A');g.beginPath();g.arc(0,1,5,.3,Math.PI-.3);g.strokeStyle='#1F2236';g.lineWidth=1.6;g.stroke();ell(-3.5,-3,1.3,1.6);g.fillStyle='#1F2236';g.fill();ell(3.5,-3,1.3,1.6);g.fill()}
  if(kind==='well'){g.beginPath();g.rect(-9,-1,18,9);st('#8A6A58');g.beginPath();g.moveTo(-11,-6);g.lineTo(0,-13);g.lineTo(11,-6);g.closePath();st('#6B5A60');g.beginPath();g.moveTo(-8,-6);g.lineTo(-8,-1);g.moveTo(8,-6);g.lineTo(8,-1);g.stroke()}
  if(kind==='bench'){g.beginPath();g.rect(-11,-2,22,4);st('#A07A60');g.beginPath();g.moveTo(-8,2);g.lineTo(-8,8);g.moveTo(8,2);g.lineTo(8,8);g.strokeStyle='#1F2236';g.lineWidth=2;g.stroke();g.beginPath();g.rect(-11,-10,22,4);st('#A07A60')}
  if(kind==='roof'){g.beginPath();g.moveTo(-11,6);g.lineTo(-11,-2);g.lineTo(0,-10);g.lineTo(11,-2);g.lineTo(11,6);g.closePath();st('#7A5A68')}
  if(kind==='road'){g.beginPath();g.moveTo(-4,-9);g.lineTo(4,-9);g.lineTo(10,9);g.lineTo(-10,9);g.closePath();st('#6A5468')}
  if(kind==='axe'){g.beginPath();g.moveTo(-8,9);g.lineTo(6,-7);g.strokeStyle='#A0704A';g.lineWidth=3;g.stroke();g.beginPath();g.moveTo(2,-11);g.quadraticCurveTo(12,-10,11,0);g.lineTo(5,-5);g.closePath();st('#8C8FA3')}
  if(kind==='person'){ell(0,-5,4.5,4.5);st('#C98972');g.beginPath();g.moveTo(-7,9);g.quadraticCurveTo(-7,0,0,0);g.quadraticCurveTo(7,0,7,9);g.closePath();st('#B9A6A2')}
  if(kind==='warn'){g.beginPath();g.moveTo(0,-10);g.lineTo(10,8);g.lineTo(-10,8);g.closePath();st('#E0505A');g.fillStyle='#1F2236';g.fillRect(-1.2,-4,2.4,7);ell(0,5,1.4,1.4);g.fill()}
  g.restore()}
function scribble(x,y,w,seed,col,a){g.save();g.strokeStyle=rgba(col,a);g.lineWidth=1.8;g.lineCap='round';g.beginPath();g.moveTo(x,y);const n=Math.floor(w/7);for(let i=1;i<=n;i++){const xx=x+i*w/n,up=hash(seed+i)>.7?-7:-3;g.quadraticCurveTo(xx-w/n*.6,y+up,xx-w/n*.2,y+(hash(seed+i*2)>.5?2:0))}g.stroke();g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function toScreen(x,y,f){const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f,q=rot((x-cx)*z,(y-cy)*z,CAM.r*f);return [270+CAM.sx*f+q[0],480+CAM.sy*f+q[1]]}
function spark(x,y,r,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r*2.5,'#FFE6C4',.6*a);g.fillStyle=rgba('#FFF4EA',a);g.beginPath();g.moveTo(x,y-r);g.quadraticCurveTo(x+r*.12,y-r*.12,x+r,y);g.quadraticCurveTo(x+r*.12,y+r*.12,x,y+r);g.quadraticCurveTo(x-r*.12,y+r*.12,x-r,y);g.quadraticCurveTo(x-r*.12,y-r*.12,x,y-r);g.fill();g.restore()}
function grassRow(y,seed,n,x0,x1,h,col){g.lineCap='round';for(let i=0;i<n;i++){const x=x0+hash(seed+i)*(x1-x0),hh=h*(.5+hash(seed+i*3)*.7),sw=Math.sin(t*1.6+x*.05)*hh*.15;g.strokeStyle=col;g.lineWidth=2.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+sw*.3,y-hh*.6,x+sw+(hash(i)-.5)*10,y-hh);g.stroke()}}
function birds(){g.strokeStyle=rgba('#241F4A',.8);g.lineWidth=2;for(let i=0;i<5;i++){const x=((t*28+i*40+hash(i)*30)%900)-200,y=330+i*9+Math.sin(t*2+i)*4,f=Math.sin(t*9+i*2)*4;g.beginPath();g.moveTo(x-7,y-f);g.quadraticCurveTo(x-3,y-2,x,y);g.quadraticCurveTo(x+3,y-2,x+7,y-f);g.stroke()}}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function villageGround(T){
  const gr=g.createLinearGradient(0,600,0,1100);gr.addColorStop(0,mixc(PAL.ground,PAL.far,.5));gr.addColorStop(.25,PAL.ground);gr.addColorStop(1,'#1E1830');g.fillStyle=gr;g.fillRect(-1200,618,3600,1400);
  g.fillStyle=tc('#4A3848');g.beginPath();g.moveTo(-1200,676);for(let x=-1200;x<=2400;x+=40)g.lineTo(x,676+nz(x*.02)*4);g.lineTo(2400,770);for(let x=2400;x>=-1200;x-=40)g.lineTo(x,770+nz(x*.03+5)*5);g.closePath();g.fill();
  brush(-200,680,1200,90,'#6A5468',21,60,.35);
  for(const ry of[704,738]){g.strokeStyle=rgba('#1F2236',.55);g.lineWidth=4;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke();g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=1.5;g.beginPath();for(let x=-1200;x<=2400;x+=30){const y=ry+3+nz(x*.015+ry)*3;if(x===-1200)g.moveTo(x,y);else g.lineTo(x,y)}g.stroke()}
  for(const pd of[[150,740,60],[420,706,48],[700,738,70],[-150,706,50]]){ell(pd[0],pd[1],pd[2],7);const pg=g.createLinearGradient(pd[0]-pd[2],0,pd[0]+pd[2],0);pg.addColorStop(0,T.sky[1]);pg.addColorStop(.6,T.sky[2]);pg.addColorStop(1,T.moon?'#4B3463':'#FFCF9A');g.fillStyle=pg;g.fill();ol(.6);ripples(pd[0]+10,pd[1],pd[2]*.5,0,'#FFE6C4',.4)}
  grassRow(676,1,60,-600,1400,22,tc('#4F5470'));
}
const TOD={
  dawn:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[470,520],tint:'#6C4377',ta:.12,lit:.5},
  day:{sky:['#4B3463','#9A6A8E','#F2B895'],sun:[410,300],tint:'#F09A6C',ta:.04,lit:0},
  sunset:{sky:['#241F4A','#6C4377','#F09A6C'],sun:[330,590],tint:'#F09A6C',ta:.14,lit:.8},
  night:{sky:['#120F2A','#241F4A','#4B3463'],sun:null,moon:[400,210],tint:'#241F4A',ta:.42,lit:1}
};
function villageWorld(o){
  const T=TOD[op(o,'tod','dawn')];TINT=T.tint;TA=T.ta;
  const bF=op(o,'bF',0),bM=op(o,'bM',0),bFg=op(o,'bFg',2.5);
  layer(0,()=>sky(T.sky[0],T.sky[1],T.sky[2],-150,620));
  layer(.06,()=>{if(T.sun)sun(T.sun[0],T.sun[1],20);if(T.moon){stars(60,5,-300,-200,1200,700);glow(T.moon[0],T.moon[1],110,'#E1C8B8',.22);ell(T.moon[0],T.moon[1],16,16);g.fillStyle='#E7DCE6';g.fill()}clouds(380,7,3,T.sky[2],.22,6);clouds(260,5,8,T.sky[1],.3,4)},bF*.5);
  layer(.2,()=>{if(!T.moon)birds();hills(575,42,mixc(PAL.far,T.sky[2],.32),1,-600,1300);forestLine(592,mixc(PAL.far,T.sky[1],.15),4,-600,1300,24);if(o.far)o.far()},bF);
  layer(.5,()=>{g.fillStyle=mixc(PAL.ground,PAL.far,.55);g.fillRect(-900,600,2600,300);
    izba(-120,622,150,90,1,T.lit,1);birch(30,628,170,2);izba(160,620,130,80,2,T.lit*.8,1);birch(300,628,200,5);izba(470,622,160,92,3,T.lit,1);birch(600,630,180,8);izba(760,620,140,86,4,T.lit*.7,1);fenceW(-300,900,640,26,3);if(o.mid)o.mid()},bM);
  layer(1,()=>{villageGround(T);if(o.main)o.main()},op(o,'bMain',0));
  if(op(o,'fg',1))layer(1.7,()=>{grassRow(980,7,40,-600,1400,90,'#241F36');g.fillStyle='#1E1830';g.fillRect(-800,975,2600,400)},bFg);
}
function candle(x,y,s){const fl=1+.08*Math.sin(t*13)+.05*Math.sin(t*23+1)+.04*nz(t*6);g.save();g.translate(x,y);g.scale(s,s);
  ell(0,0,26,7);fo(tc('#8C8FA3'));g.beginPath();g.rect(-8,-48,16,48);const cg=g.createLinearGradient(-8,0,8,0);cg.addColorStop(0,'#C8B0A0');cg.addColorStop(1,'#F2DCC8');g.fillStyle=cg;g.fill();ol(.8);
  g.beginPath();g.moveTo(-6,-46);g.quadraticCurveTo(-9,-36,-6,-30);ol(.6);
  glow(0,-64,60*fl,'#FFB36B',.35);g.save();g.translate(0,-50);g.rotate(Math.sin(t*3)*.08);g.beginPath();g.moveTo(0,-30*fl);g.quadraticCurveTo(9,-8,0,0);g.quadraticCurveTo(-9,-8,0,-30*fl);g.fillStyle='#FFCF9A';g.fill();g.beginPath();g.moveTo(0,-18*fl);g.quadraticCurveTo(4,-5,0,0);g.quadraticCurveTo(-4,-5,0,-18*fl);g.fillStyle='#FFF4EA';g.fill();g.restore();
  g.restore();return fl}
function hutInterior(o){
  const night=op(o,'night',1),red=op(o,'red',0),cd=op(o,'candle',1);
  TINT='#241F4A';TA=.22*night;
  layer(.6,()=>{
    g.fillStyle=tc('#4A3442');g.fillRect(-700,-500,1900,1700);
    for(let y=-480;y<1100;y+=38){const lg=g.createLinearGradient(0,y,0,y+38);lg.addColorStop(0,tc('#6B4A4E'));lg.addColorStop(.5,tc('#5A3E48'));lg.addColorStop(1,tc('#3A2836'));g.fillStyle=lg;g.fillRect(-700,y+2,1900,34);g.fillStyle=rgba('#1F2236',.6);g.fillRect(-700,y,1900,3)}
    brush(-300,-200,1100,1000,'#8A6A64',31,70,.18);
    for(let i=0;i<10;i++){ell(-200+hash(i+3)*900,-100+hash(i*5)*900,6,4);g.fillStyle=rgba('#2A1E2E',.6);g.fill()}
    // okno with night sky
    g.save();g.beginPath();g.rect(70,250,140,170);const wg=g.createLinearGradient(0,250,0,420);wg.addColorStop(0,'#120F2A');wg.addColorStop(1,mixc('#4B3463','#6C4377',.4));g.fillStyle=wg;g.fill();g.clip();stars(14,9,70,250,140,120);ell(170,295,13,13);g.fillStyle='#E7DCE6';g.fill();ell(176,291,11,11);g.fillStyle='#1A1636';g.fill();g.fillStyle=rgba('#241F4A',.9);g.beginPath();g.moveTo(70,400);for(let x=70;x<=210;x+=10)g.lineTo(x,388-hash(x)*16);g.lineTo(210,420);g.lineTo(70,420);g.closePath();g.fill();g.restore();
    g.beginPath();g.rect(70,250,140,170);ol(1.2);g.strokeStyle=tc('#B9A6A2');g.lineWidth=7;g.beginPath();g.moveTo(140,250);g.lineTo(140,420);g.moveTo(70,330);g.lineTo(210,330);g.stroke();
    g.beginPath();g.moveTo(52,246);g.lineTo(140,212);g.lineTo(228,246);g.lineTo(220,256);g.lineTo(60,256);g.closePath();fo(tc('#B9A6A2'));g.beginPath();g.rect(56,420,168,12);fo(tc('#B9A6A2'));
    // embroidered towel (rushnyk) beside the okno
    const sw=Math.sin(t*.9)*2;g.beginPath();g.moveTo(232,236);g.lineTo(262,236);g.lineTo(264+sw,400);g.lineTo(234+sw,400);g.closePath();fo(tc('#E7C6AD'),.8);g.strokeStyle=tc('#A0505A');g.lineWidth=3;for(let k=0;k<3;k++){g.beginPath();g.moveTo(236+sw,372+k*9);for(let x=0;x<6;x++)g.lineTo(238+x*5+sw,(x%2?366:372)+k*9);g.stroke()}
    // shelf with clay pots
    g.beginPath();g.rect(290,236,170,10);fo(tc('#6B4A4E'));for(let i=0;i<4;i++){const px=310+i*40,ph=26+hash(i+4)*14;g.beginPath();g.moveTo(px-12,236);g.quadraticCurveTo(px-18,236-ph*.6,px-7,236-ph);g.lineTo(px+7,236-ph);g.quadraticCurveTo(px+18,236-ph*.6,px+12,236);g.closePath();fo(tc(i%2?'#8A5A50':'#7A6A70'),.8)}
    // drying herbs swaying
    for(let i=0;i<3;i++){g.save();g.translate(320+i*42,120);g.rotate(Math.sin(t*.8+i)*.06);g.strokeStyle=tc('#5A4450');g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,40);g.stroke();for(let k=0;k<6;k++){ell((k-2.5)*4,48+k%3*10,4,16,(k-2.5)*.15);g.fillStyle=tc(k%2?'#6E6A86':'#4F5470');g.fill()}g.restore()}
    // whitewashed stove at right with ember mouth
    g.beginPath();g.moveTo(430,980);g.lineTo(430,180);g.quadraticCurveTo(430,150,460,150);g.lineTo(760,150);g.lineTo(760,980);g.closePath();const sg=g.createLinearGradient(430,0,600,0);sg.addColorStop(0,tc('#9C8494'));sg.addColorStop(.3,tc('#B9A6A2'));sg.addColorStop(1,tc('#8C7890'));g.fillStyle=sg;g.fill();ol();
    brush(440,170,200,700,'#E7C6AD',41,30,.2);g.beginPath();g.moveTo(462,600);g.lineTo(462,520);g.quadraticCurveTo(500,480,538,520);g.lineTo(538,600);g.closePath();g.fillStyle='#1F1626';g.fill();ol();
    const em=.5+.3*Math.sin(t*2.1)+.2*nz(t*3);glow(500,590,70,'#FFB36B',.45*em);ell(500,592,30,7);g.fillStyle=rgba('#FFB36B',.7*em);g.fill();
  },op(o,'bBack',2));
  layer(.85,()=>{g.fillStyle=tc('#3A2836');g.fillRect(-500,860,1500,500);g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=2;for(let i=-12;i<14;i++){g.beginPath();g.moveTo(270+i*40,860);g.lineTo(270+i*90,1300);g.stroke()}},op(o,'bBack',2)*.5);
  layer(1,()=>{
    if(o.main)o.main();
    // table: worn top, long embroidered cloth hiding the legs
    g.beginPath();g.moveTo(-80,690);g.lineTo(620,690);g.lineTo(620,716);g.lineTo(-80,716);g.closePath();const tg=g.createLinearGradient(0,690,0,716);tg.addColorStop(0,tc('#8A6A64'));tg.addColorStop(1,tc('#6B4A4E'));g.fillStyle=tg;g.fill();ol();
    brush(-60,692,660,22,'#B08A7A',51,30,.3);
    g.beginPath();g.moveTo(-80,714);g.lineTo(620,714);g.lineTo(624,940);for(let x=620;x>=-80;x-=35)g.quadraticCurveTo(x-17,948+Math.sin(x+t)*2,x-35,940);g.closePath();const cg=g.createLinearGradient(0,714,0,940);cg.addColorStop(0,tc('#B9A6A2'));cg.addColorStop(1,tc('#79677F'));g.fillStyle=cg;g.fill();ol();
    g.strokeStyle=tc('#A0505A');g.lineWidth=4;g.beginPath();for(let x=-80;x<=620;x+=14)g.lineTo(x,(x/14)%2?898:910);g.stroke();g.strokeStyle=rgba(tc('#79677F'),.8);g.lineWidth=2;for(let x=-40;x<620;x+=70){g.beginPath();g.moveTo(x,720);g.quadraticCurveTo(x+8,820,x-4,936);g.stroke()}
    // clay mug at left
    g.beginPath();g.moveTo(70,700);g.lineTo(74,660);g.lineTo(112,660);g.lineTo(116,700);g.closePath();fo(tc('#8A5A50'));g.beginPath();g.arc(118,680,10,-1.2,1.2);ol(1.2);
    if(cd>0)candle(455,702,1);
    if(o.front)o.front();
  });
  layer(1.45,()=>{g.fillStyle='#1A1424';g.beginPath();g.moveTo(-300,-80);g.lineTo(900,-80);g.lineTo(900,60);g.quadraticCurveTo(300,90,-300,40);g.closePath();g.fill();g.save();g.translate(80,40);g.rotate(Math.sin(t*.7)*.05);g.strokeStyle='#2A2036';g.lineWidth=3;g.beginPath();g.moveTo(0,0);g.lineTo(0,70);g.stroke();for(let k=0;k<5;k++){ell((k-2)*6,90+k%2*12,6,24);g.fillStyle='#2A2036';g.fill()}g.restore()},4);
  // light: night blue multiply, candle warm screen, optional red menu light
  g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.35*night);g.restore();
  if(cd>0){const c=toScreen(455,640,1),f=1+.06*Math.sin(t*13)+.05*nz(t*6);lampLight(c[0],c[1],430*CAM.z*.6+180,'#FFB36B',.38*cd*f)}
  const wn=toScreen(140,330,.6);beamStatic(wn,night);
  if(red>0){g.save();g.globalCompositeOperation='multiply';wash('#E0505A',.22*red);g.restore();lampLight(380,420,520,'#E0505A',.28*red)}
  motes(18,13,0,200,540,600,'#FFE6C4',.35*cd,1.5);
}
function beamStatic(wn,night){beam(wn[0],wn[1],wn[0]+260,wn[1]+520,60,160,'#6C4377',.16*night)}
const RES=[['wood','#A0704A',200],['iron','#8C8FA3',50],['stone','#7D7890',100],['grain','#E0B060',500],['food','#C88A50',500]];
function resPanel(x,y,w,o){
  const a=op(o,'a',1),v=o.v||{},ra=o.rows||[1,1,1,1,1,1],red=op(o,'red',-1),rA=op(o,'redA',0),rh=50,h=74+6*rh;
  if(a<=0)return h;
  panel(x,y,w,h,a,'#E1C8B8',.7);
  g.save();g.globalAlpha*=a;
  medallion(x+34,y+36,15,0,0,.25);
  g.fillStyle=rgba('#E1C8B8',.85);g.beginPath();g.roundRect(x+62,y+26,w*.42,7,3.5);g.fill();
  g.fillStyle=rgba('#E1C8B8',.4);g.beginPath();g.roundRect(x+62,y+40,w*.26,5,2.5);g.fill();
  g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(x+16,y+64);g.lineTo(x+w-16,y+64);g.stroke();
  for(let i=0;i<6;i++){const q=cl(ra[i]||0,0,1);if(q<=0)continue;const yy=y+74+i*rh,dx=(1-eout(q))*24;g.save();g.globalAlpha*=q;
    if(i<5){const R_=RES[i],val=op(v,R_[0],0),isR=red===i;
      if(isR&&rA>0){g.save();g.shadowColor='#E0505A';g.shadowBlur=16*rA;g.beginPath();g.roundRect(x+10+dx,yy+2,w-20,rh-8,10);g.fillStyle=rgba('#E0505A',.12*rA);g.fill();g.strokeStyle=rgba('#E0505A',rA);g.lineWidth=2;g.stroke();g.restore()}
      icon(R_[0],x+34+dx,yy+20,1.25,1);
      const bw=w-110;bar(x+60+dx,yy+12,bw,16,val/R_[2],isR?mixc(R_[1],'#E0505A',.4+.6*rA):R_[1],1,isR?rA:.4);ticks(x+60+dx,yy+12,bw,16,10,1);
      ell(x+w-30+dx,yy+20,6,6);g.fillStyle=isR?rgba('#E0505A',.4+.6*rA):rgba(R_[1],.9);g.fill();
    }else{icon('happy',x+34+dx,yy+20,1.25,1);const hv=op(v,'happy',0)/100,sw=(w-110)/10;
      for(let k=0;k<10;k++){const f=cl(hv*10-k,0,1);g.beginPath();g.roundRect(x+60+dx+k*sw,yy+10,sw-4,20,4);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.4);g.lineWidth=1;g.stroke();if(f>0){g.beginPath();g.roundRect(x+60+dx+k*sw,yy+10,Math.max(2,(sw-4)*f),20,4);g.fillStyle='#FFCF9A';g.fill()}}}
    g.restore()}
  g.restore();return h;
}
function star5(x,y,r){g.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.45:r;g.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr)}g.closePath()}
const PROB=[['well',5],['roof',2],['road',3]];
function problemsPanel(x,y,w,o){
  const a=op(o,'a',1),ra=o.rows||[1,1,1],hi=op(o,'hi',0),rh=52,h=44+3*rh;if(a<=0)return h;
  panel(x,y,w,h,a,'#E0505A',.5);
  g.save();g.globalAlpha*=a;
  icon('warn',x+26,y+24,1,1);g.fillStyle=rgba('#E0505A',.8);g.beginPath();g.roundRect(x+44,y+20,w*.4,6,3);g.fill();
  for(let i=0;i<3;i++){const q=cl(ra[i]||0,0,1);if(q<=0)continue;const yy=y+40+i*rh;g.save();g.globalAlpha*=q;
    if(i===0&&hi>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=20*hi;g.beginPath();g.roundRect(x+8,yy+2,w-16,rh-6,10);g.fillStyle=rgba('#FFCF9A',.18*hi);g.fill();g.strokeStyle=rgba('#FFCF9A',.9*hi);g.lineWidth=2;g.stroke();g.restore()}
    const bl=.5+.5*Math.sin(t*7+i*1.3);ell(x+20,yy+24,5,5);g.fillStyle=rgba('#E0505A',.4+.6*bl);g.fill();
    icon(PROB[i][0],x+44,yy+24,1.2,1);scribble(x+66,yy+28,w*.26,i*5+3,'#E1C8B8',.6);
    for(let k=0;k<PROB[i][1];k++){const s_=i===0?1+.25*hi*Math.sin(t*6+k):1;star5(x+w-22-k*19,yy+24,7*s_);g.fillStyle=i===0?'#FFCF9A':rgba('#FFCF9A',.65);g.fill()}
    g.restore()}
  g.restore();return h;
}
// ---- scene
// SCENE 10 — «Пятнадцать молчаливых» (118.4 – 132.3)
// shots: pips become fifteen men at the palisade, hero peeks (wide) | pan across blank faces (medium-close) |
//        the line turns and marches to the far forest, hero behind the corner (OTS) | dip — evening return with logs (wide) |
//        a woman asks, one only shrugs (medium) | wood bar grows to 118 gold (insert) | enough: woodpile (medium-wide) |
//        night: hero scrolls the panel (medium)
const ST=[0,1.7,3.15,5.43,6.9,8.4,10.55,12.3];
const S=shot(t,ST);
const GY=716,N=15;
const MEN=Array.from({length:N},(_,i)=>worker(i+2));
const W11=woman(11,['#7A5A8A','#4E3A60','#9A7AAA']);
function wD(tt,t0,v,acc){const u=tt-t0;if(u<=0)return 0;if(u<acc)return v*u*u/(2*acc);return v*(acc/2+u-acc)}
// axe resting on the RIGHT shoulder, head behind; sw = small swing from the walk
function axeItem(sw){return (gg,ex,ey)=>{g.save();g.translate(ex,ey);g.rotate(-.42+sw);
  segs([[0,24,0,-88,7,tc('#A0704A')]]);
  g.beginPath();g.moveTo(-3,-78);g.lineTo(-30,-90);g.quadraticCurveTo(-37,-73,-30,-56);g.lineTo(-3,-66);g.closePath();fo(tc('#8C8FA3'));
  g.strokeStyle=rgba('#E1C8B8',.7);g.lineWidth=2;g.beginPath();g.moveTo(-29,-86);g.quadraticCurveTo(-34,-73,-29,-60);g.stroke();g.restore()}}
// log on the right shoulder
function logItem(len,seed){return (gg,ex,ey)=>{g.save();g.translate(ex,ey-8);g.rotate(-.08);
  g.beginPath();g.roundRect(-len*.55,-12,len,24,10);fo(tc('#7A5848'));g.strokeStyle=rgba(tc('#A0704A'),.9);g.lineWidth=2;for(let k=0;k<3;k++){g.beginPath();g.moveTo(-len*.5+k*30+hash(seed+k)*20,-4+k*4);g.lineTo(-len*.2+k*40,-4+k*4);g.stroke()}
  ell(len*.45,0,9,12);fo(tc('#C8A07A'),.8);ell(len*.45,0,4,6);g.strokeStyle=tc('#7A5848');g.lineWidth=1;g.stroke();g.restore()}}
function uiAt(x,y,s,fn){g.save();g.translate(x,y);g.scale(s,s);fn();g.restore()}
const BLANK={look:[0,0],eyeOpen:.78,smile:0,brow:-.05};
function dust(x,y,seed,a,s){for(let k=0;k<4;k++){const ag=((t*1.6+hash(seed)*.9+k/4)%1);ell(x-ag*30*s,y-ag*18*s,(8+ag*22)*s,(4+ag*9)*s);g.fillStyle=rgba(tc("#C8B0B8"),a*(1-ag)*.6);g.fill()}}
// standing / turning / marching man of the line
function lineMan(i,x0,y,s,turnT,walkT,v){
  const tu=sm(turnT,turnT+.28,t),d=wD(t,walkT,v,.35),C=MEN[i];
  const ant=sm(turnT-.15,turnT,t)*(1-tu);
  const o={x:x0+d,y,s,yaw:lerp(0,.95,tu),lean:-.05*ant,ls:1,rimC:PAL.rim,rimA:.55,em:Object.assign({},BLANK,{blink:0}),t:t+i*.37};
  if(d>0)o.walk={d,st:112*s};
  const ph=d/(112*s);o.hr=tu>.5?[-6,-226]:[-24,-224];o.itemR=axeItem(d>0?Math.sin(ph*Math.PI*2)*.06:0);
  return o;
}
// hero's izba corner seen close, used as a foreground occluder
function corner(x,top,bot){g.beginPath();g.rect(x-400,top,400,bot-top);const wg=g.createLinearGradient(x-120,0,x,0);wg.addColorStop(0,tc('#3A2836'));wg.addColorStop(1,tc('#6B4A4E'));g.fillStyle=wg;g.fill();
  for(let y=top;y<bot;y+=30){g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=3;g.beginPath();g.moveTo(x-400,y);g.lineTo(x,y);g.stroke();ell(x+4,y+15,16,15);fo(tc('#8A6A64'),.8);g.strokeStyle=rgba(tc('#5A3E48'),.8);g.lineWidth=1.2;ell(x+4,y+15,8,7);g.stroke()}
  brush(x-200,top,200,bot-top,'#8A6A64',9,14,.25)}
function heroPeek(x,y,s,e){return Object.assign({x,y,s,yaw:.9,lean:.2,hipX:4,medal:'hidden',ls:1,rimC:PAL.rim,rimA:.7,hl:[30,-170],hr:[38,-200],
  em:{look:[.7,.05],browIn:.55,brow:.15,eyeOpen:1.1}},e||{})}
function mist(y,a){for(let i=0;i<4;i++){const x=((t*12+i*260)%1300)-380;ell(x,y+i*14,260,22);g.fillStyle=rgba('#E1C8B8',a);g.fill()}}
// ---------------- shot 0: wide — the pips become fifteen silent men at the palisade
if(S.i===0){
  const u=S.u;setCam(lerp(300,292,u),lerp(590,582,u),1.3+u*.05,-.01+u*.01);
  villageWorld({tod:'dawn',bF:1,bM:.5,bFg:2.5,main:()=>{
    palisade(-120,700,702,150,4);mist(668,.06);
    for(let i=0;i<N;i++){person(MEN[i],lineMan(i,150+i*25,GY,.42,99,99,0))}
    mist(700,.08)}});
  layer(1.3,()=>{person(HERO,heroPeek(116,830,.8,{em:{look:[.7,.05],browIn:.5,brow:.2,eyeOpen:1.1}}));corner(120,300,900)},.8);
  // match from the fifteen panel pips of the previous scene
  const m=ease(t/.5),fa=1-sm(.35,.7,t);
  if(fa>0){wash('#120F2A',.75*fa);for(let i=0;i<N;i++){const a=[150+(i%5)*58,410+Math.floor(i/5)*58],b=toScreen(150+i*25,GY-262*.42,1);
    const x=lerp(a[0],b[0],m),y=lerp(a[1],b[1],m);g.save();g.globalCompositeOperation='screen';glow(x,y,22,'#FFCF9A',.6*fa);g.restore();icon('person',x,y,lerp(1.6,.9,m),fa)}}
  leaves(5,4,0,150,540,600,'#C9926F');
}
// ---------------- shot 1: medium-close — pan across the blank faces
if(S.i===1){
  const lt=S.lt;setCam(lerp(170,300,ease(S.u)),556,2.75+lt*.06,.01);
  villageWorld({tod:'dawn',bF:6,bM:5,bFg:4,fg:0,main:()=>{palisade(-120,700,690,190,4);mist(640,.07);
    for(let i=0;i<9;i++){const o=lineMan(i,60+i*52,GY,.6,99,99,0);o.em=Object.assign({},BLANK,{look:[0,.02*Math.sin(t+i)]});o.t=t+i*.61;person(MEN[i],o)}}});
  motes(14,3,0,150,540,600,'#FFE6C4',.4,1.8);
}
// ---------------- shot 2: OTS — hero behind the corner, the line turns and marches off to the far forest
if(S.i===2){
  const lt=S.lt;setCam(lerp(300,330,ease(S.u)),lerp(562,552,S.u),1.38+lt*.03,-.012);
  villageWorld({tod:'dawn',bF:2,bM:1.5,bFg:3,far:()=>{forestLine(586,mixc(PAL.far,'#4F5470',.4),9,600,1300,34)},main:()=>{
    palisade(-200,900,690,130,4);
    for(let i=N-1;i>=0;i--){const o=lineMan(i,120+i*30,702,.38,3.25+i*.015,3.6+i*.025,62);if(o.walk)dust(o.x-6,702,i,.9,.5);person(MEN[i],o)}
    mist(700,.07)}});
  layer(1.35,()=>{person(HERO,heroPeek(178,812,.85,{em:{look:[lerp(.3,.75,sm(3.5,4.2,t)),lerp(.1,0,sm(3.5,4.2,t))],browIn:.6,brow:.25+.2*sm(3.3,3.5,t),eyeOpen:1.15,blink:t>3.42&&t<3.52?1:0},
    lean:.22+.04*Math.sin(t*1.3),turn:.08*sm(3.6,4.3,t)}));corner(165,180,900)},.6);
  leaves(5,8,0,150,540,600,'#C9926F');
}
// ---------------- shot 3: wide evening — they return with logs on the right shoulder
function retMan(i,x0,s,y,t0,v){const d=wD(t,t0,v,.01),C=MEN[i];const o={x:x0-d,y,s,yaw:-.95,walk:{d,st:110*s},ls:1,rimC:PAL.rim,rimA:.6,hr:[-14,-238],em:BLANK,t:t+i*.41,itemR:logItem(230+hash(i)*40,i)};return o}
if(S.i===3){
  const lt=S.lt;setCam(lerp(330,300,S.u),lerp(566,572,S.u),1.15+lt*.03,.01);
  villageWorld({tod:'sunset',bF:1,bM:.5,bFg:2.5,far:()=>{forestLine(586,mixc(PAL.far,'#4F5470',.4),9,500,1300,30)},main:()=>{
    palisade(-200,900,690,130,4);
    for(let i=0;i<N;i++){const x0=230+i*38+(i%2)*6,o=retMan(i,x0,.44,708+(i%2)*6,5.3,58);if(o.x<-60||o.x>640)continue;dust(o.x+8,o.y,i,.9,.5);person(MEN[i],o)}
  }});
  leaves(5,2,0,150,540,600,'#C9926F');
}
// ---------------- shot 4: medium — a woman asks, he only shrugs
if(S.i===4){
  const lt=S.lt;setCam(lerp(312,302,S.u),lerp(588,584,S.u),2.2+lt*.06,-.01);
  const sh=sm(7.45,7.8,t)*(1-sm(8.15,8.4,t)),stop=wD(t,6.9,70,.01),dm=Math.min(stop,wD(7.3,6.9,70,.01));
  villageWorld({tod:'sunset',bF:3,bM:2,bFg:3,mid:()=>{for(let k=0;k<3;k++){const d=wD(t,6.6,24,.01);person(MEN[k+5],{x:620+k*44-d,y:628,s:.2,yaw:-.95,walk:{d,st:22},hr:[-14,-238],itemR:logItem(240,k),em:BLANK,ls:1})}},main:()=>{
    palisade(-200,900,690,130,4);
    // woman asks: palm up, eyebrows raised
    const ask=sm(7.0,7.25,t);
    person(W11,{x:225,y:GY,s:.6,yaw:.9,ls:1,rimC:PAL.rim,rimA:.6,hr:[lerp(20,64,ask),lerp(-90,-152,ask)],hl:[10,-100],lean:.08*ask,
      em:{look:[.6,-.1],brow:.55*ask,browIn:.15,open:.3*ask*(.5+.5*Math.sin(t*14))*(1-sm(7.5,7.6,t)),smile:0},tilt:-.08*ask,turn:.05});
    // he stops in his stride and only spreads his free hand
    const x=385-dm,o={x,y:GY,s:.6,yaw:-.95,ls:1,rimC:PAL.rim,rimA:.6,hr:[-14,-238],itemR:logItem(250,3),t:t+.3};
    if(t<7.3)o.walk={d:dm,st:66};else{o.walk={d:dm,st:66}}
    o.hl=sh>0?[lerp(-6,-58,sh),lerp(-100,-172,sh)]:null;o.headDY=7*sh;o.tilt=.2*sh;o.lean=-.04*sh;
    o.em={look:[lerp(-.1,-.5,sm(7.2,7.4,t)),0],eyeOpen:.78,brow:.25*sh,smile:-.08*sh};
    person(MEN[3],o)}});
  leaves(4,6,0,150,540,600,'#C9926F');
}
// ---------------- shot 5: insert — the wood bar grows to 118 in gold, the red light goes out
const V0={wood:61,iron:14,stone:40,grain:410,food:380,happy:47};
function woodpile(x,gy,rows,seed,s){g.save();g.translate(x,gy);g.scale(s,s);
  g.beginPath();g.moveTo(-rows*11-10,0);g.lineTo(-rows*5,-rows*19);g.lineTo(rows*5+40,-rows*19+4);g.lineTo(rows*11+50,0);g.closePath();fo(tc('#7A5848'));
  for(let r=0;r<rows;r++){const n=rows-r;for(let k=0;k<n;k++){const cx=(k-(n-1)/2)*22,cy=-11-r*19;ell(cx,cy,11,11);fo(tc(hash(seed+r*7+k)>.5?'#C8A07A':'#B8906A'),.7);ell(cx,cy,5,5);g.strokeStyle=rgba(tc('#7A5848'),.8);g.lineWidth=1;g.stroke()}}
  g.restore()}
if(S.i===5){
  const lt=S.lt,u=S.u;setCam(lerp(262,274,u),lerp(500,486,u),1.12+u*.08,.012-u*.02);
  CAM.sy=kick(t,10.1,3,.3);
  const gw=ease((t-8.6)/1.5),wv=61+57*gw,off=sm(10.1,10.45,t),rA=(.55+.45*Math.sin(t*7.5))*(1-off);
  villageWorld({tod:'sunset',bF:8,bM:7,bMain:6,fg:0,main:()=>{palisade(-200,900,690,130,4);woodpile(300,712,Math.round(3+3*gw),5,1.6)}});
  wash('#120F2A',.35);
  layer(1,()=>{const px=78,py=260,pw=384;
    resPanel(px,py,pw,{a:1,v:Object.assign({},V0,{wood:wv}),red:0,redA:rA});
    const bx=px+60,by=py+86,bw=pw-110;
    // old level marker and the added part in gold
    g.strokeStyle=rgba('#E1C8B8',.8);g.setLineDash([3,3]);g.lineWidth=1.5;g.beginPath();g.moveTo(bx+bw*61/200,by-6);g.lineTo(bx+bw*61/200,by+22);g.stroke();g.setLineDash([]);
    if(gw>0){g.save();g.shadowColor='#FFCF9A';g.shadowBlur=14;g.beginPath();g.roundRect(bx+bw*61/200,by,bw*(wv-61)/200,16,8);const gg=g.createLinearGradient(0,by,0,by+16);gg.addColorStop(0,'#FFF0D8');gg.addColorStop(1,'#FFCF9A');g.fillStyle=gg;g.fill();g.restore();ticks(bx,by,bw,16,10,1)}
    const fl=Math.max(0,1-Math.abs(t-10.1)/.3);if(fl>0){g.save();g.globalCompositeOperation='screen';glow(bx+bw*118/200,by+8,120,'#FFCF9A',.7*fl);g.restore();for(let k=0;k<8;k++){const a=k/8*Math.PI*2,r=20+60*(1-fl);spark(bx+bw*118/200+Math.cos(a)*r,by+8+Math.sin(a)*r,6*fl,fl)}}
    if(off>0){ell(px+pw-30,py+94,10*(1+off),10*(1+off));g.strokeStyle=rgba('#FFCF9A',.8*(1-off));g.lineWidth=2;g.stroke()}
  });
  motes(14,9,0,150,540,600,'#FFE6C4',.4,1.8);
}
// ---------------- shot 6: medium-wide — for the first time it was enough
if(S.i===6){
  const lt=S.lt,u=S.u;setCam(lerp(282,302,ease(u)),lerp(574,560,u),lerp(1.32,1.42,u),.012-u*.02);
  const lift=sm(10.7,11.3,t),drop=sm(11.3,11.5,t);
  villageWorld({tod:'sunset',bF:1.5,bM:1,bFg:3,main:()=>{palisade(-200,900,690,130,4);woodpile(300,706,6,5,1.5);
    // last log goes onto the pile
    const mo={x:478,y:712,s:.55,yaw:-.7,ls:1,rimC:PAL.rim,rimA:.6,em:BLANK,lean:lerp(.15,.05,lift),hr:[lerp(-60,-90,lift),lerp(-130,-250,lift)],hl:[lerp(-20,-60,lift),lerp(-130,-260,lift)]};
    if(drop<1)mo.itemR=(gg,ex,ey)=>{g.save();g.translate(ex,ey);g.rotate(-.2);g.beginPath();g.roundRect(-60,-10,120,20,9);fo(tc('#7A5848'));ell(-58,0,7,10);fo(tc('#C8A07A'),.8);g.restore()};
    person(MEN[8],mo);
    if(drop>0){g.save();g.translate(300,706-6*19*1.5-16);g.globalAlpha*=drop;ell(-30,0,16,16);fo(tc('#C8A07A'),.7);g.restore()}
    person(MEN[11],{x:560+wD(t,10.55,40,.2),y:712,s:.5,yaw:.95,walk:{d:wD(t,10.55,40,.2),st:55},hr:[-6,-226],itemR:axeItem(0),em:BLANK,ls:1});
    // hero: hands on hips, relief
    const rel=sm(11.0,11.6,t);
    person(HERO,{x:150,y:GY,s:.62,yaw:.6,medal:'hidden',ls:1,rimC:PAL.rim,rimA:.9,hr:[-40,-150],hl:[40,-150],lean:-.04*rel,
      em:{look:[.6,-.15],smile:lerp(.05,.4,rel),brow:.3*rel,browIn:lerp(.3,0,rel),eyeOpen:lerp(1,.9,rel)},tilt:-.06*rel})}});
  smoke(80,520,3,.25);
  leaves(5,7,0,150,540,600,'#C9926F');
}
// ---------------- shot 7: night — hero scrolls the panel upward with his right finger
if(S.i===7){
  const lt=S.lt,u=S.u;setCam(lerp(282,292,u),lerp(530,520,u),1.42+u*.06,-.008);
  const s1=ease((t-12.45)/.45),s2=ease((t-13.2)/.45),scroll=150*s1+150*s2;
  const sw=Math.max(cl((t-12.45)/.45,0,1)*(1-sm(12.95,13.15,t)),cl((t-13.2)/.45,0,1)*(1-sm(13.7,13.9,t)));
  const px=212,py=372,pw=250,ph=270;
  const tipX=px+40,tipY=py+236-sw*64;
  hutInterior({night:1,candle:1,bBack:2,main:()=>{
    const HX=150,HY=1000,HSc=1.35,loc=[(tipX-24-HX)/HSc,(tipY+14-HY)/HSc];
    person(HERO,{x:HX,y:HY,s:HSc,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],medal:0,ls:1,rimC:'#FFB36B',rimA:.5,hl:[40,-215],hr:loc,
      itemR:(gg,ex,ey,an)=>{medallion(ex+2,ey+6,9,an,0,.6);g.save();g.translate(ex,ey);g.rotate(an);g.beginPath();g.roundRect(2,-4,22,8,4);fo(tc(SKIN[0]),.8);g.restore()},
      em:{look:[.7,lerp(.2,-.1,sw)],browIn:.25,smile:.05,eyeOpen:1},tilt:.04,lean:.14})}});
  layer(1,()=>{panel(px,py,pw,ph,1,'#E1C8B8',.6);
    g.save();g.beginPath();g.roundRect(px+4,py+4,pw-8,ph-8,12);g.clip();
    uiAt(px+8,py+10-scroll,.62,()=>{resPanel(0,0,378,{a:1,v:Object.assign({},V0,{wood:118})});problemsPanel(0,392,378,{a:1});resPanel(0,606,378,{a:.7,v:Object.assign({},V0,{wood:118}),rows:[1,1,1,0,0,0]})});
    g.restore();
    // scroll rail
    g.fillStyle=rgba('#E1C8B8',.25);g.fillRect(px+pw-10,py+20,3,ph-40);g.fillStyle=rgba('#E1C8B8',.85);g.fillRect(px+pw-11,py+20+scroll/600*(ph-80),5,40);
    if(sw>.05){g.strokeStyle=rgba('#FFCF9A',.5*sw);g.lineWidth=3;g.beginPath();g.moveTo(tipX,tipY);g.lineTo(tipX,tipY+60*sw);g.stroke()}
    {ptr(tipX,tipY,sw>.05?.6:0)}
  });
}
// ---------------- finishing
vignette(.5);
grain(.05);
wash('#000000',cutDip(t,[0,1.7,3.15,6.9,8.4,10.55,12.3]));
// short dip between morning and evening
wash('#000000',Math.max(0,1-Math.abs(t-5.43)/.16));
function ptr(tx,ty,pr){const hx=tx-24,hy=ty+14;segs([[hx,hy,tx,ty,7,tc(SKIN[0])]]);ell(hx,hy,10,9);fo(tc(SKIN[0]));ell(hx-5,hy+3,6,4);g.fillStyle=rgba(SKIN[1],.5);g.fill();if(pr>0){g.strokeStyle=rgba("#FFCF9A",pr);g.lineWidth=2;ell(tx,ty-2,12*(1.6-pr*.6),5*(1.6-pr*.6));g.stroke()}}
}
```

## SCENE 11
```javascript
function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function eout(u){u=cl(u,0,1);return 1-Math.pow(1-u,3)}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function blob(pts){const n=pts.length;g.beginPath();let m=[(pts[n-1][0]+pts[0][0])/2,(pts[n-1][1]+pts[0][1])/2];g.moveTo(m[0],m[1]);for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];g.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}g.closePath()}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
const NEIGH={seed:2,r:23,l1:60,l2:60,a1:46,a2:42,torso:80,neck:7,sw:72,hw:54,thigh:24,shin:18,uarm:16,farm:13,foot:22,
  skin:SKIN,hair:['#5A3F4A','#3A2A3A','#7A5A64'],hairStyle:'kerchief',kerchief:['#8E4F5E','#5E3346','#C07884'],braid:1,top:['#D9C2B0','#9C8494','#F2DCC8'],skirt:['#5E4C72','#3E3254','#7E6A92'],apron:'#CDB39C',boots:'#3A2E3E',dress:1,blush:'#D98A80'};
const ELDER={seed:3,r:25,l1:80,l2:80,a1:58,a2:54,torso:104,neck:8,sw:64,hw:46,thigh:24,shin:19,uarm:16,farm:14,foot:27,stoop:.16,
  skin:SKIN,hair:['#A9A2B4','#6F6884','#D2CCDA'],hairStyle:'hat',hat:['#4A3A55','#2E2440','#6A5878'],beard:['#A9A2B4','#6F6884','#D2CCDA'],beardLen:1.75,brows:1,top:['#5B4A6E','#3A2E4E','#7E6A90'],kaftan:1,pants:'#3B3352',boots:'#2B2338',belt:'#8A6A4A',hem:84};
const CARP={seed:4,r:24,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:70,hw:50,thigh:25,shin:20,uarm:16,farm:12,foot:27,
  skin:SKIN,hair:['#7A4E3E','#4E3236','#9A6A54'],hairStyle:'bald',beard:['#7A4E3E','#4E3236','#9A6A54'],beardLen:1.2,top:['#8C7F92','#5E5470','#B2A6B4'],rolled:1,apron:'#7A5A48',pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30};
const SMITH={seed:5,r:25,l1:74,l2:74,a1:56,a2:52,torso:100,neck:10,sw:84,hw:56,thigh:28,shin:22,uarm:19,farm:16,foot:28,
  skin:SKIN,hair:['#2E2838','#1F1A2A','#4A4058'],hairStyle:'short',beard:['#2E2838','#1F1A2A','#4A4058'],beardLen:1.45,top:['#6D6280','#4A4060','#8E84A0'],rolled:1,apron:'#4E3A40',pants:'#2E2840',boots:'#231C30',belt:'#3A2C34',hem:30};
const BOY={seed:6,r:20,l1:42,l2:42,a1:32,a2:30,torso:56,neck:5,sw:40,hw:32,thigh:16,shin:13,uarm:11,farm:10,foot:17,
  skin:SKIN,hair:['#79566A','#4E3A50','#A07A88'],hairStyle:'short',top:['#B0A0A8','#7A6A80','#D8C8C8'],pants:'#4B3463',boots:'#C98972',bare:1,belt:'#6B5050',hem:20};
const GRANNY={seed:7,r:21,l1:54,l2:54,a1:42,a2:38,torso:72,neck:5,sw:56,hw:48,thigh:20,shin:16,uarm:13,farm:11,foot:20,stoop:.42,
  skin:SKIN,hair:['#D8CFE0','#9A90A8','#F0E8F2'],hairStyle:'kerchief',kerchief:['#D8CFE0','#9A90A8','#F4ECF4'],top:['#9A8AA0','#6A5C78','#C0B0C4'],skirt:['#4A3D5C','#302844','#6A5A7E'],apron:'#8A7A90',boots:'#2E2438',dress:1};
function woman(seed,kc){return {seed,r:22,l1:62,l2:62,a1:46,a2:42,torso:82,neck:7,sw:62,hw:50,thigh:22,shin:17,uarm:15,farm:12,foot:22,skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'kerchief',kerchief:kc,top:['#C8B4AC','#8C7890','#E8D4C8'],skirt:['#6A4E6E','#46344E','#8A6E8E'],apron:'#B8A090',boots:'#3A2E3E',dress:1,blush:'#D98A80'}}
function worker(seed){const sh=[['#8C7F92','#5E5470','#B2A6B4'],['#79677F','#4E4060','#A08EA4'],['#9C8478','#6A5460','#C0A496']][seed%3];return {seed,r:23,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:66,hw:48,thigh:24,shin:19,uarm:15,farm:13,foot:26,skin:SKIN,hair:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],hairStyle:seed%2?'short':'bald',beard:seed%3===1?null:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],beardLen:1.2,top:sh,pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30}}
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function panel(x,y,w,h,a,frame,glowA){
  if(a<=0)return;
  g.save();g.globalAlpha*=a;
  if(glowA>0){g.shadowColor=rgba(frame||'#E1C8B8',.8*glowA);g.shadowBlur=24}
  g.beginPath();g.roundRect(x,y,w,h,14);g.fillStyle=rgba('#241F4A',.55);g.fill();g.shadowBlur=0;
  const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,rgba('#E1C8B8',.18));gr.addColorStop(.25,rgba('#E1C8B8',.04));gr.addColorStop(1,rgba('#6C4377',.12));g.fillStyle=gr;g.fill();
  g.strokeStyle=rgba(frame||'#E1C8B8',.9);g.lineWidth=2;g.stroke();
  g.beginPath();g.roundRect(x+5,y+5,w-10,h-10,10);g.strokeStyle=rgba(frame||'#E1C8B8',.25);g.lineWidth=1;g.stroke();
  g.restore();
}
function bar(x,y,w,h,v,col,a,blinkA){g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,h/2);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
  const vv=cl(v,0,1);if(vv>.001){g.beginPath();g.roundRect(x,y,Math.max(h,w*vv),h,h/2);const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,mixc(col,'#FFFFFF',.35));gr.addColorStop(1,col);g.fillStyle=gr;g.fill();g.shadowColor=col;g.shadowBlur=10*(blinkA||.4);g.fill()}
  g.restore()}
function ticks(x,y,w,h,n,a){g.save();g.strokeStyle=rgba('#1F2236',.45*a);g.lineWidth=1;for(let i=1;i<n;i++){const xx=x+w*i/n;g.beginPath();g.moveTo(xx,y+2);g.lineTo(xx,y+h-2);g.stroke()}g.restore()}
function icon(kind,x,y,s,a){g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha*=a;g.lineJoin='round';g.lineCap='round';const ow=2/s;
  const st=(c)=>{g.fillStyle=c;g.fill();g.strokeStyle='#1F2236';g.lineWidth=ow;g.stroke()};
  if(kind==='wood'){g.beginPath();g.roundRect(-12,-5,22,10,5);st('#A0704A');ell(10,0,4,5);st('#D8A878');g.beginPath();g.arc(10,0,2,0,7);g.strokeStyle='#8A5A3A';g.lineWidth=1;g.stroke()}
  if(kind==='iron'){g.beginPath();g.moveTo(-11,5);g.lineTo(-7,-5);g.lineTo(7,-5);g.lineTo(11,5);g.closePath();st('#8C8FA3');g.beginPath();g.moveTo(-6,-3);g.lineTo(5,-3);g.strokeStyle='#D8DAE6';g.lineWidth=1.5;g.stroke()}
  if(kind==='stone'){blob([[-10,4],[-8,-5],[0,-8],[9,-4],[11,4],[2,7]]);st('#7D7890');ell(-3,-3,3,2);g.fillStyle='#A8A2B8';g.fill()}
  if(kind==='grain'){for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*4,9);g.lineTo(i*5,-4);g.strokeStyle='#C89040';g.lineWidth=2;g.stroke();ell(i*5,-6,2.6,5,i*.3);st('#E0B060')}}
  if(kind==='food'){ell(0,1,11,8);st('#C88A50');g.strokeStyle='#8A5A3A';g.lineWidth=1.4;for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*5-2,-3);g.lineTo(i*5+2,1);g.stroke()}}
  if(kind==='happy'){ell(0,0,10,10);st('#FFCF9A');g.beginPath();g.arc(0,1,5,.3,Math.PI-.3);g.strokeStyle='#1F2236';g.lineWidth=1.6;g.stroke();ell(-3.5,-3,1.3,1.6);g.fillStyle='#1F2236';g.fill();ell(3.5,-3,1.3,1.6);g.fill()}
  if(kind==='well'){g.beginPath();g.rect(-9,-1,18,9);st('#8A6A58');g.beginPath();g.moveTo(-11,-6);g.lineTo(0,-13);g.lineTo(11,-6);g.closePath();st('#6B5A60');g.beginPath();g.moveTo(-8,-6);g.lineTo(-8,-1);g.moveTo(8,-6);g.lineTo(8,-1);g.stroke()}
  if(kind==='bench'){g.beginPath();g.rect(-11,-2,22,4);st('#A07A60');g.beginPath();g.moveTo(-8,2);g.lineTo(-8,8);g.moveTo(8,2);g.lineTo(8,8);g.strokeStyle='#1F2236';g.lineWidth=2;g.stroke();g.beginPath();g.rect(-11,-10,22,4);st('#A07A60')}
  if(kind==='roof'){g.beginPath();g.moveTo(-11,6);g.lineTo(-11,-2);g.lineTo(0,-10);g.lineTo(11,-2);g.lineTo(11,6);g.closePath();st('#7A5A68')}
  if(kind==='road'){g.beginPath();g.moveTo(-4,-9);g.lineTo(4,-9);g.lineTo(10,9);g.lineTo(-10,9);g.closePath();st('#6A5468')}
  if(kind==='axe'){g.beginPath();g.moveTo(-8,9);g.lineTo(6,-7);g.strokeStyle='#A0704A';g.lineWidth=3;g.stroke();g.beginPath();g.moveTo(2,-11);g.quadraticCurveTo(12,-10,11,0);g.lineTo(5,-5);g.closePath();st('#8C8FA3')}
  if(kind==='person'){ell(0,-5,4.5,4.5);st('#C98972');g.beginPath();g.moveTo(-7,9);g.quadraticCurveTo(-7,0,0,0);g.quadraticCurveTo(7,0,7,9);g.closePath();st('#B9A6A2')}
  if(kind==='warn'){g.beginPath();g.moveTo(0,-10);g.lineTo(10,8);g.lineTo(-10,8);g.closePath();st('#E0505A');g.fillStyle='#1F2236';g.fillRect(-1.2,-4,2.4,7);ell(0,5,1.4,1.4);g.fill()}
  g.restore()}
function scribble(x,y,w,seed,col,a){g.save();g.strokeStyle=rgba(col,a);g.lineWidth=1.8;g.lineCap='round';g.beginPath();g.moveTo(x,y);const n=Math.floor(w/7);for(let i=1;i<=n;i++){const xx=x+i*w/n,up=hash(seed+i)>.7?-7:-3;g.quadraticCurveTo(xx-w/n*.6,y+up,xx-w/n*.2,y+(hash(seed+i*2)>.5?2:0))}g.stroke();g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function toScreen(x,y,f){const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f,q=rot((x-cx)*z,(y-cy)*z,CAM.r*f);return [270+CAM.sx*f+q[0],480+CAM.sy*f+q[1]]}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function candle(x,y,s){const fl=1+.08*Math.sin(t*13)+.05*Math.sin(t*23+1)+.04*nz(t*6);g.save();g.translate(x,y);g.scale(s,s);
  ell(0,0,26,7);fo(tc('#8C8FA3'));g.beginPath();g.rect(-8,-48,16,48);const cg=g.createLinearGradient(-8,0,8,0);cg.addColorStop(0,'#C8B0A0');cg.addColorStop(1,'#F2DCC8');g.fillStyle=cg;g.fill();ol(.8);
  g.beginPath();g.moveTo(-6,-46);g.quadraticCurveTo(-9,-36,-6,-30);ol(.6);
  glow(0,-64,60*fl,'#FFB36B',.35);g.save();g.translate(0,-50);g.rotate(Math.sin(t*3)*.08);g.beginPath();g.moveTo(0,-30*fl);g.quadraticCurveTo(9,-8,0,0);g.quadraticCurveTo(-9,-8,0,-30*fl);g.fillStyle='#FFCF9A';g.fill();g.beginPath();g.moveTo(0,-18*fl);g.quadraticCurveTo(4,-5,0,0);g.quadraticCurveTo(-4,-5,0,-18*fl);g.fillStyle='#FFF4EA';g.fill();g.restore();
  g.restore();return fl}
function hutInterior(o){
  const night=op(o,'night',1),red=op(o,'red',0),cd=op(o,'candle',1);
  TINT='#241F4A';TA=.22*night;
  layer(.6,()=>{
    g.fillStyle=tc('#4A3442');g.fillRect(-700,-500,1900,1700);
    for(let y=-480;y<1100;y+=38){const lg=g.createLinearGradient(0,y,0,y+38);lg.addColorStop(0,tc('#6B4A4E'));lg.addColorStop(.5,tc('#5A3E48'));lg.addColorStop(1,tc('#3A2836'));g.fillStyle=lg;g.fillRect(-700,y+2,1900,34);g.fillStyle=rgba('#1F2236',.6);g.fillRect(-700,y,1900,3)}
    brush(-300,-200,1100,1000,'#8A6A64',31,70,.18);
    for(let i=0;i<10;i++){ell(-200+hash(i+3)*900,-100+hash(i*5)*900,6,4);g.fillStyle=rgba('#2A1E2E',.6);g.fill()}
    // okno with night sky
    g.save();g.beginPath();g.rect(70,250,140,170);const wg=g.createLinearGradient(0,250,0,420);wg.addColorStop(0,'#120F2A');wg.addColorStop(1,mixc('#4B3463','#6C4377',.4));g.fillStyle=wg;g.fill();g.clip();stars(14,9,70,250,140,120);ell(170,295,13,13);g.fillStyle='#E7DCE6';g.fill();ell(176,291,11,11);g.fillStyle='#1A1636';g.fill();g.fillStyle=rgba('#241F4A',.9);g.beginPath();g.moveTo(70,400);for(let x=70;x<=210;x+=10)g.lineTo(x,388-hash(x)*16);g.lineTo(210,420);g.lineTo(70,420);g.closePath();g.fill();g.restore();
    g.beginPath();g.rect(70,250,140,170);ol(1.2);g.strokeStyle=tc('#B9A6A2');g.lineWidth=7;g.beginPath();g.moveTo(140,250);g.lineTo(140,420);g.moveTo(70,330);g.lineTo(210,330);g.stroke();
    g.beginPath();g.moveTo(52,246);g.lineTo(140,212);g.lineTo(228,246);g.lineTo(220,256);g.lineTo(60,256);g.closePath();fo(tc('#B9A6A2'));g.beginPath();g.rect(56,420,168,12);fo(tc('#B9A6A2'));
    // embroidered towel (rushnyk) beside the okno
    const sw=Math.sin(t*.9)*2;g.beginPath();g.moveTo(232,236);g.lineTo(262,236);g.lineTo(264+sw,400);g.lineTo(234+sw,400);g.closePath();fo(tc('#E7C6AD'),.8);g.strokeStyle=tc('#A0505A');g.lineWidth=3;for(let k=0;k<3;k++){g.beginPath();g.moveTo(236+sw,372+k*9);for(let x=0;x<6;x++)g.lineTo(238+x*5+sw,(x%2?366:372)+k*9);g.stroke()}
    // shelf with clay pots
    g.beginPath();g.rect(290,236,170,10);fo(tc('#6B4A4E'));for(let i=0;i<4;i++){const px=310+i*40,ph=26+hash(i+4)*14;g.beginPath();g.moveTo(px-12,236);g.quadraticCurveTo(px-18,236-ph*.6,px-7,236-ph);g.lineTo(px+7,236-ph);g.quadraticCurveTo(px+18,236-ph*.6,px+12,236);g.closePath();fo(tc(i%2?'#8A5A50':'#7A6A70'),.8)}
    // drying herbs swaying
    for(let i=0;i<3;i++){g.save();g.translate(320+i*42,120);g.rotate(Math.sin(t*.8+i)*.06);g.strokeStyle=tc('#5A4450');g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,40);g.stroke();for(let k=0;k<6;k++){ell((k-2.5)*4,48+k%3*10,4,16,(k-2.5)*.15);g.fillStyle=tc(k%2?'#6E6A86':'#4F5470');g.fill()}g.restore()}
    // whitewashed stove at right with ember mouth
    g.beginPath();g.moveTo(430,980);g.lineTo(430,180);g.quadraticCurveTo(430,150,460,150);g.lineTo(760,150);g.lineTo(760,980);g.closePath();const sg=g.createLinearGradient(430,0,600,0);sg.addColorStop(0,tc('#9C8494'));sg.addColorStop(.3,tc('#B9A6A2'));sg.addColorStop(1,tc('#8C7890'));g.fillStyle=sg;g.fill();ol();
    brush(440,170,200,700,'#E7C6AD',41,30,.2);g.beginPath();g.moveTo(462,600);g.lineTo(462,520);g.quadraticCurveTo(500,480,538,520);g.lineTo(538,600);g.closePath();g.fillStyle='#1F1626';g.fill();ol();
    const em=.5+.3*Math.sin(t*2.1)+.2*nz(t*3);glow(500,590,70,'#FFB36B',.45*em);ell(500,592,30,7);g.fillStyle=rgba('#FFB36B',.7*em);g.fill();
  },op(o,'bBack',2));
  layer(.85,()=>{g.fillStyle=tc('#3A2836');g.fillRect(-500,860,1500,500);g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=2;for(let i=-12;i<14;i++){g.beginPath();g.moveTo(270+i*40,860);g.lineTo(270+i*90,1300);g.stroke()}},op(o,'bBack',2)*.5);
  layer(1,()=>{
    if(o.main)o.main();
    // table: worn top, long embroidered cloth hiding the legs
    g.beginPath();g.moveTo(-80,690);g.lineTo(620,690);g.lineTo(620,716);g.lineTo(-80,716);g.closePath();const tg=g.createLinearGradient(0,690,0,716);tg.addColorStop(0,tc('#8A6A64'));tg.addColorStop(1,tc('#6B4A4E'));g.fillStyle=tg;g.fill();ol();
    brush(-60,692,660,22,'#B08A7A',51,30,.3);
    g.beginPath();g.moveTo(-80,714);g.lineTo(620,714);g.lineTo(624,940);for(let x=620;x>=-80;x-=35)g.quadraticCurveTo(x-17,948+Math.sin(x+t)*2,x-35,940);g.closePath();const cg=g.createLinearGradient(0,714,0,940);cg.addColorStop(0,tc('#B9A6A2'));cg.addColorStop(1,tc('#79677F'));g.fillStyle=cg;g.fill();ol();
    g.strokeStyle=tc('#A0505A');g.lineWidth=4;g.beginPath();for(let x=-80;x<=620;x+=14)g.lineTo(x,(x/14)%2?898:910);g.stroke();g.strokeStyle=rgba(tc('#79677F'),.8);g.lineWidth=2;for(let x=-40;x<620;x+=70){g.beginPath();g.moveTo(x,720);g.quadraticCurveTo(x+8,820,x-4,936);g.stroke()}
    // clay mug at left
    g.beginPath();g.moveTo(70,700);g.lineTo(74,660);g.lineTo(112,660);g.lineTo(116,700);g.closePath();fo(tc('#8A5A50'));g.beginPath();g.arc(118,680,10,-1.2,1.2);ol(1.2);
    if(cd>0)candle(455,702,1);
    if(o.front)o.front();
  });
  layer(1.45,()=>{g.fillStyle='#1A1424';g.beginPath();g.moveTo(-300,-80);g.lineTo(900,-80);g.lineTo(900,60);g.quadraticCurveTo(300,90,-300,40);g.closePath();g.fill();g.save();g.translate(80,40);g.rotate(Math.sin(t*.7)*.05);g.strokeStyle='#2A2036';g.lineWidth=3;g.beginPath();g.moveTo(0,0);g.lineTo(0,70);g.stroke();for(let k=0;k<5;k++){ell((k-2)*6,90+k%2*12,6,24);g.fillStyle='#2A2036';g.fill()}g.restore()},4);
  // light: night blue multiply, candle warm screen, optional red menu light
  g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.35*night);g.restore();
  if(cd>0){const c=toScreen(455,640,1),f=1+.06*Math.sin(t*13)+.05*nz(t*6);lampLight(c[0],c[1],430*CAM.z*.6+180,'#FFB36B',.38*cd*f)}
  const wn=toScreen(140,330,.6);beamStatic(wn,night);
  if(red>0){g.save();g.globalCompositeOperation='multiply';wash('#E0505A',.22*red);g.restore();lampLight(380,420,520,'#E0505A',.28*red)}
  motes(18,13,0,200,540,600,'#FFE6C4',.35*cd,1.5);
}
function beamStatic(wn,night){beam(wn[0],wn[1],wn[0]+260,wn[1]+520,60,160,'#6C4377',.16*night)}
function portrait(C,x,y,r,yaw,em){g.save();g.translate(x,y);const tp=C.top.map(tc);g.beginPath();g.moveTo(-r*1.8,r*2.3);g.quadraticCurveTo(-r*1.7,r*1.0,0,r*.95);g.quadraticCurveTo(r*1.7,r*1.0,r*1.8,r*2.3);g.closePath();fo(tp[0]);segs([[0,r*.4,0,r*1.0,r*.6,tc(C.skin[0])]]);head(C,{t,em:em||{}},yaw||0,r);g.restore()}
function eyeClosed(x,y,r){g.save();g.strokeStyle='#E0505A';g.lineWidth=2.4;g.lineCap='round';g.beginPath();g.moveTo(x-r,y-2);g.quadraticCurveTo(x,y+r*.8,x+r,y-2);g.stroke();for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(x+i*r*.42,y+r*.32-Math.abs(i)*1.5);g.lineTo(x+i*r*.55,y+r*.75-Math.abs(i)*1.5);g.stroke()}g.restore()}
// ---- scene
// SCENE 11 — «Серая строка и скрытое меню» (132.3 – 146.72)
// shots: 0 medium scroll | 1 panel bottom: grey line | 2 face squint | 3 finger touch → flash, menu opens, pull back
//        4 menu header | 5 villagers list scrolls, empty bars appear | 6 face in red light | 7 two-shot, column header glows
const ST=[0,1.4,2.45,3.2,6.2,8.35,11.6,13.3];
const S=shot(t,ST),lt=S.lt;
const HX=150,GYH=1000,HS=1.35;
// UI is drawn in panel-local units (MX..MW, MY..MH) and placed beside the hero at (UX,UY) scaled by US
const MX=0,MY=0,MW=256,MH=380,MB=380,UX=214,UY=418,US=.67;
function uiT(fn,dx){g.save();g.translate(UX+(dx||0),UY);g.scale(US,US);fn();g.restore()}
function uW(x,y){return [UX+x*US,UY+y*US]}
const TF=3.62,FL=4.26; // finger touch, red flash
const RH=58,HH=70;
// ---------- helpers
function headW(o){const k=128,ln=o.lean||0;return [HX+HS*k*Math.sin(ln),GYH+HS*(o.hipY-k*Math.cos(ln))]}
function scrollMain(tt){const u=sm(0,1.85,tt);let s=150+180*u;if(tt>1.85)s+=7*Math.sin((tt-1.85)*13)*Math.exp(-(tt-1.85)*5);return s}
function pointer(gg,x,y,an,k){g.save();g.translate(x,y);g.rotate(an-.55);ell(2,0,9,7.5,0);fo(tc(SKIN[0]),.8);g.beginPath();g.roundRect(4,-3.4,15*k,6.8,3.4);fo(tc(SKIN[0]),.8);ell(4+15*k-2.5,0,2,2.2);g.fillStyle=rgba('#F2B895',.8);g.fill();g.restore()}
// main (resource) list that scrolls; returns world pos of the grey line
const MLR=[['wood',118/200,'#A0704A'],['iron',14/50,'#8C8FA3'],['stone',.4,'#7D7890'],['grain',.82,'#E0B060'],['food',.76,'#C88A50'],['happy',.47,'#FFCF9A'],['axe',15,'#8C8FA3'],['well',1,'#A07A60'],['bench',1,'#A07A60'],['roof',.35,'#7A5A68'],['road',.25,'#6A5468'],['person',86,'#B9A6A2']];
function mList(x,y,w,h,sc,a,lineA,lineR){
  if(a<=0)return;
  panel(x,y,w,h,a,'#E1C8B8',.6);
  g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,14);g.clip();
  medallion(x+34,y+36,15,0,0,.25);
  g.fillStyle=rgba('#E1C8B8',.85);g.beginPath();g.roundRect(x+62,y+26,w*.42,7,3.5);g.fill();
  g.fillStyle=rgba('#E1C8B8',.4);g.beginPath();g.roundRect(x+62,y+40,w*.26,5,2.5);g.fill();
  g.strokeStyle=rgba('#E1C8B8',.3);g.lineWidth=1;g.beginPath();g.moveTo(x+16,y+64);g.lineTo(x+w-16,y+64);g.stroke();
  g.beginPath();g.rect(x+6,y+68,w-12,h-76);g.clip();
  const bw=w-110;
  MLR.forEach((R,i)=>{const yy=y+74+i*50-sc;if(yy<y+20||yy>y+h)return;
    icon(R[0],x+34,yy+20,1.25,1);
    if(R[0]==='happy'){const sw=bw/10;for(let k=0;k<10;k++){const f=cl(R[1]*10-k,0,1);g.beginPath();g.roundRect(x+60+k*sw,yy+10,sw-4,20,4);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#FFCF9A',.4);g.lineWidth=1;g.stroke();if(f>0){g.beginPath();g.roundRect(x+60+k*sw,yy+10,Math.max(2,(sw-4)*f),20,4);g.fillStyle='#FFCF9A';g.fill()}}}
    else if(R[0]==='axe'){for(let k=0;k<R[1];k++){ell(x+66+k*(bw-10)/14,yy+20,4,4);g.fillStyle=R[2];g.fill();g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=1;g.stroke()}}
    else if(R[0]==='person'){for(let k=0;k<R[1];k++){ell(x+63+(k%29)*(bw-6)/28,yy+9+Math.floor(k/29)*11,1.8,1.8);g.fillStyle=rgba('#E1C8B8',.8);g.fill()}}
    else{bar(x+60,yy+12,bw,16,R[1],R[2],1,.4);ticks(x+60,yy+12,bw,16,10,1)}
    ell(x+w-30,yy+20,5,5);g.fillStyle=rgba(R[2],.8);g.fill()});
  // the thin grey line that was never there
  const ly=y+74+MLR.length*50-sc+18,lx0=x+24,lw=w*.66;
  if(lineA>0){g.save();g.globalAlpha*=lineA;const c=mixc('#9A9AAB','#E0505A',lineR);
    g.shadowColor=c;g.shadowBlur=4+14*lineR;g.beginPath();g.roundRect(lx0,ly-1.8,lw,3.6,1.8);g.fillStyle=rgba(c,.85);g.fill();g.shadowBlur=0;
    const sx=lx0+((t*.45)%1)*lw;const gr=g.createLinearGradient(sx-30,0,sx+30,0);gr.addColorStop(0,rgba('#FFFFFF',0));gr.addColorStop(.5,rgba('#FFFFFF',.55));gr.addColorStop(1,rgba('#FFFFFF',0));g.fillStyle=gr;g.fillRect(lx0,ly-2,lw,4);
    ell(lx0-8,ly,2.2,2.2);g.fillStyle=rgba(c,.7);g.fill();g.restore()}
  g.restore();
  return [lx0,ly];
}
// glyph for the "suggestibility" column: head profile with waves entering it
function suggIcon(cx,cy,s,gl){g.save();g.translate(cx,cy);g.scale(s,s);g.shadowColor='#E0505A';g.shadowBlur=22*gl;
  g.strokeStyle=rgba(mixc('#E0505A','#FFCF9A',gl*.5),.55+.45*gl);g.lineWidth=2;g.lineCap='round';
  g.beginPath();g.arc(6,-1,8,-2.3,2.1);g.lineTo(2,9);g.stroke();
  for(let k=0;k<3;k++){g.beginPath();g.arc(-4,-1,6+k*5,2.5,3.8);g.globalAlpha=.4+.6*cl(gl*3-k,0,1)*.8+.2;g.stroke()}
  g.restore()}
function rowCol(v){return v>=80?'#E0505A':mixc('#FFCF9A','#E0505A',cl((v-25)/60,0,1)*.75)}
// hidden-parameters menu (same layout as the library hiddenPanel) with extra controls:
// barA (bar column alpha), colGlow (column header + axis glow), bottom (grow upwards from this y)
function hMenu(x,w,o){
  const a=op(o,'a',1);if(a<=0)return;
  const open=op(o,'open',1),rows=o.rows,listH=op(o,'listH',RH*5),full=HH+listH+16;
  const h=Math.max(8,full*eout(open)),y=o.bottom-h,pu=.6+.4*Math.sin(t*4);
  panel(x,y,w,h,a,'#D8404E',.85*pu);
  g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,14);g.clip();
  const es=1+.08*Math.sin(t*3);eyeClosed(x+34,y+32,14*es);
  g.fillStyle=rgba('#E0505A',.9);g.beginPath();g.roundRect(x+62,y+22,w*.36,8,4);g.fill();g.fillStyle=rgba('#E0505A',.45);g.beginPath();g.roundRect(x+62,y+38,w*.22,5,2.5);g.fill();
  const bx=x+w*.55,bw=w*.4-14,ba=op(o,'barA',0),cg=op(o,'colGlow',0);
  if(ba>0){g.save();g.globalAlpha*=ba;suggIcon(bx+bw/2,y+32,1.1,cg);g.restore()}
  g.strokeStyle=rgba('#D8404E',.5);g.lineWidth=1;g.beginPath();g.moveTo(x+14,y+HH-8);g.lineTo(x+w-14,y+HH-8);g.stroke();
  if(cg>0){g.save();g.shadowColor='#E0505A';g.shadowBlur=16*cg;g.strokeStyle=rgba('#FF8A8A',.7*cg);g.lineWidth=2;g.beginPath();g.moveTo(bx-8,y+HH-4);g.lineTo(bx-8,y+HH+listH);g.stroke();g.beginPath();g.moveTo(bx-4,y+HH-8);g.lineTo(bx+bw+4,y+HH-8);g.stroke();g.restore()}
  g.save();g.beginPath();g.rect(x+6,y+HH,w-12,listH);g.clip();
  const sc=op(o,'scroll',0);
  rows.forEach((R,i)=>{const yy=y+HH+i*RH-sc;if(yy<y+HH-RH||yy>y+HH+listH)return;
    g.save();
    g.save();ell(x+38,yy+RH/2,20,20);g.fillStyle=rgba('#241F4A',.85);g.fill();g.clip();portrait(R.C,x+38,yy+RH/2-1,12,.25,R.em);g.restore();
    ell(x+38,yy+RH/2,20,20);g.strokeStyle=rgba('#E1C8B8',.85);g.lineWidth=1.5;g.stroke();
    scribble(x+68,yy+RH/2+4,w*(.16+hash(i+3)*.08),i*7+11,'#E1C8B8',.7);
    const rb=ba*cl((op(o,'barT',0)-i*.1)/.3,0,1);
    if(rb>0){bar(bx,yy+RH/2-7,bw,14,0,'#E0505A',rb,.5);ticks(bx,yy+RH/2-7,bw,14,10,rb);
      g.save();g.globalAlpha*=rb;g.shadowColor='#E0505A';g.shadowBlur=10*cg;g.beginPath();g.roundRect(bx,yy+RH/2-7,bw,14,7);g.strokeStyle=rgba('#E0505A',.35+.5*cg);g.lineWidth=1.2;g.stroke();g.restore()}
    g.restore()});
  g.restore();g.restore();
}
const VIL=[ELDER,CARP,NEIGH,SMITH,woman(11,['#7A5A8A','#4E3A60','#9A7AAA']),woman(12,['#A0606A','#703E4A','#C08088']),BOY,GRANNY,worker(1),worker(2),worker(3),worker(4),worker(5),worker(6)];
const ROWS=VIL.map(C=>({C}));
// ---------- hero acting
function heroPose(){
  const o={x:HX,y:GYH,s:HS,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],medal:'hidden',t,ls:1};
  const sq=sm(2.5,2.62,t)*(1-sm(TF,TF+.15,t)),rec=sm(FL,FL+.3,t);
  o.lean=.1+.1*sm(2.62,2.95,t)-.17*rec+.06*sm(8.5,10.5,t)+.09*sm(11.4,12.4,t);
  o.tilt=.12+.06*sm(2.55,2.75,t)-.16*sm(FL+.05,FL+.35,t)+.1*sm(5,6.2,t);
  // eyes: notice line, squint, shock, read, worry
  let lx=.55,ly=.3;ly=lerp(ly,.75,sm(1.9,2.05,t));ly=lerp(ly,.2,sm(FL,FL+.1,t));lx=lerp(lx,.45,sm(FL,FL+.1,t));
  if(t>8.4){const rd=sm(8.4,8.6,t)*(1-sm(10.8,11,t));ly=lerp(ly,.15+.25*Math.sin(t*5),rd)}
  if(t>11){lx=.6+.12*Math.sin(t*3.1);ly=.35+.15*nz(t*2)}
  const wor=sm(11.3,11.9,t),vn=sm(13.4,13.55,t)*(1-sm(14.1,14.4,t)*.5);
  o.em={look:[lx,ly],eyeOpen:lerp(1,.42,sq)+.35*rec*(1-sm(5,6.5,t))+.15*sm(5,6.5,t)*(1-wor)+.1*wor+.15*vn,
    brow:-.25*sq+1*rec*(1-sm(5,6.5,t))+.35*sm(5,6.5,t)*(1-wor)+.25*wor+.2*vn,browIn:.65*sq+.3*sm(5,6.5,t)+.45*wor,
    open:.4*rec*(1-sm(4.9,5.6,t))+.12*wor+.1*vn,smile:-.1-.3*wor,
    blink:(t>FL+.05&&t<FL+.17)||(t>6.9&&t<7.02)||(t>11.62&&t<11.74)?1:0};
  // right hand: scrolling swipes, hover, anticipation, touch, recoil down to the table
  const tp=[62,-234];let hr=null;
  if(t<1.75){const c=(t%.62)/.62,on=c<.62?ease(c/.62):1-ease((c-.62)/.38);hr=[71+(c<.62?0:5),-246-32*on]}
  if(t>=1.75&&t<3.25){const u=sm(1.75,2.1,t);hr=[71,lerp(-246,-262,u)+Math.sin(t*9)*.8]}
  if(t>=3.25){const back=sm(3.25,3.42,t),fwd=sm(3.42,TF,t);hr=[lerp(lerp(71,64,back),tp[0],fwd),lerp(lerp(-262,-246,back),tp[1],fwd)]}
  if(t>=FL){const r=eout((t-FL)/.45);hr=[lerp(tp[0],26,r),lerp(tp[1],-212,r)]}
  o.hr=hr;if(t<FL+.3)o.itemR=(gg,x,y,an)=>pointer(gg,x,y,an,1);
  return o;
}
const HP=heroPose(),HW=headW(HP);
const red=.7*sm(FL,FL+.8,t),cand=lerp(1,.38,sm(FL,7,t));
const menuOpen=sm(FL+.05,FL+.9,t);
function heroO(){return Object.assign({},HP,{rimC:mixc('#E1C8B8','#E0505A',red),rimA:.55+.3*red})}
function world(bb){hutInterior({night:1,red,candle:cand,bBack:bb,main:()=>person(HERO,heroO())});
  if(red>0){g.save();g.globalCompositeOperation='multiply';wash('#3A1A30',.3*red);g.restore()}}
// forearm + finger drawn again in front of the glass (clipped to the panel area), darker tint to match the night grade
function armOver(){if(!HP.itemR)return;layer(1,()=>{g.save();g.beginPath();g.rect(UX+5,585,US*MW-10,103);g.clip();
  const T0=TINT,A0=TA;TINT=mixc('#241F4A','#5A2038',red);TA=.42;person(HERO,heroO());TINT=T0;TA=A0;g.restore()})}
function ui(){
  const ma=1-sm(FL-.05,FL+.2,t);
  const L=mList(MX,MY,MW,MH,scrollMain(t),ma,sm(1.85,2.45,t)*(1-menuOpen),sm(TF,TF+.5,t));
  if(L&&t>TF&&t<FL+.4){const u=(t-TF)/.6;for(let k=0;k<2;k++){const q=cl(u-k*.25,0,1);if(q>0&&q<1){ell(MX+46,L[1],6+q*40,2+q*10);g.strokeStyle=rgba(mixc('#FFCF9A','#E0505A',q),1-q);g.lineWidth=2;g.stroke()}}}
  hMenu(MX,MW,{a:sm(FL-.02,FL+.08,t),open:menuOpen,bottom:MB,rows:ROWS,scroll:scrollList(t),barA:sm(10.9,11.1,t),barT:(t-10.95)*1.6,colGlow:sm(13.4,13.6,t)*(.8+.2*Math.sin(t*9))});
}
function scrollList(tt){return lerp(520,0,ease((tt-8.45)/2.25))*(tt<8.45?1:1)}
function glassSheen(x,y,w,h,a){g.save();g.beginPath();g.roundRect(x,y,w,h,14);g.clip();const sx=x-120+((t*.12)%1)*(w+240);g.globalCompositeOperation='screen';const gr=g.createLinearGradient(sx-60,y,sx+60,y+80);gr.addColorStop(0,rgba('#E1C8B8',0));gr.addColorStop(.5,rgba('#E1C8B8',a));gr.addColorStop(1,rgba('#E1C8B8',0));g.fillStyle=gr;g.fillRect(x,y,w,h);g.restore()}
function fgMotes(n,col,a){layer(1.5,()=>{for(let i=0;i<n;i++){const x=hash(i*3.1)*700-80+Math.sin(t*.5+i)*20,y=(hash(i*7.3)*1100+t*(8+hash(i)*14))%1100-70;ell(x,y,2+hash(i+2)*3,2+hash(i+2)*3);g.fillStyle=rgba(col,a*(.4+.6*hash(i+5)));g.fill()}},3)}
function lit(lx,ly,r,c,a){const w=uW(lx,ly),s=toScreen(w[0],w[1],1);lampLight(s[0],s[1],r,c,a)}
const MED=[250,566,1.75]; // medium two-shot framing (hero left third, panel right)
// ---------- shots
if(S.i===0){ // medium: night, scrolling the panel (continuity from scene 10)
  const u=S.u;setCam(MED[0]+4-u*6,MED[1]+4-u*6,MED[2]-.04+u*.07,-.012+u*.01);
  world(2.5);layer(1,()=>uiT(()=>{ui();glassSheen(MX,MY,MW,MH,.12)}));armOver();
  lit(128,190,320,'#C8D0FF',.1);
}
if(S.i===1){ // infographic: bottom of the panel, scroll stops, grey line fades in
  setCam(304-lt*4,626,2.95+lt*.1,.015);
  world(6);layer(1,()=>uiT(()=>{ui();glassSheen(MX,MY,MW,MH,.1)}));armOver();
  lit(110,360,260,'#C8D0FF',.06+.08*sm(1.9,2.4,t));
  fgMotes(10,'#FFE6C4',.25);
}
if(S.i===2){ // close-up: squints, leans in (eyes → head → body)
  setCam(HW[0]+18,HW[1]+12,5.0+lt*.35,-.02);
  world(8);
  layer(1,()=>{g.globalAlpha=.7;uiT(ui,42)},7);
  lampLight(480,500,420,'#C8D0FF',.16);lampLight(500,720,300,'#FFB36B',.1);
  fgMotes(8,'#FFE6C4',.3);
}
if(S.i===3){ // insert: finger touches → red flash, menu rises from the line, camera pulls back
  const pb=ease((t-FL-.05)/1.5),f0=[262,640];
  setCam(lerp(f0[0],MED[0],pb),lerp(f0[1],MED[1],pb),lerp(3.5+lt*.15,MED[2],pb),lerp(.02,0,pb));
  CAM.sx=kick(t,FL,4,.3);CAM.sy=kick(t,TF,2,.2);
  world(lerp(6,2.5,pb));layer(1,()=>uiT(()=>{ui();if(t>FL)glassSheen(MX,MB-376*menuOpen,MW,376*menuOpen,.1)}));armOver();
  lit(128,200,380,'#E0505A',.2*red);
  fgMotes(8,'#FFB0A0',.22);
}
if(S.i===4){ // infographic: header with the closed eye
  const hc=uW(112-lt*10,44);setCam(hc[0],hc[1]+52,4.0+lt*.15,-.012);
  world(6);layer(1,()=>uiT(()=>{ui();glassSheen(MX,4,MW,376,.1)}));
  lit(34,36,220,'#E0505A',.12+.06*Math.sin(t*4));
  fgMotes(10,'#FFB0A0',.25);
}
if(S.i===5){ // infographic: list of villagers scrolls, empty bars appear
  const pan=sm(10.85,11.6,t);
  setCam(lerp(292,312,pan)-lt*2,lerp(570,560,pan)+Math.sin(t*.8)*2,2.6+lt*.05,.012);
  world(5);layer(1,()=>uiT(()=>{ui();glassSheen(MX,4,MW,376,.1)}));
  fgMotes(10,'#FFB0A0',.22);
}
if(S.i===6){ // close-up: face in red light, worried
  setCam(HW[0]+16,HW[1]+10,4.6+lt*.3,.015);
  world(9);layer(1,()=>{g.globalAlpha=.7;uiT(ui,42)},7);
  lampLight(480,470,420,'#E0505A',.16+.05*Math.sin(t*4));
  fgMotes(8,'#FFB0A0',.28);
}
if(S.i===7){ // two-shot: hero leaning to the glass, column header glows on «Внушаемость»
  setCam(MED[0]+10+lt*5,MED[1]-24,MED[2]+.15+lt*.05,.01);
  CAM.sy=kick(t,13.45,2,.25);
  world(3);layer(1,()=>uiT(()=>{ui();glassSheen(MX,4,MW,376,.1)}));
  lit(200,36,240,'#E0505A',.1+.18*sm(13.4,13.6,t));
}
// ---------- finishing
const fl=Math.max(0,1-Math.abs(t-FL-.02)/.16);
wash('#E0505A',fl*.7);wash('#FFFFFF',fl*.2);
g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.1+.12*red);g.restore();
vignette(.6);grain(.05);
const cuts=ST.filter(s=>s!==ST[0]);
wash("#000000",cutDip(t,[0].concat(cuts)));
// half of the 0.13 s dip on the hard cut into scene 12
wash("#000000",.85*sm(env.duration-.065,env.duration,t));
}
```

## SCENE 12
```javascript
function(g,t,p,env){
const W=540,H=960;
const PAL={sky0:'#241F4A',sky1:'#6C4377',sky2:'#F09A6C',far:'#4B3463',ground:'#2C2140',key:'#FFB36B',rim:'#FFCF9A',out:'#1F2236'};
function cl(x,a,b){return x<a?a:x>b?b:x}
function lerp(a,b,u){return a+(b-a)*u}
function sm(a,b,x){const u=cl((x-a)/(b-a),0,1);return u*u*(3-2*u)}
function ease(u){u=cl(u,0,1);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function eout(u){u=cl(u,0,1);return 1-Math.pow(1-u,3)}
function hash(n){const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function nz(x){const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return lerp(hash(i),hash(i+1),u)*2-1}
function rot(x,y,a){const c=Math.cos(a),s=Math.sin(a);return [x*c-y*s,x*s+y*c]}
function op(o,k,d){return (o&&(k in o))?o[k]:d}
function hx(c){return [Number('0x'+c.slice(1,3)),Number('0x'+c.slice(3,5)),Number('0x'+c.slice(5,7))]}
function h2(n){return (256+Math.round(cl(n,0,255))).toString(16).slice(1)}
function mixc(a,b,u){const A=hx(a),B=hx(b);return '#'+h2(lerp(A[0],B[0],u))+h2(lerp(A[1],B[1],u))+h2(lerp(A[2],B[2],u))}
function rgba(c,a){const A=hx(c);return 'rgba('+A[0]+','+A[1]+','+A[2]+','+cl(a,0,1).toFixed(3)+')'}
function kick(t,e,amp,dur){const u=t-e;if(u<0||u>dur)return 0;return amp*Math.sin(u/dur*Math.PI*3)*(1-u/dur)}
function blink(t,seed){const per=2.4+hash(seed)*1.4,ph=((t+hash(seed+7)*per)%per+per)%per;return ph<.16?Math.sin(ph/.16*Math.PI):0}
function ik2(ax,ay,bx,by,l1,l2,px,py){const dx=bx-ax,dy=by-ay,d=Math.max(1e-3,Math.min(Math.hypot(dx,dy),l1+l2-1e-3)),a=Math.atan2(dy,dx),k=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));let j=null;for(const s of [1,-1]){const x=ax+l1*Math.cos(a+s*k),y=ay+l1*Math.sin(a+s*k),q=(x-px)**2+(y-py)**2;if(!j||q<j.q)j={x,y,q};}return {jx:j.x,jy:j.y,ex:ax+d*Math.cos(a),ey:ay+d*Math.sin(a)};}
function leg(hx,hy,fx,fy,l1,l2,face){return ik2(hx,hy,fx,fy,l1,l2,(hx+fx)/2+face*l1,(hy+fy)/2);}
function arm(sx,sy,hx,hy,l1,l2,side,face){return ik2(sx,sy,hx,hy,l1,l2,sx+side*l1*.6-face*l1*.3,sy+l1*1.1);}
function gait(t,hx,groundY,face,speed,stride,lift,ph){const c=((t*speed/stride+ph)%1+1)%1,st=.6,w=stride*st;if(c<st){const u=c/st;return {fx:hx+face*w*(.5-u),fy:groundY};}const u=(c-st)/(1-st),e=u*u*(3-2*u);return {fx:hx+face*w*(e-.5),fy:groundY-lift*Math.sin(Math.PI*u)};}
const CAM={x:270,y:480,z:1,r:0,sx:0,sy:0};
let LW=3;
let TINT='#241F4A',TA=0;
function setCam(x,y,z,r){CAM.x=x;CAM.y=y;CAM.z=z;CAM.r=r||0;CAM.sx=0;CAM.sy=0}
function layer(f,fn,blur){
  g.save();
  const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f;
  if(blur>.4)g.filter='blur('+blur.toFixed(1)+'px)';
  g.translate(270+CAM.sx*f,480+CAM.sy*f);g.rotate(CAM.r*f);g.scale(z,z);g.translate(-cx,-cy);
  LW=3/z;fn(z);g.restore();LW=3;
}
function tc(c){return TA>0?mixc(c,TINT,TA):c}
function ol(w){g.lineWidth=(w||1)*LW;g.strokeStyle=PAL.out;g.lineJoin='round';g.lineCap='round';g.stroke()}
function fo(c,w){g.fillStyle=c;g.fill();ol(w)}
function poly(pts,close){g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);if(close)g.closePath()}
function ell(x,y,rx,ry,a){g.beginPath();g.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),a||0,0,Math.PI*2)}
function blob(pts){const n=pts.length;g.beginPath();let m=[(pts[n-1][0]+pts[0][0])/2,(pts[n-1][1]+pts[0][1])/2];g.moveTo(m[0],m[1]);for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];g.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}g.closePath()}
function segs(S,noOl){g.lineCap='round';g.lineJoin='round';if(!noOl){g.strokeStyle=PAL.out;for(const s of S){g.lineWidth=s[4]+2*LW;g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}for(const s of S){g.strokeStyle=s[5];g.lineWidth=s[4];g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[2],s[3]);g.stroke()}}
function segLight(x1,y1,x2,y2,w,col,a,ls){const d=Math.hypot(x2-x1,y2-y1)||1,nx=-(y2-y1)/d,ny=(x2-x1)/d,k=(nx*ls>0?1:-1)*w*.26;g.strokeStyle=rgba(col,a);g.lineWidth=w*.3;g.lineCap='round';g.beginPath();g.moveTo(x1+nx*k,y1+ny*k);g.lineTo(x2+nx*k,y2+ny*k);g.stroke()}
function brush(x,y,w,h,col,seed,n,a){g.save();g.strokeStyle=col;g.lineCap='round';for(let i=0;i<n;i++){const px=x+hash(seed+i*3.1)*w,py=y+hash(seed+i*5.7)*h,l=6+hash(seed+i*1.3)*w*.12,an=(hash(seed+i*2.9)-.5)*.5;g.globalAlpha=a*(.4+hash(seed+i*9.1)*.6);g.lineWidth=1.5+hash(seed+i*4.4)*3;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+l*.5,py+Math.sin(an)*l*.5-2,px+l*Math.cos(an),py+l*Math.sin(an));g.stroke()}g.restore()}
const SKIN=['#C98972','#885C70','#F2B895'];
const HERO={seed:1,r:24,l1:72,l2:72,a1:54,a2:50,torso:96,neck:10,sw:62,hw:44,thigh:24,shin:19,uarm:15,farm:13,foot:26,
  skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'short',top:['#B9A6A2','#79677F','#E7C6AD'],pants:'#3B3352',boots:'#2B2338',belt:'#7A4E4A',hem:34,mole:1,collar:1,cord:'#5A4A44'};
const NEIGH={seed:2,r:23,l1:60,l2:60,a1:46,a2:42,torso:80,neck:7,sw:72,hw:54,thigh:24,shin:18,uarm:16,farm:13,foot:22,
  skin:SKIN,hair:['#5A3F4A','#3A2A3A','#7A5A64'],hairStyle:'kerchief',kerchief:['#8E4F5E','#5E3346','#C07884'],braid:1,top:['#D9C2B0','#9C8494','#F2DCC8'],skirt:['#5E4C72','#3E3254','#7E6A92'],apron:'#CDB39C',boots:'#3A2E3E',dress:1,blush:'#D98A80'};
const ELDER={seed:3,r:25,l1:80,l2:80,a1:58,a2:54,torso:104,neck:8,sw:64,hw:46,thigh:24,shin:19,uarm:16,farm:14,foot:27,stoop:.16,
  skin:SKIN,hair:['#A9A2B4','#6F6884','#D2CCDA'],hairStyle:'hat',hat:['#4A3A55','#2E2440','#6A5878'],beard:['#A9A2B4','#6F6884','#D2CCDA'],beardLen:1.75,brows:1,top:['#5B4A6E','#3A2E4E','#7E6A90'],kaftan:1,pants:'#3B3352',boots:'#2B2338',belt:'#8A6A4A',hem:84};
const CARP={seed:4,r:24,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:70,hw:50,thigh:25,shin:20,uarm:16,farm:12,foot:27,
  skin:SKIN,hair:['#7A4E3E','#4E3236','#9A6A54'],hairStyle:'bald',beard:['#7A4E3E','#4E3236','#9A6A54'],beardLen:1.2,top:['#8C7F92','#5E5470','#B2A6B4'],rolled:1,apron:'#7A5A48',pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30};
const SMITH={seed:5,r:25,l1:74,l2:74,a1:56,a2:52,torso:100,neck:10,sw:84,hw:56,thigh:28,shin:22,uarm:19,farm:16,foot:28,
  skin:SKIN,hair:['#2E2838','#1F1A2A','#4A4058'],hairStyle:'short',beard:['#2E2838','#1F1A2A','#4A4058'],beardLen:1.45,top:['#6D6280','#4A4060','#8E84A0'],rolled:1,apron:'#4E3A40',pants:'#2E2840',boots:'#231C30',belt:'#3A2C34',hem:30};
const BOY={seed:6,r:20,l1:42,l2:42,a1:32,a2:30,torso:56,neck:5,sw:40,hw:32,thigh:16,shin:13,uarm:11,farm:10,foot:17,
  skin:SKIN,hair:['#79566A','#4E3A50','#A07A88'],hairStyle:'short',top:['#B0A0A8','#7A6A80','#D8C8C8'],pants:'#4B3463',boots:'#C98972',bare:1,belt:'#6B5050',hem:20};
const GRANNY={seed:7,r:21,l1:54,l2:54,a1:42,a2:38,torso:72,neck:5,sw:56,hw:48,thigh:20,shin:16,uarm:13,farm:11,foot:20,stoop:.42,
  skin:SKIN,hair:['#D8CFE0','#9A90A8','#F0E8F2'],hairStyle:'kerchief',kerchief:['#D8CFE0','#9A90A8','#F4ECF4'],top:['#9A8AA0','#6A5C78','#C0B0C4'],skirt:['#4A3D5C','#302844','#6A5A7E'],apron:'#8A7A90',boots:'#2E2438',dress:1};
function woman(seed,kc){return {seed,r:22,l1:62,l2:62,a1:46,a2:42,torso:82,neck:7,sw:62,hw:50,thigh:22,shin:17,uarm:15,farm:12,foot:22,skin:SKIN,hair:['#49384F','#302B49','#79566A'],hairStyle:'kerchief',kerchief:kc,top:['#C8B4AC','#8C7890','#E8D4C8'],skirt:['#6A4E6E','#46344E','#8A6E8E'],apron:'#B8A090',boots:'#3A2E3E',dress:1,blush:'#D98A80'}}
function worker(seed){const sh=[['#8C7F92','#5E5470','#B2A6B4'],['#79677F','#4E4060','#A08EA4'],['#9C8478','#6A5460','#C0A496']][seed%3];return {seed,r:23,l1:72,l2:72,a1:54,a2:50,torso:94,neck:9,sw:66,hw:48,thigh:24,shin:19,uarm:15,farm:13,foot:26,skin:SKIN,hair:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],hairStyle:seed%2?'short':'bald',beard:seed%3===1?null:[['#49384F','#302B49','#79566A'],['#5A4048','#3A2A36','#7A5A60'],['#3A3046','#262036','#5A4E66']][seed%3],beardLen:1.2,top:sh,pants:'#3B3352',boots:'#2B2338',belt:'#5A4048',hem:30}}
function headPath(r,yw){g.beginPath();const sx=Math.sin(yw);for(let i=0;i<=28;i++){const a=i/28*Math.PI*2,c=Math.cos(a),s=Math.sin(a);let x=.84*r*c,y=r*s-.04*r;if(s>0){x*=1-.2*s;x+=.1*r*sx*s;y=1.03*r*s-.04*r}if(i)g.lineTo(x,y);else g.moveTo(x,y)}g.closePath()}
function head(C,o,yw,r){
  const sx=Math.sin(yw),z=Math.cos(yw),ls=op(o,'ls',1);
  const sk=C.skin.map(tc),em=o.em||{};
  const bl=Math.max(op(em,'blink',0),blink(op(o,'t',t),C.seed*3.3)),lk=op(em,'look',[0,0]);
  // back hair / braid root / kerchief back
  if(C.hairStyle==='kerchief'){const k=C.kerchief.map(tc);ell(-sx*r*.1,-.08*r,r*1.02,r*1.1);fo(k[0])}
  if(C.hairStyle==='hat'){const h=C.hair.map(tc);ell(-sx*r*.35,.05*r,r*.8,r*.75);fo(h[0])}
  // ear
  for(const sd of [-1,1]){const e=Math.cos(sd*Math.PI/2+yw);if(e>-.25&&e<.7){const ex=.86*r*Math.sin(sd*Math.PI/2+yw);ell(ex,.12*r,.16*r,.22*r);fo(sk[0]);g.beginPath();g.arc(ex,.12*r,.07*r,0,Math.PI*2);g.fillStyle=sk[1];g.fill()}}
  headPath(r,yw);g.fillStyle=sk[0];g.fill();
  g.save();headPath(r,yw);g.clip();
  const gr=g.createLinearGradient(-r*ls,0,r*ls,0);gr.addColorStop(0,rgba(sk[1],.75));gr.addColorStop(.45,rgba(sk[1],0));gr.addColorStop(.85,rgba(sk[2],.0));gr.addColorStop(1,rgba(sk[2],.7));g.fillStyle=gr;g.fillRect(-r*1.2,-r*1.2,r*2.4,r*2.4);
  if(C.blush){g.fillStyle=rgba(C.blush,.35);for(const sd of[-1,1]){const a=sd*.55+yw;if(Math.cos(a)>.2){ell(.8*r*Math.sin(a),.32*r,.17*r,.1*r);g.fill()}}}
  if(o.rimC){g.translate(-ls*r*.16,r*.04);headPath(r,yw);g.strokeStyle=rgba(o.rimC,op(o,'rimA',.85));g.lineWidth=r*.16;g.stroke()}
  g.restore();
  headPath(r,yw);ol();
  // eyes
  const bu=op(em,'brow',0),bi=op(em,'browIn',0),sh=op(em,'eyeOpen',1);
  for(const sd of [-1,1]){
    const a=sd*.4+yw,ez=Math.cos(a);if(ez<.12)continue;
    const ex=.82*r*Math.sin(a),ey=-.04*r,ew=.15*r*Math.sqrt(ez),eh=.11*r*sh*(1-bl)+.012*r;
    if(r*3/LW>30){ell(ex,ey,ew*1.05,eh*1.05);g.fillStyle='#EFE2DA';g.fill();g.save();ell(ex,ey,ew*1.05,eh*1.05);g.clip();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.62,ew*.62);g.fillStyle='#3A2A3E';g.fill();ell(ex+lk[0]*ew*.45,ey+lk[1]*eh*.35,ew*.3,ew*.3);g.fillStyle=PAL.out;g.fill();ell(ex+lk[0]*ew*.45+ew*.2,ey-eh*.3,ew*.16,ew*.16);g.fillStyle='#FFF4EA';g.fill();g.restore();
      g.beginPath();g.ellipse(ex,ey,ew*1.08,eh*1.08,0,Math.PI*1.05,Math.PI*1.95);g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW,r*.04);g.stroke();}
    else{ell(ex+lk[0]*ew*.3,ey,ew*.55,eh);g.fillStyle=PAL.out;g.fill()}
    // brow
    const by=-.27*r-bu*.09*r,inner=-sd*bi*.08*r;g.beginPath();g.moveTo(ex-sd*ew*-1.3,by+(sd>0?inner:-inner)*0+(-bi*.08*r)*0);
    const x1=ex+(sd>0?-1:1)*ew*1.2,x2=ex-(sd>0?-1:1)*ew*1.3;g.moveTo(x1,by-bi*.09*r);g.quadraticCurveTo(ex,by-.05*r,x2,by+bi*.03*r);
    g.strokeStyle=tc(C.brows?C.hair[1]:C.hair[1]);g.lineWidth=r*(C.brows?.11:.07);g.lineCap='round';g.stroke();
    if(C.mole&&sd>0){const ma=.52+yw;if(Math.cos(ma)>.25){ell(.8*r*Math.sin(ma),.14*r,.035*r,.035*r);g.fillStyle='#5E3F55';g.fill()}}
  }
  // nose
  const nx=.86*r*sx;
  if(Math.abs(sx)>.55){g.beginPath();g.moveTo(nx-sx*.05*r,-.04*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);g.fillStyle=sk[0];g.fill();g.beginPath();g.moveTo(nx-sx*.03*r,-.02*r);g.lineTo(nx+sx*.16*r,.2*r);g.lineTo(nx-sx*.02*r,.25*r);ol(.8)}
  else{g.beginPath();g.moveTo(nx*.92,-.02*r);g.lineTo(nx*.92+sx*.06*r+.03*r,.18*r);g.lineTo(nx*.92-.05*r,.22*r);g.strokeStyle=sk[1];g.lineWidth=r*.06;g.lineCap='round';g.lineJoin='round';g.stroke()}
  // mouth
  const sm_=op(em,'smile',0),mo=op(em,'open',0),mx=.8*r*Math.sin(yw*1.02),mw=.2*r*(.55+.45*z);
  if(!C.beard||C.beardLen<1.3||true){
    g.beginPath();g.moveTo(mx-mw,.5*r-sm_*.06*r);g.quadraticCurveTo(mx,.5*r+sm_*.1*r+mo*.18*r,mx+mw,.5*r-sm_*.06*r);
    if(mo>.05){g.quadraticCurveTo(mx,.5*r-mo*.05*r,mx-mw,.5*r-sm_*.06*r);g.fillStyle='#4A2238';g.fill()}
    g.strokeStyle=PAL.out;g.lineWidth=Math.max(LW*.8,r*.05);g.lineCap='round';g.stroke();
  }
  // hair
  if(C.hairStyle==='short'||C.hairStyle==='bald')hairShort(C,r,yw);
  if(C.beard)beard(C,r,yw,mo);
  if(C.hairStyle==='kerchief')kerchief(C,r,yw);
  if(C.hairStyle==='hat')hat(C,r,yw);
}
function hairShort(C,r,yw){
  const h=C.hair.map(tc),sx=Math.sin(yw),bald=C.hairStyle==='bald';
  if(bald){ // side/back band only
    g.beginPath();const bs=sx>0?-1:1;g.moveTo(bs*.86*r,-.25*r);g.quadraticCurveTo(bs*.96*r,.2*r,bs*.6*r,.42*r);g.lineTo(bs*.45*r,.1*r);g.quadraticCurveTo(bs*.55*r,-.2*r,bs*.86*r,-.25*r);fo(h[0],.8);return}
  const lY=sx>0?lerp(-.05,.45,sx):lerp(-.05,-.25,-sx),rY=sx<0?lerp(-.05,.45,-sx):lerp(-.05,-.25,sx);
  const pL=Math.PI-Math.asin(cl(lY,-1,1)),pR=Math.PI*2+Math.asin(cl(rY,-1,1));
  g.beginPath();
  for(let i=0;i<=18;i++){const a=lerp(pL,pR,i/18);const x=.92*r*Math.cos(a),y=1.06*r*Math.sin(a)-.06*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  const x0=.92*r*Math.cos(pR),y0=1.06*r*Math.sin(pR)-.06*r,x1=.92*r*Math.cos(pL),y1=1.06*r*Math.sin(pL)-.06*r;
  const fx=.84*r*sx;
  for(let i=1;i<=9;i++){const u=i/10;let x=lerp(x0,x1,u),y=lerp(y0,y1,u);const fr=Math.max(0,1-Math.abs(x-fx)/(r*.9));y=lerp(y,-.4*r,Math.min(1,fr*1.6));y+=(i%2?.13:-.02)*r*(.6+.4*hash(i+C.seed));x+=(i%2?.04:0)*r;g.lineTo(x,y)}
  g.lineTo(x1,y1);g.closePath();fo(h[0]);
  g.strokeStyle=h[1];g.lineWidth=r*.05;for(let i=0;i<4;i++){const a=lerp(pL,pR,.2+i*.18);g.beginPath();g.moveTo(.6*r*Math.cos(a),.7*r*Math.sin(a));g.quadraticCurveTo(.75*r*Math.cos(a+.15),.85*r*Math.sin(a+.1),.88*r*Math.cos(a+.25),.98*r*Math.sin(a+.2)-.06*r);g.stroke()}
  g.strokeStyle=rgba(h[2],.8);g.lineWidth=r*.07;g.beginPath();g.arc(-sx*.1*r,-.1*r,.78*r,-2.2,-1.3);g.stroke();
}
function beard(C,r,yw,mo){
  const b=C.beard.map(tc),sx=Math.sin(yw),L=C.beardLen,cx=.6*r*sx;
  g.beginPath();g.moveTo(-.8*r+sx*.25*r,.05*r);g.quadraticCurveTo(-.85*r+sx*.3*r,(L*.7)*r,cx,L*r);g.quadraticCurveTo(.85*r+sx*.3*r,(L*.7)*r,.8*r+sx*.25*r,.05*r);
  g.quadraticCurveTo(.5*r+sx*.3*r,.45*r,cx+.25*r,.42*r);g.quadraticCurveTo(cx,.32*r,cx-.25*r,.42*r);g.quadraticCurveTo(-.5*r+sx*.3*r,.45*r,-.8*r+sx*.25*r,.05*r);g.closePath();fo(b[0]);
  g.strokeStyle=b[1];g.lineWidth=r*.05;for(let i=0;i<5;i++){const x=cx+(i-2)*.2*r;g.beginPath();g.moveTo(x,.55*r);g.quadraticCurveTo(x+.05*r,(L*.75)*r,x*.8+cx*.2,(L-.15)*r);g.stroke()}
  g.strokeStyle=rgba(b[2],.7);g.lineWidth=r*.06;g.beginPath();g.moveTo(cx-.3*r,.6*r);g.quadraticCurveTo(cx-.2*r,L*.6*r,cx-.05*r,(L-.2)*r);g.stroke();
  // mouth line over beard
  g.beginPath();g.moveTo(cx-.15*r,.5*r);g.quadraticCurveTo(cx,.5*r+mo*.15*r,cx+.15*r,.5*r);g.strokeStyle=PAL.out;g.lineWidth=r*.06;g.stroke();
}
function kerchief(C,r,yw){
  const k=C.kerchief.map(tc),sx=Math.sin(yw),cx=.8*r*sx;
  g.beginPath();
  for(let i=0;i<=16;i++){const a=lerp(Math.PI*.82,Math.PI*2.18,i/16);const x=1.0*r*Math.cos(a)-sx*.06*r,y=1.08*r*Math.sin(a)-.08*r;if(i)g.lineTo(x,y);else g.moveTo(x,y)}
  for(let i=16;i>=0;i--){const a=lerp(Math.PI*.95,Math.PI*2.05,i/16);const x=.7*r*Math.cos(a)+cx*.35,y=.66*r*Math.sin(a)-.02*r;g.lineTo(x,y)}
  g.closePath();fo(k[0]);
  g.strokeStyle=k[1];g.lineWidth=r*.05;g.beginPath();g.arc(cx*.3,-.05*r,.86*r,-2.6,-.5);g.stroke();
  g.fillStyle=rgba(k[2],.6);for(let i=0;i<5;i++){const a=-2.5+i*.45;ell(.88*r*Math.cos(a)+cx*.2,.88*r*Math.sin(a)-.05*r,.05*r,.05*r);g.fill()}
  // knot under chin
  const kx=cx*.55,ky=1.0*r;ell(kx,ky,.16*r,.11*r);fo(k[0],.8);
  poly([[kx,ky],[kx-.25*r,ky+.42*r],[kx-.05*r,ky+.4*r]],1);fo(k[0],.8);poly([[kx,ky],[kx+.22*r,ky+.4*r],[kx+.04*r,ky+.42*r]],1);fo(k[1],.8);
}
function hat(C,r,yw){const h=C.hat.map(tc),sx=Math.sin(yw);g.beginPath();g.moveTo(-.98*r,-.3*r);g.quadraticCurveTo(-1.0*r-sx*.1*r,-1.35*r,-sx*.1*r,-1.4*r);g.quadraticCurveTo(1.0*r-sx*.1*r,-1.35*r,.98*r,-.3*r);g.quadraticCurveTo(0,-.45*r,-.98*r,-.3*r);g.closePath();fo(h[0]);
  g.beginPath();g.moveTo(-1.02*r,-.28*r);g.quadraticCurveTo(0,-.5*r,1.02*r,-.28*r);g.lineTo(1.0*r,-.12*r);g.quadraticCurveTo(0,-.32*r,-1.0*r,-.12*r);g.closePath();fo(h[1]);
  g.strokeStyle=rgba(h[2],.7);g.lineWidth=r*.08;g.beginPath();g.moveTo(.4*r-sx*.2*r,-1.2*r);g.quadraticCurveTo(.75*r,-1*r,.8*r,-.5*r);g.stroke()}
function medallion(x,y,R,ang,dirt,glow){
  g.save();g.translate(x,y);g.rotate(ang||0);
  if(glow>0){const gr=g.createRadialGradient(0,0,R*.3,0,0,R*3.2);gr.addColorStop(0,rgba('#FFE8C8',.55*glow));gr.addColorStop(1,rgba('#FFB36B',0));g.fillStyle=gr;g.fillRect(-R*3.3,-R*3.3,R*6.6,R*6.6)}
  const m=['#9A9AAB','#615C79','#E1C8B8'].map(tc);
  ell(0,0,R,R);fo(m[1],1);ell(0,0,R*.86,R*.86);const gr=g.createLinearGradient(-R,-R,R,R);gr.addColorStop(0,m[2]);gr.addColorStop(.5,m[0]);gr.addColorStop(1,m[1]);g.fillStyle=gr;g.fill();
  g.strokeStyle=m[1];g.lineWidth=R*.07;g.lineCap='round';g.lineJoin='round';
  // mill
  g.beginPath();g.moveTo(-R*.2,R*.12);g.lineTo(-R*.13,-R*.32);g.lineTo(R*.13,-R*.32);g.lineTo(R*.2,R*.12);g.closePath();g.stroke();
  const ba=(glow>0?t*1.5:0.3);for(let i=0;i<4;i++){const a=ba+i*Math.PI/2;g.beginPath();g.moveTo(0,-R*.36);g.lineTo(Math.cos(a)*R*.42,-R*.36+Math.sin(a)*R*.42);g.stroke()}
  // three ears
  for(let i=-1;i<=1;i++){const ex=i*R*.26,ey=R*.62;g.beginPath();g.moveTo(ex,ey);g.quadraticCurveTo(ex+i*R*.05,R*.4,ex+i*R*.08,R*.22);g.stroke();for(let k=0;k<3;k++){ell(ex+i*R*.07-(k%2?R*.04:-R*.04),R*.3+k*R*.07,R*.04,R*.06,(k%2?.5:-.5));g.fillStyle=m[1];g.fill()}}
  ell(-R*.35,-R*.4,R*.18,R*.1,-.7);g.fillStyle=rgba('#FFFFFF',.35);g.fill();
  if(dirt>0){g.save();ell(0,0,R*.98,R*.98);g.clip();g.globalAlpha=dirt;for(let i=0;i<7;i++){ell((hash(i)-.5)*R*1.3,(hash(i+9)-.5)*R*1.3,R*(.35+hash(i+3)*.4),R*(.3+hash(i+5)*.3),hash(i+2)*3);g.fillStyle=i%2?'#4A3848':'#5A4450';g.fill()}g.restore()}
  ell(0,0,R,R);ol();
  g.restore();
}
function person(C,o){
  const s=op(o,'s',1),yaw=op(o,'yaw',0),sy=Math.sin(yaw),cy=Math.cos(yaw),face=sy>.3?1:sy<-.3?-1:0;
  const tt=op(o,'t',t),ls=op(o,'ls',1);
  g.save();g.translate(o.x,o.y);g.scale(s,s);const LW0=LW;LW=LW/s;
  const sk=C.skin.map(tc),top=C.top.map(tc),pants=tc(C.pants||C.skirt[1]),boots=tc(C.boots);
  const L1=C.l1,L2=C.l2,A1=C.a1,A2=C.a2;
  const br=Math.sin(tt*2*Math.PI/3.4+C.seed)*op(o,'breath',1);
  let fr=o.fr,fl=o.fl,bob=0,swR=0,swL=0;
  const wk=o.walk;
  if(wk&&face){const st=wk.st/s,d=wk.d/s,lift=op(wk,'lift',(L1+L2)*.09);const a=gait(d,0,0,face,1,st,lift,0),b=gait(d,0,0,face,1,st,lift,.5);fr=[a.fx,a.fy];fl=[b.fx,b.fy];const c=((d/st)%1+1)%1;bob=2.5*Math.cos(4*Math.PI*c);swR=-a.fx*.55;swL=-b.fx*.55}
  const rx=-cy*C.hw*.36,lx=cy*C.hw*.36;
  if(!fr)fr=[rx*1.1+face*6,0];if(!fl)fl=[lx*1.1-face*5,0];
  const hipY=op(o,'hipY',-(.95*(L1+L2)+6))+bob+op(o,'hipDY',0),hipX=op(o,'hipX',0);
  const lean=op(o,'lean',0)+face*(C.stoop||0);
  const zR=sy,zL=-sy;
  // legs
  function legDraw(hx0,fp,z){
    const hx_=hipX+hx0,hy_=hipY,ax=fp[0],ay=fp[1]-6;
    let k;if(face)k=leg(hx_,hy_,ax,ay,L1,L2,face);else{k=ik2(hx_,hy_,ax,ay,L1,L2,(hx_+ax)/2+Math.sign(hx0||1)*L1*.25,(hy_+ay)/2);const ux=k.ex-hx_,uy=k.ey-hy_,ul=Math.hypot(ux,uy)||1,al=((k.jx-hx_)*ux+(k.jy-hy_)*uy)/ul,px=hx_+ux/ul*al,py=hy_+uy/ul*al;k.jx=px+(k.jx-px)*.3;k.jy=py+(k.jy-py)*.3}
    const bx=lerp(k.jx,k.ex,.55),by=lerp(k.jy,k.ey,.55);
    const pc=z<0?mixc(pants,PAL.out,.25):pants,bc=C.bare?(z<0?mixc(sk[0],sk[1],.4):sk[0]):(z<0?mixc(boots,PAL.out,.2):boots);
    segs([[hx_,hy_,k.jx,k.jy,C.thigh,pc],[k.jx,k.jy,bx,by,C.shin,pc],[bx,by,k.ex,k.ey,C.shin+(C.bare?-2:2),bc]]);
    if(z>=0)segLight(k.jx,k.jy,k.ex,k.ey,C.shin,'#FFCF9A',.25,ls);
    // foot
    const fl_=C.foot,lift=cl((-fp[1])/(L1*.15),0,1);g.save();g.translate(k.ex,k.ey+3);
    const fd=face||(hx0<0?-.3:.3);g.rotate(face?face*lift*.35:0);
    g.beginPath();g.moveTo(-fd*fl_*.3,-6);g.quadraticCurveTo(-fd*fl_*.4,5,-fd*fl_*.2,6);g.lineTo(fd*fl_*.75,6);g.quadraticCurveTo(fd*fl_*.85,-1,fd*fl_*.25,-5);g.closePath();fo(bc);g.restore();
    return k;
  }
  // arms
  const sc=rot(0,-C.torso-br*.8,lean);const scx=hipX+sc[0],scy=hipY+sc[1];
  const sR=rot(-cy*C.sw*.5,0,lean),sL=rot(cy*C.sw*.5,0,lean);
  function armDraw(sd,z){
    const so=sd<0?sR:sL,sx_=scx+so[0],sy_=scy+so[1]+(Math.abs(cy)<.5?3:0);
    const side=cl(Math.sign(so[0])*Math.abs(cy)*1.4,-1,1);
    let hp=sd<0?o.hr:o.hl;
    if(!hp){const sw=(sd<0?swR:swL);hp=[sx_+side*4+sw+face*2,sy_+(A1+A2)*.96+br*.5]}
    const k=arm(sx_,sy_,hp[0],hp[1],A1,A2,side,face||(sd<0?-.0:0));
    const tc_=z<0?mixc(top[0],top[1],.45):top[0];
    const fa=C.rolled?(z<0?mixc(sk[0],sk[1],.4):sk[0]):tc_;
    const wx=lerp(k.jx,k.ex,.92),wy=lerp(k.jy,k.ey,.92);
    segs([[sx_,sy_,k.jx,k.jy,C.uarm,tc_],[k.jx,k.jy,wx,wy,C.farm,fa]]);
    if(z>=0)segLight(sx_,sy_,k.jx,k.jy,C.uarm,top[2],.5,ls);
    if(C.rolled){g.strokeStyle=tc_;g.lineWidth=C.farm+3;g.beginPath();const cx_=lerp(k.jx,k.ex,.12),cy_=lerp(k.jy,k.ey,.12);g.moveTo(k.jx,k.jy);g.lineTo(cx_,cy_);g.stroke()}
    const it=sd<0?o.itemR:o.itemL,ang=Math.atan2(k.ey-k.jy,k.ex-k.jx);
    ell(k.ex,k.ey,C.farm*.5,C.farm*.55,ang);fo(z<0?mixc(sk[0],sk[1],.4):sk[0]);
    if(it){g.save();LW=LW;it(g,k.ex,k.ey,ang);g.restore()}
    return k;
  }
  const ordered=[];
  // contact shadow
  g.save();g.globalAlpha=.35*op(o,'shadowA',1);ell((fr[0]+fl[0])/2,2,C.hw*1.1+Math.abs(fr[0]-fl[0])*.5,7);g.fillStyle=PAL.out;g.fill();g.restore();
  const farArm=zR<zL?-1:1,nearArm=-farArm;
  if(face){armDraw(farArm,-1)}
  if(zR<zL){legDraw(rx,fr,-1);legDraw(lx,fl,1)}else{legDraw(lx,fl,-1);legDraw(rx,fr,1)}
  if(C.braid&&((zL<0&&face)||0))braid(C,scx,scy,lean,-1);
  torso(C,o,hipX,hipY,lean,yaw,br,top,sk);
  if(!face&&C.braid)braid(C,scx,scy,lean,1);
  // neck + head
  const ht=op(o,'tilt',0),hyaw=cl(yaw+op(o,'turn',0),-1.3,1.3);
  const hc=rot(0,-(C.torso+C.neck+C.r*.92)-br*.9,lean);const hcx=hipX+hc[0]+op(o,'headDX',0),hcy=hipY+hc[1]+op(o,'headDY',0);
  segs([[scx,scy,hcx,hcy+C.r*.6,C.r*.62,sk[0]]]);
  g.save();g.translate(hcx,hcy);g.rotate(lean*.5+ht);head(C,o,hyaw,C.r);g.restore();
  if(face&&C.braid&&zL>0)braid(C,scx,scy,lean,1);
  if(face)armDraw(nearArm,1);else{armDraw(-1,1);armDraw(1,1)}
  LW=LW0;g.restore();
}
function braid(C,scx,scy,lean,front){const h=C.hair.map(tc);const bx=scx+C.sw*.28,by=scy-C.r*.3;for(let i=0;i<7;i++){const x=bx+Math.sin(t*1.3+i*.6)*1.2*i*.3,y=by+i*11;ell(x,y,6.5-i*.3,8,(i%2?.4:-.4));fo(i%2?h[0]:h[2],.7)}ell(bx,by+80,4,6);fo(tc('#8E4F5E'),.7)}
function torso(C,o,hx,hy,lean,yaw,br,top,sk){
  const sy=Math.sin(yaw),cy=Math.abs(Math.cos(yaw)),ls=op(o,'ls',1),cloth=op(o,'cloth',0);
  const wS=C.sw*.5*(cy+.55*Math.abs(sy))+br*.6,wH=C.hw*.5*(cy+.6*Math.abs(sy)),T=C.torso,fb=sy*C.sw*.1;
  g.save();g.translate(hx,hy);const wp=rot(0,-T*.32,lean);
  if(C.dress){
    const sk_=C.skirt.map(tc),hem=-hy-16;
    const sw_=Math.sin(t*2.2+C.seed)*3+cloth*8;
    g.beginPath();g.moveTo(wp[0]-wH*1.05,wp[1]);g.quadraticCurveTo(wp[0]*.5-wH*1.6,hem*.5,-wH*1.75+sw_,hem);g.quadraticCurveTo(0,hem+8,wH*1.75+sw_,hem);g.quadraticCurveTo(wp[0]*.5+wH*1.6,hem*.5,wp[0]+wH*1.05,wp[1]);g.closePath();
    const gr=g.createLinearGradient(-wH*1.7*ls,0,wH*1.7*ls,0);gr.addColorStop(0,sk_[1]);gr.addColorStop(.6,sk_[0]);gr.addColorStop(1,sk_[2]);g.fillStyle=gr;g.fill();ol();
    g.strokeStyle=sk_[1];g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*wH*.3,-T*.15);g.quadraticCurveTo(i*wH*.5+sw_*.3,hem*.5,i*wH*.7+sw_,hem-4);g.stroke()}
    if(C.apron){g.beginPath();g.moveTo(wp[0]-wH*.6+fb,wp[1]+4);g.lineTo(wp[0]+wH*.6+fb,wp[1]+4);g.lineTo(wH*.9+fb+sw_,hem-14);g.quadraticCurveTo(fb,hem-8,-wH*.9+fb+sw_,hem-14);g.closePath();fo(tc(C.apron),.8)}
  }
  g.rotate(lean);
  // shirt / kaftan body
  const hem=C.dress?-T*.24:(C.hem||30),sw2=Math.sin(t*1.7+C.seed)*1.5+cloth*5;
  g.beginPath();g.moveTo(-wS,-T);g.quadraticCurveTo(-wS*1.08,-T*.55,-wH*.98,-T*.25);
  g.quadraticCurveTo(-wH*1.25,hem*.5,-wH*1.2+sw2,hem);g.quadraticCurveTo(fb,hem+5,wH*1.2+sw2,hem);g.quadraticCurveTo(wH*1.25,hem*.5,wH*.98,-T*.25);
  g.quadraticCurveTo(wS*1.08,-T*.55,wS,-T);g.quadraticCurveTo(fb,-T-8,-wS,-T);g.closePath();
  const gr=g.createLinearGradient(-wS*ls,0,wS*ls,0);gr.addColorStop(0,top[1]);gr.addColorStop(.5,top[0]);gr.addColorStop(.9,top[0]);gr.addColorStop(1,top[2]);g.fillStyle=gr;g.fill();ol();
  g.strokeStyle=top[1];g.lineWidth=2;g.lineCap='round';
  for(let i=0;i<3;i++){const x=(i-1)*wH*.55+fb;g.beginPath();g.moveTo(x,-T*.2);g.quadraticCurveTo(x+sw2,hem*.4,x+sw2*1.5,hem-3);g.stroke()}
  g.beginPath();g.moveTo(-wS*.7,-T*.92);g.quadraticCurveTo(-wS*.3,-T*.6,-wS*.55,-T*.4);g.stroke();
  if(C.collar){g.strokeStyle=top[1];g.lineWidth=2.4;g.beginPath();g.moveTo(fb+wS*.18,-T*.98);g.lineTo(fb+wS*.32,-T*.72);g.stroke();g.strokeStyle=tc('#7A4E4A');g.lineWidth=2;g.beginPath();g.moveTo(fb-wS*.35,-T*.99);g.quadraticCurveTo(fb,-T*.9,fb+wS*.35,-T*.99);g.stroke()}
  if(C.apron&&!C.dress){g.beginPath();g.moveTo(-wS*.55+fb,-T*.8);g.lineTo(wS*.55+fb,-T*.8);g.lineTo(wH*.95+fb+sw2,hem+18);g.lineTo(-wH*.95+fb+sw2,hem+18);g.closePath();fo(tc(C.apron),.9);g.strokeStyle=rgba('#FFCF9A',.18);g.lineWidth=3;g.beginPath();g.moveTo(-wS*.3+fb,-T*.7);g.lineTo(-wH*.5+fb,hem+10);g.stroke()}
  // belt with knot on the character's left hip
  if(C.belt&&!C.dress){const bt=tc(C.belt);g.beginPath();g.moveTo(-wH*1.02,-T*.08);g.quadraticCurveTo(fb,-T*.03,wH*1.02,-T*.08);g.lineTo(wH*1.02,-T*.08+7);g.quadraticCurveTo(fb,-T*.03+7,-wH*1.02,-T*.08+7);g.closePath();fo(bt,.8);
    const kz=Math.cos(Math.PI/2+yaw);if(kz>-.2){const kx=wH*.95*Math.sin(Math.PI/2+yaw);ell(kx,-T*.05,5,4);fo(bt,.8);poly([[kx,-T*.05],[kx-3+sw2,-T*.05+20],[kx+2+sw2,-T*.05+19]],1);fo(bt,.7)}}
  // medallion on chest or hidden cord
  if(o.medal==='chest'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.3,-T);g.quadraticCurveTo(fb,-T*.6,fb+wS*.3,-T);g.stroke();medallion(fb,-T*.66,8,0,0,0)}
  if(o.medal==='hidden'){g.strokeStyle=tc(C.cord||'#5A4A44');g.lineWidth=1.6;g.beginPath();g.moveTo(fb-wS*.28,-T-1);g.quadraticCurveTo(fb-wS*.1,-T*.9,fb,-T*.88);g.moveTo(fb+wS*.28,-T-1);g.quadraticCurveTo(fb+wS*.1,-T*.9,fb,-T*.88);g.stroke();ell(fb,-T*.62,6,6);g.fillStyle=rgba(top[1],.5);g.fill()}
  if(o.rimC){g.save();g.beginPath();g.moveTo(ls*wS,-T);g.quadraticCurveTo(ls*wS*1.08,-T*.55,ls*wH*.98,-T*.25);g.strokeStyle=rgba(o.rimC,.6*op(o,'rimA',.85));g.lineWidth=4;g.stroke();g.restore()}
  g.restore();
}
function glow(x,y,r,c,a){const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
function motes(n,seed,x0,y0,w,h,col,a,sz){for(let i=0;i<n;i++){const ph=hash(seed+i),x=x0+((hash(seed+i*3)*w+Math.sin(t*.5+ph*9)*12+t*4*(ph-.5))%w+w)%w,y=y0+((hash(seed+i*5)*h-t*(4+ph*8))%h+h)%h;g.fillStyle=rgba(col,a*(.4+.6*Math.sin(t*2+ph*20)**2));ell(x,y,(sz||1.6)*(.6+ph),(sz||1.6)*(.6+ph));g.fill()}}
function panel(x,y,w,h,a,frame,glowA){
  if(a<=0)return;
  g.save();g.globalAlpha*=a;
  if(glowA>0){g.shadowColor=rgba(frame||'#E1C8B8',.8*glowA);g.shadowBlur=24}
  g.beginPath();g.roundRect(x,y,w,h,14);g.fillStyle=rgba('#241F4A',.55);g.fill();g.shadowBlur=0;
  const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,rgba('#E1C8B8',.18));gr.addColorStop(.25,rgba('#E1C8B8',.04));gr.addColorStop(1,rgba('#6C4377',.12));g.fillStyle=gr;g.fill();
  g.strokeStyle=rgba(frame||'#E1C8B8',.9);g.lineWidth=2;g.stroke();
  g.beginPath();g.roundRect(x+5,y+5,w-10,h-10,10);g.strokeStyle=rgba(frame||'#E1C8B8',.25);g.lineWidth=1;g.stroke();
  g.restore();
}
function bar(x,y,w,h,v,col,a,blinkA){g.save();g.globalAlpha*=a;g.beginPath();g.roundRect(x,y,w,h,h/2);g.fillStyle=rgba('#1F2236',.6);g.fill();g.strokeStyle=rgba('#E1C8B8',.35);g.lineWidth=1;g.stroke();
  const vv=cl(v,0,1);if(vv>.001){g.beginPath();g.roundRect(x,y,Math.max(h,w*vv),h,h/2);const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,mixc(col,'#FFFFFF',.35));gr.addColorStop(1,col);g.fillStyle=gr;g.fill();g.shadowColor=col;g.shadowBlur=10*(blinkA||.4);g.fill()}
  g.restore()}
function ticks(x,y,w,h,n,a){g.save();g.strokeStyle=rgba('#1F2236',.45*a);g.lineWidth=1;for(let i=1;i<n;i++){const xx=x+w*i/n;g.beginPath();g.moveTo(xx,y+2);g.lineTo(xx,y+h-2);g.stroke()}g.restore()}
function icon(kind,x,y,s,a){g.save();g.translate(x,y);g.scale(s,s);g.globalAlpha*=a;g.lineJoin='round';g.lineCap='round';const ow=2/s;
  const st=(c)=>{g.fillStyle=c;g.fill();g.strokeStyle='#1F2236';g.lineWidth=ow;g.stroke()};
  if(kind==='wood'){g.beginPath();g.roundRect(-12,-5,22,10,5);st('#A0704A');ell(10,0,4,5);st('#D8A878');g.beginPath();g.arc(10,0,2,0,7);g.strokeStyle='#8A5A3A';g.lineWidth=1;g.stroke()}
  if(kind==='iron'){g.beginPath();g.moveTo(-11,5);g.lineTo(-7,-5);g.lineTo(7,-5);g.lineTo(11,5);g.closePath();st('#8C8FA3');g.beginPath();g.moveTo(-6,-3);g.lineTo(5,-3);g.strokeStyle='#D8DAE6';g.lineWidth=1.5;g.stroke()}
  if(kind==='stone'){blob([[-10,4],[-8,-5],[0,-8],[9,-4],[11,4],[2,7]]);st('#7D7890');ell(-3,-3,3,2);g.fillStyle='#A8A2B8';g.fill()}
  if(kind==='grain'){for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*4,9);g.lineTo(i*5,-4);g.strokeStyle='#C89040';g.lineWidth=2;g.stroke();ell(i*5,-6,2.6,5,i*.3);st('#E0B060')}}
  if(kind==='food'){ell(0,1,11,8);st('#C88A50');g.strokeStyle='#8A5A3A';g.lineWidth=1.4;for(let i=-1;i<=1;i++){g.beginPath();g.moveTo(i*5-2,-3);g.lineTo(i*5+2,1);g.stroke()}}
  if(kind==='happy'){ell(0,0,10,10);st('#FFCF9A');g.beginPath();g.arc(0,1,5,.3,Math.PI-.3);g.strokeStyle='#1F2236';g.lineWidth=1.6;g.stroke();ell(-3.5,-3,1.3,1.6);g.fillStyle='#1F2236';g.fill();ell(3.5,-3,1.3,1.6);g.fill()}
  if(kind==='well'){g.beginPath();g.rect(-9,-1,18,9);st('#8A6A58');g.beginPath();g.moveTo(-11,-6);g.lineTo(0,-13);g.lineTo(11,-6);g.closePath();st('#6B5A60');g.beginPath();g.moveTo(-8,-6);g.lineTo(-8,-1);g.moveTo(8,-6);g.lineTo(8,-1);g.stroke()}
  if(kind==='bench'){g.beginPath();g.rect(-11,-2,22,4);st('#A07A60');g.beginPath();g.moveTo(-8,2);g.lineTo(-8,8);g.moveTo(8,2);g.lineTo(8,8);g.strokeStyle='#1F2236';g.lineWidth=2;g.stroke();g.beginPath();g.rect(-11,-10,22,4);st('#A07A60')}
  if(kind==='roof'){g.beginPath();g.moveTo(-11,6);g.lineTo(-11,-2);g.lineTo(0,-10);g.lineTo(11,-2);g.lineTo(11,6);g.closePath();st('#7A5A68')}
  if(kind==='road'){g.beginPath();g.moveTo(-4,-9);g.lineTo(4,-9);g.lineTo(10,9);g.lineTo(-10,9);g.closePath();st('#6A5468')}
  if(kind==='axe'){g.beginPath();g.moveTo(-8,9);g.lineTo(6,-7);g.strokeStyle='#A0704A';g.lineWidth=3;g.stroke();g.beginPath();g.moveTo(2,-11);g.quadraticCurveTo(12,-10,11,0);g.lineTo(5,-5);g.closePath();st('#8C8FA3')}
  if(kind==='person'){ell(0,-5,4.5,4.5);st('#C98972');g.beginPath();g.moveTo(-7,9);g.quadraticCurveTo(-7,0,0,0);g.quadraticCurveTo(7,0,7,9);g.closePath();st('#B9A6A2')}
  if(kind==='warn'){g.beginPath();g.moveTo(0,-10);g.lineTo(10,8);g.lineTo(-10,8);g.closePath();st('#E0505A');g.fillStyle='#1F2236';g.fillRect(-1.2,-4,2.4,7);ell(0,5,1.4,1.4);g.fill()}
  g.restore()}
function scribble(x,y,w,seed,col,a){g.save();g.strokeStyle=rgba(col,a);g.lineWidth=1.8;g.lineCap='round';g.beginPath();g.moveTo(x,y);const n=Math.floor(w/7);for(let i=1;i<=n;i++){const xx=x+i*w/n,up=hash(seed+i)>.7?-7:-3;g.quadraticCurveTo(xx-w/n*.6,y+up,xx-w/n*.2,y+(hash(seed+i*2)>.5?2:0))}g.stroke();g.restore()}
function vignette(a){const gr=g.createRadialGradient(270,480,220,270,480,640);gr.addColorStop(0,'rgba(31,34,54,0)');gr.addColorStop(1,'rgba(31,34,54,'+a+')');g.fillStyle=gr;g.fillRect(0,0,W,H)}
function wash(c,a,mode){if(a<=0)return;g.save();g.globalCompositeOperation=mode||'source-over';g.fillStyle=rgba(c,a);g.fillRect(0,0,W,H);g.restore()}
function lampLight(x,y,r,c,a){g.save();g.globalCompositeOperation='screen';glow(x,y,r,c,a);g.restore()}
function beam(x1,y1,x2,y2,w1,w2,c,a){g.save();g.globalCompositeOperation='screen';const gr=g.createLinearGradient(x1,y1,x2,y2);gr.addColorStop(0,rgba(c,a));gr.addColorStop(1,rgba(c,0));g.fillStyle=gr;const d=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/d,ny=(x2-x1)/d;g.beginPath();g.moveTo(x1+nx*w1,y1+ny*w1);g.lineTo(x2+nx*w2,y2+ny*w2);g.lineTo(x2-nx*w2,y2-ny*w2);g.lineTo(x1-nx*w1,y1-ny*w1);g.closePath();g.fill();g.restore()}
function grain(a){g.save();g.globalAlpha=a;for(let i=0;i<70;i++){const x=hash(i+Math.floor(t*12)*.37)*W,y=hash(i*1.7+Math.floor(t*12)*.53)*H;g.fillStyle=i%2?'#FFCF9A':'#1F2236';g.fillRect(x,y,1.5,1.5)}g.restore()}
function shot(t,st){let i=0;while(i+1<st.length&&t>=st[i+1])i++;const e=i+1<st.length?st[i+1]:env.duration;return {i,lt:t-st[i],d:e-st[i],u:(t-st[i])/(e-st[i])}}
function cutDip(t,st){let a=0;for(let i=1;i<st.length;i++){const d=Math.abs(t-st[i]);if(d<.065)a=Math.max(a,1-d/.065)}return a*.85}
function toScreen(x,y,f){const z=1+(CAM.z-1)*f,cx=270+(CAM.x-270)*f,cy=480+(CAM.y-480)*f,q=rot((x-cx)*z,(y-cy)*z,CAM.r*f);return [270+CAM.sx*f+q[0],480+CAM.sy*f+q[1]]}
function stars(n,seed,x0,y0,w,h){for(let i=0;i<n;i++){const a=.35+.65*Math.abs(Math.sin(t*1.3+i*1.7));g.fillStyle=rgba('#F2E6F0',a);const s=hash(seed+i*3)>.85?2.4:1.4;g.fillRect(x0+hash(seed+i)*w,y0+hash(seed+i*2)*h,s,s)}}
function candle(x,y,s){const fl=1+.08*Math.sin(t*13)+.05*Math.sin(t*23+1)+.04*nz(t*6);g.save();g.translate(x,y);g.scale(s,s);
  ell(0,0,26,7);fo(tc('#8C8FA3'));g.beginPath();g.rect(-8,-48,16,48);const cg=g.createLinearGradient(-8,0,8,0);cg.addColorStop(0,'#C8B0A0');cg.addColorStop(1,'#F2DCC8');g.fillStyle=cg;g.fill();ol(.8);
  g.beginPath();g.moveTo(-6,-46);g.quadraticCurveTo(-9,-36,-6,-30);ol(.6);
  glow(0,-64,60*fl,'#FFB36B',.35);g.save();g.translate(0,-50);g.rotate(Math.sin(t*3)*.08);g.beginPath();g.moveTo(0,-30*fl);g.quadraticCurveTo(9,-8,0,0);g.quadraticCurveTo(-9,-8,0,-30*fl);g.fillStyle='#FFCF9A';g.fill();g.beginPath();g.moveTo(0,-18*fl);g.quadraticCurveTo(4,-5,0,0);g.quadraticCurveTo(-4,-5,0,-18*fl);g.fillStyle='#FFF4EA';g.fill();g.restore();
  g.restore();return fl}
function hutInterior(o){
  const night=op(o,'night',1),red=op(o,'red',0),cd=op(o,'candle',1);
  TINT='#241F4A';TA=.22*night;
  layer(.6,()=>{
    g.fillStyle=tc('#4A3442');g.fillRect(-700,-500,1900,1700);
    for(let y=-480;y<1100;y+=38){const lg=g.createLinearGradient(0,y,0,y+38);lg.addColorStop(0,tc('#6B4A4E'));lg.addColorStop(.5,tc('#5A3E48'));lg.addColorStop(1,tc('#3A2836'));g.fillStyle=lg;g.fillRect(-700,y+2,1900,34);g.fillStyle=rgba('#1F2236',.6);g.fillRect(-700,y,1900,3)}
    brush(-300,-200,1100,1000,'#8A6A64',31,70,.18);
    for(let i=0;i<10;i++){ell(-200+hash(i+3)*900,-100+hash(i*5)*900,6,4);g.fillStyle=rgba('#2A1E2E',.6);g.fill()}
    // okno with night sky
    g.save();g.beginPath();g.rect(70,250,140,170);const wg=g.createLinearGradient(0,250,0,420);wg.addColorStop(0,'#120F2A');wg.addColorStop(1,mixc('#4B3463','#6C4377',.4));g.fillStyle=wg;g.fill();g.clip();stars(14,9,70,250,140,120);ell(170,295,13,13);g.fillStyle='#E7DCE6';g.fill();ell(176,291,11,11);g.fillStyle='#1A1636';g.fill();g.fillStyle=rgba('#241F4A',.9);g.beginPath();g.moveTo(70,400);for(let x=70;x<=210;x+=10)g.lineTo(x,388-hash(x)*16);g.lineTo(210,420);g.lineTo(70,420);g.closePath();g.fill();g.restore();
    g.beginPath();g.rect(70,250,140,170);ol(1.2);g.strokeStyle=tc('#B9A6A2');g.lineWidth=7;g.beginPath();g.moveTo(140,250);g.lineTo(140,420);g.moveTo(70,330);g.lineTo(210,330);g.stroke();
    g.beginPath();g.moveTo(52,246);g.lineTo(140,212);g.lineTo(228,246);g.lineTo(220,256);g.lineTo(60,256);g.closePath();fo(tc('#B9A6A2'));g.beginPath();g.rect(56,420,168,12);fo(tc('#B9A6A2'));
    // embroidered towel (rushnyk) beside the okno
    const sw=Math.sin(t*.9)*2;g.beginPath();g.moveTo(232,236);g.lineTo(262,236);g.lineTo(264+sw,400);g.lineTo(234+sw,400);g.closePath();fo(tc('#E7C6AD'),.8);g.strokeStyle=tc('#A0505A');g.lineWidth=3;for(let k=0;k<3;k++){g.beginPath();g.moveTo(236+sw,372+k*9);for(let x=0;x<6;x++)g.lineTo(238+x*5+sw,(x%2?366:372)+k*9);g.stroke()}
    // shelf with clay pots
    g.beginPath();g.rect(290,236,170,10);fo(tc('#6B4A4E'));for(let i=0;i<4;i++){const px=310+i*40,ph=26+hash(i+4)*14;g.beginPath();g.moveTo(px-12,236);g.quadraticCurveTo(px-18,236-ph*.6,px-7,236-ph);g.lineTo(px+7,236-ph);g.quadraticCurveTo(px+18,236-ph*.6,px+12,236);g.closePath();fo(tc(i%2?'#8A5A50':'#7A6A70'),.8)}
    // drying herbs swaying
    for(let i=0;i<3;i++){g.save();g.translate(320+i*42,120);g.rotate(Math.sin(t*.8+i)*.06);g.strokeStyle=tc('#5A4450');g.lineWidth=2;g.beginPath();g.moveTo(0,0);g.lineTo(0,40);g.stroke();for(let k=0;k<6;k++){ell((k-2.5)*4,48+k%3*10,4,16,(k-2.5)*.15);g.fillStyle=tc(k%2?'#6E6A86':'#4F5470');g.fill()}g.restore()}
    // whitewashed stove at right with ember mouth
    g.beginPath();g.moveTo(430,980);g.lineTo(430,180);g.quadraticCurveTo(430,150,460,150);g.lineTo(760,150);g.lineTo(760,980);g.closePath();const sg=g.createLinearGradient(430,0,600,0);sg.addColorStop(0,tc('#9C8494'));sg.addColorStop(.3,tc('#B9A6A2'));sg.addColorStop(1,tc('#8C7890'));g.fillStyle=sg;g.fill();ol();
    brush(440,170,200,700,'#E7C6AD',41,30,.2);g.beginPath();g.moveTo(462,600);g.lineTo(462,520);g.quadraticCurveTo(500,480,538,520);g.lineTo(538,600);g.closePath();g.fillStyle='#1F1626';g.fill();ol();
    const em=.5+.3*Math.sin(t*2.1)+.2*nz(t*3);glow(500,590,70,'#FFB36B',.45*em);ell(500,592,30,7);g.fillStyle=rgba('#FFB36B',.7*em);g.fill();
  },op(o,'bBack',2));
  layer(.85,()=>{g.fillStyle=tc('#3A2836');g.fillRect(-500,860,1500,500);g.strokeStyle=rgba('#1F2236',.6);g.lineWidth=2;for(let i=-12;i<14;i++){g.beginPath();g.moveTo(270+i*40,860);g.lineTo(270+i*90,1300);g.stroke()}},op(o,'bBack',2)*.5);
  layer(1,()=>{
    if(o.main)o.main();
    // table: worn top, long embroidered cloth hiding the legs
    g.beginPath();g.moveTo(-80,690);g.lineTo(620,690);g.lineTo(620,716);g.lineTo(-80,716);g.closePath();const tg=g.createLinearGradient(0,690,0,716);tg.addColorStop(0,tc('#8A6A64'));tg.addColorStop(1,tc('#6B4A4E'));g.fillStyle=tg;g.fill();ol();
    brush(-60,692,660,22,'#B08A7A',51,30,.3);
    g.beginPath();g.moveTo(-80,714);g.lineTo(620,714);g.lineTo(624,940);for(let x=620;x>=-80;x-=35)g.quadraticCurveTo(x-17,948+Math.sin(x+t)*2,x-35,940);g.closePath();const cg=g.createLinearGradient(0,714,0,940);cg.addColorStop(0,tc('#B9A6A2'));cg.addColorStop(1,tc('#79677F'));g.fillStyle=cg;g.fill();ol();
    g.strokeStyle=tc('#A0505A');g.lineWidth=4;g.beginPath();for(let x=-80;x<=620;x+=14)g.lineTo(x,(x/14)%2?898:910);g.stroke();g.strokeStyle=rgba(tc('#79677F'),.8);g.lineWidth=2;for(let x=-40;x<620;x+=70){g.beginPath();g.moveTo(x,720);g.quadraticCurveTo(x+8,820,x-4,936);g.stroke()}
    // clay mug at left
    g.beginPath();g.moveTo(70,700);g.lineTo(74,660);g.lineTo(112,660);g.lineTo(116,700);g.closePath();fo(tc('#8A5A50'));g.beginPath();g.arc(118,680,10,-1.2,1.2);ol(1.2);
    if(cd>0)candle(455,702,1);
    if(o.front)o.front();
  });
  layer(1.45,()=>{g.fillStyle='#1A1424';g.beginPath();g.moveTo(-300,-80);g.lineTo(900,-80);g.lineTo(900,60);g.quadraticCurveTo(300,90,-300,40);g.closePath();g.fill();g.save();g.translate(80,40);g.rotate(Math.sin(t*.7)*.05);g.strokeStyle='#2A2036';g.lineWidth=3;g.beginPath();g.moveTo(0,0);g.lineTo(0,70);g.stroke();for(let k=0;k<5;k++){ell((k-2)*6,90+k%2*12,6,24);g.fillStyle='#2A2036';g.fill()}g.restore()},4);
  // light: night blue multiply, candle warm screen, optional red menu light
  g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.35*night);g.restore();
  if(cd>0){const c=toScreen(455,640,1),f=1+.06*Math.sin(t*13)+.05*nz(t*6);lampLight(c[0],c[1],430*CAM.z*.6+180,'#FFB36B',.38*cd*f)}
  const wn=toScreen(140,330,.6);beamStatic(wn,night);
  if(red>0){g.save();g.globalCompositeOperation='multiply';wash('#E0505A',.22*red);g.restore();lampLight(380,420,520,'#E0505A',.28*red)}
  motes(18,13,0,200,540,600,'#FFE6C4',.35*cd,1.5);
}
function beamStatic(wn,night){beam(wn[0],wn[1],wn[0]+260,wn[1]+520,60,160,'#6C4377',.16*night)}
function portrait(C,x,y,r,yaw,em){g.save();g.translate(x,y);const tp=C.top.map(tc);g.beginPath();g.moveTo(-r*1.8,r*2.3);g.quadraticCurveTo(-r*1.7,r*1.0,0,r*.95);g.quadraticCurveTo(r*1.7,r*1.0,r*1.8,r*2.3);g.closePath();fo(tp[0]);segs([[0,r*.4,0,r*1.0,r*.6,tc(C.skin[0])]]);head(C,{t,em:em||{}},yaw||0,r);g.restore()}
function eyeClosed(x,y,r){g.save();g.strokeStyle='#E0505A';g.lineWidth=2.4;g.lineCap='round';g.beginPath();g.moveTo(x-r,y-2);g.quadraticCurveTo(x,y+r*.8,x+r,y-2);g.stroke();for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(x+i*r*.42,y+r*.32-Math.abs(i)*1.5);g.lineTo(x+i*r*.55,y+r*.75-Math.abs(i)*1.5);g.stroke()}g.restore()}
// ---- scene
// SCENE 12 — «Внушаемость: 0. Лимит влияния: 83» (146.72 – 161.64), finale
// shots: 0 list: elder 12, carpenter 9 | 1 neighbour 87 (red) | 2 two-shot: list scrolls to hero's blinking row
//        3 hero's row: suggestibility 0 | 4 ghost of the previous manager dissolves, warn | 5 fear, hand to medallion, warn pulses
//        6 tilt down: limit button lights up | 7 close-up: 83 of 100, hero looks into the camera, fade to black
const ST=[0,2.85,4.15,6.65,8.3,10.0,11.85,12.75];
const S=shot(t,ST),lt=S.lt,D=env.duration;
const HX=150,GYH=1000,HS=1.35;
const MW=256,UX=214,UY=418,US=.67,TOP=4,RH=58,HH=70,LISTH=RH*5;
function uiT(fn,dx){g.save();g.translate(UX+(dx||0),UY);g.scale(US,US);fn();g.restore()}
function uW(x,y){return [UX+x*US,UY+y*US]}
// spoken numbers (scene-local seconds)
const T12=1.3,T9=2.2,T87=3.62,TZ=7.7,TG=8.45,TR=10.05,TB=12.0,T83=13.15,T100=14.05,TEYE=13.9;
// ---------- helpers
function headW(o){const k=128,ln=o.lean||0;return [HX+HS*k*Math.sin(ln),GYH+HS*(o.hipY-k*Math.cos(ln))]}
function suggIcon(cx,cy,s,gl){g.save();g.translate(cx,cy);g.scale(s,s);g.shadowColor='#E0505A';g.shadowBlur=22*gl;
  g.strokeStyle=rgba(mixc('#E0505A','#FFCF9A',gl*.5),.55+.45*gl);g.lineWidth=2;g.lineCap='round';
  g.beginPath();g.arc(6,-1,8,-2.3,2.1);g.lineTo(2,9);g.stroke();
  for(let k=0;k<3;k++){g.beginPath();g.arc(-4,-1,6+k*5,2.5,3.8);g.globalAlpha=.4+.6*cl(gl*3-k,0,1)*.8+.2;g.stroke()}
  g.restore()}
// exact-width fill (the library bar clamps tiny values to a full circle, which would make 9 and 12 look equal)
function fillW(x,y,w,h,col,gl){if(w<.5)return;g.save();g.beginPath();g.roundRect(x,y,w,h,Math.min(h/2,w/2));const gr=g.createLinearGradient(x,y,x,y+h);gr.addColorStop(0,mixc(col,'#FFFFFF',.35));gr.addColorStop(1,col);g.fillStyle=gr;g.shadowColor=col;g.shadowBlur=10*gl;g.fill();g.restore()}
function rowCol(v){return v>=80?'#E0505A':mixc('#FFCF9A','#E0505A',cl((v-25)/60,0,1)*.75)}
// red limit bar with 10 ticks and a gold cap marker at 100; over>0 spills past the cap
function limBar(x,y,w,h,v,gl,capF,over){
  bar(x,y,w,h,v,'#E0505A',1,gl);ticks(x,y,w,h,10,1);
  if(over>0){g.save();g.shadowColor='#E0505A';g.shadowBlur=14;g.fillStyle='#FF6A70';g.beginPath();g.moveTo(x+w-4,y);for(let k=0;k<=4;k++)g.lineTo(x+w+over*(10+(k%2)*8)*(1-k/5),y+h*k/4);g.lineTo(x+w-4,y+h);g.closePath();g.fill();g.restore()}
  g.save();g.shadowColor='#FFCF9A';g.shadowBlur=6+18*capF;g.fillStyle=mixc('#E1A060','#FFF0C8',capF);g.fillRect(x+w-1.5,y-6-capF*3,3,h+12+capF*6);g.restore()}
// the "influence limit" button
function limitBtn(x,y,w,la,v,gl,capF){if(la<=0)return;g.save();g.globalAlpha*=la;
  g.save();g.shadowColor='#E0505A';g.shadowBlur=26*gl;g.beginPath();g.roundRect(x,y,w,58,16);g.fillStyle=rgba(mixc('#2A1A2E','#4A1E30',gl),.9);g.fill();g.strokeStyle=rgba('#E0505A',.35+.65*gl);g.lineWidth=2.5;g.stroke();g.restore();
  // medallion-crown glyph: the manager's mark
  medallion(x+28,y+29,13,0,0,.35*gl);
  limBar(x+54,y+20,w-84,18,v,.3+.7*gl,capF,0);g.restore()}
// ghost silhouette of the previous manager, made of glass cells that blow away as dust
function ghost(cx,cy,s,a,dis){if(a<=0)return;g.save();g.translate(cx,cy);g.scale(s,s);
  const inside=(x,y)=>(x*x+(y+62)*(y+62)<34*34)||(Math.abs(x)<14&&y>-34&&y<-14)||(y>-18&&y<64&&(x*x)/(78*78)+((y-64)*(y-64))/(78*78)<1);
  const solid=a*(1-sm(0,.35,dis));
  if(solid>0){g.save();g.globalAlpha*=solid;const gr=g.createLinearGradient(0,-100,0,70);gr.addColorStop(0,rgba('#E6E0F2',.85));gr.addColorStop(.6,rgba('#A898C0',.6));gr.addColorStop(1,rgba('#6C5A80',.15));g.fillStyle=gr;
    g.shadowColor='#E1C8B8';g.shadowBlur=24;
    g.beginPath();g.arc(0,-62,34,0,Math.PI*2);g.fill();g.beginPath();g.rect(-14,-34,28,22);g.fill();g.beginPath();g.ellipse(0,64,78,80,0,Math.PI,Math.PI*2);g.fill();g.shadowBlur=0;
    g.strokeStyle=rgba('#FFF0E0',.8);g.lineWidth=2;g.beginPath();g.arc(0,-62,34,0,Math.PI*2);g.stroke();g.beginPath();g.ellipse(0,64,78,80,0,Math.PI,Math.PI*2);g.stroke();
    // hollow eyes
    g.fillStyle=rgba('#3A2A4E',.7);ell(-11,-64,5,3);g.fill();ell(11,-64,5,3);g.fill();
    for(let y=-96;y<64;y+=6){g.fillStyle=rgba('#FFFFFF',.05+.05*Math.sin(y*.7+t*20));g.fillRect(-80,y,160,2)}g.restore()}
  if(dis>0){for(let y=-96;y<64;y+=7)for(let x=-77;x<78;x+=7){if(!inside(x,y))continue;const h=hash(x*3.7+y*1.3),st=(1-(y+100)/170)*.35+h*.35,q=cl((dis-st)/.6,0,1);if(q<=0||q>=1)continue;
    const dx=x+q*q*(60+h*90),dy=y-q*(40+h*70)+Math.sin(q*6+h*9)*6;g.fillStyle=rgba(h>.5?'#E1C8B8':'#9A8AB0',a*(1-q)*.9);g.fillRect(dx,dy,4.5*(1-q*.5),4.5*(1-q*.5))}}
  g.restore()}
const VIL=[ELDER,CARP,NEIGH,SMITH,woman(11,['#7A5A8A','#4E3A60','#9A7AAA']),woman(12,['#A0606A','#703E4A','#C08088']),BOY,GRANNY,worker(1),worker(2),worker(3),worker(4),worker(5),worker(6)];
const VAL=[12,9,87,34,51,63,70,46,58,66,61,55,72,49];
const HROW=VIL.length,GROW=HROW+1,SCR_H=(GROW-4)*RH;
function listScroll(tt){return SCR_H*ease((tt-4.2)/.95)}
// fill progress for every row
function fillOf(i,tt){if(i===0)return eout((tt-T12+.08)/.35);if(i===1)return eout((tt-T9+.08)/.3);if(i===2)return ease((tt-T87+.05)/.45);
  return eout((tt-4.35-(i-3)*.05)/.35)}
const blinkA=t>4.25?.5+.5*Math.sin((t-4.25)*9):0;
// hidden menu: top fixed, limit area extends below on "Ниже горела кнопка"
function hMenu(x,w,o){
  const ext=op(o,'ext',0),full=HH+LISTH+16+82*eout(ext),y=TOP,h=full,pu=.6+.4*Math.sin(t*4);
  panel(x,y,w,h,1,'#D8404E',.85*pu);
  g.save();g.beginPath();g.roundRect(x,y,w,h,14);g.clip();
  eyeClosed(x+34,y+32,14*(1+.08*Math.sin(t*3)));
  g.fillStyle=rgba('#E0505A',.9);g.beginPath();g.roundRect(x+62,y+22,w*.36,8,4);g.fill();g.fillStyle=rgba('#E0505A',.45);g.beginPath();g.roundRect(x+62,y+38,w*.22,5,2.5);g.fill();
  const bx=x+w*.55,bw=w*.4-14;suggIcon(bx+bw/2,y+32,1.1,.35);
  g.strokeStyle=rgba('#D8404E',.5);g.lineWidth=1;g.beginPath();g.moveTo(x+14,y+HH-8);g.lineTo(x+w-14,y+HH-8);g.stroke();
  g.save();g.beginPath();g.rect(x+6,y+HH,w-12,LISTH);g.clip();
  const sc=listScroll(t);
  for(let i=0;i<=GROW;i++){const yy=y+HH+i*RH-sc;if(yy<y+HH-RH||yy>y+HH+LISTH)continue;const cy=yy+RH/2;
    if(i===HROW){ // hero's own row: blinking frame, HERO portrait + medallion, empty bar
      g.save();g.shadowColor='#E0505A';g.shadowBlur=18*blinkA;g.beginPath();g.roundRect(x+10,yy+3,w-20,RH-6,10);g.fillStyle=rgba('#E0505A',.1+.2*blinkA);g.fill();g.strokeStyle=rgba('#E0505A',.35+.65*blinkA);g.lineWidth=2;g.stroke();g.restore();
      g.save();ell(x+38,cy,20,20);g.fillStyle=rgba('#241F4A',.85);g.fill();g.clip();portrait(HERO,x+38,cy-1,12,.25,{browIn:.5});g.restore();
      ell(x+38,cy,20,20);g.strokeStyle=rgba('#E0505A',.9);g.lineWidth=1.5;g.stroke();
      medallion(x+72,cy,9,0,0,.3+.5*blinkA);scribble(x+88,cy+4,w*.17,91,'#E1C8B8',.75);
      const zf=Math.max(0,1-Math.abs(t-TZ)/.35);
      bar(bx,cy-7,bw,14,0,'#E0505A',1,.5);ticks(bx,cy-7,bw,14,10,1);
      g.save();g.shadowColor='#FFCF9A';g.shadowBlur=14*zf;g.beginPath();g.roundRect(bx,cy-7,bw,14,7);g.strokeStyle=rgba('#FFCF9A',.3+.7*zf);g.lineWidth=1.5;g.stroke();g.restore();
      // a scan runs along the empty bar on «ноль» and finds nothing; zero marker pulses
      if(t>TZ-.2&&t<TZ+.5){const q=cl((t-TZ+.2)/.6,0,1);g.fillStyle=rgba('#FFF0C8',.6*(1-q));g.fillRect(bx+bw*q-2,cy-9,4,18)}
      ell(bx+3,cy,2.5+1.5*zf,2.5+1.5*zf);g.fillStyle=rgba('#FFCF9A',.5+.5*Math.abs(Math.sin(t*5)));g.fill();
      continue}
    if(i===GROW){ // previous manager: hollow portrait, warn, bar spilling past the cap
      const ga=sm(TG,TG+.3,t);if(ga<=0)continue;g.save();g.globalAlpha*=ga;
      ell(x+38,cy,20,20);g.fillStyle=rgba('#241F4A',.85);g.fill();g.setLineDash([4,4]);g.strokeStyle=rgba('#9A9AAB',.8);g.lineWidth=1.5;g.stroke();g.setLineDash([]);
      icon('person',x+38,cy+2,1.4,.35*(1-sm(9.1,9.9,t))+.08);
      scribble(x+68,cy+4,w*.2,77,'#9A9AAB',.45);
      const ov=sm(TR+.1,TR+.7,t);limBar(bx,cy-7,bw,14,ov,.8,ov*Math.max(0,Math.sin(t*7)),sm(TR+.6,TR+1,t));
      const wa=sm(9.3,9.5,t),wp=1+.25*Math.max(0,Math.sin((t-TR)*8))*sm(TR,TR+.2,t)*(1-sm(11.6,11.9,t));
      if(wa>0){g.save();if(t>TR){g.shadowColor='#E0505A';g.shadowBlur=20*(wp-1)*4}icon('warn',bx-18,cy,1.1*wp,wa);g.restore()}
      g.restore();continue}
    const v=VAL[i],f=fillOf(i,t),col=i<2?'#FFCF9A':rowCol(v);
    g.save();ell(x+38,cy,20,20);g.fillStyle=rgba('#241F4A',.85);g.fill();g.clip();portrait(VIL[i],x+38,cy-1,12,.25);g.restore();
    ell(x+38,cy,20,20);g.strokeStyle=rgba('#E1C8B8',.85);g.lineWidth=1.5;g.stroke();
    scribble(x+68,cy+4,w*(.16+hash(i+3)*.08),i*7+11,'#E1C8B8',.7);
    const fl=i>2?0:f>0&&f<1?1:Math.max(0,1-(t-[T12,T9,T87][i]-.4)/.5);
    bar(bx,cy-7,bw,14,0,col,1,.4);fillW(bx,cy-7,bw*v/100*f,14,col,.4+.6*fl);ticks(bx,cy-7,bw,14,10,1);
    if(i===2&&f>0){g.save();g.shadowColor='#E0505A';g.shadowBlur=16*(.5+.5*Math.sin(t*6));g.beginPath();g.roundRect(bx,cy-7,bw,14,7);g.strokeStyle=rgba('#E0505A',.7);g.lineWidth=1.5;g.stroke();g.restore()}
  }
  g.restore();
  if(ext>0){const ly=y+HH+LISTH+14;limitBtn(x+14,ly,w-28,sm(.3,1,ext),limV(),btnGlow(),capF())}
  g.restore();
}
function limV(){return .83*ease((t-T83)/.5)}
function btnGlow(){const on=sm(TB,TB+.25,t);return on*(.65+.35*Math.sin(t*6))}
function capF(){return Math.max(0,1-Math.abs(t-T100)/.3)}
// ---------- hero acting
function heroPose(){
  const o={x:HX,y:GYH,s:HS,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],medal:'hidden',t,ls:1,breath:1+.6*sm(8.5,10,t)};
  const recog=sm(4.55,4.75,t),ghostF=sm(8.6,8.85,t),eye=sm(TEYE,TEYE+.3,t),head=sm(TEYE+.1,TEYE+.6,t);
  o.lean=.18-.08*sm(4.7,5.1,t)+.04*sm(6.7,7.5,t)-.12*sm(8.7,9.2,t)+.02*sm(12.2,13,t);
  o.tilt=.2-.05*recog-.06*ghostF-.17*head;
  o.turn=-.38*head;
  let lx=.6,ly=.25+.12*Math.sin(t*1.7);
  if(t>2.9)ly=.4;if(t>4.2)ly=lerp(.4,.7,sm(4.2,4.6,t));if(t>8.4)ly=lerp(ly,.5,sm(8.4,8.7,t));if(t>11.9)ly=lerp(ly,.75,sm(11.9,12.3,t));
  lx=lerp(lx,0,eye);ly=lerp(ly,-.05,eye);
  const wid=Math.max(0,1-Math.abs(t-T87-.15)/.4)*.15,zw=Math.max(0,1-Math.abs(t-TZ-.1)/.5)*.15;
  const fear=sm(8.6,9.0,t);
  o.em={look:[lx,ly],eyeOpen:1+wid+.3*recog*(1-fear)+zw+.35*fear-.15*eye,brow:.2+.6*recog*(1-fear)+.75*fear-.25*eye,browIn:.45+.25*fear+.1*eye,
    open:.15*recog*(1-sm(5.6,6.2,t))+.28*fear*(1-sm(12.5,13.4,t))+.08,smile:-.3-.2*fear,
    blink:(t>4.02&&t<4.14)||(t>TZ+.4&&t<TZ+.52)||(t>9.95&&t<10.07)||(t>12.55&&t<12.67)?1:0};
  // right hand: small dip (anticipation) then rises to press the hidden medallion under the shirt
  const up=ease((t-10.4)/.5),dip=sm(10.2,10.4,t)*(1-up);
  if(t>10.2){const ln=o.lean,c=rot(4,-63,ln);const press=Math.max(0,Math.sin((t-10.9)*5.5))*1.5*sm(10.9,11.1,t);
    o.hr=[lerp(26,c[0]+2+press,up),lerp(-212+8*dip,o.hipY+c[1]+press*.5,up)];
    if(up>.8)o.itemR=(gg,x,y,an)=>palm(x,y,an,up)}
  return o;
}
function palm(x,y,an,k){g.save();g.translate(x,y);g.rotate(an+.9);for(let i=0;i<4;i++){g.beginPath();g.roundRect(-3+i*0,-3,15-Math.abs(i-1.5)*2,5,2.5);g.save();g.rotate(-.5+i*.28);g.beginPath();g.roundRect(2,-2.5,14-Math.abs(i-1.5)*2.5,5,2.5);fo(tc(SKIN[0]),.7);g.restore()}ell(0,0,8.5,7,0);fo(tc(SKIN[0]),.8);g.restore()}
const HP=heroPose(),HW=headW(HP);
function heroO(){return Object.assign({},HP,{rimC:'#E0505A',rimA:.85})}
function world(bb){hutInterior({night:1,red:.68+.1*Math.sin(t*4)*sm(TB,TB+.3,t),candle:.36-.04*sm(8,12,t),bBack:bb,main:()=>person(HERO,heroO())});
  g.save();g.globalCompositeOperation='multiply';wash('#3A1A30',.24);g.restore()}
function glassSheen(x,y,w,h,a){g.save();g.beginPath();g.roundRect(x,y,w,h,14);g.clip();const sx=x-120+((t*.12)%1)*(w+240);g.globalCompositeOperation='screen';const gr=g.createLinearGradient(sx-60,y,sx+60,y+80);gr.addColorStop(0,rgba('#E1C8B8',0));gr.addColorStop(.5,rgba('#E1C8B8',a));gr.addColorStop(1,rgba('#E1C8B8',0));g.fillStyle=gr;g.fillRect(x,y,w,h);g.restore()}
function fgMotes(n,col,a){layer(1.5,()=>{for(let i=0;i<n;i++){const x=hash(i*3.1)*700-80+Math.sin(t*.5+i)*20,y=(hash(i*7.3)*1100+t*(8+hash(i)*14))%1100-70;ell(x,y,2+hash(i+2)*3,2+hash(i+2)*3);g.fillStyle=rgba(col,a*(.4+.6*hash(i+5)));g.fill()}},3)}
function lit(lx,ly,r,c,a){const w=uW(lx,ly),s=toScreen(w[0],w[1],1);lampLight(s[0],s[1],r,c,a)}
const EXT=sm(11.9,12.25,t);
function ui(){hMenu(0,MW,{ext:EXT});
  // the ghost appears in the glass over the list and dissolves
  const ga=sm(TG,TG+.35,t)*(1-sm(10.1,10.3,t));if(ga>0)ghost(128,226,1.05,ga,cl((t-9.1)/.9,0,1));
  glassSheen(0,TOP,MW,HH+LISTH+16+82*EXT,.1)}
function rowW(i,col){const sc=listScroll(t);return uW(col,TOP+HH+i*RH-sc+RH/2)}
const MED=[250,566,1.75];
// ---------- shots
if(S.i===0){ // infographic: elder 12, carpenter 9
  const r0=rowW(0,128),r1=rowW(1,128),u=sm(1.6,2.1,t);
  setCam(lerp(r0[0],r1[0],u)+4,lerp(r0[1],r1[1],u)+18,2.75+lt*.06,.012);
  CAM.sy=kick(t,T12+.15,2,.22)+kick(t,T9+.15,2,.22);
  world(6);layer(1,()=>uiT(ui));
  lit(180,140,260,'#FFCF9A',.06+.08*Math.max(0,1-Math.abs(t-T12-.2)/.4)+.08*Math.max(0,1-Math.abs(t-T9-.2)/.4));
  fgMotes(10,'#FFB0A0',.22);
}
if(S.i===1){ // infographic: neighbour 87, long red bar
  const r=rowW(2,125);setCam(r[0]+6-lt*5,r[1]+4,3.3+lt*.1,-.015);
  CAM.sx=kick(t,T87+.42,3,.28);
  world(8);layer(1,()=>uiT(ui));
  lit(190,TOP+HH+2*RH+29,240,'#E0505A',.1+.2*sm(T87,T87+.45,t));
  fgMotes(10,'#FFB0A0',.25);
}
if(S.i===2){ // medium two-shot: list rolls down to the hero's own row, it blinks
  setCam(MED[0]-2+lt*4,MED[1]+2,MED[2]+.02+lt*.03,-.008);
  world(2.5);layer(1,()=>uiT(ui));
  lit(128,TOP+HH+4*RH,300,'#E0505A',.08+.1*blinkA);
}
if(S.i===3){ // infographic: hero's row — suggestibility 0
  const r=rowW(HROW,128);setCam(r[0]+2+lt*4,r[1]-30+lt*4,3.0+lt*.1,.01);
  CAM.sy=kick(t,TZ,2.5,.25);
  world(7);layer(1,()=>uiT(ui));
  lit(128,TOP+HH+3*RH+29,260,'#E0505A',.08+.12*blinkA);
  fgMotes(10,'#FFB0A0',.22);
}
if(S.i===4){ // infographic: previous manager — ghost in the glass turns to dust, warn
  setCam(296+lt*3,560-lt*6,2.55+lt*.06,0);
  world(5);layer(1,()=>uiT(ui));
  lit(128,226,300,'#C8C0DA',.1*sm(TG,TG+.4,t)*(1-sm(9.1,9.9,t)));
  fgMotes(12,'#E1C8B8',.25);
}
if(S.i===5){ // medium close: fear, right hand to the medallion; warn pulses at the ghost row
  setCam(HW[0]+66+lt*4,HW[1]+40,2.4+lt*.08,-.01);
  CAM.sy=kick(t,TR,2,.25);
  world(5);layer(1,()=>uiT(ui));
  const w=rowW(GROW,125),s=toScreen(w[0],w[1],1);lampLight(s[0],s[1],200,'#E0505A',.12+.15*Math.max(0,Math.sin((t-TR)*8))*(1-sm(11.6,11.9,t)));
  lampLight(470,430,380,'#E0505A',.1);
  fgMotes(8,'#FFB0A0',.25);
}
if(S.i===6){ // infographic: camera tilts down — the limit button lights up
  const u=ease((t-11.85)/.6),a=uW(128,TOP+HH+LISTH-30),b=uW(128,TOP+HH+LISTH+43);
  setCam(lerp(a[0],b[0],u),lerp(a[1],b[1],u),3.1+lt*.1,0);
  CAM.sy=kick(t,TB+.05,3,.25);
  world(7);layer(1,()=>uiT(ui));
  const s=toScreen(b[0],b[1],1);lampLight(s[0],s[1],260,'#E0505A',.2*btnGlow());
  fgMotes(10,'#FFB0A0',.22);
}
if(S.i===7){ // close-up: fear, hand pressing the medallion; 83 of 100; eyes rise into the camera
  setCam(HW[0]+22,HW[1]+72,3.55+lt*.14,.006-lt*.004);
  CAM.sy=kick(t,T83+.5,2,.25);
  world(9);
  layer(1,()=>{g.globalAlpha=.5;uiT(ui,60)},8);
  lampLight(470,380,420,'#E0505A',.1+.06*btnGlow());
  lampLight(330,640,240,'#E0505A',.06+.12*btnGlow());
  // the button floats in the foreground glass (screen space, slight parallax), above the subtitle zone
  g.save();g.translate(196-lt*6,604+Math.sin(t*1.3)*2);limitBtn(0,0,310,1,limV(),btnGlow(),capF());g.restore();
  fgMotes(8,'#FFB0A0',.25);
}
// ---------- finishing
g.save();g.globalCompositeOperation='multiply';wash('#241F4A',.12);g.restore();
vignette(.62+.15*sm(13.5,14.9,t));grain(.05);
wash("#000000",cutDip(t,ST));
wash("#000000",.85*(1-sm(0,.065,t))); // half of the cut dip from scene 11
wash('#000000',sm(D-.3,D,t));
}
```
