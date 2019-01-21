const searchbar = document.querySelector('.search input');
const select = document.querySelector('.select select');



searchbar.addEventListener('keyup', (e)=> {
    const typed = e.target.value.toLowerCase();
    const logos = document.querySelectorAll('main .logo');
    console.log(logos);
    
    logos.forEach(logo => {
        const searchParagraph = logo.lastElementChild;
        const searchTitle = searchParagraph.firstElementChild.textContent;
        const category = searchParagraph.lastElementChild.textContent;
        const present = searchTitle.toLowerCase().indexOf(typed) !== -1;
        let selected = select.value
        console.log(selected);
        
        if (present && selected === "All Categories") {
            logo.style.display = 'block';
        } 
        else if (present && selected === category) {
            logo.style.display = 'block';
        } 
        else {
            logo.style.display = 'none'
        }
    });   
})

