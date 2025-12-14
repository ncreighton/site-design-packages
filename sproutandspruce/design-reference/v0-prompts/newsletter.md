# v0 Prompt: Newsletter Section

Create an inline newsletter signup section for embedding in page content.

## Requirements
- Full-width section (not popup/modal)
- Background: Surface color with subtle accent
- Layout: Headline left, form right (stack on mobile)
- Height: Comfortable padding, not cramped

## Structure
```html
<section class="newsletter-section">
  <div class="newsletter-content">
    <h2 class="newsletter-headline">Join Our Newsletter</h2>
    <p class="newsletter-description">Get weekly updates delivered to your inbox.</p>
  </div>
  <form class="newsletter-form">
    <input type="email" placeholder="Enter your email" />
    <button type="submit">Subscribe</button>
  </form>
</section>
```

## Styling
- Section padding: 48px vertical, 24px horizontal
- Border-radius: 12px
- Background: var(--color-surface) with subtle gradient or pattern
- Accent line or glow using primary color
- Input: 44px height, surface background, border on focus
- Button: Primary color, 44px height, 600 weight

## States
- Input focus: Primary border color, subtle glow
- Button hover: Slightly darker primary
- Success: Replace form with checkmark + "You're in!" message
- Error: Red border on input, error message below

## Responsive
- Desktop: Side-by-side layout
- Tablet: Stack vertically, centered
- Mobile: Full-width input and button

## Integration
- Systeme.io form action
- Hidden tag field for segmentation
- No name field (email only for conversion)

## Anti-patterns
❌ Multiple form fields
❌ CAPTCHA visible
❌ Aggressive styling
❌ Pop-up behavior
❌ Social links in newsletter section
