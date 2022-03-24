import { chromium } from "playwright"

describe('Launch Browser', () =>{
    test('Open letcode in',  async () =>{
        const browser = await chromium.launch({
            headless: false
        })
        const context =  await browser.newContext();
        const page =  await context.newPage();
        await page.goto('http://testotomasyontasarim.site')
        await browser.close()
    })


})