import { test} from '@playwright/test'
import * as dotenv from "dotenv";
import SharelynkPage from '../pages/sharelynk.page';
import LoginPage from '../pages/login.page';

dotenv.config({ path: "../.env" });

const url: any = process.env.url
const email: any = process.env.email
const password: any = process.env.password

test.beforeEach(async ({ page }) => {
  await page.goto(url)
})

test('TC_005 Sharelynk Test', async ({ page }) => {
  test.setTimeout(120000)
  const lp = new LoginPage(page)
  await lp.appLoginCommonFunctionality(email, password)
  const pp = new SharelynkPage(page)
  await pp.sharelynkFunctionality() 
})

test.afterEach(async ({ page }) => {
  await page.close()
})