import{test, expect} from '@playwright/test'



test('BanksName retrival', async({page})=>{
await page.goto("https://vista.kreditz-dev.com/connect_bank?locale=sw&market=SE&fetch_data_for_months=12&client_id=239&env=sandbox&type=private&&ssn_number=201212121214&iframe=false&email=Vivekanand@kreditz.com&name=TestThree&case_id=iFrameTesting241201");
// await page.locator("//p/span");
const valuess = page.locator("//p/span");
const counts = await valuess.count();
for(let i=0;i<counts;i++){
    const bankName = await valuess.nth(i).textContent();
    console.log(bankName.trim()); 
}

});