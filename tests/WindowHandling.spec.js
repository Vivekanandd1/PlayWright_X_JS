import{test,expect} from '@playwright/test' 

test('Windows Handling', async({browser})=>{
   const contextss = await browser.newContext();
   const page = await contextss.newPage();
   await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");

  const [newpage] = await Promise.all([
      contextss.waitForEvent("page"),
      page.locator("//a[text()='Free Access to InterviewQues/ResumeAssistance/Material']").click()

   ])
   await newpage.locator("#name").fill("Vatsal")
   await page.waitForTimeout(7000);

})