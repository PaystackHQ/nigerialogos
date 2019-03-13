// searchbar, select, results - Global variables initialized in imageLoad.js

searchbar.addEventListener('keyup', (e)=> {
    const typed = e.target.value.toLowerCase();
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
        
        // Handle alphabet links and anchors
        if (typed != "" || selectedCategory != 'All Categories') {
            document.querySelectorAll('.companies-alphabet-link').forEach(element => {element.style.display = 'none';});
            document.querySelectorAll('.companies-alphabet-anchor').forEach(element => {element.style.display = 'none';});
        } else {
            document.querySelectorAll('.companies-alphabet-link').forEach(element => {element.removeAttribute("style")});
            document.querySelectorAll('.companies-alphabet-anchor').forEach(element => {element.removeAttribute("style")});
        }

        logo.style.display = shouldShow ? 'block' : 'none';
        if(shouldShow) numberOfResults += 1;
    });
    
    if (logos.length == numberOfResults)
        results.innerHTML = `All <span>(${numberOfResults})</span> results`
    else
        results.innerHTML = `<span>${numberOfResults}</span> results`

})

function selectReload() {
    const enterPressed = new KeyboardEvent('keyup', {
        key: 'Enter'
    });
    select.addEventListener('change', ()=> {
        searchbar.dispatchEvent(enterPressed);
    });
}

selectReload();