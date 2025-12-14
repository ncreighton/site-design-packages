# CLAUDE.md - Sprout-and-Spruce.com

## Project Identity

**Site:** https://sprout-and-spruce.com/
**Codename:** HomeGardenGuru
**Niche:** Home Gardening & Plant Care
**Mode:** Light-first (Natural Daylight)
**Amazon Tag:** sproutandspruce-20

---

## WordPress Credentials

```
URL: https://sprout-and-spruce.com/
Username: HomeGardenGuru
App Password: Meu8 NI49 ZqFm xEag yb5v ZwMR
```

---

## Design DNA Summary

### Personality
- **Archetype:** Creator/Caregiver
- **Voice:** The experienced gardener next door who shares wisdom from seasons of trial
- **Tone:** Patient, encouraging, celebrates small wins - never makes you feel bad about failures
- **NOT:** Judgmental, overly technical, unrealistic expectations

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | #228B22 | Garden Green - growth, nature |
| Secondary | #8B7355 | Rich Earth - grounded, soil |
| Accent | #DAA520 | Harvest Gold - success, flowers |
| Background | #FFFEF9 | Natural White |
| Surface | #F5F5DC | Beige |
| Surface Elevated | #E8E4D8 | Light Tan |
| Text | #2F2F2F | Soft Black |
| Text Secondary | #4A4A4A | Dark Gray |
| Text Muted | #6B6B6B | Medium Gray |

### Typography
- Display: Merriweather, 700
- Headings: Inter, 600
- Body: Inter, 400
- 16px base

---

## API Integrations

### Systeme.io
```
Tag: sproutandspruce-popup-gardencalendar
Tag: sproutandspruce-leadmagnet-beginnersguide
```

### Amazon
```
Affiliate Tag: sproutandspruce-20
```

---

## Lead Magnet

**Title:** "Seasonal Garden Planning Calendar"
**Format:** PDF Calendar + Printable
**Contents:** Month-by-month planting guide, regional adjustments

---

## Content Categories
1. Vegetables - Edible gardening
2. Flowers - Ornamental growing
3. Indoor Plants - Houseplant care
4. Garden Design - Layouts and planning
5. Organic Methods - Natural gardening
6. Troubleshooting - Pests, diseases, problems

---

## Anti-Patterns

- ❌ Making beginners feel inadequate
- ❌ Only showing perfect gardens
- ❌ Ignoring failures/lessons
- ❌ Overly technical jargon
- ❌ Climate-specific without noting it
- ❌ Generic stock garden imagery

---

*Generated from Creative Command Center DNA: sprout-and-spruce.json*

---

## 🚀 SESSION INITIALIZATION & DEFAULT LOADOUT

### On Every Session Start
When starting a Claude Code session for this site, ALWAYS:

1. **Load Memory Context**
   ```
   Search memory for: sproutandspruce context state decisions
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
   mcp_memory_get key="open_tasks" context="sproutandspruce"
   ```

### Default Prompt Loadout
Copy this entire block at session start if needed:

```markdown
## SESSION CONTEXT: Sprout and Spruce
Site: https://sproutandspruce.com
Amazon Tag: sproutandspruce-20

## RULES FOR THIS SESSION
1. ALWAYS use experienced gardener sharing practical growing wisdom voice - NEVER deviate
2. Include affiliate tag sproutandspruce-20 on all product links
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

Ready to work on Sprout and Spruce. What's the task?
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
  context: "sproutandspruce"
})
```

**Retrieve from Memory:**
```javascript
mcp_memory_get({
  key: "project_state",
  context: "sproutandspruce"
})
```

**Search Memory:**
```javascript
mcp_memory_search({
  query: "decision",
  context: "sproutandspruce",
  limit: 10
})
```

#### 2. Mem0 Integration (If Available)
For more sophisticated memory with semantic search.

```javascript
// Store
mem0_add({
  userId: "nick-creighton",
  text: "Decided to use glass morphism for cards on Sprout and Spruce",
  metadata: { site: "sproutandspruce", type: "decision" }
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
sproutandspruce_state          - Current project state
sproutandspruce_decisions      - Key decisions made
sproutandspruce_tasks          - Task tracking
sproutandspruce_preferences    - Discovered preferences
sproutandspruce_solutions      - Technical solutions
sproutandspruce_session_{date} - Session notes
```

### Session End Protocol
Before ending any session:
```javascript
mcp_memory_set({
  key: "sproutandspruce_session_" + new Date().toISOString().split('T')[0],
  value: JSON.stringify({
    completed: [...],
    pending: [...],
    decisions: [...],
    notes: "..."
  }),
  context: "sproutandspruce"
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
 * Plugin Name: MCP Tools - Sprout and Spruce
 * Description: Custom MCP tools for https://sproutandspruce.com
 * Version: 1.0.0
 * Author: Nick Creighton
 */

if ( ! defined( 'ABSPATH' ) ) exit;

class MCP_Tools_SproutAndSpruce {

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
            'category'    => 'Sprout and Spruce',
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
    MCP_Tools_SproutAndSpruce::get_instance();
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
- - `sas_growing_guide` - Generate plant growing guides
- `sas_seasonal_calendar` - Create seasonal gardening calendars
- `sas_problem_solver` - Generate plant problem diagnosis

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

### Site-Specific Rules: Sprout and Spruce
1. Voice: Earthy, knowledgeable, nurturing, practical
2. Affiliate Tag: sproutandspruce-20 on ALL Amazon links
3. Design: Natural greens, organic aesthetic, growth-focused
4. Content: Seasonal advice, climate-aware, beginner-friendly
5. Anti-patterns: One-size-fits-all advice, ignoring climate zones

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
| WordPress Admin | https://sproutandspruce.com/wp-admin |
| MCP Endpoint | https://sproutandspruce.com/wp-json/mcp/v1/bearer/sse |
| Site Frontend | https://sproutandspruce.com |
| GitHub Repo | github.com/ncreighton/site-design-packages |
| Creative Command Center | github.com/ncreighton/creative-command-center |

---

*Enhanced with Plugin Creation System, Memory Integration, and Default Loadout*
*Part of the 17-site empire automation system*
