module.exports = class Login{

    constructor(page){
        this.page = page;
        this.UserName = page.getByRole('textbox', { name: 'email' })
        this.Password = page.getByRole('textbox', { name: 'password' })
        this.submitBTn = page.getByRole("button",{name: 'submit'});
    }

   async Loginflow(Username,password){
    await this.UserName.fill(Username);
    await this.Password.fill(password);
    await this.submitBTn.click();

   }
}


