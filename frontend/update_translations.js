const fs = require('fs');
let t = fs.readFileSync('src/translations.js', 'utf8');

// EN updateLog
const enUpdateLog = `      updateLogItems: [
        { date: "Oct 14, 2024", title: "New 'Summary' report available", desc: "The new 'Summary' report collects key parameters from trips, fuel, and geofence reports.", link: "https://ufin.online/poyavilsya-novyj-otchet-svodnyj/" },
        { date: "Oct 11, 2024", title: "New event — 'Mechanism Operation'", desc: "Now you can create notifications about mechanism operations. For example, when a crane boom starts working.", link: "https://ufin.online/novoe-sobytie-rabota-mexanizma/" },
        { date: "Oct 10, 2024", title: "Now drivers can be displayed in the event report", desc: "", link: "https://ufin.online/teper-v-otchet-po-sobytiyam-mozhno-vyvodit-voditelya/" }
      ],`;

// RU updateLog
const ruUpdateLog = `      updateLogItems: [
        { date: "14 Окт, 2024", title: "Появился новый отчет «Сводный»", desc: "В нем собраны основные параметры из отчетов по поездкам, топливу и посещению геозон.", link: "https://ufin.online/poyavilsya-novyj-otchet-svodnyj/" },
        { date: "11 Окт, 2024", title: "Новое событие — «Работа механизма»", desc: "Теперь вы можете создавать уведомления о работе механизма. Например, когда заработала стрела крана.", link: "https://ufin.online/novoe-sobytie-rabota-mexanizma/" },
        { date: "10 Окт, 2024", title: "Теперь в отчет по событиям можно выводить водителя", desc: "", link: "https://ufin.online/teper-v-otchet-po-sobytiyam-mozhno-vyvodit-voditelya/" }
      ],`;

t = t.replace(/integrationsSubtitle: "Connect to your existing systems",/, 'integrationsSubtitle: "Connect to your existing systems",\n' + enUpdateLog);
t = t.replace(/integrationsSubtitle: "Свяжите с вашими системами",/, 'integrationsSubtitle: "Свяжите с вашими системами",\n' + ruUpdateLog);

fs.writeFileSync('src/translations.js', t);
