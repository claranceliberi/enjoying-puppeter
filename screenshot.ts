import puppeteer from 'puppeteer'

export async  function screenShot(url : string) {
    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        await page.screenshot({ path: 'example.png' });
    
        await browser.close();
    }catch(e) {
        console.log(e)
    }
}
