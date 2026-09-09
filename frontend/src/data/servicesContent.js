// Per-slug content that fills the middle sections of every Services page
// (benefit bullets, deep-dive sections, monitor/detect columns, equipment,
// FAQ, client strip) so each page matches the density of ufin.online.
// resolveServicePage() spreads this OVER the thin servicesData.js entries,
// so this wins; the hero and CTA blocks in ServiceDetail.jsx are untouched.

const CHULSKY = { name: "Sergey Chulsky", role: "Technical Director", telegram: "https://t.me/tekonika_systems" };
const ZHOKHOV = { name: "Maxim Zhokhov", role: "Head of Innovation", telegram: "https://t.me/tekonika_systems" };
const OSIPOV = { name: "Alexey Osipov", role: "General Manager", telegram: "https://t.me/tekonika_systems" };

export const servicesContent = {
  /* ─────────────────────────  INTEGRATIONS  ───────────────────────── */

  api: {
    category: "Integrations",
    stats: [
      { value: "REST", label: "JSON / XML" },
      { value: "WebSocket", label: "Live event stream" },
      { value: "1C · SAP", label: "Ready connectors" },
      { value: "OpenAPI", label: "Swagger spec" },
    ],
    highlights: [
      "Import location, fuel, order status and alerts straight into your ERP",
      "Push transport orders and reference books into Tekonika Systems",
      "Subscribe to a real-time WebSocket event stream",
      "Ready-made 1C modules and a documented OpenAPI (Swagger) spec",
    ],
    sections: [
      {
        title: "One API for the whole platform",
        content:
          "A single REST API with token authentication exposes every entity in the account. Responses are JSON or XML, rate limits and pagination are documented, and a WebSocket channel delivers events the moment they happen.",
        details: [
          "Objects, groups and their current telemetry",
          "Trips, stops, mileage and engine-hour reports",
          "Fuel level, refuelling and drain events",
          "Geofences and programmable notifications",
        ],
      },
      {
        title: "Data you can send us",
        content:
          "The API is two-way. Load incoming transport orders, planned routes and reference data so the platform can check execution against your plan and return the result.",
        details: [
          "Incoming transport orders and delivery points",
          "Planned routes and schedules",
          "Drivers, vehicles and counterparties",
        ],
      },
      {
        title: "Ready-made connectors",
        content:
          "For the most common systems you do not need to write code. Install a module and map the fields.",
        details: [
          "1C:ERP and 1C:Transport Logistics modules",
          "Yandex.Courier order exchange",
          "Generic outbound webhooks for any endpoint",
        ],
      },
    ],
    monitors: [
      "Vehicle location and operating parameters",
      "Aggregated trip and mileage reports",
      "Cargo and order execution status",
      "Sensor readings and event streams",
    ],
    detects: [
      "Manual re-keying of data between systems",
      "Reconciliation gaps and reporting errors",
      "Delays getting telemetry to dispatchers",
      "Lock-in to a single monitoring vendor",
    ],
    faqs: [
      { q: "How is the API authenticated?", a: "With a bearer token issued in your account. Tokens are scoped and can be revoked at any time." },
      { q: "What data formats are supported?", a: "JSON by default, XML on request. The WebSocket channel streams JSON events." },
      { q: "Are there rate limits?", a: "Yes, documented per endpoint. Bulk and historical requests use separate, higher limits." },
      { q: "Is there a sandbox?", a: "Yes — a test account with sample objects so you can build the integration before going live." },
    ],
    clients: ["Adeo.Pro", "STS Logistic", "Bajaj Travels"],
    contactPerson: CHULSKY,
  },

  "relay-servers": {
    category: "Integrations",
    stats: [
      { value: "EGTS", label: "State portals" },
      { value: "AIS140", label: "Supported" },
      { value: "Multi-dest", label: "Per-object routing" },
      { value: "0", label: "Extra hardware" },
    ],
    highlights: [
      "Retransmit telemetry to state portals (EGTS) and permit systems",
      "Forward a data copy to your customers' own servers",
      "Continuous or on-demand transmission modes",
      "No additional equipment on the vehicle",
    ],
    sections: [
      {
        title: "How retransmission works",
        content:
          "The platform forwards a copy of each object's data stream to one or more destinations, translating it into the protocol the receiving side expects. Your own dashboard keeps working unchanged.",
        details: [
          "Routing configured per object or per group",
          "Automatic protocol translation",
          "Automatic retry when a destination drops",
          "Retransmission status audit per destination",
        ],
      },
      {
        title: "Supported protocols",
        content:
          "Recognised standards and custom formats are both supported, so a single object can feed a government portal and a private customer at the same time.",
        details: ["EGTS", "AIS140", "Wialon IPS", "NIS", "Custom TCP formats on request"],
      },
      {
        title: "Already connected",
        content:
          "Data is already flowing to a range of external platforms and aggregators.",
        details: ["Mos.ru", "Advantum", "Yandex.Courier", "MoveInSync", "RedBus", "RouteMatic"],
      },
    ],
    monitors: [
      "Retransmission session status per destination",
      "Delivered vs queued packets",
      "Protocol and authentication errors",
      "Reconnect and outage events",
    ],
    detects: [
      "Permit issues from a missing RNIS feed",
      "Gaps in a customer's own tracking view",
      "Manual protocol bridging",
      "Silent delivery failures",
    ],
    faqs: [
      { q: "Do I need to change the tracker?", a: "No. Retransmission happens on the server side from data the platform already receives." },
      { q: "Can one object feed several destinations?", a: "Yes — any number, each with its own protocol and schedule." },
      { q: "What happens if a destination is offline?", a: "Packets are queued and retried automatically; the audit log shows the backlog and recovery." },
      { q: "Which tariff is required?", a: "Retransmission is available from the Premium tier." },
    ],
    clients: ["Mos.ru", "Yandex.Courier", "MoveInSync"],
    contactPerson: CHULSKY,
  },

  "wialon-migration": {
    category: "Integrations",
    stats: [
      { value: "200+", label: "Tracker models" },
      { value: "0", label: "Hardware replaced" },
      { value: "Remote", label: "Re-pointing" },
      { value: "30%", label: "Lower licence fees" },
    ],
    highlights: [
      "Keep every existing tracker — 200+ models supported",
      "Remote re-pointing, no site visits",
      "Optional import of historical data",
      "Lower monthly licence fees",
    ],
    sections: [
      {
        title: "What migration involves",
        content:
          "Our engineers send re-point commands to your terminals, import unit settings and sensor calibration, recreate geofences and reports, and train your dispatchers on the new interface.",
        details: [
          "Remote IP re-pointing for supported models",
          "Import of unit settings and sensor calibration",
          "Recreation of geofences, drivers and report templates",
          "Dispatcher training sessions",
        ],
      },
      {
        title: "Zero hardware replacement",
        content:
          "The migration works with the equipment you already run. Supported brands include Navtelecom, Galileosky, Teltonika, Neomatica, Umka and Escort.",
        details: ["Navtelecom", "Galileosky", "Teltonika", "Neomatica", "Umka", "Escort"],
      },
      {
        title: "History and parallel run",
        content:
          "You can export historical data before the switch and run both platforms in parallel for a free trial period so nothing is lost.",
        details: [
          "Historical data export options",
          "Free parallel-run transition period",
          "Cutover on a date you choose",
        ],
      },
    ],
    monitors: [
      "Re-point command delivery per unit",
      "First fix after migration",
      "Sensor calibration parity",
      "Report parity against the old platform",
    ],
    detects: [
      "Downtime during a platform switch",
      "Re-calibrating every fuel sensor from scratch",
      "Losing historical data",
      "Paying for unused Wialon seats",
    ],
    faqs: [
      { q: "Will tracking stop during migration?", a: "No. Units are re-pointed one by one and reconnect within seconds." },
      { q: "Can I keep my history?", a: "Yes, historical data can be exported and, for many cases, imported into the new account." },
      { q: "How long does it take?", a: "A typical fleet of 50–100 vehicles migrates within a few days, most of it remote." },
      { q: "What does it cost?", a: "Migration assistance is free with an annual plan; licence fees are lower than Wialon for equivalent functionality." },
    ],
    clients: ["Trak Grupp", "KupetsStroy"],
    contactPerson: OSIPOV,
  },

  "glonass-installation": {
    category: "Integrations",
    stats: [
      { value: "Nationwide", label: "Field engineers" },
      { value: "On-site", label: "At your base" },
      { value: "±1%", label: "Fuel calibration" },
      { value: "Warranty", label: "Full service" },
    ],
    highlights: [
      "Nationwide network of certified auto-electricians",
      "On-site installation at your fleet base",
      "Fuel-tank calibration table creation",
      "Warranty service and technical support",
    ],
    sections: [
      {
        title: "What our engineers install",
        content:
          "A single team fits and configures the whole monitoring stack — terminals, sensors, cameras and readers — and hands the vehicle back ready to report.",
        details: [
          "GLONASS/GPS navigation terminals",
          "Fuel level sensors (DUT) and CAN readers",
          "Wireless TPMS, temperature sensors",
          "DVRs and cameras for video monitoring",
        ],
      },
      {
        title: "Fuel tank calibration",
        content:
          "Accurate fuel control depends on a proper calibration table. We perform metered fills, record the sensor response and build a table that keeps readings within about 1%.",
        details: [
          "Metered fills across the full tank range",
          "Calibration table per tank shape",
          "Verification pass after installation",
        ],
      },
      {
        title: "Where and when",
        content:
          "Installation happens at your base or at our service stations, scheduled around your shifts so vehicles are off the road for the minimum time.",
        details: [
          "On-site at your fleet base",
          "Service stations in Moscow, Podolsk and Balashikha",
          "Evening and weekend slots available",
        ],
      },
    ],
    monitors: [
      "Installation completion per vehicle",
      "Post-install signal quality",
      "Calibration table accuracy",
      "Warranty case turnaround",
    ],
    detects: [
      "Phantom faults from poor wiring",
      "Inaccurate fuel readings from bad calibration",
      "Fleet downtime during fit-out",
      "Warranty voided by unqualified installs",
    ],
    equipment: [
      { name: "Signal S-2653 Navigation Terminal", desc: "GLONASS tracker with dual CAN interfaces for TPMS, temperature and CAN mileage", price: true },
      { name: "Escort TD-BLE Fuel Sensor", desc: "Wireless Bluetooth fuel level sensor, ~1% accuracy, IP67 housing", price: true },
      { name: "External TPMS Sensor Kit", desc: "Valve-mounted wireless pressure and temperature sensors with anti-theft locks", price: true },
    ],
    faqs: [
      { q: "Do you install our own equipment?", a: "Yes. We fit equipment you supply as well as devices from our catalogue." },
      { q: "How long is a vehicle off the road?", a: "A standard tracker plus fuel sensor takes about half a day including calibration." },
      { q: "Is there a warranty on the work?", a: "Yes — installation is warranted for 12 months, alongside the device manufacturer's warranty." },
      { q: "Do you cover regions?", a: "Yes, through a partner network of certified installers across the country." },
    ],
    clients: ["SK Avanstroy", "Gazprom Mezhregiongaz"],
    contactPerson: CHULSKY,
  },

  /* ─────────────────────────  SOLUTIONS  ───────────────────────── */

  efficiency: {
    highlights: [
      "Cut costs by eliminating non-targeted vehicle use",
      "Save fuel by catching drains and overconsumption",
      "Reduce repair costs through driving-style monitoring",
      "Remove manual reporting with ERP integration",
    ],
    monitors: [
      "Route and operating parameters in real time",
      "Fuel transactions and consumption vs norms",
      "Driver behaviour and working hours",
      "Equipment and attachment operation",
    ],
    detects: [
      "Inefficiency hidden in day-to-day operations",
      "Unauthorised trips and idling",
      "Report errors and reconciliation work",
      "Missed schedules and quality complaints",
    ],
    faqs: [
      { q: "How quickly does it pay back?", a: "For fuel and driver monitoring, typically within 2–4 months of deployment." },
      { q: "Can I rent the equipment?", a: "Yes — equipment rental for any period is available, with a Pay-As-You-Go tariff." },
      { q: "Do you develop custom features?", a: "Yes. Custom reports and features for your business are part of the service." },
    ],
    clients: ["STS Logistic", "Trak Grupp", "Toyomi"],
    contactPerson: CHULSKY,
  },

  "transport-safety": {
    highlights: [
      "Reduce accidents by up to 40% with driver monitoring and ADAS",
      "Prevent drowsiness and distraction at the wheel",
      "Forward-collision, lane-departure and pedestrian warnings",
      "Objective video evidence for every incident",
    ],
    sections: [
      {
        title: "Driver fatigue recognition (DSM)",
        content:
          "An in-cab camera watches the driver's face and head, identifying drowsiness, distraction, phone use and smoking in real time and warning the driver immediately.",
        details: [
          "Audio and vibration alerts to the driver",
          "Event video clips sent to the dispatcher",
          "Fleet-wide distraction reports and driver rating",
        ],
      },
      {
        title: "Driver assistance (ADAS)",
        content:
          "A forward-facing unit monitors the road ahead and warns about dangerous situations before they become accidents.",
        details: [
          "Forward-collision and dangerous-proximity warning",
          "Lane-departure and blind-spot alerts",
          "Pedestrian and stroller detection, road-sign recognition",
        ],
      },
      {
        title: "The role of the dispatcher",
        content:
          "All events flow to the cloud for analysis and driver rating. Dispatchers get real-time notifications about the most critical ADAS and DSM events so they can intervene.",
        details: [
          "Real-time alerts for critical events",
          "Historical analysis and trend reports",
          "Driver scorecards accumulated over time",
        ],
      },
    ],
    monitors: [
      "Driver health, fatigue and attention state",
      "Driving style and speed",
      "Road situation ahead of the vehicle",
      "Seatbelt status",
    ],
    detects: [
      "Drowsiness and micro-sleep",
      "Distraction, phone use and smoking",
      "Forward-collision and lane-departure risk",
      "Aggressive and dangerous driving",
    ],
    equipment: [
      { name: "MRV-21 Driver Assistance System", desc: "Integrated ADAS with 77 GHz radar and camera for windshield mounting", price: true },
      { name: "MDAS-9 Driver Assistance System", desc: "Forward-collision, lane-departure, pedestrian and speed-sign warnings", price: true },
      { name: "MDSM-7 Driver Monitoring Camera", desc: "In-cab camera detecting drowsiness, distraction, phone use and smoking", price: true },
    ],
    faqs: [
      { q: "How does it help my bottom line?", a: "Fewer and less severe accidents mean lower repair costs, less downtime and better vehicle availability." },
      { q: "Does the driver find it intrusive?", a: "Alerts are targeted at genuine risk events. Most drivers adjust within a week and incident rates drop." },
      { q: "Is the camera radiation safe?", a: "Yes. The DSM camera uses ordinary infrared illumination, well within safety norms." },
      { q: "Can dispatchers see live video?", a: "Yes, over 4G, plus automatic clips on every critical event." },
    ],
    clients: ["Gazprom Mezhregiongaz", "RTS-EXPORT", "Sudha Fleet Management"],
    contactPerson: ZHOKHOV,
  },

  "customer-loyalty": {
    highlights: [
      "Give end customers a live tracking link for their delivery",
      "Prove transport conditions were maintained end to end",
      "Automatic status notifications on arrival and departure",
      "Fewer disputes, higher retention",
    ],
    sections: [
      {
        title: "Shared live tracking",
        content:
          "Generate a temporary tracking link for your customer so they can see the vehicle approaching in real time — without access to the rest of your fleet.",
        details: [
          "Time-limited links per order",
          "ETA and delay notifications",
          "No customer account required",
        ],
      },
      {
        title: "Verifiable transport conditions",
        content:
          "Temperature, door and video history for each trip is available on demand, so a complaint about spoiled or damaged cargo can be settled with data, not argument.",
        details: [
          "Downloadable temperature and humidity charts",
          "Door open/close log with location",
          "Loading and unloading video",
        ],
      },
      {
        title: "Automated status updates",
        content:
          "Geofence events at the customer's site trigger notifications to their systems automatically, so your managers do not spend the day confirming arrivals by phone.",
        details: [
          "Arrival and departure webhooks",
          "1C and Yandex.Courier integration",
          "Proof-of-delivery capture",
        ],
      },
    ],
    monitors: [
      "Order execution against the plan",
      "Estimated time of arrival",
      "Transport conditions per trip",
      "Customer-site geofence events",
    ],
    detects: [
      "Disputes over delivery time and condition",
      "Manual arrival confirmation work",
      "Unverifiable service quality claims",
      "Customer churn after a bad experience",
    ],
    equipment: [
      { name: "Escort TD-BLE Temperature Sensor", desc: "Wireless thermal sensor with long battery life for cold-chain proof", price: true },
      { name: "BPK4-EHBO Video Recorder", desc: "Mobile DVR with 4G for loading, movement and unloading video", price: true },
    ],
    faqs: [
      { q: "Can customers see my whole fleet?", a: "No. A tracking link exposes only the one vehicle and only for the order's duration." },
      { q: "How is the temperature history shared?", a: "As a downloadable chart or PDF certificate, or via API into the customer's quality system." },
      { q: "Does this need new hardware?", a: "Live tracking works with any tracker. Condition proof needs the relevant sensors (temperature, door, video)." },
      { q: "How does it improve retention?", a: "Transparency removes the friction that makes customers shop around after a single incident." },
    ],
    clients: ["Oktion", "Adeo.Pro", "NV-Log"],
    contactPerson: OSIPOV,
  },

  "service-level": {
    highlights: [
      "Real-time control over compliance with transport standards",
      "Schedule and route adherence monitoring",
      "Automated quality reporting to your clients",
      "Early warning before an SLA is breached",
    ],
    sections: [
      {
        title: "SLA compliance monitoring",
        content:
          "Define the targets that matter — on-time delivery, temperature limits, permitted routes — and the platform checks every trip against them and flags exceptions.",
        details: [
          "On-time delivery tracking with delay alerts",
          "Temperature and condition thresholds",
          "Permitted-route and schedule compliance",
        ],
      },
      {
        title: "Standards and regulations",
        content:
          "The platform helps you meet regulatory requirements and avoid fines by transmitting the required data to permit systems and keeping an auditable record.",
        details: [
          "Data feed to RNIS / permit portals",
          "Tachograph and working-hours records",
          "Auditable event history",
        ],
      },
      {
        title: "Quality reporting to clients",
        content:
          "Scheduled reports go to your clients automatically, showing that the agreed service level was delivered — turning compliance into a selling point.",
        details: [
          "Scheduled per-client reports",
          "Exception summaries with root cause",
          "API access for the client's own dashboards",
        ],
      },
    ],
    monitors: [
      "On-time performance per route",
      "Transport conditions vs agreed limits",
      "Route and schedule adherence",
      "Regulatory data submission status",
    ],
    detects: [
      "SLA breaches before the client notices",
      "Fines from missing regulatory data",
      "Unverifiable service-level claims",
      "Manual compilation of client reports",
    ],
    equipment: [
      { name: "Signal S-2653 Navigation Terminal", desc: "GLONASS tracker with CAN interfaces and mileage analytics", price: true },
      { name: "Escort TD-BLE Temperature Sensor", desc: "Wireless thermal sensor for cold-chain SLA proof", price: true },
    ],
    faqs: [
      { q: "Can I define my own SLA targets?", a: "Yes — on-time thresholds, temperature bands, permitted routes and more are all configurable." },
      { q: "How do clients receive reports?", a: "By scheduled email, a shared dashboard link, or directly via API." },
      { q: "Does it help with regulators?", a: "Yes. Required telemetry is retransmitted to permit portals and kept as an auditable record." },
      { q: "What if a breach is unavoidable?", a: "You get an early warning so you can notify the client proactively rather than react to a complaint." },
    ],
    clients: ["STS Logistic", "Gazprom Mezhregiongaz", "Toyomi"],
    contactPerson: CHULSKY,
  },

  "threat-control": {
    highlights: [
      "Geofence perimeters with entry, exit and dwell alarms",
      "Access control and remote engine immobilizer",
      "Panic button with dispatch to a monitoring centre",
      "Anti-theft sensors for mobile and stationary assets",
    ],
    sections: [
      {
        title: "Geofence perimeter and alarms",
        content:
          "Draw zones of any shape around depots, sites and forbidden areas. Programmable alarms fire on entry, exit or presence combined with time, speed and other conditions.",
        details: [
          "Unlimited geofences of any geometry",
          "Entry / exit / dwell rules with time windows",
          "Instant alerts to smartphone and browser",
        ],
      },
      {
        title: "Access control and immobilizer",
        content:
          "Driver identification by key or card, plus a relay that lets you block the engine start remotely if a vehicle is used without authorisation or a payment defaults.",
        details: [
          "Driver identification (iButton / RFID)",
          "Remote engine-block relay",
          "Authorised-hours and authorised-driver rules",
        ],
      },
      {
        title: "Panic button and dispatch",
        content:
          "A concealed distress switch sends a silent alarm with location to the responsible people or a central monitoring station, keeping transmitting even if the main unit is found.",
        details: [
          "Silent duress alarm with live location",
          "Escalation list and monitoring-centre feed",
          "Independent hidden backup beacon",
        ],
      },
    ],
    monitors: [
      "Object position against geofence perimeters",
      "Ignition, driver identity and access events",
      "Power, tamper and disconnect events",
      "Panic-button and duress signals",
    ],
    detects: [
      "Theft and unauthorised movement",
      "Use outside authorised hours or drivers",
      "Tampering with or removal of the tracker",
      "Entry into forbidden areas",
    ],
    equipment: [
      { name: "Signal S-2653 Navigation Terminal", desc: "GLONASS terminal with inputs for immobilizer relay and panic button", price: true },
      { name: "Hidden Search Beacon", desc: "Battery-powered backup tracker that keeps transmitting if the main unit is removed", price: true },
      { name: "iButton Driver ID Kit", desc: "Key-based driver identification for access control", price: true },
    ],
    faqs: [
      { q: "Can I stop a vehicle remotely?", a: "You can block the next engine start via relay. For safety the running engine is never cut while moving." },
      { q: "How does the panic button work?", a: "A hidden switch sends a silent alarm with location to your escalation list or a monitoring centre." },
      { q: "What if a thief finds the tracker?", a: "An independent hidden beacon with its own battery continues to report location." },
      { q: "Does it work for stationary assets?", a: "Yes — generators, containers and trailers can be protected with motion and geofence alarms." },
    ],
    clients: ["SK Avanstroy", "PFLK-M", "KupetsStroy"],
    contactPerson: OSIPOV,
  },

  /* ─────────────────────────  BY INDUSTRY  ───────────────────────── */

  "food-transport": {
    category: "By Industry",
    stats: [
      { value: "+10%", label: "More food-transport orders" },
      { value: "−10%", label: "Fuel & repair costs" },
      { value: "100%", label: "Cold-chain logs" },
      { value: "Certified", label: "Thermo-recorder data" },
    ],
    highlights: [
      "Continuous temperature and humidity control across all zones",
      "Cargo-door and electronic-lock status",
      "Certified thermo-recorder data for audits and disputes",
      "Route-assignment and delivery-schedule compliance",
      "Fuel level, refuelling and drain events per vehicle",
    ],
    sections: [
      {
        title: "Continuous climate monitoring",
        content:
          "Temperature, humidity and lighting in each cooling zone are logged 24/7. Any deviation triggers an instant alert to the driver and dispatcher, and the full history is available for the client's quality system.",
        details: [
          "Multiple independent cooling zones",
          "Instant deviation alerts",
          "Automated reports to the customer",
        ],
      },
      {
        title: "Route-assignment monitoring",
        content:
          "Delivery points, pickup and drop windows are checked automatically. Managers get a mobile notification if a stop is late or skipped.",
        details: [
          "1C and Yandex.Courier integration",
          "Arrival / departure geofence events",
          "Schedule-deviation alerts",
        ],
      },
      {
        title: "Cargo access and supplementary equipment",
        content:
          "Door-position sensors and an electronic lock show exactly when and where the cargo compartment was opened, alongside tractor and trailer tyre pressure and certified thermo-recorder data.",
        details: [
          "Cargo-door position sensor",
          "Electronic cargo-lock control",
          "Tractor and trailer TPMS",
        ],
      },
    ],
    monitors: [
      "Cargo-compartment temperature and humidity",
      "Cargo-door and lock status",
      "Order execution and estimated arrival",
      "Fuel level and refuelling events",
      "Driver attention and on-board diagnostics",
    ],
    detects: [
      "Cold-chain breaks and spoilage risk",
      "Unauthorised cargo access",
      "Missed delivery windows",
      "Excessive fuel use and fuel drains",
      "Fines from traffic violations",
    ],
    equipment: [
      { name: "Escort TD-BLE Temperature Sensor", desc: "Wireless thermal / humidity sensor, 5-year battery, IP67", price: true },
      { name: "BPK4-EHBO Video Recorder", desc: "4-channel mobile DVR with 4G for cabin and cargo cameras", price: true },
      { name: "Cargo-Door Sensor & Electronic Lock", desc: "Door position and remote lock control for the cargo compartment", price: true },
    ],
    faqs: [
      { q: "How many temperature zones can you monitor?", a: "Up to 8 independent sensors per vehicle, each with its own alert thresholds." },
      { q: "Is the temperature data suitable for audits?", a: "Yes — certified thermo-recorder data is logged and can be exported as a chart or PDF certificate." },
      { q: "Can my customer see the conditions?", a: "Yes, via a shared report or an API feed into their quality system." },
      { q: "What is the entry cost?", a: "Equipment and installation from ₽5,900 per vehicle, subscription from ₽249 per month." },
    ],
    clients: ["Toyomi", "NV-Log", "Khashimova LLC"],
    contactPerson: CHULSKY,
  },

  freight: {
    category: "By Industry",
    stats: [
      { value: "−25%", label: "Fuel expense" },
      { value: "−20%", label: "Repair costs" },
      { value: "100%", label: "Cargo tracking" },
      { value: "1C / SAP", label: "Automated reports" },
    ],
    highlights: [
      "CAN-bus mileage and fuel audit for accurate consumption",
      "Driver working hours and behaviour scoring",
      "Live tracking link shared with shippers",
      "Route and geofence compliance with alerts",
    ],
    sections: [
      {
        title: "Long-haul freight intelligence",
        content:
          "Full control over truck location, CAN-bus data, fuel consumption and driver working hours, turned into a small set of reports your logistics team acts on daily.",
        details: [
          "CAN mileage and fuel reconciliation",
          "Engine-hours and idling analysis",
          "Multi-map route playback",
        ],
      },
      {
        title: "Driver behaviour and hours",
        content:
          "Harsh braking, acceleration, cornering and speeding are scored per driver and per trip, alongside work-and-rest compliance from the tachograph.",
        details: [
          "Per-driver safety scorecards",
          "Tachograph work / rest compliance",
          "Speeding and violation alerts",
        ],
      },
      {
        title: "Transparency for shippers",
        content:
          "Generate a temporary tracking link so the shipper follows their load in real time, with automatic ETA and delay notifications.",
        details: [
          "Time-limited tracking links per load",
          "ETA and delay webhooks",
          "Proof-of-delivery capture",
        ],
      },
    ],
    monitors: [
      "Location, speed and CAN mileage",
      "Fuel level, refuelling and drain events",
      "Driver hours and behaviour score",
      "Route adherence and geofence events",
    ],
    detects: [
      "Fuel drains and overconsumption",
      "Unauthorised stops and detours",
      "Driver-hours violations",
      "Late or disputed deliveries",
    ],
    equipment: [
      { name: "Signal S-2653 Navigation Terminal", desc: "GLONASS tracker with dual CAN interfaces for mileage and fuel", price: true },
      { name: "Escort TD-BLE Fuel Sensor", desc: "Wireless fuel level sensor, ~1% accuracy", price: true },
      { name: "ALL-CAN300 CAN Reader", desc: "Contactless CAN reader for fuel and mileage without cutting wiring", price: true },
    ],
    faqs: [
      { q: "Which is better, a fuel sensor or CAN?", a: "A fuel level sensor is ~1% accurate and best on high-value trucks; CAN is ~10% and more economical for the rest." },
      { q: "Can shippers track their load?", a: "Yes — a temporary link exposes just that vehicle for the duration of the trip." },
      { q: "Does it integrate with 1C?", a: "Yes, with ready modules for 1C and SAP plus a REST API." },
      { q: "How much can we save on fuel?", a: "Fleets typically see around 25% by catching drains, overconsumption and idling." },
    ],
    clients: ["STS Logistic", "Trak Grupp", "KupetsStroy"],
    contactPerson: OSIPOV,
  },

  passenger: {
    category: "By Industry",
    stats: [
      { value: "100%", label: "Schedule control" },
      { value: "4G", label: "In-cabin video" },
      { value: "−10%", label: "Accident rate" },
      { value: "PP 969", label: "Certified equipment" },
    ],
    highlights: [
      "Route timetable compliance with deviation alerts",
      "Passenger counting on entry and exit",
      "Multi-camera in-cabin DVR with live streaming",
      "Driver fatigue monitoring and panic button",
    ],
    sections: [
      {
        title: "Timetable and route compliance",
        content:
          "Each route and its schedule are loaded into the platform. Dispatchers see in real time which buses are ahead, on time or behind, and passengers can be given accurate arrival information.",
        details: [
          "Schedule-deviation alerts",
          "Headway and bunching monitoring",
          "Public arrival-time feed",
        ],
      },
      {
        title: "Passenger security",
        content:
          "Multi-camera DVRs record the cabin, doors and road, with live streaming over 4G and automatic clips on braking, impact or a panic-button press. Equipment is PP 969 certified for passenger transport.",
        details: [
          "Up to 8 Full-HD cameras",
          "Event-triggered cloud upload",
          "Silent driver panic button",
        ],
      },
      {
        title: "Passenger counting",
        content:
          "Door-mounted sensors count boardings and alightings per stop, giving objective load data for route planning and revenue reconciliation.",
        details: [
          "Per-stop boarding / alighting counts",
          "Load-factor reports by time of day",
          "Export for planning and audit",
        ],
      },
    ],
    monitors: [
      "Route and timetable adherence",
      "Passenger boardings and alightings",
      "In-cabin, door and road video",
      "Driver fatigue and attention state",
    ],
    detects: [
      "Schedule deviations and bunching",
      "In-cabin incidents and disputes",
      "Driver drowsiness and distraction",
      "Revenue leakage on cash routes",
    ],
    equipment: [
      { name: "BPK4-EHBO Video Recorder", desc: "PP 969 certified mobile DVR with 4G, GPS and Wi-Fi for passenger transport", price: true },
      { name: "MDSM-7 Driver Monitoring Camera", desc: "In-cab fatigue and distraction detection", price: true },
      { name: "Passenger Counting Sensor", desc: "Door-mounted boarding / alighting counter", price: true },
    ],
    faqs: [
      { q: "Is the video equipment certified?", a: "Yes — PP 969 certified for passenger and dangerous-goods transport." },
      { q: "How long is video kept?", a: "On the vehicle SD/HDD plus the cloud; cloud retention depends on the plan." },
      { q: "Can we show live arrival times to passengers?", a: "Yes, via a public feed generated from schedule adherence." },
      { q: "Does passenger counting need special hardware?", a: "Yes — infrared sensors mounted above the doors." },
    ],
    clients: ["Zhukovsky Emergency Services", "Bajaj Travels", "Sagar Travels"],
    contactPerson: ZHOKHOV,
  },

  taxi: {
    category: "By Industry",
    stats: [
      { value: "+5%", label: "Rental revenue per car" },
      { value: "−10%", label: "Fuel & repair costs" },
      { value: "−10%", label: "Accident rate" },
      { value: "1C", label: "Dispatch integration" },
    ],
    highlights: [
      "Detect personal use of company vehicles after shifts",
      "Aggressive-driving detection and driver scoring",
      "In-cab video for passenger-conflict evidence",
      "Remote engine block for non-payment or non-return",
      "12-month route history per vehicle",
    ],
    sections: [
      {
        title: "Shift and usage control",
        content:
          "The platform separates paid shift mileage from personal trips, audits shift start and end, and shows exactly how each car is being used.",
        details: [
          "Automatic shift start / stop detection",
          "Personal-trip identification after hours",
          "Mileage reconciliation per shift",
        ],
      },
      {
        title: "Driving style and safety",
        content:
          "Harsh braking, acceleration and cornering are scored per driver. Continuous monitoring extends vehicle life and cuts repair downtime and accidents.",
        details: [
          "Per-driver safety scorecards",
          "Speeding and violation alerts",
          "Fewer driver–passenger incidents",
        ],
      },
      {
        title: "Dispatch integration and recovery",
        content:
          "Telemetry feeds your dispatch software, and a relay lets you block the next engine start remotely if a car is not returned or a payment defaults.",
        details: [
          "1C and dispatch-software integration",
          "Remote ignition-block relay",
          "Assistance recovering a stolen or unreturned car",
        ],
      },
    ],
    monitors: [
      "Shift mileage vs personal trips",
      "Driving style and speed",
      "In-cabin video feed",
      "Maintenance schedule and vehicle condition",
    ],
    detects: [
      "Unauthorised personal use",
      "Reckless driving and passenger conflicts",
      "Driver underpayment disputes",
      "Vehicle non-return and theft",
    ],
    equipment: [
      { name: "UMKa302 Terminal", desc: "Compact economical GLONASS terminal for taxi fleets", price: true },
      { name: "MDSM-7 Cabin Camera", desc: "In-cab video with audio for passenger-conflict evidence", price: true },
      { name: "Ignition-Block Relay Kit", desc: "Remote engine-start block for non-payment or non-return", price: true },
    ],
    faqs: [
      { q: "Can I tell personal trips from shift trips?", a: "Yes — the platform separates shift mileage from after-hours personal use automatically." },
      { q: "Does it work with my dispatch software?", a: "Telemetry is available via API and ready integrations for common dispatch systems and 1C." },
      { q: "Can I block a car remotely?", a: "You can block the next engine start; a running engine is never cut while moving." },
      { q: "What is the cost per car?", a: "Equipment from ₽5,900, subscription from ₽249 per month, billed per vehicle." },
    ],
    clients: ["Adeo.Pro", "PAO O11", "Bajaj Travels"],
    contactPerson: CHULSKY,
  },

  construction: {
    category: "By Industry",
    stats: [
      { value: "Exact", label: "Engine-hour log" },
      { value: "Zero", label: "Fuel siphoning" },
      { value: "−20%", label: "Idle time" },
      { value: "24/7", label: "Site geofencing" },
    ],
    highlights: [
      "True engine hours under load versus idling",
      "Attachment operation — bucket, boom, blade",
      "Fuel level with drain and refuelling alerts",
      "Work-site geofences and after-hours use alerts",
    ],
    sections: [
      {
        title: "Heavy-machinery telemetry",
        content:
          "For excavators, cranes, loaders and dozers the useful metric is engine hours doing actual work. The platform separates productive time from idling and logs attachment activity.",
        details: [
          "Engine hours under load vs idle",
          "Bucket / boom / blade operation sensors",
          "Productivity reports per machine and per site",
        ],
      },
      {
        title: "Fuel control on off-road equipment",
        content:
          "Fuel level sensors on tanks detect drains at remote sites and reconcile deliveries against actual fills, where mileage-based estimates are useless.",
        details: [
          "Fuel level sensor per tank",
          "Drain and refuelling alerts with location",
          "Delivery reconciliation reports",
        ],
      },
      {
        title: "Site control and security",
        content:
          "Geofences around each site flag machines leaving the perimeter or operating outside working hours, and a hidden beacon aids recovery after theft.",
        details: [
          "Per-site geofences",
          "After-hours operation alerts",
          "Hidden backup beacon",
        ],
      },
    ],
    monitors: [
      "Engine hours under load and idling",
      "Attachment and implement operation",
      "Fuel level and refuelling events",
      "Machine position against site geofences",
    ],
    detects: [
      "Idling and low utilisation",
      "Fuel siphoning at remote sites",
      "Unauthorised out-of-hours operation",
      "Equipment theft",
    ],
    equipment: [
      { name: "Signal S-2653 Navigation Terminal", desc: "Wide-voltage GLONASS terminal with inputs for load and attachment sensors", price: true },
      { name: "Escort TD-150 Fuel Sensor", desc: "Capacitive fuel level sensor for machinery tanks", price: true },
      { name: "Engine-Load Sensor Kit", desc: "Distinguishes working hours from idling", price: true },
    ],
    faqs: [
      { q: "Why not just use engine-on time?", a: "It counts idling as work. Load sensing shows the hours the machine was actually doing something." },
      { q: "Does fuel monitoring work off-road?", a: "Yes — a tank fuel level sensor works regardless of mileage, which is the point for machinery." },
      { q: "Can I get productivity reports per site?", a: "Yes, filtered by geofence, machine and operator." },
      { q: "Is installation disruptive?", a: "A terminal plus fuel sensor is typically fitted in half a day per machine." },
    ],
    clients: ["SK Avanstroy", "RENTASTROYTECHNIKA", "KupetsStroy"],
    contactPerson: ZHOKHOV,
  },

  leasing: {
    category: "By Industry",
    stats: [
      { value: "100%", label: "Asset recovery aid" },
      { value: "Remote", label: "Engine immobilizer" },
      { value: "Region", label: "Geofence limits" },
      { value: "Hidden", label: "Backup beacon" },
    ],
    highlights: [
      "Hidden GPS beacon independent of the main unit",
      "Region and border geofence alerts",
      "Remote engine-block relay on payment default",
      "Mileage and usage audit against the lease terms",
    ],
    sections: [
      {
        title: "Leased-vehicle security",
        content:
          "A concealed beacon with its own power keeps reporting even if the visible tracker is found and removed, so a defaulting or absconding lessee can still be located.",
        details: [
          "Hidden, self-powered backup beacon",
          "Tamper and disconnect alerts on the main unit",
          "Live location for recovery",
        ],
      },
      {
        title: "Lease-term compliance",
        content:
          "Geofences enforce the permitted operating region, and mileage audits show whether the vehicle is being used within the agreed limits.",
        details: [
          "Permitted-region and border-exit alerts",
          "Mileage vs contracted limit",
          "Unauthorised sub-leasing indicators",
        ],
      },
      {
        title: "Payment enforcement",
        content:
          "If a payment defaults, a relay blocks the next engine start until the account is brought current — a strong, non-destructive lever.",
        details: [
          "Remote engine-block relay",
          "Scheduled reminders before block",
          "Instant release on payment",
        ],
      },
    ],
    monitors: [
      "Vehicle position against the permitted region",
      "Mileage against the lease limit",
      "Power, tamper and disconnect events",
      "Ignition and usage patterns",
    ],
    detects: [
      "Vehicles leaving the permitted region",
      "Attempts to remove or disable the tracker",
      "Usage beyond the contracted mileage",
      "Non-payment and absconding",
    ],
    equipment: [
      { name: "Hidden Search Beacon", desc: "Battery-powered concealed tracker for recovery", price: true },
      { name: "Signal S-2653 Navigation Terminal", desc: "Main terminal with immobilizer-relay output", price: true },
      { name: "Engine-Block Relay Kit", desc: "Remote next-start block for payment enforcement", price: true },
    ],
    faqs: [
      { q: "What if the lessee finds the tracker?", a: "The hidden backup beacon has its own battery and keeps transmitting location." },
      { q: "Is remote engine block legal?", a: "It blocks the next start only, never a running engine, and is used per the lease agreement's terms." },
      { q: "Can I limit the operating region?", a: "Yes — geofences alert you the moment a vehicle crosses the permitted boundary." },
      { q: "Does this help repossession?", a: "Live location plus the ability to prevent restart significantly improves recovery rates." },
    ],
    clients: ["PFLK-M", "SK Avanstroy", "Trak Grupp"],
    contactPerson: OSIPOV,
  },

  "dangerous-goods": {
    category: "By Industry",
    stats: [
      { value: "ADR", label: "Certified hardware" },
      { value: "24/7", label: "Emergency dispatch" },
      { value: "Auto", label: "Crash & rollover alerts" },
      { value: "RNIS", label: "Data feed" },
    ],
    highlights: [
      "Certified equipment for fuel, gas, chemical and explosive cargo",
      "Silent panic button with dispatch to a monitoring centre",
      "Automatic crash and rollover detection",
      "Mandatory telemetry feed to permit portals (EGTS)",
    ],
    sections: [
      {
        title: "Hazardous-cargo security",
        content:
          "Equipment meets regulatory requirements for transporting dangerous goods, with explosion-proof wiring practices and a distress button routed to a monitoring centre.",
        details: [
          "Explosion-proof sensor wiring",
          "Silent panic / duress button",
          "Escalation to a 24/7 monitoring centre",
        ],
      },
      {
        title: "Incident detection",
        content:
          "The terminal detects a collision or rollover from its accelerometer and immediately reports location and severity so an emergency response can start without waiting for a call.",
        details: [
          "Automatic crash and rollover alerts",
          "Impact severity and location",
          "Event video where cameras are fitted",
        ],
      },
      {
        title: "Regulatory compliance",
        content:
          "Required movement data is retransmitted to state permit systems continuously, and an auditable record is kept for inspections.",
        details: [
          "EGTS / RNIS retransmission",
          "Route and schedule compliance",
          "Auditable event history",
        ],
      },
    ],
    monitors: [
      "Location, speed and route corridor",
      "Impact and rollover events",
      "Panic-button and duress signals",
      "Regulatory data-feed status",
    ],
    detects: [
      "Deviation from the permitted route corridor",
      "Collisions and rollovers",
      "Driver distress situations",
      "Fines from a missing regulatory feed",
    ],
    equipment: [
      { name: "Signal S-2653 Navigation Terminal", desc: "Certified terminal with accelerometer for crash / rollover detection", price: true },
      { name: "Silent Panic Button", desc: "Concealed duress switch with monitoring-centre dispatch", price: true },
      { name: "BPK4-EHBO Video Recorder", desc: "PP 969 certified DVR for dangerous-goods transport", price: true },
    ],
    faqs: [
      { q: "Is the equipment certified for ADR cargo?", a: "Yes — the terminals and DVRs are certified for dangerous-goods and passenger transport." },
      { q: "What happens on a crash?", a: "The device reports location and severity automatically and can escalate to a monitoring centre." },
      { q: "Do we have to feed data to the state?", a: "For many dangerous-goods permits, yes — retransmission in EGTS is included." },
      { q: "Can the driver call for help discreetly?", a: "Yes, via a hidden panic button that sends a silent alarm with location." },
    ],
    clients: ["Gazprom Mezhregiongaz", "RTS-EXPORT", "Dipol"],
    contactPerson: CHULSKY,
  },

  agriculture: {
    category: "By Industry",
    stats: [
      { value: "Hectares", label: "Cultivated-area log" },
      { value: "+15%", label: "Fuel saved" },
      { value: "Zero", label: "Grain theft" },
      { value: "RFID", label: "Trailer identification" },
    ],
    highlights: [
      "Cultivated field area calculated in hectares",
      "Implement and unloading-auger operation sensors",
      "Fuel consumption during field work versus transport",
      "Grain-theft alerts during transport",
    ],
    sections: [
      {
        title: "Agro-fleet intelligence",
        content:
          "Tractor and harvester trajectories are recorded and turned into a cultivated-area figure per field, per operator and per day, with implement activity logged.",
        details: [
          "Field-area calculation from real trajectory",
          "Implement-down / implement-up detection",
          "Coverage and overlap maps",
        ],
      },
      {
        title: "Fuel during operations",
        content:
          "Fuel level sensors separate consumption during field work from road transport, exposing drains and overuse that mileage-based methods miss.",
        details: [
          "Field-work vs transport consumption",
          "Drain and refuelling alerts with location",
          "Consumption vs agronomic norms",
        ],
      },
      {
        title: "Harvest and transport security",
        content:
          "Auger-operation sensors and trailer RFID confirm where grain was loaded and unloaded, and geofences flag unexpected stops during transport to the elevator.",
        details: [
          "Unloading-auger operation sensor",
          "Trailer identification by RFID",
          "Unexpected-stop alerts en route",
        ],
      },
    ],
    monitors: [
      "Machine trajectory and cultivated area",
      "Implement and auger operation",
      "Fuel level during field work and transport",
      "Trailer identity and load / unload events",
    ],
    detects: [
      "Under-cultivated or double-worked areas",
      "Fuel drains during the season",
      "Grain diverted during transport",
      "Machines idle during peak windows",
    ],
    equipment: [
      { name: "Signal S-2653 Navigation Terminal", desc: "Wide-voltage terminal with inputs for implement and auger sensors", price: true },
      { name: "Escort TD-150 Fuel Sensor", desc: "Fuel level sensor for tractor and harvester tanks", price: true },
      { name: "RFID Trailer Tag Kit", desc: "Identifies which trailer a machine is working with", price: true },
    ],
    faqs: [
      { q: "How is field area calculated?", a: "From the machine's real trajectory and working width, with overlap subtracted." },
      { q: "Can you tell field work from driving to the field?", a: "Yes — implement sensors and fuel-rate change distinguish the two." },
      { q: "Does it survive the dust and vibration?", a: "Yes, the terminals and sensors are sealed and rated for agricultural machinery." },
      { q: "How much fuel can we save?", a: "Around 15% in a season by eliminating drains and unproductive running." },
    ],
    clients: ["Selhoz partners", "Green Holidays", "StroiTekhMash"],
    contactPerson: ZHOKHOV,
  },

  municipal: {
    category: "By Industry",
    stats: [
      { value: "100%", label: "Cleaned-area log" },
      { value: "EGTS", label: "Portal retransmission" },
      { value: "Per-bin", label: "Lift counter" },
      { value: "Auto", label: "Route-completion reports" },
    ],
    highlights: [
      "Plough-blade and brush-rotation sensors",
      "Bin-lift counter for waste collection",
      "Cleaned / treated area logging",
      "Telemetry retransmission to municipal portals (EGTS)",
    ],
    sections: [
      {
        title: "Utility-fleet telemetry",
        content:
          "For sweepers, gritters and ploughs the platform records not just where the vehicle went but whether the working equipment was actually running.",
        details: [
          "Plough-blade down / up detection",
          "Brush and spreader rotation sensors",
          "Treated-area and route-completion maps",
        ],
      },
      {
        title: "Waste collection",
        content:
          "A bin-lifter counter records each container lifted with time and location, so contracted collection points can be verified and missed bins flagged.",
        details: [
          "Container-lift counter",
          "Missed-point alerts",
          "Per-route collection reports",
        ],
      },
      {
        title: "Reporting to the municipality",
        content:
          "Required telemetry is retransmitted to government portals in EGTS, and route-completion reports match the format municipal contracts expect.",
        details: [
          "EGTS retransmission to state portals",
          "Contract-format completion reports",
          "Auditable work history",
        ],
      },
    ],
    monitors: [
      "Vehicle route and treated area",
      "Working-equipment operation (blade, brush, spreader)",
      "Container lifts per route",
      "Portal retransmission status",
    ],
    detects: [
      "Routes driven without the equipment running",
      "Missed collection points",
      "Under-treated areas after a snowfall",
      "Gaps in the mandatory data feed",
    ],
    equipment: [
      { name: "Signal S-2653 Navigation Terminal", desc: "Terminal with multiple inputs for blade, brush and lifter sensors", price: true },
      { name: "Bin-Lifter Counter Sensor", desc: "Counts container lifts with time and location", price: true },
      { name: "Spreader / Brush Rotation Sensor", desc: "Confirms working equipment is actually operating", price: true },
    ],
    faqs: [
      { q: "Can you prove a street was actually cleaned?", a: "Yes — the treated-area map only records where the blade or brush was running." },
      { q: "Do you support the government portal feed?", a: "Yes, EGTS retransmission to municipal portals is included." },
      { q: "How is waste collection verified?", a: "A bin-lifter counter logs each lift; missed contracted points are flagged." },
      { q: "Are the reports in the right format?", a: "Route-completion reports follow the format used in municipal service contracts." },
    ],
    clients: ["Municipal operators", "Infokom.tv", "Molkom"],
    contactPerson: CHULSKY,
  },

  banking: {
    category: "By Industry",
    stats: [
      { value: "AES-256", label: "Encrypted telemetry" },
      { value: "Instant", label: "Duress alarm" },
      { value: "24/7", label: "Central monitoring" },
      { value: "Vault", label: "Door sensors" },
    ],
    highlights: [
      "Encrypted telemetry channel with a satellite backup",
      "Vault and cabin door sensors",
      "Silent foot-operated duress switch",
      "Remote engine kill and geofenced route corridors",
    ],
    sections: [
      {
        title: "Armoured-fleet security",
        content:
          "Cash-in-transit vehicles get the highest monitoring tier: an encrypted data channel, redundant satellite link, and continuous watch from a central station.",
        details: [
          "AES-256 encrypted telemetry",
          "Satellite backup channel",
          "Continuous central-station monitoring",
        ],
      },
      {
        title: "Door and duress control",
        content:
          "Sensors on the vault and cabin doors log every opening with time and location, and a concealed foot switch raises a silent alarm under threat.",
        details: [
          "Vault and safe-door sensors",
          "Silent foot duress switch",
          "Alarm escalation to the monitoring centre",
        ],
      },
      {
        title: "Route and immobilisation control",
        content:
          "Approved route corridors are geofenced, deviations alert instantly, and a relay can block the next engine start on command.",
        details: [
          "Geofenced route corridors",
          "Deviation and stop alerts",
          "Remote engine-block relay",
        ],
      },
    ],
    monitors: [
      "Encrypted position and status feed",
      "Vault and cabin door events",
      "Duress-switch signals",
      "Route-corridor adherence",
    ],
    detects: [
      "Route deviation and unscheduled stops",
      "Unauthorised door openings",
      "Crew-under-threat situations",
      "Attempts to jam or disconnect the unit",
    ],
    equipment: [
      { name: "Signal S-2653 Navigation Terminal", desc: "Terminal with encrypted channel support and multiple secure inputs", price: true },
      { name: "Vault Door Sensor Kit", desc: "Logs safe and cabin door openings with location", price: true },
      { name: "Silent Foot Duress Switch", desc: "Concealed alarm trigger for the crew", price: true },
    ],
    faqs: [
      { q: "Is the data channel secure?", a: "Yes — telemetry is AES-256 encrypted with a redundant satellite link." },
      { q: "What happens on a duress alarm?", a: "A silent signal with location goes to the central monitoring station and your escalation list." },
      { q: "Can we enforce approved routes?", a: "Yes, route corridors are geofenced and deviations alert immediately." },
      { q: "Is there central monitoring?", a: "Yes, 24/7 watch is part of the CIT service tier." },
    ],
    clients: ["Bank fleet operators", "RESO", "Infokom.tv"],
    contactPerson: OSIPOV,
  },

  manufacturing: {
    category: "By Industry",
    stats: [
      { value: "RFID", label: "Gate access" },
      { value: "Timed", label: "Warehouse turnaround" },
      { value: "1C / SAP", label: "ERP automation" },
      { value: "Seamless", label: "Intralogistics" },
    ],
    highlights: [
      "RFID gate access and yard control",
      "Warehouse turnaround-time measurement",
      "Forklift movement and collision warnings",
      "Automated dispatch and receipt into the ERP",
    ],
    sections: [
      {
        title: "Factory intralogistics",
        content:
          "Movement of raw materials and finished goods between warehouses and lines is tracked and timed, exposing bottlenecks in the yard and at the docks.",
        details: [
          "Gate-to-dock transit timing",
          "Dwell time at each loading bay",
          "Trailer and shuttle utilisation",
        ],
      },
      {
        title: "Yard and gate control",
        content:
          "RFID tags identify vehicles at the gate, log entry and exit automatically, and match arrivals against expected deliveries.",
        details: [
          "Automatic RFID gate logging",
          "Expected-vs-actual arrival matching",
          "Yard occupancy overview",
        ],
      },
      {
        title: "Forklift and shuttle safety",
        content:
          "Indoor units track forklift movement, warn of collision risk in blind aisles, and record near-misses for safety review.",
        details: [
          "Forklift position and speed",
          "Collision-risk proximity alerts",
          "Near-miss logging",
        ],
      },
    ],
    monitors: [
      "Vehicle transit and dwell times on site",
      "Gate entry and exit events",
      "Forklift movement and proximity",
      "Deliveries against the ERP plan",
    ],
    detects: [
      "Bottlenecks in the yard and at docks",
      "Unmatched or unexpected arrivals",
      "Forklift collision risk in blind aisles",
      "Manual re-keying of dispatch data",
    ],
    equipment: [
      { name: "UMKa302 Terminal", desc: "Compact terminal for shuttle trucks and yard vehicles", price: true },
      { name: "RFID Gate Reader Kit", desc: "Automatic vehicle identification at the gate", price: true },
      { name: "Indoor Positioning Tag", desc: "Forklift location and proximity alerting", price: true },
    ],
    faqs: [
      { q: "Does GPS work inside the plant?", a: "For yard vehicles, yes. For indoor forklifts we use an indoor positioning tag." },
      { q: "Can it feed our ERP?", a: "Yes — gate events and transit times post to 1C or SAP via API." },
      { q: "How is turnaround time measured?", a: "From gate-in to gate-out, with dwell time at each bay broken out." },
      { q: "Does it help forklift safety?", a: "Proximity alerts warn drivers in blind aisles and near-misses are logged for review." },
    ],
    clients: ["Furnitura", "StroiTekhMash", "Molkom"],
    contactPerson: CHULSKY,
  },

  retail: {
    category: "By Industry",
    stats: [
      { value: "Real-time", label: "Customer ETA" },
      { value: "+20%", label: "Faster deliveries" },
      { value: "Auto", label: "Store geofence log" },
      { value: "POD", label: "Proof of delivery" },
    ],
    highlights: [
      "Live ETA for stores and end customers",
      "Automatic store-arrival and departure logging",
      "Courier performance and multi-stop route optimisation",
      "Proof-of-delivery capture into your system",
    ],
    sections: [
      {
        title: "Last-mile distribution",
        content:
          "Daily multi-stop routes are planned, tracked and reconciled. Store managers and customers get accurate arrival updates, and unloading time per stop is measured.",
        details: [
          "Multi-stop route planning",
          "Live ETA and delay notifications",
          "Unloading time per stop",
        ],
      },
      {
        title: "Store replenishment",
        content:
          "Geofences around each store log arrival and departure automatically, so delivery windows are verifiable without the driver phoning in.",
        details: [
          "Automatic store geofence events",
          "Delivery-window compliance",
          "Missed or late-stop alerts",
        ],
      },
      {
        title: "Courier accountability",
        content:
          "Per-courier metrics — stops completed, on-time rate, idle time — plus proof-of-delivery capture feed back into your operations and CRM.",
        details: [
          "Per-courier performance scorecards",
          "Proof-of-delivery photo / signature",
          "Integration with 1C and Yandex.Courier",
        ],
      },
    ],
    monitors: [
      "Route progress and ETA per stop",
      "Store arrival and departure events",
      "Unloading and idle time",
      "Delivery completion and proof",
    ],
    detects: [
      "Missed delivery windows",
      "Inefficient multi-stop routing",
      "Under-performing couriers",
      "Disputed or unproven deliveries",
    ],
    equipment: [
      { name: "UMKa302 Terminal", desc: "Economical terminal for van and LCV delivery fleets", price: true },
      { name: "Driver Mobile App", desc: "Turns a phone into a tracker with proof-of-delivery capture", price: false },
      { name: "OBD-II Plug Tracker", desc: "Self-install tracker for corporate cars and light vans", price: true },
    ],
    faqs: [
      { q: "Can customers see their ETA?", a: "Yes, via a temporary tracking link generated per delivery." },
      { q: "How is store arrival logged?", a: "Automatically, by geofence, with no action needed from the driver." },
      { q: "Does it capture proof of delivery?", a: "Yes — photo and signature in the driver app, posted to your system." },
      { q: "Does it optimise routes?", a: "Multi-stop routes can be planned in the platform and adjusted as the day changes." },
    ],
    clients: ["Retail chains", "Furnitura", "Green Holidays"],
    contactPerson: OSIPOV,
  },

  pharma: {
    category: "By Industry",
    stats: [
      { value: "GDP", label: "Compliant logs" },
      { value: "±0.3°C", label: "Pharma precision" },
      { value: "PDF", label: "Temperature certificates" },
      { value: "Instant", label: "Breach alerts" },
    ],
    highlights: [
      "GDP-compliant temperature logging with dual calibrated probes",
      "Humidity and shock monitoring",
      "Immutable audit trail for health authorities",
      "Automatic PDF temperature certificates per shipment",
    ],
    sections: [
      {
        title: "Cold-chain GDP compliance",
        content:
          "Certified thermal monitoring for medicine and vaccine transport generates the immutable records required by Good Distribution Practice, with an alert the moment a limit is crossed.",
        details: [
          "Dual calibrated thermal probes",
          "Configurable GDP temperature bands",
          "Immutable, timestamped audit log",
        ],
      },
      {
        title: "Beyond temperature",
        content:
          "Humidity and shock sensors catch the other ways a pharmaceutical load can be compromised, and door sensors record every opening.",
        details: [
          "Humidity monitoring",
          "Shock / drop detection",
          "Door open/close log with location",
        ],
      },
      {
        title: "Certificates and hand-off",
        content:
          "A PDF temperature certificate is generated per shipment for the receiving pharmacy or hospital, and the raw data is available via API for their QMS.",
        details: [
          "Per-shipment PDF certificate",
          "API feed into the recipient's QMS",
          "Excursion report with duration and severity",
        ],
      },
    ],
    monitors: [
      "Compartment temperature (dual probe)",
      "Humidity and shock events",
      "Door open/close events",
      "Excursion duration and severity",
    ],
    detects: [
      "Temperature excursions outside GDP limits",
      "Humidity or shock damage",
      "Unauthorised compartment access",
      "Missing or incomplete audit records",
    ],
    equipment: [
      { name: "Escort TD-BLE Temperature Sensor", desc: "Calibrated wireless thermal / humidity sensor for GDP transport", price: true },
      { name: "Shock & Tilt Sensor", desc: "Detects drops and rough handling of the load", price: true },
      { name: "Signal S-2653 Navigation Terminal", desc: "Terminal aggregating probes, door and shock sensors", price: true },
    ],
    faqs: [
      { q: "Is the logging GDP compliant?", a: "Yes — dual calibrated probes, configurable bands and an immutable audit trail." },
      { q: "Do you produce certificates?", a: "A PDF temperature certificate is generated per shipment automatically." },
      { q: "What precision can you guarantee?", a: "Around ±0.3 °C with calibrated pharma-grade probes." },
      { q: "Can the hospital pull the data?", a: "Yes, via API into their quality management system." },
    ],
    clients: ["RESO Med", "Dipol", "Infokom.tv"],
    contactPerson: ZHOKHOV,
  },

  medical: {
    category: "By Industry",
    stats: [
      { value: "Fastest", label: "Dispatch response" },
      { value: "24/7", label: "Emergency monitoring" },
      { value: "Auto", label: "Hospital arrival alerts" },
      { value: "Climate", label: "Patient compartment" },
    ],
    highlights: [
      "Nearest-available-ambulance dispatch",
      "Siren and beacon operation sensors",
      "Patient-compartment climate monitoring",
      "Automatic hospital-arrival notifications",
    ],
    sections: [
      {
        title: "Ambulance dispatch",
        content:
          "The dispatcher sees every unit's status and position and can send the nearest available ambulance, cutting minutes off the response time.",
        details: [
          "Nearest-unit dispatch view",
          "Status: free / en route / on scene / to hospital",
          "Response-time analytics per call",
        ],
      },
      {
        title: "Vehicle and equipment status",
        content:
          "Sensors confirm the siren and beacons are operating during an emergency run, and the patient compartment's temperature is kept in view.",
        details: [
          "Siren / beacon operation sensor",
          "Patient-compartment temperature",
          "Fuel level and readiness checks",
        ],
      },
      {
        title: "Hand-off and records",
        content:
          "Geofences at each hospital log arrival automatically and notify the receiving department, and every run is recorded for review.",
        details: [
          "Automatic hospital-arrival alerts",
          "Per-call timeline for audit",
          "Fleet readiness dashboard",
        ],
      },
    ],
    monitors: [
      "Unit status and position",
      "Siren and beacon operation",
      "Patient-compartment climate",
      "Hospital-arrival geofence events",
    ],
    detects: [
      "Slow or misrouted dispatch",
      "Emergency runs without warning devices active",
      "Patient-compartment temperature drift",
      "Units unavailable or low on fuel",
    ],
    equipment: [
      { name: "Signal S-2653 Navigation Terminal", desc: "Terminal with inputs for siren, beacon and climate sensors", price: true },
      { name: "Patient-Compartment Temperature Sensor", desc: "Wireless thermal sensor for the medical compartment", price: true },
      { name: "MDSM-7 Driver Monitoring Camera", desc: "Fatigue monitoring for long shifts", price: true },
    ],
    faqs: [
      { q: "How does nearest-unit dispatch work?", a: "The dispatcher sees live status and distance for every ambulance and assigns the closest free one." },
      { q: "Can we confirm the siren was on?", a: "Yes — a sensor logs siren and beacon operation during the run." },
      { q: "Is the patient compartment monitored?", a: "Temperature is logged continuously and alerts on drift." },
      { q: "Does the hospital get notified?", a: "Yes, arrival is detected by geofence and pushed to the receiving department." },
    ],
    clients: ["Zhukovsky Emergency Services", "RESO Med", "Regional ambulance services"],
    contactPerson: ZHOKHOV,
  },

  "fuel-energy": {
    category: "By Industry",
    stats: [
      { value: "Zero", label: "Unaccounted drains" },
      { value: "Digital", label: "Seal monitoring" },
      { value: "Auto", label: "Delivery reconciliation" },
      { value: "Per-compartment", label: "Hatch sensors" },
    ],
    highlights: [
      "Bottom-valve and top-hatch sensors per compartment",
      "Electronic seal status",
      "Flow-meter readings on discharge",
      "Automatic reconciliation of gas-station deliveries",
    ],
    sections: [
      {
        title: "Fuel-tanker telemetry",
        content:
          "Every compartment's bottom valve and top hatch is sensed, so the platform knows exactly when and where product left the tanker — not just how far it drove.",
        details: [
          "Bottom-valve open/close per compartment",
          "Top-hatch position sensors",
          "Location and time of every discharge",
        ],
      },
      {
        title: "Seals and metering",
        content:
          "Electronic seal status is monitored continuously, and flow-meter readings on discharge give a measured volume to compare against the delivery note.",
        details: [
          "Digital seal integrity monitoring",
          "Flow-meter volume on discharge",
          "Tamper and forced-open alerts",
        ],
      },
      {
        title: "Delivery reconciliation",
        content:
          "Discharge events are matched automatically against station orders, flagging shortfalls and off-route stops before the paperwork is filed.",
        details: [
          "Order-vs-discharge matching",
          "Shortfall and surplus flags",
          "Off-route discharge alerts",
        ],
      },
    ],
    monitors: [
      "Compartment valve and hatch status",
      "Electronic seal integrity",
      "Discharge volume and location",
      "Route and stop pattern",
    ],
    detects: [
      "Unaccounted discharges and drains",
      "Seal tampering",
      "Off-route or unscheduled stops",
      "Shortfalls versus the delivery note",
    ],
    equipment: [
      { name: "Signal S-2653 Navigation Terminal", desc: "Multi-input terminal for valve, hatch and seal sensors", price: true },
      { name: "Compartment Hatch & Valve Sensor Kit", desc: "Detects openings per tanker compartment", price: true },
      { name: "Digital Seal Module", desc: "Continuous electronic seal-integrity monitoring", price: true },
    ],
    faqs: [
      { q: "How do you catch drains from a tanker?", a: "Valve and hatch sensors record every opening with location and time, not just mileage." },
      { q: "Can you compare delivered vs ordered volume?", a: "Yes — flow-meter readings on discharge are matched against the station order." },
      { q: "Are the seals monitored electronically?", a: "Yes, seal integrity is watched continuously with tamper alerts." },
      { q: "What about off-route stops?", a: "Any discharge outside a planned point triggers an immediate alert." },
    ],
    clients: ["Gazprom Mezhregiongaz", "RTS-EXPORT", "Fuel logistics operators"],
    contactPerson: CHULSKY,
  },

  "light-commercial": {
    category: "By Industry",
    stats: [
      { value: "Plug & play", label: "OBD-II install" },
      { value: "Affordable", label: "Tariffs from ₽249" },
      { value: "After-hours", label: "Personal-use control" },
      { value: "Scorecard", label: "Driver behaviour" },
    ],
    highlights: [
      "Self-install OBD-II trackers for vans and corporate cars",
      "Mileage, speed and trip reports by email",
      "After-hours personal-use detection",
      "Driver behaviour scoring on an affordable plan",
    ],
    sections: [
      {
        title: "LCV fleet control",
        content:
          "Gazelle vans, Ford Transit, Mercedes Sprinter and corporate cars are covered by a small OBD-II tracker the driver plugs in themselves — no installer, no downtime.",
        details: [
          "OBD-II plug-in, no wiring",
          "Automatic trip and mileage logs",
          "Works across mixed van and car fleets",
        ],
      },
      {
        title: "Cost and usage control",
        content:
          "Business trips are separated from personal use after hours, and fuel-card spend can be checked against mileage.",
        details: [
          "Business vs personal trip split",
          "After-hours use alerts",
          "Fuel-card vs mileage checks",
        ],
      },
      {
        title: "Driver behaviour",
        content:
          "Harsh braking, acceleration and speeding are scored per driver on the same affordable plan, so a small fleet gets the safety benefit without a big spend.",
        details: [
          "Per-driver safety scorecards",
          "Speeding alerts",
          "Monthly summary by email",
        ],
      },
    ],
    monitors: [
      "Location, speed and mileage",
      "Trip purpose (business / personal)",
      "Driver behaviour score",
      "Basic on-board diagnostics",
    ],
    detects: [
      "Personal use of company vehicles",
      "Speeding and harsh driving",
      "Fuel-card spend not matching mileage",
      "Unlogged or off-book trips",
    ],
    equipment: [
      { name: "OBD-II Plug Tracker", desc: "Self-install tracker with diagnostics for vans and corporate cars", price: true },
      { name: "UMKa302 Terminal", desc: "Low-cost wired terminal for permanent installs", price: true },
      { name: "Driver Mobile App", desc: "Phone-as-tracker option for pool cars", price: false },
    ],
    faqs: [
      { q: "Do I need an installer?", a: "Not for the OBD-II tracker — the driver plugs it into the diagnostic port in under a minute." },
      { q: "Will it drain the car battery?", a: "No, it draws a few milliamps and sleeps when the car is parked." },
      { q: "Can I separate personal trips?", a: "Yes — trips outside working hours can be marked personal and excluded from business reports." },
      { q: "What does it cost?", a: "From ₽249 per month per vehicle, with the tracker paid once." },
    ],
    clients: ["SMB van fleets", "Furnitura", "Corporate car fleets"],
    contactPerson: OSIPOV,
  },
};
