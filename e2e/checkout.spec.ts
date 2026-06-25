import { test, expect } from "@playwright/test";

test("user can checkout after login", async ({ page }) => {
  await page.goto("/login");

  await page.getByPlaceholder("email").fill("test@email.com");
  await page.getByRole("button", { name: /login/i }).click();

  await page.goto("/");

  await page.getByRole("button", { name: /add to cart/i }).first().click();

  await page.goto("/checkout");

  await expect(page.getByText(/total/i)).toBeVisible();

  await page.getByRole("button", { name: /place order/i }).click();
});