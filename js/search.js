const searchbar = document.querySelector('.search input');
const select = document.querySelector('.select select');

searchbar.addEventListener('keyup', (e)=> {
    const typed = e.target.value.toLowerCase();
    const logos = document.querySelectorAll('main .logo');
    
    logos.forEach(logo => {
        const searchParagraph = logo.lastElementChild;
        const searchTitle = searchParagraph.firstElementChild.textContent;
        const logoCategory = searchParagraph.lastElementChild.textContent;
        const isPresent = searchTitle.toLowerCase().indexOf(typed) !== -1;
        let selectedCategory = select.value
        
        isPresent && selectedCategory === 'All Categories' ? logo.style.display = 'block'
        : logo.style.display = isPresent && selectedCategory === logoCategory ? 'block' : 'none';
    });   
})