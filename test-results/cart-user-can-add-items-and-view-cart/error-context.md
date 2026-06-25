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
    - generic [ref=e4]: Cart0
  - main [ref=e5]:
    - heading "SmartShop" [level=1] [ref=e6]
    - generic [ref=e7]:
      - article [ref=e8]:
        - heading "iPhone 16" [level=2] [ref=e9]
        - paragraph [ref=e10]: $999
        - paragraph [ref=e11]: smartphone
        - paragraph [ref=e12]: In Stock
        - button "Add to Cart" [ref=e14]
      - article [ref=e15]:
        - heading "Galaxy S25" [level=2] [ref=e16]
        - paragraph [ref=e17]: $899
        - paragraph [ref=e18]: smartphone
        - paragraph [ref=e19]: In Stock
        - button "Add to Cart" [ref=e21]
      - article [ref=e22]:
        - heading "iPad Air" [level=2] [ref=e23]
        - paragraph [ref=e24]: $699
        - paragraph [ref=e25]: tablet
        - paragraph [ref=e26]: In Stock
        - button "Add to Cart" [ref=e28]
  - button "Open Next.js Dev Tools" [ref=e34] [cursor=pointer]:
    - img [ref=e35]
  - alert [ref=e38]
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