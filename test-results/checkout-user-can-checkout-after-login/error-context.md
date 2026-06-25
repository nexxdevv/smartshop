# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> user can checkout after login
- Location: e2e/checkout.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/total/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/total/i)

```

```yaml
- navigation: SmartShop Cart0
- main:
  - heading "Login required" [level=1]
- alert
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("user can checkout after login", async ({ page }) => {
  4  |   await page.goto("/login");
  5  | 
  6  |   await page.getByPlaceholder("email").fill("test@email.com");
  7  |   await page.getByRole("button", { name: /login/i }).click();
  8  | 
  9  |   await page.goto("/");
  10 | 
  11 |   await page.getByRole("button", { name: /add to cart/i }).first().click();
  12 | 
  13 |   await page.goto("/checkout");
  14 | 
> 15 |   await expect(page.getByText(/total/i)).toBeVisible();
     |                                          ^ Error: expect(locator).toBeVisible() failed
  16 | 
  17 |   await page.getByRole("button", { name: /place order/i }).click();
  18 | });
```