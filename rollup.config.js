import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/ImagesBox.tsx",
  output: {
    file: "dist/main.bundle.js",
    format: "cjs",
    exports: "auto", // or 'default' if you want to enforce default export mode
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**", // Exclude transpiling external dependencies
      presets: ["@babel/preset-env"],
      plugins: [["@babel/plugin-transform-runtime", { regenerator: true }]],
    }),
  ],
};
