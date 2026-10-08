import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({ base: "/password-strength-checker/", build: { sourcemap: false }, plugins: [react()] });
