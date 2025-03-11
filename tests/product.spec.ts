import { test} from '@playwright/test'
import * as dotenv from "dotenv";
import ProductPage from '../pages/product.page';
import LoginPage from '../pages/login.page';

dotenv.config({ path: "../.env" });

const url: any = process.env.url
const email: any = process.env.email
const password: any = process.env.password

test.beforeEach(async ({ page }) => {
  await page.goto(url)
})

test('TC_004 Products CRUD Operation Test', async ({ page }) => {
  test.setTimeout(120000)
  const lp = new LoginPage(page)
  await lp.appLoginCommonFunctionality(email, password)
  const pp = new ProductPage(page)
  await pp.productsCrudFunctionality() 
})

test('TC_008 Products And Version Switching Test', async ({ page }) => {
  test.setTimeout(320000)
  const lp = new LoginPage(page)
  await lp.appLoginCommonFunctionality(email, password)
  const pp = new ProductPage(page)
  await pp.productsAndVersionSwitchingFunctionality() 
})

test.afterEach(async ({ page }) => {
  await page.close()
})