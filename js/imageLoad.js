function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/logos.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 function init() {
    loadJSON(function(response) {
       var actual_JSON = JSON.parse(response);
       createLogos(actual_JSON);
       
    });
   }

init();

function createLogos(json) {
        for (const logo of json) {
            const html = `<div class='logo'> <div class='logo__holder'> <div class='logo__image'> <img src='logos/${logo.filename}/${logo.filename}.svg' alt='${logo.title}logo'> </div><div class='logo__download'> <div class='logo__download__overlay'> <a href='logos/${logo.filename}/${logo.filename}.svg' download='${logo.title}Logo'> <span class='logo__download__overlay--svg'> Download SVG </span> </a> <a href='logos/${logo.filename}/${logo.filename}.png' download='${logo.title}Logo'> <span class='logo__download__overlay--png'> Download PNG </span> </a> </div></div></div><div class='logo__text'> <p class='logo__text--primary'>${logo.title}</p><p class='logo__text--secondary'>${logo.category}</p></div></div>`;
            
            const main = document.querySelector('main');
            main.insertAdjacentHTML("beforeend", html);
            
            
        }
        
}

{/* <div class='logo'>
    <div class='logo__holder'>
            <div class='logo__image'>
                <img src='logos/${logo.filename}/${logo.filename}.svg' alt='${logo.title} logo'>
            </div>

        <div class='logo__download'>
            <div class='logo__download__overlay'>
                <a href='logos/${logo.filename}/${logo.filename}.svg' download='${logo.title} Logo'>
                    <span class='logo__download__overlay--svg'>
                        Download SVG
                    </span>
                </a>
                
                <a href='logos/${logo.filename}/${logo.filename}.png' download='${logo.title} Logo'>
                    <span class='logo__download__overlay--png'>
                        Download PNG
                    </span>
                </a>
            </div>
        </div>
    </div>

    <div class='logo__text'>
        <p class='logo__text--primary'>${logo.title}</p>
        <p class='logo__text--secondary'>${logo.category}</p>
    </div>
</div>  */}