import {expect, test} from "@playwright/test";

test.beforeEach("Login",async({page})=>{
    await page.goto("http://www.saucedemo.com/");
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();  
    });

test("Login Pass",async({page})=>{
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test("Login Fail",async({page})=>{
  await page.goto("http://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secrert_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toHaveText("Epic sadface: Username and password do not match any user in this service");
});

test("Checkout",async({page})=>{
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('.checkout_info').click();
  await page.locator('[data-test="firstName"]').fill('SANTHOSH');
  await page.locator('[data-test="lastName"]').fill('V');
  await page.locator('[data-test="postalCode"]').fill('625703');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toHaveText("Thank you for your order!");
});

test("Navigation",async({page})=>{
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
});