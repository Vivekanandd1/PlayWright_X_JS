import{test,async, expect} from '@playwright/test'

test("File Upload",async({page})=>{
 await page.goto("https://the-internet.herokuapp.com/upload")
 
 await page.locator("#file-upload").setInputFiles("C:/Users/Admin/Downloads/test.png")

await page.waitForTimeout(4000)

await page.locator("#file-submit").click();

await expect(page.getByText("File Uploaded!")).toHaveText("File Uploaded!");

})