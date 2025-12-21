import{test, expect} from '@playwright/test';
import { log } from 'node:console';

test('Dropdown automation',async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    
    await page.locator("#state").selectOption({label:"Madhya Pradesh"});
   
    await page.locator("#state").selectOption({value:"Nagaland"});
 
    await page.locator("#state").selectOption({index:5});
    await page.waitForTimeout(3000);

    const values = await page.locator("#state").textContent();
    console.log(values);

    await expect(values.includes("Goa")).toBeTruthy();

 /*Getting State name one by One*/
    // const ele = await page.$("#state")
    // const allstate = await ele.$$("option")
    // for(let i=0;i<allstate.length;i++){
    //    let statez =  allstate[i]
    //    let statename = await statez.textContent();
    //    console.log(i+" : "+ statename)
    // }

/* 2nd way to get state name*/
const options = page.locator('#state option');
const count = await options.count();

for (let i = 0; i < count; i++) {
  const statename = await options.nth(i).textContent();
  console.log(i + ' : ' + statename);
}


 await page.waitForTimeout(3000);
await page.locator("#hobbies").scrollIntoViewIfNeeded();
   await page.waitForTimeout(3000);
await page.locator("#hobbies").selectOption(['Playing','Reading','Singing'])
await page.waitForTimeout(3000);

}
)


