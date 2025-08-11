import {test} from "@playwright/test";
test("demo",async({page})=>{
    await page.goto("http://www.saucedemo.com/");
    await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
    await page.pause();
});