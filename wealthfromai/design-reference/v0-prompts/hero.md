# v0.app Prompt: WealthFromAI Hero Section

---

Create a premium, executive-style hero section for a business AI strategy website. This is NOT a get-rich-quick site - it's a serious business publication about using AI for real revenue.

## EXACT SPECIFICATIONS

### Layout
- Full viewport height (100vh minimum)
- Dark background: #0D0D0F
- Content aligned LEFT (not centered)
- Two-column layout on desktop: text left (60%), subtle visual right (40%)
- Single column on mobile, text-focused

### Typography
- Font: Inter (system-ui fallback)
- Headline: "Build Real Businesses with AI" 
- Size: clamp(2.5rem, 1rem + 7.5vw, 4rem)
- Weight: 700
- Color: #F5F5F5
- Letter-spacing: -0.01em
- Line-height: 1.1

### Subheadline
- Text: "Strategies that actually generate revenue. No hype, no courses selling dreams—just proven AI implementations from people who've done it."
- Size: clamp(1.125rem, 1rem + 0.625vw, 1.25rem)
- Weight: 400
- Color: #A0A0A0
- Max-width: 540px
- Line-height: 1.7

### Primary CTA Button
- Text: "View Strategies"
- Background: #D4AF37 (Strategic Gold)
- Text color: #0D0D0F
- Padding: 16px 32px
- Border-radius: 6px
- Font-weight: 600
- Hover: background lightens to #E8C86A
- Transition: 200ms ease

### Secondary CTA
- Text: "See Case Studies →"
- Style: Text link with arrow
- Color: #D4AF37
- Hover: underline
- Gap between CTAs: 16px

### Visual Element (Right Side)
- Abstract data visualization or professional dashboard mockup
- Colors: #1E3A5F, #2A9D8F, #D4AF37 accents
- Subtle animated glow on key metrics
- NOT: money stacks, Lamborghinis, beach laptops, flashy lifestyle

### Background Details
- Base: #0D0D0F
- Subtle gradient: radial-gradient from center, #151518 to #0D0D0F
- Optional: very subtle grid pattern at 5% opacity
- NO: busy patterns, flashy effects, sales-page styling

### Scroll Indicator
- Subtle down arrow or "Scroll to explore"
- Color: #6B6B6B
- Positioned bottom center
- Animated subtle bounce

### Spacing
- Content padding: 80px (desktop), 40px (mobile)
- Gap between headline and subheadline: 24px
- Gap between subheadline and CTAs: 32px
- CTAs horizontal layout with 16px gap

## ANTI-PATTERNS - DO NOT INCLUDE
- ❌ Centered text layouts
- ❌ Get-rich-quick imagery (money, cars, luxury)
- ❌ Countdown timers
- ❌ Income claims or earnings screenshots
- ❌ Stock photos of suited businesspeople
- ❌ Neon colors or flashy gradients
- ❌ "Limited time offer" urgency
- ❌ Multiple CTAs competing for attention
- ❌ Testimonial carousels in hero
- ❌ Video backgrounds

## MOOD
Professional. Confident. Premium but not flashy. Like Bloomberg meets a startup. The visitor should feel they've found serious business content, not another course.

## TECHNICAL
- React/Next.js component
- Tailwind CSS
- Use CSS custom properties for colors
- Framer Motion for subtle animations (optional)
- Fully responsive
- Accessible (proper heading hierarchy, contrast ratios)
