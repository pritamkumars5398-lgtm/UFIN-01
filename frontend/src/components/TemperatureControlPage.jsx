import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Check,
  ArrowRight,
  ShieldCheck,
  Activity,
  AlertTriangle,
  Phone,
  Cpu,
  Layers,
  Sparkles,
  Send,
  User,
  Building,
  CheckCircle2,
  Thermometer,
  Truck,
  FileText,
  Clock,
  Radio,
  Wifi,
  Printer,
  ChevronDown,
  ChevronUp,
  Snowflake,
  Flame,
  Zap,
  DollarSign,
  PackageCheck,
  ShieldAlert,
  HelpCircle,
  Pill,
  ShoppingBag,
  Boxes,
  Store,
  Warehouse,
} from "lucide-react";

// Local assets
import imgFood from "../assets/Produkty.png";
import imgPharma from "../assets/Farma.png";
import imgFreight from "../assets/GruzTransport.png";
import imgRetail from "../assets/Torgovlya.png";
import escortSensorImg from "../assets/escort-td-ble.jpg";
import trackerImg from "../assets/galileo10.jpg.webp";
import portraitOsipov from "../assets/osipov-portrait.png";

// High-definition photo assets
import laptopTelematicsImg from "../assets/laptop_telematics_temp.jpg";
import courierYellowVanImg from "../assets/courier_yellow_van.jpg";
import executivePhoneImg from "../assets/executive_smartphone.jpg";
import trailerDiagramImg from "../assets/refrigerated_trailer_diagram.jpg";
import thermalLoggerImg from "../assets/iqfreeze_thermal_logger.jpg";

export default function TemperatureControlPage({ data }) {
  // Interactive component tab state (Section 3)
  const [activeComponentTab, setActiveComponentTab] = useState(0);

  // Active FAQ accordion state (Section 5)
  const [openFaq, setOpenFaq] = useState(0);

  // Active hotspot index on diagram (Section 4)
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Lead form state (Section 7)
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formType, setFormType] = useState("offer"); // "offer" | "consultation"
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) return;
    setFormSubmitted(true);
  };

  // Section 1: Who will benefit from temperature control
  const audiences = [
    {
      title: "Food Logistics & Perishables",
      image: imgFood,
      desc: "Transport of chilled meat, dairy, fresh seafood, fruits, and confectionery requiring strict adherence to temperature corridors (-24°C to +4°C).",
      points: ["Prevention of cargo spoilage", "Zero goods rejection at reception", "Automatic defrost cycle logging"],
    },
    {
      title: "Pharmaceuticals & Healthcare",
      image: imgPharma,
      desc: "Transportation of temperature-sensitive medicines, vaccines, and biologics strictly compliant with GDP, SanPiN, and WHO standards.",
      points: ["Certified metrological accuracy ±0.3°C", "Automated cold-chain audit certificates", "Tamper-evident temperature logging"],
    },
    {
      title: "Transport Carriers & 3PL Fleets",
      image: imgFreight,
      desc: "Commercial fleet operators requiring indisputable proof of temperature compliance to eliminate penalty claims from cargo owners.",
      points: ["100% legal protection against claims", "Chiller fuel theft prevention", "Continuous archive up to 3 years"],
    },
    {
      title: "Retail Chains & Distribution",
      image: imgRetail,
      desc: "Large retail chains and logistics hubs managing multi-drop distribution routes and verifying cold-chain compliance before receiving cargo.",
      points: ["Rapid unloading temperature checks", "WMS & 1C/SAP ERP data sync", "Multi-compartment temperature map"],
    },
  ];

  // Section 3: Dark Green Interactive Components
  const componentsList = [
    {
      tabTitle: "Wireless BLE Temperature Sensors",
      heading: "Ultra-precise Wireless BLE Temperature & Humidity Sensors",
      badge: "Bluetooth 5.0 • IP68 Waterproof",
      desc: "Autonomous wireless sensors installed inside refrigerated semi-trailers, vans, and multi-compartment containers without running cables through thermal insulation.",
      specs: [
        { label: "Measurement Range", value: "-40°C to +85°C" },
        { label: "Measurement Accuracy", value: "±0.3°C (Certified)" },
        { label: "Autonomous Battery Life", value: "Up to 5–7 years" },
        { label: "Wireless Range", value: "Up to 100 meters (BLE 5.0)" },
        { label: "Protection Rating", value: "IP68 dust & water tight" },
        { label: "Internal Flash Memory", value: "Up to 30 days autonomous log" },
      ],
      highlights: [
        "Zero drilling of refrigerator walls — fast magnetic/adhesive or screw mounting",
        "Continuous broadcast of temperature and air humidity every 5 seconds",
        "Built-in accelerometer to detect vibration and physical tampering",
        "Certified measuring instrument with individual verification passport",
      ],
    },
    {
      tabTitle: "Direct Refrigerator Unit Integration",
      heading: "Controllers for Carrier, Thermo King, Daikin & Zanotti",
      badge: "CAN / RS-232 / K-Line Protocol",
      desc: "Direct digital interface connecting the vehicle's telematics block to the factory electronic controller of Carrier Transicold, Thermo King, and Zanotti refrigeration units.",
      specs: [
        { label: "Supported Brands", value: "Carrier, Thermo King, Daikin, Zanotti" },
        { label: "Data Interface", value: "CAN 2.0B / RS-232 / CAN-Bus" },
        { label: "Parameters Tracked", value: "32+ chiller telemetry channels" },
        { label: "Engine Hours", value: "Diesel engine & electric motor hours" },
        { label: "Diagnostic Codes", value: "Active DTC error codes & warnings" },
        { label: "Operating Modes", value: "Cooling, Heating, Defrost, Standby" },
      ],
      highlights: [
        "Reading setpoint temperature vs actual supply and return air temperature",
        "Instant notification if refrigeration unit turns off or throws a compressor error",
        "Direct monitoring of diesel engine fuel consumption and auxiliary tank level",
        "Automated service maintenance reminders based on exact operating hours",
      ],
    },
    {
      tabTitle: "Door Opening & Security Sensors",
      heading: "Magnetic Door Opening & Cargo Sealed Compartment Sensors",
      badge: "Wireless Magnetic Reed Sensor",
      desc: "High-reliability wireless or wired magnetic sensors monitoring the opening and closing of refrigerated van doors and trailer cargo gates.",
      specs: [
        { label: "Response Time", value: "< 0.2 seconds" },
        { label: "Operating Temperature", value: "-50°C to +80°C" },
        { label: "Battery Life", value: "Up to 5 years (wireless)" },
        { label: "Enclosure", value: "Vibration-proof industrial alloy" },
        { label: "Tamper Switch", value: "Integrated anti-sabotage sensor" },
        { label: "Event Logging", value: "Duration, timestamp, GPS coordinate" },
      ],
      highlights: [
        "Immediate alarm if doors are opened outside designated geofence unloading points",
        "Tracking door open duration to prevent compartment cold loss during delivery stops",
        "Detailed report correlating door openings with temperature fluctuations",
        "Prevents unauthorized cargo tampering and theft along the route",
      ],
    },
    {
      tabTitle: "Telematics GPS/GLONASS Gateway",
      heading: "Telematics Controller with Integrated Cold-Chain Black Box",
      badge: "4G LTE • Dual SIM • Black Box",
      desc: "Industrial-grade onboard telematics terminal that aggregates data from all wireless BLE sensors, chiller controllers, and door sensors, transmitting it live to the cloud.",
      specs: [
        { label: "Cellular Connectivity", value: "4G LTE / 3G / 2G with Fallback" },
        { label: "Satellite Constellation", value: "GLONASS / GPS / Galileo / BeiDou" },
        { label: "BLE Interface", value: "Bluetooth 5.0 (up to 16 sensors)" },
        { label: "Backup Battery", value: "Li-Ion 1000 mAh (up to 8h autonomous)" },
        { label: "Black Box Storage", value: "50,000+ offline telemetry points" },
        { label: "External Interfaces", value: "RS-485, RS-232, 1-Wire, CAN, 4x Inputs" },
      ],
      highlights: [
        "Uninterrupted operation: saves all cold-chain data in internal memory when offline",
        "Automatic immediate upload of stored telemetry upon restoring mobile coverage",
        "Dual SIM card support for seamless international transport without roaming outages",
        "In-cab buzzer and LED alarm to immediately alert the driver to temperature excursions",
      ],
    },
  ];

  // Section 4: Hotspots on Diagram
  const hotspots = [
    {
      id: 1,
      name: "GPS Tracker & Telematics Gateway",
      zone: "Driver Cabin",
      desc: "4G LTE telematics block with BLE receiver, backup battery, and driver buzzer alarm.",
    },
    {
      id: 2,
      name: "Refrigeration Unit (TRU) Controller",
      zone: "Front Trailer Wall",
      desc: "Direct digital adapter to Carrier / Thermo King controller reading setpoint, mode, and alarms.",
    },
    {
      id: 3,
      name: "Wireless BLE Temperature Sensor (Zone 1)",
      zone: "Front Cargo Bay",
      desc: "High-precision calibrated sensor measuring chilled air supply temperature.",
    },
    {
      id: 4,
      name: "Wireless BLE Temperature Sensor (Zone 2)",
      zone: "Rear Cargo Bay",
      desc: "Continuous temperature & humidity monitoring near rear doors where heat enters first.",
    },
    {
      id: 5,
      name: "Magnetic Door Opening Sensor",
      zone: "Rear Doors",
      desc: "Instant alert on cargo gate opening with timestamp, duration, and GPS coordinates.",
    },
    {
      id: 6,
      name: "Chiller Auxiliary Fuel Level Sensor",
      zone: "Fuel Tank",
      desc: "Monitors diesel fuel in the refrigeration unit tank to prevent emergency chiller stops.",
    },
  ];

  // Section 5: FAQs
  const faqs = [
    {
      q: "What is the measurement accuracy and do the sensors have official calibration certificates?",
      a: "All our BLE temperature sensors are certified measuring instruments with an accuracy of ±0.3°C across the operational range of -40°C to +85°C. Each sensor comes with an individual calibration passport and meets the strict metrological requirements of pharmaceutical logistics (GDP) and food transportation (SanPiN).",
    },
    {
      q: "How long does the wireless BLE sensor battery last and does it require body drilling?",
      a: "The sensors operate on an internal industrial lithium battery that lasts 5 to 7 years in continuous 24/7 broadcasting mode. Because data is transmitted over Bluetooth Low Energy, no wires are run through the trailer walls, completely preserving the thermal insulation and structural integrity of the refrigerated body.",
    },
    {
      q: "What happens if the vehicle travels through areas without cellular network coverage?",
      a: "The telematics controller features an onboard non-volatile flash black box capable of storing over 50,000 telemetry points. In addition, each BLE sensor retains up to 30 days of autonomous temperature logs. As soon as the vehicle enters GSM coverage, all historical data is automatically synchronized with the cloud platform without losing a single second.",
    },
    {
      q: "Can the driver print thermo-receipts for the cargo receiver upon delivery?",
      a: "Yes! Drivers can connect a compact portable Bluetooth thermal printer to their smartphone or the telematics terminal to immediately print an official cold-chain receipt showing temperature graphs, min/max values, and delivery timestamps. Alternatively, dispatchers can generate a verified PDF report with a QR code link in one click.",
    },
    {
      q: "Can the system read diagnostic data directly from Carrier and Thermo King chillers?",
      a: "Yes. Using direct digital interface modules (RS-232 / CAN), our platform reads data straight from the electronic controllers of Carrier (Vector, Supra, Maxima), Thermo King (SLX, SLXi, Advancer), and Daikin. We track setpoint, return/discharge air temperature, cooling/heating/defrost modes, operating hours, and active error codes.",
    },
    {
      q: "How long does equipment installation take on a fleet?",
      a: "Standard installation and calibration on a refrigerated truck take between 1.5 and 2.5 hours per vehicle. Our certified field engineers can perform installation at your depot or service center with zero downtime to your shipping schedule.",
    },
  ];

  // Section 6: Equipment Catalog
  const equipment = [
    {
      name: "Tekonika BLE Thermo-01 (Escort TD-BLE)",
      badge: "Best Seller • Wireless",
      image: escortSensorImg,
      desc: "Ultra-compact wireless temperature and humidity sensor designed for harsh refrigerated transport conditions.",
      specs: [
        "Measuring range: -40°C to +85°C",
        "Accuracy: ±0.3°C (certified)",
        "Battery life: 5–7 years autonomous",
        "Wireless range: up to 100m BLE 5.0",
        "Enclosure: IP68 waterproof, shockproof",
      ],
      price: "from ₽3,900",
    },
    {
      name: "Tekonika Tracker Pro 4G Climate",
      badge: "High Accuracy • 4G LTE",
      image: trackerImg,
      desc: "Professional vehicle telematics controller with BLE gateway supporting up to 16 sensors, CAN-bus, and backup power.",
      specs: [
        "Network: 4G LTE / 3G / 2G with Fallback",
        "Navigation: GLONASS, GPS, Galileo, BeiDou",
        "BLE 5.0 gateway: up to 16 wireless sensors",
        "RS-485, RS-232, 1-Wire & CAN interfaces",
        "Internal battery: up to 8 hours autonomous",
      ],
      price: "from ₽7,400",
    },
    {
      name: "FleetTemp Pro / iQFreeze R Chiller Adapter",
      badge: "Certified • GDP Compliant",
      image: thermalLoggerImg,
      desc: "Certified autonomous thermal recorder and digital interface adapter for Carrier, Thermo King, and Daikin chillers.",
      specs: [
        "Direct connection to Carrier & Thermo King",
        "LCD display with real-time temperature",
        "Thermal printer output for delivery receipts",
        "Complies with European ATP & GDP standards",
        "Non-volatile memory: 1 year continuous log",
      ],
      price: "from ₽14,500",
    },
  ];

  // Section 7: Stages of standard project
  const stages = [
    {
      step: "01",
      title: "Fleet Audit & Technical Task Formulation",
      desc: "We analyze your vehicles, cargo types, temperature ranges, and integration requirements with your accounting and dispatch software.",
    },
    {
      step: "02",
      title: "Free 14-Day Test Pilot on 1–3 Vehicles",
      desc: "We equip test vehicles free of charge so you can evaluate the platform, mobile app, and instant alerts under real operating conditions.",
    },
    {
      step: "03",
      title: "Fleet Installation & Metrological Calibration",
      desc: "Certified technicians install wireless sensors, chiller controllers, and trackers at your parking facility in 1.5–2 hours per vehicle.",
    },
    {
      step: "04",
      title: "Cloud Platform Setup & Personnel Training",
      desc: "We configure temperature corridors, automated notification recipients (Telegram, SMS, email), and train dispatchers and drivers.",
    },
    {
      step: "05",
      title: "Ongoing 24/7 Technical Support & Warranty",
      desc: "Round-the-clock technical assistance, scheduled annual sensor verification, and rapid replacement under full warranty.",
    },
  ];

  // Section 8: Related control services
  const relatedServices = [
    { title: "Fuel Consumption & Theft Control", to: "/services/fuel-control" },
    { title: "Driver Attention & Fatigue (ADAS/DSM)", to: "/services/driver-control" },
    { title: "Tire Pressure & Temp Monitoring (TPMS)", to: "/services/tire-pressure" },
    { title: "Video Surveillance & Cargo Cam", to: "/services/video-surveillance" },
    { title: "Route Assignments & Geofencing", to: "/services/route-assignments" },
    { title: "GLONASS / GPS Fleet Telematics", to: "/services/glonass-monitoring" },
  ];

  const curComponent = componentsList[activeComponentTab];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* ── 1. HERO (KEPT UNCHANGED AS REQUESTED) ── */}
      <section
        className="relative min-h-[62vh] flex items-center pt-28 pb-16 px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,31,51,0.93) 0%, rgba(11,31,51,0.72) 100%), url('${data.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-white transition">{data.category}</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">{data.title}</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block bg-[#4E8F89] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              {data.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5 drop-shadow-sm">
              {data.title}
            </h1>
            <p className="text-xl text-white/90 font-semibold mb-3 leading-snug">{data.subtitle}</p>
            <p className="text-white/75 text-lg leading-relaxed mb-8">{data.description}</p>

            {data.pricing && (
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3">
                  <div className="text-white font-black text-lg">{data.pricing.equip}</div>
                  <div className="text-white/60 text-xs">Equipment &amp; installation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3">
                  <div className="text-white font-black text-lg">{data.pricing.sub}</div>
                  <div className="text-white/60 text-xs">Subscription per vehicle</div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#lead-form"
                className="px-8 py-4 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition shadow-lg text-base"
              >
                Try free — 14 days
              </a>
              <a
                href="#components"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold hover:bg-white/10 rounded-xl transition text-base backdrop-blur-sm"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR (KEPT UNCHANGED AS REQUESTED) ── */}
      {data.stats?.length > 0 && (
        <section className="bg-[#0B1F33] py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
              {data.stats.map((stat, i) => (
                <div key={i} className="px-4">
                  <div className="text-3xl lg:text-4xl font-black text-[#f59e0b] mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
              <div className="px-4">
                <div className="text-3xl lg:text-4xl font-black text-[#4E8F89] mb-1">±0.3°C</div>
                <div className="text-sm text-white/70 font-medium">Metrological Accuracy</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── INFO DOCKED METRICS BAR (FROM REFERENCE TOP) ── */}
      <section className="bg-slate-50 border-b border-slate-200 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="grid grid-cols-3 gap-6 w-full md:w-auto text-left">
            <div className="border-l-2 border-[#4E8F89] pl-4">
              <div className="text-xs text-slate-500 uppercase font-semibold">Cost from</div>
              <div className="text-xl font-black text-[#0B1F33]">₽4,900</div>
            </div>
            <div className="border-l-2 border-[#4E8F89] pl-4">
              <div className="text-xs text-slate-500 uppercase font-semibold">Implementation</div>
              <div className="text-xl font-black text-[#0B1F33]">from 1 day</div>
            </div>
            <div className="border-l-2 border-[#4E8F89] pl-4">
              <div className="text-xs text-slate-500 uppercase font-semibold">Testing</div>
              <div className="text-xl font-black text-[#0B1F33]">14 days free</div>
            </div>
          </div>
          <a
            href="#lead-form"
            className="w-full md:w-auto px-8 py-3.5 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition shadow text-sm text-center"
          >
            Calculate Cost
          </a>
        </div>
      </section>

      {/* ── SECTION 1: WHO WILL BENEFIT FROM TEMPERATURE CONTROL ── */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold text-[#4E8F89] tracking-wider">
              Target Audience
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0B1F33] mt-2 mb-4">
              Who will benefit from temperature control of your transportation
            </h2>
            <p className="text-slate-600 text-base">
              Engineered for companies where cargo integrity, temperature compliance, and immediate reaction to climate deviations are business-critical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#f2f8f7] rounded-3xl p-6 border border-[#d3eae6] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 hover:border-[#4E8F89] transition-all duration-300"
              >
                <div>
                  <div className="h-28 w-full flex items-center justify-center mb-5 rounded-2xl bg-white border border-[#cbe4de] shadow-sm p-3 group-hover:border-[#4E8F89] group-hover:shadow-md transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-20 max-w-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-black text-[#0B1F33] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <ul className="space-y-2 border-t border-[#dceee9] pt-4">
                  {item.points.map((pt, pi) => (
                    <li key={pi} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <Check size={14} className="text-[#4E8F89] mt-0.5 shrink-0" strokeWidth={3} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: 4 ALTERNATING FEATURE ROWS WITH RICH IMAGERY ── */}
      <section className="py-16 px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Row 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] group">
              <img
                src={laptopTelematicsImg}
                alt="Cold chain telematics laptop display"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 text-xs font-semibold text-slate-800 flex items-center justify-between shadow">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Cold-Chain Feed
                </span>
                <span className="text-[#4E8F89] font-bold">-18.4°C • Nominal</span>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-[#e6f4f1] text-[#2c6e67] text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full mb-4">
                <Radio size={14} className="animate-pulse text-[#4E8F89]" />
                Online Monitoring
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-[#0B1F33] mb-5 leading-tight">
                Continuous temperature monitoring in real time
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Wireless BLE sensors continuously measure temperature and relative humidity inside each cargo compartment every 5 seconds. Data is beamed over 4G LTE to the dispatch cloud, giving you instantaneous visibility over multi-zone trailers and city delivery vans.
              </p>
              <div className="space-y-3">
                {[
                  "Real-time temperature & humidity logging across multiple independent zones",
                  "Instant alert notifications via Telegram, SMS, and email within 3–5 seconds upon deviation",
                  "Internal black-box flash memory records data with zero gaps even outside cellular coverage",
                  "Visual color-coded temperature curves on smartphone, tablet, and desktop dashboards",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#4E8F89]/15 text-[#4E8F89] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full mb-4 border border-amber-200">
                <ShieldCheck size={14} className="text-amber-600" />
                SanPiN &amp; GDP Standards
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-[#0B1F33] mb-5 leading-tight">
                Compliance with regulatory standards &amp; cold chain integrity
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Transportation of perishables and pharmaceuticals requires strict compliance with international cold-chain agreements (ATP/GDP) and national sanitary regulations. Our system eliminates paperwork and produces legally binding thermal records.
              </p>
              <div className="space-y-3">
                {[
                  "Automated generation of thermo-reports and cold-chain compliance certificates in 1 click",
                  "Option to print thermal receipts directly at cargo handover via mobile bluetooth printer",
                  "Indisputable electronic audit trail protecting carriers in disputed insurance claims",
                  "Certified measuring sensors with state register metrological attestation",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] group">
              <img
                src={courierYellowVanImg}
                alt="Delivery driver with cold-chain verified tablet"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 text-xs font-semibold text-slate-800 flex items-center justify-between shadow">
                <span className="flex items-center gap-2">
                  <FileText size={15} className="text-[#4E8F89]" />
                  Receipt Auto-Printed
                </span>
                <span className="text-emerald-600 font-bold">100% Accepted</span>
              </div>
            </div>
          </div>

          {/* Row 3: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] group">
              <img
                src={executivePhoneImg}
                alt="Logistics manager checking fleet alerts"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 text-xs font-semibold text-slate-800 flex items-center justify-between shadow">
                <span className="flex items-center gap-2">
                  <AlertTriangle size={15} className="text-amber-500" />
                  Preventive Warning
                </span>
                <span className="text-slate-700">0 Cargo Losses in 12 mo</span>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full mb-4 border border-emerald-200">
                <DollarSign size={14} className="text-emerald-600" />
                Risk Elimination
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-[#0B1F33] mb-5 leading-tight">
                Cargo safety and elimination of financial losses
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Spoiled refrigerated cargo costs companies millions in insurance deductibles, rejected loads, and broken customer trust. Tekonika Temperature Control gives you proactive control before irreversible temperature rise begins.
              </p>
              <div className="space-y-3">
                {[
                  "Early detection of refrigeration unit malfunctions (compressor failure, freon leak, belt slip)",
                  "Monitoring cargo compartment door opening duration and unauthorized access",
                  "Auxiliary fuel level and consumption monitoring of the refrigeration diesel engine",
                  "In-cab driver audio buzzer warning the driver immediately if cooling stops",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#4E8F89]/15 text-[#4E8F89] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 4: Advantum / Brand Card Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl bg-gradient-to-br from-[#0c2f28] to-[#081e19] p-8 lg:p-12 text-white border border-[#1b4d42] shadow-2xl flex flex-col justify-between aspect-[4/3]">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="bg-[#f59e0b] text-black font-black text-xs uppercase px-3 py-1 rounded-md">
                    Telematics Protocol
                  </div>
                  <span className="text-xs text-[#a2d4cd]">Direct CAN-Bus</span>
                </div>

                <div className="my-6">
                  <div className="text-3xl lg:text-4xl font-black text-[#f59e0b] tracking-wider mb-2">
                    ADVANTUM
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/60">
                    Certified Cold-Chain Technology Partner
                  </div>
                </div>

                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Direct digital protocol integration with Carrier Transicold, Thermo King, Daikin, and Zanotti controllers. Reading engine hours, setpoints, and error codes without extra analog sensors.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-center">
                <div className="bg-white/5 rounded-lg p-2">
                  <div className="text-xs text-white/50">Carrier</div>
                  <div className="text-sm font-bold text-white">Vector / Supra</div>
                </div>
                <div className="bg-white/5 rounded-lg p-2">
                  <div className="text-xs text-white/50">Thermo King</div>
                  <div className="text-sm font-bold text-white">SLX / Advancer</div>
                </div>
                <div className="bg-white/5 rounded-lg p-2">
                  <div className="text-xs text-white/50">Zanotti / Daikin</div>
                  <div className="text-sm font-bold text-white">Full Protocol</div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-[#e6f4f1] text-[#2c6e67] text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full mb-4">
                <Cpu size={14} className="text-[#4E8F89]" />
                Factory Controller Integration
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-[#0B1F33] mb-5 leading-tight">
                Direct integration with Carrier, Thermo King, Daikin, and Zanotti chillers
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Our telematics system connects directly to the digital data logger and controller of factory refrigeration units over CAN-bus and RS-232, reading official internal telemetry straight from the chiller brain.
              </p>
              <div className="space-y-3">
                {[
                  "Reading exact operating mode: Cooling, Heating, Defrost, Standby, Diesel / Electric",
                  "Monitoring engine operating hours and maintenance schedules automatically",
                  "Real-time reading of official diagnostic trouble codes (DTC) straight from the unit",
                  "Monitoring setpoint temperature vs. actual air return and supply temperature curves",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#4E8F89]/15 text-[#4E8F89] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DARK GREEN INTERACTIVE COMPONENT BREAKDOWN ── */}
      <section id="components" className="py-20 px-6 lg:px-8 bg-[#092e26] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold text-[#f59e0b] tracking-wider">
              System Architecture
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mt-2 mb-4">
              Components of temperature control during transportation
            </h2>
            <p className="text-white/70 text-base">
              Explore the core hardware components that make up the cold chain monitoring ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {componentsList.map((comp, idx) => {
                const isActive = activeComponentTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveComponentTab(idx)}
                    className={`w-full text-left p-5 rounded-2xl font-bold transition-all duration-200 border flex items-center justify-between ${isActive
                        ? "bg-[#f59e0b] text-black border-[#f59e0b] shadow-xl translate-x-1"
                        : "bg-[#0f3d33] text-white/90 border-[#1c5549] hover:bg-[#13493d] hover:text-white"
                      }`}
                  >
                    <span className="text-base leading-snug">{comp.tabTitle}</span>
                    <ArrowRight size={18} className={isActive ? "text-black" : "text-white/50"} />
                  </button>
                );
              })}
            </div>

            {/* Right Display Card */}
            <div className="lg:col-span-7 bg-[#0f3d33]/90 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-[#1c5549] shadow-2xl card-tab-transition">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/30 text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
                  {curComponent.badge}
                </span>
                <span className="text-xs text-white/50">Component {activeComponentTab + 1} of 4</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                {curComponent.heading}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                {curComponent.desc}
              </p>

              {/* Technical specs grid */}
              <div className="mb-8">
                <div className="text-xs font-extrabold uppercase text-[#f59e0b] tracking-wider mb-3">
                  Technical Specifications:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {curComponent.specs.map((spec, si) => (
                    <div key={si} className="bg-black/25 rounded-xl p-3 border border-white/10">
                      <div className="text-[11px] text-white/60 mb-0.5">{spec.label}</div>
                      <div className="text-xs font-bold text-white">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational highlights */}
              <div>
                <div className="text-xs font-extrabold uppercase text-[#f59e0b] tracking-wider mb-3">
                  Operational Advantages:
                </div>
                <div className="space-y-2.5">
                  {curComponent.highlights.map((hl, hi) => (
                    <div key={hi} className="flex items-start gap-2.5 text-xs text-white/90">
                      <CheckCircle2 size={15} className="text-[#f59e0b] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: REFRIGERATED SEMI-TRAILER DIAGRAM ── */}
      <section className="py-20 px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold text-[#4E8F89] tracking-wider">
              Installation Scheme
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0B1F33] mt-2 mb-4">
              How the temperature control system is installed on transport
            </h2>
            <p className="text-slate-600 text-base">
              Comprehensive multi-point sensing ensuring 100% cold chain visibility from the tractor cabin to rear cargo doors.
            </p>
          </div>

          {/* Diagram graphic */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 mb-10 bg-white">
            <img
              src={trailerDiagramImg}
              alt="Cold chain telematics refrigerated trailer diagram"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Hotspot legend cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hotspots.map((hs) => (
              <div
                key={hs.id}
                onMouseEnter={() => setActiveHotspot(hs.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                className={`p-5 rounded-2xl border transition duration-200 ${activeHotspot === hs.id
                    ? "bg-[#e8f5f3] border-[#4E8F89] shadow-md -translate-y-1"
                    : "bg-slate-50 border-slate-200 hover:bg-[#f1f9f8]"
                  }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-full bg-[#f59e0b] text-black font-black text-xs flex items-center justify-center shrink-0">
                    {hs.id}
                  </div>
                  <div>
                    <div className="text-xs text-[#4E8F89] font-bold uppercase">{hs.zone}</div>
                    <div className="text-sm font-black text-[#0B1F33]">{hs.name}</div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-10">
                  {hs.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: INTERACTIVE FAQ ACCORDION ── */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-extrabold text-[#4E8F89] tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0B1F33] mt-2 mb-4">
              Questions and Answers
            </h2>
            <p className="text-slate-600 text-base">
              Everything you need to know about hardware certification, installation, offline logging, and report generation.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base text-[#0B1F33] hover:text-[#4E8F89] transition"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${isOpen ? "bg-[#4E8F89] text-white rotate-180" : "bg-slate-100 text-slate-600"
                      }`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 card-tab-transition">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: EQUIPMENT CATALOG (FROM REFERENCE) ── */}
      <section className="py-20 px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold text-[#4E8F89] tracking-wider">
              Certified Hardware
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0B1F33] mt-2 mb-4">
              The main range of equipment necessary for monitoring climate control during transportation
            </h2>
            <p className="text-slate-600 text-base">
              Tested and verified sensors, telematics gateways, and thermal data recorders compliant with European ATP and Russian GDP standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.map((eq, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square bg-slate-100 p-8 flex items-center justify-center overflow-hidden">
                    <img
                      src={eq.image}
                      alt={eq.name}
                      className="max-h-full max-w-full object-contain hover:scale-110 transition duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-extrabold text-[#4E8F89] border border-slate-200 shadow-sm">
                      {eq.badge}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-black text-[#0B1F33] mb-2 leading-snug">
                      {eq.name}
                    </h3>
                    <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                      {eq.desc}
                    </p>

                    <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                      {eq.specs.map((sp, si) => (
                        <li key={si} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check size={13} className="text-[#4E8F89] shrink-0 mt-0.5" strokeWidth={3} />
                          <span>{sp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] text-slate-400">Unit price</div>
                    <div className="text-lg font-black text-[#0B1F33]">{eq.price}</div>
                  </div>
                  <a
                    href="#lead-form"
                    className="px-6 py-3 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition text-xs shadow hover:shadow-md"
                  >
                    Order Equipment
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: STAGES OF STANDARD PROJECT & SUBMIT REQUEST ── */}
      <section id="lead-form" className="py-20 px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: 5 Milestone Stages */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-extrabold text-[#4E8F89] tracking-wider">
                Workflow
              </span>
              <h2 className="text-3xl font-black text-[#0B1F33] mt-2 mb-8">
                Stages of a standard project
              </h2>

              <div className="space-y-6">
                {stages.map((st, i) => (
                  <div key={i} className="flex items-start gap-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#e6f4f1] text-[#2d6e66] font-black text-lg flex items-center justify-center shrink-0">
                      {st.step}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0B1F33] mb-1">
                        {st.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Floating Lead Form */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-[#0B1F33] mb-2">
                Submit a request
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Leave your details and our senior cold-chain specialist will prepare a customized proposal with a 10% pilot discount.
              </p>

              {/* Specialist Contact Header */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#f2f8f7] border border-[#d3eae6] mb-6">
                <img
                  src={portraitOsipov}
                  alt="Alexey Osipov"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <div className="text-sm font-bold text-[#0B1F33]">Alexey Osipov</div>
                  <div className="text-xs text-[#4E8F89] font-medium">Head of Telematics Solutions</div>
                  <a href="tel:88004440481" className="text-xs font-bold text-slate-800 hover:text-[#4E8F89]">
                    8 (800) 444-04-81
                  </a>
                </div>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center card-tab-transition">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 mb-1">Request Received!</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you, {formName}. We will contact you at {formPhone} during business hours to configure your test pilot.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl mb-2">
                    <button
                      type="button"
                      onClick={() => setFormType("offer")}
                      className={`py-2 text-xs font-bold rounded-lg transition ${formType === "offer" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                        }`}
                    >
                      Commercial Offer
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormType("consultation")}
                      className={`py-2 text-xs font-bold rounded-lg transition ${formType === "consultation" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                        }`}
                    >
                      Free Pilot (14 Days)
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#4E8F89]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#4E8F89]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition shadow-lg text-sm uppercase tracking-wider"
                  >
                    Submit Request
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    By submitting this form you agree to the processing of personal data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: DARK GREEN GRID "RELATED CONTROL SERVICES" ── */}
      <section className="py-20 px-6 lg:px-8 bg-[#092e26] text-white border-t border-[#1c5549]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold text-[#f59e0b] tracking-wider">
              Ecosystem
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mt-2 mb-4">
              Related control services
            </h2>
            <p className="text-white/70 text-base">
              Combine temperature monitoring with video surveillance, fuel analytics, and driver attention tracking in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedServices.map((rel, idx) => (
              <Link
                key={idx}
                to={rel.to}
                className="p-5 rounded-2xl bg-[#0f3d33] border border-[#1c5549] hover:bg-[#154e42] hover:border-[#f59e0b]/50 transition duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#f59e0b] group-hover:scale-110 transition">
                    <Activity size={18} />
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-[#f59e0b] transition">
                    {rel.title}
                  </span>
                </div>
                <ArrowRight size={16} className="text-white/40 group-hover:text-[#f59e0b] group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: WHAT YOU GET WITH TEKONIKA TEMPERATURE CONTROL ── */}
      <section className="py-20 px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold text-[#4E8F89] tracking-wider">
              System Value
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0B1F33] mt-2 mb-4">
              What you get with Tekonika Temperature Control
            </h2>
            <p className="text-slate-600 text-base">
              A balanced synergy of hardware accuracy and business financial transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Left: Technical Capabilities */}
            <div className="bg-[#f8faf9] rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#4E8F89]/15 text-[#4E8F89] flex items-center justify-center mb-6">
                <Thermometer size={24} />
              </div>
              <h3 className="text-xl font-black text-[#0B1F33] mb-4">
                System Capabilities
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Continuous 24/7 logging of temperature & humidity across multiple zones",
                  "Automated instant warnings on Telegram, SMS, and email within 3–5s",
                  "Direct protocol integration with Carrier, Thermo King, and Daikin controllers",
                  "Automated PDF cold chain verification certificates with digital QR signatures",
                  "Real-time API synchronization with 1C, SAP, and warehouse WMS platforms",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-[#4E8F89] shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Right: Business Results */}
            <div className="bg-[#f8faf9] rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-black text-[#0B1F33] mb-4">
                Business Effect for Your Company
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "0% cargo rejection by supermarket distribution centers and pharmaceutical warehouses",
                  "100% legal dispute protection against ungrounded spoilage penalty claims",
                  "12–18% reduction in chiller fuel consumption through optimized cooling cycles",
                  "Competitive advantage when winning high-margin cold chain freight tenders",
                  "Return on investment (ROI) within 2 to 4 months of fleet deployment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-[#f59e0b] shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. BOTTOM CTA (KEPT UNCHANGED AS REQUESTED) ── */}
      <section className="bg-[#4E8F89] py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
            Ready to implement {data.title.toLowerCase()}?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
            Leave an online request now! We will contact you during business hours and give you a 10% discount on equipment installation!
          </p>
          <Link
            to="/consultation"
            className="inline-block px-10 py-4 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-bold rounded-lg transition text-lg shadow-lg hover:shadow-xl"
          >
            Submit Request
          </Link>
        </div>
      </section>
    </div>
  );
}
