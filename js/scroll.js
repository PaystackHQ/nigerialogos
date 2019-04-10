(function(){
    const alphabets = document.querySelector('.companies-alphabet');
    const scrollShowLogo = document.querySelector('.scroll-show .site-logo');
    const scrollShowSearchbar = document.querySelector('.scroll-show .searchbar');
    const whiteBG = document.querySelector('.white-bg');
    const secondaryAlphabet =  document.querySelector('.secondary-alphabet');
    window.addEventListener('scroll', ()=>{
        if (alphabets.getBoundingClientRect().bottom < 0) {
            whiteBG.style.transform = 'translateY(0)';
            scrollShowLogo.style.opacity =  '1';
            scrollShowSearchbar.style.opacity =  '1';
            secondaryAlphabet.style.opacity =  '1';
        } else {
            whiteBG.style.transform = 'translateY(-100%)';
            scrollShowLogo.style.opacity =  '0';
            scrollShowSearchbar.style.opacity =  '0';
            secondaryAlphabet.style.opacity =  '0';
        }
    });

    const scrollShowInput = document.querySelector('.scroll-show input');
    const scrollShowSelect = document.querySelector('.scroll-show .select');
    function menuAnime() {
        scrollShowInput.addEventListener('focus', ()=> {
            scrollShowSelect.style.transform = 'translateX(0)';
            scrollShowSelect.style.opacity =  '1';
            secondaryAlphabet.style.zIndex = '666';
        })
        scrollShowInput.addEventListener('blur', ()=> {
            scrollShowSelect.style.transform = 'translateX(100%)';
            scrollShowSelect.style.opacity =  '0';
            secondaryAlphabet.style.zIndex = '668';
        })
    }
    menuAnime();
})();