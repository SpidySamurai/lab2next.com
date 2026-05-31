import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // pnpm monorepo: `next` is hoisted to the workspace root, not the package dir.
    // Root must point at the monorepo root so Turbopack resolves next/package.json (Error Log E-002).
    root: resolve(__dirname, ".."),
  },
};

export default nextConfig;
