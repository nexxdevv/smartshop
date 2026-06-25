import { test, expect } from "@playwright/test";

test("checkout redirects to dashboard after success", async ({ page }) => {
  await page.goto("/login");

  await page.getByPlaceholder("email").fill("test@email.com");
  await page.getByRole("button", { name: /login/i }).click();

  await page.goto("/");

  await page.getByRole("button", { name: /add to cart/i }).first().click();

  await page.goto("/checkout");

  await page.getByRole("button", { name: /place order/i }).click();

  await expect(page).toHaveURL(/checkout\/success/);

  await expect(
    page.getByText(/order successful/i)
  ).toBeVisible();

  await expect(page).toHaveURL(/dashboard/);
});