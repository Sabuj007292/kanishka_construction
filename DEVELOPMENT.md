# Development Guide

This guide covers development practices, coding standards, and workflow for the XYZ Construction website project.

## 🛠️ Development Environment Setup

### Prerequisites
- **Node.js**: Version 18.0 or higher
- **Package Manager**: npm, yarn, or pnpm
- **Editor**: VS Code recommended with extensions:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - ESLint

### Environment Configuration

1. **Clone and Install**
\`\`\`bash
git clone <repository-url>
cd xyz-construction
npm install
\`\`\`

2. **Development Server**
\`\`\`bash
npm run dev
# Server runs on http://localhost:3000
\`\`\`

3. **Environment Variables** (if needed)
\`\`\`bash
# Create .env.local for local development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

## 📝 Coding Standards

### TypeScript Guidelines

#### Type Definitions
\`\`\`tsx
// Component Props
interface HeroSectionProps {
  title?: string
  subtitle?: string
  showCTA?: boolean
}

// API Responses
interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}
\`\`\`

#### Component Structure
\`\`\`tsx
"use client" // Only when needed

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ComponentProps {
  // Props definition
}

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Hooks
  const [state, setState] = useState<Type>(initialValue)
  
  // Event handlers
  const handleClick = () => {
    // Handler logic
  }
  
  // Render
  return (
    <div className="component-container">
      {/* Component JSX */}
    </div>
  )
}
\`\`\`

### CSS/Tailwind Guidelines

#### Class Organization
\`\`\`tsx
// Order: Layout -> Spacing -> Typography -> Colors -> Effects
<div className="flex items-center justify-between p-4 text-lg font-semibold text-primary bg-background rounded-lg shadow-sm">
\`\`\`

#### Responsive Design
\`\`\`tsx
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
\`\`\`

#### Custom CSS (when needed)
\`\`\`css
/* Use CSS custom properties for dynamic values */
.custom-component {
  background: linear-gradient(
    135deg,
    hsl(var(--primary)) 0%,
    hsl(var(--accent)) 100%
  );
}
\`\`\`

### File Naming Conventions

- **Components**: `kebab-case.tsx` (e.g., `hero-section.tsx`)
- **Pages**: `page.tsx`, `layout.tsx`, `loading.tsx`
- **Utilities**: `kebab-case.ts` (e.g., `format-phone.ts`)
- **Types**: `types.ts` or `component-name.types.ts`
- **Constants**: `UPPER_SNAKE_CASE` in `constants.ts`

## 🏗️ Project Architecture

### Directory Structure
\`\`\`
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Site header
│   ├── hero-section.tsx  # Hero section
│   └── ...               # Other sections
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
└── constants/            # Application constants
\`\`\`

### Component Architecture

#### Component Types
1. **Layout Components**: Header, Footer, Navigation
2. **Section Components**: Hero, Services, Portfolio, CTA
3. **UI Components**: Buttons, Cards, Forms (from shadcn/ui)
4. **Utility Components**: Theme Provider, Error Boundaries

#### Component Patterns
\`\`\`tsx
// Server Component (default)
export function ServerComponent() {
  return <div>Server-rendered content</div>
}

// Client Component (when interactivity needed)
"use client"
export function ClientComponent() {
  const [state, setState] = useState()
  return <div>Interactive content</div>
}
\`\`\`

## 🎨 Design System Implementation

### Color System Usage
\`\`\`tsx
// Use semantic color tokens
<div className="bg-background text-foreground">
  <h1 className="text-primary">Heading</h1>
  <p className="text-muted-foreground">Description</p>
  <Button className="bg-accent text-accent-foreground">CTA</Button>
</div>
\`\`\`

### Typography Scale
\`\`\`tsx
// Heading hierarchy
<h1 className="text-4xl lg:text-6xl font-bold">Main Heading</h1>
<h2 className="text-3xl lg:text-4xl font-semibold">Section Heading</h2>
<h3 className="text-xl lg:text-2xl font-medium">Subsection</h3>

// Body text
<p className="text-lg leading-relaxed">Large body text</p>
<p className="text-base leading-normal">Regular body text</p>
<p className="text-sm text-muted-foreground">Small text</p>
\`\`\`

### Spacing System
\`\`\`tsx
// Use consistent spacing scale
<div className="space-y-8">        {/* 32px vertical spacing */}
  <div className="p-6">            {/* 24px padding */}
    <div className="mb-4">         {/* 16px margin bottom */}
      <div className="gap-2">      {/* 8px gap */}
\`\`\`

## 🔧 Development Workflow

### Git Workflow

#### Branch Naming
- `feature/component-name` - New features
- `fix/issue-description` - Bug fixes
- `refactor/component-name` - Code refactoring
- `docs/section-name` - Documentation updates

#### Commit Messages
\`\`\`bash
# Format: type(scope): description
feat(header): add mobile navigation menu
fix(hero): resolve image loading issue
docs(readme): update installation instructions
refactor(services): improve component structure
\`\`\`

### Code Review Checklist

#### Functionality
- [ ] Component renders correctly on all screen sizes
- [ ] Interactive elements work as expected
- [ ] No console errors or warnings
- [ ] Proper error handling implemented

#### Code Quality
- [ ] TypeScript types are properly defined
- [ ] Components are properly structured
- [ ] No unused imports or variables
- [ ] Consistent naming conventions

#### Performance
- [ ] Images are optimized and have proper alt text
- [ ] No unnecessary re-renders
- [ ] Proper use of client vs server components
- [ ] Bundle size impact is minimal

#### Accessibility
- [ ] Proper semantic HTML structure
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG standards

## 🧪 Testing Strategy

### Component Testing
\`\`\`tsx
// Example test structure
import { render, screen } from '@testing-library/react'
import { Header } from '@/components/header'

describe('Header Component', () => {
  it('renders company logo', () => {
    render(<Header />)
    expect(screen.getByText('XYZ')).toBeInTheDocument()
  })
  
  it('shows mobile menu when hamburger clicked', () => {
    render(<Header />)
    // Test mobile menu functionality
  })
})
\`\`\`

### Manual Testing Checklist
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test with screen readers
- [ ] Test keyboard navigation
- [ ] Test form submissions
- [ ] Test loading states

## 🚀 Deployment

### Build Process
\`\`\`bash
# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
\`\`\`

### Pre-deployment Checklist
- [ ] All TypeScript errors resolved
- [ ] No ESLint warnings
- [ ] Build completes successfully
- [ ] All images optimized
- [ ] Meta tags updated
- [ ] Analytics configured
- [ ] Performance tested

### Environment Variables
\`\`\`bash
# Production environment variables
NEXT_PUBLIC_SITE_URL=https://xyzconstruction.com
NEXT_PUBLIC_CONTACT_EMAIL=info@xyzconstruction.com
NEXT_PUBLIC_PHONE_NUMBER=+15551234567
\`\`\`

## 🔍 Debugging

### Common Issues

#### Hydration Errors
\`\`\`tsx
// Avoid: Different server/client rendering
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
if (!mounted) return null
\`\`\`

#### Image Loading Issues
\`\`\`tsx
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // For above-fold images
/>
\`\`\`

#### Styling Issues
\`\`\`tsx
// Debug with temporary borders
<div className="border-2 border-red-500">
  {/* Component content */}
</div>
\`\`\`

### Development Tools
- **React Developer Tools**: Component inspection
- **Tailwind CSS DevTools**: Class debugging
- **Next.js DevTools**: Performance monitoring
- **Lighthouse**: Performance and accessibility auditing

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

### Design Resources
- [Tailwind UI Components](https://tailwindui.com)
- [Lucide Icons](https://lucide.dev)
- [Unsplash](https://unsplash.com) - Stock photos

### Development Tools
- [VS Code Extensions](https://marketplace.visualstudio.com)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools)
- [React DevTools](https://react.dev/learn/react-developer-tools)

---

This development guide should be updated as the project evolves and new patterns are established.
