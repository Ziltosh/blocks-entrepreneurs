import {defineConfig} from "vite";
import {createViteBlock} from "vite-plugin-gutenberg-blocks";
import {resolve} from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: resolve(process.env.PWD, "src/front.tsx"),
            output: {
                entryFileNames: "[name].js",
            }
        }
    },
    plugins: [createViteBlock()],
});
