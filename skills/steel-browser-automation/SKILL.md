# STEEL.DEV BROWSER AUTOMATION SKILL
## Fallback System for When APIs Fail
### Version 1.0

---

## Overview

Steel.dev provides cloud browser automation that works when:
- MCP connections fail or timeout
- APIs don't support needed functionality
- Manual tasks need automation
- Complex multi-step workflows are required
- Authentication is needed that APIs can't handle

---

## Credentials

```yaml
Steel.dev:
  API Key: ste-A43JGQkLsnI609gNUXatQ83QB88Aj2JHOyrhvdaax8AxCWwSI0sn3VD01ToP4RjxM5POgbxoDhaEcwmsxshm6BFtKYS8J2ErKFy
  Base URL: https://api.steel.dev
  
BrowserUse:
  API Key: bu_YUQ0ZqtuWge86lOZUaWiZtK_rG6PkCNElONERb9Jzgs
  Base URL: https://api.browseruse.com
```

---

## Core Concepts

### When to Use Steel.dev (Fallback Triggers)

```yaml
Automatic Fallback Triggers:
  - MCP connection timeout (>30 seconds)
  - MCP returns error 3 consecutive times
  - API endpoint returns 401/403/500
  - Rate limit exceeded
  - Feature not available via API
  
Manual Trigger Keywords:
  - "use browser to..."
  - "automate the browser..."
  - "steel fallback..."
  - "browser automation..."
  - "click on..."
  - "fill form..."
```

### Steel.dev vs BrowserUse

```yaml
Steel.dev:
  Best For:
    - Simple, repeatable tasks
    - Fast execution
    - Form filling
    - Data extraction
    - Screenshot capture
  
BrowserUse:
  Best For:
    - Complex multi-step workflows
    - AI-guided navigation
    - Dynamic page handling
    - When you don't know exact selectors
    - Research and exploration
```

---

## API Reference

### Create Browser Session

```python
import requests

STEEL_API_KEY = "ste-A43JGQkLsnI609gNUXatQ83QB88Aj2JHOyrhvdaax8AxCWwSI0sn3VD01ToP4RjxM5POgbxoDhaEcwmsxshm6BFtKYS8J2ErKFy"

def create_steel_session():
    """Create a new Steel.dev browser session"""
    response = requests.post(
        "https://api.steel.dev/v1/sessions",
        headers={
            "Authorization": f"Bearer {STEEL_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "browser": "chromium",
            "proxy": False,
            "blockAds": True,
            "solveCaptchas": True,
            "timeout": 300000  # 5 minutes
        }
    )
    return response.json()

# Returns: { "sessionId": "...", "wsUrl": "...", "proxyUrl": "..." }
```

### Navigate to URL

```python
def navigate(session_id, url):
    """Navigate to a URL"""
    response = requests.post(
        f"https://api.steel.dev/v1/sessions/{session_id}/actions/navigate",
        headers={"Authorization": f"Bearer {STEEL_API_KEY}"},
        json={"url": url}
    )
    return response.json()
```

### Click Element

```python
def click(session_id, selector):
    """Click an element by CSS selector"""
    response = requests.post(
        f"https://api.steel.dev/v1/sessions/{session_id}/actions/click",
        headers={"Authorization": f"Bearer {STEEL_API_KEY}"},
        json={"selector": selector}
    )
    return response.json()
```

### Type Text

```python
def type_text(session_id, selector, text):
    """Type text into an input field"""
    response = requests.post(
        f"https://api.steel.dev/v1/sessions/{session_id}/actions/type",
        headers={"Authorization": f"Bearer {STEEL_API_KEY}"},
        json={
            "selector": selector,
            "text": text
        }
    )
    return response.json()
```

### Take Screenshot

```python
def screenshot(session_id, full_page=False):
    """Take a screenshot"""
    response = requests.post(
        f"https://api.steel.dev/v1/sessions/{session_id}/actions/screenshot",
        headers={"Authorization": f"Bearer {STEEL_API_KEY}"},
        json={"fullPage": full_page}
    )
    return response.json()  # Returns base64 image
```

### Extract Data

```python
def extract(session_id, selector):
    """Extract text from elements"""
    response = requests.post(
        f"https://api.steel.dev/v1/sessions/{session_id}/actions/extract",
        headers={"Authorization": f"Bearer {STEEL_API_KEY}"},
        json={"selector": selector}
    )
    return response.json()
```

### Close Session

```python
def close_session(session_id):
    """Close a browser session"""
    response = requests.delete(
        f"https://api.steel.dev/v1/sessions/{session_id}",
        headers={"Authorization": f"Bearer {STEEL_API_KEY}"}
    )
    return response.json()
```

---

## Complete Fallback System

```python
import requests
import time
from typing import Optional, Dict, Any

class SteelFallback:
    """
    Fallback browser automation system using Steel.dev
    Use when MCP/API methods fail
    """
    
    STEEL_API_KEY = "ste-A43JGQkLsnI609gNUXatQ83QB88Aj2JHOyrhvdaax8AxCWwSI0sn3VD01ToP4RjxM5POgbxoDhaEcwmsxshm6BFtKYS8J2ErKFy"
    BASE_URL = "https://api.steel.dev/v1"
    
    def __init__(self):
        self.session_id = None
        self.headers = {
            "Authorization": f"Bearer {self.STEEL_API_KEY}",
            "Content-Type": "application/json"
        }
    
    def start_session(self) -> str:
        """Start a new browser session"""
        response = requests.post(
            f"{self.BASE_URL}/sessions",
            headers=self.headers,
            json={
                "browser": "chromium",
                "blockAds": True,
                "solveCaptchas": True,
                "timeout": 300000
            }
        )
        data = response.json()
        self.session_id = data.get("sessionId")
        return self.session_id
    
    def navigate(self, url: str) -> Dict:
        """Navigate to URL"""
        return self._action("navigate", {"url": url})
    
    def click(self, selector: str) -> Dict:
        """Click element"""
        return self._action("click", {"selector": selector})
    
    def type(self, selector: str, text: str) -> Dict:
        """Type into input"""
        return self._action("type", {"selector": selector, "text": text})
    
    def screenshot(self, full_page: bool = False) -> str:
        """Take screenshot, return base64"""
        result = self._action("screenshot", {"fullPage": full_page})
        return result.get("image", "")
    
    def extract(self, selector: str) -> list:
        """Extract text from elements"""
        result = self._action("extract", {"selector": selector})
        return result.get("data", [])
    
    def wait(self, selector: str, timeout: int = 10000) -> Dict:
        """Wait for element to appear"""
        return self._action("wait", {"selector": selector, "timeout": timeout})
    
    def scroll(self, direction: str = "down", amount: int = 500) -> Dict:
        """Scroll the page"""
        return self._action("scroll", {"direction": direction, "amount": amount})
    
    def select(self, selector: str, value: str) -> Dict:
        """Select dropdown option"""
        return self._action("select", {"selector": selector, "value": value})
    
    def _action(self, action: str, params: Dict) -> Dict:
        """Execute an action"""
        if not self.session_id:
            self.start_session()
        
        response = requests.post(
            f"{self.BASE_URL}/sessions/{self.session_id}/actions/{action}",
            headers=self.headers,
            json=params
        )
        return response.json()
    
    def close(self):
        """Close the session"""
        if self.session_id:
            requests.delete(
                f"{self.BASE_URL}/sessions/{self.session_id}",
                headers=self.headers
            )
            self.session_id = None
    
    def __enter__(self):
        self.start_session()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.close()


# Usage with context manager
def example_usage():
    with SteelFallback() as browser:
        browser.navigate("https://example.com")
        browser.type("#email", "user@example.com")
        browser.type("#password", "password123")
        browser.click("#login-button")
        browser.wait(".dashboard")
        screenshot = browser.screenshot()
        return screenshot
```

---

## WordPress Admin Fallback

When MCP fails, use Steel to interact with WordPress admin:

```python
class WordPressBrowserFallback(SteelFallback):
    """
    WordPress admin automation via browser
    Use when MCP connection fails
    """
    
    def __init__(self, site_url: str, username: str, password: str):
        super().__init__()
        self.site_url = site_url.rstrip('/')
        self.username = username
        self.password = password
        self.logged_in = False
    
    def login(self) -> bool:
        """Login to WordPress admin"""
        self.navigate(f"{self.site_url}/wp-login.php")
        time.sleep(2)
        
        self.type("#user_login", self.username)
        self.type("#user_pass", self.password)
        self.click("#wp-submit")
        
        time.sleep(3)
        self.logged_in = True
        return True
    
    def create_post(self, title: str, content: str, status: str = "draft") -> bool:
        """Create a new post via browser"""
        if not self.logged_in:
            self.login()
        
        # Navigate to new post
        self.navigate(f"{self.site_url}/wp-admin/post-new.php")
        time.sleep(2)
        
        # Handle Gutenberg or Classic editor
        try:
            # Try Gutenberg
            self.click(".editor-post-title__input")
            self.type(".editor-post-title__input", title)
            
            # Add content block
            self.click(".block-editor-default-block-appender__content")
            self.type(".block-editor-rich-text__editable", content)
            
            # Publish/Save
            if status == "publish":
                self.click(".editor-post-publish-button__button")
                time.sleep(1)
                self.click(".editor-post-publish-button__button")
            else:
                self.click(".editor-post-save-draft")
            
            return True
        except:
            # Fallback to Classic editor
            self.type("#title", title)
            self.type("#content", content)
            self.click("#save-post" if status == "draft" else "#publish")
            return True
    
    def update_post(self, post_id: int, title: str = None, content: str = None) -> bool:
        """Update an existing post"""
        if not self.logged_in:
            self.login()
        
        self.navigate(f"{self.site_url}/wp-admin/post.php?post={post_id}&action=edit")
        time.sleep(2)
        
        if title:
            self.click(".editor-post-title__input")
            # Clear and retype
            self._action("clear", {"selector": ".editor-post-title__input"})
            self.type(".editor-post-title__input", title)
        
        # Save
        self.click(".editor-post-save-draft")
        return True
    
    def upload_media(self, file_url: str) -> str:
        """Upload media via browser (when API fails)"""
        if not self.logged_in:
            self.login()
        
        self.navigate(f"{self.site_url}/wp-admin/media-new.php")
        time.sleep(2)
        
        # For URL-based upload, use "Insert from URL" if available
        # This is complex - may need custom handling
        return ""
    
    def activate_plugin(self, plugin_slug: str) -> bool:
        """Activate a plugin"""
        if not self.logged_in:
            self.login()
        
        self.navigate(f"{self.site_url}/wp-admin/plugins.php")
        time.sleep(2)
        
        # Find and click activate link
        self.click(f"tr[data-slug='{plugin_slug}'] .activate a")
        time.sleep(2)
        return True
    
    def clear_cache(self) -> bool:
        """Clear LiteSpeed Cache via browser"""
        if not self.logged_in:
            self.login()
        
        # Navigate to LiteSpeed Cache
        self.navigate(f"{self.site_url}/wp-admin/admin.php?page=litespeed-toolbox")
        time.sleep(2)
        
        # Click purge all
        self.click("#litespeed-purge-all")
        time.sleep(2)
        return True
    
    def get_post_list(self) -> list:
        """Get list of posts via browser"""
        if not self.logged_in:
            self.login()
        
        self.navigate(f"{self.site_url}/wp-admin/edit.php")
        time.sleep(2)
        
        # Extract post titles
        posts = self.extract(".row-title")
        return posts


# Example usage for WordPress fallback
def wordpress_fallback_example():
    """When MCP fails, use browser automation"""
    
    wp = WordPressBrowserFallback(
        site_url="https://witchcraftforbeginners.com",
        username="MoonlightMystic",
        password="Ashlynn.09"
    )
    
    try:
        wp.start_session()
        wp.login()
        
        # Create a post
        wp.create_post(
            title="Test Post via Browser Automation",
            content="This post was created because MCP failed.",
            status="draft"
        )
        
        # Take verification screenshot
        screenshot = wp.screenshot()
        
    finally:
        wp.close()
```

---

## Systeme.io Browser Automation

For tasks the Systeme.io API can't handle:

```python
class SystemeIOBrowser(SteelFallback):
    """
    Systeme.io automation via browser
    For features not available in API:
    - Email sequence editing
    - Funnel builder
    - Automation rules
    - Tag management
    - Advanced email templates
    """
    
    SYSTEME_EMAIL = "your-email@example.com"
    SYSTEME_PASSWORD = "your-password"
    
    def __init__(self):
        super().__init__()
        self.logged_in = False
    
    def login(self) -> bool:
        """Login to Systeme.io"""
        self.navigate("https://systeme.io/login")
        time.sleep(2)
        
        self.type("input[name='email']", self.SYSTEME_EMAIL)
        self.type("input[name='password']", self.SYSTEME_PASSWORD)
        self.click("button[type='submit']")
        
        time.sleep(3)
        self.logged_in = True
        return True
    
    def create_email_in_sequence(self, 
                                  sequence_id: str,
                                  subject: str,
                                  content: str,
                                  delay_days: int = 1) -> bool:
        """
        Create a new email in an automation sequence
        (Not available via API)
        """
        if not self.logged_in:
            self.login()
        
        # Navigate to sequence editor
        self.navigate(f"https://systeme.io/automation/{sequence_id}/edit")
        time.sleep(2)
        
        # Click "Add Email" button
        self.click(".add-email-button")
        time.sleep(1)
        
        # Fill in email details
        self.type("input[name='subject']", subject)
        
        # Switch to content editor
        self.click(".email-content-tab")
        time.sleep(1)
        
        # Type content (handle rich text editor)
        self.type(".email-body-editor", content)
        
        # Set delay
        self.type("input[name='delay']", str(delay_days))
        
        # Save
        self.click(".save-email-button")
        time.sleep(2)
        
        return True
    
    def edit_automation_rule(self,
                             rule_id: str,
                             trigger: str,
                             action: str) -> bool:
        """
        Edit automation rules
        (Not available via API)
        """
        if not self.logged_in:
            self.login()
        
        self.navigate(f"https://systeme.io/automation-rules/{rule_id}/edit")
        time.sleep(2)
        
        # Set trigger
        self.click(".trigger-selector")
        self.click(f".trigger-option[data-value='{trigger}']")
        
        # Set action
        self.click(".action-selector")
        self.click(f".action-option[data-value='{action}']")
        
        # Save
        self.click(".save-rule-button")
        return True
    
    def create_tag(self, tag_name: str) -> bool:
        """Create a new tag"""
        if not self.logged_in:
            self.login()
        
        self.navigate("https://systeme.io/tags")
        time.sleep(2)
        
        self.click(".create-tag-button")
        time.sleep(1)
        
        self.type("input[name='tag_name']", tag_name)
        self.click(".save-tag-button")
        
        return True
    
    def add_contacts_to_tag(self, tag_id: str, emails: list) -> bool:
        """Bulk add contacts to a tag"""
        if not self.logged_in:
            self.login()
        
        self.navigate(f"https://systeme.io/tags/{tag_id}")
        time.sleep(2)
        
        self.click(".add-contacts-button")
        time.sleep(1)
        
        # Paste emails
        email_text = "\n".join(emails)
        self.type(".bulk-email-input", email_text)
        
        self.click(".import-contacts-button")
        time.sleep(3)
        
        return True
    
    def setup_welcome_sequence(self, 
                               list_name: str,
                               emails: list) -> bool:
        """
        Set up a complete welcome email sequence
        
        emails = [
            {"subject": "Welcome!", "content": "...", "delay": 0},
            {"subject": "Quick tip", "content": "...", "delay": 1},
            ...
        ]
        """
        if not self.logged_in:
            self.login()
        
        # Create new automation
        self.navigate("https://systeme.io/automations/new")
        time.sleep(2)
        
        # Select trigger: "Contact subscribes to list"
        self.click(".trigger-subscribe-to-list")
        time.sleep(1)
        
        # Select the list
        self.type(".list-search", list_name)
        self.click(f".list-option:contains('{list_name}')")
        
        # Add each email
        for email in emails:
            self.click(".add-action-button")
            self.click(".action-send-email")
            time.sleep(1)
            
            self.type("input[name='subject']", email["subject"])
            self.type(".email-content", email["content"])
            
            if email["delay"] > 0:
                self.click(".add-delay-button")
                self.type("input[name='delay_days']", str(email["delay"]))
            
            self.click(".save-action")
            time.sleep(1)
        
        # Activate the automation
        self.click(".activate-automation")
        
        return True


# Example: Create welcome sequence for a site
def setup_site_email_sequence(site_slug: str):
    """Set up email welcome sequence using browser automation"""
    
    sequences = {
        "witchcraftforbeginners": [
            {"subject": "🌙 Welcome to the Craft - Your Starter Kit Inside", 
             "content": "Welcome email content...", "delay": 0},
            {"subject": "The #1 Mistake New Witches Make (And How to Avoid It)",
             "content": "Mistake email content...", "delay": 1},
            {"subject": "Your First Simple Protection Spell",
             "content": "Protection spell content...", "delay": 3},
        ],
        "smarthomewizards": [
            {"subject": "🏠 Your Smart Home Starter Kit is Here!",
             "content": "Welcome content...", "delay": 0},
            {"subject": "The Device I Recommend to Everyone (Under $30)",
             "content": "Device recommendation...", "delay": 2},
        ]
    }
    
    with SystemeIOBrowser() as systeme:
        systeme.login()
        systeme.setup_welcome_sequence(
            list_name=f"{site_slug}-subscribers",
            emails=sequences.get(site_slug, [])
        )
```

---

## Intelligent Fallback Router

Automatically routes to browser when API/MCP fails:

```python
class IntelligentFallbackRouter:
    """
    Routes requests through the best available method:
    1. Try MCP first
    2. Try API if MCP fails
    3. Fall back to browser automation
    """
    
    def __init__(self, site_config: dict):
        self.site = site_config
        self.mcp_failures = 0
        self.api_failures = 0
        self.max_failures = 3
    
    async def execute(self, action: str, params: dict) -> dict:
        """Execute action with automatic fallback"""
        
        # Try MCP first
        if self.mcp_failures < self.max_failures:
            try:
                result = await self._try_mcp(action, params)
                if result.get("success"):
                    self.mcp_failures = 0  # Reset on success
                    return result
            except Exception as e:
                self.mcp_failures += 1
                print(f"MCP failed ({self.mcp_failures}/{self.max_failures}): {e}")
        
        # Try API
        if self.api_failures < self.max_failures:
            try:
                result = await self._try_api(action, params)
                if result.get("success"):
                    self.api_failures = 0
                    return result
            except Exception as e:
                self.api_failures += 1
                print(f"API failed ({self.api_failures}/{self.max_failures}): {e}")
        
        # Fall back to browser automation
        print("Falling back to browser automation...")
        return await self._try_browser(action, params)
    
    async def _try_mcp(self, action: str, params: dict) -> dict:
        """Try MCP method"""
        # Implementation depends on MCP setup
        pass
    
    async def _try_api(self, action: str, params: dict) -> dict:
        """Try direct API"""
        # Implementation depends on API
        pass
    
    async def _try_browser(self, action: str, params: dict) -> dict:
        """Browser automation fallback"""
        with WordPressBrowserFallback(
            self.site["url"],
            self.site["username"],
            self.site["password"]
        ) as browser:
            
            if action == "create_post":
                success = browser.create_post(
                    params["title"],
                    params["content"],
                    params.get("status", "draft")
                )
                return {"success": success, "method": "browser"}
            
            elif action == "update_post":
                success = browser.update_post(
                    params["post_id"],
                    params.get("title"),
                    params.get("content")
                )
                return {"success": success, "method": "browser"}
            
            elif action == "clear_cache":
                success = browser.clear_cache()
                return {"success": success, "method": "browser"}
            
            # Add more actions...
            
        return {"success": False, "error": "Unknown action"}
```

---

## Quick Commands

```yaml
Browser Automation Commands:
  steel session: Start a new Steel.dev browser session
  steel navigate [url]: Navigate to URL
  steel screenshot: Take screenshot of current page
  steel click [selector]: Click an element
  steel type [selector] [text]: Type into input
  steel extract [selector]: Extract text from elements
  steel close: Close the browser session
  
WordPress Fallback Commands:
  wp fallback login: Login to WP via browser
  wp fallback post [title]: Create post via browser
  wp fallback cache: Clear cache via browser
  wp fallback plugins: List plugins via browser
  
Systeme.io Commands:
  systeme sequence [name]: Create email sequence
  systeme tag [name]: Create new tag
  systeme email [sequence_id]: Add email to sequence
```

---

## Integration with n8n

Trigger browser automation from n8n workflows:

```json
{
  "nodes": [
    {
      "name": "HTTP Request",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "url": "https://api.steel.dev/v1/sessions",
        "method": "POST",
        "headers": {
          "Authorization": "Bearer ste-A43JGQkLsnI609gNUXatQ83QB88Aj2JHOyrhvdaax8AxCWwSI0sn3VD01ToP4RjxM5POgbxoDhaEcwmsxshm6BFtKYS8J2ErKFy"
        },
        "body": {
          "browser": "chromium",
          "blockAds": true
        }
      }
    }
  ]
}
```

---

*Steel.dev Browser Automation Skill*
*Version 1.0*
*Use when APIs fail - never do manual tasks again*
