import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function screenshotUploadPlugin(): Plugin {
  return {
    name: 'screenshot-uploader',
    configureServer(server) {
      server.middlewares.use('/api/upload-screenshot', (req, res) => {
        if (req.method === 'POST') {
          const url = new URL(req.url || '', `http://${req.headers.host || 'localhost'}`);
          const filename = url.searchParams.get('filename');
          if (!filename) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Missing filename' }));
            return;
          }
          const chunks: Uint8Array[] = [];
          req.on('data', (chunk) => chunks.push(chunk));
          req.on('end', () => {
            const buffer = Buffer.concat(chunks);
            const publicDir = path.resolve(process.cwd(), 'public');
            if (!fs.existsSync(publicDir)) {
              fs.mkdirSync(publicDir, { recursive: true });
            }
            const safeFilename = path.basename(decodeURIComponent(filename));
            fs.writeFileSync(path.join(publicDir, safeFilename), buffer);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, filename: safeFilename }));
          });
          return;
        }
        res.statusCode = 405;
        res.end('Method Not Allowed');
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), screenshotUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
