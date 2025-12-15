# BROWSERUSE AI AGENT SKILL
## AI-Powered Browser Automation
### Version 1.0

---

## Overview

BrowserUse is an AI agent that can navigate websites and complete complex tasks
without needing exact CSS selectors. Just describe what you want done.

---

## Credentials

```yaml
BrowserUse API: bu_YUQ0ZqtuWge86lOZUaWiZtK_rG6PkCNElONERb9Jzgs
```

---

## When to Use BrowserUse

```yaml
Best For:
  - Complex multi-step tasks
  - Dynamic/changing pages
  - When you don't know exact selectors
  - Research and exploration
  - Tasks requiring decision-making
  - Unknown website structures

Use Steel.dev Instead When:
  - Simple, repeatable tasks
  - Known workflows with exact selectors
  - Speed is critical
  - Simple form filling
```

---

## API Usage

```python
import browseruse

BROWSERUSE_API = "bu_YUQ0ZqtuWge86lOZUaWiZtK_rG6PkCNElONERb9Jzgs"

async def ai_browser_task(task_description: str):
    """Let AI complete browser task"""
    
    client = browseruse.Client(api_key=BROWSERUSE_API)
    
    result = await client.run(
        task=task_description,
        max_steps=20,
        headless=True
    )
    
    return result
```

---

## Example Tasks

### WordPress Setup
```python
await ai_browser_task("""
    Go to https://mysite.com/wp-admin
    Login with username 'admin' and password 'password123'
    Install and activate the LiteSpeed Cache plugin
    Enable page caching in the settings
    Clear all caches
""")
```

### Competitor Research
```python
await ai_browser_task("""
    Go to competitor-site.com
    Find their blog or articles section
    List the 10 most recent article titles
    Take a screenshot of their homepage
    Return the data as JSON
""")
```

### Systeme.io Automation
```python
await ai_browser_task("""
    Login to Systeme.io with email 'nick@example.com' and password 'xxx'
    Create a new email sequence called 'Welcome Series'
    Add 3 emails with subjects:
    - 'Welcome! Here's your free guide'
    - 'Quick tip for you'
    - 'Don't miss this'
    Activate the sequence
""")
```

### Amazon Research
```python
await ai_browser_task("""
    Go to Amazon.com
    Search for 'smart home hub'
    Find the top 5 products by rating
    Extract: product name, price, rating, review count
    Return as structured data
""")
```

---

## Integration with Fallback System

```python
class AIFallbackRouter:
    """Route to BrowserUse when other methods fail"""
    
    async def execute(self, task: str, params: dict) -> dict:
        """Try all methods, use AI as final fallback"""
        
        # 1. Try MCP
        try:
            return await self._try_mcp(task, params)
        except:
            pass
        
        # 2. Try API
        try:
            return await self._try_api(task, params)
        except:
            pass
        
        # 3. Try Steel.dev (simple browser)
        try:
            return await self._try_steel(task, params)
        except:
            pass
        
        # 4. Final fallback: AI Agent
        return await self._try_browseruse(task, params)
    
    async def _try_browseruse(self, task: str, params: dict) -> dict:
        """Let AI figure it out"""
        
        # Convert task to natural language
        task_description = self._task_to_description(task, params)
        
        result = await ai_browser_task(task_description)
        
        return {
            "success": result.get("completed", False),
            "method": "browseruse_ai",
            "result": result
        }
```

---

## Quick Commands

```yaml
ai task [description]: Execute AI browser task
ai research [topic]: AI-powered research
ai setup [thing]: AI-guided setup
ai analyze [url]: AI site analysis
```

---

*BrowserUse AI Agent Skill*
*When you need AI to figure it out*
