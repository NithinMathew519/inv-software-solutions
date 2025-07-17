# Domain Setup Guide for INV Software Solutions, LLC

## Current Project Status

- **Angular Version**: 20.1.0
- **Development Port**: 4200
- **Company**: INV Software Solutions, LLC
- **Domain**: invsoftwaresolutions.com (Namecheap)

## Business Information Integrated

- **Company Name**: INV Software Solutions, LLC
- **CEO**: Jay Pasala
- **Phone**: (607) 331-8233
- **Email**: <jaypas@invsoftwaresolutions.com>
- **Website**: <https://www.invsoftwaresolutions.com>
- **Address**: 2926 Fallscreek Ct, Pearland, TX 77584

## Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── header/ (with company logo and navigation)
│   │   └── footer/ (with contact information)
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   ├── contact/ (with Google Maps integration)
│   │   └── careers/ (showing "Currently Not Hiring")
│   └── shared/
└── assets/
    └── images/
        └── Logo/
            └── Logo.png
```

## Domain Connection Steps

### 1. Build Production Version

```bash
ng build --configuration production
```

### 2. Namecheap DNS Configuration

Set up the following DNS records in your Namecheap account:

**A Records:**

- Host: @ → Points to your server IP
- Host: www → Points to your server IP

**CNAME Records:**

- Host: www → Points to invsoftwaresolutions.com

### 3. Server Configuration

- Upload built files from `dist/` folder to your web server
- Configure server to serve Angular app (handle routing)
- Set up SSL certificate for HTTPS

### 4. Environment Configuration

Update `src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.invsoftwaresolutions.com', // if you have backend
  domain: 'invsoftwaresolutions.com'
};
```

### 5. Google Maps Configuration

- Current iframe integration for address: 2926 Fallscreek Ct, Pearland, TX 77584
- Consider upgrading to Google Maps API for better functionality

### 6. SEO Optimization

- Meta tags configured for each page
- Structured data for business information
- Sitemap.xml generation
- robots.txt configuration

## Contact Information Locations

The following files contain business contact information:

- `src/app/components/footer/footer.component.html`
- `src/app/pages/contact/contact.component.html`
- `src/app/pages/contact/contact.component.ts`
- `src/app/pages/about/about.component.html`

## Features Implemented

✅ Responsive design with mobile-first approach
✅ Professional header with company logo and navigation
✅ Google Maps integration on contact page
✅ Updated company information throughout site
✅ Career section showing "Currently Not Hiring"
✅ Contact form with validation
✅ Professional styling with hover effects
✅ Footer with complete business information

## Contact for Support

For technical support during domain setup:

- Email: <jaypas@invsoftwaresolutions.com>
- Phone: (607) 331-8233

---
*Last Updated: Current Date*
*Project Status: Ready for Domain Connection*
