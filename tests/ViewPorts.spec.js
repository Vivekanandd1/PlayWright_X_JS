const{test,expect}=require('@playwright/test')

test("Verify Screen Resolutions",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
console.log(await page.viewportSize())


})