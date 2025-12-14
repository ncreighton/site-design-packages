# CLAUDE.md - AIDiscoveryDigest.com

## Project Identity

**Site:** https://aidiscoverydigest.com/
**Codename:** AITrendCurator
**Niche:** AI Tools & Discovery
**Mode:** Light-first Clean
**Amazon Tag:** aidiscoverydigest-20

---

## WordPress Credentials

```
URL: https://aidiscoverydigest.com/
Username: AITrendCurator
App Password: LQW4 e5sj emMr 3ZN2 7LI9 ZHzO
```

---

## Design DNA Summary

### Personality
- **Archetype:** Explorer/Sage
- **Voice:** The AI tool scout who curates what's actually useful
- **Tone:** Discovery excitement, curated confidence, informed curiosity
- **NOT:** Overwhelming, FOMO-driven, uncritical listing

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | #6366F1 | Discovery Indigo - CTAs, accents |
| Secondary | #10B981 | Verified Green - quality indicators |
| Accent | #F59E0B | New Badge Amber - highlights |
| Background | #FFFFFF | Clean White |
| Surface | #F9FAFB | Light Gray |
| Surface Elevated | #F3F4F6 | Card Gray |
| Text | #111827 | Near Black |
| Text Secondary | #4B5563 | Dark Gray |
| Text Muted | #9CA3AF | Medium Gray |
| Border | #E5E7EB | Light Border |

### Typography
- Headings: Inter, 500-700
- Body: Inter, 400-500
- Base: 15px, scale 1.2

---

## API Integrations

### Systeme.io
```
Tag: aidiscoverydigest-popup-toolsdigest
Tag: aidiscoverydigest-leadmagnet-top100tools
```

### Amazon
```
Affiliate Tag: aidiscoverydigest-20
```

---

## Lead Magnet

**Title:** "Top 100 AI Tools Database"
**Format:** Notion Template + PDF
**Contents:** Curated AI tools by category with ratings

---

## Anti-Patterns

- ❌ Pay-to-play listings
- ❌ Uncurated tool dumps
- ❌ Fake reviews
- ❌ Outdated tool info
- ❌ Confusing category overlap
- ❌ Busy, cluttered layouts

---

*Generated from Creative Command Center DNA: ai-discovery.json*

---

## 🚀 SESSION INITIALIZATION & DEFAULT LOADOUT

### On Every Session Start
When starting a Claude Code session for this site, ALWAYS:

1. **Load Memory Context**
   ```
   Search memory for: aidiscoverydigest context state decisions
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
   mcp_memory_get key="open_tasks" context="aidiscoverydigest"
   ```

### Default Prompt Loadout
Copy this entire block at session start if needed:

```markdown
## SESSION CONTEXT: AI Discovery Digest
Site: https://aidiscoverydigest.com
Amazon Tag: aidiscoverydigest-20

## RULES FOR THIS SESSION
1. ALWAYS use curious explorer sharing AI discoveries and innovations voice - NEVER deviate
2. Include affiliate tag aidiscoverydigest-20 on all product links
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

Ready to work on AI Discovery Digest. What's the task?
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
  context: "aidiscoverydigest"
})
```

**Retrieve from Memory:**
```javascript
mcp_memory_get({
  key: "project_state",
  context: "aidiscoverydigest"
})
```

**Search Memory:**
```javascript
mcp_memory_search({
  query: "decision",
  context: "aidiscoverydigest",
  limit: 10
})
```

#### 2. Mem0 Integration (If Available)
For more sophisticated memory with semantic search.

```javascript
// Store
mem0_add({
  userId: "nick-creighton",
  text: "Decided to use glass morphism for cards on AI Discovery Digest",
  metadata: { site: "aidiscoverydigest", type: "decision" }
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
aidiscoverydigest_state          - Current project state
aidiscoverydigest_decisions      - Key decisions made
aidiscoverydigest_tasks          - Task tracking
aidiscoverydigest_preferences    - Discovered preferences
aidiscoverydigest_solutions      - Technical solutions
aidiscoverydigest_session_{date} - Session notes
```

### Session End Protocol
Before ending any session:
```javascript
mcp_memory_set({
  key: "aidiscoverydigest_session_" + new Date().toISOString().split('T')[0],
  value: JSON.stringify({
    completed: [...],
    pending: [...],
    decisions: [...],
    notes: "..."
  }),
  context: "aidiscoverydigest"
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
 * Plugin Name: MCP Tools - AI Discovery Digest
 * Description: Custom MCP tools for https://aidiscoverydigest.com
 * Version: 1.0.0
 * Author: Nick Creighton
 */

if ( ! defined( 'ABSPATH' ) ) exit;

class MCP_Tools_AIDiscoveryDigest {

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
            'category'    => 'AI Discovery Digest',
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
    MCP_Tools_AIDiscoveryDigest::get_instance();
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
- - `aidd_discovery_post` - Generate AI discovery content
- `aidd_tool_spotlight` - Create tool spotlight features
- `aidd_weekly_digest` - Compile weekly AI news

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

### Site-Specific Rules: AI Discovery Digest
1. Voice: Curious, accessible, discovery-focused
2. Affiliate Tag: aidiscoverydigest-20 on ALL Amazon links
3. Design: Clean, modern, discovery-oriented aesthetic
4. Content: Focus on new discoveries, accessible explanations
5. Anti-patterns: Overly technical jargon, hype without substance

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
| WordPress Admin | https://aidiscoverydigest.com/wp-admin |
| MCP Endpoint | https://aidiscoverydigest.com/wp-json/mcp/v1/bearer/sse |
| Site Frontend | https://aidiscoverydigest.com |
| GitHub Repo | github.com/ncreighton/site-design-packages |
| Creative Command Center | github.com/ncreighton/creative-command-center |

---

*Enhanced with Plugin Creation System, Memory Integration, and Default Loadout*
*Part of the 17-site empire automation system*
