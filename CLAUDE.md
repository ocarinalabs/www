# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Sidekick, built with TypeScript, React 19, and Tailwind CSS v4. The site serves as a landing page for Sidekick's AI-powered sidekick products (Robin, Labs, Founders) with a focus on manifesto-style content.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### Redirect System

The site uses a redirect architecture where internal paths redirect to external domains:

- `/robin` → `https://robin.now` (permanent redirect)
- `/labs` → `https://labs.now` (permanent redirect)
- `/founders` → `https://founders.now` (permanent redirect)

This allows internal links throughout the site while maintaining external product domains.

### Font System

Uses a comprehensive typography system with 5 fonts:

- **Geist Sans** (`font-sans`) - Default body text
- **Geist Mono** (`font-mono`) - Code and monospace text
- **Heming** (`font-heming`) - Legacy font (still loaded)
- **Clash Display** (`font-clash-display`) - Headers and display text
- **Gambetta** (`font-gambetta`) - Manifesto titles and special text

Font loading uses `next/font` with variable fonts for Clash Display and Gambetta.

### Component Architecture

- **Header**: Fixed header with logo and branding
- **Manifesto**: Core content component with manifesto-style copy
- **Footer**: Comprehensive footer with structured navigation using TypeScript interfaces
- **ASCII Components**: Various ASCII art components (cube, knot, pyramid)

### Key Pages

- `/` - Homepage with Header, Manifesto, and Footer components
- `/robin`, `/labs`, `/founders` - Redirect pages using `permanentRedirect()`
- `sitemap.ts` - Dynamic sitemap generation
- `robots.txt` - SEO configuration allowing all crawlers

### SEO Implementation

- Comprehensive metadata in `layout.tsx` with OpenGraph and Twitter cards
- Dynamic sitemap generation with proper URLs
- Robots.txt configured for full crawling access
- Structured navigation with proper semantic HTML

### Development Guidelines

- Use Server Components by default, Client Components only when necessary
- Follow the established font hierarchy (Clash Display for headers, Geist Sans for body)
- Maintain the redirect architecture when adding new product links
- Update sitemap.ts when adding new pages
