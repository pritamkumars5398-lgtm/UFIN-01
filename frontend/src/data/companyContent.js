// Content for the Company section sub-pages (Reviews, News, Blog, Vacancies).
// Text is adapted into English from the reference site under the Tekonika Systems brand.

import avanstroyLogo from "../assets/avanstroy-logo.svg";
import stsLogo from "../assets/sts-logo.svg";
import adeoLogo from "../assets/adeo-logo.png";
import oktionLogo from "../assets/oktion-logo.png";
import trakLogo from "../assets/trakgrupp-logo.png";
import avanstroyImg from "../assets/companies/avanstroj-scaled.jpg.webp";
import kupetsImg from "../assets/companies/kupecz.jpg.webp";
import pflkImg from "../assets/companies/pflk-m.png.webp";
import gazpromImg from "../assets/companies/GazpromMain.png.webp";
import torexImg from "../assets/companies/____________2022-10-17_141426046.png.webp";
import toyomiImg from "../assets/companies/img-26.png.webp";

import newsDog from "../assets/img-24-e1674854414374.png.webp";
import newsFuel from "../assets/rybric-1.png.webp";
import newsLogo from "../assets/rybric-10.png.webp";

import blogHighway from "../assets/about-highway.png";
import blogTrucks from "../assets/trucks.png";
import blogTransport from "../assets/transport.png";
import blogBg from "../assets/rybric-bg.png";
import blogHandshake from "../assets/handshake.jpg";

import vacancyInterview from "../assets/vacancies-interview.png";

/* ─────────────────────────  REVIEWS  ───────────────────────── */

export const reviews = [
  {
    slug: "sk-avanstroy",
    company: 'LLC SK "Avanstroy"',
    logo: avanstroyLogo,
    image: avanstroyImg,
    date: "June 4, 2024",
    author: "Alexander Parfyonov",
    role: "Head of Transport Department",
    industry: "Construction",
    excerpt:
      "The Tekonika Systems cloud service allowed us not only to integrate satellite vehicle monitoring into our information system, but also to connect field staff to mobile monitoring.",
    body: [
      "We have been using vehicle monitoring services for many years. We tried several different tracking systems, and until recently we worked on a local server, which held back the development of automation.",
      "The Tekonika Systems cloud service allowed us not only to integrate satellite vehicle monitoring into our corporate information system, but also to connect our field staff to mobile monitoring. Reporting is now generated automatically and delivered to the responsible managers without manual work.",
      "Separately, we would like to note the technical support — every request is handled quickly and to the point.",
    ],
  },
  {
    slug: "trak-grupp",
    company: '"Trak Grupp"',
    logo: trakLogo,
    image: torexImg,
    date: "June 3, 2024",
    author: "Maxim Gumyonny",
    role: "Head of Transport Department",
    industry: "Freight logistics",
    excerpt:
      "Cooperation with Tekonika Systems gave us a complete picture of what happens with every vehicle at any moment. We saw the result from the very first day.",
    body: [
      "Cooperation with the transport monitoring service Tekonika Systems gave us a complete picture of what happens with all of our vehicles at any moment in time.",
      "We noticed the result from the first day: integration with 1C and other business systems went smoothly, and fuel consumption analytics helped us cut costs across the fleet.",
    ],
  },
  {
    slug: "torex",
    company: 'TK "TOREX"',
    logo: null,
    image: torexImg,
    date: "April 9, 2024",
    author: "Maxim",
    role: "Senior Mechanic",
    industry: "Refrigerated transport",
    excerpt:
      "Temperature monitoring for refrigerated transport removed disputes with clients — the full temperature history is always available.",
    body: [
      "We transport temperature-sensitive cargo, so cold-chain control is critical for us.",
      "With Tekonika Systems we receive instant alerts about any temperature deviation, and the full history for each trip is available for download. Disputes with clients about transport conditions have practically disappeared.",
    ],
  },
  {
    slug: "pflk-m",
    company: '"PFLK-M"',
    logo: null,
    image: pflkImg,
    date: "April 3, 2024",
    author: "Andrey Loginov",
    role: "General Director",
    industry: "Leasing",
    excerpt:
      "Fuel tracking integration and staff training were handled by the Tekonika Systems team end to end.",
    body: [
      "We needed accurate fuel control across a mixed fleet and integration with our accounting system.",
      "The Tekonika Systems team configured fuel level sensors, set up automated reports and trained our staff. Everything works as a single system now.",
    ],
  },
  {
    slug: "gazprom-mezhregiongaz",
    company: "Gazprom Mezhregiongaz",
    logo: null,
    image: gazpromImg,
    date: "November 2, 2023",
    author: "Transport Service",
    role: "Fleet operations",
    industry: "Fuel & energy",
    excerpt:
      "Driver monitoring and video surveillance reduced incident rates and gave us objective data for every case.",
    body: [
      "Safety is a priority for us. We deployed driver attention monitoring and video surveillance across the fleet.",
      "Real-time notifications about dangerous events and event-triggered video clips let us work with drivers proactively. Incident rates went down noticeably within the first quarter.",
    ],
  },
  {
    slug: "sts-logistic",
    company: "STS Logistic",
    logo: stsLogo,
    image: torexImg,
    date: "August 15, 2023",
    author: "Dmitry Gladkov",
    role: "Head of Transport Department",
    industry: "Freight logistics",
    excerpt:
      "Over several years of cooperation we significantly improved driver discipline and minimized personal use of vehicles.",
    body: [
      "Over several years of cooperation with the monitoring system we managed to significantly improve driver discipline and minimize the personal use of company vehicles.",
      "Tekonika Systems control services allowed us to combine transport monitoring of several companies into one system and set up automated reporting in 1C. The quality of service and technical support at every stage fully satisfies us.",
    ],
  },
  {
    slug: "oktion",
    company: "Oktion",
    logo: oktionLogo,
    image: torexImg,
    date: "May 20, 2023",
    author: "Fleet Manager",
    role: "Operations",
    industry: "Trade & distribution",
    excerpt:
      "We got full control over all vehicles at once; integration with 1C and several other services was a pleasant bonus.",
    body: [
      "Thanks to vehicle monitoring we were able to fully manage our transport and quickly respond to any changes.",
      "We got full control over all of our vehicles at once, and integration with 1C and several other services was a pleasant bonus.",
    ],
  },
  {
    slug: "adeo-pro",
    company: "Adeo.Pro",
    logo: adeoLogo,
    image: torexImg,
    date: "February 8, 2023",
    author: "Operations Team",
    role: "Logistics",
    industry: "Technology",
    excerpt:
      "Integration with Tekonika Systems let us automate operational processes and give clients accurate data.",
    body: [
      "Vehicle monitoring gave our company the opportunity to fully control vehicle movement and optimize costs.",
      "Integration with Tekonika Systems allowed us to automate all operational processes and provide our clients with accurate, verifiable data.",
    ],
  },
  {
    slug: "toyomi",
    company: "LLC Toyomi",
    logo: null,
    image: toyomiImg,
    date: "October 12, 2022",
    author: "Fedoseykin Valery",
    role: "CEO",
    industry: "Manufacturing",
    excerpt:
      "Here we control everything — vehicles, office, employees. All in one application, and tech support is always available.",
    body: [
      "Here we control everything — vehicles, the office, and employees. All of it in one application.",
      "Technical support is always available and responsive, which is exactly what a growing business needs.",
    ],
  },
  {
    slug: "kupetsstroy",
    company: "KupetsStroy",
    logo: null,
    image: kupetsImg,
    date: "June 30, 2022",
    author: "Procurement Department",
    role: "Supply chain",
    industry: "Construction",
    excerpt:
      "Fuel theft during refueling stopped after we deployed fuel level sensors and refueling reconciliation reports.",
    body: [
      "We suspected fuel losses at gas stations but could not prove it.",
      "After deploying fuel level sensors and enabling the purchased-vs-actual fuel reconciliation report, underfills became visible immediately. The equipment paid for itself within a few months.",
    ],
  },
  {
    slug: "reflogistik",
    company: "TK Reflogistik",
    logo: null,
    image: torexImg,
    date: "March 12, 2024",
    author: "Ivan Melnik",
    role: "Fleet Director",
    industry: "Refrigerated transport",
    excerpt:
      "Migrating off Wialon took two files and a phone call. Nothing stopped reporting.",
    body: [
      "When Wialon support ended in Russia we needed a stable platform quickly.",
      "We exported WLP and KML files, sent them over, and the engineers re-pointed every terminal remotely. Reports and geofences came across intact and the licence cost is lower.",
    ],
  },
  {
    slug: "sdka-group",
    company: "SDKA Group logistic",
    logo: null,
    image: torexImg,
    date: "September 21, 2023",
    author: "Operations",
    role: "Logistics",
    industry: "Freight logistics",
    excerpt:
      "Driver monitoring and ADAS cut our incident rate through a hard winter season.",
    body: [
      "Long-haul routes in winter are where accidents happen. We deployed DSM cameras and ADAS across the fleet.",
      "Real-time alerts for drowsiness and forward-collision risk, plus weekly driver scorecards, changed how our drivers approach night driving. Incidents dropped noticeably.",
    ],
  },
  {
    slug: "torex-tk",
    company: 'TK "TOREX"',
    logo: null,
    image: torexImg,
    date: "April 9, 2024",
    author: "Maxim",
    role: "Senior Mechanic",
    industry: "Refrigerated transport",
    excerpt:
      "The temperature history for every trip ended arguments with clients about transport conditions.",
    body: [
      "We move temperature-sensitive cargo, so cold-chain proof is everything.",
      "Instant alerts on any deviation, plus a downloadable chart per trip, mean a complaint is settled with data. Disputes have practically disappeared.",
    ],
  },
  {
    slug: "pflk-m-fuel",
    company: '"PFLK-M"',
    logo: null,
    image: pflkImg,
    date: "April 3, 2024",
    author: "Andrey Loginov",
    role: "General Director",
    industry: "Leasing",
    excerpt:
      "Fuel sensors and staff training were handled by the team end to end.",
    body: [
      "We needed accurate fuel control on a mixed fleet plus integration with accounting.",
      "The team fitted the sensors, built the calibration tables, set up automated reports and trained our people. It works as one system now.",
    ],
  },
  {
    slug: "bajaj-travels",
    company: "Bajaj Travels",
    logo: null,
    image: torexImg,
    date: "November 2, 2023",
    author: "Minu Narang",
    role: "VP Operations",
    industry: "Passenger transit",
    excerpt:
      "I cannot imagine running the fleet now without these control services.",
    body: [
      "Across a large passenger fleet, schedule adherence and in-cabin safety are constant concerns.",
      "Timetable-deviation alerts, multi-camera DVRs and driver-fatigue monitoring gave our dispatchers a real handle on the operation. Reports arrive on time by email.",
    ],
  },
  {
    slug: "gruzavtotrans",
    company: "GruzAvtoTrans",
    logo: null,
    image: torexImg,
    date: "July 18, 2022",
    author: "Dispatch Team",
    role: "Operations",
    industry: "Freight logistics",
    excerpt:
      "Sharing a live tracking link with shippers stopped the 'where is my load?' calls.",
    body: [
      "Our dispatchers spent hours a day answering location questions from customers.",
      "Now we send a temporary tracking link per load. Customers follow the truck themselves, with automatic ETA and delay alerts. The phones are quieter and customers are happier.",
    ],
  },
];

/* ─────────────────────────  NEWS  ───────────────────────── */

export const newsPosts = [
  {
    slug: "tracker-saved-brave-dog",
    title: "The tracker saved the life of a brave dog",
    date: "August 26, 2024",
    tag: "Stories",
    image: newsDog,
    excerpt:
      "A hunting dog went missing in the forest for two days. A compact TK911 collar tracker helped the owner find her safe and sound.",
    body: [
      "During a hunting trip, a dog named Aida chased game deep into the forest and did not return. For two days the owner searched the area with no result.",
      "Aida was wearing a compact TK911 collar tracker. Using the last transmitted coordinates and the live location in the mobile app, the owner narrowed the search area and found the dog in a ravine several kilometres from the camp.",
      "This is exactly the scenario our consumer trackers are built for: long battery life, a lightweight waterproof housing, and a location that is always one tap away in the app.",
    ],
  },
  {
    slug: "automated-fuel-control",
    title: "Automated fuel control: how it works in numbers",
    date: "July 4, 2024",
    tag: "Product",
    image: newsFuel,
    excerpt:
      "We broke down the three methods of detecting fuel theft and the accuracy you can expect from each of them.",
    body: [
      "Automated fuel control combines data from fuel level sensors, the CAN bus and the GLONASS tracker to detect refuelling, drains and excessive consumption without manual work.",
      "Method 1 — a fuel level sensor (DUT) — is the most reliable, with about 1% accuracy. Method 2 — a CAN bus connection — gives roughly 10% accuracy but is more economical. Method 3 — mileage-based calculation from the tracker — is the least accurate but the cheapest to deploy.",
      "For most fleets we recommend a fuel level sensor on high-value vehicles and a CAN connection on the rest, with automated reports delivered to the responsible manager by email.",
    ],
  },
  {
    slug: "updated-logo",
    title: "Tekonika Systems presents an updated logo",
    date: "March 14, 2024",
    tag: "Company",
    image: newsLogo,
    excerpt:
      "A fresh look for control. The new identity reflects how far the platform has come — from a tracking tool to a full operations system.",
    body: [
      "We have refreshed our visual identity. The new logo keeps the recognisable mark but modernises the type and colour system across the product, the website and the mobile apps.",
      "The update is purely cosmetic — all accounts, contracts and integrations continue to work exactly as before.",
    ],
  },
  {
    slug: "support-in-max-messenger",
    title: "Technical support now available in the MAX messenger",
    date: "April 15, 2026",
    tag: "Product",
    author: "Alexey Osipov",
    image: newsFuel,
    excerpt:
      "MAX joins Telegram and the phone line as a primary support channel across all Tekonika Systems mobile apps in Russia.",
    body: [
      "From this week, technical support is reachable in the MAX messenger directly from every Tekonika Systems mobile app.",
      "The change adds a channel — it does not remove any. Telegram, the toll-free line and email continue to work exactly as before, 24/7.",
    ],
  },
  {
    slug: "huawei-hms-build",
    title: "A dedicated Huawei (HMS) build of the mobile app",
    date: "March 30, 2026",
    tag: "Product",
    author: "Alexey Osipov",
    image: newsLogo,
    excerpt:
      "Huawei users without Google services get the full feature set in a native AppGallery build.",
    body: [
      "The new build targets Huawei devices running HMS instead of GMS. Push notifications, maps and background tracking all work natively.",
      "Existing Huawei users can switch by installing the AppGallery version and signing in with the same account — nothing else changes.",
    ],
  },
  {
    slug: "sk-avanstroy-case",
    title: "Case study: SK Avanstroy connects field staff to mobile monitoring",
    date: "June 4, 2024",
    tag: "Stories",
    author: "Alexey Osipov",
    image: newsFuel,
    excerpt:
      "Moving off a local server let the construction company automate reporting and add mobile monitoring for people, not just vehicles.",
    body: [
      "SK Avanstroy had run vehicle monitoring for years on a local server, which capped how far automation could go.",
      "The switch to the Tekonika Systems cloud integrated satellite monitoring into their information system and extended it to field staff through the mobile app. Reporting is now generated and delivered automatically.",
    ],
  },
  {
    slug: "winter-fuel-checklist",
    title: "Winter fuel checklist for fleet managers",
    date: "November 18, 2025",
    tag: "Product",
    author: "Sergey Chulsky",
    image: newsFuel,
    excerpt:
      "Cold weather changes fuel behaviour. A short checklist to keep drain detection accurate through the season.",
    body: [
      "Diesel volume contracts in the cold, so a tank can read lower in the morning without any theft. Re-check sensor calibration tables and temperature compensation before the first frosts.",
      "Idling to warm up cabins spikes consumption — set a separate idling norm for winter so the reports stay meaningful.",
    ],
  },
  {
    slug: "egts-retransmission-garbage-trucks",
    title: "Municipal operators: EGTS retransmission for waste collection",
    date: "September 5, 2025",
    tag: "Company",
    author: "Sergey Chulsky",
    image: newsLogo,
    excerpt:
      "New regional rules require waste-collection vehicles to feed telemetry to a municipal portal. Retransmission handles it with no extra hardware.",
    body: [
      "Where a region mandates a data feed for garbage trucks, the platform forwards a copy of each vehicle's stream to the municipal portal in EGTS while your own dashboard keeps working.",
      "Bin-lift counters and route-completion reports then match the format municipal contracts expect.",
    ],
  },
];

/* ─────────────────────────  BLOG  ───────────────────────── */

export const blogPosts = [
  {
    slug: "mandatory-glonass-on-garbage-trucks",
    title: "Mandatory GLONASS installation on garbage trucks",
    date: "September 3, 2025",
    author: "Andrey Markov",
    readTime: "6 min read",
    category: "Regulation",
    image: blogTransport,
    excerpt:
      "What the requirement to equip waste-collection vehicles with satellite monitoring means for municipal operators, and how to comply without overspending.",
    body: [
      "Waste-collection vehicles increasingly fall under regional requirements to transmit telemetry to municipal transport portals. In practice this means a certified GLONASS terminal, retransmission in the EGTS protocol, and sensors that confirm the bin-lifting mechanism actually worked.",
      "The cost-effective route is to reuse existing trackers where possible and add only the missing sensors. Tekonika Systems handles the retransmission side without extra hardware — telemetry is forwarded to the state portal and to the operator's own dashboard simultaneously.",
      "Route-completion reports then show cleaned area, number of container lifts and any skipped points, which is exactly what municipal contracts require.",
    ],
  },
  {
    slug: "fleet-digitalization-efficiency",
    title: "How fleet digitalization improves business efficiency",
    date: "August 15, 2025",
    author: "Andrey Markov",
    readTime: "8 min read",
    category: "Efficiency",
    image: blogHighway,
    excerpt:
      "Digitalization is not about dashboards for their own sake. It is about turning raw telemetry into decisions that cut fuel, downtime and repair costs.",
    body: [
      "A digitalized fleet collects location, fuel, engine-hour and driver-behaviour data continuously and turns it into a small number of reports that a manager actually acts on.",
      "The measurable outcomes are consistent across industries: around 35% lower costs from eliminating non-targeted vehicle use, roughly 25% fuel savings from catching drains and overconsumption, and about 20% lower repair costs from driving-style monitoring.",
      "The key is integration — telemetry that flows straight into 1C, SAP or a custom ERP removes manual reconciliation and makes the numbers trustworthy.",
    ],
  },
  {
    slug: "transport-telematics-under-sanctions",
    title: "Transport telematics in Russia under sanctions",
    date: "June 3, 2025",
    author: "Andrey Markov",
    readTime: "7 min read",
    category: "Industry",
    image: blogBg,
    excerpt:
      "Hardware supply chains changed, but the telematics stack did not collapse. Here is how operators kept fleets connected.",
    body: [
      "Import restrictions reshaped the tracker market. Operators moved to domestic terminals from Navtelecom, Galileosky, Umka and Neomatica, and to platforms that support a wide range of protocols so hardware choice stays flexible.",
      "Tekonika Systems is deeply integrated with all major monitoring devices and continuously expands the list of supported models and protocols, which lets fleets mix hardware from different manufacturers in one account.",
    ],
  },
  {
    slug: "car-stolen-what-to-do",
    title: "Your car was stolen. What to do",
    date: "April 29, 2025",
    author: "Andrey Markov",
    readTime: "5 min read",
    category: "Security",
    image: blogTrucks,
    excerpt:
      "A calm, ordered checklist for the first hour after a theft — and how a hidden beacon changes the outcome.",
    body: [
      "First hour: call the police and file a report, then notify your insurer. If the vehicle has a hidden GPS beacon, open the app and share the live location with the responding officers.",
      "A search beacon with its own battery keeps transmitting even if the main tracker is found and removed. That redundancy is what makes recovery realistic rather than hopeful.",
    ],
  },
  {
    slug: "secure-car-from-theft",
    title: "How to protect a car from theft as fully as possible",
    date: "March 31, 2025",
    author: "Andrey Markov",
    readTime: "6 min read",
    category: "Security",
    image: blogHandshake,
    excerpt:
      "Layered protection beats any single device. Immobilizer, hidden beacon, geofence alerts and remote engine block, working together.",
    body: [
      "No single device is enough. Effective protection is layered: a factory immobilizer, a hidden GPS beacon the thief cannot find quickly, geofence alerts that fire the moment the car leaves a known zone, and a remote engine-block relay.",
      "With Tekonika Systems the geofence and remote-block features are part of the same app, so a night-time departure alert and the ability to stop the vehicle are one screen apart.",
    ],
  },
  {
    slug: "why-glonass-not-working",
    title: "Why is GLONASS not working?",
    date: "March 18, 2025",
    author: "Andrey Markov",
    readTime: "4 min read",
    category: "Support",
    image: blogHighway,
    excerpt:
      "The five most common reasons a tracker stops reporting, and how to tell them apart from the driver's seat.",
    body: [
      "Most 'GLONASS not working' cases come down to five causes: no power to the terminal, a disconnected or damaged antenna, an expired or blocked SIM card, no cellular coverage in the current area, or the device being in a deep parking-mode sleep.",
      "The quick triage: if the last point is recent but the vehicle is in a basement or tunnel, it is coverage. If the last point is days old, it is power or the SIM. The app's device-status screen shows which.",
    ],
  },
  {
    slug: "uveos-mark-in-pts",
    title: "UVEOS: what it is and why it appears in the vehicle passport",
    date: "February 26, 2025",
    author: "Andrey Markov",
    readTime: "5 min read",
    category: "Regulation",
    image: blogBg,
    excerpt:
      "The emergency-response device (ERA-GLONASS / UVEOS) and what its mark in the PTS means for owners and fleets.",
    body: [
      "UVEOS is the in-vehicle emergency-call device. On a crash it sends location and severity to the emergency services automatically and opens a voice channel.",
      "For fleets the practical point is compliance: the device must be present and active for the vehicle to pass inspection, and its status can be monitored alongside the rest of the telemetry.",
    ],
  },
  {
    slug: "qzss-and-multi-gnss",
    title: "QZSS, Galileo, BeiDou: why multi-GNSS matters for fleets",
    date: "February 5, 2025",
    author: "Andrey Markov",
    readTime: "6 min read",
    category: "Industry",
    image: blogHighway,
    excerpt:
      "A modern terminal listens to more than GPS and GLONASS. More constellations means faster fixes and fewer urban-canyon gaps.",
    body: [
      "Adding Galileo, BeiDou and regional systems like QZSS increases the number of satellites in view, which shortens time-to-first-fix and improves accuracy between tall buildings.",
      "When choosing terminals, multi-GNSS support is worth prioritising for city fleets and anything that spends time in dense urban areas.",
    ],
  },
  {
    slug: "digitalization-checklist-small-fleet",
    title: "A digitalization checklist for a 10-vehicle fleet",
    date: "January 15, 2025",
    author: "Andrey Markov",
    readTime: "7 min read",
    category: "Efficiency",
    image: blogHighway,
    excerpt:
      "You don't need an enterprise rollout to get the benefits. Here is the minimum that pays back on a small fleet.",
    body: [
      "Start with location plus CAN mileage on every vehicle and a fuel level sensor on the two or three highest-mileage ones.",
      "Turn on three reports — daily mileage, fuel, and harsh-driving — delivered by email, and one geofence per regular site. That is enough to see the savings within a quarter.",
    ],
  },
  {
    slug: "driver-scorecards-that-work",
    title: "Driver scorecards people actually act on",
    date: "December 10, 2024",
    author: "Andrey Markov",
    readTime: "6 min read",
    category: "Efficiency",
    image: blogTrucks,
    excerpt:
      "A scorecard that lists every event is ignored. One that ranks drivers on three weighted metrics changes behaviour.",
    body: [
      "Effective scorecards are short: harsh events per 100 km, speeding time as a share of driving time, and idling. Weight them, rank the drivers, and review the bottom three each week.",
      "Pair the ranking with the event video clips so a conversation is about a specific moment, not an abstract number.",
    ],
  },
  {
    slug: "cold-chain-audit-trail",
    title: "Building a cold-chain audit trail your clients trust",
    date: "November 20, 2024",
    author: "Andrey Markov",
    readTime: "6 min read",
    category: "Industry",
    image: blogTransport,
    excerpt:
      "Temperature data is only useful if it is complete, tamper-evident and easy to hand over. Three things to get right.",
    body: [
      "Log every zone continuously, not on a schedule, so a short excursion cannot slip between samples. Add a door sensor so an open door explains a spike.",
      "Generate a per-shipment certificate automatically and expose the raw data via API, so a client's quality team can pull it into their own system without asking you.",
    ],
  },
];

/* ─────────────────────────  VACANCIES  ───────────────────────── */

export const vacancyIntro =
  "Tekonika Systems is always interested in qualified people and invites specialists from different fields to join the team. We build cloud control services used by hundreds of companies, and we grow the product every month.";

export const vacancyPerks = [
  { title: "Formal employment", desc: "Full official employment from day one, with paid leave and sick days." },
  { title: "Remote-friendly", desc: "Most engineering and support roles are fully remote or hybrid by choice." },
  { title: "Bonuses", desc: "Monthly or quarterly performance bonuses on top of a fixed salary." },
  { title: "Growth", desc: "A clear path from specialist to lead, with a training budget and mentoring." },
  { title: "Real product", desc: "Your work ships to a live platform with thousands of connected devices." },
  { title: "Modern stack", desc: "C#/.NET, T-SQL, REST APIs, IoT protocols and a cloud-first architecture." },
];

export const vacancyImage = vacancyInterview;

export const vacancies = [
  {
    slug: "sales-manager-monitoring",
    title: "Sales Manager — Vehicle Control Systems (GLONASS / Video)",
    location: "Moscow",
    experience: "1–3 years",
    type: "Full-time",
    format: "Office / hybrid; contract, freelance or self-employed options available",
    summary:
      "Sell monitoring systems and installation services to commercial fleets. Own the deal from first contact to a signed contract and a connected vehicle.",
    responsibilities: [
      "Work inbound leads and build your own pipeline of fleet operators",
      "Prepare commercial proposals and equipment configurations",
      "Run platform demonstrations online and on site",
      "Coordinate installation scheduling with the technical team",
      "Keep the CRM accurate and forecast reliably",
    ],
    requirements: [
      "Prior experience selling satellite vehicle monitoring or related fleet technology",
      "Confident with B2B sales cycles and decision-makers in transport departments",
      "Clear written and spoken communication",
    ],
    offer: [
      "Fixed salary plus quarterly bonuses",
      "Warm leads from marketing",
      "Product training and a dedicated pre-sales engineer",
    ],
  },
  {
    slug: "csharp-tsql-developer",
    title: "C# & T-SQL Developer",
    location: "Moscow",
    experience: "3–6 years",
    type: "Full-time",
    format: "Remote-friendly with flexible hours",
    summary:
      "Build and maintain the services behind the monitoring platform — REST APIs, device integrations and data processing at scale.",
    responsibilities: [
      "Develop and maintain REST API endpoints for the web and mobile clients",
      "Integrate new IoT devices and telemetry protocols",
      "Optimize T-SQL queries and stored procedures over large datasets",
      "Improve reliability, observability and performance of background processing",
    ],
    requirements: [
      "Strong C# / .NET and T-SQL proficiency",
      "Engineering education",
      "Experience with high-load data processing",
    ],
    offer: [
      "Remote work and flexible schedule",
      "Monthly bonuses and formal employment",
      "Career development and a training budget",
    ],
    niceToHave: ["MS SQL Server administration", "Linux experience", "Message queues (RabbitMQ / Kafka)"],
  },
];

/* ─────────────────────────  GUARANTEES  ───────────────────────── */

export const guaranteeExclusions = [
  "Installation, maintenance or operating instructions were violated",
  "Intentional damage was caused by the client's staff",
  "Mechanical damage is present — cracks, dents, or accident-related harm",
  "There is evidence of unauthorized modification or repair",
  "The defect stems from other vehicle components or wiring",
  "The vehicle experienced electrical or operational overloads",
];

export const guaranteeSteps = [
  { title: "Contact support", desc: "Report the defect to 24/7 technical support as soon as it is discovered, within the warranty period." },
  { title: "Remote diagnostics", desc: "In most cases the issue is identified remotely from telemetry and device logs." },
  { title: "Repair or replacement", desc: "If the case is covered, the device is repaired or replaced to minimize the time the object is unmonitored." },
];
