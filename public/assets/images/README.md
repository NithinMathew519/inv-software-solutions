# Images Folder Structure

This folder contains all the images used in the INV Software Solutions website.

## Directory Structure

```text
images/
├── Logo/           # Company logo (main PNG logo)
├── hero/           # Hero section images and banners
├── team/           # Team member photos
├── services/       # Service-related images and icons
├── icons/          # Custom icons and graphics
└── README.md       # This file
```

## Usage

All images should be placed in their respective folders and referenced using the path:
`/assets/images/[folder]/[filename]`

## Examples

- **Company Logo**: `/assets/images/Logo/Logo.png` (main logo used in header and footer)
- Team member photos: `/assets/images/team/john-doe.jpg`
- Hero banner: `/assets/images/hero/main-banner.jpg`
- Service icons: `/assets/images/services/web-development.png`
- Custom icons: `/assets/images/icons/logo-icon.svg`

## Recommended Image Formats

- **Photos**: JPG or WebP for best compression
- **Icons/Graphics**: SVG for scalability, PNG for transparency
- **Logos**: SVG preferred for crisp display at all sizes

## Image Optimization

Before adding images, please ensure they are optimized for web:

- Compress images to reduce file size
- Use appropriate dimensions for their intended use
- Consider using WebP format for better compression

## Current Usage in Components

### Team Photos

Referenced in: `src/app/pages/about/about.component.ts`

```typescript
image: '/assets/images/team/john.jpg'
```

### Service Images

Can be used in: `src/app/pages/services/services.component.html`

### Hero Images

Can be used in: `src/app/pages/home/home.component.html`
