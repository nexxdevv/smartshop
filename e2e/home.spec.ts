// e2e/home.spec.ts

import { test, expect } from "@playwright/test";

test("shows products on homepage", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /smartshop/i,
    })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: /iphone 16/i,
    })
  ).toBeVisible();
});