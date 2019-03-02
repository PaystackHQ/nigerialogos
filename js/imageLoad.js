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

 function init() {
    loadJSON(response => {
       const logoArray = JSON.parse(response);
       createLogos(logoArray);
       insertCategories(logoArray);
    });
   }

init();

function createLogos(logoArray) {
        logoArray.forEach(logo => {
            const html = `<div class='logo'> <div class='logo__holder'> <div class='logo__image'> <img src='logos/${logo.filename}/${logo.filename}.svg' alt='${logo.title}logo'> </div><div class='logo__download'> <div class='logo__download__overlay'> <a href='logos/${logo.filename}/${logo.filename}.svg' download='${logo.title}Logo.svg'> <span class='logo__download__overlay--svg'> Download SVG </span> </a> <a href='logos/${logo.filename}/${logo.filename}.png' download='${logo.title}Logo.png'> <span class='logo__download__overlay--png'> Download PNG </span> </a> </div></div></div><div class='logo__text'> <p class='logo__text--primary'>${logo.title}</p><p class='logo__text--secondary'>${logo.category}</p></div></div>`;
            
            const main = document.querySelector('main');
            main.insertAdjacentHTML('beforeend', html);
        });      
}

function insertCategories (logoArray) {
    const map = generateCategoryMap(logoArray);
    const categories = Object.values(map).sort();
    categories.forEach(category => {
        const html = `<option value="${category}">${category}</option>`;
        const dropdown = document.getElementById('Categories');
        dropdown.insertAdjacentHTML('beforeend', html);
    })
}

// returns a map with each category appearing just once.
function generateCategoryMap (logoArray) {
    const categoryMap = {}
    
    logoArray.forEach(logo => {
        categoryMap[logo.category] = logo.category;
    });

    return categoryMap;
}