import { test, expect } from 'playwright/test';
const data = JSON.parse(JSON.stringify(require("../Login.json")));


test.describe('Data driven test', function () {

    for (const datas of data) {

        test.describe(`test with user logins - ${datas.id}`, function () {

            test('LoginTest', async ({ page }) => {

                await page.goto("https://freelance-learn-automation.vercel.app/login");

                await page.getByPlaceholder("Enter Email").fill(datas.username);
                await page.getByPlaceholder("Enter Password").fill(datas.password);
                await page.getByRole('button', { name: 'Sign in' }).click();
                await page.waitForTimeout(3000);

            })

        })
    }

})