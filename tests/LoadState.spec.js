import { test, expect } from 'playwright/test'

test('Load test', async ({ browser }) => {
     const contextss = await browser.newContext();
   const page = await contextss.newPage();
    await page.goto("https://dd-demo-tau.vercel.app/web_elements.html#29-multi-tab");

      const [newpage] = await Promise.all([
      contextss.waitForEvent("page"),
      page.locator("//button[text()='Open New Tab']").click()

   ])


    const textele = await newpage.locator("//p[contains(text(), 'documentation')]").textContent();
    console.log(textele);
    
    
    
 
})