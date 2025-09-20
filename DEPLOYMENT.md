# Deployment Guide

This guide covers deployment options, configuration, and best practices for the XYZ Construction website.

## 🚀 Deployment Options

### Vercel (Recommended)

Vercel is the recommended platform for Next.js applications, offering seamless integration and optimal performance.

#### Quick Deploy
1. **Connect Repository**
   - Push code to GitHub/GitLab/Bitbucket
   - Import project in Vercel dashboard
   - Automatic deployments on push

2. **Manual Deploy**
   \`\`\`bash
   npm install -g vercel
   vercel --prod
   \`\`\`

#### Configuration
\`\`\`json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://xyzconstruction.com"
  }
}
\`\`\`

### Netlify

Alternative deployment platform with good Next.js support.

#### Deploy Steps
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Configure environment variables

#### Configuration
\`\`\`toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
\`\`\`

### Self-Hosted

For custom server deployment.

#### Docker Deployment
\`\`\`dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Build application
FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
\`\`\`

#### Docker Compose
\`\`\`yaml
# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://xyzconstruction.com
    restart: unless-stopped
\`\`\`

## ⚙️ Environment Configuration

### Environment Variables

#### Production Variables
\`\`\`bash
# .env.production
NEXT_PUBLIC_SITE_URL=https://xyzconstruction.com
NEXT_PUBLIC_CONTACT_EMAIL=info@xyzconstruction.com
NEXT_PUBLIC_PHONE_NUMBER=+15551234567
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
\`\`\`

#### Development Variables
\`\`\`bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=dev@xyzconstruction.com
NEXT_PUBLIC_PHONE_NUMBER=+15551234567
\`\`\`

### Build Configuration

#### Next.js Configuration
\`\`\`javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // For Docker deployment
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

export default nextConfig
\`\`\`

## 🔧 Build Optimization

### Performance Optimizations

#### Image Optimization
\`\`\`tsx
// Optimize images for production
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="Construction site"
  width={1200}
  height={800}
  priority // For above-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
\`\`\`

#### Font Optimization
\`\`\`tsx
// app/layout.tsx
import { GeistSans } from 'geist/font/sans'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  )
}
\`\`\`

#### Bundle Analysis
\`\`\`bash
# Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
\`\`\`

### SEO Configuration

#### Metadata
\`\`\`tsx
// app/layout.tsx
export const metadata = {
  title: 'XYZ Construction - Quality Craftsmanship & Innovative Design',
  description: 'Professional construction services for residential and commercial projects. Turn your ideas into reality with XYZ Construction.',
  keywords: 'construction, residential, commercial, renovation, building',
  authors: [{ name: 'XYZ Construction' }],
  creator: 'XYZ Construction',
  publisher: 'XYZ Construction',
  openGraph: {
    title: 'XYZ Construction - Quality Craftsmanship',
    description: 'Professional construction services for your dream projects',
    url: 'https://xyzconstruction.com',
    siteName: 'XYZ Construction',
    images: [
      {
        url: 'https://xyzconstruction.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'XYZ Construction',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XYZ Construction - Quality Craftsmanship',
    description: 'Professional construction services for your dream projects',
    images: ['https://xyzconstruction.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
\`\`\`

#### Sitemap Generation
\`\`\`tsx
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://xyzconstruction.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://xyzconstruction.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://xyzconstruction.com/portfolio',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
\`\`\`

## 📊 Analytics & Monitoring

### Google Analytics
\`\`\`tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
\`\`\`

### Performance Monitoring
\`\`\`tsx
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
\`\`\`

## 🔒 Security

### Security Headers
\`\`\`javascript
// next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
          },
        ],
      },
    ]
  },
}
\`\`\`

### Environment Security
\`\`\`bash
# Never commit sensitive data
# Use environment variables for:
- API keys
- Database URLs
- Third-party service credentials
- Email service configurations
\`\`\`

## 🚦 CI/CD Pipeline

### GitHub Actions
\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build application
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
\`\`\`

## 📋 Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] Build completes without errors
- [ ] Bundle size is optimized
- [ ] No console.log statements in production

### Performance
- [ ] Images are optimized and compressed
- [ ] Fonts are properly loaded
- [ ] Critical CSS is inlined
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals are green

### SEO & Accessibility
- [ ] Meta tags are complete and accurate
- [ ] Open Graph images are set
- [ ] Sitemap is generated
- [ ] robots.txt is configured
- [ ] WCAG accessibility standards met
- [ ] Screen reader testing completed

### Functionality
- [ ] All forms work correctly
- [ ] Navigation functions properly
- [ ] Mobile responsiveness verified
- [ ] Cross-browser compatibility tested
- [ ] Contact information is accurate

### Security
- [ ] Security headers configured
- [ ] Environment variables secured
- [ ] No sensitive data in client bundle
- [ ] HTTPS is enforced
- [ ] Content Security Policy set

## 🔄 Post-Deployment

### Monitoring
- Set up uptime monitoring
- Configure error tracking (Sentry)
- Monitor Core Web Vitals
- Track user analytics
- Set up performance alerts

### Maintenance
- Regular dependency updates
- Security patch monitoring
- Performance optimization reviews
- Content updates and reviews
- Backup and recovery procedures

### Domain & DNS
\`\`\`bash
# DNS Configuration
A     @     192.0.2.1
CNAME www   xyzconstruction.com
\`\`\`

---

This deployment guide ensures a smooth and secure launch of the XYZ Construction website with optimal performance and reliability.
