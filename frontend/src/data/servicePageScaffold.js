// Reference-style scaffolding shared by every Services page.
// resolveServicePage(slug) merges the per-slug content in servicesData.js
// with the common blocks the ufin.online service template shows on every page
// (pricing callouts, tariff cards, "how to start" steps, portfolio cases,
// before/after results, "additionally" groups, equipment showcase).

import { serviceData, solutionData } from "./servicesData";

// ── Industry hero images (the same artwork the reference site uses) ──
import industryFood from "../assets/Produkty.png.webp";
import industryFreight from "../assets/GruzTransport.png.webp";
import industryPassenger from "../assets/PassazhirPerevozki.png.webp";
import industryTaxi from "../assets/Taxi.png.webp";
import industryConstruction from "../assets/StroyTechnika.png.webp";
import industryLeasing from "../assets/Lizing.png.webp";
import industryDangerous from "../assets/OpasnieGruzy.png.webp";
import industryAgri from "../assets/Selhoz.png.webp";
import industryMunicipal from "../assets/ZhKHa.png";
import industryBanking from "../assets/Banki.png";
import industryManufacturing from "../assets/Proizvodstvo.png";
import industryRetail from "../assets/Torgovlya.png";
import industryPharma from "../assets/Farma.png";
import industryMedical from "../assets/MedUchrezhdeniya.png";
import industryFuel from "../assets/ToplivoIEnergetika.png";

// ── Scene / device imagery for service & solution heroes and sections ──
import sceneDriver from "../assets/driver.png";
import sceneTransport from "../assets/transport.png";
import sceneHighway from "../assets/about-highway.png";
import sceneTrucks from "../assets/trucks.png";
import sceneTasks from "../assets/tasks.png";
import sceneVideo from "../assets/video.png";
import sceneEmployees from "../assets/employees.png";
import sceneIntegrations from "../assets/integrations.png";
import sceneHandshake from "../assets/handshake.jpg";
import sceneMap from "../assets/world-map-grey.png";
import sceneRybric from "../assets/rybric-bg.png";

import devGalileo from "../assets/galileo10.jpg.webp";
import devSignal from "../assets/signal-s2653.jpg";
import devUmka from "../assets/umka302-1.jpg.webp";
import devBpk from "../assets/BPK4-EHBO.jpg.webp";
import devMdsm from "../assets/mdsm-7.jpg";
import devMdas from "../assets/mdas-9.jpg";
import devMrv from "../assets/mrv-21.jpg";
import devEscort from "../assets/escort-td-ble.jpg";
import devTpmsExt from "../assets/external-tpms.jpg";
import devTpmsInt from "../assets/internal-tpms.jpg";
import devTpmsMon from "../assets/tpms-monitor.jpg";
import devHp21 from "../assets/hp21.jpg";

const DEFAULT_HERO = sceneHighway;

export const industryHeroImages = {
  "food-transport": industryFood,
  freight: industryFreight,
  passenger: industryPassenger,
  taxi: industryTaxi,
  construction: industryConstruction,
  leasing: industryLeasing,
  "dangerous-goods": industryDangerous,
  agriculture: industryAgri,
  municipal: industryMunicipal,
  banking: industryBanking,
  manufacturing: industryManufacturing,
  retail: industryRetail,
  pharma: industryPharma,
  medical: industryMedical,
  "fuel-energy": industryFuel,
  "light-commercial": industryFreight,
};

// Local hero art takes priority over the stock URLs in servicesData.js
export const localHeroImages = {
  ...industryHeroImages,
  "glonass-monitoring": sceneTransport,
  "driver-control": sceneDriver,
  "fuel-control": sceneHighway,
  "temperature-control": industryFood,
  "tire-pressure": devTpmsMon,
  "route-assignments": sceneTasks,
  "employee-monitoring": sceneEmployees,
  "video-surveillance": sceneVideo,
  efficiency: sceneHighway,
  "transport-safety": sceneDriver,
  "customer-loyalty": sceneHandshake,
  "service-level": sceneTransport,
  "threat-control": sceneRybric,
  api: sceneIntegrations,
  "relay-servers": sceneMap,
  "wialon-migration": sceneIntegrations,
  "glonass-installation": sceneTrucks,
};

export const sectionImagePool = [
  sceneHighway, sceneTransport, sceneTrucks, sceneTasks, sceneVideo, sceneDriver, sceneHandshake,
];

export const deviceImagePool = [
  devSignal, devGalileo, devBpk, devMrv, devMdas, devMdsm, devEscort, devTpmsExt, devUmka, devTpmsInt, devHp21, devTpmsMon,
];

// ── Shared blocks the reference shows on every service / industry page ──

export const defaultTariffs = [
  { name: "Economy", interval: "Data updates every 30 seconds while moving", monthly: "₽249", annual: "₽2,799 / year", note: "Standard fleets" },
  { name: "Premium", interval: "Data updates every 10 seconds", monthly: "₽549", annual: "₽5,999 / year", note: "Dynamic operations", highlight: true },
  { name: "Professional", interval: "Data updates every 5 seconds", monthly: "₽749", annual: "₽7,999 / year", note: "Maximum precision" },
  { name: "Video", interval: "1-minute updates + unlimited video traffic", monthly: "₽1,449", annual: "₽15,999 / year", note: "Video-equipped vehicles" },
];

export const defaultSteps = [
  { title: "Agree the terms", desc: "We confirm the service conditions and the scope of monitoring for your fleet." },
  { title: "Approve the spec", desc: "We prepare the device specification and installation points for each vehicle." },
  { title: "Pay for equipment", desc: "You pay once for the hardware and installation; the subscription is billed per vehicle." },
  { title: "Install", desc: "Certified engineers fit and calibrate the equipment at your base or ours." },
  { title: "Go live", desc: "The service is activated and your team starts working with the data." },
];

export const defaultPortfolio = [
  {
    title: "Location & operations monitoring",
    scope: "Location, ignition, speed, mileage, engine hours",
    fleet: "3 vehicles",
    time: "1 day",
    price: "from ₽9,999 incl. 12 months of service",
  },
  {
    title: "Location & fuel level control",
    scope: "Location plus fuel level sensor, refuelling and drain events",
    fleet: "40 vehicles",
    time: "2 weeks",
    price: "from ₽14,999 per vehicle",
  },
  {
    title: "Location & temperature monitoring",
    scope: "Location, cargo-compartment temperature, door sensor",
    fleet: "100 vehicles",
    time: "1 month",
    price: "from ₽14,999 incl. 12 months of service",
  },
  {
    title: "Video monitoring",
    scope: "2 cameras (1 with audio), 1-month archive, live stream",
    fleet: "38 vehicles",
    time: "2 months",
    price: "from ₽78,300 + ₽1,450 / mo unlimited traffic",
  },
  {
    title: "Driver attention + location",
    scope: "DSM camera, ADAS, location, driving-style scoring",
    fleet: "23 vehicles",
    time: "1 week",
    price: "on request",
  },
];

export const defaultBeforeAfter = [
  { metric: "Fleet productivity", before: "100 orders / month", after: "107 orders / month (+7%)" },
  { metric: "Vehicle lifespan", before: "5 years", after: "7 years (+40%)" },
  { metric: "Driver discipline", before: "—", after: "Improved" },
  { metric: "RNIS / permit data feed", before: "—", after: "Connected" },
  { metric: "Accidents per year", before: "10 cases", after: "5 cases (−50%)" },
  { metric: "Monthly accident-related costs", before: "₽1.0M", after: "₽0.9M (−10%)" },
  { metric: "Total monthly mileage", before: "110,000 km", after: "100,000 km (−10%)" },
  { metric: "Repair-related downtime", before: "Significant", after: "−40%" },
];

export const defaultAdditional = [
  {
    title: "Higher revenue",
    items: ["More completed orders per vehicle", "Fewer repairs and less downtime", "Higher vehicle availability"],
  },
  {
    title: "Better service quality",
    items: ["Improved driving culture", "Fewer driver and customer incidents", "Verifiable transport conditions for clients"],
  },
  {
    title: "Asset recovery",
    items: ["Help locating a stolen or unreturned vehicle", "Hidden backup beacon", "Remote engine block on supported models"],
  },
];

export const defaultTestimonial = {
  quote:
    "With Tekonika Systems we achieved significant results in reducing operational costs at every stage of freight transportation, using monitoring devices from various manufacturers in one system.",
  author: "Dmitry Gladkov",
  role: "Head of Transport Department, STS Logistic",
};

export const integrationPartners = [
  "1C", "SAP", "Galaxia", "Yandex.Courier", "MoveInSync", "RedBus", "Mos.ru", "Advantum",
];

export const integrationProtocols = ["EGTS", "AIS140", "Wialon IPS", "NIS", "REST / WebSocket"];

function defaultPricing(category) {
  if (category === "By Industry") return { equip: "from ₽5,900 / vehicle", sub: "from ₽249 / month" };
  if (category === "Our Services") return { equip: "from ₽14,999 / vehicle", sub: "from ₽349 / month" };
  return null;
}

export function fallbackServicePage(slug) {
  const title = slug
    ? slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "Service";
  return {
    slug,
    category: "Services & Solutions",
    title,
    subtitle: `${title} by Tekonika Systems`,
    description: `Continuous monitoring, real-time analytics and automated reporting for ${title.toLowerCase()} — tailored to commercial fleets and business operations.`,
    stats: [
      { value: "24/7", label: "Real-time monitoring" },
      { value: "99.9%", label: "System uptime" },
      { value: "30%", label: "Average cost savings" },
      { value: "2 weeks", label: "Free trial" },
    ],
    highlights: [
      "Real-time location and operational data",
      "Automated alerts for threshold violations",
      "Integration with 1C, SAP and custom ERP",
      "24/7 technical support and a dedicated manager",
    ],
    sections: [
      {
        title: `How ${title} works`,
        content: `Tekonika Systems collects data from trackers, sensors and cameras, then turns it into a small set of reports your team acts on — location, operating parameters, fuel, driver behaviour and equipment status in one interface.`,
        details: [
          "Multi-map tracking with route playback",
          "Custom geofences and schedule compliance",
          "Automated daily and monthly reports",
          "Role-based access for every department",
        ],
      },
    ],
    monitors: ["Vehicle location", "Speed & mileage", "Engine hours", "Sensor data"],
    detects: ["Unauthorized use", "Route deviations", "Idling and overspeed", "Missed schedules"],
    equipment: [
      { name: "Signal S-2653 Navigation Terminal", desc: "GLONASS tracker with dual CAN interfaces and mileage analytics", price: true },
      { name: "GALILEOSKY 10 Terminal", desc: "Flexible terminal for monitoring, control and object management", price: true },
    ],
    faqs: [
      { q: `How do we connect ${title}?`, a: "Leave a request or message us in Telegram. Our specialists configure the system and arrange installation." },
      { q: "Is hardware installation required?", a: "Depending on the service, trackers or sensors are fitted by our certified technicians. Some integrations are software-only." },
    ],
    contactPerson: { name: "Sergey Chulsky", role: "Technical Director", telegram: "https://t.me/tekonika_systems" },
    clients: ["Gazprom Mezhregiongaz", "STS Logistic", "SK Avanstroy"],
  };
}

export function resolveServicePage(slug) {
  const base = serviceData[slug] || solutionData[slug] || fallbackServicePage(slug);
  const category = base.category || "Services & Solutions";

  return {
    // shared defaults — overridden by anything defined per-slug
    steps: defaultSteps,
    portfolio: defaultPortfolio,
    tariffs: defaultTariffs,
    beforeAfter: defaultBeforeAfter,
    additional: defaultAdditional,
    testimonial: defaultTestimonial,
    pricing: defaultPricing(category),
    ...base,
    slug,
    category,
    heroImage: localHeroImages[slug] || base.heroImage || DEFAULT_HERO,
  };
}
