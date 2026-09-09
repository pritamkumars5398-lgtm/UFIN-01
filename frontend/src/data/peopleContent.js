// Content for the consumer-facing ("People" / B2C) section.
// Adapted into English from the reference site under the Tekonika Systems brand.

import imgFamily from "../assets/employees.png";
import imgCompass from "../assets/compass.png";
import imgCar from "../assets/driver.png";
import imgRoad from "../assets/about-highway.png";
import imgTransport from "../assets/transport.png";
import imgTrucks from "../assets/trucks.png";
import imgOutdoor from "../assets/rybric-bg.png";
import imgPet from "../assets/img-24-e1674854414374.png.webp";
import imgFarm from "../assets/Selhoz.png.webp";
import imgField from "../assets/world-map-grey.png";

/* ─────────────────────────  LANDING  ───────────────────────── */

export const peopleLanding = {
  hero: {
    title: "GPS trackers for people",
    tagline: "Our job is to keep safe the ones you care about.",
    cta: "Order a tracker",
    image: imgFamily,
  },
  proof: {
    quote: "Both cars, mum, the dog and the kids. All in one app.",
    author: "The Dronov family",
  },
  steps: [
    { title: "Buy a tracker", desc: "Pick a device for a car, a person or a pet — or use your phone as a tracker." },
    { title: "Set it up", desc: "Install the app for iOS or Android, insert a SIM and add the object in a couple of minutes." },
    { title: "Keep watch", desc: "See everyone on one map, get alerts for arrivals, departures and important events." },
  ],
  audience: [
    { key: "relatives-friends", label: "Relatives & friends" },
    { key: "automobile", label: "Automobile" },
    { key: "scooter", label: "Scooter" },
    { key: "bike", label: "Bike" },
    { key: "motorbike", label: "Motorbike" },
    { key: "atv", label: "ATV" },
    { key: "quadcopter", label: "Quadcopter" },
    { key: "dogs", label: "Dogs" },
    { key: "cats", label: "Cats" },
    { key: "horses", label: "Horses" },
  ],
  testimonials: [
    { name: "Maria Potapova", city: "Kazan", text: "I stopped calling my son ten times a day. I just open the app and see he's at school." },
    { name: "Alexander Gubin", city: "Yekaterinburg", text: "The beacon in the car saved me once already — I could tell the police exactly where it was." },
    { name: "Vitaly Kochegarov", city: "Novosibirsk", text: "Put a collar tracker on the dog before the hunting season. Found her the same evening." },
    { name: "Elena Sorokina", city: "Rostov-on-Don", text: "My parents are elderly, the SOS button gives the whole family peace of mind." },
  ],
  faqs: [
    { q: "Do I need a special SIM card?", a: "Any SIM with a data plan works. For older tracker models the voice channel should also be enabled. We can supply a pre-configured SIM with the device." },
    { q: "How long does the battery last?", a: "From 3–5 days for a compact personal tracker in active mode to several months for a magnetic beacon in power-saving mode. Wired car trackers run off the vehicle." },
    { q: "Can I use my phone instead of a tracker?", a: "Yes. The Tekonika Systems app turns any Android or iOS phone into a personal tracker for family sharing." },
    { q: "Is this legal?", a: "Tracking your own vehicle, your own property or a minor child in your care is legal. Tracking another adult requires their consent." },
    { q: "What does it cost?", a: "Equipment from 5 900 ₽ and a subscription from 199 ₽ per month, billed per object. See the tariffs page for details." },
  ],
};

/* ─────────────────────────  TARIFFS  ───────────────────────── */

export const peopleTariffs = [
  {
    name: "Super Economy",
    price: "199.90 ₽",
    period: "per month",
    interval: "Location updated every 60 seconds while moving",
    features: ["Live location & history", "Geofence arrival / departure alerts", "Trip statistics", "1 object"],
    highlight: false,
  },
  {
    name: "Economy",
    price: "349.90 ₽",
    period: "per month",
    interval: "Location updated every 30 seconds while moving",
    features: ["Everything in Super Economy", "On-board computer readings", "Driving-style analysis", "Speed-violation alerts"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "499.90 ₽",
    period: "per month",
    interval: "Location updated every 30 seconds + priority processing",
    features: ["Everything in Economy", "Driver attention monitoring", "Video surveillance support", "Extended data storage", "Priority support"],
    highlight: false,
  },
];

/* ─────────────────────────  DETAIL PAGES  ───────────────────────── */

const solutionDefaults = {
  priceEquip: "from 5 900 ₽",
  priceSub: "from 249 ₽ / mo",
  device: { name: "Vjoy Car TK10SE", note: "Compact wired tracker with app pairing" },
};

const petDefaults = {
  priceEquip: "from 7 900 ₽",
  priceSub: "from 199 ₽ / mo",
  device: { name: "TK-STAR TK911", note: "Lightweight waterproof collar tracker" },
};

export const peopleServices = {
  "who-is-where": {
    kind: "service",
    title: '"Who\'s where?" in real time',
    tagline: "The whole family and every vehicle on one live map.",
    image: imgCompass,
    intro:
      "One app that answers the question you ask most often. Add people, cars, bikes and pets, share access with the family, and see everyone's position update live.",
    benefits: [
      "Everyone on a single map, updating in real time",
      "Arrival and departure alerts for home, school and work",
      "Full location history for every object",
      "Shared family access with roles",
    ],
    priceEquip: "from 0 ₽ (phone) / 5 900 ₽ (device)",
    priceSub: "from 199 ₽ / mo",
    features: [
      { title: "Family sharing", desc: "Invite family members; each sees the shared objects on their own phone." },
      { title: "Places", desc: "Save home, school, the gym — get a notification when someone arrives or leaves." },
      { title: "History", desc: "Scroll back through any day to see where an object has been." },
      { title: "Phone or device", desc: "Use the app on a phone, or a dedicated tracker for cars, bikes and pets." },
    ],
    device: { name: "Tekonika Systems app", note: "Turns any Android or iOS phone into a tracker" },
    faqs: [
      { q: "How many objects can I add?", a: "As many as you need — each object is billed separately on its plan." },
      { q: "Will the other person know?", a: "Family sharing is consent-based; each participant installs the app and accepts the invite." },
    ],
  },
};

export const peopleSolutions = {
  "relatives-friends": {
    ...solutionDefaults,
    kind: "solution",
    title: "Relatives and friends",
    tagline: "Peace of mind for children and elderly parents.",
    image: imgFamily,
    intro:
      "A compact personal tracker or the phone app keeps you connected to the people who matter — without calling to check in.",
    benefits: [
      "Live location of children and elderly relatives",
      "SOS button with instant alert to the whole family",
      "Safe-zone alerts for school, home and the yard",
      "Low-battery reminders so you're never caught out",
    ],
    priceEquip: "from 4 900 ₽",
    priceSub: "from 199 ₽ / mo",
    device: { name: "TK-STAR TK109", note: "Pocket-size tracker with SOS button" },
    features: [
      { title: "SOS button", desc: "One press sends the location and an alert to every family member." },
      { title: "Safe zones", desc: "Draw a zone around school or home and get told when it's entered or left." },
      { title: "Two-way call", desc: "Selected models allow a call to pre-set numbers straight from the device." },
      { title: "Quiet & light", desc: "Small enough for a backpack or a pocket, with multi-day battery life." },
    ],
    scenarios: [
      { title: "Schoolchild", desc: "Tracker in the backpack, safe zone around the school.", price: "7 000 ₽ + 199 ₽/mo" },
      { title: "Elderly parent", desc: "Pendant tracker with SOS and fall alerts.", price: "6 500 ₽ + 199 ₽/mo" },
    ],
  },
  automobile: {
    ...solutionDefaults,
    kind: "solution",
    title: "Automobile",
    tagline: "Anti-theft protection, driver assistance and diagnostics on your phone.",
    image: imgCar,
    intro:
      "Turn your car into a connected one. Know where it is, get told when it moves at night, block the engine remotely and read the on-board computer from the app.",
    benefits: [
      "Extra protection against theft with a hidden beacon",
      "Alerts when the car leaves a parking spot or a geofence",
      "Remote engine block and immobilizer relay",
      "Diagnostics — RPM, oil temperature, all CAN-bus data",
    ],
    features: [
      { title: "Hidden beacon", desc: "A second, battery-powered tracker keeps transmitting even if the main unit is found." },
      { title: "Night-parking alerts", desc: "Get a push the moment the car moves outside expected hours." },
      { title: "Remote block", desc: "Cut the ignition from the app if the car is taken without permission." },
      { title: "Driving stats", desc: "Sharp braking, hard acceleration, cornering and speeding, per trip." },
    ],
    scenarios: [
      { title: "One private car", desc: "Location tracking plus engine block.", price: "7 000 ₽ + 249 ₽/mo" },
      { title: "Teen driver", desc: "Location, speed alerts and a nightly report.", price: "7 000 ₽ + 199 ₽/mo" },
      { title: "Family fleet, 3 cars", desc: "All cars in one app with driver scoring.", price: "from 18 900 ₽ + 249 ₽/mo each" },
    ],
    device: { name: "Vjoy Car TK10SE", note: "Wired tracker with CAN diagnostics and app pairing" },
    faqs: [
      { q: "Does installation require a service centre?", a: "Wired models are best fitted by an installer; OBD-II models plug in yourself in a minute." },
      { q: "Will it drain the battery?", a: "No — the tracker uses a few milliamps in sleep mode and wakes on motion." },
    ],
  },
  "other-transport": {
    ...solutionDefaults,
    kind: "solution",
    title: "Other modes of transport",
    tagline: "Boats, trailers, snowmobiles, special equipment — if it moves, you can track it.",
    image: imgTransport,
    intro:
      "A weatherproof tracker with its own battery or a wired install covers everything the standard categories don't — from a boat to a garden tractor.",
    benefits: [
      "Works on anything with or without 12/24 V power",
      "Motion and tilt alerts for parked equipment",
      "Geofence around the dock, garage or yard",
      "Long battery life in power-saving mode",
    ],
    device: { name: "TK-STAR TK905B", note: "Magnetic waterproof tracker, weeks of battery" },
    features: [
      { title: "Magnetic mount", desc: "Snaps onto any steel surface, hidden in seconds." },
      { title: "Tow-away alert", desc: "Get notified if a parked trailer or boat starts moving." },
      { title: "Weatherproof", desc: "IP67 housing survives rain, dust and wash-downs." },
      { title: "Battery modes", desc: "From live tracking to one ping a day to stretch battery for months." },
    ],
  },
  scooter: {
    ...solutionDefaults,
    kind: "solution",
    title: "Scooter",
    tagline: "Keep your e-scooter where you left it.",
    image: imgOutdoor,
    intro:
      "A small hidden tracker inside the deck or stem means a stolen scooter is a found scooter.",
    benefits: [
      "Hidden install inside the frame",
      "Instant movement alert when parked",
      "Live location for recovery",
      "Compact battery-powered or wired to the scooter's pack",
    ],
    priceEquip: "from 3 900 ₽",
    priceSub: "from 149 ₽ / mo",
    device: { name: "TK-STAR TK935", note: "Miniature beacon with motion alerts" },
    features: [
      { title: "Concealed", desc: "Fits inside the deck or handlebar stem out of sight." },
      { title: "Move alert", desc: "Push notification the second the scooter is picked up or ridden." },
      { title: "Recovery mode", desc: "Switches to frequent updates to help you close in." },
      { title: "Light on battery", desc: "Weeks of standby; can also tap the scooter's own battery." },
    ],
  },
  atv: {
    ...solutionDefaults,
    kind: "solution",
    title: "ATV",
    tagline: "Protection and location for quad bikes on and off the trail.",
    image: imgTrucks,
    intro:
      "ATVs live outdoors and far from help. A rugged tracker gives you theft alerts and a location if a ride goes wrong.",
    benefits: [
      "Theft and tamper alerts for parked machines",
      "Live location on trails with no landmarks",
      "Geofence around the property or camp",
      "Vibration-resistant wired install",
    ],
    device: { name: "SIGNAL S-2653", note: "Rugged wired terminal with wide voltage range" },
    features: [
      { title: "Trail location", desc: "Share a live link so someone always knows where the ride is." },
      { title: "Tamper alert", desc: "Notifies you if power is cut or the unit is removed." },
      { title: "Geofence", desc: "Alerts if the ATV leaves the property or a set radius." },
      { title: "Rugged", desc: "Sealed housing and shock-tolerant mounting." },
    ],
  },
  bike: {
    ...solutionDefaults,
    kind: "solution",
    title: "Bike",
    tagline: "A hidden tracker for a bicycle worth protecting.",
    image: imgRoad,
    intro:
      "Tuck a miniature tracker into the seat post or bar ends. If the bike is taken, you follow it in the app.",
    benefits: [
      "Hidden in the seat post or handlebars",
      "Movement alerts while locked up",
      "Live location for recovery",
      "Rechargeable, lightweight",
    ],
    priceEquip: "from 3 900 ₽",
    priceSub: "from 149 ₽ / mo",
    device: { name: "TK-STAR TK935", note: "Seat-post sized beacon" },
    features: [
      { title: "Seat-post fit", desc: "Slides into a standard seat tube; invisible when mounted." },
      { title: "Lock-up alert", desc: "Tells you if the bike moves while you're away from it." },
      { title: "Recovery mode", desc: "Frequent pings to help you track it down fast." },
      { title: "Feather-light", desc: "You won't feel it on the ride." },
    ],
  },
  motorbike: {
    ...solutionDefaults,
    kind: "solution",
    title: "Motorbike",
    tagline: "Anti-theft, geofence alerts and a hidden beacon for two wheels.",
    image: imgRoad,
    intro:
      "Motorcycles are quick to steal. A wired tracker plus a hidden battery beacon makes recovery realistic.",
    benefits: [
      "Wired tracker plus independent hidden beacon",
      "Tilt and motion alerts when parked",
      "Geofence around home and usual parking",
      "Remote ignition cut on supported models",
    ],
    device: { name: "Vjoy Car TK10SE", note: "Wired tracker; pair with a battery beacon" },
    features: [
      { title: "Two devices", desc: "If a thief finds the wired unit, the beacon keeps reporting." },
      { title: "Tilt alert", desc: "Notifies you if the bike is lifted onto a stand or into a van." },
      { title: "Geofence", desc: "Alerts the moment the bike leaves its usual spot." },
      { title: "Ignition cut", desc: "Optional relay to stop the bike remotely." },
    ],
  },
  quadcopter: {
    ...solutionDefaults,
    kind: "solution",
    title: "Quadcopter",
    tagline: "Find a drone that came down out of sight.",
    image: imgField,
    intro:
      "A featherweight tracker on the airframe gives you a last-known and live location when a drone lands somewhere you can't see.",
    benefits: [
      "Ultra-light tracker that won't upset the payload",
      "Last-known position if the link drops",
      "Live location once it's on the ground",
      "Rechargeable, quick to swap between airframes",
    ],
    priceEquip: "from 3 500 ₽",
    priceSub: "from 149 ₽ / mo",
    device: { name: "TK-STAR TK935", note: "Sub-20 g beacon" },
    features: [
      { title: "Minimal weight", desc: "Light enough not to affect flight time noticeably." },
      { title: "Last-known fix", desc: "Holds the final GPS position from before the signal was lost." },
      { title: "Ground beacon", desc: "Resumes reporting as soon as it has sky view again." },
      { title: "Swappable", desc: "Velcro or strap mount moves between airframes." },
    ],
  },
};

export const peoplePets = {
  animals: {
    ...petDefaults,
    kind: "pet",
    title: "Animals",
    tagline: "Location and safe zones for any animal that roams.",
    image: imgPet,
    intro:
      "From a house cat to livestock, a GPS tracker on the collar or harness tells you where the animal is and alerts you if it leaves the safe area.",
    benefits: [
      "Live location on a map",
      "Safe-zone alerts for the yard or pasture",
      "Activity and movement history",
      "Waterproof, collar-mounted",
    ],
    features: [
      { title: "Safe zone", desc: "Draw the yard or field; get an alert if the animal crosses it." },
      { title: "Find mode", desc: "Frequent updates plus a proximity indicator to close the last few metres." },
      { title: "Rugged", desc: "Sealed against rain, mud and river crossings." },
      { title: "Long battery", desc: "Days to weeks depending on update frequency." },
    ],
  },
  cats: {
    ...petDefaults,
    kind: "pet",
    title: "Cats",
    tagline: "Know your cat's territory — and find it when it doesn't come home.",
    image: imgPet,
    priceEquip: "from 6 900 ₽",
    device: { name: "TK-STAR TK911 Mini", note: "Lightweight collar tracker for cats" },
    intro:
      "A lightweight collar tracker maps your cat's night-time range and helps you find it fast when it decides to explore a neighbour's shed.",
    benefits: [
      "Territory map built from real movement",
      "Alert if the cat leaves the usual range",
      "Find mode with proximity search",
      "Light enough for a breakaway collar",
    ],
    features: [
      { title: "Range map", desc: "See where your cat actually goes at night." },
      { title: "Leave alert", desc: "Notifies you if it strays beyond its normal territory." },
      { title: "Proximity search", desc: "Warmer/colder guidance for the final search." },
      { title: "Cat-safe", desc: "Pairs with a breakaway safety collar." },
    ],
  },
  dogs: {
    ...petDefaults,
    kind: "pet",
    title: "Dogs",
    tagline: "For walks off the lead, hunting and the escape artist.",
    image: imgPet,
    intro:
      "A collar tracker keeps a dog in view during off-lead walks, working trips and hunts — and turns a lost dog into a found one.",
    benefits: [
      "Live tracking during off-lead time",
      "Safe-zone alerts for the yard",
      "Find mode for search and recovery",
      "Rugged and waterproof for the field",
    ],
    features: [
      { title: "Field tracking", desc: "Follow the dog's path in real time during a hunt or a run." },
      { title: "Escape alert", desc: "Get told the moment the dog is out of the yard." },
      { title: "Recovery", desc: "Frequent updates and last-known fix if the dog goes far." },
      { title: "Tough housing", desc: "Handles water, brush and mud." },
    ],
    scenarios: [
      { title: "Family dog", desc: "Yard safe-zone plus walk tracking.", price: "8 000 ₽ + 199 ₽/mo" },
      { title: "Hunting dog", desc: "Long-range live tracking and recovery mode.", price: "12 000 ₽ + 199 ₽/mo" },
    ],
  },
  cows: {
    ...petDefaults,
    kind: "pet",
    title: "Cows",
    tagline: "Herd location and pasture boundaries for smallholders.",
    image: imgFarm,
    priceEquip: "from 8 900 ₽",
    device: { name: "SIGNAL S-2653", note: "Rugged ear-tag / collar mount" },
    intro:
      "A tracker on a few lead animals shows you where the herd is and alerts you if cattle push through a fence line.",
    benefits: [
      "Herd location without walking the whole pasture",
      "Fence-line breach alerts",
      "Grazing movement history",
      "Weatherproof, long battery",
    ],
    features: [
      { title: "Lead-animal tracking", desc: "Tag a few animals to locate the whole group." },
      { title: "Boundary alert", desc: "Notifies you if cattle cross the pasture edge or reach a road." },
      { title: "Grazing history", desc: "See which parts of the field are being used." },
      { title: "Field-tough", desc: "Sealed housing, weeks of battery per charge." },
    ],
  },
  horses: {
    ...petDefaults,
    kind: "pet",
    title: "Horses",
    tagline: "Paddock alerts and trail-ride tracking.",
    image: imgFarm,
    priceEquip: "from 8 900 ₽",
    device: { name: "TK-STAR TK905B", note: "Halter or surcingle mounted beacon" },
    intro:
      "A tracker on the halter or saddle pad tells you if a horse gets out of the paddock and lets someone follow a trail ride from home.",
    benefits: [
      "Paddock escape alerts",
      "Live tracking on trail rides",
      "Theft alert for float and stable",
      "Rugged, weeks of battery",
    ],
    features: [
      { title: "Paddock zone", desc: "Alert if a horse is out of the field or heading for a road." },
      { title: "Ride share", desc: "Send a live link so someone can follow the ride." },
      { title: "Float alert", desc: "Notifies you if the horse float or trailer moves unexpectedly." },
      { title: "Durable", desc: "Handles weather, dust and knocks." },
    ],
  },
  sheep: {
    ...petDefaults,
    kind: "pet",
    title: "Sheep",
    tagline: "Flock location and predator-hour boundary alerts.",
    image: imgFarm,
    priceEquip: "from 7 900 ₽",
    device: { name: "TK-STAR TK905B", note: "Collar-mounted magnetic beacon" },
    intro:
      "Tag the bellwethers and you can locate the flock, get told if they scatter, and know quickly if something has driven them through a fence.",
    benefits: [
      "Flock location from a few tagged animals",
      "Scatter and boundary alerts",
      "Movement history for rotation planning",
      "Long battery, weatherproof",
    ],
    features: [
      { title: "Bellwether tracking", desc: "Tag the lead animals to find the whole flock." },
      { title: "Scatter alert", desc: "Notifies you if the group suddenly spreads out or bolts." },
      { title: "Boundary alert", desc: "Tells you if sheep reach a fence line or a road." },
      { title: "Field-ready", desc: "Sealed, low-maintenance, weeks per charge." },
    ],
  },
};

/* Combined lookup for the /people/:slug route */
export const peopleAll = {
  ...peopleServices,
  ...peopleSolutions,
  ...peoplePets,
};
