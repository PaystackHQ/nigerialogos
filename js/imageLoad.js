const searchbar = document.querySelector('.search input');
const select = document.querySelector('.select select');
const results = document.querySelector('.results');
const alphabetlink = document.querySelector('.companies-alphabet');

function loadJSON(callback) {
    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/logos.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4) {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function sortObjectArray(array, key) {
    return array.sort(function(a1, a2) {
        var b1 = a1[key].toLowerCase();
        var b2 = a2[key].toLowerCase();
        return ((b1 < b2) ? -1 : ((b1 > b2) ? 1 : 0));
    });
}

function createLogos(logoArray) {
    let categories = [];
    let groupanchor = ``;
    let logotitle = ``;
    let currentanchorchar = ``;

    sortObjectArray(logoArray, 'title').forEach(logo => {
        // Fix company name that start with number
        if ('0123456789'.includes(logo.title.charAt(0))) logotitle = "#" + logo.title;
        else logotitle = logo.title;

        // Set anchor
        if (logotitle.charAt(0).toLowerCase() != currentanchorchar.toLowerCase()) {
            currentanchorchar = logotitle.charAt(0);
            groupanchor = `<h1 class="companies-alphabet-anchor"><a name="${currentanchorchar}">${currentanchorchar}</a></h1>`;
            alphalinkhtml = `<a class="companies-alphabet-link" href="#${currentanchorchar}">${currentanchorchar}</a>`;
        }
        else{
            groupanchor = ``;
            alphalinkhtml = ``;
        }
        const html = groupanchor + `<div class='logo'> <div class='logo__holder'> <div class='logo__image'> <img src='logos/${logo.filename}/${logo.filename}.svg' alt='${logo.title}logo'> </div><div class='logo__download'> <div class='logo__download__overlay'> <a href='logos/${logo.filename}/${logo.filename}.svg' download='${logo.title} Logo.svg'> <span class='logo__download__overlay--svg'> Download SVG </span> </a> <a href='logos/${logo.filename}/${logo.filename}.png' download='${logo.title} Logo.png'> <span class='logo__download__overlay--png'> Download PNG </span> </a> </div></div></div><div class='logo__text'> <p class='logo__text--primary'>${logo.title}</p><p class='logo__text--secondary'>${(logo.category+"").replace(","," / ")}</p></div></div>`;
        const main = document.querySelector('main');
        main.insertAdjacentHTML('beforeend', html);
        alphabetlink.insertAdjacentHTML('beforeend', alphalinkhtml);

        // Load singular category array
        logo.category.forEach(cat => {
            if (categories.indexOf(cat) === -1)
                categories.push(cat);
        });
    });

    // Load category dropdown
    categories.forEach(cat => {
        const html = `<option value="${cat}">${cat}</option>`;
        select.insertAdjacentHTML('beforeend', html);
    });
}

function init() {
    // Create logos
    loadJSON(response => {
        const logoArray = JSON.parse(response);
        createLogos(logoArray);
        results.innerHTML = `All <span>(${logoArray.length})</span> results`
    });
}

init();