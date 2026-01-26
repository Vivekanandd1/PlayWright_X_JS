const { test, expect } = require('@playwright/test');
const LoginPage = require('../SApages/LoginPage');

test('Login Test',async({page})=>{
    ;
    await page.goto('auth/sign-in');
    const login = new LoginPage(page)
    await login.Loginflow('ProdCol@yopmail.com','College@123');
    
})