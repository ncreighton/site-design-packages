# v0 Prompt: Product Comparison Table

Create a responsive comparison table for side-by-side product evaluation.

## Structure
```html
<div class="comparison-wrapper">
  <table class="comparison-table">
    <thead>
      <tr>
        <th class="feature-col">Feature</th>
        <th class="product-col">
          <img src="..." alt="Product A" />
          <span class="product-name">Product A</span>
          <span class="product-price">$299</span>
        </th>
        <th class="product-col winner">
          <span class="winner-badge">Our Pick</span>
          <img src="..." alt="Product B" />
          <span class="product-name">Product B</span>
          <span class="product-price">$349</span>
        </th>
        <th class="product-col">
          <img src="..." alt="Product C" />
          <span class="product-name">Product C</span>
          <span class="product-price">$199</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Battery Life</td>
        <td>7 days</td>
        <td class="winner-cell">14 days</td>
        <td>5 days</td>
      </tr>
      <!-- More rows -->
    </tbody>
    <tfoot>
      <tr>
        <td>Overall Score</td>
        <td><span class="score">8.2</span></td>
        <td><span class="score winner">9.1</span></td>
        <td><span class="score">7.5</span></td>
      </tr>
      <tr class="cta-row">
        <td></td>
        <td><a href="#" class="buy-btn">Check Price</a></td>
        <td><a href="#" class="buy-btn primary">Check Price</a></td>
        <td><a href="#" class="buy-btn">Check Price</a></td>
      </tr>
    </tfoot>
  </table>
</div>
```

## Styling Specs
- Table: Full-width, border-collapse
- Header: Sticky on scroll, product images 80px
- Cells: 16px padding, alternating row colors
- Winner column: Subtle highlight background
- Winner badge: Primary color, positioned top

## Mobile Behavior
Option 1: Horizontal scroll with fixed first column
Option 2: Card-based comparison (stack products)

## Score Display
- Circle or pill with score number
- Color coded: 9+ green, 7-8.9 teal, 6-6.9 amber, <6 red

## CTA Buttons
- Primary button for winner/recommended
- Secondary button style for others
- Affiliate disclosure note below table

## Interactive Features
- Highlight row on hover
- Click to expand detailed comparison
- Filter to show specific features only

## Anti-patterns
❌ More than 4 products compared
❌ Overwhelming number of rows
❌ No clear winner indication
❌ Missing prices
❌ No affiliate disclosure
