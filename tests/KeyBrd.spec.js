import{test,async} from '@playwright/test'

test("KeyBoard Actions",async({page})=>{
    await page.goto("https://www.google.com/")
    const SearchBar = await page.locator("#APjFqb")
    await SearchBar.fill("Playwright Keyboard")
    await page.waitForTimeout(2000)
    await SearchBar.focus();
    await page.keyboard.press("Control+A")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Backspace")
    await page.waitForTimeout(2000) 


})