module.exports = class LoginPage{

    constructor(page){
        this.page = page;
        this.UserName = page.locator('//input[@name="email"]');
        this.Password = page.locator('//input[@name="password"]');
        this.submitBTn = page.locator('//button[@type="submit"]');
    }

   async Loginflow(Username,password){
    await this.UserName.fill(Username);
    await this.Password.fill(password);
    await this.submitBTn.click();

   }
}


