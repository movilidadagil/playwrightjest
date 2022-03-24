import { webkit } from "playwright"
import LoginPage from "./windowHandling/pages/Login.page";


declare const reporter:any

describe('Login Let code', () =>{
    let login:LoginPage

    xtest('Login letcode',  async () =>{
        const browser = await webkit.launch({
            headless: false
        })
        const context =  await browser.newContext();
        const page =  await context.newPage();
        await page.goto('https://letcode.in')
        await page.click("text=Log in")
        await page.fill("input[name='email']",'koushik350@gmail.com')
        await page.fill("input[name='password']",'Pass123$')
        await page.click('button:text("LOGIN")')
        await page.click("Sign out")
        await browser.close()
    })

    test('Login letcode by using pageobject ',  async () =>{
        const browser = await webkit.launch({
            headless: false
        })
        const context =  await browser.newContext();
        const page =  await context.newPage();
        await page.goto('https://letcode.in')
        await page.click("text=Log in")
        login = new LoginPage(page);
        await reporter
        .description("Login should work cool")
        .story("BOND-007");

    reporter.startStep("type username");
    await login.enterUserName('koushik350@gmail.com')
    reporter.endStep();
    reporter.startStep("type user passwrod");
    await login.enterUserPassword('Pass123$')
    reporter.endStep();
    reporter.startStep("click login button");
    await login.clickLoginBtn()
    reporter.endStep();



        
    })

    


})