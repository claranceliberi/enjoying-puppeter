import puppetter from "puppeteer";

export async function toPdf(url: string){
    const browser = await puppetter.launch()
    const page = await browser.newPage()
    await page.goto(url, {waitUntil:'networkidle2'})
    await page.pdf({path:"test.pdf", format:'a4'})
    await browser.close()
}