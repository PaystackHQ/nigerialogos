// Import styles
import './src/scss/main.scss';

// Import JS modules
import { initDataBinding } from './src/js/data-binding.js';
import { initImageLoad } from './src/js/imageLoad.js';
import { initSearch } from './src/js/search.js';
import { initMobileDownload } from './src/js/mobileDownload.js';
import { initScroll } from './src/js/scroll.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
	// Initialize data binding first (for form synchronization)
	initDataBinding();

	// Initialize scroll behavior
	initScroll();

	// Initialize image loading - this loads logos from JSON
	// Pass a callback that runs after logos are loaded
	initImageLoad(() => {
		// Initialize search after logos are loaded
		initSearch();

		// Initialize mobile download after logos are loaded
		initMobileDownload();
	});
});
