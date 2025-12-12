const{test,expect}=require('@playwright/test')

test("Verify Title",async({page})=>{
await page.goto("https://github.com/Vivekanandd1")
const title = await page.title()
console.log("Title is: "+ title)
})