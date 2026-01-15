export default {
	root: '.',
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: true,
		rollupOptions: {
			input: {
				main: './index.html',
			},
		},
	},
	server: {
		port: 8080,
		open: true,
		watch: {
			usePolling: true,
			interval: 100,
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
			},
		},
	},
};
