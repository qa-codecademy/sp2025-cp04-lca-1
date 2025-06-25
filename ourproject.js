// Translation objects
const translations = {
  en: {
    title: "Our Projects",
    description:
      "Explore our diverse projects and filter by category, status, and date range.",
    filters: "Filters",
    category: "Category",
    allCategories: "All Categories",
    environment: "Environment",
    education: "Education",
    healthcare: "Healthcare",
    infrastructure: "Infrastructure",
    cultural: "Cultural",
    status: "Status",
    ongoing: "Ongoing",
    completed: "Completed",
    upcoming: "Upcoming",
    dateRange: "Date Range",
    from: "From",
    to: "To",
    applyFilters: "Apply Filters",
    readMore: "Read More",
    projectDescription: "Project Description",
    objectives: "Objectives",
    impact: "Impact",
    team: "Team",
    duration: "Duration",
    close: "Close",
    started: "Started",
    completed: "Completed",
    starts: "Starts",
    noProjectsFound: "No projects found matching your filters",
    tryAdjustingFilters:
      "Try adjusting your filter criteria or reset all filters to see all projects.",
    resetAllFilters: "Reset All Filters",
    previous: "Previous",
    next: "Next",
  },
  mk: {
    title: "Нашите Проекти",
    description:
      "Истражете ги нашите разновидни проекти и филтрирајте по категорија, статус и временски период.",
    filters: "Филтри",
    category: "Категорија",
    allCategories: "Сите Категории",
    environment: "Животна Средина",
    education: "Образование",
    healthcare: "Здравство",
    infrastructure: "Инфраструктура",
    cultural: "Култура",
    status: "Статус",
    ongoing: "Во Тек",
    completed: "Завршено",
    upcoming: "Најавено",
    dateRange: "Временски Период",
    from: "Од",
    to: "До",
    applyFilters: "Примени Филтри",
    readMore: "Прочитај Повеќе",
    projectDescription: "Опис на Проектот",
    objectives: "Цели",
    impact: "Влијание",
    team: "Тим",
    duration: "Траење",
    close: "Затвори",
    started: "Започнато",
    completed: "Завршено",
    starts: "Започнува",
    noProjectsFound: "Не се пронајдени проекти според вашите филтри",
    tryAdjustingFilters:
      "Обидете се да ги прилагодите вашите критериуми за филтрирање или ресетирајте ги сите филтри за да ги видите сите проекти.",
    resetAllFilters: "Ресетирај ги сите филтри",
    previous: "Претходно",
    next: "Следно",
  },
};

// Project translations
const projectTranslations = {
  en: {
    "Green City Initiative": {
      title: "Green City Initiative",
      description: "Promoting urban sustainability and green spaces.",
      longDescription:
        "The Green City Initiative is a comprehensive urban sustainability program aimed at transforming our city into a model of environmental consciousness. This project focuses on creating green spaces, implementing renewable energy solutions, and promoting eco-friendly transportation options. Through community engagement and innovative technologies, we're working to reduce carbon emissions by 30% within the next five years while improving the quality of life for all residents.",
      objectives: [
        "Reduce carbon emissions by 30%",
        "Create 50 new green spaces",
        "Implement solar panels on public buildings",
        "Promote cycling infrastructure",
      ],
      impact:
        "Expected to benefit over 500,000 residents and create 200+ green jobs",
      team: "Environmental experts, urban planners, community organizers",
    },
    "School Renovation Project": {
      title: "School Renovation Project",
      description: "Upgrading schools for better learning environments.",
      longDescription:
        "Our School Renovation Project addresses the critical need for modern, safe, and accessible educational facilities. We're renovating 25 schools across the district, focusing on creating inclusive learning environments that support diverse learning styles. The project includes upgrading classrooms with modern technology, improving accessibility for students with disabilities, and creating multipurpose spaces for extracurricular activities.",
      objectives: [
        "Renovate 25 schools",
        "Install modern technology in classrooms",
        "Improve accessibility features",
        "Create multipurpose learning spaces",
      ],
      impact: "Will benefit 15,000+ students and 800+ teachers",
      team: "Architects, construction specialists, educational consultants",
    },
    "Rural Healthcare Access": {
      title: "Rural Healthcare Access",
      description: "Improving medical facilities in rural areas.",
      longDescription:
        "The Rural Healthcare Access initiative addresses the healthcare disparities in remote communities by establishing mobile medical units and upgrading existing rural clinics. This project brings essential healthcare services closer to residents who previously had to travel long distances for medical care. We're also training local healthcare workers and implementing telemedicine solutions to ensure continuous care.",
      objectives: [
        "Establish 10 mobile medical units",
        "Upgrade 15 rural clinics",
        "Train 50 local healthcare workers",
        "Implement telemedicine services",
      ],
      impact: "Improving healthcare access for 100,000+ rural residents",
      team: "Medical professionals, rural development experts, technology specialists",
    },
    "Bridge Construction Project": {
      title: "Bridge Construction Project",
      description: "Building infrastructure to connect communities.",
      longDescription:
        "This major infrastructure project involves constructing a modern bridge that will connect two previously isolated communities, significantly reducing travel time and improving economic opportunities. The bridge will be designed to withstand extreme weather conditions and accommodate both vehicular and pedestrian traffic. The project includes extensive environmental impact studies and community consultation to ensure minimal disruption to local ecosystems.",
      objectives: [
        "Construct 2.5km bridge",
        "Connect isolated communities",
        "Improve transportation efficiency",
        "Create economic opportunities",
      ],
      impact: "Will serve 50,000+ daily commuters and boost local economy",
      team: "Civil engineers, environmental consultants, community liaisons",
    },
    "Local Art Festival": {
      title: "Local Art Festival",
      description: "Celebrating culture with music, dance, and art.",
      longDescription:
        "The Local Art Festival is a month-long celebration of our region's rich cultural heritage, featuring traditional music, contemporary art exhibitions, dance performances, and workshops. This event brings together artists from diverse backgrounds to showcase their talents and preserve cultural traditions. The festival also includes educational programs for children and opportunities for emerging artists to gain exposure.",
      objectives: [
        "Celebrate cultural diversity",
        "Support local artists",
        "Preserve traditional arts",
        "Provide educational opportunities",
      ],
      impact: "Attracted 25,000+ visitors and supported 200+ artists",
      team: "Cultural organizers, artists, event planners, volunteers",
    },
  },
  mk: {
    "Green City Initiative": {
      title: "Иницијатива за Зелен Град",
      description: "Промовирање на урбана одржливост и зелени површини.",
      longDescription:
        "Иницијативата за Зелен Град е сеопфатна програма за урбана одржливост со цел да го трансформира нашиот град во модел на еколошка свест. Овој проект се фокусира на создавање зелени површини, имплементирање решенија за обновлива енергија и промовирање на еко-транспорт. Преку вклучување на заедницата и иновативни технологии, работиме да ги намалиме јаглеродните емисии за 30% во следните пет години и да го подобриме квалитетот на животот за сите жители.",
      objectives: [
        "Намалување на јаглеродните емисии за 30%",
        "Создавање 50 нови зелени површини",
        "Имплементирање соларни панели на јавни згради",
        "Промовирање велосипедска инфраструктура",
      ],
      impact:
        "Се очекува да користи над 500.000 жители и да создаде 200+ зелени работни места",
      team: "Експерти за животна средина, урбани планери, организатори на заедницата",
    },
    "School Renovation Project": {
      title: "Проект за Реновирање на Училишта",
      description: "Надградување на училишта за подобри услови за учење.",
      longDescription:
        "Проектот за реновирање на училишта се занимава со критичната потреба за модерни, безбедни и достапни образовни објекти. Реновираме 25 училишта низ регионот, фокусирајќи се на создавање инклузивни средини за учење кои поддржуваат различни стилови на учење. Проектот вклучува надградба на училници со модерна технологија, подобрување на пристапноста за ученици со попреченост и создавање повеќенаменски простории за воннаставни активности.",
      objectives: [
        "Реновирање на 25 училишта",
        "Инсталирање модерна технологија во училници",
        "Подобрување на пристапноста",
        "Создавање повеќенаменски простории за учење",
      ],
      impact: "Ќе користи 15.000+ ученици и 800+ наставници",
      team: "Архитекти, градежни специјалисти, образовни консултанти",
    },
    "Rural Healthcare Access": {
      title: "Пристап до Здравство во Рурални Подрачја",
      description: "Подобрување на медицинските објекти во руралните средини.",
      longDescription:
        "Иницијативата за пристап до здравство во рурални подрачја ги адресира здравствените разлики во оддалечените заедници преку воспоставување мобилни медицински единици и надградба на постоечките рурални клиники. Овој проект носи основни здравствени услуги поблиску до жителите кои претходно морале да патуваат далеку за медицинска нега. Обучуваме и локални здравствени работници и имплементираме телемедицински решенија за континуирана грижа.",
      objectives: [
        "Воспоставување 10 мобилни медицински единици",
        "Надградба на 15 рурални клиники",
        "Обука на 50 локални здравствени работници",
        "Имплементирање телемедицински услуги",
      ],
      impact:
        "Подобрување на пристапот до здравство за 100.000+ рурални жители",
      team: "Медицински професионалци, експерти за рурален развој, технолошки специјалисти",
    },
    "Bridge Construction Project": {
      title: "Проект за Градење Мост",
      description: "Градење инфраструктура за поврзување на заедници.",
      longDescription:
        "Овој голем инфраструктурен проект вклучува изградба на модерен мост кој ќе поврзе две претходно изолирани заедници, значително намалувајќи го времето на патување и подобрувајќи ги економските можности. Мостот ќе биде дизајниран да издржи екстремни временски услови и да овозможи и возен и пешачки сообраќај. Проектот вклучува и студии за влијание врз животната средина и консултации со заедницата за минимално нарушување на екосистемот.",
      objectives: [
        "Изградба на мост од 2,5 км",
        "Поврзување изолирани заедници",
        "Подобрување на транспортната ефикасност",
        "Создавање економски можности",
      ],
      impact:
        "Ќе користи 50.000+ дневни патници и ќе ја засили локалната економија",
      team: "Градежни инженери, еколошки консултанти, врски со заедницата",
    },
    "Local Art Festival": {
      title: "Локален Уметнички Фестивал",
      description: "Прослава на културата со музика, танц и уметност.",
      longDescription:
        "Локалниот уметнички фестивал е месечна прослава на богатото културно наследство на нашиот регион, со традиционална музика, современи уметнички изложби, танцови настапи и работилници. Настанот ги обединува уметниците од различни средини за да ги прикажат своите таленти и да ги зачуваат културните традиции. Фестивалот вклучува и едукативни програми за деца и можности за нови уметници.",
      objectives: [
        "Прослава на културната разновидност",
        "Поддршка на локални уметници",
        "Зачувување на традиционалните уметности",
        "Обезбедување едукативни можности",
      ],
      impact: "Привлече 25.000+ посетители и поддржа 200+ уметници",
      team: "Културни организатори, уметници, организатори на настани, волонтери",
    },
    "Water Conservation Program": {
      title: "Програма за Заштеда на Вода",
      description: "Едукација за заштеда на вода.",
      longDescription:
        "Програмата за заштеда на вода се занимава со критичната потреба за одржливо управување со водата преку едукација и подобрување на инфраструктурата. Имплементираме паметни системи за наводнување, промовираме водоефикасни апарати и организираме работилници за техники за заштеда на вода. Програмата вклучува и училишни иницијативи за развивање навики за заштеда на вода кај младите.",
      objectives: [
        "Намалување на потрошувачката на вода за 25%",
        "Инсталирање паметни системи за наводнување",
        "Едукација на 10.000+ домаќинства",
        "Имплементирање училишни програми",
      ],
      impact: "Се очекува да се заштедат 2 милиони галони вода годишно",
      team: "Експерти за животна средина, едукатори, специјалисти за заедница",
    },
    "Adult Literacy Campaign": {
      title: "Кампања за Писменост на Возрасни",
      description:
        "Помош за возрасни да развијат вештини за читање и пишување.",
      longDescription:
        "Кампањата за писменост на возрасни се занимава со критичниот проблем на неписменост преку достапни и флексибилни можности за учење. Нудиме вечерни часови, онлајн модули и индивидуални туторски сесии. Програмата користи иновативни методи и реални апликации за да го направи учењето релевантно и интересно.",
      objectives: [
        "Помош на 1.000 возрасни да постигнат писменост",
        "Обезбедување флексибилни опции за учење",
        "Создавање можности за вработување",
        "Подобрување на вклученоста на заедницата",
      ],
      impact:
        "Ќе им помогне на возрасните подобро да учествуваат во општеството и работната сила",
      team: "Специјалисти за писменост, едукатори за возрасни, волонтери од заедницата",
    },
    "Vaccination Awareness Drive": {
      title: "Кампања за Свесност за Вакцинација",
      description: "Промовирање на вакцинација за јавно здравје.",
      longDescription:
        "Кампањата за свесност за вакцинација има за цел да ја зголеми информираноста за важноста на вакцините преку едукација, јавни настани и соработка со здравствени институции. Програмата вклучува работилници, информативни материјали и бесплатни вакцинални денови за заедницата.",
      objectives: [
        "Зголемување на стапката на вакцинација",
        "Организирање јавни едукативни настани",
        "Соработка со здравствени институции",
        "Обезбедување бесплатни вакцини за ранливи групи",
      ],
      impact:
        "Подобрување на јавното здравје и намалување на заразните болести",
      team: "Здравствени работници, едукатори, волонтери",
    },
    "Road Safety Campaign": {
      title: "Кампања за Безбедност во Сообраќајот",
      description: "Едукација за безбедност на патиштата.",
      longDescription:
        "Кампањата за безбедност во сообраќајот има за цел да ја зголеми свесноста за безбедно однесување на патиштата преку едукација, работилници и практични демонстрации. Програмата вклучува активности за деца, возрасни и возачи, како и соработка со полицијата и локалните власти.",
      objectives: [
        "Организирање работилници за безбедност",
        "Едукација на деца и возрасни",
        "Соработка со полиција и локални власти",
        "Намалување на сообраќајните несреќи",
      ],
      impact:
        "Подобрување на безбедноста на патиштата и намалување на несреќите",
      team: "Едукатори, полиција, локални власти",
    },
    "Digital Skills Training": {
      title: "Обука за Дигитални Вештини",
      description: "Подобрување на дигиталната писменост.",
      longDescription:
        "Обуката за дигитални вештини има за цел да ја намали дигиталната поделба преку обезбедување пристап до компјутерска опрема и обука за сите возрасти. Програмата вклучува курсеви за основи на компјутери, интернет безбедност, дигитална комуникација и онлајн услуги, како и специјализирани курсеви за вработување и претприемништво.",
      objectives: [
        "Обучување на 2.000 луѓе за дигитални вештини",
        "Обезбедување пристап до компјутерска опрема",
        "Подобрување на дигиталната писменост",
        "Создавање можности за вработување",
      ],
      impact:
        "Ќе им помогне на 2.000+ луѓе да се адаптираат на дигиталната ера",
      team: "ИТ професионалци, едукатори, технолошки ментори",
    },
    "Community Garden Initiative": {
      title: "Иницијатива за Заедничка Градина",
      description: "Создавање зелени простори за заедничко одгледување.",
      longDescription:
        "Иницијативата за заедничка градина создава зелени простори каде што членовите на заедницата можат да одгледуваат сопствен зеленчук, да учат за одржливо земјоделство и да градат заедништво. Градините се опремени со системи за наводнување, алатки и ресурси за учење. Програмата вклучува работилници за органско одгледување, кулинарски настани и програми за размена на производи.",
      objectives: [
        "Создавање 15 заеднички градини",
        "Обучување на 500 градинари",
        "Промовирање на одржливо земјоделство",
        "Градење заедништво",
      ],
      impact: "Ќе користи 1.000+ семејства и ќе создаде зелени простори",
      team: "Земјоделски експерти, организатори на заедницата, волонтери",
    },
    "Youth Leadership Program": {
      title: "Програма за Лидерство на Младите",
      description: "Развивање на лидерски вештини кај младите.",
      longDescription:
        "Програмата за лидерство на младите е наменета за идентификување и поддршка на млади лидери во заедницата. Вклучува менторство, обука за лидерски вештини, проекти за заедницата и можности за мрежирање. Учесниците учат за комуникација, решавање проблеми, тимска работа и граѓанско учество, како и спроведување сопствени проекти.",
      objectives: [
        "Обучување на 200 млади лидери",
        "Развивање лидерски вештини",
        "Создавање проекти за заедницата",
        "Градење мрежи на млади лидери",
      ],
      impact: "Ќе развие 200+ млади лидери за иднината",
      team: "Експерти за лидерство, млади ментори, организатори на заедницата",
    },
    "Mental Health Support Network": {
      title: "Мрежа за Поддршка на Ментално Здравје",
      description: "Обезбедување поддршка за ментално здравје.",
      longDescription:
        "Мрежата за поддршка на ментално здравје обезбедува пристап до консултации, групи за поддршка и кризни интервенции за лица со ментални здравствени проблеми. Програмата вклучува обука за свесност за ментално здравје, дестигматизација и превентивни програми за младите.",
      objectives: [
        "Обезбедување консултации за ментално здравје",
        "Организирање групи за поддршка",
        "Едукација за ментално здравје",
        "Превентивни програми за младите",
      ],
      impact: "Подобрување на менталното здравје на заедницата",
      team: "Психијатри, психолози, социјални работници",
    },
    "Public Library Expansion": {
      title: "Проширување на Јавната Библиотека",
      description: "Модернизација и проширување на библиотечките услуги.",
      longDescription:
        "Проектот за проширување на јавната библиотека вклучува изградба на нови простории, модернизација на технологијата и зголемување на колекцијата на книги. Библиотеката ќе стане центар за учење, истражување и заеднички активности за сите возрасти.",
      objectives: [
        "Изградба нови библиотечки простории",
        "Модернизација на технологијата",
        "Зголемување на книжната колекција",
        "Организирање заеднички активности",
      ],
      impact: "Подобрување на пристапот до знаење и култура",
      team: "Библиотекари, архитекти, технолози",
    },
    "Renewable Energy Installation": {
      title: "Инсталација на Обновлива Енергија",
      description: "Инсталирање соларни панели и ветерници.",
      longDescription:
        "Проектот за инсталација на обновлива енергија вклучува поставување соларни панели на јавни згради и изградба на мали ветерници. Ова ќе намали зависност од фосилни горива и ќе создаде работни места во секторот за обновлива енергија.",
      objectives: [
        "Инсталирање соларни панели",
        "Изградба ветерници",
        "Намалување на јаглеродните емисии",
        "Создавање работни места",
      ],
      impact:
        "Намалување на јаглеродните емисии и создавање зелени работни места",
      team: "Инженери за обновлива енергија, технолози, градежници",
    },
    "Cultural Heritage Preservation": {
      title: "Зачувување на Културното Наследство",
      description: "Заштита и промовирање на локалното културно наследство.",
      longDescription:
        "Проектот за зачувување на културното наследство се фокусира на заштита на историски објекти, традиционални занаети и културни практики. Вклучува реставрација на зградата, документирање на традиции и едукативни програми за младите.",
      objectives: [
        "Реставрација на историски објекти",
        "Документирање на традиции",
        "Едукативни програми",
        "Промовирање на културното наследство",
      ],
      impact: "Зачувување на културната идентитет и привлекување туристи",
      team: "Конзерватори, историчари, културни антрополози",
    },
    "Emergency Response Training": {
      title: "Обука за Кризни Интервенции",
      description: "Подготовка на волонтери за кризни ситуации.",
      longDescription:
        "Програмата за обука за кризни интервенции ги подготвува волонтерите за одговор на природни катастрофи, медицински итни случаи и други кризни ситуации. Вклучува обука за прва помош, евакуација и координација на кризни тимови.",
      objectives: [
        "Обука на волонтери за кризни интервенции",
        "Подготовка за природни катастрофи",
        "Обука за прва помош",
        "Координација на кризни тимови",
      ],
      impact: "Подобрување на безбедноста на заедницата",
      team: "Експерти за кризни интервенции, медицински работници, волонтери",
    },
    "Smart City Technology": {
      title: "Технологија за Паметен Град",
      description: "Имплементирање на паметни технологии во градот.",
      longDescription:
        "Проектот за паметен град вклучува инсталирање на сензори, паметни светилки, системи за управување со сообраќај и дигитални платформи за граѓански услуги. Ова ќе подобри ефикасноста на градските услуги и ќе намали трошоците.",
      objectives: [
        "Инсталирање паметни сензори",
        "Модернизација на сообраќајните системи",
        "Дигитализација на граѓанските услуги",
        "Подобрување на ефикасноста",
      ],
      impact: "Подобрување на квалитетот на животот и намалување на трошоците",
      team: "ИТ специјалисти, градски планери, инженери",
    },
    "Senior Citizen Support": {
      title: "Поддршка за Стари Лица",
      description: "Обезбедување услуги и поддршка за стари лица.",
      longDescription:
        "Програмата за поддршка на стари лица обезбедува домашна нега, транспорт, друштвени активности и здравствена грижа за стари лица. Вклучува и обука за сениори за користење на технологија и останување активни.",
      objectives: [
        "Обезбедување домашна нега",
        "Транспортни услуги",
        "Друштвени активности",
        "Здравствена грижа",
      ],
      impact: "Подобрување на квалитетот на животот на старите лица",
      team: "Социјални работници, медицински сестри, волонтери",
    },
    "Waste Management Innovation": {
      title: "Иновации во Управувањето со Отпад",
      description: "Модерни системи за управување со отпад.",
      longDescription:
        "Проектот за иновации во управувањето со отпад вклучува имплементирање на рециклирање, компостирање и намалување на отпадот. Вклучува едукација на заедницата за правилно одложување на отпадот и промовирање на одржливи практики.",
      objectives: [
        "Имплементирање рециклирање",
        "Компостирање на органски отпад",
        "Намалување на отпадот",
        "Едукација на заедницата",
      ],
      impact: "Намалување на отпадот и заштита на животната средина",
      team: "Експерти за управување со отпад, еколози, едукатори",
    },
    "Sports and Recreation Center": {
      title: "Центар за Спорт и Рекреација",
      description: "Изградба на модерен спортски и рекреативен центар.",
      longDescription:
        "Центарот за спорт и рекреација ќе обезбеди модерни спортски објекти, базени, фитнес сали и простории за рекреативни активности. Ќе биде отворен за сите возрасти и ќе промовира здрав начин на живот.",
      objectives: [
        "Изградба спортски објекти",
        "Инсталирање базени",
        "Опремување фитнес сали",
        "Организирање рекреативни активности",
      ],
      impact: "Подобрување на физичкото здравје и социјална интеграција",
      team: "Спортски менаџери, архитекти, фитнес инструктори",
    },
    "Music and Arts Education": {
      title: "Образование за Музика и Уметност",
      description: "Едукативни програми за музика и уметност.",
      longDescription:
        "Програмата за образование за музика и уметност обезбедува бесплатни часови за музика, цртање, сликање и други уметнички форми за деца и младинци. Вклучува работилници, изложби и настапи.",
      objectives: [
        "Бесплатни часови за музика",
        "Уметнички работилници",
        "Организирање изложби",
        "Музички настапи",
      ],
      impact: "Развивање на креативност и уметнички таленти",
      team: "Музички наставници, уметници, едукатори",
    },
    "Early Childhood Development": {
      title: "Развој на Рана Детска Возраст",
      description: "Поддршка за развој на малите деца.",
      longDescription:
        "Програмата за развој на рана детска возраст обезбедува квалитетна претшколска едукација, здравствена грижа и поддршка за родителите. Фокусира се на развој на когнитивни, социјални и емоционални вештини.",
      objectives: [
        "Квалитетна претшколска едукација",
        "Здравствена грижа за деца",
        "Поддршка за родители",
        "Развој на вештини",
      ],
      impact: "Подобрување на развојот на децата и подготвеност за училиште",
      team: "Педагошки работници, медицински сестри, психолози",
    },
    "Public Transportation Enhancement": {
      title: "Подобрување на Јавниот Транспорт",
      description: "Модернизација на јавниот транспорт.",
      longDescription:
        "Проектот за подобрување на јавниот транспорт вклучува купување нови автобуси, подобрување на распоредите, инсталирање на дигитални информативни системи и подобрување на пристапноста за лица со попреченост.",
      objectives: [
        "Купување нови автобуси",
        "Подобрување на распоредите",
        "Дигитални информативни системи",
        "Подобрување на пристапноста",
      ],
      impact: "Подобрување на мобилноста и намалување на сообраќајот",
      team: "Транспортни инженери, планирачи, технолози",
    },
    "Community Health Clinics": {
      title: "Заеднички Здравствени Клиники",
      description: "Отворање на здравствени клиники во заедницата.",
      longDescription:
        "Проектот за заеднички здравствени клиники вклучува отворање на клиники во различни делови на градот за обезбедување пристапна здравствена грижа. Клиниките ќе нудат превентивни прегледи, вакцинации и основни медицински услуги.",
      objectives: [
        "Отворање здравствени клиники",
        "Превентивни прегледи",
        "Вакцинации",
        "Основни медицински услуги",
      ],
      impact: "Подобрување на пристапот до здравство",
      team: "Лекари, медицински сестри, административен персонал",
    },
    "Urban Forest Initiative": {
      title: "Иницијатива за Урбан Шума",
      description: "Создавање шумски површини во градот.",
      longDescription:
        "Иницијативата за урбан шума вклучува садење дрвја, создавање паркови и зелени коридори во градот. Ова ќе подобри воздухот, ќе намали топлинскиот ефект на остров и ќе создаде места за рекреација.",
      objectives: [
        "Садење дрвја",
        "Создавање паркови",
        "Зелени коридори",
        "Подобрување на воздухот",
      ],
      impact: "Подобрување на животната средина и квалитетот на воздухот",
      team: "Арбористи, еколози, градски планери",
    },
    "Historical Museum Renovation": {
      title: "Реновирање на Историски Музеј",
      description: "Модернизација на историскиот музеј.",
      longDescription:
        "Проектот за реновирање на историскиот музеј вклучува модернизација на изложбените простории, дигитализација на колекцијата и подобрување на едукативните програми. Музејот ќе стане интерактивен центар за учење за историјата.",
      objectives: [
        "Модернизација на изложбените простории",
        "Дигитализација на колекцијата",
        "Подобрување на едукативните програми",
        "Интерактивни изложби",
      ],
      impact:
        "Зачувување на историјата и подобрување на културното образование",
      team: "Музејски кустоси, архитекти, технолози",
    },
    "Job Training and Placement": {
      title: "Обука и Вработување",
      description: "Обука за вештини и помош за вработување.",
      longDescription:
        "Програмата за обука и вработување обезбедува обука за различни вештини, помош за пишување биографија, интервјуа и врски со работодавци. Фокусира се на вработување на невработените и лица кои се враќаат на работниот пазар.",
      objectives: [
        "Обука за вештини",
        "Помош за пишување биографија",
        "Подготовка за интервјуа",
        "Врски со работодавци",
      ],
      impact: "Намалување на невработеноста и подобрување на кариерите",
      team: "Кариерни советници, едукатори, регрутери",
    },
    "Cybersecurity Awareness": {
      title: "Свесност за Кибербезбедност",
      description: "Едукација за кибербезбедност и дигитална безбедност.",
      longDescription:
        "Програмата за свесност за кибербезбедност едуцира поединци и организации за дигитална безбедност, заштита на приватноста и најдобри практики за кибербезбедност. Нуди обука за безбедност на лозинки, спречување фишинг и заштита на податоци.",
      objectives: [
        "Едукација за кибербезбедност",
        "Обука за дигитална безбедност",
        "Создавање материјали за свесност",
        "Обезбедување поддршка",
      ],
      impact:
        "Подобрување на дигиталната безбедност за 5.000+ членови на заедницата",
      team: "Експерти за кибербезбедност, ИТ професионалци, едукатори за дигитална безбедност",
    },
    "Community Innovation Hub": {
      title: "Центар за Иновации на Заедницата",
      description: "Создавање простор за иновации и претприемништво.",
      longDescription:
        "Центарот за иновации на заедницата обезбедува соработнички простор за претприемачи, иноватори и членови на заедницата за развивање нови идеи и решенија. Центарот вклучува соработнички простории, сали за состаноци, технолошки ресурси и менторски програми.",
      objectives: [
        "Поддршка на 100 претприемачи",
        "Создавање соработнички простории",
        "Менторски програми",
        "Промовирање култура на иновации",
      ],
      impact: "Ќе поддржи 100+ претприемачи и ќе создаде 500+ работни места",
      team: "Специјалисти за иновации, бизнис ментори, организатори на заедницата",
    },
  },
};

// Current language
let currentLanguage = "en";

// Function to change language
function changeLanguage(lang) {
<<<<<<< Updated upstream
  currentLanguage = lang;

  // Update flag active states
  document
    .querySelectorAll(".header-language img[data-lang]")
    .forEach((flag) => {
      flag.classList.remove("active");
    });
=======
  // Update global language
  window.currentLanguage = lang;

  // Update active flag state
  document
    .querySelectorAll(".header-language img")
    .forEach((flag) => flag.classList.remove("active"));
>>>>>>> Stashed changes
  document
    .querySelector(`.header-language img[data-lang="${lang}"]`)
    .classList.add("active");

<<<<<<< Updated upstream
  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all translatable elements
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update select options
  const categorySelect = document.getElementById("category");
  if (categorySelect) {
    Array.from(categorySelect.options).forEach((option) => {
      const key = option.getAttribute("data-translate");
      if (key && translations[lang][key]) {
        option.textContent = translations[lang][key];
      }
    });
  }

  // Re-render projects to update dynamic content
=======
  // Update all translatable elements
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === "INPUT" && element.type === "placeholder") {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Re-render projects with new language
>>>>>>> Stashed changes
  applyFilters(false);
}

// Pagination variables
let currentPage = 1;
const projectsPerPage = 9;

const projects = [
  {
    id: 1,
    title: "Green City Initiative",
    description: "Promoting urban sustainability and green spaces.",
    longDescription:
      "The Green City Initiative is a comprehensive urban sustainability program aimed at transforming our city into a model of environmental consciousness. This project focuses on creating green spaces, implementing renewable energy solutions, and promoting eco-friendly transportation options. Through community engagement and innovative technologies, we're working to reduce carbon emissions by 30% within the next five years while improving the quality of life for all residents.",
    objectives: [
      "Reduce carbon emissions by 30%",
      "Create 50 new green spaces",
      "Implement solar panels on public buildings",
      "Promote cycling infrastructure",
    ],
    impact:
      "Expected to benefit over 500,000 residents and create 200+ green jobs",
    team: "Environmental experts, urban planners, community organizers",
    category: "Environment",
    status: "Ongoing",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    image: "https://picsum.photos/id/1/600/300",
    additionalImages: [
      "https://picsum.photos/id/101/400/250",
      "https://picsum.photos/id/102/400/250",
      "https://picsum.photos/id/103/400/250",
      "https://picsum.photos/id/104/400/250",
      "https://picsum.photos/id/105/400/250",
    ],
  },
  {
    id: 2,
    title: "School Renovation Project",
    description: "Upgrading schools for better learning environments.",
    longDescription:
      "Our School Renovation Project addresses the critical need for modern, safe, and accessible educational facilities. We're renovating 25 schools across the district, focusing on creating inclusive learning environments that support diverse learning styles. The project includes upgrading classrooms with modern technology, improving accessibility for students with disabilities, and creating multipurpose spaces for extracurricular activities.",
    objectives: [
      "Renovate 25 schools",
      "Install modern technology in classrooms",
      "Improve accessibility features",
      "Create multipurpose learning spaces",
    ],
    impact: "Will benefit 15,000+ students and 800+ teachers",
    team: "Architects, construction specialists, educational consultants",
    category: "Education",
    status: "Completed",
    startDate: "2023-05-01",
    endDate: "2023-11-30",
    image: "https://picsum.photos/id/2/600/300",
    additionalImages: [
      "https://picsum.photos/id/201/400/250",
      "https://picsum.photos/id/202/400/250",
      "https://picsum.photos/id/203/400/250",
      "https://picsum.photos/id/204/400/250",
      "https://picsum.photos/id/205/400/250",
    ],
  },
  {
    id: 3,
    title: "Rural Healthcare Access",
    description: "Improving medical facilities in rural areas.",
    longDescription:
      "The Rural Healthcare Access initiative addresses the healthcare disparities in remote communities by establishing mobile medical units and upgrading existing rural clinics. This project brings essential healthcare services closer to residents who previously had to travel long distances for medical care. We're also training local healthcare workers and implementing telemedicine solutions to ensure continuous care.",
    objectives: [
      "Establish 10 mobile medical units",
      "Upgrade 15 rural clinics",
      "Train 50 local healthcare workers",
      "Implement telemedicine services",
    ],
    impact: "Improving healthcare access for 100,000+ rural residents",
    team: "Medical professionals, rural development experts, technology specialists",
    category: "Healthcare",
    status: "Ongoing",
    startDate: "2024-02-10",
    endDate: "2024-10-15",
    image: "https://picsum.photos/id/3/600/300",
    additionalImages: [
      "https://picsum.photos/id/301/400/250",
      "https://picsum.photos/id/302/400/250",
      "https://picsum.photos/id/303/400/250",
      "https://picsum.photos/id/304/400/250",
      "https://picsum.photos/id/305/400/250",
    ],
  },
  {
    id: 4,
    title: "Bridge Construction Project",
    description: "Building infrastructure to connect communities.",
    longDescription:
      "This major infrastructure project involves constructing a modern bridge that will connect two previously isolated communities, significantly reducing travel time and improving economic opportunities. The bridge will be designed to withstand extreme weather conditions and accommodate both vehicular and pedestrian traffic. The project includes extensive environmental impact studies and community consultation to ensure minimal disruption to local ecosystems.",
    objectives: [
      "Construct 2.5km bridge",
      "Connect isolated communities",
      "Improve transportation efficiency",
      "Create economic opportunities",
    ],
    impact: "Will serve 50,000+ daily commuters and boost local economy",
    team: "Civil engineers, environmental consultants, community liaisons",
    category: "Infrastructure",
    status: "Upcoming",
    startDate: "2024-07-01",
    endDate: "2025-06-30",
    image: "https://picsum.photos/id/4/600/300",
    additionalImages: [
      "https://picsum.photos/id/401/400/250",
      "https://picsum.photos/id/402/400/250",
      "https://picsum.photos/id/403/400/250",
      "https://picsum.photos/id/404/400/250",
      "https://picsum.photos/id/405/400/250",
    ],
  },
  {
    id: 5,
    title: "Local Art Festival",
    description: "Celebrating culture with music, dance, and art.",
    longDescription:
      "The Local Art Festival is a month-long celebration of our region's rich cultural heritage, featuring traditional music, contemporary art exhibitions, dance performances, and workshops. This event brings together artists from diverse backgrounds to showcase their talents and preserve cultural traditions. The festival also includes educational programs for children and opportunities for emerging artists to gain exposure.",
    objectives: [
      "Celebrate cultural diversity",
      "Support local artists",
      "Preserve traditional arts",
      "Provide educational opportunities",
    ],
    impact: "Attracted 25,000+ visitors and supported 200+ artists",
    team: "Cultural organizers, artists, event planners, volunteers",
    category: "Cultural",
    status: "Completed",
    startDate: "2023-08-15",
    endDate: "2023-09-15",
    image: "https://picsum.photos/id/5/600/300",
    additionalImages: [
      "https://picsum.photos/id/501/400/250",
      "https://picsum.photos/id/502/400/250",
      "https://picsum.photos/id/503/400/250",
      "https://picsum.photos/id/504/400/250",
      "https://picsum.photos/id/505/400/250",
    ],
  },
  {
    id: 6,
    title: "Water Conservation Program",
    description: "Educating citizens on saving water.",
    longDescription:
      "Our Water Conservation Program addresses the critical need for sustainable water management through comprehensive education and infrastructure improvements. We're implementing smart irrigation systems, promoting water-efficient appliances, and conducting community workshops on water conservation techniques. The program also includes school education initiatives to instill water-saving habits in future generations.",
    objectives: [
      "Reduce water consumption by 25%",
      "Install smart irrigation systems",
      "Educate 10,000+ households",
      "Implement school programs",
    ],
    impact: "Expected to save 2 million gallons of water annually",
    team: "Environmental scientists, educators, community outreach specialists",
    category: "Environment",
    status: "Ongoing",
    startDate: "2024-03-01",
    endDate: "2024-11-30",
    image: "https://picsum.photos/id/6/600/300",
    additionalImages: [
      "https://picsum.photos/id/601/400/250",
      "https://picsum.photos/id/602/400/250",
      "https://picsum.photos/id/603/400/250",
      "https://picsum.photos/id/604/400/250",
      "https://picsum.photos/id/605/400/250",
    ],
  },
  {
    id: 7,
    title: "Adult Literacy Campaign",
    description: "Helping adults develop reading and writing skills.",
    longDescription:
      "The Adult Literacy Campaign addresses the critical issue of adult illiteracy by providing accessible, flexible learning opportunities. We offer evening classes, online learning modules, and one-on-one tutoring sessions to accommodate busy schedules. The program uses innovative teaching methods and real-world applications to make learning relevant and engaging for adult learners.",
    objectives: [
      "Help 1,000 adults achieve literacy",
      "Provide flexible learning options",
      "Create employment opportunities",
      "Improve community engagement",
    ],
    impact:
      "Will empower adults to better participate in society and workforce",
    team: "Literacy specialists, adult educators, community volunteers",
    category: "Education",
    status: "Upcoming",
    startDate: "2024-09-01",
    endDate: "2025-05-31",
    image: "https://picsum.photos/id/7/600/300",
    additionalImages: [
      "https://picsum.photos/id/701/400/250",
      "https://picsum.photos/id/702/400/250",
      "https://picsum.photos/id/703/400/250",
      "https://picsum.photos/id/704/400/250",
      "https://picsum.photos/id/705/400/250",
    ],
  },
  {
    id: 8,
    title: "Vaccination Awareness Drive",
    description: "Promoting vaccination for public health.",
    longDescription:
      "This comprehensive public health initiative focuses on increasing vaccination rates through education, accessibility, and community engagement. We're working with healthcare providers, schools, and community organizations to address vaccine hesitancy and ensure everyone has access to essential vaccinations. The program includes mobile vaccination clinics and multilingual educational materials.",
    objectives: [
      "Increase vaccination rates by 40%",
      "Establish mobile vaccination clinics",
      "Provide multilingual education",
      "Address vaccine hesitancy",
    ],
    impact: "Will improve public health outcomes for 200,000+ residents",
    team: "Healthcare professionals, public health experts, community educators",
    category: "Healthcare",
    status: "Ongoing",
    startDate: "2024-04-15",
    endDate: "2024-12-31",
    image: "https://picsum.photos/id/8/600/300",
    additionalImages: [
      "https://picsum.photos/id/801/400/250",
      "https://picsum.photos/id/802/400/250",
      "https://picsum.photos/id/803/400/250",
      "https://picsum.photos/id/804/400/250",
      "https://picsum.photos/id/805/400/250",
    ],
  },
  {
    id: 9,
    title: "Road Safety Campaign",
    description: "Improving road safety awareness and infrastructure.",
    longDescription:
      "Our Road Safety Campaign addresses the critical need for safer roads through comprehensive education, infrastructure improvements, and community engagement. We're implementing traffic calming measures, installing better signage, and conducting educational programs in schools and communities. The campaign also includes driver education programs and public awareness initiatives.",
    objectives: [
      "Reduce traffic accidents by 30%",
      "Install traffic calming measures",
      "Improve road signage",
      "Conduct safety education programs",
    ],
    impact: "Will improve safety for 300,000+ daily commuters",
    team: "Traffic engineers, safety experts, community organizers",
    category: "Infrastructure",
    status: "Ongoing",
    startDate: "2024-02-01",
    endDate: "2024-11-30",
    image: "https://picsum.photos/id/9/600/300",
    additionalImages: [
      "https://picsum.photos/id/901/400/250",
      "https://picsum.photos/id/902/400/250",
      "https://picsum.photos/id/903/400/250",
      "https://picsum.photos/id/904/400/250",
      "https://picsum.photos/id/905/400/250",
    ],
  },
  {
    id: 10,
    title: "Digital Skills Training",
    description: "Teaching digital literacy to all age groups.",
    longDescription:
      "The Digital Skills Training program addresses the growing digital divide by providing comprehensive computer and internet literacy training to people of all ages. We offer beginner to advanced courses, covering everything from basic computer operations to coding and digital marketing. The program includes both in-person and online learning options to accommodate different learning preferences.",
    objectives: [
      "Train 5,000 people in digital skills",
      "Provide beginner to advanced courses",
      "Offer flexible learning options",
      "Bridge the digital divide",
    ],
    impact: "Will empower individuals to participate in the digital economy",
    team: "IT professionals, educators, digital literacy specialists",
    category: "Education",
    status: "Ongoing",
    startDate: "2024-01-15",
    endDate: "2024-12-31",
    image: "https://picsum.photos/id/10/600/300",
    additionalImages: [
      "https://picsum.photos/id/1001/400/250",
      "https://picsum.photos/id/1002/400/250",
      "https://picsum.photos/id/1003/400/250",
      "https://picsum.photos/id/1004/400/250",
      "https://picsum.photos/id/1005/400/250",
    ],
  },
  {
    id: 11,
    title: "Community Garden Initiative",
    description: "Creating community gardens for sustainable food production.",
    longDescription:
      "The Community Garden Initiative promotes sustainable urban agriculture by establishing community gardens across the city. These gardens provide fresh, locally-grown produce while fostering community connections and environmental awareness. We provide training in organic gardening techniques, composting, and sustainable food production methods.",
    objectives: [
      "Establish 20 community gardens",
      "Train 500+ gardeners",
      "Produce 10,000+ pounds of food",
      "Foster community connections",
    ],
    impact: "Will provide fresh food and community spaces for 5,000+ residents",
    team: "Agricultural experts, community organizers, sustainability specialists",
    category: "Environment",
    status: "Upcoming",
    startDate: "2024-06-01",
    endDate: "2025-05-31",
    image: "https://picsum.photos/id/11/600/300",
    additionalImages: [
      "https://picsum.photos/id/1101/400/250",
      "https://picsum.photos/id/1102/400/250",
      "https://picsum.photos/id/1103/400/250",
      "https://picsum.photos/id/1104/400/250",
      "https://picsum.photos/id/1105/400/250",
    ],
  },
  {
    id: 12,
    title: "Youth Leadership Program",
    description: "Developing leadership skills in young people.",
    longDescription:
      "The Youth Leadership Program empowers young people to become community leaders through comprehensive training, mentorship, and hands-on project experience. Participants learn communication skills, project management, community organizing, and civic engagement. The program includes workshops, mentorship opportunities, and real-world project implementation.",
    objectives: [
      "Train 200 youth leaders",
      "Implement 50 community projects",
      "Provide mentorship opportunities",
      "Develop leadership skills",
    ],
    impact: "Will create a new generation of community leaders",
    team: "Leadership trainers, youth development specialists, community mentors",
    category: "Education",
    status: "Ongoing",
    startDate: "2024-03-01",
    endDate: "2024-12-31",
    image: "https://picsum.photos/id/12/600/300",
    additionalImages: [
      "https://picsum.photos/id/1201/400/250",
      "https://picsum.photos/id/1202/400/250",
      "https://picsum.photos/id/1203/400/250",
      "https://picsum.photos/id/1204/400/250",
      "https://picsum.photos/id/1205/400/250",
    ],
  },
  {
    id: 13,
    title: "Mental Health Support Network",
    description: "Providing mental health resources and support.",
    longDescription:
      "The Mental Health Support Network addresses the critical need for accessible mental health services by establishing community-based support groups, counseling services, and crisis intervention programs. We work with mental health professionals, community organizations, and volunteers to provide comprehensive support for individuals and families dealing with mental health challenges.",
    objectives: [
      "Establish 15 support groups",
      "Provide counseling services",
      "Train 100 mental health advocates",
      "Create crisis intervention programs",
    ],
    impact: "Will support 10,000+ individuals with mental health needs",
    team: "Mental health professionals, counselors, community advocates",
    category: "Healthcare",
    status: "Upcoming",
    startDate: "2024-08-01",
    endDate: "2025-07-31",
    image: "https://picsum.photos/id/13/600/300",
    additionalImages: [
      "https://picsum.photos/id/1301/400/250",
      "https://picsum.photos/id/1302/400/250",
      "https://picsum.photos/id/1303/400/250",
      "https://picsum.photos/id/1304/400/250",
      "https://picsum.photos/id/1305/400/250",
    ],
  },
  {
    id: 14,
    title: "Public Library Expansion",
    description: "Expanding library services and facilities.",
    longDescription:
      "The Public Library Expansion project modernizes and expands our library system to better serve the community's educational and cultural needs. We're adding new facilities, expanding digital resources, and creating innovative learning spaces. The project includes technology upgrades, community meeting rooms, and specialized collections for different age groups and interests.",
    objectives: [
      "Expand 5 library branches",
      "Add digital resources",
      "Create learning spaces",
      "Improve accessibility",
    ],
    impact: "Will serve 100,000+ library users annually",
    team: "Librarians, architects, technology specialists",
    category: "Education",
    status: "Completed",
    startDate: "2023-09-01",
    endDate: "2024-02-28",
    image: "https://picsum.photos/id/14/600/300",
    additionalImages: [
      "https://picsum.photos/id/1401/400/250",
      "https://picsum.photos/id/1402/400/250",
      "https://picsum.photos/id/1403/400/250",
      "https://picsum.photos/id/1404/400/250",
      "https://picsum.photos/id/1405/400/250",
    ],
  },
  {
    id: 15,
    title: "Renewable Energy Installation",
    description: "Installing solar panels and wind turbines.",
    longDescription:
      "The Renewable Energy Installation project implements clean energy solutions across public buildings and community facilities. We're installing solar panels, wind turbines, and energy storage systems to reduce carbon emissions and energy costs. The project includes community education about renewable energy and energy conservation practices.",
    objectives: [
      "Install solar panels on 50 buildings",
      "Add 10 wind turbines",
      "Reduce energy costs by 40%",
      "Educate community about renewables",
    ],
    impact: "Will reduce carbon emissions by 2,000 tons annually",
    team: "Energy engineers, environmental specialists, installation experts",
    category: "Environment",
    status: "Ongoing",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    image: "https://picsum.photos/id/15/600/300",
    additionalImages: [
      "https://picsum.photos/id/1501/400/250",
      "https://picsum.photos/id/1502/400/250",
      "https://picsum.photos/id/1503/400/250",
      "https://picsum.photos/id/1504/400/250",
      "https://picsum.photos/id/1505/400/250",
    ],
  },
  {
    id: 16,
    title: "Cultural Heritage Preservation",
    description: "Preserving and promoting local cultural heritage.",
    longDescription:
      "The Cultural Heritage Preservation project works to document, preserve, and promote our region's rich cultural heritage. We're creating digital archives, organizing cultural exhibitions, and developing educational programs about local history and traditions. The project includes oral history collection, artifact preservation, and cultural tourism development.",
    objectives: [
      "Document 1,000 cultural artifacts",
      "Create digital archives",
      "Organize cultural exhibitions",
      "Develop educational programs",
    ],
    impact: "Will preserve cultural heritage for future generations",
    team: "Cultural historians, archivists, museum specialists",
    category: "Cultural",
    status: "Ongoing",
    startDate: "2024-02-01",
    endDate: "2024-11-30",
    image: "https://picsum.photos/id/16/600/300",
    additionalImages: [
      "https://picsum.photos/id/1601/400/250",
      "https://picsum.photos/id/1602/400/250",
      "https://picsum.photos/id/1603/400/250",
      "https://picsum.photos/id/1604/400/250",
      "https://picsum.photos/id/1605/400/250",
    ],
  },
  {
    id: 17,
    title: "Emergency Response Training",
    description: "Training community members in emergency response.",
    longDescription:
      "The Emergency Response Training program prepares community members to respond effectively to emergencies and disasters. We provide training in first aid, emergency preparedness, disaster response, and community coordination. The program includes hands-on training, simulation exercises, and certification programs for emergency responders.",
    objectives: [
      "Train 500 emergency responders",
      "Provide first aid certification",
      "Conduct disaster preparedness training",
      "Establish emergency response networks",
    ],
    impact:
      "Will improve emergency response capabilities for 50,000+ residents",
    team: "Emergency response experts, medical professionals, safety trainers",
    category: "Healthcare",
    status: "Upcoming",
    startDate: "2024-07-01",
    endDate: "2025-06-30",
    image: "https://picsum.photos/id/17/600/300",
    additionalImages: [
      "https://picsum.photos/id/1701/400/250",
      "https://picsum.photos/id/1702/400/250",
      "https://picsum.photos/id/1703/400/250",
      "https://picsum.photos/id/1704/400/250",
      "https://picsum.photos/id/1705/400/250",
    ],
  },
  {
    id: 18,
    title: "Smart City Technology",
    description: "Implementing smart city solutions for better urban living.",
    longDescription:
      "The Smart City Technology project implements cutting-edge technology solutions to improve urban living and city services. We're installing smart traffic lights, environmental monitoring systems, and digital service platforms. The project includes data analytics, citizen engagement platforms, and automated service delivery systems.",
    objectives: [
      "Install smart traffic systems",
      "Implement environmental monitoring",
      "Create digital service platforms",
      "Improve city efficiency",
    ],
    impact: "Will improve city services for 500,000+ residents",
    team: "Technology experts, urban planners, data analysts",
    category: "Infrastructure",
    status: "Ongoing",
    startDate: "2024-03-01",
    endDate: "2024-12-31",
    image: "https://picsum.photos/id/18/600/300",
    additionalImages: [
      "https://picsum.photos/id/1801/400/250",
      "https://picsum.photos/id/1802/400/250",
      "https://picsum.photos/id/1803/400/250",
      "https://picsum.photos/id/1804/400/250",
      "https://picsum.photos/id/1805/400/250",
    ],
  },
  {
    id: 19,
    title: "Senior Citizen Support",
    description: "Providing support and services for senior citizens.",
    longDescription:
      "The Senior Citizen Support program addresses the unique needs of our aging population by providing comprehensive services and support. We offer health monitoring, social activities, transportation services, and assistance with daily living activities. The program includes home visits, community centers, and specialized healthcare services for seniors.",
    objectives: [
      "Support 2,000 senior citizens",
      "Provide health monitoring services",
      "Organize social activities",
      "Offer transportation assistance",
    ],
    impact: "Will improve quality of life for 2,000+ senior citizens",
    team: "Geriatric specialists, social workers, healthcare providers",
    category: "Healthcare",
    status: "Ongoing",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    image: "https://picsum.photos/id/19/600/300",
    additionalImages: [
      "https://picsum.photos/id/1901/400/250",
      "https://picsum.photos/id/1902/400/250",
      "https://picsum.photos/id/1903/400/250",
      "https://picsum.photos/id/1904/400/250",
      "https://picsum.photos/id/1905/400/250",
    ],
  },
  {
    id: 20,
    title: "Waste Management Innovation",
    description: "Implementing innovative waste management solutions.",
    longDescription:
      "The Waste Management Innovation project implements cutting-edge solutions for reducing, reusing, and recycling waste. We're installing smart waste bins, implementing composting programs, and developing recycling education initiatives. The project includes waste-to-energy systems and community education about sustainable waste practices.",
    objectives: [
      "Reduce waste by 50%",
      "Implement composting programs",
      "Install smart waste systems",
      "Educate community about waste reduction",
    ],
    impact: "Will reduce landfill waste by 10,000 tons annually",
    team: "Environmental engineers, waste management specialists, sustainability experts",
    category: "Environment",
    status: "Upcoming",
    startDate: "2024-09-01",
    endDate: "2025-08-31",
    image: "https://picsum.photos/id/20/600/300",
    additionalImages: [
      "https://picsum.photos/id/2001/400/250",
      "https://picsum.photos/id/2002/400/250",
      "https://picsum.photos/id/2003/400/250",
      "https://picsum.photos/id/2004/400/250",
      "https://picsum.photos/id/2005/400/250",
    ],
  },
  {
    id: 21,
    title: "Sports and Recreation Center",
    description: "Building a modern sports and recreation facility.",
    longDescription:
      "The Sports and Recreation Center project creates a state-of-the-art facility for sports, fitness, and recreational activities. The center includes indoor and outdoor sports facilities, fitness equipment, swimming pools, and community spaces. The project promotes physical health, community engagement, and youth development through sports and recreation.",
    objectives: [
      "Build modern sports facility",
      "Provide fitness equipment",
      "Create community spaces",
      "Promote physical health",
    ],
    impact: "Will serve 50,000+ community members annually",
    team: "Architects, sports facility experts, community planners",
    category: "Infrastructure",
    status: "Completed",
    startDate: "2023-06-01",
    endDate: "2024-01-31",
    image: "https://picsum.photos/id/21/600/300",
    additionalImages: [
      "https://picsum.photos/id/2101/400/250",
      "https://picsum.photos/id/2102/400/250",
      "https://picsum.photos/id/2103/400/250",
      "https://picsum.photos/id/2104/400/250",
      "https://picsum.photos/id/2105/400/250",
    ],
  },
  {
    id: 22,
    title: "Music and Arts Education",
    description: "Providing music and arts education for all ages.",
    longDescription:
      "The Music and Arts Education program provides comprehensive arts education for people of all ages and skill levels. We offer classes in music, visual arts, dance, and theater, taught by professional artists and educators. The program includes performance opportunities, exhibitions, and community arts events.",
    objectives: [
      "Provide arts education for 1,000 students",
      "Offer diverse art forms",
      "Create performance opportunities",
      "Foster artistic expression",
    ],
    impact: "Will enrich cultural life for 5,000+ community members",
    team: "Professional artists, arts educators, cultural organizers",
    category: "Cultural",
    status: "Ongoing",
    startDate: "2024-02-01",
    endDate: "2024-12-31",
    image: "https://picsum.photos/id/22/600/300",
    additionalImages: [
      "https://picsum.photos/id/2201/400/250",
      "https://picsum.photos/id/2202/400/250",
      "https://picsum.photos/id/2203/400/250",
      "https://picsum.photos/id/2204/400/250",
      "https://picsum.photos/id/2205/400/250",
    ],
  },
  {
    id: 23,
    title: "Early Childhood Development",
    description: "Supporting early childhood development and education.",
    longDescription:
      "The Early Childhood Development program provides comprehensive support for young children and their families. We offer early education programs, developmental assessments, family support services, and parent education. The program focuses on creating strong foundations for children's future learning and development.",
    objectives: [
      "Support 500 young children",
      "Provide early education",
      "Offer family support services",
      "Conduct developmental assessments",
    ],
    impact: "Will support healthy development for 500+ children",
    team: "Early childhood educators, developmental specialists, family support workers",
    category: "Education",
    status: "Ongoing",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    image: "https://picsum.photos/id/23/600/300",
    additionalImages: [
      "https://picsum.photos/id/2301/400/250",
      "https://picsum.photos/id/2302/400/250",
      "https://picsum.photos/id/2303/400/250",
      "https://picsum.photos/id/2304/400/250",
      "https://picsum.photos/id/2305/400/250",
    ],
  },
  {
    id: 24,
    title: "Public Transportation Enhancement",
    description: "Improving public transportation services and accessibility.",
    longDescription:
      "The Public Transportation Enhancement project improves the efficiency, accessibility, and sustainability of our public transportation system. We're adding new routes, upgrading vehicles, implementing smart ticketing systems, and improving accessibility for people with disabilities. The project includes real-time tracking and mobile apps for better user experience.",
    objectives: [
      "Add 10 new bus routes",
      "Upgrade 50 vehicles",
      "Implement smart ticketing",
      "Improve accessibility",
    ],
    impact: "Will serve 100,000+ daily commuters",
    team: "Transportation engineers, accessibility experts, technology specialists",
    category: "Infrastructure",
    status: "Upcoming",
    startDate: "2024-08-01",
    endDate: "2025-07-31",
    image: "https://picsum.photos/id/24/600/300",
    additionalImages: [
      "https://picsum.photos/id/2401/400/250",
      "https://picsum.photos/id/2402/400/250",
      "https://picsum.photos/id/2403/400/250",
      "https://picsum.photos/id/2404/400/250",
      "https://picsum.photos/id/2405/400/250",
    ],
  },
  {
    id: 25,
    title: "Community Health Clinics",
    description: "Establishing accessible community health clinics.",
    longDescription:
      "The Community Health Clinics project establishes accessible healthcare facilities in underserved areas. These clinics provide primary care, preventive services, health education, and referrals to specialized care. The project includes mobile health units and telehealth services to reach remote communities.",
    objectives: [
      "Establish 8 community clinics",
      "Provide primary care services",
      "Offer health education",
      "Implement telehealth services",
    ],
    impact: "Will provide healthcare access for 50,000+ residents",
    team: "Healthcare professionals, community health workers, medical administrators",
    category: "Healthcare",
    status: "Completed",
    startDate: "2023-10-01",
    endDate: "2024-03-31",
    image: "https://picsum.photos/id/25/600/300",
    additionalImages: [
      "https://picsum.photos/id/2501/400/250",
      "https://picsum.photos/id/2502/400/250",
      "https://picsum.photos/id/2503/400/250",
      "https://picsum.photos/id/2504/400/250",
      "https://picsum.photos/id/2505/400/250",
    ],
  },
  {
    id: 26,
    title: "Urban Forest Initiative",
    description: "Creating urban forests and green corridors.",
    longDescription:
      "The Urban Forest Initiative creates green corridors and urban forests throughout the city to improve air quality, reduce urban heat, and enhance biodiversity. We're planting native trees, creating wildlife habitats, and developing walking trails. The project includes community tree planting events and environmental education programs.",
    objectives: [
      "Plant 10,000 trees",
      "Create 5 green corridors",
      "Develop walking trails",
      "Enhance biodiversity",
    ],
    impact: "Will improve air quality and create habitats for urban wildlife",
    team: "Forestry experts, environmental scientists, landscape architects",
    category: "Environment",
    status: "Ongoing",
    startDate: "2024-04-01",
    endDate: "2024-11-30",
    image: "https://picsum.photos/id/26/600/300",
    additionalImages: [
      "https://picsum.photos/id/2601/400/250",
      "https://picsum.photos/id/2602/400/250",
      "https://picsum.photos/id/2603/400/250",
      "https://picsum.photos/id/2604/400/250",
      "https://picsum.photos/id/2605/400/250",
    ],
  },
  {
    id: 27,
    title: "Historical Museum Renovation",
    description: "Renovating and expanding the historical museum.",
    longDescription:
      "The Historical Museum Renovation project modernizes and expands our local history museum to better preserve and showcase our community's rich heritage. We're adding new exhibition spaces, improving accessibility, and creating interactive displays. The project includes digital archives and educational programs for schools and visitors.",
    objectives: [
      "Renovate museum facilities",
      "Add new exhibition spaces",
      "Create interactive displays",
      "Improve accessibility",
    ],
    impact: "Will attract 25,000+ visitors annually",
    team: "Museum curators, historians, exhibition designers",
    category: "Cultural",
    status: "Upcoming",
    startDate: "2024-10-01",
    endDate: "2025-09-30",
    image: "https://picsum.photos/id/27/600/300",
    additionalImages: [
      "https://picsum.photos/id/2701/400/250",
      "https://picsum.photos/id/2702/400/250",
      "https://picsum.photos/id/2703/400/250",
      "https://picsum.photos/id/2704/400/250",
      "https://picsum.photos/id/2705/400/250",
    ],
  },
  {
    id: 28,
    title: "Job Training and Placement",
    description: "Providing job training and employment assistance.",
    longDescription:
      "The Job Training and Placement program helps unemployed and underemployed individuals develop marketable skills and find meaningful employment. We offer vocational training, job search assistance, resume writing workshops, and interview preparation. The program includes partnerships with local employers and ongoing support for job seekers.",
    objectives: [
      "Train 1,000 job seekers",
      "Place 500 people in jobs",
      "Provide career counseling",
      "Develop employer partnerships",
    ],
    impact: "Will help 1,000+ people find employment",
    team: "Career counselors, job training specialists, employment coordinators",
    category: "Education",
    status: "Ongoing",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    image: "https://picsum.photos/id/28/600/300",
    additionalImages: [
      "https://picsum.photos/id/2801/400/250",
      "https://picsum.photos/id/2802/400/250",
      "https://picsum.photos/id/2803/400/250",
      "https://picsum.photos/id/2804/400/250",
      "https://picsum.photos/id/2805/400/250",
    ],
  },
  {
    id: 29,
    title: "Cybersecurity Awareness",
    description: "Educating community about cybersecurity and digital safety.",
    longDescription:
      "The Cybersecurity Awareness program educates individuals and organizations about digital safety, privacy protection, and cybersecurity best practices. We provide training on password security, phishing prevention, data protection, and safe internet usage. The program includes workshops for different age groups and organizations.",
    objectives: [
      "Educate 5,000 people about cybersecurity",
      "Provide digital safety training",
      "Create awareness materials",
      "Offer ongoing support",
    ],
    impact: "Will improve digital safety for 5,000+ community members",
    team: "Cybersecurity experts, IT professionals, digital safety educators",
    category: "Education",
    status: "Upcoming",
    startDate: "2024-11-01",
    endDate: "2025-10-31",
    image: "https://picsum.photos/id/29/600/300",
    additionalImages: [
      "https://picsum.photos/id/2901/400/250",
      "https://picsum.photos/id/2902/400/250",
      "https://picsum.photos/id/2903/400/250",
      "https://picsum.photos/id/2904/400/250",
      "https://picsum.photos/id/2905/400/250",
    ],
  },
  {
    id: 30,
    title: "Community Innovation Hub",
    description: "Creating a space for innovation and entrepreneurship.",
    longDescription:
      "The Community Innovation Hub provides a collaborative space for entrepreneurs, innovators, and community members to develop new ideas and solutions. The hub includes co-working spaces, meeting rooms, technology resources, and mentorship programs. We support startups, social enterprises, and community innovation projects.",
    objectives: [
      "Support 100 entrepreneurs",
      "Create collaborative spaces",
      "Provide mentorship programs",
      "Foster innovation culture",
    ],
    impact: "Will support 100+ entrepreneurs and create 500+ jobs",
    team: "Innovation specialists, business mentors, community organizers",
    category: "Infrastructure",
    status: "Ongoing",
    startDate: "2024-05-01",
    endDate: "2024-12-31",
    image: "https://picsum.photos/id/30/600/300",
    additionalImages: [
      "https://picsum.photos/id/3001/400/250",
      "https://picsum.photos/id/3002/400/250",
      "https://picsum.photos/id/3003/400/250",
      "https://picsum.photos/id/3004/400/250",
      "https://picsum.photos/id/3005/400/250",
    ],
  },
];

function formatDate(dateString) {
<<<<<<< Updated upstream
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateObj = new Date(dateString);

  if (currentLanguage === "mk") {
    // Macedonian date formatting
    const months = [
      "јануари",
      "февруари",
      "март",
      "април",
      "мај",
      "јуни",
      "јули",
      "август",
      "септември",
      "октомври",
      "ноември",
      "декември",
    ];
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  } else {
    // English date formatting
    return dateObj.toLocaleDateString("en-US", options);
  }
}

function getStatusDateText(project) {
  const status = project.status.toLowerCase();
  if (status === "ongoing") {
    return `${translations[currentLanguage].started}: ${formatDate(
      project.startDate
    )}`;
  } else if (status === "completed") {
    return `${translations[currentLanguage].completed}: ${formatDate(
      project.endDate
    )}`;
  } else if (status === "upcoming") {
    return `${translations[currentLanguage].starts}: ${formatDate(
      project.startDate
    )}`;
  } else {
    return "";
=======
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Ensure currentLanguage is set
  if (!window.currentLanguage) {
    window.currentLanguage = "en";
  }

  if (window.currentLanguage === "mk") {
    options.locale = "mk-MK";
  }

  return date.toLocaleDateString(
    window.currentLanguage === "mk" ? "mk-MK" : "en-US",
    options
  );
}

function getStatusDateText(project) {
  const now = new Date();
  const startDate = new Date(project.startDate);
  const endDate = new Date(project.endDate);

  // Ensure currentLanguage is set
  if (!window.currentLanguage) {
    window.currentLanguage = "en";
  }

  if (project.status === "Ongoing") {
    return `${translations[window.currentLanguage].started}: ${formatDate(
      project.startDate
    )}`;
  } else if (project.status === "Completed") {
    return `${translations[window.currentLanguage].completed}: ${formatDate(
      project.endDate
    )}`;
  } else {
    return `${translations[window.currentLanguage].starts}: ${formatDate(
      project.startDate
    )}`;
>>>>>>> Stashed changes
  }
}

function resetFilters() {
  // Reset category to "all"
  document.getElementById("category").value = "all";

  // Uncheck all status checkboxes
  const statusCheckboxes = document.querySelectorAll('input[name="status"]');
  statusCheckboxes.forEach((checkbox) => (checkbox.checked = false));

  // Clear date inputs
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";

  // Apply filters to show all projects and reset to page 1
  applyFilters(true);
}

function renderProjects(filteredProjects) {
  const projectGrid = document.getElementById("projectGrid");
  projectGrid.innerHTML = "";

<<<<<<< Updated upstream
  if (filteredProjects.length === 0) {
    projectGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">
        <h3>${translations[currentLanguage].noProjectsFound}</h3>
        <p>${translations[currentLanguage].tryAdjustingFilters}</p>
        <button onclick="resetFilters()" style="margin-top: 20px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 8px; cursor: pointer;">
          ${translations[currentLanguage].resetAllFilters}
=======
  // Ensure currentLanguage is set
  if (!window.currentLanguage) {
    window.currentLanguage = "en";
  }

  if (filteredProjects.length === 0) {
    projectGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">
        <h3>${translations[window.currentLanguage].noProjectsFound}</h3>
        <p>${translations[window.currentLanguage].tryAdjustingFilters}</p>
        <button onclick="resetFilters()" style="margin-top: 20px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 8px; cursor: pointer;">
          ${translations[window.currentLanguage].resetAllFilters}
>>>>>>> Stashed changes
        </button>
      </div>
    `;
    // Hide pagination when no projects
    const paginationContainer = document.getElementById("pagination");
    if (paginationContainer) {
      paginationContainer.innerHTML = "";
    }
    return;
  }

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const projectsToShow = filteredProjects.slice(startIndex, endIndex);

  projectsToShow.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    // Get translated project content
    const projectTranslation =
<<<<<<< Updated upstream
      projectTranslations[currentLanguage][project.title] || project;
=======
      projectTranslations[window.currentLanguage][project.title] || project;
>>>>>>> Stashed changes
    const translatedTitle = projectTranslation.title || project.title;
    const translatedDescription =
      projectTranslation.description || project.description;

    // Get translated status
    const statusKey = project.status.toLowerCase();
    const translatedStatus =
<<<<<<< Updated upstream
      translations[currentLanguage][statusKey] || project.status;
=======
      translations[window.currentLanguage][statusKey] || project.status;
>>>>>>> Stashed changes

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${translatedTitle}" loading="lazy">
      <div class="content">
        <div class="content-header">
          <h3>${translatedTitle}</h3>
          <span class="status ${project.status.toLowerCase()}">${translatedStatus}</span>
        </div>
        <p>${translatedDescription}</p>
        <div class="footer">
          <big>${getStatusDateText(project)}</big>
          <a href="#" class="read-more-link" onclick="openProjectModal(${
            project.id
<<<<<<< Updated upstream
          }); return false;">${translations[currentLanguage].readMore}</a>
=======
          }); return false;">${
      translations[window.currentLanguage].readMore
    }</a>
>>>>>>> Stashed changes
        </div>
      </div>
    `;

    projectGrid.appendChild(projectCard);
  });

  // Render pagination after rendering projects
  renderPagination(filteredProjects.length);
}

function renderPagination(totalProjects) {
  const totalPages = Math.ceil(totalProjects / projectsPerPage);
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

<<<<<<< Updated upstream
=======
  // Ensure currentLanguage is set
  if (!window.currentLanguage) {
    window.currentLanguage = "en";
  }

>>>>>>> Stashed changes
  if (totalPages <= 1) return;

  // Function to scroll to projects section
  const scrollToProjects = () => {
    const projectsContainer = document.querySelector("#projects");
    if (projectsContainer) {
      projectsContainer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Previous button
  const prevButton = document.createElement("button");
<<<<<<< Updated upstream
  prevButton.textContent = "←";
  prevButton.title = translations[currentLanguage].previous;
=======
  prevButton.textContent = "<";
  prevButton.title = translations[window.currentLanguage].previous;
>>>>>>> Stashed changes
  prevButton.disabled = currentPage === 1;
  prevButton.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      applyFilters(false);
      scrollToProjects();
    }
  };
  paginationContainer.appendChild(prevButton);

  // Page numbers
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  // First page and ellipsis
  if (startPage > 1) {
    const firstButton = document.createElement("button");
    firstButton.textContent = "1";
    firstButton.onclick = () => {
      currentPage = 1;
      applyFilters(false);
      scrollToProjects();
    };
    paginationContainer.appendChild(firstButton);

    if (startPage > 2) {
      const ellipsis = document.createElement("span");
      ellipsis.textContent = "...";
      ellipsis.style.padding = "8px 12px";
      ellipsis.style.color = "#666";
      paginationContainer.appendChild(ellipsis);
    }
  }

  // Page numbers
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    if (i === currentPage) {
      pageButton.setAttribute("data-current", "true");
    }
    pageButton.onclick = () => {
      currentPage = i;
      applyFilters(false);
      scrollToProjects();
    };
    paginationContainer.appendChild(pageButton);
  }

  // Last page and ellipsis
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsis = document.createElement("span");
      ellipsis.textContent = "...";
      ellipsis.style.padding = "8px 12px";
      ellipsis.style.color = "#666";
      paginationContainer.appendChild(ellipsis);
    }

    const lastButton = document.createElement("button");
    lastButton.textContent = totalPages;
    lastButton.onclick = () => {
      currentPage = totalPages;
      applyFilters(false);
      scrollToProjects();
    };
    paginationContainer.appendChild(lastButton);
  }

  // Next button
  const nextButton = document.createElement("button");
<<<<<<< Updated upstream
  nextButton.textContent = "→";
  nextButton.title = translations[currentLanguage].next;
=======
  nextButton.textContent = ">";
  nextButton.title = translations[window.currentLanguage].next;
>>>>>>> Stashed changes
  nextButton.disabled = currentPage === totalPages;
  nextButton.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      applyFilters(false);
      scrollToProjects();
    }
  };
  paginationContainer.appendChild(nextButton);
}

function applyFilters(resetPage = true) {
  const categorySelect = document.getElementById("category");
  const statusCheckboxes = document.querySelectorAll('input[name="status"]');
  const startDateInput = document.getElementById("startDate");
  const endDateInput = document.getElementById("endDate");

  const selectedCategory = categorySelect.value;
  const selectedStatuses = Array.from(statusCheckboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);

  const startDate = startDateInput.value
    ? new Date(startDateInput.value)
    : null;
  const endDate = endDateInput.value ? new Date(endDateInput.value) : null;

  let filtered = projects.filter((project) => {
    if (selectedCategory !== "all" && project.category !== selectedCategory)
      return false;

    if (
      selectedStatuses.length > 0 &&
      !selectedStatuses.includes(project.status)
    )
      return false;

    const projectStartDate = new Date(project.startDate);

    if (startDate && projectStartDate < startDate) return false;
    if (endDate && projectStartDate > endDate) return false;

    return true;
  });

  if (resetPage) {
    currentPage = 1; // Reset to first page only when filters are applied
  }

  renderProjects(filtered);

  // Scroll to projects section when filters are applied (but not on initial load)
  // if (resetPage && !window.initialLoadComplete) {
  //   setTimeout(() => {
  //     const projectsSection = document.querySelector(".projects-section");
  //     if (projectsSection) {
  //       projectsSection.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   }, 100); // Small delay to ensure projects are rendered
  // }
}

function renderProjectsWithPagination(filteredProjects) {
  renderProjects(filteredProjects);
}

// Function to open project modal overlay
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

<<<<<<< Updated upstream
  // Get translated project content
  const projectTranslation =
    projectTranslations[currentLanguage][project.title] || project;
=======
  // Ensure currentLanguage is set
  if (!window.currentLanguage) {
    window.currentLanguage = "en";
  }

  // Get translated project content
  const projectTranslation =
    projectTranslations[window.currentLanguage][project.title] || project;
>>>>>>> Stashed changes
  const translatedTitle = projectTranslation.title || project.title;
  const translatedLongDescription =
    projectTranslation.longDescription || project.longDescription;
  const translatedObjectives =
    projectTranslation.objectives || project.objectives;
  const translatedImpact = projectTranslation.impact || project.impact;
  const translatedTeam = projectTranslation.team || project.team;

  // Get translated status
  const statusKey = project.status.toLowerCase();
  const translatedStatus =
<<<<<<< Updated upstream
    translations[currentLanguage][statusKey] || project.status;
=======
    translations[window.currentLanguage][statusKey] || project.status;
>>>>>>> Stashed changes

  // Create modal overlay
  const modal = document.createElement("div");
  modal.className = "project-modal-overlay";
  modal.innerHTML = `
    <div class="project-modal">
      <div class="modal-header">
        <div class="title-container">
          <h2>${translatedTitle}</h2>
        </div>
        <button class="close-modal-btn">&times;</button>
      </div>
      <div class="modal-content">
        <img src="${
          project.image
        }" alt="${translatedTitle}" class="modal-image" id="mainModalImage">
        <div class="project-gallery">
          <div class="gallery-grid">
            <div class="gallery-item active" data-image="${
              project.image
            }" data-index="0">
              <img src="${
                project.image
              }" alt="${translatedTitle}" class="gallery-image">
            </div>
            ${project.additionalImages
              .map(
                (img, index) => `
              <div class="gallery-item" data-image="${img}" data-index="${
                  index + 1
                }">
                <img src="${img}" alt="${translatedTitle}" class="gallery-image">
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        <div class="modal-description">
<<<<<<< Updated upstream
          <h3>${translations[currentLanguage].projectDescription}</h3>
=======
          <h3>${translations[window.currentLanguage].projectDescription}</h3>
>>>>>>> Stashed changes
          <p>${translatedLongDescription}</p>
        </div>
        <div class="modal-details">
          <div class="detail-item">
<<<<<<< Updated upstream
            <strong>${translations[currentLanguage].category}:</strong> ${
    translations[currentLanguage][project.category.toLowerCase()] ||
=======
            <strong>${
              translations[window.currentLanguage].category
            }:</strong> ${
    translations[window.currentLanguage][project.category.toLowerCase()] ||
>>>>>>> Stashed changes
    project.category
  }
          </div>
          <div class="detail-item">
<<<<<<< Updated upstream
            <strong>${translations[currentLanguage].status}:</strong> 
=======
            <strong>${translations[window.currentLanguage].status}:</strong> 
>>>>>>> Stashed changes
            <span class="status ${project.status.toLowerCase()}">${translatedStatus}</span>
          </div>
          <div class="detail-item">
            <strong>${
<<<<<<< Updated upstream
              translations[currentLanguage].duration
=======
              translations[window.currentLanguage].duration
>>>>>>> Stashed changes
            }:</strong> ${formatDate(project.startDate)} - ${formatDate(
    project.endDate
  )}
          </div>
          <div class="detail-item">
            <strong>${
<<<<<<< Updated upstream
              translations[currentLanguage].team
            }:</strong> ${translatedTeam}
          </div>
          <div class="detail-item">
            <strong>${translations[currentLanguage].objectives}:</strong>
=======
              translations[window.currentLanguage].team
            }:</strong> ${translatedTeam}
          </div>
          <div class="detail-item">
            <strong>${translations[window.currentLanguage].objectives}:</strong>
>>>>>>> Stashed changes
            <ul>${translatedObjectives
              .map((obj) => `<li>${obj}</li>`)
              .join("")}</ul>
          </div>
          <div class="detail-item">
            <strong>${
<<<<<<< Updated upstream
              translations[currentLanguage].impact
=======
              translations[window.currentLanguage].impact
>>>>>>> Stashed changes
            }:</strong> ${translatedImpact}
          </div>
        </div>
      </div>
    </div>
  `;

  // Prevent background scroll
  document.body.classList.add("modal-open");

  // Add event listeners for gallery images
  const galleryItems = modal.querySelectorAll(".gallery-item");
  const mainImage = modal.querySelector("#mainModalImage");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imageUrl = item.getAttribute("data-image");

      // Update main image
      mainImage.src = imageUrl;

      // Update active state
      galleryItems.forEach((galleryItem) =>
        galleryItem.classList.remove("active")
      );
      item.classList.add("active");
    });
  });

  // Close modal event
  modal.querySelector(".close-modal-btn").addEventListener("click", () => {
    modal.remove();
    document.body.classList.remove("modal-open");
  });

  // Close modal on overlay click (optional, only if click outside modal)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
      document.body.classList.remove("modal-open");
    }
  });

  document.body.appendChild(modal);
<<<<<<< Updated upstream
=======

  // Show modal immediately
  modal.style.display = "flex";
>>>>>>> Stashed changes
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

window.addEventListener("DOMContentLoaded", () => {
<<<<<<< Updated upstream
=======
  // Initialize currentLanguage if not already set
  if (!window.currentLanguage) {
    window.currentLanguage = "en";
  }

>>>>>>> Stashed changes
  // Add event listeners for language flags
  document
    .querySelectorAll(".header-language img[data-lang]")
    .forEach((flag) => {
      flag.addEventListener("click", () => {
        const lang = flag.getAttribute("data-lang");
        changeLanguage(lang);
      });
    });

  // Set initial active state for English flag
  document
    .querySelector(".header-language img[data-lang='en']")
    .classList.add("active");

  // Add event listeners for filters
  const filterForm = document.getElementById("filterForm");
  filterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    applyFilters(true); // Reset page when filters are applied
  });

  // Add specific click event listener for Apply Filters button
  const applyFiltersBtn = document.getElementById("applyFiltersBtn");
  applyFiltersBtn.addEventListener("click", (e) => {
    e.preventDefault();
    applyFilters(true); // Reset page when filters are applied
  });

  // Initialize projects display
  window.initialLoadComplete = false;
  applyFilters(true); // Show all projects on page 1
  // Mark initial load as complete after a short delay
  setTimeout(() => {
    window.initialLoadComplete = true;
  }, 200);
});
