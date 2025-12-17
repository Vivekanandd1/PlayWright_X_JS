const{test,expect}=require('@playwright/test')

test.only("Verify Login Functionality",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
await page.getByPlaceholder('Username').fill('Admin')
await page.locator("//input[@type='password']").fill('admin123')
await page.locator("//button[@type='submit']").click()
await expect(page).toHaveURL(/dashboard/)
await page.locator("//img[@alt='profile picture']").click
await page.waitForTimeout(3000)
await page.getByText("Logout").click

})