import { defineConfig, splitVendorChunkPlugin } from "vite";

defineConfig({
  plugins: [splitVendorChunkPlugin()],
  build: {
    sourcemap: false,
    rollupOptions: {
      external: ["p5", /node_modules/],
      output: {
        manualChunks: {
          vendor: ["p5", "p5/lib/p5.min.js", "p5/lib/p5.js"],
        },
      },
    },
  },
});
