const{test, expects} = require('playwright/test');
const {login}  = require('../SApages/SkillLogin');

test('Login Test',async({page})=>{
    await page.goto('auth/sign-in');
    // page.
})