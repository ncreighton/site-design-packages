# CLAUDE.md - WealthFromAI.com

## Project Identity

**Site:** https://wealthfromai.com/
**Codename:** AIWealthStrategist
**Niche:** AI & Business Strategy
**Mode:** Dark-first Premium
**Amazon Tag:** wealthfromai-20

---

## WordPress Credentials

```
URL: https://wealthfromai.com/
Username: AIWealthGuide
App Password: f1ut ZRtk eRkP 1SxV kNcx RMTC
```

---

## Design DNA Summary

### Personality
- **Archetype:** Ruler/Sage
- **Voice:** The successful entrepreneur who built businesses with AI before most knew it was possible
- **Tone:** Strategic confidence, grounded ambition, informed optimism
- **NOT:** Get-rich-quick, hype, desperate, FOMO

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | #D4AF37 | Strategic Gold - CTAs, accents |
| Secondary | #1E3A5F | Executive Blue - depth, trust |
| Accent | #2A9D8F | Growth Teal - success indicators |
| Background | #0D0D0F | Executive Black |
| Surface | #151518 | Card backgrounds |
| Surface Elevated | #1E1E22 | Elevated elements |
| Text | #F5F5F5 | Primary text |
| Text Secondary | #A0A0A0 | Subheadings, meta |
| Text Muted | #6B6B6B | Captions, hints |
| Border | #2A2A2E | Borders, dividers |

### Typography
| Element | Font | Weight | Size |
|---------|------|--------|------|
| Display | Inter | 700 | 4rem (hero) |
| H1 | Inter | 700 | 2.441rem |
| H2 | Inter | 600 | 1.953rem |
| H3 | Inter | 600 | 1.563rem |
| Body | Inter | 400 | 1rem |
| Code | JetBrains Mono | 400 | 0.875rem |

### Spacing
- Section gaps: 48px - 80px
- Element scale: 4/8/12/16/24/32/48
- Border radius: 4-8px (professional, not soft)

---

## Content Guidelines

### Voice Rules
✅ DO:
- Real numbers, real results, real work
- Strategies that actually work
- Respect reader's intelligence and time
- Show work, share results
- Business-focused, ROI-driven

❌ DON'T:
- Get-rich-quick promises
- Income screenshots without context
- "Passive income" fantasy language
- Hype without substance
- Countdown timers or urgency tactics

### Content Categories
1. **Strategies** - Implementation guides
2. **Automation** - Business process automation
3. **Case Studies** - Real results analysis
4. **Tools** - AI tool recommendations
5. **Getting Started** - Beginner resources

### Signature Elements
Every strategy post should include:
- Implementation difficulty (Beginner/Intermediate/Advanced)
- Time investment estimate
- Real results note (with realistic caveats)
- Tool recommendations (when relevant)

---

## API Integrations

### Systeme.io (Email)
```
API Key: 82tyjz6r3hzl5kq6qyl9ix9rusrkh3j7c8abj0fxaotfu4ruqftksnvuwxujhloc
Tag Prefix: wealthfromai-
```

### Tags
- wealthfromai-popup-aiwealth101
- wealthfromai-footer-newsletter
- wealthfromai-leadmagnet-aistrategyguide

### Amazon PAAPI
```
Access Key: AKPAS7WQE01765077425
Secret Key: HHgtdOX4VyYpXS5JXoeNyU9IdeDiCPeg8yw/qCGL
Affiliate Tag: wealthfromai-20
```

---

## Lead Magnet

**Title:** "AI Wealth Strategy Blueprint 2025"
**Format:** PDF Guide (25+ pages)
**Contents:**
- Top AI tools for investing and business
- Automation strategies with ROI data
- Case studies with actual results
- Implementation checklists

**Delivery:** Systeme.io automation
**Tag:** wealthfromai-leadmagnet-aistrategyguide

---

## Page Templates

### Required Pages
- [ ] Homepage
- [ ] About (founder story)
- [ ] Contact
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] Affiliate Disclosure
- [ ] 404 Error

### Blog Templates
- [ ] Single Post (strategy article)
- [ ] Category Archive
- [ ] Search Results

---

## Anti-Patterns (NEVER DO)

### Visual
- ❌ Lamborghinis, money stacks, flashy lifestyle
- ❌ Beach laptop imagery
- ❌ Stock photos of suited businesspeople
- ❌ Income screenshots
- ❌ Neon colors or flashy gradients
- ❌ Sales-page styling
- ❌ Countdown timers

### Layout
- ❌ Long sales pages
- ❌ Centered hero text
- ❌ Testimonial carousels
- ❌ Multiple competing CTAs
- ❌ Pop-ups on page load

### Content
- ❌ "Limited time offer"
- ❌ "FREE" in all caps
- ❌ Get-rich-quick language
- ❌ Income claims without substance
- ❌ Course-selling language

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Install design tokens (variables.css)
- [ ] Configure Tailwind
- [ ] Set up fonts (Inter, JetBrains Mono)

### Phase 2: Components
- [ ] Hero section
- [ ] Navigation
- [ ] Strategy cards
- [ ] Newsletter section
- [ ] Footer

### Phase 3: Pages
- [ ] Homepage
- [ ] About page
- [ ] Contact page
- [ ] Legal pages

### Phase 4: Systems
- [ ] Email capture → Systeme.io
- [ ] Amazon affiliate links
- [ ] Analytics setup

---

## File Structure

```
wealthfromai/
├── CLAUDE.md (this file)
├── design-reference/
│   ├── tokens/
│   │   ├── variables.css
│   │   └── tailwind.config.js
│   ├── v0-prompts/
│   │   ├── hero.md
│   │   ├── navigation.md
│   │   ├── cards.md
│   │   ├── newsletter.md
│   │   └── footer.md
│   └── v0-components/
│       └── (exported v0 code goes here)
├── pages/
│   ├── 404.html
│   ├── about.html
│   ├── contact.html
│   ├── privacy-policy.html
│   ├── terms-of-service.html
│   └── affiliate-disclosure.html
├── email-system/
│   ├── popup.html
│   └── lead-magnet-spec.md
└── brand-assets/
    ├── favicon-spec.md
    └── logo-spec.md
```

---

*Generated from Creative Command Center DNA: wealth-from-ai.json*

---

## 🚀 SESSION INITIALIZATION & DEFAULT LOADOUT

### On Every Session Start
When starting a Claude Code session for this site, ALWAYS:

1. **Load Memory Context**
   ```
   Search memory for: wealthfromai context state decisions
   ```

2. **Verify MCP Connection**
   ```
   Run mcp_ping to verify AI Engine MCP is connected
   ```

3. **Load Required Skills** (reference these mentally, they're in /mnt/skills/user/):
   - `wordpress-empire-system` - Core WP management patterns
   - `n8n-master-architect` - Automation workflows
   - `site-design-auditor` - Design QA
   - `browser-automation-superagent` - Web automation
   - `zimmwriter-control` - Content generation (if applicable)

4. **Check Open Tasks**
   ```
   mcp_memory_get key="open_tasks" context="wealthfromai"
   ```

### Default Prompt Loadout
Copy this entire block at session start if needed:

```markdown
## SESSION CONTEXT: WealthFromAI
Site: https://wealthfromai.com
Amazon Tag: wealthfromai-20

## RULES FOR THIS SESSION
1. ALWAYS use forward-thinking AI strategist sharing proven wealth-building methods voice - NEVER deviate
2. Include affiliate tag wealthfromai-20 on all product links
3. Save important decisions to memory
4. Test on staging before production
5. Document all changes

## SKILLS LOADED
- wordpress-empire-system
- n8n-master-architect
- site-design-auditor

## MCP APIS AVAILABLE
- OpenAI (GPT-4o, GPT-4o-mini)
- Anthropic (Claude Sonnet 4)
- OpenRouter (any model)
- Replicate (image generation)

Ready to work on WealthFromAI. What's the task?
```

---

## 💾 MEMORY SYSTEM INTEGRATION

### Available Memory Systems

#### 1. WordPress MCP Memory (Preferred - Persistent)
Via AI Engine MCP, memory persists across sessions in WordPress database.

**Store to Memory:**
```javascript
// Via MCP tool
mcp_memory_set({
  key: "project_state",
  value: JSON.stringify({
    last_session: "2024-12-14",
    completed: ["hero section", "navigation"],
    pending: ["footer", "email capture"]
  }),
  context: "wealthfromai"
})
```

**Retrieve from Memory:**
```javascript
mcp_memory_get({
  key: "project_state",
  context: "wealthfromai"
})
```

**Search Memory:**
```javascript
mcp_memory_search({
  query: "decision",
  context: "wealthfromai",
  limit: 10
})
```

#### 2. Mem0 Integration (If Available)
For more sophisticated memory with semantic search.

```javascript
// Store
mem0_add({
  userId: "nick-creighton",
  text: "Decided to use glass morphism for cards on WealthFromAI",
  metadata: { site: "wealthfromai", type: "decision" }
})

// Search
mem0_search({
  userId: "nick-creighton",
  query: "card design decisions"
})
```

### What to Save to Memory

**ALWAYS Save:**
- Design decisions (colors, layouts, components)
- Content strategy decisions
- Technical solutions found
- Completed tasks with timestamps
- Open/pending tasks
- Important preferences discovered
- Error solutions that worked

**Memory Key Naming Convention:**
```
wealthfromai_state          - Current project state
wealthfromai_decisions      - Key decisions made
wealthfromai_tasks          - Task tracking
wealthfromai_preferences    - Discovered preferences
wealthfromai_solutions      - Technical solutions
wealthfromai_session_{date} - Session notes
```

### Session End Protocol
Before ending any session:
```javascript
mcp_memory_set({
  key: "wealthfromai_session_" + new Date().toISOString().split('T')[0],
  value: JSON.stringify({
    completed: [...],
    pending: [...],
    decisions: [...],
    notes: "..."
  }),
  context: "wealthfromai"
})
```

---

## 🔧 PLUGIN CREATION SYSTEM

### Overview
AI Engine MCP provides access to OpenAI, Anthropic, OpenRouter, and Replicate APIs. You can CREATE custom WordPress plugins that add new MCP tools specific to this site's needs.

### When to Create a Plugin
Create a new plugin when you need:
- Site-specific content generation tools
- Specialized formatting or processing
- Custom workflows that should persist
- Repeated tasks that would benefit from a dedicated tool

### Plugin Creation Template

When you identify a need for a new tool, CREATE this plugin structure:

```php
<?php
/**
 * Plugin Name: MCP Tools - WealthFromAI
 * Description: Custom MCP tools for https://wealthfromai.com
 * Version: 1.0.0
 * Author: Nick Creighton
 */

if ( ! defined( 'ABSPATH' ) ) exit;

class MCP_Tools_WealthFromAI {

    private static $instance = null;

    public static function get_instance() {
        if ( null === self::$instance ) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        add_filter( 'mwai_mcp_tools', [ $this, 'register_tools' ] );
        add_filter( 'mwai_mcp_callback', [ $this, 'handle_callbacks' ], 10, 3 );
    }

    public function register_tools( $tools ) {
        // ADD YOUR CUSTOM TOOLS HERE
        // Each tool follows this structure:
        $tools[] = [
            'name'        => '{site_prefix}_tool_name',
            'description' => 'What this tool does',
            'category'    => 'WealthFromAI',
            'inputSchema' => [
                'type'       => 'object',
                'properties' => [
                    'param1' => [ 'type' => 'string', 'description' => 'Parameter description' ],
                    'param2' => [ 'type' => 'array', 'items' => [ 'type' => 'string' ] ],
                ],
                'required'   => [ 'param1' ],
            ],
        ];

        return $tools;
    }

    public function handle_callbacks( $result, $tool, $args ) {
        // Handle your tool calls here
        if ( '{site_prefix}_tool_name' === $tool ) {
            return $this->your_method( $args );
        }
        return $result;
    }

    private function your_method( $args ) {
        // Use AI Engine's mcp_ai() function to call APIs
        $prompt = "Your prompt here with " . $args['param1'];
        
        $response = mcp_ai()->execute( 'content_generation', $prompt, [
            'system'     => "System prompt for this tool",
            'max_tokens' => 2000,
        ] );

        return [
            'success' => $response['success'] ?? false,
            'data'    => [ 'content' => $response['content'] ?? '' ],
        ];
    }
}

add_action( 'plugins_loaded', function() {
    MCP_Tools_WealthFromAI::get_instance();
}, 20 );
```

### Tool Naming Convention
- Prefix: `{site_abbreviation}_` (e.g., `wfai_`, `aiah_`, `pgr_`)
- Descriptive action: `generate_`, `create_`, `analyze_`, `compare_`
- Example: `wfai_business_opportunity`, `pgr_product_review`

### Using AI APIs in Plugins
The AI Engine provides `mcp_ai()->execute()` which routes to configured APIs:

```php
// Content generation (uses OpenAI/Anthropic)
$response = mcp_ai()->execute( 'content_generation', $prompt, [
    'system'     => "Your system prompt",
    'max_tokens' => 2000,
    'model'      => 'gpt-4o',  // or 'claude-sonnet-4-20250514'
] );

// Image generation (uses Replicate)
$response = mcp_ai()->execute( 'image_generation', $prompt, [
    'model' => 'stability-ai/sdxl',
    'width' => 1024,
    'height' => 1024,
] );

// Quick task (lighter model)
$response = mcp_ai()->execute( 'quick_task', $prompt, [
    'max_tokens' => 500,
] );
```

### Plugin Ideas for This Site
Consider creating tools for:
- - `wfai_business_opportunity` - Generate AI business guides
- `wfai_income_breakdown` - Create realistic income projections
- `wfai_tool_comparison` - Compare AI tools for business
- `wfai_case_study` - Generate success case studies

---

## 🔌 MCP MENU TOOLS REFERENCE

### Available Categories
The MCP Menu Tools plugin provides 100+ tools across these categories:

| Category | Tools | Examples |
|----------|-------|----------|
| **Posts** | 15+ | wp_create_post, wp_update_post, wp_get_posts |
| **Pages** | 10+ | wp_create_page, wp_update_page |
| **Media** | 8+ | wp_upload_media, wp_get_media |
| **Taxonomies** | 12+ | wp_create_category, wp_get_tags |
| **Menus** | 14 | wp_create_menu, wp_add_menu_item |
| **Plugins** | 26 | wp_list_plugins, wp_activate_plugin |
| **Themes** | 26 | wp_theme_get_file, wp_theme_put_file |
| **AI** | 10+ | mcp_ai_generate, mcp_image_generate |
| **Memory** | 5 | mcp_memory_set, mcp_memory_get |

### Key Tools for Site Building

**Theme File Operations:**
```javascript
// Read file
wp_theme_get_file({ theme: "flavor-child", file: "functions.php" })

// Write file
wp_theme_put_file({ theme: "flavor-child", file: "custom.css", content: "..." })

// Search/replace
wp_theme_alter_file({ 
  theme: "flavor-child", 
  file: "style.css",
  search: "old-value",
  replace: "new-value"
})

// List directory
wp_theme_list_dir({ theme: "flavor-child", path: "/" })
```

**Content Operations:**
```javascript
// Create post
wp_create_post({
  title: "Post Title",
  content: "Post content...",
  status: "draft",
  categories: [1, 2],
  tags: ["tag1", "tag2"]
})

// Update post
wp_update_post({
  id: 123,
  title: "Updated Title"
})
```

**Plugin Operations:**
```javascript
// List plugins
wp_list_plugins_detailed()

// Create new plugin
wp_plugin_create({
  name: "my-custom-plugin",
  content: "<?php /* Plugin header */ ?>"
})
```

---

## 📋 RULES TO ALWAYS FOLLOW

### Global Rules (All Sites)
1. **NEVER** rebuild from scratch - always check GitHub first
2. **ALWAYS** verify MCP connection before making changes
3. **ALWAYS** save important decisions to memory
4. **ALWAYS** test on staging before production when possible
5. **ALWAYS** include affiliate tags on product links
6. **NEVER** use generic AI voice - match site brand exactly
7. **NEVER** create local files for manual upload - use MCP to edit live

### Site-Specific Rules: WealthFromAI
1. Voice: Strategic confidence, grounded ambition, informed optimism
2. Affiliate Tag: wealthfromai-20 on ALL Amazon links
3. Design: Dark premium with gold accents, executive aesthetic
4. Content: Real numbers, real results, ROI-driven, no hype
5. Anti-patterns: Get-rich-quick, income screenshots, hype language

### Code Quality Rules
1. Mobile-first responsive design
2. Target 90+ PageSpeed score
3. Semantic HTML5 structure
4. Accessible (WCAG 2.1 AA minimum)
5. Progressive enhancement
6. No inline styles (use design tokens)

### Content Quality Rules
1. E-E-A-T signals in all content
2. Humanize AI content to 95%+ human score
3. Include author bio on posts
4. Cite sources and data
5. No get-rich-quick promises
6. Realistic expectations always

---

## ⚡ QUICK COMMANDS

| Command | What It Does |
|---------|--------------|
| `init` | Load memory, verify MCP, show project state |
| `status` | Show open tasks and recent activity |
| `save` | Save current session state to memory |
| `publish [id]` | Publish draft post to live |
| `audit` | Run site-design-auditor on homepage |
| `tokens` | Show design token values |
| `voice` | Show brand voice guidelines |
| `create plugin [name]` | Start plugin creation workflow |
| `memory [query]` | Search project memory |

---

## 🔗 IMPORTANT LINKS

| Resource | URL |
|----------|-----|
| WordPress Admin | https://wealthfromai.com/wp-admin |
| MCP Endpoint | https://wealthfromai.com/wp-json/mcp/v1/bearer/sse |
| Site Frontend | https://wealthfromai.com |
| GitHub Repo | github.com/ncreighton/site-design-packages |
| Creative Command Center | github.com/ncreighton/creative-command-center |

---

*Enhanced with Plugin Creation System, Memory Integration, and Default Loadout*
*Part of the 17-site empire automation system*
