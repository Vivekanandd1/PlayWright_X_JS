import{test,async} from '@playwright/test'
import { log } from 'node:console';

test('Normal Way',async({browser})=>{
   const incognitoContext = await browser.newContext();
   const page = await incognitoContext.newPage();
   await page.goto("https://www.google.com/")
   const SearchBar = await page.locator("#APjFqb")
   await SearchBar.focus(); 
   await SearchBar.fill("MCP")
   await page.keyboard.press("ArrowDown");
   await page.keyboard.press("ArrowDown");
   await page.keyboard.press("ArrowDown");
   await page.keyboard.press("ArrowDown");
   await page.keyboard.press("Enter");
   await page.waitForTimeout(6000);
})

test.only('Via Loop for exact match',async({page})=>{
   await page.goto("https://demo.automationtesting.in/AutoComplete.html")
   const SearchBar = page.locator("#searchbox");
   await SearchBar.fill("ind")
   const elements = page.locator("//li[@role='presentation']");
   await elements.first().waitFor({ state: 'visible' });
   const counts = await elements.count();
   for(let i=0;i<counts;i++){
    const value = (await elements.nth(i).textContent())?.trim();
    if(value && value.toLowerCase()==='indonesia'){
        await elements.nth(i).click();
        break;
    }
    else{
       
       console.log(`${i} : Not matched`); 

        
    }
   }
   await page.waitForTimeout(6000);
})