import { defineConfig } from "vite";

export default defineConfig({
	build: {
		cssMinify: false,
		lib: {
			entry: "src/index.ts",
			fileName: "index",
			formats: ["es"],
		},
		rollupOptions: {
			output: {
				assetFileNames: "[name][extname]",
			},
		},
	},
});
