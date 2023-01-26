import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/!(*.test).tsx"],
  sourcemap: true,
  bundle: false,
  dts: true,
  format: ["esm"],
  loader: {
    ".js": "jsx",
  },
});
