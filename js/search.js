/* eslint-disable no-undef */
// selects, results - Global variables initialized in imageLoad.js

const typeResults = document.querySelector('.typed');
const searchbars = document.querySelectorAll('.search input');
let typed = '';
let numberOfResults = 0;

const updateSearchState = () => {
	const alphabetRow = document.querySelector('.companies-alphabet');
	const subcopy = document.querySelector('.heading .subcopy');
	const contributeButton = document.querySelector('.heading .contribute');
	const searchResultDisplay = document.querySelector('.result');
	const mediaQuery = window.matchMedia('(max-width: 880px)');
	searchResultDisplay.style.transform = mediaQuery.matches ? 'translateY(-18px)' : 'translateY(-45px)';
	if (numberOfResults > 0 && typed) {
		alphabetRow.style.display = 'none';
		subcopy.style.display = 'none';
		searchResultDisplay.style.opacity = '1';
		contributeButton.style.transform = 'translateY(-4vh)';
	} else {
		alphabetRow.style.display = 'flex';
		subcopy.style.display = 'block';
		searchResultDisplay.style.opacity = '0';
		contributeButton.style.transform = 'translateY(0)';
	}
};

const highlightSearchTerm = (logo, term) => {
	const logoText = logo.querySelector('.logo__text--link');
	const logoTextTitle = logoText.textContent;
	logoText.innerHTML = logoTextTitle.replace(new RegExp(term, 'gi'), match => `<mark>${match}</mark>`);
};

const onSearch = e => {
	// Check if event is null -> select (down below)
	if (e) {
		typed = e.target.value.toLowerCase();
		typeResults.innerHTML = typed;
	}

	numberOfResults = 0;

	// This is initialized here and not globally, ensuring dom data is loaded without awaiting
	const logos = document.querySelectorAll('main .logo');
	logos.forEach(logo => {
		const searchParagraph = logo.lastElementChild;
		const searchTitle = searchParagraph.firstElementChild.textContent;
		const logoCategory = searchParagraph.lastElementChild.textContent;
		const isPresent = searchTitle.toLowerCase().includes(typed);

		// all select are binding allowing for either [0] or [1]
		const selectedCategory = selects[0].value;
		const categoryMatch = selectedCategory === '' || logoCategory.includes(selectedCategory);

		const shouldShow = isPresent && categoryMatch;
		logo.style.display = shouldShow ? 'block' : 'none';
		numberOfResults += shouldShow ? 1 : 0;
		highlightSearchTerm(logo, typed);
	});

	results.innerHTML = numberOfResults;
	updateSearchState();
};

searchbars.forEach(searchBar => {
	searchBar.addEventListener('input', onSearch);
});

selects.forEach(select => {
	select.addEventListener('input', () => {
		onSearch(null);
	});
});
