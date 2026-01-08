import{test,expect} from 'playwright/test';
const LoginPage = require('../Pages/LoginPage');


test('LoginTest', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginToApp();
})