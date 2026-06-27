// All service page data — each slug maps to a full page of content
// This drives the dynamic /services/:slug route

export const serviceData = {
  "driver-control": {
    slug: "driver-control",
    category: "Our Services",
    title: "Driver Fatigue & Attention Monitoring",
    subtitle: "Advanced driver monitoring system for commercial fleets",
    description: "Protect your drivers and vehicles from accidents using AI-powered driver attention monitoring devices. Reduce accidents by 40% and increase vehicle availability by 10%.",
    heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "40%", label: "Reduction in traffic accidents" },
      { value: "10%", label: "Increase in vehicle availability" },
      { value: "24/7", label: "Real-time monitoring" },
    ],
    highlights: [
      "Reduction in traffic violations",
      "Dangerous driving style detection",
      "Driver distraction alerts during driving",
      "Accident prevention & related cost reduction",
    ],
    sections: [
      {
        title: "MRV-21 — Integrated Advanced Driver Assistance System",
        content: "The world's first integrated advanced driver assistance system with radar and camera, installable on the windshield of buses, cars, and trucks. The system has no limitations on the number of cameras and, thanks to built-in radar technology, provides high-precision road monitoring in adverse weather conditions such as fog, heavy rain, nighttime, and direct sunlight.",
        details: [
          "Warns the driver with indicators, audio signals, and vibration about dangerous situations",
          "All video, including violations, is recorded to the device's SD card",
          "Sends event videos to the customer's server, can work as a dash cam",
          "Identifies the driver and their health condition behind the wheel",
        ],
      },
      {
        title: "Advanced Driver Assistance System (ADAS)",
        content: "A specialized device that monitors the environment around the vehicle and warns the driver about dangerous situations.",
        details: [
          "Dangerous proximity — frontal collision threat",
          "Pedestrian/stroller identification on the path, especially important at night",
          "Lane change warning",
          "Blind spot monitoring on the sides",
          "Road sign recognition",
        ],
      },
      {
        title: "The Role of the Dispatcher",
        content: "All information received from driver monitoring and assistance devices is transmitted to the cloud for subsequent analysis and driver rating. Tekonika Systems sends real-time notifications to dispatchers about the most important ADAS events (dangerous proximity, speeding) and DSM events (drowsiness) to prevent accidents.",
        details: [],
      },
    ],
    monitors: [
      "Location tracking",
      "Driver health, fatigue & attention state",
      "Driving style analysis",
    ],
    detects: [
      "Drowsiness & falling asleep",
      "Distraction from driving",
      "Smoking while driving",
      "Mobile phone usage",
      "Unbuckled seatbelt",
    ],
    equipment: [
      { name: "MRV-21 Driver Assistance System", desc: "World's first integrated ADAS with 77 GHz radar and camera for windshield mounting", price: true },
      { name: "MDAS-9 Driver Assistance System", desc: "Recognition of potentially dangerous situations, speed sign violations, pedestrian warnings", price: true },
      { name: "MDSM-7 Driver Monitoring Camera", desc: "Intelligent video camera with drowsiness and distraction detection", price: true },
      { name: "Signal S-2653 Navigation Terminal", desc: "GLONASS tracker with dual CAN interfaces for TPMS, temperature control, and CAN mileage", price: true },
    ],
    faqs: [
      { q: "What are the main benefits?", a: "Safety — your drivers and other road users will be reliably protected from human factors such as fatigue, inattention, and negligence." },
      { q: "How does it reduce costs?", a: "Using driver monitoring and assistance services reduces the number and severity of accidents involving your vehicles. This reduces repair costs and increases overall vehicle availability for your operational tasks." },
    ],
    contactPerson: { name: "Maxim Zhokhov", role: "Head of Innovation", telegram: "https://t.me/MaxJokhov" },
    clients: ["GazProm Mezhregiongaz", "RTS-EXPORT", "Sudha Fleet Management, India"],
  },

  "fuel-control": {
    slug: "fuel-control",
    category: "Our Services",
    title: "Fuel Consumption Control",
    subtitle: "Automated fuel monitoring and theft prevention",
    description: "Detect fuel theft, unauthorized refueling, and excessive consumption automatically. Get alerts on fuel drains, link fuel cards (RN-Card, LiCard, OPTI24), and integrate reports with 1C, SAP.",
    heroImage: "https://images.unsplash.com/photo-1545262810-a9b9f1db8a84?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "₽14,999", label: "Equipment cost per vehicle (from)" },
      { value: "₽349/mo", label: "Monthly subscription (from)" },
      { value: "25%", label: "Average fuel savings" },
    ],
    highlights: [
      "Fuel drain alerts",
      "Fuel card integration (RN-Card, LiCard, OPTI24, PPR)",
      "REST API integration with 1C, SAP, Galaxia",
      "Automated fuel consumption reports via email",
    ],
    sections: [
      {
        title: "Fuel Theft During Refueling",
        content: "When refueling — purchased fuel goes not only into your vehicle's tank but also into the driver's personal canister. Tekonika Systems sends an alert about the volume of purchased fuel vs. the volume actually added to the tank to the responsible person's smartphone. If volumes don't match, investigate with the driver.",
        details: [],
      },
      {
        title: "Fuel Theft During Operation",
        content: "The vehicle is driven to a secluded location where fuel is drained into personal containers. During driving — through a tap into the fuel return line. The system detects increased fuel consumption rate and automatically alerts the responsible person.",
        details: [],
      },
      {
        title: "Fuel Level Standards",
        content: "Normative information about fuel consumption for each vehicle in motion or during operation of actuating mechanisms for special equipment.",
        details: [],
      },
      {
        title: "CAN Bus Fuel Level Control",
        content: "Refueling volume, drain volume, and fuel level at any point in time in the vehicle's tank is monitored by connecting to the onboard computer via the CAN bus. CAN bus connection is recommended in all cases for mileage control — accurate mileage definitively determines excessive fuel consumption.",
        details: [],
      },
    ],
    monitors: [
      "Location tracking",
      "Fuel level in real-time",
      "Refueling events",
      "Fuel drain events",
    ],
    detects: [
      "Fuel theft during refueling",
      "Fuel siphoning during operation",
      "Excessive fuel consumption",
      "Discrepancies between purchased and actual fuel",
    ],
    equipment: [
      { name: "Escort TD-BLE 1000mm Fuel Sensor", desc: "Bluetooth-enabled fuel level sensor for precise tank monitoring", price: true },
      { name: "ALL-CAN300 CAN Reader", desc: "Easy-install CAN bus reader for fuel and mileage data from the vehicle's computer", price: true },
      { name: "Escort TD-Online 1000mm", desc: "Online fuel level sensor with real-time data transmission", price: true },
      { name: "Escort TD-150 1000mm", desc: "Standard fuel level sensor for rectangular and cylindrical tanks", price: true },
    ],
    faqs: [
      { q: "How does the fuel sensor detect refueling?", a: "The sensor generates an event with the exact time, volume, and location of refueling. This data can be cross-referenced with the gas station receipt or fuel card system." },
      { q: "Can I compare purchased vs. actual fuel in tank?", a: "Yes — Tekonika Systems provides a report for comparing volumes of fuel added to the tank vs. purchased at the gas station. This is a very convenient tool for detecting underfills directly at gas stations." },
      { q: "What are the different methods to detect fuel theft?", a: "Method 1: Fuel level sensor (DUT) — most reliable, 1% accuracy. Method 2: CAN bus connection — ~10% accuracy but more economical. Method 3: GLONASS tracker with mileage-based calculation — least reliable but most economical." },
    ],
    contactPerson: { name: "Alexey Osipov", role: "CEO", telegram: "https://t.me/Ufin_CEO" },
    clients: ["KupetsStroy", "STS Group"],
  },

  "temperature-control": {
    slug: "temperature-control",
    category: "Our Services",
    title: "Temperature & Climate Control",
    subtitle: "Refrigerated transport monitoring with real-time alerts",
    description: "Monitor climate parameters of refrigerated transport with instant notifications for temperature deviations. Ensure cargo quality with continuous temperature logging and client-facing data sharing.",
    heroImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "100%", label: "Temperature visibility" },
      { value: "Real-time", label: "Alert notifications" },
      { value: "Multi-zone", label: "Cooling zones supported" },
    ],
    highlights: [
      "Multiple cooling zone monitoring",
      "Automatic temperature deviation alerts",
      "Data transmission to end clients",
      "Complete temperature archive & history",
    ],
    sections: [
      {
        title: "Why Temperature Control Matters",
        content: "For food transportation, pharmaceutical logistics, and any temperature-sensitive cargo, maintaining the cold chain is critical. Tekonika Systems provides continuous temperature monitoring across multiple zones within a single vehicle.",
        details: [
          "Instant alerts when temperature goes out of range",
          "Full history and compliance reporting",
          "Share real-time data with your clients",
        ],
      },
    ],
    monitors: ["Temperature in all zones", "Door open/close events", "Refrigeration unit status"],
    detects: ["Temperature deviations", "Door left open", "Refrigeration unit failures"],
    equipment: [
      { name: "Digital Temperature Sensor", desc: "High-accuracy wireless temperature sensor for refrigerated transport", price: true },
    ],
    faqs: [
      { q: "How many temperature zones can be monitored?", a: "Tekonika Systems supports monitoring of multiple independent cooling zones within a single vehicle — each with its own sensor and alert thresholds." },
    ],
    contactPerson: { name: "Alexey Osipov", role: "CEO", telegram: "https://t.me/Ufin_CEO" },
    clients: [],
  },

  "tire-pressure": {
    slug: "tire-pressure",
    category: "Our Services",
    title: "Tire Pressure Monitoring (TPMS)",
    subtitle: "Online tire pressure and temperature monitoring",
    description: "Real-time monitoring of tire pressure and temperature while driving and parked. Get instant notifications about pressure drops to prevent blowouts and extend tire life.",
    heroImage: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "7%", label: "Business margin increase" },
      { value: "Real-time", label: "Pressure monitoring" },
      { value: "Extended", label: "Tire lifespan" },
    ],
    highlights: [
      "TPMS sensors for each wheel",
      "Instant pressure drop notifications",
      "Tire wear statistics & analytics",
      "Reduced downtime from blowouts",
    ],
    sections: [
      {
        title: "How TPMS Improves Your Bottom Line",
        content: "Monitoring tire pressure and speed allowed our clients to increase business margins by 7% by reducing downtime and extending tire life. Proper tire pressure also reduces fuel consumption by up to 3%.",
        details: [],
      },
    ],
    monitors: ["Tire pressure per wheel", "Tire temperature", "Pressure trends over time"],
    detects: ["Sudden pressure drops", "Slow leaks", "Overheating tires"],
    equipment: [
      { name: "TPMS Sensor Kit", desc: "Wireless tire pressure and temperature sensors for commercial vehicles", price: true },
    ],
    faqs: [
      { q: "What vehicles are supported?", a: "Our TPMS solution supports trucks, buses, trailers, and construction equipment with any number of axles." },
    ],
    contactPerson: { name: "Vyacheslav Levchenko", role: "Director", telegram: "https://t.me/UfinSupportEc" },
    clients: ["RENTASTROYTECHNIKA"],
  },

  "route-assignments": {
    slug: "route-assignments",
    category: "Our Services",
    title: "Route Assignments & Task Management",
    subtitle: "Automated route task execution and delivery monitoring",
    description: "Automate timely execution of route assignments and delivery orders. Assign tasks, track completion in real-time, and integrate with 1C for seamless workflow management.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "Auto", label: "Task assignment" },
      { value: "Real-time", label: "Completion tracking" },
      { value: "1C", label: "Integration ready" },
    ],
    highlights: [
      "Automated task assignment to drivers",
      "Real-time completion notifications",
      "1C, SAP, and custom system integration",
      "Geofence-based arrival/departure tracking",
    ],
    sections: [
      {
        title: "How Route Assignment Works",
        content: "Tekonika Systems automates the entire delivery workflow — from task creation and assignment to real-time tracking and completion verification. Reduce routine manual work and ensure every delivery is on time.",
        details: [
          "Create and assign tasks from your office or mobile app",
          "Drivers receive tasks directly on their devices",
          "Automatic geofence-based arrival and departure detection",
          "Completion reports sent to your accounting system",
        ],
      },
    ],
    monitors: ["Task completion status", "Arrival/departure times", "Route adherence"],
    detects: ["Late arrivals", "Skipped stops", "Route deviations"],
    equipment: [],
    faqs: [
      { q: "Can I integrate with 1C?", a: "Yes — Tekonika Systems provides REST API and ready-made integrations for 1C, SAP, Galaxia, and other enterprise systems." },
    ],
    contactPerson: { name: "Alexey Osipov", role: "CEO", telegram: "https://t.me/Ufin_CEO" },
    clients: [],
  },

  "employee-monitoring": {
    slug: "employee-monitoring",
    category: "Our Services",
    title: "Employee GPS Monitoring",
    subtitle: "Track field employee locations and optimize operations",
    description: "Track employee locations with GPS/GLONASS trackers. Get objective attendance records, optimize routes, and ensure field staff accountability with geofence-based reporting.",
    heroImage: "https://images.unsplash.com/photo-1596633608891-fd3c7ef1e97d?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "GPS", label: "Precise tracking" },
      { value: "Geofence", label: "Zone-based alerts" },
      { value: "Auto", label: "Attendance reports" },
    ],
    highlights: [
      "GPS/GLONASS personal trackers",
      "Working hours tracking",
      "Geofence-based check-in/check-out",
      "Route optimization for field teams",
    ],
    sections: [
      {
        title: "Why Monitor Employee Locations",
        content: "For businesses with field teams — delivery, service, sales, and maintenance — knowing where your employees are and whether they follow assigned routes is critical for efficiency and accountability.",
        details: [],
      },
    ],
    monitors: ["Employee location", "Working hours", "Route adherence"],
    detects: ["Unauthorized stops", "Time theft", "Route deviations"],
    equipment: [],
    faqs: [
      { q: "Is employee monitoring legal?", a: "Yes — when employees are using company vehicles or equipment during work hours, monitoring is standard business practice. Employees should be informed about monitoring per company policy." },
    ],
    contactPerson: { name: "Alexey Osipov", role: "CEO", telegram: "https://t.me/Ufin_CEO" },
    clients: [],
  },

  "video-surveillance": {
    slug: "video-surveillance",
    category: "Our Services",
    title: "Video Surveillance for Transport",
    subtitle: "Live streaming and AI-powered video analytics for fleets",
    description: "Online video streaming and archive from inside the cab, passenger area, and exterior. AI-powered event detection with cloud storage and instant alert notifications.",
    heroImage: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "4G", label: "Live streaming" },
      { value: "AI", label: "Event detection" },
      { value: "Cloud", label: "Video storage" },
    ],
    highlights: [
      "Live video streaming via 4G",
      "Cloud-based video archive",
      "AI-powered distraction and event detection",
      "Multi-camera support (cabin, road, cargo)",
    ],
    sections: [
      {
        title: "Complete Visual Control",
        content: "Modern video surveillance solutions for passenger transport, special equipment, commercial fleets, and driving schools allow you to prevent dangerous scenarios and increase overall business safety. With modern equipment, you can constantly monitor passenger and freight transport by connecting to cloud services through an industrial 4G router.",
        details: [
          "Live streaming from multiple cameras",
          "Automatic event recording and alerts",
          "Video evidence for accident resolution",
          "PP 969 certified equipment for dangerous goods and passenger transport",
        ],
      },
    ],
    monitors: ["Road conditions", "Driver behavior", "Passenger area", "Cargo compartment"],
    detects: ["Collisions", "Driver distraction", "Unauthorized access", "Passenger incidents"],
    equipment: [
      { name: "BPK4-EHBO Video Recorder", desc: "Digital video recorder with LAN, 4G, GPS, and WiFi modules for transport", price: true },
      { name: "VK045 AHD 1080P Camera", desc: "Dome camera with microphone for AHD video signal transmission", price: true },
    ],
    faqs: [
      { q: "How long is video stored?", a: "Video is stored both on the vehicle's local SD card/hard drive and in the Tekonika Systems cloud. Cloud retention period depends on your subscription plan." },
    ],
    contactPerson: { name: "Maxim Zhokhov", role: "Head of Innovation", telegram: "https://t.me/MaxJokhov" },
    clients: ["GazProm Mezhregiongaz"],
  },

  "glonass-monitoring": {
    slug: "glonass-monitoring",
    category: "Our Services",
    title: "GLONASS/GPS Transport Monitoring",
    subtitle: "Real-time fleet tracking with comprehensive analytics",
    description: "Continuous real-time monitoring of location, speed, mileage, and fuel consumption. Get full control of your fleet with route history, geofences, automated alerts, and detailed reporting.",
    heroImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "35%", label: "Cost reduction" },
      { value: "25%", label: "Fuel savings" },
      { value: "20%", label: "Repair cost reduction" },
    ],
    highlights: [
      "Online map with real-time vehicle positions",
      "Complete trip history and route playback",
      "Geofences with automated alerts",
      "Detailed reports by mileage, fuel, speed",
    ],
    sections: [
      {
        title: "Full Fleet Visibility",
        content: "All objects are displayed on a single map in your personal dashboard, with positions updating in real-time. You can choose map types, configure object visibility, and set the most important operating parameters.",
        details: [
          "Speed, mileage, engine hours, and sensor data in a convenient format",
          "Instant alerts on your smartphone and browser for predefined events",
          "Unlimited geofences of any geometric shape",
          "Programmable alerts: entry/exit, presence/absence in zones combined with time, speed, and other parameters",
        ],
      },
    ],
    monitors: ["Vehicle location", "Speed & mileage", "Engine hours", "Sensor data"],
    detects: ["Speeding", "Unauthorized use", "Route deviations", "Idling"],
    equipment: [
      { name: "Signal S-2653 GLONASS Tracker", desc: "Navigation terminal with dual CAN interfaces for comprehensive vehicle monitoring", price: true },
    ],
    faqs: [
      { q: "How accurate is the tracking?", a: "Using GLONASS/GPS satellite systems, our trackers provide positioning accuracy within 2-5 meters in open areas." },
    ],
    contactPerson: { name: "Alexey Osipov", role: "CEO", telegram: "https://t.me/Ufin_CEO" },
    clients: ["GazProm Mezhregiongaz", "RTS-EXPORT", "Sudha Fleet Management, India"],
  },
};

// Solution pages data
export const solutionData = {
  "efficiency": {
    slug: "efficiency",
    category: "Solutions",
    title: "Business Efficiency",
    subtitle: "Optimize operations and maximize profitability",
    description: "Transparency achieved through Tekonika Systems services helps identify inefficiencies, increase your profits, and boost productivity. For any business, constant quality control and effective cost management are essential.",
    heroImage: "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "35%", label: "Cost reduction" },
      { value: "25%", label: "Fuel savings" },
      { value: "2 weeks", label: "Free trial" },
    ],
    sections: [
      {
        title: "Continuous Quality Control",
        content: "Tekonika Systems monitors delivery order execution by time and quality. End customers of our clients' services can control the entire delivery process — not only location and transport conditions, but also video of loading, movement, and unloading.",
        benefits: ["Maintaining transport conditions throughout the journey", "Providing clients with reliable arrival information", "Route schedule compliance monitoring"],
      },
      {
        title: "Unified Information Space",
        content: "In modern conditions, regular logistics order execution control is implemented through data retransmission to your permanent clients' servers. Tekonika Systems specialists will help quickly and efficiently resolve these issues and implement new integrations.",
        benefits: ["Increased customer loyalty", "Reduced manual labor", "High-quality logistics services"],
      },
      {
        title: "Route & Operating Parameter Control",
        content: "Track real-time and historical location, movement parameters, equipment operation, transport climate conditions, refueling and fuel drains. Control driving style and receive instant notifications about events of interest.",
        benefits: ["Reduced fuel costs", "Less downtime and repairs", "Improved transport quality"],
      },
      {
        title: "Driver Control & Assistance",
        content: "Monitor driver attention through audio alerts and inform fleet managers about every distraction event via online notifications with video clips and periodic reports.",
        benefits: ["Reduced accident rates", "Saved lives", "Lower unexpected costs"],
      },
    ],
    features: [
      "Equipment rental for any required period",
      "Flexible Pay-As-You-Go tariffs",
      "Individual tariff per vehicle",
      "Custom feature development for your business",
      "Support for new types of monitoring devices",
    ],
    contactPerson: { name: "Sergey Chulsky", role: "Technical Director", telegram: "https://t.me/UfinSupportEc" },
  },
  "transport-safety": {
    slug: "transport-safety",
    category: "Solutions",
    title: "Transportation Safety",
    subtitle: "Prevent accidents and protect your drivers",
    description: "Comprehensive safety solutions including driver monitoring, ADAS systems, and video surveillance to reduce accidents and protect lives on the road.",
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "40%", label: "Accident reduction" },
      { value: "AI", label: "Powered detection" },
      { value: "24/7", label: "Monitoring" },
    ],
    sections: [
      {
        title: "How We Keep Your Fleet Safe",
        content: "Using a combination of AI-powered cameras, ADAS systems, and GLONASS tracking, Tekonika Systems provides a comprehensive safety net for your fleet operations.",
        benefits: ["Driver drowsiness detection", "Forward collision warning", "Lane departure alerts", "Pedestrian detection"],
      },
    ],
    features: [],
    contactPerson: { name: "Maxim Zhokhov", role: "Head of Innovation", telegram: "https://t.me/MaxJokhov" },
  },
  "customer-loyalty": {
    slug: "customer-loyalty",
    category: "Solutions",
    title: "Customer Loyalty & Retention",
    subtitle: "A happy customer always comes back — let's work on that together",
    description: "Improve service quality and transparency for your clients through online data access, real-time tracking shared with end customers, and verifiable delivery conditions.",
    heroImage: "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "Real-time", label: "Client data access" },
      { value: "100%", label: "Transparency" },
      { value: "Higher", label: "Retention rates" },
    ],
    sections: [],
    features: [],
    contactPerson: { name: "Alexey Osipov", role: "CEO", telegram: "https://t.me/Ufin_CEO" },
  },
  "service-level": {
    slug: "service-level",
    category: "Solutions",
    title: "Service Level Improvement",
    subtitle: "How we improve the quality of your services",
    description: "Real-time control over compliance with transport standards and regulations. Ensure your fleet meets and exceeds service level agreements.",
    heroImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80",
    stats: [],
    sections: [],
    features: [],
    contactPerson: { name: "Alexey Osipov", role: "CEO", telegram: "https://t.me/Ufin_CEO" },
  },
  "threat-control": {
    slug: "threat-control",
    category: "Solutions",
    title: "Threat Control",
    subtitle: "Protect your business with access control and monitoring",
    description: "Safeguard your business using geofences, access control systems, emergency alerts, and comprehensive video surveillance for both mobile and stationary assets.",
    heroImage: "https://images.unsplash.com/photo-1545262810-a9b9f1db8a84?auto=format&fit=crop&w=1600&q=80",
    stats: [],
    sections: [],
    features: [],
    contactPerson: { name: "Alexey Osipov", role: "CEO", telegram: "https://t.me/Ufin_CEO" },
  },
};

// All service menu items for navigation
export const serviceMenuItems = [
  { label: "GLONASS/GPS Transport Monitoring", slug: "glonass-monitoring" },
  { label: "Driver Control", slug: "driver-control" },
  { label: "Fuel Consumption Control", slug: "fuel-control" },
  { label: "Temperature Control", slug: "temperature-control" },
  { label: "Tire Pressure Monitoring", slug: "tire-pressure" },
  { label: "Route Assignments", slug: "route-assignments" },
  { label: "Employee Monitoring", slug: "employee-monitoring" },
  { label: "Video Surveillance for Transport", slug: "video-surveillance" },
];

export const solutionMenuItems = [
  { label: "Efficiency", slug: "efficiency", desc: "How Tekonika Systems improves your business efficiency" },
  { label: "Transportation Safety", slug: "transport-safety", desc: "Prevention of accidents and incidents" },
  { label: "Customer Loyalty & Retention", slug: "customer-loyalty", desc: "A happy customer always comes back" },
  { label: "Service Level", slug: "service-level", desc: "How we improve the quality of your services" },
  { label: "Threat Control", slug: "threat-control", desc: "Protect your business with our access and control systems" },
];

export const industryMenuItems = [
  { label: "Food Transportation", slug: "food-transport" },
  { label: "Freight Transport", slug: "freight" },
  { label: "Passenger Transit", slug: "passenger" },
  { label: "Taxi Fleets", slug: "taxi" },
  { label: "Construction Equipment", slug: "construction" },
  { label: "Leasing", slug: "leasing" },
  { label: "Dangerous Goods", slug: "dangerous-goods" },
  { label: "Agricultural Machinery", slug: "agriculture" },
  { label: "Municipal Transport & Housing Services", slug: "municipal" },
  { label: "Banking", slug: "banking" },
  { label: "Manufacturing", slug: "manufacturing" },
  { label: "Retail", slug: "retail" },
  { label: "Pharmaceuticals", slug: "pharma" },
  { label: "Medical Institutions", slug: "medical" },
  { label: "Fuel & Energy", slug: "fuel-energy" },
  { label: "Light Commercial Vehicles", slug: "light-commercial" },
];

export const integrationMenuItems = [
  { label: "API", slug: "api" },
  { label: "Relay Servers", slug: "relay-servers" },
  { label: "Migration from Wialon", slug: "wialon-migration" },
  { label: "GLONASS Installation", slug: "glonass-installation" },
];
