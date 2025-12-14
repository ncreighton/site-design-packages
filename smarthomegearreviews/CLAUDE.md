# CLAUDE.md - SmartHomeGearReviews.com

## Project Identity

**Site:** https://smarthomegearreviews.com/
**Codename:** SmartHomeEditor
**Niche:** Smart Home Device Reviews
**Mode:** Light-first (Home Tech)
**Amazon Tag:** smarthomegearreviews-20

---

## WordPress Credentials

```
URL: https://smarthomegearreviews.com/
Username: SmartHomeEditor
App Password: QYhJ 91We njOn YYqb XXWq uHT4
```

---

## Design DNA Summary

### Personality
- **Archetype:** Sage/Creator
- **Voice:** The smart home enthusiast who's tested everything in their own home
- **Tone:** Technical expertise meets real-world home experience
- **NOT:** Overly complex, brand-biased, ignoring setup difficulties

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | #0066CC | Smart Blue - CTAs, tech |
| Secondary | #10B981 | Connected Green - success |
| Accent | #F59E0B | Alert Amber - new/featured |
| Background | #FFFFFF | Clean White |
| Surface | #F9FAFB | Light Gray |
| Surface Elevated | #F3F4F6 | Card Gray |
| Text | #1A202C | Near Black |
| Text Secondary | #4A5568 | Dark Gray |
| Text Muted | #718096 | Medium Gray |

### Typography
- Display: Inter, 700
- Headings: Inter, 600
- Body: Inter, 400
- Technical: JetBrains Mono

---

## API Integrations

### Systeme.io
```
Tag: smarthomegearreviews-popup-smarthomeguide
Tag: smarthomegearreviews-leadmagnet-setupguide
```

### Amazon
```
Affiliate Tag: smarthomegearreviews-20
```

---

## Lead Magnet

**Title:** "Complete Smart Home Setup Guide"
**Format:** PDF + Checklist
**Contents:** Room-by-room recommendations, ecosystem compatibility, automation recipes

---

## Content Categories
1. Smart Speakers - Alexa, Google, HomePod
2. Smart Displays - Hubs and screens
3. Security - Cameras, locks, sensors
4. Lighting - Bulbs, switches, strips
5. Climate - Thermostats, fans, sensors
6. Automation - Hubs, routines, scenes

---

## Review Template Elements
- Setup Difficulty (1-10)
- App Quality (1-10)
- Reliability (1-10)
- Smart Home Integration (1-10)
- Value (1-10)
- Overall Rating
- Works With: [Ecosystems]
- Setup Time: [Estimate]

---

## Anti-Patterns

- ❌ Reviews without in-home testing
- ❌ Ignoring setup complexity
- ❌ Only covering one ecosystem
- ❌ Not mentioning compatibility issues
- ❌ Generic smart home stock imagery

---

*Generated from Creative Command Center DNA*

---

## 🚀 SESSION INITIALIZATION & DEFAULT LOADOUT

### On Every Session Start
When starting a Claude Code session for this site, ALWAYS:

1. **Load Memory Context**
   ```
   Search memory for: smarthomegearreviews context state decisions
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
   mcp_memory_get key="open_tasks" context="smarthomegearreviews"
   ```

### Default Prompt Loadout
Copy this entire block at session start if needed:

```markdown
## SESSION CONTEXT: Smart Home Gear Reviews
Site: https://smarthomegearreviews.com
Amazon Tag: smarthomegearreviews-20

## RULES FOR THIS SESSION
1. ALWAYS use practical smart home expert focused on real integration testing voice - NEVER deviate
2. Include affiliate tag smarthomegearreviews-20 on all product links
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

Ready to work on Smart Home Gear Reviews. What's the task?
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
  context: "smarthomegearreviews"
})
```

**Retrieve from Memory:**
```javascript
mcp_memory_get({
  key: "project_state",
  context: "smarthomegearreviews"
})
```

**Search Memory:**
```javascript
mcp_memory_search({
  query: "decision",
  context: "smarthomegearreviews",
  limit: 10
})
```

#### 2. Mem0 Integration (If Available)
For more sophisticated memory with semantic search.

```javascript
// Store
mem0_add({
  userId: "nick-creighton",
  text: "Decided to use glass morphism for cards on Smart Home Gear Reviews",
  metadata: { site: "smarthomegearreviews", type: "decision" }
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
smarthomegearreviews_state          - Current project state
smarthomegearreviews_decisions      - Key decisions made
smarthomegearreviews_tasks          - Task tracking
smarthomegearreviews_preferences    - Discovered preferences
smarthomegearreviews_solutions      - Technical solutions
smarthomegearreviews_session_{date} - Session notes
```

### Session End Protocol
Before ending any session:
```javascript
mcp_memory_set({
  key: "smarthomegearreviews_session_" + new Date().toISOString().split('T')[0],
  value: JSON.stringify({
    completed: [...],
    pending: [...],
    decisions: [...],
    notes: "..."
  }),
  context: "smarthomegearreviews"
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
 * Plugin Name: MCP Tools - Smart Home Gear Reviews
 * Description: Custom MCP tools for https://smarthomegearreviews.com
 * Version: 1.0.0
 * Author: Nick Creighton
 */

if ( ! defined( 'ABSPATH' ) ) exit;

class MCP_Tools_SmartHomeGearReviews {

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
            'category'    => 'Smart Home Gear Reviews',
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
    MCP_Tools_SmartHomeGearReviews::get_instance();
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
- - `shgr_device_review` - Generate smart home device reviews
- `shgr_integration_guide` - Create ecosystem integration guides
- `shgr_setup_tutorial` - Generate setup tutorials

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

### Site-Specific Rules: Smart Home Gear Reviews
1. Voice: Practical, integration-focused, trustworthy
2. Affiliate Tag: smarthomegearreviews-20 on ALL Amazon links
3. Design: Blue trust-focused, clean, tech-professional
4. Content: Real home testing, integration focus, setup guides
5. Anti-patterns: Lab-only testing, ignoring integration issues

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
| WordPress Admin | https://smarthomegearreviews.com/wp-admin |
| MCP Endpoint | https://smarthomegearreviews.com/wp-json/mcp/v1/bearer/sse |
| Site Frontend | https://smarthomegearreviews.com |
| GitHub Repo | github.com/ncreighton/site-design-packages |
| Creative Command Center | github.com/ncreighton/creative-command-center |

---

*Enhanced with Plugin Creation System, Memory Integration, and Default Loadout*
*Part of the 17-site empire automation system*
