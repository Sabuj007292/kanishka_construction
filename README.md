# Kanishka Construction - Professional Construction Services

*Built with Next.js, TypeScript, and Tailwind CSS*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/greensabuj2012-5147s-projects/v0-react-code-structure)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/nJNtQ03704J)

## 🏗️ Project Overview

XYZ Construction is a modern, responsive website for a professional construction company. The site showcases quality craftsmanship, innovative design, and comprehensive construction services for both residential and commercial projects.

### ✨ Key Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI**: Clean, professional design using shadcn/ui components
- **Performance Optimized**: Built with Next.js 14 and optimized for Core Web Vitals
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Ready**: Comprehensive meta tags, structured data, and sitemap
- **Type Safe**: Full TypeScript implementation for better development experience

### 🎯 Services Highlighted

- **Residential Construction**: Custom homes, additions, and remodeling
- **Commercial Construction**: Office buildings, retail spaces, and warehouses  
- **Renovation Services**: Kitchen/bathroom remodels and whole-house renovations

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd xyz-construction

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

\`\`\`bash
# Create production build
npm run build

# Start production server
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage with all sections
├── components/            # React components
│   ├── ui/               # shadcn/ui component library
│   ├── header.tsx        # Site navigation header
│   ├── hero-section.tsx  # Hero section with CTA
│   ├── services-section.tsx # Services showcase
│   ├── portfolio-section.tsx # Project portfolio
│   ├── cta-section.tsx   # Contact call-to-action
│   └── footer.tsx        # Site footer
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets and images
\`\`\`

## 🎨 Design System

### Color Palette
- **Primary**: Dark gray (`#343434`) for headings and primary elements
- **Secondary**: Purple (`#8B5CF6`) for accents and CTAs
- **Background**: Pure white (`#FFFFFF`) with light gray cards
- **Text**: Dark gray for readability with muted variants

### Typography
- **Headings**: Geist Sans font family, bold weights
- **Body**: Geist Sans font family, regular weight
- **Responsive**: Scales from mobile (text-4xl) to desktop (text-6xl)

### Components
Built with shadcn/ui for consistency:
- Buttons with multiple variants (primary, secondary, outline)
- Cards for content organization
- Responsive navigation with mobile menu
- Form elements with proper validation styling

## 🔧 Development

### Available Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
\`\`\`

### Code Standards

- **TypeScript**: Strict mode enabled with proper type definitions
- **ESLint**: Configured for Next.js and React best practices
- **Prettier**: Consistent code formatting
- **Tailwind CSS**: Utility-first styling with design tokens

### Component Architecture

\`\`\`tsx
// Example component structure
export function ComponentName() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Component content */}
        </div>
      </div>
    </section>
  )
}
\`\`\`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layouts)
- **Tablet**: 768px - 1024px (two column layouts)
- **Desktop**: > 1024px (multi-column layouts)
- **Large**: > 1280px (maximum width containers)

## 🔍 SEO & Performance

### Metadata
- Comprehensive meta tags for social sharing
- Open Graph and Twitter Card support
- Structured data for search engines
- Sitemap generation for better indexing

### Performance Features
- Next.js Image optimization with WebP/AVIF support
- Font optimization with Geist font family
- Code splitting and lazy loading
- Optimized bundle size with tree shaking

### Lighthouse Scores
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🚀 Deployment

### Vercel (Recommended)
\`\`\`bash
# Deploy to Vercel
npm install -g vercel
vercel --prod
\`\`\`

### Other Platforms
- **Netlify**: Connect GitHub repo with build command `npm run build`
- **Docker**: Dockerfile included for containerized deployment
- **Static Export**: Use `npm run build && npm run export` for static hosting

### Environment Variables
\`\`\`bash
NEXT_PUBLIC_SITE_URL=https://xyzconstruction.com
NEXT_PUBLIC_CONTACT_EMAIL=info@xyzconstruction.com
NEXT_PUBLIC_PHONE_NUMBER=+15551234567
\`\`\`

## 📚 Documentation

- **[Components Guide](./COMPONENTS.md)**: Detailed component documentation
- **[Development Guide](./DEVELOPMENT.md)**: Development workflow and standards
- **[Deployment Guide](./DEPLOYMENT.md)**: Deployment options and configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Workflow
- Follow TypeScript strict mode
- Use conventional commit messages
- Ensure all tests pass
- Maintain accessibility standards
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**XYZ Construction**
- Website: [https://xyzconstruction.com](https://xyzconstruction.com)
- Email: info@xyzconstruction.com
- Phone: (555) 123-4567

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Geist](https://vercel.com/font)
- Deployed on [Vercel](https://vercel.com/)

---

**Ready to build your dream project?** Contact XYZ Construction today for a free consultation!
