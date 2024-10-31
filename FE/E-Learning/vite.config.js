import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(
    {
        plugins: [react()]
    },
    {
        compilerOptions: {
            baseUrl: './',
            paths: {
                '@components/*': ['src/Components/*'],
                '@admin/*': ['src/Components/Admin/*'],
                '@client/*': ['src/Components/Client/*'],
                '@assets/*': ['src/assets/*'],
                '@styles/*': ['src/assets/styles/*']
            }
        },
        include: ['src/**/*']
    }
);
