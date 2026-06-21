export const translations = {
  en: {
    common: {
      phone: "8 (800) 444-04-81",
      emailBuy: "buy@ufin.online",
      phoneFree: "free",
      learnMore: "Learn more",
      showAll: "Show all",
      send: "Send",
      submitting: "Sending...",
      success: "Sent!",
      error: "Error",
      home: "Home",
      business: "Business",
      people: "People",
      consultation: "Consultation",
      login: "Login",
      contacts: "Contacts",
      services: "Services",
      resources: "Resources",
      company: "Company"
    },
    navbar: {
      business: "Business",
      people: "People",
      services: "Services",
      resources: "Resources",
      company: "Company",
      contacts: "Contacts",
      consultation: "Consultation",
      login: "Login",
      phone: "8 (800) 444-04-81",
      logoControl: "CONTROL",
      logoBrand: "UFIN",
      menuHome: "Home",
      news: "News",
      newsAll: "All →",
      
      // services subcategories
      ourServices: "Our services",
      solutions: "Solutions",
      byIndustry: "By industry",
      integrations: "Integrations",
      
      // services list
      servicesList: [
        "GLONASS/GPS transport monitoring",
        "Driver control",
        "Fuel consumption control",
        "Temperature control",
        "Tire pressure monitoring",
        "Route assignments",
        "Employee monitoring",
        "Video surveillance for transport"
      ],
      
      // solutions list
      solutionsList: [
        { title: "Efficiency", desc: "How Ufin increases your business efficiency" },
        { title: "Transportation safety", desc: "Prevention of accidents and incidents" },
        { title: "Customer loyalty & retention", desc: "A satisfied customer always returns" },
        { title: "Service provision level", desc: "How we improve the quality of your services" },
        { title: "Threat control", desc: "Protect business with control systems" }
      ],
      
      // industries list
      industriesList: [
        "Food transportation",
        "Freight transport",
        "Passenger transit",
        "Taxi",
        "Construction equipment",
        "Leasing",
        "Dangerous goods",
        "Agricultural machinery",
        "Municipal transport monitoring",
        "Banks",
        "Manufacturing",
        "Trade",
        "Pharmaceuticals",
        "Medical institutions",
        "Fuel and energy complex",
        "Light commercial vehicles"
      ],
      
      // integrations list
      integrationsList: [
        "API",
        "Relay servers",
        "Transition from Wialon",
        "GLONASS installation"
      ],
      
      // resources dropdown
      resourcesTitle: "Resources",
      resourcesList: [
        { label: "Compatible equipment for business", to: "/resources#resources" },
        { label: "Mobile app user manual", to: "/resources#resources" },
        { label: "User Agreement", to: "/resources#resources" },
        { label: "Privacy Policy", to: "/resources#resources" },
        { label: "What new features have we developed?", to: "/resources#resources" },
        { label: "Instructions for trackers", to: "/resources#resources" }
      ],
      faqLink: "FAQ →",
      
      // company dropdown
      companyList: [
        { label: "About company", to: "/company#about" },
        { label: "Contacts", to: "/contacts" },
        { label: "Reviews", to: "/company#about" },
        { label: "Partners", to: "/company" },
        { label: "News", to: "/company#news" },
        { label: "Blog", to: "/resources#news" },
        { label: "Careers", to: "/company" },
        { label: "Guarantees", to: "/company" }
      ]
    },
    hero: {
      title: "GLONASS Fleet Monitoring",
      button: "Submit Request",
      features: [
        {
          title: "route tracking & operational control",
          desc: "control of location, fuel consumption, tire pressure and other parameters"
        },
        {
          title: "transit video monitoring",
          desc: "compliance with industry standards, increased safety, determination of accident liability"
        },
        {
          title: "cold chain climate monitoring",
          desc: "guaranteed transport quality, continuous automated transmission of cargo conditions to the client"
        },
        {
          title: "driver assistance & video safety",
          desc: "improving safety and reducing the number of road accidents"
        }
      ]
    },
    home: {
      ticker: "Improving the efficiency of your business.",
      learnMore: "Learn more"
    },
    unifiedAccount: {
      title: "Unified Personal Account",
      tabs: {
        "TRANSPORT": "TRANSPORT",
        "VIDEO": "VIDEO",
        "DRIVER": "DRIVER",
        "EMPLOYEES": "EMPLOYEES",
        "INTEGRATIONS": "INTEGRATIONS",
        "TASKS": "TASKS"
      },
      content: {
        "TRANSPORT": {
          description: "Continuous location and operational monitoring increases business profitability by keeping your fleet under control during production tasks with minimal overhead. The system instantly notifies you of fuel theft, transport temperature drops, tire pressure loss, and many other critical events affecting your business.",
          cards: ["Fuel consumption", "Transport & cooling temp", "Tire pressure"]
        },
        "VIDEO": {
          description: "Watch live and archived video streams from fleet cameras to improve security and safety.",
          cards: ["Live broadcast", "Video recording", "Smart notifications"]
        },
        "DRIVER": {
          description: "Monitor driver performance metrics and manage records in a single dashboard.",
          cards: ["Driver profile", "Safety rating", "Training"]
        },
        "EMPLOYEES": {
          description: "Efficiently manage employees, access permissions, and operations.",
          cards: ["Roles", "Access rights", "Activity"]
        },
        "INTEGRATIONS": {
          description: "Integrate external APIs and automate business processes.",
          cards: ["API", "Webhooks", "Automation"]
        },
        "TASKS": {
          description: "Create and manage alerts and operational tasks.",
          cards: ["Task board", "Assignments", "History"]
        }
      }
    },
    operations: {
      title: "Industry Solutions",
      button: "Show all",
      industries: {
        "Food transportation": "Food transportation",
        "Freight transport": "Freight transport",
        "Passenger transit": "Passenger transit",
        "Taxi fleets": "Taxi fleets",
        "Construction equipment": "Construction equipment",
        "Leasing": "Leasing",
        "Dangerous goods": "Dangerous goods",
        "Agricultural machinery": "Agricultural machinery"
      }
    },
    feedback: {
      title: "Our clients' feedback",
      button: "Full review",
      reviews: [
        {
          logo: "AC",
          company: "Avansstroy Construction LLC",
          text: "We have been using monitoring services for many years. We tried several tracking systems and recently worked on a local server, which did not allow us to scale automation. The cloud service Ufin Control allowed us not only to integrate satellite fleet monitoring into our IT environment, but also to connect cellular monitoring for our field employees."
        },
        {
          logo: "TC",
          company: "TransCo Ltd.",
          text: "The platform helped us reduce fuel costs and optimize routes. Integration went smoothly, and support team was always quick to resolve any questions."
        },
        {
          logo: "LF",
          company: "LogiFleet",
          text: "Real-time alerts and driver behavior analytics allowed us to increase safety and decrease the number of fleet incidents."
        },
        {
          logo: "AT",
          company: "AgroTrans",
          text: "Temperature and reefer unit monitoring for refrigerated transport allowed us to avoid significant losses during peak seasons."
        },
        {
          logo: "CG",
          company: "CityTaxi Group",
          text: "Easy interface and reliable tracking — our dispatchers use the system every day."
        }
      ]
    },
    companyClients: {
      title: "More than 500 companies in Russia and India use UFIN control services"
    },
    devices: {
      title: "Control devices from leading manufacturers",
      button: "Get price",
      list: [
        {
          title: "Onboard tracking terminal GALILEOSKY 10",
          desc: "Advanced functionality for monitoring, controlling, and managing assets"
        },
        {
          title: "Onboard tracking terminal SIGNAL S-2653",
          desc: "SIGNAL series GLONASS tracker with dual CAN interfaces for online TPMS connectivity"
        },
        {
          title: "Onboard tracking terminal UMKa302",
          desc: "Flagship GLONASS/GPS tracker line — a new level of performance"
        },
        {
          title: "Personal: Onboard tracking terminal Scout ENT855",
          desc: "Scout ENT855 is the best choice for companies carrying out comprehensive vehicle equipping"
        },
        {
          title: "Video Recorder VRK4-ENVO",
          desc: "Digital video recorder designed for transport application"
        }
      ]
    },
    request: {
      title: "How to start?",
      formTitle: "Submit Request",
      formSubtitle: "Fill out the form — we will contact you shortly",
      directorName: "Sergey Chulsky",
      directorTitle: "Technical Director",
      directorActive: "Will reply within an hour",
      placeholderName: "Your name *",
      placeholderEmail: "Email *",
      placeholderCompany: "Company name",
      placeholderMessage: "Briefly describe your task or question...",
      submitBtn: "Send request →",
      consentText: "I consent to the ",
      consentLink: "processing of personal data",
      steps: [
        "Determine the list of transport monitoring parameters",
        "Agree on vehicle monitoring equipment specifications and installation conditions",
        "Pay for equipment, installation, and monitoring services for the upcoming month",
        "Provide vehicles to integrators for hardware installation and system setup",
        "Now your vehicles are under continuous control!"
      ]
    },
    featureBanner: {
      button: "Learn more",
      list: [
        {
          title: "Integration with your accounting systems",
          desc: "To reduce routine tasks, eliminate reporting errors, and redirect employee efforts toward improving service quality, we help maximize the integration and automation of fleet accounting and reporting"
        },
        {
          title: "Driver monitoring",
          desc: "Reducing the human factor's impact on road safety"
        }
      ]
    },
    resourcesSection: {
      category: "RESOURCES",
      title: "Your partner for years to come",
      questionsTitle: "Still have questions?",
      list: [
        {
          title: "Integration with corporate IT systems",
          desc: "Free your employees from routine tasks"
        },
        {
          title: "Entry permits",
          desc: "Data retransmission to RNIC"
        },
        {
          title: "Wide range of compatible hardware",
          desc: "Allows creating unique solutions for your business"
        }
      ]
    },
    companyPage: {
      aboutCategory: "ABOUT US",
      heroTitle: "Ufin Control —\nreliable partner\nsince 2012",
      heroDesc: "We build technologies that help transport companies monitor fleets, reduce costs, and improve road safety.",
      becomeClient: "Become a client",
      stats: [
        { value: "500+", label: "Client companies" },
        { value: "2012", label: "Year founded" },
        { value: "24/7", label: "Tech support" },
        { value: "2", label: "Countries" }
      ],
      valuesTitle: "Our Values",
      valuesList: [
        { title: "Quality", desc: "We use only certified equipment and proven satellite monitoring technologies" },
        { title: "Scale", desc: "We work with companies across Russia and India — from small businesses to large corporations" },
        { title: "Reliability", desc: "We guarantee uninterrupted platform operation and prompt technical support to every client" }
      ],
      historyTitle: "Company History",
      timeline: [
        { year: "2012", title: "Company Founding", desc: "Ufin Control launched as a startup for transport monitoring in Moscow" },
        { year: "2015", title: "100 Clients", desc: "First 100 corporate clients in cargo and passenger transportation" },
        { year: "2018", title: "Expansion to India", desc: "Opening of representative office and first partnerships with Indian transport companies" },
        { year: "2021", title: "500+ Companies", desc: "Platform serves over 500 companies, covering 8 transport logistics industries" },
        { year: "2024", title: "AI Analytics", desc: "Launch of machine learning-based predictive analytics module for predicting breakdowns" }
      ],
      links: [
        { title: "Partners", desc: "Program for dealers and integrators" },
        { title: "Careers", desc: "Open positions in the team" },
        { title: "Guarantees", desc: "Obligations to clients" }
      ],
      directorTitle: "CEO",
      directorName: "Alexey Osipov",
      directorDesc: "Contact us directly — we are ready to answer any questions about cooperation and platform capabilities.",
      newsTitle: "Company News",
      newsAll: "All news →"
    },
    consultationPage: {
      backBtn: "← Home",
      category: "Free",
      title: "Get a consultation\nfrom an expert",
      desc: "Tell us about your fleet — we will select the optimal solution and calculate the cost",
      freeText: "free",
      support247: "Mon-Fri: 9:00-18:00 · Tech support 24/7",
      telegramChat: "Telegram Chat",
      trustText: "TRUSTED BY",
      successTitle: "Request sent!",
      successDesc: "We will contact you during the business day",
      formTitle: "Submit Request",
      formSubtitle: "Fill out the form — we will contact you shortly",
      directorName: "Sergey Chulsky",
      directorTitle: "Technical Director",
      directorActive: "Will reply within an hour",
      placeholderName: "Your name *",
      placeholderPhone: "(999) 999-9999 *",
      placeholderEmail: "Email *",
      placeholderCompany: "Company name",
      placeholderMessage: "Briefly describe your task or question...",
      submitBtn: "Submit Request →",
      consentText: "I consent to the ",
      consentLink: "processing of personal data"
    },
    contactsPage: {
      title: "Contacts",
      subtitle: "Where we are and how to reach us",
      departments: [
        {
          title: "Business Development",
          desc: "Cooperation with partners and suppliers"
        },
        {
          title: "Connection Questions",
          desc: "Sales, connecting new objects and client's own trackers"
        },
        {
          title: "Media Center",
          desc: "Communicating with clients regarding new products, advertising, and partnership"
        },
        {
          title: "Tech Support 24/7",
          desc: "Technical questions with clients and suppliers"
        }
      ],
      phoneLabel: "Phone",
      addressLabel: "Address",
      addressValue: "Moscow, 129344, Letchika Babushkina St, 1/3, 7th floor, office 17",
      socialLabel: "Find us online",
      ratingLabel: "Yandex Rating",
      branchesTitle: "Our Branches",
      branchesList: [
        "Podolsk, Selkhoztekhnika, Domodedovskoe highway, 20I, STO 'Podolsk'",
        "Balashikha, Obyezdnoe highway, 10a, STO 'Balashikha'"
      ],
      formTitle: "Contact Us",
      formSubtitle: "Leave contact details and our specialist will get back to you shortly",
      placeholderName: "Name",
      placeholderPhone: "(999) 999-9999*",
      placeholderEmail: "Email",
      submitBtn: "Send",
      consentText: "I consent to the ",
      consentLink: "processing of personal data",
      directorLabel: "CEO",
      directorName: "Alexey Osipov",
      ctaTitle: "Get in touch",
      ctaDesc: "Get detailed information and consultation!",
      telegramChat: "Telegram Chat",
      promoTitle: "PROMO!",
      promoDesc: "Submit a request online now! We will contact you during business hours and give you a 10% discount!"
    },
    loginPage: {
      brand: "UFIN",
      control: "CONTROL",
      title: "Log in to Personal Account",
      subtitle: "Enter your account details",
      labelEmail: "Email",
      labelPassword: "Password",
      forgotPass: "Forgot password?",
      submitBtn: "Sign In",
      noAccount: "Don't have an account?",
      requestLink: "Submit Request"
    },
    resourcesPage: {
      category: "Knowledge Base",
      title: "Resources\nand documentation",
      desc: "Everything you need to work with the UFIN Control platform — instructions, agreements, guides, and news",
      searchPlaceholder: "Search resources...",
      featuredTag: "Stories",
      featuredTitle: "Tracker saved\na brave dog's life!",
      materialsTitle: "Materials",
      categories: ["All", "Equipment", "Documents", "App", "Updates"],
      catsMap: {
        "Все": "All",
        "Оборудование": "Equipment",
        "Документы": "Documents",
        "Приложение": "App",
        "Обновления": "Updates"
      },
      resourcesList: [
        { cat: "Equipment", title: "Compatible equipment for business", desc: "Full list of supported trackers, sensors, and peripherals", badge: "PDF" },
        { cat: "App", title: "Mobile app user manual", desc: "Step-by-step instructions for Ufin Control application", badge: "Guide" },
        { cat: "Documents", title: "User Agreement", desc: "Terms of service for Ufin Control service", badge: "DOC" },
        { cat: "Documents", title: "Privacy Policy", desc: "How we process and protect your personal data", badge: "DOC" },
        { cat: "Updates", title: "What new features have we developed?", desc: "List of recent updates and new platform features", badge: "New" },
        { cat: "Equipment", title: "Instructions for trackers", desc: "Installation and configuration documentation for each model", badge: "PDF" }
      ],
      openLink: "Open →",
      newsTitle: "News",
      faqTitle: "FAQ",
      faqSubtitle: "Answers to popular questions about the platform",
      faqs: [
        { q: "How to connect a tracker to the platform?", a: "After installing the tracker, log in to your personal account, go to the 'Equipment' section, and add the device by IMEI." },
        { q: "Are third-party GPS trackers supported?", a: "Yes, we support over 200 tracker models from leading manufacturers. The full list is in the 'Compatible equipment' section." },
        { q: "How to get access to API?", a: "Apply via the form on the 'Integrations' page or email buy@ufin.online. Access is granted after agreeing on the conditions." },
        { q: "What data export format is supported?", a: "Data is exported in Excel, CSV, and PDF formats. An API is also available for integration with your systems." }
      ]
    },
    servicesPage: {
      category: "Our Capabilities",
      title: "Fleet\nmonitoring services",
      desc: "Full range of solutions for fleet control — from GLONASS to video surveillance",
      consultBtn: "Get a consultation",
      allServicesBtn: "All services",
      sectionTitle: "Our services",
      sectionSubtitle: "Comprehensive monitoring of all aspects of your fleet operation",
      servicesList: [
        {
          title: "GLONASS/GPS transport monitoring",
          desc: "Real-time continuous control of location, speed, mileage, and fuel with history and analytics.",
          points: ["Online map with routes", "Trip history", "Geofences and alerts"]
        },
        {
          title: "Driver control",
          desc: "Monitoring driving style, compliance with work and rest schedule, driver identification.",
          points: ["Driving style analysis", "Work and rest schedule", "Key-based identification"]
        },
        {
          title: "Fuel consumption control",
          desc: "Automatic detection of fuel thefts, unauthorized refuelings, and excessive fuel consumption.",
          points: ["Fuel level sensors", "Fueling reports", "Theft detection"]
        },
        {
          title: "Temperature control",
          desc: "Monitoring climate parameters of refrigerated transport with notifications.",
          points: ["Multiple cooling zones", "Data transmission to client", "Temperature archive"]
        }
      ],
      solutionsTitle: "Solutions",
      solutionsSubtitle: "How our services solve your business challenges",
      solutionsList: [
        { title: "Efficiency", desc: "How Ufin increases business profitability through accounting and control automation" },
        { title: "Transportation safety", desc: "Preventing accidents, incidents, and traffic violations through continuous monitoring" },
        { title: "Customer loyalty", desc: "Improving service quality and transparency for clients through online access to data" },
        { title: "Service provision level", desc: "Real-time control over adherence to transport standards and regulations" },
        { title: "Threat control", desc: "Business protection using access control systems, geofences, and emergency alerts" }
      ],
      industriesTitle: "By industry",
      industriesSubtitle: "Specialized solutions for each sphere",
      showAllBtn: "Show all",
      industriesList: [
        { title: "Food transportation" },
        { title: "Freight transport" },
        { title: "Passenger transit" },
        { title: "Taxi fleets" },
        { title: "Construction equipment" },
        { title: "Leasing" },
        { title: "Dangerous goods" },
        { title: "Agricultural machinery" }
      ],
      integrationsTitle: "Integrations",
      integrationsSubtitle: "Connect to your existing systems",
      integrationsList: ["API", "Relay servers", "Transition from Wialon", "GLONASS installation"],
      connectBtn: "Connect"
    }
  },
  ru: {
    common: {
      phone: "8 (800) 444-04-81",
      emailBuy: "buy@ufin.online",
      phoneFree: "бесплатно",
      learnMore: "Узнать больше",
      showAll: "Показать все",
      send: "Отправить",
      submitting: "Отправка...",
      success: "Отправлено!",
      error: "Ошибка",
      home: "Главная",
      business: "Бизнесу",
      people: "Людям",
      consultation: "Консультация",
      login: "Вход",
      contacts: "Контакты",
      services: "Услуги",
      resources: "Ресурсы",
      company: "Компания"
    },
    navbar: {
      business: "Бизнесу",
      people: "Людям",
      services: "Услуги",
      resources: "Ресурсы",
      company: "Компания",
      contacts: "Контакты",
      consultation: "Консультация",
      login: "Вход",
      phone: "8 (800) 444-04-81",
      logoControl: "КОНТРОЛЬ",
      logoBrand: "УФИН",
      menuHome: "Главная",
      news: "Новости",
      newsAll: "Все →",
      
      ourServices: "Наши услуги",
      solutions: "Решения",
      byIndustry: "По отраслям",
      integrations: "Интеграции",
      
      servicesList: [
        "ГЛОНАСС/GPS мониторинг транспорта",
        "Контроль водителя",
        "Контроль расхода топлива",
        "Контроль температуры",
        "Контроль давления в шинах",
        "Маршрутные задания",
        "Мониторинг сотрудников",
        "Видеонаблюдение за транспортом"
      ],
      
      solutionsList: [
        { title: "Эффективность", desc: "Как Уфин повышает эффективность вашего бизнеса" },
        { title: "Безопасность перевозок", desc: "Предотвращение аварий и инцидентов" },
        { title: "Лояльность и удержание клиентов", desc: "Довольный клиент всегда возвращается" },
        { title: "Уровень оказания услуг", desc: "Как мы повышаем качество ваших услуг" },
        { title: "Контроль угроз", desc: "Защитите бизнес с помощью систем контроля" }
      ],
      
      industriesList: [
        "Перевозка продуктов питания",
        "Грузовой транспорт",
        "Пассажирские перевозки",
        "Такси",
        "Строительная техника",
        "Лизинг",
        "Опасные грузы",
        "Сельхозтехника",
        "Мониторинг транспорта ЖКХ",
        "Банки",
        "Производство",
        "Торговля",
        "Фармацевтика",
        "Медицинские учреждения",
        "Топливно-энергетический комплекс",
        "Лёгкие коммерческие автомобили"
      ],
      
      integrationsList: [
        "API",
        "Серверы ретрансляции",
        "Переход с Wialon",
        "Установка ГЛОНАСС"
      ],
      
      resourcesTitle: "Ресурсы",
      resourcesList: [
        { label: "Совместимое оборудование для бизнеса", to: "/resources#resources" },
        { label: "Руководство пользователя мобильного приложения", to: "/resources#resources" },
        { label: "Пользовательское соглашение", to: "/resources#resources" },
        { label: "Политика конфиденциальности", to: "/resources#resources" },
        { label: "Что нового мы разработали?", to: "/resources#resources" },
        { label: "Инструкции к трекерам", to: "/resources#resources" }
      ],
      faqLink: "Частые вопросы →",
      
      companyList: [
        { label: "О компании", to: "/company#about" },
        { label: "Контакты", to: "/contacts" },
        { label: "Отзывы", to: "/company#about" },
        { label: "Партнёрам", to: "/company" },
        { label: "Новости", to: "/company#news" },
        { label: "Блог", to: "/resources#news" },
        { label: "Вакансии", to: "/company" },
        { label: "Гарантии", to: "/company" }
      ]
    },
    hero: {
      title: "ГЛОНАСС мониторинг транспорта",
      button: "Оставить заявку",
      features: [
        {
          title: "маршрут движения и контроль эксплуатации",
          desc: "контроль местонахождения, расхода топлива, давления в шинах и других параметров"
        },
        {
          title: "видеоконтроль процесса перевозки",
          desc: "соответствие отраслевым нормативам, повышение безопасности, определение виновника ДТП"
        },
        {
          title: "контроль климатических параметров перевозки",
          desc: "подтверждённое качество перевозки, непрерывная автоматизированная передача данных об условиях перевозки клиенту"
        },
        {
          title: "видеоконтроль и помощь водителю",
          desc: "повышение безопасности и снижение количества ДТП"
        }
      ]
    },
    home: {
      ticker: "Повышаем эффективность вашего бизнеса.",
      learnMore: "Узнать больше"
    },
    unifiedAccount: {
      title: "Единый личный кабинет",
      tabs: {
        "TRANSPORT": "ТРАНСПОРТ",
        "VIDEO": "ВИДЕО",
        "DRIVER": "ВОДИТЕЛЬ",
        "EMPLOYEES": "СОТРУДНИКИ",
        "INTEGRATIONS": "ИНТЕГРАЦИИ",
        "TASKS": "ЗАДАНИЯ"
      },
      content: {
        "TRANSPORT": {
          description: "Непрерывный контроль местонахождения и эксплуатации обеспечивает повышение рентабельности бизнеса за счёт постоянного контроля работы вашего транспорта на ваших производственных задачах с минимальными издержками. Система мгновенно уведомит вас о сливе топлива, выходе температуры перевозки за заданные пределы, снижении давления в шинах и о многих других важных событиях, влияющих на ваш бизнес.",
          cards: ["Расход топлива", "Температура перевозки и ХОУ", "Давление в шинах"]
        },
        "VIDEO": {
          description: "Просматривайте прямые и архивные видеопотоки с камер автопарка для повышения безопасности.",
          cards: ["Прямой эфир", "Запись видео", "Умные оповещения"]
        },
        "DRIVER": {
          description: "Отслеживайте показатели водителей и управляйте записями в одной панели управления.",
          cards: ["Профиль водителя", "Оценка безопасности", "Обучение"]
        },
        "EMPLOYEES": {
          description: "Эффективно управляйте сотрудниками, правами доступа и операциями.",
          cards: ["Роли", "Права доступа", "Активность"]
        },
        "INTEGRATIONS": {
          description: "Интегрируйте внешние API и автоматизируйте бизнес-процессы.",
          cards: ["API", "Вебхуки", "Автоматизация"]
        },
        "TASKS": {
          description: "Создавайте и управляйте оповещениями и операционными задачами.",
          cards: ["Доска задач", "Назначения", "История"]
        }
      }
    },
    operations: {
      title: "Отраслевые решения",
      button: "Показать все",
      industries: {
        "Food transportation": "Перевозка продуктов питания",
        "Freight transport": "Грузовой транспорт",
        "Passenger transit": "Пассажирские перевозки",
        "Taxi fleets": "Таксомоторные парки",
        "Construction equipment": "Строительная техника",
        "Leasing": "Лизинг",
        "Dangerous goods": "Опасные грузы",
        "Agricultural machinery": "Сельхозтехника"
      }
    },
    feedback: {
      title: "Отзывы наших клиентов",
      button: "Полный отзыв",
      reviews: [
        {
          logo: "АС",
          company: "ООО СК Авансстрой",
          text: "Пользуемся услугами мониторинга уже много лет. Пробовали несколько различных систем отслеживания, в последнее время работали на локальном сервере, который не позволял нам развивать автоматизацию. Облачный сервис Уфин контроль позволил нам не только интегрировать спутниковый мониторинг автотранспорта в свою информационную среду, но и подключить мониторинг выездных сотрудников по сотовой сети."
        },
        {
          logo: "TC",
          company: "TransCo Ltd.",
          text: "Платформа помогла нам сократить расходы на топливо и оптимизировать маршруты. Интеграция прошла гладко, а служба поддержки всегда оперативно отвечала на вопросы."
        },
        {
          logo: "LF",
          company: "LogiFleet",
          text: "Оповещения в реальном времени и аналитика поведения водителей позволили нам повысить безопасность и снизить количество инцидентов в автопарке."
        },
        {
          logo: "AT",
          company: "АгроТранс",
          text: "Мониторинг температуры и ХОУ для рефрижераторного транспорта позволил нам избежать значительных потерь в пиковые сезоны."
        },
        {
          logo: "CG",
          company: "CityTaxi Group",
          text: "Удобный интерфейс и надёжное отслеживание — наши диспетчеры пользуются системой каждый день."
        }
      ]
    },
    companyClients: {
      title: "Более 500 компаний в России и Индии пользуются услугами УФИН контроля"
    },
    devices: {
      title: "Устройства контроля от ведущих производителей",
      button: "Узнать цену",
      list: [
        {
          title: "Бортовой навигационный терминал GALILEOSKY 10",
          desc: "Передовой функционал для мониторинга, контроля и управления объектами"
        },
        {
          title: "Бортовой навигационный терминал СИГНАЛ S-2653",
          desc: "ГЛОНАСС-трекер серии СИГНАЛ с двумя интерфейсами CAN для работы с онлайн СКДШ"
        },
        {
          title: "Бортовой навигационный терминал УМКа302",
          desc: "Флагманская линейка ГЛОНАСС/GPS трекеров — новый уровень производительности"
        },
        {
          title: "Личное: Бортовой навигационный терминал Scout ENT855",
          desc: "Scout ENT855 является лучшим выбором для компаний, осуществляющих комплексное оснащение автотранспорта"
        },
        {
          title: "Видеорегистратор ВРК4-ЕНВО",
          desc: "Цифровой видеорегистратор, предназначенный для транспортного применения"
        }
      ]
    },
    request: {
      title: "Как начать?",
      formTitle: "Оставить заявку",
      formSubtitle: "Заполните форму — мы свяжемся с вами в ближайшее время",
      directorName: "Чульский Сергей",
      directorTitle: "Тех. директор",
      directorActive: "Отвечу в течение часа",
      placeholderName: "Ваше имя *",
      placeholderEmail: "Email *",
      placeholderCompany: "Название компании",
      placeholderMessage: "Кратко опишите задачу или вопрос...",
      submitBtn: "Отправить →",
      consentText: "Дал согласие на ",
      consentLink: "обработку персональных данных",
      steps: [
        "Определить перечень параметров мониторинга транспорта",
        "Согласовать спецификацию оборудования автомониторинга и условий его монтажа",
        "Произвести оплату оборудования с монтажом и услуг контроля на ближайший месяц",
        "Предоставить а/м интеграторам для монтажа оборудования и установки системы",
        "Теперь ваши а/м под непрерывным контролем!"
      ]
    },
    featureBanner: {
      button: "Подробнее",
      list: [
        {
          title: "Интеграция с вашими учётными системами",
          desc: "С целью снижения рутинной работы, исключения ошибок в отчётах и направления усилий ваших сотрудников на повышение качества услуг мы помогаем максимально интегрировать (внедрить) и автоматизировать учёт и отчётность по автопарку"
        },
        {
          title: "Контроль водителя",
          desc: "Сокращения влияния человеческого фактора на безопасность дорожного движения"
        }
      ]
    },
    resourcesSection: {
      category: "РЕСУРСЫ",
      title: "Ваш партнер на долгие годы",
      questionsTitle: "Остались вопросы?",
      list: [
        {
          title: "Интеграция с корпоративными ИС",
          desc: "Избавьте своих сотрудников от рутинной работы"
        },
        {
          title: "Пропуска на въезд",
          desc: "Ретрансляция данных в РНИЦ"
        },
        {
          title: "Широкий спектр совместимого оборудования",
          desc: "Позволяет создавать уникальные решения для вашего бизнеса"
        }
      ]
    },
    companyPage: {
      aboutCategory: "О нас",
      heroTitle: "Уфин Контроль —\nнадёжный партнёр\nс 2012 года",
      heroDesc: "Мы создаём технологии, которые помогают транспортным компаниям контролировать автопарк, снижать издержки и повышать безопасность на дорогах.",
      becomeClient: "Стать клиентом",
      stats: [
        { value: "500+", label: "Компаний-клиентов" },
        { value: "2012", label: "Год основания" },
        { value: "24/7", label: "Техподдержка" },
        { value: "2", label: "Страны" }
      ],
      valuesTitle: "Наши ценности",
      valuesList: [
        { title: "Качество", desc: "Используем только сертифицированное оборудование и проверенные технологии спутникового мониторинга" },
        { title: "Масштаб", desc: "Работаем с компаниями по всей России и в Индии — от малого бизнеса до крупных корпораций" },
        { title: "Надёжность", desc: "Гарантируем бесперебойную работу платформы и оперативную техническую поддержку каждому клиенту" }
      ],
      historyTitle: "История компании",
      timeline: [
        { year: "2012", title: "Основание компании", desc: "Уфин Контроль запущен как стартап по мониторингу транспорта в Москве" },
        { year: "2015", title: "100 клиентов", desc: "Первые 100 корпоративных клиентов в сфере грузовых и пассажирских перевозок" },
        { year: "2018", title: "Выход в Индию", desc: "Открытие представительства и первые партнёрства с индийскими транспортными компаниями" },
        { year: "2021", title: "500+ компаний", desc: "Платформа обслуживает более 500 компаний, охватывая 8 отраслей транспортной логистики" },
        { year: "2024", title: "AI-аналитика", desc: "Запуск модуля предиктивной аналитики на основе машинного обучения для прогнозирования поломок" }
      ],
      links: [
        { title: "Партнёрам", desc: "Программа для дилеров и интеграторов" },
        { title: "Вакансии", desc: "Открытые позиции в команде" },
        { title: "Гарантии", desc: "Обязательства перед клиентами" }
      ],
      directorTitle: "Генеральный директор",
      directorName: "Алексей Осипов",
      directorDesc: "Свяжитесь с нами напрямую — мы готовы ответить на любые вопросы о сотрудничестве и возможностях платформы.",
      newsTitle: "Новости компании",
      newsAll: "Все новости →"
    },
    consultationPage: {
      backBtn: "← На главную",
      category: "Бесплатно",
      title: "Получите консультацию\nот эксперта",
      desc: "Расскажите о вашем автопарке — мы подберём оптимальное решение и рассчитаем стоимость",
      freeText: "бесплатно",
      support247: "Пн–Пт: 9:00–18:00 · Техподдержка 24/7",
      telegramChat: "Чат в Telegram",
      trustText: "НАМ ДОВЕРЯЮТ",
      successTitle: "Заявка отправлена!",
      successDesc: "Мы свяжемся с вами в течение рабочего дня",
      formTitle: "Оставить заявку",
      formSubtitle: "Заполните форму — мы свяжемся с вами в ближайшее время",
      directorName: "Сергей Чульский",
      directorTitle: "Технический директор",
      directorActive: "Отвечу в течение часа",
      placeholderName: "Ваше имя *",
      placeholderPhone: "(999) 999-9999 *",
      placeholderEmail: "Email *",
      placeholderCompany: "Название компании",
      placeholderMessage: "Кратко опишите задачу или вопрос...",
      submitBtn: "Отправить заявку →",
      consentText: "Дал согласие на ",
      consentLink: "обработку персональных данных"
    },
    contactsPage: {
      title: "Контакты",
      subtitle: "Где мы находимся и как к нам добраться",
      departments: [
        {
          title: "Отдел по развитию бизнеса",
          desc: "Сотрудничество с партнерами и поставщиками"
        },
        {
          title: "По вопросам подключения",
          desc: "Продажи, подключения новых объектов и собственных трекеров клиента"
        },
        {
          title: "Медиацентр",
          desc: "Общение с клиентами по вопросам новых продуктов, рекламы и сотрудничества"
        },
        {
          title: "Техподдержка 24/7",
          desc: "Технические вопросы с клиентами и поставщиками"
        }
      ],
      phoneLabel: "Телефон",
      addressLabel: "Адрес",
      addressValue: "Москва, 129344, ул. Лётчика Бабушкина, д. 1, корпус 3, эт. 7, офис 17",
      socialLabel: "Мы в сетях",
      ratingLabel: "Рейтинг на Яндексе",
      branchesTitle: "Наши филиалы",
      branchesList: [
        "г.о. Подольск, п.Сельхозтехника, Домодедовское шоссе, д.20И, СТО «Подольск»",
        "г. Балашиха, Объездное шоссе, дом 10а, СТО «Балашиха»"
      ],
      formTitle: "Связаться с нами",
      formSubtitle: "Оставьте контактные данные и наш специалист свяжется с вами в кратчайшие сроки",
      placeholderName: "Имя",
      placeholderPhone: "(999) 999-9999*",
      placeholderEmail: "Почта",
      submitBtn: "Отправить",
      consentText: "Дал согласие на ",
      consentLink: "обработку персональных данных",
      directorLabel: "Генеральный директор",
      directorName: "Алексей Осипов",
      ctaTitle: "Свяжитесь с нами",
      ctaDesc: "Получите подробную информацию и консультацию!",
      telegramChat: "Чат в Telegram",
      promoTitle: "АКЦИЯ!",
      promoDesc: "Оставьте онлайн заявку сейчас! Мы с вами свяжемся в рабочее время и дадим 10% скидки!"
    },
    loginPage: {
      brand: "УФИН",
      control: "КОНТРОЛЬ",
      title: "Вход в личный кабинет",
      subtitle: "Введите данные вашей учётной записи",
      labelEmail: "Email",
      labelPassword: "Пароль",
      forgotPass: "Забыли пароль?",
      submitBtn: "Войти",
      noAccount: "Нет аккаунта?",
      requestLink: "Оставить заявку"
    },
    resourcesPage: {
      category: "База знаний",
      title: "Ресурсы\nи документация",
      desc: "Всё необходимое для работы с платформой Уфин Контроль — инструкции, соглашения, руководства и новости",
      searchPlaceholder: "Поиск по ресурсам...",
      featuredTag: "Истории",
      featuredTitle: "Трекер спас жизнь\nхраброй собаке!",
      materialsTitle: "Материалы",
      categories: ["Все", "Оборудование", "Документы", "Приложение", "Обновления"],
      catsMap: {
        "Все": "Все",
        "Оборудование": "Оборудование",
        "Документы": "Документы",
        "Приложение": "Приложение",
        "Обновления": "Обновления"
      },
      resourcesList: [
        { cat: "Equipment", title: "Совместимое оборудование для бизнеса", desc: "Полный список поддерживаемых трекеров, датчиков и периферии", badge: "PDF" },
        { cat: "App", title: "Руководство пользователя мобильного приложения", desc: "Пошаговая инструкция по работе с приложением Уфин Контроль", badge: "Гид" },
        { cat: "Documents", title: "Пользовательское соглашение", desc: "Условия использования сервиса Уфин Контроль", badge: "DOC" },
        { cat: "Documents", title: "Политика конфиденциальности", desc: "Как мы обрабатываем и защищаем ваши персональные данные", badge: "DOC" },
        { cat: "Updates", title: "Что нового мы разработали?", desc: "Список последних обновлений и новых функций платформы", badge: "Новое" },
        { cat: "Equipment", title: "Инструкции к трекерам", desc: "Документация по установке и настройке каждой модели", badge: "PDF" }
      ],
      openLink: "Открыть →",
      newsTitle: "Новости",
      faqTitle: "Частые вопросы",
      faqSubtitle: "Ответы на популярные вопросы о платформе",
      faqs: [
        { q: "Как подключить трекер к платформе?", a: "После установки трекера подключитесь к личному кабинету, перейдите в раздел «Оборудование» и добавьте устройство по IMEI." },
        { q: "Поддерживаются ли сторонние GPS-трекеры?", a: "Да, мы поддерживаем более 200 моделей трекеров от ведущих производителей. Полный список — в разделе «Совместимое оборудование»." },
        { q: "Как получить доступ к API?", a: "Подайте заявку через форму на странице «Интеграции» или напишите на buy@ufin.online. Доступ предоставляется после согласования условий." },
        { q: "Какой формат экспорта данных поддерживается?", a: "Данные экспортируются в форматах Excel, CSV и PDF. Также доступен API для интеграции с вашими системами." }
      ]
    },
    servicesPage: {
      category: "Наши возможности",
      title: "Услуги\nмониторинга транспорта",
      desc: "Полный спектр решений для контроля автопарка — от ГЛОНАСС до видеонаблюдения",
      consultBtn: "Получить консультацию",
      allServicesBtn: "Все услуги",
      sectionTitle: "Наши услуги",
      sectionSubtitle: "Комплексный мониторинг всех аспектов работы вашего автопарка",
      servicesList: [
        {
          title: "ГЛОНАСС/GPS мониторинг транспорта",
          desc: "Непрерывный контроль местонахождения, скорости, пробега и топлива в режиме реального времени с историей и аналитикой.",
          points: ["Онлайн-карта с маршрутами", "История поездок", "Геозоны и оповещения"]
        },
        {
          title: "Контроль водителя",
          desc: "Мониторинг стиля вождения, соблюдения режима труда и отдыха, идентификация водителя.",
          points: ["Анализ стиля вождения", "Режим труда и отдыха", "Идентификация по ключу"]
        },
        {
          title: "Контроль расхода топлива",
          desc: "Автоматическое выявление сливов, несанкционированных заправок и перерасхода топлива.",
          points: ["Датчики уровня топлива", "Отчёты по заправкам", "Выявление сливов"]
        },
        {
          title: "Контроль температуры",
          desc: "Мониторинг климатических параметров рефрижераторного транспорта с оповещениями.",
          points: ["Несколько зон охлаждения", "Передача данных клиенту", "Архив температур"]
        }
      ],
      solutionsTitle: "Решения",
      solutionsSubtitle: "Как наши услуги решают задачи вашего бизнеса",
      solutionsList: [
        { title: "Эффективность", desc: "Как Уфин повышает рентабельность вашего бизнеса за счёт автоматизации учёта и контроля" },
        { title: "Безопасность перевозок", desc: "Предотвращение аварий, инцидентов и нарушений ПДД с помощью непрерывного мониторинга" },
        { title: "Лояльность клиентов", desc: "Повышение качества сервиса и прозрачность для клиентов через онлайн-доступ к данным" },
        { title: "Уровень оказания услуг", desc: "Контроль соблюдения стандартов и нормативов перевозки в режиме реального времени" },
        { title: "Контроль угроз", desc: "Защита бизнеса с помощью систем контроля доступа, геозон и экстренного оповещения" }
      ],
      industriesTitle: "По отраслям",
      industriesSubtitle: "Специализированные решения для каждой сферы",
      showAllBtn: "Показать все",
      industriesList: [
        { title: "Перевозка продуктов питания" },
        { title: "Грузовой транспорт" },
        { title: "Пассажирские перевозки" },
        { title: "Таксомоторные парки" },
        { title: "Строительная техника" },
        { title: "Лизинг" },
        { title: "Опасные грузы" },
        { title: "Сельхозтехника" }
      ],
      integrationsTitle: "Интеграции",
      integrationsSubtitle: "Подключайтесь к вашим существующим системам",
      integrationsList: ["API", "Серверы ретрансляции", "Переход с Wialon", "Установка ГЛОНАСС"],
      connectBtn: "Подключиться"
    }
  }
};
