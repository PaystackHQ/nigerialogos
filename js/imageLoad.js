/* eslint-disable no-undef */
const selects = document.querySelectorAll('.select select');
const results = document.querySelector('#results');
const alphabetlink = document.querySelector('.companies-alphabet');
const modeButtons = document.querySelectorAll('.mode-button,.mode-button-mobile');
const modeButtonText = document.querySelector('.mode-button .text');

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
	return array.sort(function(a1, a2) {
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
  return urlInstance.protocol === "http:" || urlInstance.protocol === "https:";
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
const getMode = localStorage.getItem('mode') || 'light';

const loadMode = mode => {
	mode = mode.toLowerCase();
	if (mode === 'system') {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			loadMode('dark');
		} else {
			loadMode('light');
		}
	} else if (mode === 'dark') {
		document.body.className = 'dark-mode';
	} else {
		document.body.className = '';
	}
};

const updateModeUI = mode => {
	loadMode(mode);
	switch (mode.toLowerCase()) {
		case 'system':
			modeButtons.forEach(modeButton => {
				modeButton.className = `${Array.from(modeButton.classList).shift()} light`;
				modeButton.setAttribute('title', 'Light');
			});
			modeButtonText.textContent = 'Light';
			localStorage.setItem('mode', 'system');
			break;

		case 'light':
			modeButtons.forEach(modeButton => {
				modeButton.className = `${Array.from(modeButton.classList).shift()} dark`;
				modeButton.setAttribute('title', 'Dark');
			});
			modeButtonText.textContent = 'Dark';
			localStorage.setItem('mode', 'light');
			break;

		case 'dark':
			modeButtons.forEach(modeButton => {
				modeButton.className = `${Array.from(modeButton.classList).shift()} system`;
				modeButton.setAttribute('title', 'System');
			});
			modeButtonText.textContent = 'System';
			localStorage.setItem('mode', 'dark');
			break;

		default:
			break;
	}
};

modeButtons.forEach(modeButton => {
	updateModeUI(getMode, modeButton);
	modeButton.addEventListener('click', e => {
		updateModeUI(modeButtonText.textContent, e.target);
	});
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
	const newColorScheme = e.matches ? 'dark' : 'light';
	if (localStorage.getItem('mode') === 'system') {
		loadMode(newColorScheme);
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
