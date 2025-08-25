import { test, expect } from "@playwright/test"
test("Login pass", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    //await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
    await expect(page.locator('input#user-name')).toHaveAttribute('type', 'text');
    await expect(page.locator('input#password')).toHaveAttribute('type', 'password');
    await expect(page.locator('input#login-button')).toBeEnabled();
    await expect(page.locator('.login_credentials')).toHaveCount(1);
    await expect (page.locator('[data-test="error"]')).not.toBeVisible();
    //await expect(page.locator('.error-message-container')).toBeHidden();
   
    await expect(page.getByRole('heading', { name: 'Accepted usernames are:' })).toBeVisible
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.locator('[data-test="item-4-title-link"]').click();
   
    await expect(page.locator('[data-test="item-sauce-labs-backpack-img"]')).toBeVisible({ timeout: 5000 });
});