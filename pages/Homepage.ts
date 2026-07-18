import { Page } from '@playwright/test';
import { fixture } from '../Utils/fixture';
import { config } from 'dotenv';

export class Homepage {
  constructor(private page: Page) {
  }

  public async navigateToHomePageUrl() {
    const url = process.env.Base_URL;
    if (!url) {
      throw new Error('Environment variable Base_URL is not defined');
    }
    await fixture.page.goto(url);
  }
}