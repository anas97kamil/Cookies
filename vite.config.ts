import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],

    // أهم شي: ما منعرّف المتغيّر هون
    // Vite لحالو بيعمل inject للـ import.meta.env
  };
});
