import{test,expect} from '@playwright/test'

test('Cofirm Alert Handling',async({page})=>{
    await page.goto("https://trytestingthis.netlify.app/", { waitUntil: 'commit' } );
    await page.waitForTimeout(6000);
    // await page.waitForEvent
   
    page.on('dialog',async(d)=>{
     expect(d.type()).toContain('confirm');
     console.log(d.message());
     
     expect(d.message()).toContain('Press a button!');

     await d.accept();
    })

    await page.waitForTimeout(6000);
     await page.locator("//button[text()=' Your Sample Alert Button!']").click();
})

test('Alert Handling',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'commit' } );
    page.on('dialog',async(d)=>{
     expect(d.type()).toContain('alert');
     console.log(d.message());
     
     expect(d.message()).toContain('I am an alert box!');

     await d.accept();
    })

    await page.waitForTimeout(6000);
     await page.locator("//button[text()='Simple Alert']").click();
})

test.only('Prompt Alert Handling',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'commit' } );
    page.on('dialog',async(d)=>{
     expect(d.type()).toContain('prompt');
     console.log(d.message());
     
     expect(d.message()).toContain('Please enter your name:');
     await d.accept("Vivek");
    })

    await page.waitForTimeout(6000);
    await page.locator("//button[text()='Prompt Alert']").click();
    await page.waitForTimeout(6000);
    const textsss = await page.locator("#demo").textContent();
    console.log(textsss);
    
})