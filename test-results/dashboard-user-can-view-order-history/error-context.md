# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.ts >> user can view order history
- Location: e2e/dashboard.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /place order/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - link "SmartShop" [ref=e4] [cursor=pointer]:
      - /url: /
    - generic [ref=e5]:
      - link "Dashboard" [ref=e6] [cursor=pointer]:
        - /url: /dashboard
      - link "Cart" [ref=e7] [cursor=pointer]:
        - /url: /cart
      - generic [ref=e8]: "0"
  - main [ref=e9]:
    - heading "Login required" [level=1] [ref=e10]
  - button "Open Next.js Dev Tools" [ref=e16] [cursor=pointer]:
    - img [ref=e17]
  - alert [ref=e20]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("user can view order history", async ({ page }) => {
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
> 14 |   await page.getByRole("button", { name: /place order/i }).click();
     |                                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  15 | 
  16 |   await page.goto("/dashboard");
  17 | 
  18 |   await expect(page.getByText(/orders/i)).toBeVisible();
  19 | });
```