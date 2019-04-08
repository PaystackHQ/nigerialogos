// searchbar, select, results - Global variables initialized in imageLoad.js
const typeResults = document.querySelector('.typed');
searchbar.addEventListener('keyup', (e)=> {
    const typed = e.target.value.toLowerCase();
    typeResults.innerHTML = typed;
    const logos = document.querySelectorAll('main .logo');
    let numberOfResults = 0;
    logos.forEach(logo => {
        const searchParagraph = logo.lastElementChild;
        const searchTitle = searchParagraph.firstElementChild.textContent;
        const logoCategory = searchParagraph.lastElementChild.textContent;
        let selectedCategory = select.value;

        const isPresent = searchTitle.toLowerCase().includes(typed);
        const categoryMatch = selectedCategory === 'All Categories' || logoCategory.includes(selectedCategory);
        const shouldShow = isPresent && categoryMatch;
        
        logo.style.display = shouldShow ? 'block' : 'none';
        if(shouldShow) numberOfResults += 1;
    });
    results.innerHTML = `${numberOfResults}`
    searchState();
})

function searchState() {
    const alphabetRow = document.querySelector('.companies-alphabet');
    const subcopy = document.querySelector('.subcopy');
    const contributeButton = document.querySelector('.contribute');
    const searchResultDisplay = document.querySelector('.result');

    if (searchbar.value) {
        alphabetRow.style.display = 'none';
        subcopy.style.display = 'none';
        searchResultDisplay.style.opacity = '1';
        searchResultDisplay.style.transform = 'translateY(-45px)';
        contributeButton.style.transform = 'translateY(-4vh)';
        
    } else {
        alphabetRow.style.display = 'flex';
        subcopy.style.display = 'block';
        searchResultDisplay.style.opacity = '0';
        contributeButton.style.transform = 'translateY(0)';
    }
}

function selectReload() {
    const enterPressed = new KeyboardEvent('keyup', {
        key: 'Enter'
    });
    select.addEventListener('change', ()=> {
        searchbar.dispatchEvent(enterPressed);
    });
}

selectReload();