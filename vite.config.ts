
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add historyApiFallback for SPA routing
    historyApiFallback: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add base path configuration
  base: '/',
  // Ensure proper build configuration for SPA routing
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Group major libraries in their own chunks
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer-motion';
            }
            if (id.includes('lucide-react') || id.includes('@radix-ui')) {
              return 'vendor-ui';
            }
            if (id.includes('supabase')) {
              return 'vendor-supabase';
            }
            return 'vendor'; // all other packages in one chunk
          }
        },
      },
    },
    // Enable minification
    minify: true,
    // Enable source maps for production debugging if needed
    sourcemap: mode === 'development',
  },
  // Optimize for performance
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },
  // Enable CSS code splitting
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    // Minify CSS in production
    devSourcemap: true,
  },
}));
