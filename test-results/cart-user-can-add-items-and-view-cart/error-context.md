# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> user can add items and view cart
- Location: e2e/cart.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('article', { name: /iphone 16/i }).getByRole('button', { name: /add to cart/i })

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
    - heading "SmartShop" [level=1] [ref=e10]
    - generic [ref=e11]:
      - article [ref=e12]:
        - heading "iPhone 16" [level=2] [ref=e13]
        - paragraph [ref=e14]: $999
        - paragraph [ref=e15]: smartphone
        - paragraph [ref=e16]: In Stock
        - button "Add to Cart" [ref=e18]
      - article [ref=e19]:
        - heading "Galaxy S25" [level=2] [ref=e20]
        - paragraph [ref=e21]: $899
        - paragraph [ref=e22]: smartphone
        - paragraph [ref=e23]: In Stock
        - button "Add to Cart" [ref=e25]
      - article [ref=e26]:
        - heading "iPad Air" [level=2] [ref=e27]
        - paragraph [ref=e28]: $699
        - paragraph [ref=e29]: tablet
        - paragraph [ref=e30]: In Stock
        - button "Add to Cart" [ref=e32]
  - button "Open Next.js Dev Tools" [ref=e38] [cursor=pointer]:
    - img [ref=e39]
  - alert [ref=e42]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("user can add items and view cart", async ({ page }) => {
  4  |   await page.goto("/");
  5  | 
  6  |   const iphoneCard = page.getByRole("article", {
  7  |     name: /iphone 16/i,
  8  |   });
  9  | 
  10 |   await iphoneCard
  11 |     .getByRole("button", { name: /add to cart/i })
> 12 |     .click();
     |      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  13 | 
  14 |   await page.goto("/cart");
  15 | 
  16 |   await expect(page.getByText(/iphone 16/i)).toBeVisible();
  17 |   await expect(page.getByText(/total/i)).toBeVisible();
  18 | });
```