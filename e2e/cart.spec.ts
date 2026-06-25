import { test, expect } from "@playwright/test";

test("user can add items and view cart", async ({ page }) => {
  await page.goto("/");

  const iphoneCard = page.getByRole("article", {
    name: /iphone 16/i,
  });

  await iphoneCard
    .getByRole("button", { name: /add to cart/i })
    .click();

  await page.goto("/cart");

  await expect(page.getByText(/iphone 16/i)).toBeVisible();
  await expect(page.getByText(/total/i)).toBeVisible();
});