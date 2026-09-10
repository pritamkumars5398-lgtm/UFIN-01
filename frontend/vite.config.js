import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy generated assets from brain directories into src/assets/
const brainDirDriver = 'C:/Users/UPL/.gemini/antigravity-ide/brain/a027d423-cc49-4cf8-813a-d14e5e405377';
const brainDirTemp = 'C:/Users/UPL/.gemini/antigravity-ide/brain/3614c2a5-018e-4330-8661-5ede8ce9beba';
const targetDir = path.resolve(__dirname, 'src/assets');

const filesToCopy = [
  { dir: brainDirDriver, src: 'truck_ar_hud_1789029918527.jpg', dest: 'truck_ar_hud.jpg' },
  { dir: brainDirDriver, src: 'adas_windshield_1789029939809.jpg', dest: 'adas_windshield.jpg' },
  { dir: brainDirDriver, src: 'driver_cabin_tablet_1789029964131.jpg', dest: 'driver_cabin_tablet.jpg' },
  { dir: brainDirDriver, src: 'video_monitoring_diag_1789029987152.jpg', dest: 'video_monitoring_diag.jpg' },
  { dir: brainDirDriver, src: 'yellow_truck_cab_1789030009764.jpg', dest: 'yellow_truck_cab.jpg' },
  // Temperature Control page assets
  { dir: brainDirTemp, src: 'laptop_telematics_temp_1789033991990.jpg', dest: 'laptop_telematics_temp.jpg' },
  { dir: brainDirTemp, src: 'courier_yellow_van_1789034012350.jpg', dest: 'courier_yellow_van.jpg' },
  { dir: brainDirTemp, src: 'executive_smartphone_1789034162394.jpg', dest: 'executive_smartphone.jpg' },
  { dir: brainDirTemp, src: 'refrigerated_trailer_diagram_1789034464560.jpg', dest: 'refrigerated_trailer_diagram.jpg' },
  { dir: brainDirTemp, src: 'iqfreeze_thermal_logger_1789034570427.jpg', dest: 'iqfreeze_thermal_logger.jpg' },
];

try {
  filesToCopy.forEach(({ dir, src, dest }) => {
    const srcPath = path.join(dir, src);
    const destPath = path.join(targetDir, dest);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[vite.config] Successfully copied ${src} -> ${dest}`);
    } else {
      console.warn(`[vite.config] File not found: ${srcPath}`);
    }
  });
} catch (e) {
  console.error('[vite.config] Error copying assets:', e);
}

export default defineConfig({
  server: {
    fs: {
      strict: false,
      allow: ['..', 'C:/Users/UPL/.gemini/antigravity-ide/brain'],
    },
  },
});

