class Login {

    constructor(page) {
        this.page = page;
        this.email = page.locator("#Email");
        this.password = page.locator("#Password");
        this.submitBtn = page.getByRole('button', { name: 'Log in' })

    }

    async goto() {
    await this.page.goto('https://demo.nopcommerce.com/login?returnUrl=%2F');
  }

  async loginToApp() {
    await this.email.fill('Mark@yopmail.com');
    await this.password.fill('Mark@123');
    await this.submitBtn.click();
  }
}

module.exports = Login;