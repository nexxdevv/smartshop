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
    - generic [ref=e3]: SmartShop
    - generic [ref=e4]:
      - generic [ref=e5]: Cart
      - generic [ref=e6]: "0"
  - main [ref=e7]:
    - heading "SmartShop" [level=1] [ref=e8]
    - generic [ref=e9]:
      - article [ref=e10]:
        - heading "iPhone 16" [level=2] [ref=e11]
        - paragraph [ref=e12]: $999
        - paragraph [ref=e13]: smartphone
        - paragraph [ref=e14]: In Stock
        - button "Add to Cart" [ref=e16]
      - article [ref=e17]:
        - heading "Galaxy S25" [level=2] [ref=e18]
        - paragraph [ref=e19]: $899
        - paragraph [ref=e20]: smartphone
        - paragraph [ref=e21]: In Stock
        - button "Add to Cart" [ref=e23]
      - article [ref=e24]:
        - heading "iPad Air" [level=2] [ref=e25]
        - paragraph [ref=e26]: $699
        - paragraph [ref=e27]: tablet
        - paragraph [ref=e28]: In Stock
        - button "Add to Cart" [ref=e30]
  - button "Open Next.js Dev Tools" [ref=e36] [cursor=pointer]:
    - img [ref=e37]
  - alert [ref=e40]
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