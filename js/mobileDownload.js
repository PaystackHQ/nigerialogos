window.addEventListener('load', ()=> {
    const links = document.querySelectorAll('.logo__download__overlay a');
    let clicks = 0; 
    const stopLink = function (e) {
        clicks ++;
        // Prevent download on first clicks so as to enable hover effect on mobile
        if (clicks % 2 !== 0) e.preventDefault();
        
    }
    if ('ontouchstart' in window || 'ontouch' in window) {
        links.forEach(link => {
            link.addEventListener('click', stopLink);
        })
    }
})
