import { test, expect } from '@playwright/test';

/*This entire code is generated with the help of codegen
The command is
 npx playwright codegen https://opensource-demo.orangehrmlive.com/web/index.php/auth/login -o ./tests/Codegen.spec.js
1. npx playwright codegen: triggers the codegen feature
2. Url: codegen directly open this url in fetured browser engine
3. -o: stand for ouput command
4. File path: File where codgen code will be dumped.


*/

test.only('Codegen Test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(3000)
  await page.getByRole('listitem').filter({ hasText: 'Minh Nguyen' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});