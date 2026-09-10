import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Check,
  ArrowRight,
  ShieldCheck,
  Activity,
  AlertTriangle,
  Eye,
  Phone,
  Video,
  Cpu,
  Layers,
  Sparkles,
  Send,
  User,
  Building,
  CheckCircle2,
} from "lucide-react";

// Local assets
import sceneDriver from "../assets/driver.png";
import sceneHighway from "../assets/about-highway.png";
import sceneVideo from "../assets/video.png";
import sceneTrucks from "../assets/trucks.png";
import devMrv from "../assets/mrv-21.jpg";
import devMdas from "../assets/mdas-9.jpg";
import devMdsm from "../assets/mdsm-7.jpg";
import img24Client from "../assets/companies/img-24-e1674854414374.png.webp";
import gazpromClient from "../assets/companies/GazpromMain.png.webp";
import logoSts from "../assets/sts-logo.svg";
import logoGazprom from "../assets/GazpromMain.png.webp";
import portraitDirector from "../assets/chulsky-portrait.png";
import portraitZhokhov from "../assets/osipov-portrait.png";

// Generated high-definition photo assets
import truckArHud from "../assets/truck_ar_hud.jpg";
import adasWindshield from "../assets/adas_windshield.jpg";
import driverCabinTablet from "../assets/driver_cabin_tablet.jpg";
import videoMonitoringDiag from "../assets/video_monitoring_diag.jpg";
import yellowTruckCab from "../assets/yellow_truck_cab.jpg";

export default function DriverControlPage({ data }) {
  // Device tab state
  const [activeDeviceTab, setActiveDeviceTab] = useState(0);

  // Tariff selector state
  const [activeTariffIndex, setActiveTariffIndex] = useState(0);

  // Lead form state
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) return;
    setFormSubmitted(true);
  };

  // Device tabs data
  const devices = [
    {
      tabTitle: "All-in-one ADAS & DSM",
      name: "MRV-21 — Integrated ADAS & DSM System",
      modelBadge: "MRV-21 • 77 GHz Radar + Camera",
      image: devMrv,
      desc: "The world's first integrated advanced driver assistance system with 77 GHz radar and smart AI camera, installable on the windshield of buses, cars, and commercial trucks. Thanks to built-in millimeter-wave radar technology, it provides high-precision road monitoring in adverse weather conditions (fog, heavy rain, nighttime, and direct sunlight).",
      points: [
        "Warns the driver with indicators, audio signals, and vibration about dangerous situations",
        "All video, including violations, is recorded directly to the device's internal SD card",
        "Sends event videos to the customer's cloud server over 4G LTE; can work as an online dashcam",
        "Identifies the driver and analyzes their health and alertness condition behind the wheel",
      ],
    },
    {
      tabTitle: "Separate ADAS & DSM cameras",
      name: "MDAS-9 + MDSM-7 Dual Camera Configuration",
      modelBadge: "MDAS-9 • Dual Unit + In-Cab Display",
      image: devMdas,
      desc: "A modular, two-camera configuration separating road monitoring from cabin surveillance. The forward-facing MDAS-9 system tracks road lanes, traffic signs, and pedestrian threats, while the MDSM-7 cabin camera continuously tracks the driver's eye movements, blinking frequency, and posture.",
      points: [
        "Forward collision warning (FCW) and lane departure warning (LDW) at speeds up to 130 km/h",
        "Pedestrian and cyclist collision warning (PCW) with active nighttime recognition",
        "High-sensitivity infrared camera detects microsleep and eye closure even through sunglasses",
        "Dual-channel synchronised video stream recording with speed, time, and coordinates overlay",
      ],
    },
    {
      tabTitle: "DSM driver fatigue camera",
      name: "MDSM-7 Intelligent Driver State Monitor",
      modelBadge: "MDSM-7 • Infrared AI Fatigue Sensor",
      image: devMdsm,
      desc: "A dedicated AI-powered intelligent camera focused exclusively on driver fatigue, distraction, and hazardous habits. Built-in neural network algorithms process facial landmarks in fractions of a second to prevent accidents before they happen.",
      points: [
        "Instant acoustic alarm upon detecting eye closure exceeding 1.5 seconds or yawning",
        "Identifies mobile phone usage, texting, and smoking behind the wheel",
        "Alerts when the driver's gaze drifts away from the road for more than 2 seconds",
        "Compact form factor easily mounts on the dashboard or A-pillar with zero obstruction to vision",
      ],
    },
  ];

  // Tariffs data
  const tariffs = [
    {
      id: "standard",
      name: "Standard Driver Monitoring",
      price: "₽349",
      period: "/ vehicle / mo",
      desc: "Essential fatigue and distraction tracking for fleet safety",
      badge: "Popular for Delivery Fleets",
      features: [
        "24/7 cloud monitoring platform access",
        "Real-time fatigue & distraction alarms",
        "Mobile phone usage & smoking alerts",
        "Driver rating & fleet safety report",
        "Web dispatcher portal & mobile app",
        "Standard technical support",
      ],
    },
    {
      id: "optimal",
      name: "Optimal (ADAS + DSM)",
      price: "₽749",
      period: "/ vehicle / mo",
      desc: "Full road collision warning combined with driver alertness",
      badge: "Recommended for Cargo",
      features: [
        "All features of Standard plan",
        "Forward collision warning (FCW)",
        "Lane departure warning (LDW)",
        "Pedestrian & cyclist detection (PCW)",
        "Automated 4G LTE event video clip upload",
        "Priority 24/7 technical assistance",
      ],
    },
    {
      id: "video",
      name: "Video Online & Telematics",
      price: "₽1,449",
      period: "/ vehicle / mo",
      desc: "Live video streaming and unlimited high-speed telematics",
      badge: "Maximum Visibility",
      features: [
        "All features of Optimal plan",
        "Live on-demand video streaming from cabin & road",
        "Unlimited high-speed video traffic included",
        "30-day cloud video incident storage",
        "REST API integration with 1C, SAP & ERP",
        "Personal dedicated account manager",
      ],
    },
    {
      id: "turnkey",
      name: "Turnkey Hardware Package",
      price: "₽14,999",
      period: "/ vehicle one-time",
      desc: "Complete hardware set with certified on-site installation",
      badge: "Hardware & Setup",
      features: [
        "MRV-21 or MDAS-9 + MDSM-7 hardware set",
        "Certified on-site installation & camera calibration",
        "Connecting to CAN bus & vehicle electrical system",
        "Initial staff & dispatcher training session",
        "2-year comprehensive device warranty",
        "Free 14-day cloud trial included",
      ],
    },
  ];

  const currentDevice = devices[activeDeviceTab];

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
              <Link
                to="/consultation"
                className="px-8 py-4 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition shadow-lg text-base"
              >
                Try free — 2 weeks
              </Link>
              <a
                href="#basic-devices"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold hover:bg-white/10 rounded-xl transition text-base backdrop-blur-sm"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR (KEPT UNCHANGED) ── */}
      {data.stats?.length > 0 && (
        <section className="bg-[#0B1F33] py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
              {data.stats.map((s, i) => (
                <div key={i} className={i !== 0 ? "pl-4" : ""}>
                  <div className="text-3xl lg:text-4xl font-black text-[#4E8F89] mb-1">{s.value}</div>
                  <div className="text-white/60 text-xs md:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION A: BASIC CONTROL DEVICES ── */}
      <section id="basic-devices" className="py-20 px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0B1F33] mb-3">
              Basic control devices
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">
              Select the optimal hardware architecture tailored to your vehicle types and route difficulty.
            </p>
          </div>

          <div className="grid lg:grid-cols-[380px_1fr] gap-10 items-start">
            {/* Left buttons / tabs */}
            <div className="flex flex-col gap-3">
              {devices.map((dev, idx) => {
                const isActive = activeDeviceTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveDeviceTab(idx)}
                    className={`text-left p-5 rounded-2xl transition-all duration-300 transform font-bold text-base flex items-center justify-between shadow-sm cursor-pointer ${
                      isActive
                        ? "bg-[#f59e0b] text-black shadow-amber-200 ring-2 ring-[#f59e0b] translate-x-2"
                        : "bg-[#093530] text-white hover:bg-[#0c443e] hover:translate-x-1.5 active:scale-98"
                    }`}
                  >
                    <span>{dev.tabTitle}</span>
                    <ChevronRight size={18} className={`transition-transform duration-300 ${isActive ? "text-black translate-x-1" : "text-white/70"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right card content with animated tab switch */}
            <div
              key={activeDeviceTab}
              className="bg-[#f8faf9] rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-sm card-tab-transition"
            >
              <div className="rounded-2xl overflow-hidden mb-8 border border-slate-200/80 bg-white p-6 sm:p-8 h-[280px] sm:h-[320px] flex items-center justify-center relative group shadow-sm transition-shadow duration-300 hover:shadow-md">
                <div className="absolute top-4 right-4 bg-slate-100 border border-slate-200 rounded-lg px-3 py-1 text-xs font-bold text-slate-600 shadow-xs">
                  {currentDevice.modelBadge}
                </div>
                <img
                  src={currentDevice.image}
                  alt={currentDevice.name}
                  className="max-h-full max-w-full h-auto w-auto object-contain mx-auto drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-black text-[#0B1F33] mb-4">
                {currentDevice.name}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-base">
                {currentDevice.desc}
              </p>

              <div className="grid sm:grid-cols-2 gap-3.5 mb-8">
                {currentDevice.points.map((pt, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 card-hover-lift group cursor-default"
                  >
                    <Check size={18} className="text-[#4E8F89] group-hover:text-[#f59e0b] shrink-0 mt-0.5 transition-colors duration-200" />
                    <span className="text-slate-700 text-sm font-medium leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/consultation"
                  className="px-6 py-3 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200"
                >
                  Request specification
                </Link>
                <Link
                  to="/resources/equipment"
                  className="px-6 py-3 bg-[#093530] hover:bg-[#0c443e] text-white font-bold rounded-xl transition text-sm hover:shadow hover:-translate-y-0.5 duration-200"
                >
                  View all hardware
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION B: DARK GREEN "WHAT IS ADAS / DSM?" ── */}
      <section className="py-20 px-6 lg:px-8 bg-[#062620] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#f59e0b] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 mb-3 inline-block">
              AI Safety Architecture
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              What is ADAS / DSM?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left image: driver in car cabin with tablet */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={driverCabinTablet}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = sceneHighway;
                }}
                alt="Driver in cabin with monitoring tablet"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-sm font-semibold text-white/90">
                  Continuous cabin monitoring &amp; route telemetry screen
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                Dual AI Safety: Monitoring Road Situation &amp; Driver Condition 24/7
              </h3>
              <p className="text-white/80 leading-relaxed">
                Advanced Driver Assistance Systems (ADAS) and Driver State Monitoring (DSM) operate synergistically to eliminate accident risks caused by both external road hazards and internal driver fatigue or distraction.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:translate-x-2 cursor-default group">
                  <ShieldCheck size={18} className="text-[#f59e0b] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-white/90 text-sm">
                    <strong>Dangerous proximity</strong> — frontal collision and safe following distance threat detection
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:translate-x-2 cursor-default group">
                  <Activity size={18} className="text-[#f59e0b] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-white/90 text-sm">
                    <strong>Pedestrian &amp; cyclist recognition</strong> — critical warnings on urban routes and at nighttime
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:translate-x-2 cursor-default group">
                  <AlertTriangle size={18} className="text-[#f59e0b] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-white/90 text-sm">
                    <strong>Lane departure alert (LDW)</strong> — warning if vehicle drifts without turn signal
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:translate-x-2 cursor-default group">
                  <Eye size={18} className="text-[#4E8F89] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-white/90 text-sm">
                    <strong>Drowsiness, microsleep &amp; yawning</strong> — instant alert within 1.5 seconds of eye closure
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:translate-x-2 cursor-default group">
                  <Phone size={18} className="text-[#4E8F89] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-white/90 text-sm">
                    <strong>Smartphone distraction &amp; smoking</strong> — automated logging of dangerous behind-the-wheel habits
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width callout text */}
          <div className="bg-[#0b3830] border border-[#4E8F89]/30 rounded-2xl p-8 mb-12 text-center max-w-4xl mx-auto shadow-lg transition-transform duration-300 hover:scale-[1.01]">
            <p className="text-lg text-white/95 leading-relaxed font-medium">
              The system uses computer vision and neural networks to detect deviations in driving behavior, issuing instant sound and visual alarms to prevent accidents before they happen.
            </p>
          </div>

          {/* Numbered benefit stats */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-5 bg-white/5 p-6 rounded-2xl border border-white/10 card-hover-lift-dark group cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-[#f59e0b] text-black font-black text-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#f59e0b] transition-colors duration-200">Reduce Accident Rate by Up to 40%</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Eliminates the human factor of inattention, microsleep, and delayed braking reaction, protecting driver lives and high-value cargo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 bg-white/5 p-6 rounded-2xl border border-white/10 card-hover-lift-dark group cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-[#4E8F89] text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#4E8F89] transition-colors duration-200">Instant Dispatcher Alert &amp; Rating</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Automated short video clips are transmitted to cloud dispatchers with GPS data, calculating objective driver safety ratings across your entire fleet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION C: WIDE TRUCK COCKPIT AR HUD BANNER ── */}
      <section className="relative w-full overflow-hidden bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <img
              src={sceneDriver}
              alt="Truck Cockpit with AR HUD Assistance"
              className="w-full h-[420px] lg:h-[520px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
              <span className="inline-block bg-[#f59e0b] text-black font-extrabold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3 w-fit">
                Active Telematics In Action
              </span>
              <h3 className="text-2xl lg:text-4xl font-black text-white max-w-2xl leading-tight drop-shadow-md">
                Augmented Reality Road Guidance &amp; Smart Object Detection
              </h3>
              <p className="text-white/80 text-sm lg:text-base max-w-2xl mt-2 drop-shadow">
                Continuous radar and camera telemetry monitors lane boundaries, safe following distance, and obstacles in all driving conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION D: CONNECTING A VIDEO MONITORING SYSTEM ── */}
      <section className="py-20 px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0B1F33] mb-4">
              Connecting the video monitoring system
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-base leading-relaxed">
              How Tekonika Systems deploys and runs intelligent video telematics across commercial transport fleets.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#f8faf9] hover:bg-white p-8 rounded-3xl border border-slate-200/80 hover:border-[#4E8F89]/40 card-hover-lift group flex flex-col cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-[#093530] text-white flex items-center justify-center font-black text-lg mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#4E8F89] transition-all duration-300">
                01
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] mb-3 group-hover:text-[#093530] transition-colors">
                On-Board Hardware Installation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                Certified technicians fit the forward-looking ADAS unit behind the rearview mirror, install the high-sensitivity infrared DSM camera on the A-pillar, and wire the terminal to the vehicle CAN bus and electrical circuit.
              </p>
            </div>

            <div className="bg-[#f8faf9] hover:bg-white p-8 rounded-3xl border border-slate-200/80 hover:border-[#f59e0b]/50 card-hover-lift group flex flex-col cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-[#f59e0b] text-black flex items-center justify-center font-black text-lg mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#ffae00] transition-all duration-300">
                02
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] mb-3 group-hover:text-[#f59e0b] transition-colors">
                Edge AI Risk Recognition
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                Embedded neural network processors analyze road lanes and driver posture in real time. If the driver nods off, looks at their phone, or approaches the preceding vehicle dangerously fast, the device beeps loudly inside the cab.
              </p>
            </div>

            <div className="bg-[#f8faf9] hover:bg-white p-8 rounded-3xl border border-slate-200/80 hover:border-[#4E8F89]/40 card-hover-lift group flex flex-col cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-[#4E8F89] text-white flex items-center justify-center font-black text-lg mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#3d7772] transition-all duration-300">
                03
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] mb-3 group-hover:text-[#4E8F89] transition-colors">
                Automated 4G Cloud Telemetry
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                A 15-second video recording (5 seconds before the event and 10 seconds after) is immediately dispatched over 4G LTE to the cloud server, cataloged with location coordinates, speed, and severity rating.
              </p>
            </div>
          </div>

          {/* Feature highlights grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-[#EAF5F3] hover:bg-white border border-[#4E8F89]/20 hover:border-[#4E8F89]/40 card-hover-lift group transition-all duration-300 cursor-default">
              <Video className="text-[#4E8F89] group-hover:text-[#f59e0b] group-hover:scale-110 mb-3 transition-all duration-300" size={24} />
              <h4 className="font-bold text-[#0B1F33] text-base mb-1">On-Demand Streaming</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Connect to live video from cabin and forward cameras anytime directly via web browser.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#EAF5F3] hover:bg-white border border-[#4E8F89]/20 hover:border-[#4E8F89]/40 card-hover-lift group transition-all duration-300 cursor-default">
              <User className="text-[#4E8F89] group-hover:text-[#f59e0b] group-hover:scale-110 mb-3 transition-all duration-300" size={24} />
              <h4 className="font-bold text-[#0B1F33] text-base mb-1">Driver Face ID</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Automatic driver identification ensures only authorized personnel operate the vehicle.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#EAF5F3] hover:bg-white border border-[#4E8F89]/20 hover:border-[#4E8F89]/40 card-hover-lift group transition-all duration-300 cursor-default">
              <Layers className="text-[#4E8F89] group-hover:text-[#f59e0b] group-hover:scale-110 mb-3 transition-all duration-300" size={24} />
              <h4 className="font-bold text-[#0B1F33] text-base mb-1">Fleet Safety Scoring</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Individual driver safety scorecards highlight risky behaviors and encourage defensive driving.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#EAF5F3] hover:bg-white border border-[#4E8F89]/20 hover:border-[#4E8F89]/40 card-hover-lift group transition-all duration-300 cursor-default">
              <Cpu className="text-[#4E8F89] group-hover:text-[#f59e0b] group-hover:scale-110 mb-3 transition-all duration-300" size={24} />
              <h4 className="font-bold text-[#0B1F33] text-base mb-1">ERP &amp; 1C Integration</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Seamless REST API integration with 1C:Enterprise, SAP, and internal dispatch platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION E: THE ROLE OF THE DISPATCHER (DARK GREEN FULL-WIDTH BANNER) ── */}
      <section className="py-16 px-6 lg:px-8 bg-[#093530] text-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-block bg-white/10 text-[#f59e0b] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
            Command Center Operations
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-white">
            The role of the dispatcher
          </h2>
          <p className="text-white/85 text-lg leading-relaxed max-w-4xl mx-auto">
            All information received from driver monitoring and assistance devices is transmitted to the cloud platform in real time for subsequent analysis, rating, and reporting.
          </p>
          <p className="text-white/70 text-base leading-relaxed max-w-4xl mx-auto">
            Tekonika Systems sends instant push notifications to dispatchers regarding the most critical ADAS events (dangerous proximity, speeding) and DSM events (drowsiness, microsleep, mobile phone use) so that the responsible personnel can immediately contact the driver and prevent potential accidents.
          </p>
        </div>
      </section>

      {/* ── SECTION F: ONLINE VIDEO MONITORING SYSTEM ── */}
      <section className="py-20 px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text description */}
          <div className="space-y-6">
            <span className="text-[#4E8F89] text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#EAF5F3] inline-block">
              Cloud Telematics
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0B1F33] leading-tight">
              Online Video Monitoring System
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Complete remote control over your vehicle fleet in real time. Watch live video streams from multiple cameras, review recorded incident clips, inspect exact GPS/GLONASS coordinates, speed, and fuel consumption simultaneously in one unified dashboard.
            </p>

            <ul className="space-y-3.5 pt-2">
              <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                <Check size={18} className="text-[#4E8F89] shrink-0 mt-0.5" />
                <span>Live video streaming from in-cabin and road cameras with minimal latency</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                <Check size={18} className="text-[#4E8F89] shrink-0 mt-0.5" />
                <span>Synchronized route timeline with video playback and sensor graphs</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                <Check size={18} className="text-[#4E8F89] shrink-0 mt-0.5" />
                <span>Automated push and SMS notifications on critical violation events</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                <Check size={18} className="text-[#4E8F89] shrink-0 mt-0.5" />
                <span>Accessible on iOS, Android, and all modern web browsers</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition shadow-lg text-base"
              >
                Order demonstration <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right diagram illustration */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4 sm:p-6 flex items-center justify-center">
            <img
              src={videoMonitoringDiag}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = sceneVideo;
              }}
              alt="Online video telematics diagram"
              className="w-full h-auto max-h-[420px] object-contain rounded-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION G: OUR SOLUTIONS ARE USED BY (MINT / TEAL BACKGROUND) ── */}
      <section className="py-20 px-6 lg:px-8 bg-[#EAF3F1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#093530] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/60 mb-2 inline-block">
              Trusted by Fleet Leaders
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0B1F33]">
              Our solutions are used by
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: STS Logistic */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/80 card-hover-lift group transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={img24Client}
                  alt="STS Logistic Fleet"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md group-hover:shadow-lg border border-slate-100 flex items-center gap-2 group-hover:-translate-y-0.5 transition-all duration-300">
                  <img src={logoSts} alt="STS" className="h-6 object-contain" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#0B1F33] mb-3 group-hover:text-[#4E8F89] transition-colors">
                  STS Logistic
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Over 120 commercial delivery vehicles equipped with AI driver fatigue and attention monitoring. Reduced transit damage, eradicated distracted smartphone usage, and lowered repair costs by 35%.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-[#4E8F89]">
                  <CheckCircle2 size={16} /> Commercial Express Logistics
                </div>
              </div>
            </div>

            {/* Card 2: Gazprom Mezhregiongaz */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/80 card-hover-lift group transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={gazpromClient}
                  alt="Gazprom Fleet"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md group-hover:shadow-lg border border-slate-100 flex items-center gap-2 group-hover:-translate-y-0.5 transition-all duration-300">
                  <span className="text-xs font-black text-[#093530]">GAZPROM MEZHREGIONGAZ</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#0B1F33] mb-3 group-hover:text-[#4E8F89] transition-colors">
                  Gazprom Mezhregiongaz
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Long-haul specialized tankers and fuel transportation fleets equipped with dual ADAS &amp; DSM systems. Zero severe traffic accidents across intercity routes over 18 continuous months of operation.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-[#4E8F89]">
                  <CheckCircle2 size={16} /> Hazardous Fuel &amp; Gas Haulage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION H: WHERE TO START + SUBMIT REQUEST FORM (DARK GREEN) ── */}
      <section className="py-20 px-6 lg:px-8 bg-[#093530] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_420px] gap-14 items-start">
          {/* Left: 4 steps */}
          <div>
            <span className="text-[#f59e0b] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 mb-4 inline-block">
              Clear Implementation Roadmap
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-10">
              Where to start?
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 hover:border-white/30 card-hover-lift-dark group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#f59e0b] group-hover:bg-[#ffae00] text-black font-black text-base flex items-center justify-center mb-4 shadow group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f59e0b] transition-colors">Leave a request</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Submit an inquiry on our site or call our support line. Tell us about your fleet composition and objectives.
                </p>
              </div>

              <div className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 hover:border-white/30 card-hover-lift-dark group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#f59e0b] group-hover:bg-[#ffae00] text-black font-black text-base flex items-center justify-center mb-4 shadow group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f59e0b] transition-colors">Consultation &amp; Spec</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Our telematics experts audit your fleet requirements and select the ideal hardware configuration and bracket mounts.
                </p>
              </div>

              <div className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 hover:border-white/30 card-hover-lift-dark group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#f59e0b] group-hover:bg-[#ffae00] text-black font-black text-base flex items-center justify-center mb-4 shadow group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f59e0b] transition-colors">Installation &amp; Calibration</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Certified installation engineers fit and calibrate devices at your vehicle depot or our specialized technical center.
                </p>
              </div>

              <div className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 hover:border-white/30 card-hover-lift-dark group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#f59e0b] group-hover:bg-[#ffae00] text-black font-black text-base flex items-center justify-center mb-4 shadow group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f59e0b] transition-colors">Training &amp; Launch</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We activate cloud access, set up alert thresholds, and train your dispatchers and safety team to monitor real-time data.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Submit Request Form Card */}
          <div className="bg-white text-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-black text-[#0B1F33] mb-2">
              Submit a request
            </h3>
            <p className="text-slate-500 text-xs mb-6">
              Get an individual fleet calculation and a 14-day free pilot trial.
            </p>

            {/* Specialist badge */}
            <div className="flex items-center gap-3.5 bg-[#f8faf9] p-3.5 rounded-2xl border border-slate-100 mb-6">
              <img
                src={portraitZhokhov}
                alt="Maxim Zhokhov"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#4E8F89]"
              />
              <div>
                <div className="font-bold text-sm text-[#0B1F33]">Maxim Zhokhov</div>
                <div className="text-xs text-slate-500">Head of Innovation &amp; Telematics</div>
              </div>
            </div>

            {formSubmitted ? (
              <div className="bg-[#EAF5F3] p-6 rounded-2xl text-center space-y-3">
                <CheckCircle2 size={40} className="text-[#4E8F89] mx-auto" />
                <h4 className="font-bold text-[#0B1F33] text-lg">Thank You!</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Your request has been registered. Our fleet safety specialist will contact you within 15 minutes during business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Alexey Smirnov"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#4E8F89]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#4E8F89]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#093530] hover:bg-[#0c443e] text-white font-extrabold rounded-xl transition shadow-lg text-sm flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Submit request
                </button>

                <p className="text-[11px] text-slate-400 text-center leading-tight">
                  By clicking submit, you consent to the processing of personal data.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── SECTION I: EXPERTISE / REVIEWS (DARK FOREST GREEN) ── */}
      <section className="py-20 px-6 lg:px-8 bg-[#062620] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[#f59e0b] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 mb-2 inline-block">
              Client Feedback
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Experience
            </h2>
            <p className="text-white/60 text-sm mt-1">
              What transport company directors say after deploying our driver control system
            </p>
          </div>

          <div className="bg-[#0b3830] rounded-3xl border border-white/10 overflow-hidden grid lg:grid-cols-[180px_1fr_220px] items-center shadow-2xl card-hover-lift-dark group transition-all duration-300">
            {/* Portrait */}
            <div className="h-full bg-slate-900/60 flex items-center justify-center p-6">
              <img
                src={portraitDirector}
                alt="Fleet Director"
                className="w-32 h-32 lg:w-36 lg:h-36 rounded-2xl object-cover grayscale contrast-125 border-2 border-white/20 shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Quote content */}
            <div className="p-8 lg:p-10 space-y-4">
              <p className="text-white/90 text-base lg:text-lg italic leading-relaxed">
                "After equipping our 45 long-haul trucks with the driver fatigue monitoring system, we recorded zero fatigue-related accidents over 14 continuous months. The system alerted drivers twice to severe microsleep episodes during late night hauls, directly preventing catastrophic collisions."
              </p>
              <div>
                <h4 className="font-bold text-white text-base group-hover:text-[#f59e0b] transition-colors">Sergey Chulsky</h4>
                <p className="text-[#f59e0b] text-xs font-semibold">
                  Logistics &amp; Fleet Operations Director — TransInterLog
                </p>
              </div>
            </div>

            {/* Right truck image + arrow button */}
            <div className="relative h-full min-h-[200px] lg:min-h-full overflow-hidden flex items-center justify-center bg-black/40">
              <img
                src={yellowTruckCab}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = sceneTrucks;
                }}
                alt="Fleet Trucks"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <Link
                to="/reviews"
                className="absolute w-12 h-12 rounded-full bg-[#f59e0b] hover:bg-[#ffae00] text-black flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-115 hover:rotate-6 active:scale-95"
                title="View all case studies"
              >
                <ChevronRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION J: TARIFFS FOR SERVICE / DEVICES ── */}
      <section className="py-20 px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#4E8F89] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#EAF5F3] mb-2 inline-block">
              Transparent Pricing
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0B1F33] mb-3">
              Tariffs for service / devices
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">
              Choose the subscription or hardware tier that best fits your vehicle count and risk tolerance.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            {/* Left tariffs accordion selector */}
            <div className="space-y-4">
              {tariffs.map((t, i) => {
                const isSelected = activeTariffIndex === i;
                return (
                  <div
                    key={t.id}
                    onClick={() => setActiveTariffIndex(i)}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 border ${
                      isSelected
                        ? "bg-white border-[#f59e0b] shadow-xl ring-2 ring-[#f59e0b]/50 translate-x-1"
                        : "bg-[#f8faf9] border-slate-200 hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-extrabold text-[#0B1F33] text-lg">
                            {t.name}
                          </h3>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#EAF5F3] text-[#4E8F89]">
                            {t.badge}
                          </span>
                        </div>
                        <p className="text-slate-500 text-xs">{t.desc}</p>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-2xl font-black text-[#0B1F33]">
                          {t.price}
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium">
                          {t.period}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right checklist card with animated change */}
            <div
              key={activeTariffIndex}
              className="bg-[#f8faf9] rounded-3xl p-8 border border-slate-200 shadow-sm card-tab-transition"
            >
              <div className="mb-6">
                <span className="text-xs uppercase font-extrabold text-[#f59e0b] tracking-wider">
                  Included in Plan:
                </span>
                <h4 className="text-xl font-black text-[#0B1F33] mt-1">
                  {tariffs[activeTariffIndex].name}
                </h4>
                <div className="text-3xl font-black text-[#4E8F89] mt-2">
                  {tariffs[activeTariffIndex].price}
                  <span className="text-xs text-slate-400 font-normal"> {tariffs[activeTariffIndex].period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tariffs[activeTariffIndex].features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-slate-700 group cursor-default">
                    <div className="w-5 h-5 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-[#f59e0b] group-hover:text-white transition-all duration-200">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span className="group-hover:text-slate-900 transition-colors">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">Questions? Call 24/7:</div>
                  <a href="tel:88004440481" className="font-extrabold text-sm text-[#0B1F33] hover:text-[#4E8F89] transition">
                    8 (800) 444-04-81
                  </a>
                </div>
                <Link
                  to="/consultation"
                  className="px-8 py-3.5 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition text-sm text-center shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200"
                >
                  Order connection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION K: BOTTOM CTA (KEPT UNCHANGED AS REQUESTED) ── */}
      <section className="bg-[#4E8F89] py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-6">
            Ready to implement {data.title.toLowerCase()}?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Leave an online request now! We will contact you during business hours and give you a 10% discount!
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
