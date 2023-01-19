import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/!(*.test).tsx"],
  sourcemap: true,
  bundle: false,
  format: ["esm"],
  loader: {
    ".js": "jsx",
  },
});
