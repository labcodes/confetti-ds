import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  sourcemap: true,
  dts: true,
  treeshake: true,
  minify: true,
  clean: true,
  splitting: false,
  format: ["esm"],
  external: ["react"],
});
