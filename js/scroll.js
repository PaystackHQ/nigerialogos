(function() {
	const main = document.querySelector('main');
	const scrollShow = document.querySelector('.scroll-show');
	const secondaryAlphabet = document.querySelector('.secondary-alphabet');
	const scrollShowInput = document.querySelector('.scroll-show input');
	const scrollShowSelect = document.querySelector('.scroll-show .select');

	const searchDefault = () => {
		scrollShowSelect.style.transform = 'translateX(100%)';
		scrollShowSelect.style.opacity = '0';
		secondaryAlphabet.style.zIndex = '668';
	};
	const searchOnFocus = () => {
		scrollShowSelect.style.transform = 'translateX(0)';
		scrollShowSelect.style.opacity = '1';
		secondaryAlphabet.style.zIndex = '666';
	};
	const windowOnScroll = () => {
		if (window.screen.width > 1000) {
			if (main.getBoundingClientRect().top < 0) {
				scrollShow.style.display = 'block';
			} else {
				scrollShow.style.display = 'none';
			}
		} else {
			scrollShow.removeAttribute('style');
		}
	};

	// Initialize states
	scrollShow.style.display = 'none';
	searchDefault();

	// Handle events
	window.addEventListener('scroll', windowOnScroll);
	scrollShowInput.addEventListener('focus', searchOnFocus);
	scrollShowInput.addEventListener('blur', searchDefault);
})();
