// Content for the Resources section sub-pages.
// Adapted into English from the reference site under the Tekonika Systems brand.

import galileo from "../assets/galileo10.jpg.webp";
import signal from "../assets/signal-s2653.jpg";
import umka from "../assets/umka302-1.jpg.webp";
import bpk from "../assets/BPK4-EHBO.jpg.webp";
import mdsm7 from "../assets/mdsm-7.jpg";
import mdas9 from "../assets/mdas-9.jpg";
import mrv21 from "../assets/mrv-21.jpg";
import escortTd from "../assets/escort-td-ble.jpg";
import externalTpms from "../assets/external-tpms.jpg";
import internalTpms from "../assets/internal-tpms.jpg";
import tpmsMonitor from "../assets/tpms-monitor.jpg";
import hp21 from "../assets/hp21.jpg";

/* ─────────────────────────  EQUIPMENT CATALOG  ───────────────────────── */

export const equipmentCategories = [
  "All",
  "Navigation terminals",
  "Video recorders & cameras",
  "Fuel sensors",
  "Tire pressure (TPMS)",
  "Driver assistance",
  "CAN readers",
];

export const equipment = [
  {
    name: "GALILEOSKY 10",
    category: "Navigation terminals",
    price: "17 800 ₽",
    image: galileo,
    desc: "Flagship terminal with flexible configuration, CAN, RS-232/485 and support for a wide range of sensors.",
    tags: ["GLONASS/GPS", "CAN", "Wi-Fi"],
  },
  {
    name: "SIGNAL S-2653",
    category: "Navigation terminals",
    price: "12 890 ₽",
    image: signal,
    desc: "GLONASS tracker with two CAN interfaces for TPMS, temperature control and CAN mileage.",
    tags: ["GLONASS/GPS", "2× CAN", "BLE"],
  },
  {
    name: "UMKa302",
    category: "Navigation terminals",
    price: "6 400 ₽",
    image: umka,
    desc: "Compact, economical terminal for basic location and mileage monitoring on light fleets.",
    tags: ["GLONASS/GPS", "1-Wire"],
  },
  {
    name: "BPK4-EHBO Video Recorder",
    category: "Video recorders & cameras",
    price: "21 900 ₽",
    image: bpk,
    desc: "4-channel mobile DVR with LAN, 4G, GPS and Wi-Fi modules; PP 969 certified for passenger transport.",
    tags: ["4 channels", "4G", "SD + HDD"],
  },
  {
    name: "H20P 2/4-channel Recorder Kit",
    category: "Video recorders & cameras",
    price: "14 900 – 31 900 ₽",
    image: hp21,
    desc: "Configurable DVR bundle with cabin, road and cargo cameras and event-triggered cloud upload.",
    tags: ["2–4 channels", "Night vision", "Cloud"],
  },
  {
    name: "Escort TD-BLE Fuel Sensor",
    category: "Fuel sensors",
    price: "from 4 900 ₽",
    image: escortTd,
    desc: "Wireless Bluetooth fuel level sensor, ~1% accuracy, 5-year battery, IP67 housing.",
    tags: ["BLE", "1000 mm", "IP67"],
  },
  {
    name: "Escort TD-150 Fuel Sensor",
    category: "Fuel sensors",
    price: "from 4 200 ₽",
    image: escortTd,
    desc: "Wired capacitive fuel level sensor for rectangular and cylindrical tanks.",
    tags: ["RS-485", "Analog", "1000 mm"],
  },
  {
    name: "External TPMS Sensor Kit",
    category: "Tire pressure (TPMS)",
    price: "from 6 500 ₽",
    image: externalTpms,
    desc: "Valve-mounted wireless pressure and temperature sensors with anti-theft locks.",
    tags: ["Wireless", "Anti-theft", "Up to 36 wheels"],
  },
  {
    name: "Internal TPMS Sensor Kit",
    category: "Tire pressure (TPMS)",
    price: "from 8 900 ₽",
    image: internalTpms,
    desc: "In-tyre sensors for heavy trucks and buses; immune to tampering and road damage.",
    tags: ["In-tyre", "Heavy duty"],
  },
  {
    name: "TPMS Cab Display",
    category: "Tire pressure (TPMS)",
    price: "4 300 ₽",
    image: tpmsMonitor,
    desc: "Standalone driver display for real-time per-wheel pressure and temperature.",
    tags: ["Driver display", "Alarms"],
  },
  {
    name: "MRV-21 Driver Assistance System",
    category: "Driver assistance",
    price: "on request",
    image: mrv21,
    desc: "Integrated ADAS with 77 GHz radar and camera for windshield mounting; works in fog, rain and glare.",
    tags: ["Radar + camera", "ADAS", "Dash cam"],
  },
  {
    name: "MDAS-9 Driver Assistance System",
    category: "Driver assistance",
    price: "on request",
    image: mdas9,
    desc: "Forward collision, lane departure, pedestrian and speed-sign warnings.",
    tags: ["FCW", "LDW", "Sign recognition"],
  },
  {
    name: "MDSM-7 Driver Monitoring Camera",
    category: "Driver assistance",
    price: "on request",
    image: mdsm7,
    desc: "Intelligent in-cab camera detecting drowsiness, distraction, phone use and smoking.",
    tags: ["DSM", "AI", "4G"],
  },
  {
    name: "ALL-CAN300 CAN Reader",
    category: "CAN readers",
    price: "2 700 ₽",
    image: signal,
    desc: "Contactless CAN bus reader for fuel and mileage data with no cutting into wiring.",
    tags: ["Contactless", "Plug & play"],
  },
  {
    name: "MINI-CAN Reader",
    category: "CAN readers",
    price: "2 700 ₽",
    image: signal,
    desc: "Compact CAN reader for light commercial vehicles and passenger cars.",
    tags: ["Compact", "LCV"],
  },
];

/* ─────────────────────────  TRACKER INSTRUCTIONS  ───────────────────────── */

export const instructionGroups = [
  {
    group: "Apps & platform",
    items: [
      { title: "Tekonika Systems mobile app", desc: "Install, sign in, add an object and configure notifications.", steps: 6 },
      { title: "Web dashboard quick start", desc: "Maps, objects, geofences and the first report.", steps: 5 },
    ],
  },
  {
    group: "Consumer trackers (TK-STAR)",
    items: [
      { title: "TK-STAR TK918", desc: "SIM insertion, APN setup and binding to your account.", steps: 7 },
      { title: "TK-STAR TK109", desc: "Charging, activation and geofence configuration.", steps: 6 },
      { title: "TK-STAR TK911", desc: "Collar/keychain tracker setup and power-saving modes.", steps: 6 },
      { title: "TK-STAR TK935", desc: "Magnetic beacon activation and motion alerts.", steps: 5 },
      { title: "TK-STAR TK905 / TK905B", desc: "Long-life magnetic tracker: SIM, activation, and app binding.", steps: 7 },
    ],
  },
  {
    group: "OBD & compact trackers",
    items: [
      { title: "OBD-2 TK816", desc: "Plug into the OBD-II port, pair with the app and read diagnostics.", steps: 4 },
      { title: "QP103", desc: "Wiring, ignition detection and speed-alert thresholds.", steps: 6 },
    ],
  },
];

export const connectSteps = [
  { title: "Insert an activated SIM card", desc: "A nano/micro SIM with mobile data and, for older models, an enabled voice channel. Disable the PIN request." },
  { title: "Power the device", desc: "Charge consumer trackers fully; connect fleet terminals to +12/24 V and ignition per the wiring diagram." },
  { title: "Send the APN settings", desc: "Send the operator APN by SMS or set it in the app so the tracker can reach the server." },
  { title: "Bind it to your account", desc: "Add the object by IMEI in the app or dashboard. The first point usually appears within a minute outdoors." },
];

/* ─────────────────────────  UPDATES JOURNAL  ───────────────────────── */

export const updates = [
  {
    date: "April 15, 2026",
    tag: "Support",
    title: "Technical support in the MAX messenger",
    desc: "MAX is now the primary channel for technical support across all Tekonika Systems mobile apps, alongside Telegram and phone.",
  },
  {
    date: "March 30, 2026",
    tag: "Mobile",
    title: "Huawei HMS build of the mobile app",
    desc: "A dedicated build for Huawei devices on HMS, with the full feature set previously available only on the GMS version.",
  },
  {
    date: "March 15, 2026",
    tag: "Web",
    title: "Richer fuel and sensor charts",
    desc: "Fuel-monitoring and sensor graphs now overlay trip segments, parking intervals and refuelling/drain events on one timeline.",
  },
  {
    date: "March 5, 2026",
    tag: "Billing",
    title: "More payment methods",
    desc: "Mobile payments expanded through SBP and direct banking-app flows for faster top-ups.",
  },
  {
    date: "February 10, 2026",
    tag: "Devices",
    title: "Arbitrary command support",
    desc: "Send arbitrary commands to Navtelecom, Umka and Vega terminals directly from the device card.",
  },
  {
    date: "January 20, 2026",
    tag: "Web",
    title: "Report builder templates",
    desc: "Save any configured report as a template and schedule it to a mailing list.",
  },
];

/* ─────────────────────────  LEGAL  ───────────────────────── */

export const userAgreement = {
  updated: "Last updated: January 1, 2026",
  intro:
    "This User Agreement governs the relationship between Tekonika Systems (the \"Company\") and any individual or legal entity (the \"User\") using the Company's monitoring platform, mobile applications and related services (the \"Service\").",
  sections: [
    {
      heading: "1. Acceptance of the terms",
      body: [
        "By registering an account, connecting an object, or otherwise using the Service, the User confirms that they have read, understood and accepted this Agreement in full.",
        "If the User does not agree with any provision, they must stop using the Service.",
      ],
    },
    {
      heading: "2. The Service",
      body: [
        "The Service provides collection, transmission, storage and visualisation of telemetry data from connected devices, along with reporting, notifications and integrations.",
        "The Company may improve, change or discontinue individual features, giving reasonable notice for material changes that affect paid functionality.",
      ],
    },
    {
      heading: "3. Accounts and access",
      body: [
        "The User is responsible for the accuracy of registration data and for keeping account credentials confidential.",
        "The User is responsible for all actions performed under their account and must notify the Company immediately of any unauthorised access.",
      ],
    },
    {
      heading: "4. Acceptable use",
      body: [
        "The User must use the Service only for lawful purposes and only in relation to objects and persons they are legally entitled to monitor.",
        "It is prohibited to interfere with the operation of the Service, attempt unauthorised access, or use the Service to violate the rights of third parties.",
      ],
    },
    {
      heading: "5. Fees and payment",
      body: [
        "Paid plans are billed according to the tariff selected by the User. Service counters use a minimal step, so the User pays only for the volume actually consumed.",
        "Non-payment may result in suspension of data collection until the balance is restored; historical data is retained per the applicable plan.",
      ],
    },
    {
      heading: "6. Data and privacy",
      body: [
        "Processing of personal data is described in the Privacy Policy, which forms an integral part of this Agreement.",
        "Telemetry data belongs to the User. The Company processes it solely to provide the Service and does not sell it to third parties.",
      ],
    },
    {
      heading: "7. Limitation of liability",
      body: [
        "The Service depends on third-party networks (satellite positioning, mobile operators) and connected hardware. The Company is not liable for interruptions caused by factors outside its control.",
        "The Company's aggregate liability is limited to the amount paid by the User for the Service during the three months preceding the event giving rise to the claim.",
      ],
    },
    {
      heading: "8. Term and termination",
      body: [
        "The Agreement is effective until terminated. The User may stop using the Service and delete their account at any time.",
        "The Company may suspend or terminate access for a material breach of this Agreement, with notice where practicable.",
      ],
    },
    {
      heading: "9. Changes to the Agreement",
      body: [
        "The Company may update this Agreement. The current version is always published on this page with the update date. Continued use after changes take effect constitutes acceptance.",
      ],
    },
    {
      heading: "10. Contact",
      body: [
        "Questions about this Agreement: support@tekonikasystems.online, 8 (800) 444-04-81, Mon–Fri 9:00–18:00.",
      ],
    },
  ],
};

export const privacyPolicy = {
  updated: "Last updated: January 1, 2026",
  intro:
    "This Privacy Policy explains what personal data Tekonika Systems collects, why, how it is used and protected, and what rights the data subject has.",
  sections: [
    {
      heading: "1. Data we collect",
      body: [
        "Account data: name, company, email, phone number and login credentials.",
        "Usage data: actions in the app and dashboard, device identifiers, IP address and browser type.",
        "Telemetry data: coordinates, speed, sensor readings and events transmitted by connected devices.",
      ],
    },
    {
      heading: "2. Why we process data",
      body: [
        "To provide and maintain the Service, authenticate users and deliver notifications.",
        "To process payments and fulfil accounting and legal obligations.",
        "To provide technical support and improve reliability, security and features.",
      ],
    },
    {
      heading: "3. Legal basis",
      body: [
        "Processing is based on performance of the contract with the User, the User's consent where required, and the Company's legitimate interest in operating and securing the Service.",
      ],
    },
    {
      heading: "4. Sharing",
      body: [
        "Data may be shared with infrastructure and payment providers acting as processors under written agreements, and with authorities where required by law.",
        "On the User's instruction, telemetry may be retransmitted to the User's own or state servers (for example EGTS portals).",
        "We do not sell personal data.",
      ],
    },
    {
      heading: "5. Retention",
      body: [
        "Account data is retained while the account is active and for the period required by law afterwards.",
        "Telemetry retention depends on the User's plan; the User can export or request deletion of their data.",
      ],
    },
    {
      heading: "6. Security",
      body: [
        "Data is transmitted over encrypted channels and stored with access controls, logging and regular backups.",
        "Access to personal data is limited to employees who need it to perform their duties.",
      ],
    },
    {
      heading: "7. Your rights",
      body: [
        "You may request access to, correction or deletion of your personal data, object to processing, or withdraw consent.",
        "To exercise these rights, contact support@tekonikasystems.online. We respond within the period established by applicable law.",
      ],
    },
    {
      heading: "8. Cookies",
      body: [
        "The website uses essential cookies for authentication and preferences, and analytics cookies to understand usage. You can control cookies in your browser settings.",
      ],
    },
    {
      heading: "9. Changes",
      body: [
        "We may update this Policy. The current version is published on this page with the update date.",
      ],
    },
    {
      heading: "10. Contact",
      body: [
        "Data protection queries: support@tekonikasystems.online, 8 (800) 444-04-81.",
      ],
    },
  ],
};
