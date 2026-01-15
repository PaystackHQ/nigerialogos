export default {
	root: '.',
	publicDir: 'public',
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: false,
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
};
