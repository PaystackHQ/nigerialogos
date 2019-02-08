const searchbar = document.querySelector('.search input');
const select = document.querySelector('.select select');
const results = document.querySelector('.results');

searchbar.addEventListener('keyup', (e)=> {
    const typed = e.target.value.toLowerCase();
    const logos = document.querySelectorAll('main .logo');
    let numberOfResults = 0;
    logos.forEach(logo => {
        const searchParagraph = logo.lastElementChild;
        const searchTitle = searchParagraph.firstElementChild.textContent;
        const logoCategory = searchParagraph.lastElementChild.textContent;
        let selectedCategory = select.value;

        const isPresent = searchTitle.toLowerCase().indexOf(typed) !== -1;
        const categoryMatch = selectedCategory === 'All Categories' || selectedCategory === logoCategory;
        const shouldShow = isPresent && categoryMatch;
        
        logo.style.display = shouldShow ? 'block' : 'none';
        if(shouldShow) numberOfResults+=1;
    });
    
    results.innerHTML = `<span>${numberOfResults}</span> results`
})

function selectReload() {
    const enterPressed = new KeyboardEvent('keyup', {
        key: 'Enter'
    });
    select.addEventListener('change', ()=> {
        searchbar.dispatchEvent(enterPressed);
    })
}
selectReload();