# sub - Search Hub

A simple, fast search interface that allows you to quickly search across multiple websites using short command prefixes.

## Features

- **Quick Search Commands**: Use short prefixes like `g` for Google, `am` for Amazon, `wk` for Wikipedia
- **Base URL Redirection**: Enter just a command (e.g., `am`) to go directly to the site's homepage
- **URL Parameter Support**: Can be used as a search engine with `?q=` parameters
- **Command Listing**: Type `ls` to see all available commands
- **Clean Interface**: Minimal, responsive design using Pico CSS

## Usage

### Basic Search
Type a command followed by your search term:
- `g javascript tutorials` → Search Google for "javascript tutorials"
- `am wireless headphones` → Search Amazon for "wireless headphones"
- `wk artificial intelligence` → Search Wikipedia for "artificial intelligence"

### Direct Site Access
Type just the command to go to the site's homepage:
- `am` → Go to amazon.com
- `wk` → Go to wikipedia.org
- `yt` → Go to youtube.com

### List Commands
- `ls` → Stay on the current page and view all available commands

### URL Parameters
You can also use it as a search engine by passing queries via URL:
- `sub.html?q=g search term` → Redirects to Google search
- `sub.html?q=am` → Redirects to Amazon homepage

## Available Commands

| Command | Site |
|---------|------|
| `ad` | Audible |
| `am` | Amazon |
| `ar` | Archive.org |
| `as` | Austin Public Library |
| `bk` | BookPecker |
| `br` | BoardGameGeek |
| `ch` | ch.at |
| `dr` | Drupal.org |
| `eb` | eBay |
| `g` | Google |
| `gd` | Goodreads |
| `gn` | Google News |
| `gt` | GitHub |
| `hb` | H-E-B |
| `hp` | Hoopla Digital |
| `kg` | Kagi |
| `ks` | Kagi Summarizer |
| `ls` | List commands (current page) |
| `lt` | Listen Notes |
| `ov` | OverDrive |
| `pn` | Pinboard |
| `pr` | Perplexity AI |
| `rd` | Reddit |
| `sb` | SoBrief |
| `sl` | Slickdeals |
| `sm` | Smry.ai |
| `st` | Stack Overflow |
| `th` | ThriftBooks |
| `tw` | Twitter |
| `vb` | vb.lk (Vibe Links) |
| `wk` | Wikipedia |
| `wr` | WorldCat |
| `yt` | YouTube |

## Installation

1. Download or clone this repository
2. Open `sub.html` in your web browser
3. Optionally, set it as your browser's homepage or new tab page

## Customization

To add or modify search commands, edit the `searchCommands` object in the JavaScript section of `sub.html`:

```javascript
const searchCommands = {
    "your_command": "https://example.com/search?q=",
    // ... other commands
};
```

## Browser Integration

### Set as Homepage
Set `file:///path/to/sub.html` as your browser's homepage for quick access.

### Bookmark
Create a bookmark for easy access from any page.

### Search Engine
The site supports OpenSearch autodiscovery, allowing you to add "sub - Search Hub" as a search engine in your browser. When you visit the site, compatible browsers will detect the search engine and offer to add it to your search options.

Some browsers allow you to add custom search engines using the URL pattern with `%s` as the search term placeholder.

## License

This project is open source and available under the MIT License.
