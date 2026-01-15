/* eslint-disable no-undef */
const selects = document.querySelectorAll('.select select');
const results = document.querySelector('#results');
const alphabetlink = document.querySelector('.companies-alphabet');
const themeToggles = document.querySelectorAll('.theme-toggle, .theme-toggle-mobile');

const loadJSON = callback => {
	const xobj = new XMLHttpRequest();
	xobj.overrideMimeType('application/json');
	xobj.open('GET', 'logos.json', true);
	xobj.onreadystatechange = () => {
		if (xobj.readyState === 4) {
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
};

const sortObjectArray = (array, key) => {
	return array.sort(function (a1, a2) {
		const b1 = a1[key].toLowerCase();
		const b2 = a2[key].toLowerCase();

		// return b1 < b2 ? -1 : b1 > b2 ? 1 : 0;
		if (b1 === b2) {
			return 0;
		}
		return b1 > b2 ? 1 : -1;
	});
};

const isValidURL = url => {
	let urlInstance;
	try {
		urlInstance = new URL(url);
	} catch (_) {
		return false;
	}
	return urlInstance.protocol === 'http:' || urlInstance.protocol === 'https:';
};

const setLogoCompanyLink = logoArray => {
	logoArray.map(logo => {
		const logoUrl = logo.url;

		if (logoUrl === '' || !isValidURL(logoUrl)) {
			logo.url = `https://www.google.com/search?q=${encodeURIComponent(logo.title)}`;
			logo.urlTitle = `Search for ${logo.title} on Google`;
		} else {
			logo.url = logoUrl;
			logo.urlTitle = `Visit ${logo.title} official website`;
		}

		return true;
	});
};

const createLogos = logoArray => {
	let categories = [];
	let groupanchor = '';
	let logotitle = '';
	let currentanchorchar = '';

	sortObjectArray(logoArray, 'title').forEach(logo => {
		// Fix company name that start with number
		if ('0123456789'.includes(logo.title.charAt(0))) logotitle = `#${logo.title}`;
		else logotitle = logo.title;

		// Set anchor
		if (logotitle.charAt(0).toLowerCase() !== currentanchorchar.toLowerCase()) {
			currentanchorchar = logotitle.charAt(0);
			groupanchor = `<div class="companies-alphabet-anchor"><a name="${currentanchorchar}">${currentanchorchar}</a></div>`;
			alphalinkhtml = `<a class="companies-alphabet-link" href="#${currentanchorchar}">${currentanchorchar}</a>`;
		} else {
			groupanchor = '';
			alphalinkhtml = '';
		}
		const html = `${groupanchor}<div class='logo'> <div class='logo__holder'> <div class='logo__image'> <img loading='lazy' src='logos/${
			logo.filename
		}/${logo.filename}.svg' alt='${logo.title}logo'> </div><div class='logo__download'> <div class='logo__download__overlay'> <a href='logos/${
			logo.filename
		}/${logo.filename}.svg' download='${logo.title} Logo.svg'> <span class='logo__download__overlay--svg'> Download SVG </span> </a> <a href='logos/${
			logo.filename
		}/${logo.filename}.png' download='${
			logo.title
		} Logo.png'> <span class='logo__download__overlay--png'> Download PNG </span> </a> </div></div></div><div class='logo__text'> <p class='logo__text--primary'><a href='${
			logo.url
		}' title='${logo.urlTitle}' target='_blank' class='logo__text--link'>${
			logo.title
		}</a></p><p class='logo__text--secondary'>${`${logo.category}`.replace(',', ' / ')}</p></div></div>`;
		const main = document.querySelector('main');
		main.insertAdjacentHTML('beforeend', html);
		alphabetlink.insertAdjacentHTML('beforeend', alphalinkhtml);

		// Load singular category array
		logo.category.forEach(cat => {
			if (categories.indexOf(cat) === -1) categories.push(cat);
		});
	});

	// Sort category alphabetically
	categories = categories.sort();

	// Load category dropdown
	categories.forEach(cat => {
		const html = `<option value="${cat}">${cat}</option>`;
		selects.forEach(select => {
			select.insertAdjacentHTML('beforeend', html);
		});
	});
};

const createSecondaryAlphabet = () => {
	const secondaryAlphabet = document.querySelector('.secondary-alphabet');
	const letterACode = 65;
	const letterZCode = 91;

	function characterFromCode(code) {
		return String.fromCharCode(code);
	}

	for (let index = letterACode; index < letterZCode; index++) {
		const letter = characterFromCode(index);
		const html = `<a href="#${letter}">${letter}</a>`;
		secondaryAlphabet.insertAdjacentHTML('beforeend', html);
	}
};

// Night Mode
const getMode = localStorage.getItem('mode') || 'system';

const loadMode = mode => {
	mode = mode.toLowerCase();
	if (mode === 'dark') {
		document.body.classList.add('dark-mode');
	} else {
		document.body.classList.remove('dark-mode');
	}
};

const updateModeUI = mode => {
	loadMode(mode);

	// Update all theme toggle checkboxes
	themeToggles.forEach(toggle => {
		const checkbox = toggle.querySelector('.theme-toggle-checkbox');
		if (checkbox) {
			checkbox.checked = mode === 'dark';
		}
	});

	localStorage.setItem('mode', mode.toLowerCase());
};

// Initialize all theme toggles
themeToggles.forEach(toggle => {
	updateModeUI(getMode);

	const checkbox = toggle.querySelector('.theme-toggle-checkbox');
	if (checkbox) {
		checkbox.addEventListener('change', e => {
			const nextTheme = e.target.checked ? 'dark' : 'light';
			updateModeUI(nextTheme);
		});
	}
});

init = () => {
	// Create logos
	loadJSON(response => {
		const logoArray = JSON.parse(response);

		setLogoCompanyLink(logoArray);

		createLogos(logoArray);
		results.innerHTML = `${logoArray.length}`;
	});
};

init();
createSecondaryAlphabet();
