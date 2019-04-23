// searchbar, select, results - Global variables initialized in imageLoad.js
const typeResults = document.querySelector('.typed');
searchbars.forEach(searchbar => {
    searchbar.addEventListener('keyup', (e)=> {
        const typed = e.target.value.toLowerCase();
        typeResults.innerHTML = typed;
        const logos = document.querySelectorAll('main .logo');
        let numberOfResults = 0;

        logos.forEach(logo => {
            const searchParagraph = logo.lastElementChild;
            const searchTitle = searchParagraph.firstElementChild.textContent;
            const logoCategory = searchParagraph.lastElementChild.textContent;
            const scrollShowSearchbar = document.querySelector('.scroll-show .searchbar');
            const searchbarOpacity = window.getComputedStyle(scrollShowSearchbar).getPropertyValue('opacity');
            let newSelect = searchbarOpacity > 0 ? selects[0] : selects[1]; 
            let selectedCategory = newSelect.value;
            selects.forEach(select => {
                select.value = selectedCategory;
            });
            searchTermHighlight(logo, typed);
            const isPresent = searchTitle.toLowerCase().includes(typed);
            const categoryMatch = selectedCategory === 'All Categories' || logoCategory.includes(selectedCategory);
            const shouldShow = isPresent && categoryMatch;
            
            logo.style.display = shouldShow ? 'block' : 'none';
            if(shouldShow) numberOfResults += 1;
        });
        results.innerHTML = `${numberOfResults}`
        searchState();
    }) 
    function searchTermHighlight(logo, term) {
        logoText = logo.querySelector('.logo__text--primary');
        logoTextTitle = logoText.textContent;
        logoText.innerHTML = logoTextTitle.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);
    }
});

function searchState() {
    const alphabetRow = document.querySelector('.companies-alphabet');
    const subcopy = document.querySelector('.subcopy');
    const contributeButton = document.querySelector('.contribute');
    const searchResultDisplay = document.querySelector('.result');
    const mediaQuery = window.matchMedia( '(max-width: 880px)' );
    searchbars.forEach(searchbar => {
        if (searchbar.value) {
            alphabetRow.style.display = 'none';
            subcopy.style.display = 'none';
            searchResultDisplay.style.opacity = '1';
            mediaQuery.matches ? searchResultDisplay.style.transform = 'translateY(-18px)'
            : searchResultDisplay.style.transform = 'translateY(-45px)';
            contributeButton.style.transform = 'translateY(-4vh)';
            
        } else {
            alphabetRow.style.display = 'flex';
            subcopy.style.display = 'block';
            searchResultDisplay.style.opacity = '0';
            contributeButton.style.transform = 'translateY(0)';
        } 
    });
}

function selectReload() {
    const enterPressed = new KeyboardEvent('keyup', {
        key: 'Enter'
    });
    selects.forEach(select => {
        select.addEventListener('change', ()=> {
            searchbars.forEach(searchbar => {
                searchbar.dispatchEvent(enterPressed);
            })
        }); 
    });
}

selectReload();