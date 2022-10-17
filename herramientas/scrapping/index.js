const puppeteer = require('puppeteer');

(async () => {
    console.log('Lanzamos navegador');
    const browser = await puppeteer.launch({headless: false}); // Lanzar navegdaor

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    var titulo = await page.evaluate(() => {
        const h1 = document.querySelector('.mw-page-title-main');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });

    console.log(titulo);

    setTimeout(() => {     
        console.log('Cerrar navegador...');        
        browser.close(),1000;     
        console.log('Navegador cerrado...');
    }, 1000);    
})();