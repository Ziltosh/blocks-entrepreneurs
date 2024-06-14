// vite.config.js
import {
    defineConfig
} from "file:///Users/nicolas/Documents/Developpement/Web/wp-dev/wp-content/plugins/vite-block/development/node_modules/vite/dist/node/index.js";
import {
    createViteBlock
} from "file:///Users/nicolas/Documents/Developpement/Web/wp-dev/wp-content/plugins/vite-block/development/node_modules/vite-plugin-gutenberg-blocks/dist/index.js";
import {
    viteStaticCopy
} from "file:///Users/nicolas/Documents/Developpement/Web/wp-dev/wp-content/plugins/vite-block/development/node_modules/vite-plugin-static-copy/dist/index.js";
import {resolve} from "node:path";

var vite_config_default = defineConfig({
  plugins: [createViteBlock(), viteStaticCopy({
    targets: [{
      src: resolve(process.env.PWD, "src/img/svg/*.svg"),
      dest: "."
    }]
  })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmljb2xhcy9Eb2N1bWVudHMvRGV2ZWxvcHBlbWVudC9XZWIvd3AtZGV2L3dwLWNvbnRlbnQvcGx1Z2lucy92aXRlLWJsb2NrL2RldmVsb3BtZW50L3BhY2thZ2VzL3N0YXJidXR0b25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9uaWNvbGFzL0RvY3VtZW50cy9EZXZlbG9wcGVtZW50L1dlYi93cC1kZXYvd3AtY29udGVudC9wbHVnaW5zL3ZpdGUtYmxvY2svZGV2ZWxvcG1lbnQvcGFja2FnZXMvc3RhcmJ1dHRvbi92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbmljb2xhcy9Eb2N1bWVudHMvRGV2ZWxvcHBlbWVudC9XZWIvd3AtZGV2L3dwLWNvbnRlbnQvcGx1Z2lucy92aXRlLWJsb2NrL2RldmVsb3BtZW50L3BhY2thZ2VzL3N0YXJidXR0b24vdml0ZS5jb25maWcuanNcIjtpbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7Y3JlYXRlVml0ZUJsb2NrfSBmcm9tIFwidml0ZS1wbHVnaW4tZ3V0ZW5iZXJnLWJsb2Nrc1wiO1xuaW1wb3J0IHt2aXRlU3RhdGljQ29weX0gZnJvbSBcInZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5XCI7XG5pbXBvcnQge3Jlc29sdmV9IGZyb20gXCJub2RlOnBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW2NyZWF0ZVZpdGVCbG9jaygpLCB2aXRlU3RhdGljQ29weSh7XG5cdFx0dGFyZ2V0czogW3tcblx0XHRcdHNyYzogcmVzb2x2ZShwcm9jZXNzLmVudi5QV0QsIFwic3JjL2ltZy9zdmcvKi5zdmdcIiksXG5cdFx0XHRkZXN0OiBcIi5cIlxuXHRcdH1dXG5cdH0pXSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBK2YsU0FBUSxvQkFBbUI7QUFDMWhCLFNBQVEsdUJBQXNCO0FBQzlCLFNBQVEsc0JBQXFCO0FBQzdCLFNBQVEsZUFBYztBQUV0QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsZ0JBQWdCLEdBQUcsZUFBZTtBQUFBLElBQzNDLFNBQVMsQ0FBQztBQUFBLE1BQ1QsS0FBSyxRQUFRLFFBQVEsSUFBSSxLQUFLLG1CQUFtQjtBQUFBLE1BQ2pELE1BQU07QUFBQSxJQUNQLENBQUM7QUFBQSxFQUNGLENBQUMsQ0FBQztBQUNILENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
