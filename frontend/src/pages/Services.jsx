import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart2, Users, Fuel, Thermometer, Video, MapPin, Cpu, FileText,
  ArrowRight, Check, ChevronDown, ChevronUp, Shield, Gauge, Zap, Package
} from "lucide-react";
import imgFood from "../assets/Produkty.png.webp";
import imgFreight from "../assets/GruzTransport.png.webp";
import imgPassenger from "../assets/PassazhirPerevozki.png.webp";
import imgTaxi from "../assets/Taxi.png.webp";
import imgConstruction from "../assets/StroyTechnika.png.webp";
import imgLeasing from "../assets/Lizing.png.webp";
import imgDangerous from "../assets/OpasnieGruzy.png.webp";
import imgAgri from "../assets/Selhoz.png.webp";
import imgGazprom from "../assets/GazpromMain.png.webp";
import rybricBg from "../assets/rybric-bg.png";
const faqs = [
  {
    q: "How do we price our services?",
    a: "Tekonika Systems has a flexible configuration system that allows you to receive only the services you need in the required quantity. We use service counters with a minimal step.",
  },
  {
    q: "What if the monitoring device breaks down?",
    a: "We will replace the device to minimize the time during which the object was unmonitored.",
  },
  {
    q: "Can a new feature or report be created?",
    a: "Tekonika Systems's monitoring services are constantly evolving thanks to our clients. We are always happy to help make your business even more efficient.",
  },
  {
    q: "How can you prove high service quality to your clients?",
    a: "We will set up data streaming from your objects into your customers' information systems.",
  },
];

const testimonials = [
  {
    company: "RENTASTROYTECHNIKA",
    service: "LOCATION & OPERATIONS",
    text: "Monitoring tire pressure and speed allowed us to increase our business margin by 7% by reducing downtime and extending tire life.",
    author: "Vyacheslav Levchenko",
    role: "Director",
    initials: "VL",
  },
  {
    company: "STS Group",
    service: "LOCATION & OPERATIONS",
    text: "With Tekonika Systems we achieved significant results in reducing operational costs at every stage of freight transportation of all types. Tekonika Systems's control services allowed us to combine transport monitoring of several companies into one system and set up automated reporting in 1C.",
    author: "Dmitry Gladkov",
    role: "Head of Transport Department",
    initials: "DG",
  },
  {
    company: "LLC Toyomi",
    service: "LOCATION & OPERATIONS",
    text: "Here we control everything — vehicles, office, employees. All in one application. Tech support is always available.",
    author: "Fedoseykin Valery",
    role: "CEO",
    initials: "FV",
  },
];

const capabilities = [
  {
    icon: Shield,
    title: "Monitor Safety",
    desc: "Protect your drivers and vehicles from accidents using driver attention monitoring devices.",
    links: [
      { label: "Trackers", href: "https://tekonika systems.online/product-category/business/trekery/" },
      { label: "Cameras", href: "https://tekonika systems.online/product-category/business/kamery/" },
    ],
  },
  {
    icon: MapPin,
    title: "Track Location",
    desc: "All necessary navigation and telemetry data about operations, including video streams and driver distraction recordings, in one system.",
    links: [{ label: "Live Location", href: "https://tekonika systems.online/mestonaxozhdenie-i-ekspluataciya/" }],
  },
  {
    icon: FileText,
    title: "Ensure Regulatory Compliance",
    desc: "The platform simplifies compliance with regulations, helps avoid violations and fines, and transmits required data to the RNIS for permits.",
    links: [{ label: "Relay Servers", href: "https://tekonika systems.online/servera-retranslyacii/" }],
  },
  {
    icon: Cpu,
    title: "Receive On-Board Computer Diagnostics",
    desc: "Minimize maintenance and repair costs. Continuous engine and system diagnostics extend uptime.",
    links: [],
  },
  {
    icon: Thermometer,
    title: "Monitor Additional Equipment",
    desc: "Trailers, refrigeration units, and the operation of attachments.",
    links: [{ label: "Climate Parameters", href: "https://tekonika systems.online/perevozka-produktov-pitaniya/" }],
  },
  {
    icon: Video,
    title: "Visual Facility Monitoring",
    desc: "Remote video surveillance with the ability to automatically notify about various situations.",
    links: [],
  },
  {
    icon: Package,
    title: "Control Delivery Order Execution",
    desc: "Automation of workflow monitoring operations reduces routine work time and improves business efficiency.",
    links: [
      { label: "Route Assignment Control", href: "https://tekonika systems.online/marshrutnye-zadaniya/" },
      { label: "Integration with 1C, SAP", href: "https://tekonika systems.online/api-dlya-integracii/" },
    ],
  },
  {
    icon: Gauge,
    title: "Automatically Generate & Send Reports",
    desc: "The system converts real-time data streams into useful information for subsequent analysis.",
    links: [],
  },
];

const services = [
  {
    Icon: BarChart2,
    title: "GLONASS/GPS Transport Monitoring",
    desc: "Real-time continuous monitoring of location, speed, mileage, and fuel consumption with history and analytics.",
    points: ["Online map with routes", "Trip history", "Geofences and alerts"],
    img: imgFreight,
  },
  {
    Icon: Users,
    title: "Driver Control",
    desc: "Monitoring driving style, compliance with work and rest schedules, and driver identification.",
    points: ["Driving style analysis", "Work and rest schedule", "Key-based identification"],
    img: imgGazprom,
  },
  {
    Icon: Fuel,
    title: "Fuel Consumption Control",
    desc: "Automatic detection of fuel theft, unauthorized refueling, and excessive fuel consumption.",
    points: ["Fuel level sensors", "Refueling reports", "Theft detection"],
    img: imgDangerous,
  },
  {
    Icon: Thermometer,
    title: "Temperature Control",
    desc: "Monitoring climate parameters of refrigerated transport with notifications.",
    points: ["Multiple cooling zones", "Data transmission to client", "Temperature archive"],
    img: imgFood,
  },
  {
    Icon: Zap,
    title: "Tire Pressure Monitoring",
    desc: "Online monitoring of tire pressure and temperature while driving and parked.",
    points: ["TPMS sensors", "Instant notifications", "Wear statistics"],
    img: imgTaxi,
  },
  {
    Icon: FileText,
    title: "Route Assignments",
    desc: "Automation of timely execution of route assignments (orders).",
    points: ["Task assignment", "Completion notifications", "1C integration"],
    img: imgConstruction,
  },
  {
    Icon: MapPin,
    title: "Employee Monitoring",
    desc: "Tracking employee locations — objective attendance records, cost optimization.",
    points: ["GPS/GLONASS trackers", "Working hours", "Geofences"],
    img: imgLeasing,
  },
  {
    Icon: Video,
    title: "Video Surveillance for Transport",
    desc: "Live streaming and video archive from inside the cab, passenger area, and exterior of the vehicle.",
    points: ["Live stream", "Cloud storage", "AI-powered analysis"],
    img: imgAgri,
  },
];

const solutions = [
  { title: "Efficiency", desc: "How Tekonika Systems increases the efficiency of your business", color: "border-[#4E8F89]" },
  { title: "Transportation Safety", desc: "Preventing accidents, incidents, and traffic violations through continuous monitoring", color: "border-[#f59e0b]" },
  { title: "Customer Loyalty", desc: "Improving service quality and transparency for clients through online data access", color: "border-[#4E8F89]" },
  { title: "Service Level", desc: "Real-time control over compliance with transport standards and regulations", color: "border-[#f59e0b]" },
  { title: "Threat Control", desc: "Protecting your business using access control systems, geofences, and emergency alerts", color: "border-[#4E8F89]" },
];

const industries = [
  { title: "Food Transportation", img: imgFood },
  { title: "Freight Transport", img: imgFreight },
  { title: "Passenger Transit", img: imgPassenger },
  { title: "Taxi Fleets", img: imgTaxi },
  { title: "Construction Equipment", img: imgConstruction },
  { title: "Leasing", img: imgLeasing },
  { title: "Dangerous Goods", img: imgDangerous },
  { title: "Agricultural Machinery", img: imgAgri },
  { title: "Municipal Transport", img: imgGazprom },
  { title: "Banking", img: imgFood },
  { title: "Manufacturing", img: imgFreight },
  { title: "Retail", img: imgConstruction },
  { title: "Pharmaceuticals", img: imgAgri },
  { title: "Medical Institutions", img: imgPassenger },
  { title: "Fuel & Energy", img: imgTaxi },
  { title: "Light Commercial Vehicles", img: imgLeasing },
];

const integrations = ["API", "Relay Servers", "Migration from Wialon", "GLONASS Installation"];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const displayedIndustries = showAllIndustries ? industries : industries.slice(0, 8);

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section
        className="relative min-h-[70vh] flex items-end pb-20 px-8 lg:px-24"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(5,15,25,0.96) 30%, rgba(5,15,25,0.55) 100%), url('${rybricBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full pt-36">
          <span className="inline-block bg-[#4E8F89]/20 text-[#4E8F89] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Our Capabilities
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight max-w-2xl mb-4">
            Fleet Monitoring Services
          </h1>
          <p className="text-white/60 text-lg max-w-xl mb-10">
            Full range of solutions for fleet control — from GLONASS to video surveillance
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/consultation" className="px-7 py-3 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-bold rounded transition text-sm">
              Get a Consultation
            </Link>
            <a href="#services" className="px-7 py-3 border border-white/20 text-white hover:bg-white/10 rounded transition text-sm">
              All Services
            </a>
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS ── */}
      <section className="bg-[#0d1b2a] py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BarChart2, title: "Online Control", desc: "For timely response to threats of additional costs" },
            { icon: Video, title: "Video Information", desc: "To improve safety and analyze non-standard situations" },
            { icon: FileText, title: "History & Reports", desc: "For strategic decisions based on collected data" },
            { icon: Cpu, title: "Integration", desc: "A unified information environment minimizes manual labor and provides a complete picture of fleet operations" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <Icon className="w-8 h-8 text-[#4E8F89] mb-4" />
              <h3 className="font-bold text-white mb-2 text-base">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS / ABOUT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0B1F33] mb-6 leading-tight">
                Continuous Data Collection & Analysis Across All Your Assets
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Tekonika Systems's cloud monitoring services collect data from trackers, sensors, cameras, and other devices — centralizing all operational information about your business in a convenient, modern unified interface.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Tekonika Systems today represents over <strong>17 million minutes of video footage</strong> and more than <strong>47 billion monitoring data points</strong> collected annually.
              </p>
              <p className="text-slate-700 text-sm font-semibold mb-3">Cost reduction in numbers:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-[#4E8F89] mt-0.5 shrink-0" />
                  <span><strong>35% less</strong> costs by eliminating non-targeted vehicle use</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-[#4E8F89] mt-0.5 shrink-0" />
                  <span>Fuel savings of <strong>25%</strong> by tracking fuel drain incidents</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-[#4E8F89] mt-0.5 shrink-0" />
                  <span><strong>20% reduction</strong> in repair costs through driving quality monitoring</span>
                </li>
              </ul>
              <a href="https://tekonika systems.online/uznat-cenu/" className="inline-flex items-center gap-2 mt-8 px-7 py-3 bg-[#4E8F89] hover:bg-[#3d7872] text-white font-bold rounded transition text-sm">
                Get a Price <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "12M+", label: "minutes of analyzed video" },
                { val: "1.4T", label: "data points collected annually" },
                { val: "7B+", label: "sensors and trackers installed" },
              ].map(({ val, label }) => (
                <div key={label} className="bg-[#EAF5F3] rounded-2xl p-6 text-center">
                  <div className="text-2xl font-black text-[#4E8F89] mb-2">{val}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{label}</p>
                </div>
              ))}
              <div className="col-span-3 bg-[#0d1b2a] rounded-2xl p-6">
                <p className="text-white/80 text-sm italic leading-relaxed">
                  "With Tekonika Systems we achieved significant results in reducing operational costs at every stage of freight transportation of all types using GLONASS monitoring devices from various manufacturers."
                </p>
                <p className="text-[#4E8F89] text-xs font-bold mt-3">— STS Logistics Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES — alternating rows ── */}
      <section id="services" className="py-20 bg-[#f7f8f9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#0B1F33] mb-3">Our Services</h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Comprehensive monitoring of all aspects of your fleet operations
            </p>
          </div>
          <div className="space-y-0 divide-y divide-gray-100">
            {services.map(({ Icon, title, desc, img, points }, i) => (
              <div key={title} className="grid lg:grid-cols-2 items-stretch min-h-[320px] bg-white">
                <div className={`relative overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={img} alt={title} className="w-full h-full object-cover min-h-[260px]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                </div>
                <div className={`flex flex-col justify-center px-10 py-12 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-[#4E8F89]/10 flex items-center justify-center mb-5">
                    {Icon && <Icon size={22} className="text-[#4E8F89]" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check size={14} className="text-[#4E8F89] shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#0B1F33] mb-3">
            Tekonika Systems is Deeply Integrated with All Major Monitoring Devices
          </h2>
          <p className="text-slate-400 text-sm mb-12">
            From leading global manufacturers — the list of models and protocols is constantly expanding.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map(({ icon: Icon, title, desc, links }) => (
              <div key={title} className="bg-[#f7f8f9] rounded-xl p-6 hover:shadow-md transition">
                <div className="w-10 h-10 rounded-lg bg-[#4E8F89]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#4E8F89]" />
                </div>
                <h3 className="font-bold text-[#0B1F33] text-sm mb-2 leading-snug">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">{desc}</p>
                {links.length > 0 && (
                  <div className="flex flex-col gap-1">
                    {links.map(({ label, href }) => (
                      <a key={label} href={href} className="text-[#4E8F89] text-xs font-semibold hover:underline flex items-center gap-1">
                        {label} <ArrowRight size={10} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section id="solutions" className="bg-[#0d1b2a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-3">Solutions</h2>
          <p className="text-white/40 text-sm mb-12">How our services solve your business challenges</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ title, desc, color }) => (
              <div key={title} className={`bg-white/5 border-t-2 ${color} rounded-xl p-6 hover:bg-white/10 transition cursor-pointer`}>
                <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                <div className="mt-5 flex items-center gap-1 text-[#4E8F89] text-xs font-medium">
                  Learn more <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="industries" className="py-20 bg-[#f7f8f9] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">By Industry</h2>
              <p className="text-gray-400 text-sm">Specialized solutions for every sector</p>
            </div>
            <button
              onClick={() => setShowAllIndustries(!showAllIndustries)}
              className="px-5 py-2.5 border border-[#4E8F89] text-[#4E8F89] text-sm rounded hover:bg-[#4E8F89] hover:text-white transition"
            >
              {showAllIndustries ? "Show Less" : "Show All"}
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayedIndustries.map(({ title, img }) => (
              <a key={title} href="#" className="group relative overflow-hidden rounded-xl aspect-[4/3] block">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold leading-snug">{title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#0B1F33] mb-12">Client Testimonials</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex lg:flex-col gap-2 lg:w-56 shrink-0">
              {testimonials.map((t, i) => (
                <button
                  key={t.company}
                  onClick={() => setActiveTestimonial(i)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-semibold transition ${
                    activeTestimonial === i
                      ? "bg-[#4E8F89] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {t.company}
                </button>
              ))}
            </div>
            <div className="flex-1 bg-[#f7f8f9] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#4E8F89] flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[activeTestimonial].initials}
                </div>
                <div>
                  <p className="font-bold text-[#0B1F33] text-sm">{testimonials[activeTestimonial].author}</p>
                  <p className="text-slate-400 text-xs">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              <p className="text-[#4E8F89] text-xs font-semibold uppercase tracking-wider mb-4">
                {testimonials[activeTestimonial].service}
              </p>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "{testimonials[activeTestimonial].text}"
              </p>
              <p className="mt-4 font-bold text-[#0B1F33] text-sm">{testimonials[activeTestimonial].company}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#0d1b2a] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="flex items-center gap-4 text-white font-semibold text-sm">
                    <span className="text-[#4E8F89] font-black text-base">0{i + 1}</span>
                    {faq.q}
                  </span>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 text-[#4E8F89] shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-white/40 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section id="integrations" className="bg-[#4E8F89] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Integrations</h2>
            <p className="text-white/70 text-sm">Connect to your existing systems</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {integrations.map((item) => (
              <a key={item} href="#" className="px-5 py-2.5 bg-white text-[#4E8F89] text-sm font-bold rounded-full hover:bg-[#EAF5F3] transition">
                {item}
              </a>
            ))}
          </div>
          <Link
            to="/consultation"
            className="px-7 py-3 bg-[#f59e0b] hover:bg-[#ffae00] text-black text-sm font-bold rounded transition whitespace-nowrap shrink-0"
          >
            Connect Now
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#4E8F89] font-bold text-sm uppercase tracking-widest mb-4">SPECIAL OFFER!</p>
          <h2 className="text-3xl lg:text-4xl font-black text-[#0B1F33] mb-6">
            Submit a Request Online Now!
          </h2>
          <p className="text-slate-500 text-base mb-8">
            We will contact you during business hours and give you a <strong>10% discount!</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="px-8 py-4 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-bold rounded-lg transition text-base"
            >
              Submit a Request
            </Link>
            <a
              href="https://t.me/UfinSupportEc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#229ED9] hover:bg-[#1a8bc4] text-white font-bold rounded-lg transition text-base"
            >
              Telegram Chat
            </a>
          </div>
          <p className="text-slate-400 text-xs mt-6">Mon–Fri: 9:00–18:00 · Tech Support 24/7</p>
        </div>
      </section>

    </div>
  );
}
