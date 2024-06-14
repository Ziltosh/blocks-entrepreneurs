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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmljb2xhcy9Eb2N1bWVudHMvRGV2ZWxvcHBlbWVudC9XZWIvd3AtZGV2L3dwLWNvbnRlbnQvcGx1Z2lucy92aXRlLWJsb2NrL2RldmVsb3BtZW50L3BhY2thZ2VzL2hlYWRlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL25pY29sYXMvRG9jdW1lbnRzL0RldmVsb3BwZW1lbnQvV2ViL3dwLWRldi93cC1jb250ZW50L3BsdWdpbnMvdml0ZS1ibG9jay9kZXZlbG9wbWVudC9wYWNrYWdlcy9oZWFkZXIvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL25pY29sYXMvRG9jdW1lbnRzL0RldmVsb3BwZW1lbnQvV2ViL3dwLWRldi93cC1jb250ZW50L3BsdWdpbnMvdml0ZS1ibG9jay9kZXZlbG9wbWVudC9wYWNrYWdlcy9oZWFkZXIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7Y3JlYXRlVml0ZUJsb2NrfSBmcm9tIFwidml0ZS1wbHVnaW4tZ3V0ZW5iZXJnLWJsb2Nrc1wiO1xuaW1wb3J0IHt2aXRlU3RhdGljQ29weX0gZnJvbSBcInZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5XCI7XG5pbXBvcnQge3Jlc29sdmV9IGZyb20gXCJub2RlOnBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbY3JlYXRlVml0ZUJsb2NrKCksIHZpdGVTdGF0aWNDb3B5KHtcbiAgICAgICAgdGFyZ2V0czogW3tcbiAgICAgICAgICAgIHNyYzogcmVzb2x2ZShwcm9jZXNzLmVudi5QV0QsIFwic3JjL2ltZy9zdmcvKi5zdmdcIiksXG4gICAgICAgICAgICBkZXN0OiBcIi5cIlxuICAgICAgICB9XVxuICAgIH0pXSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBbWYsU0FBUSxvQkFBbUI7QUFDOWdCLFNBQVEsdUJBQXNCO0FBQzlCLFNBQVEsc0JBQXFCO0FBQzdCLFNBQVEsZUFBYztBQUV0QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsZ0JBQWdCLEdBQUcsZUFBZTtBQUFBLElBQ3hDLFNBQVMsQ0FBQztBQUFBLE1BQ04sS0FBSyxRQUFRLFFBQVEsSUFBSSxLQUFLLG1CQUFtQjtBQUFBLE1BQ2pELE1BQU07QUFBQSxJQUNWLENBQUM7QUFBQSxFQUNMLENBQUMsQ0FBQztBQUNOLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
