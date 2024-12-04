import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8800,
    proxy: { "/api": { target: "http://localhost:5500" } },
  },
  // prifx{
  //   '/api':'http://localhost:8000'
  // }
});
