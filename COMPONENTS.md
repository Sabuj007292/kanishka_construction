# Components Documentation

This document provides detailed information about all components used in the XYZ Construction website.

## 🏗️ Main Components

### Header Component
**File**: `components/header.tsx`
**Type**: Client Component

#### Features
- Responsive navigation with mobile hamburger menu
- Sticky positioning with backdrop blur effect
- Company logo and branding
- Phone number display for easy contact
- Call-to-action button for consultations
- Smooth scroll navigation to page sections

#### Structure
\`\`\`tsx
<header>
  <div className="container">
    <div className="flex justify-between">
      {/* Logo Section */}
      <div>XYZ Construction</div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        {/* Navigation Links */}
      </nav>
      
      {/* Contact & CTA */}
      <div className="hidden lg:flex">
        {/* Phone + Button */}
      </div>
      
      {/* Mobile Menu Toggle */}
      <button className="md:hidden">
        {/* Hamburger/Close Icon */}
      </button>
    </div>
    
    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden">
        {/* Mobile Navigation */}
      </div>
    )}
  </div>
</header>
\`\`\`

#### State Management
- `isMenuOpen`: Boolean state for mobile menu visibility

#### Navigation Links
- Home (`#home`)
- Services (`#services`) 
- Portfolio (`#portfolio`)
- About (`#about`)
- Contact (`#contact`)

---

### Hero Section Component
**File**: `components/hero-section.tsx`
**Type**: Server Component

#### Features
- Large, impactful headline with company branding
- Value proposition and company description
- Key benefits list with checkmark icons
- Dual call-to-action buttons
- Hero image with experience badge overlay
- Responsive two-column layout

#### Content Structure
\`\`\`tsx
<section id="home">
  <div className="container">
    <div className="grid lg:grid-cols-2">
      {/* Left Column - Content */}
      <div>
        <h1>Welcome to XYZ</h1>
        <p>Value proposition</p>
        <p>Detailed description</p>
        
        {/* Benefits List */}
        <div>
          <CheckCircle /> Clear communication
          <CheckCircle /> High-quality materials  
          <CheckCircle /> On-time delivery
        </div>
        
        {/* CTA Buttons */}
        <div>
          <Button>Get Free Consultation</Button>
          <Button variant="outline">View Our Work</Button>
        </div>
      </div>
      
      {/* Right Column - Image */}
      <div>
        <img src="hero-image.jpg" alt="Construction site" />
        <div className="experience-badge">25+ Years</div>
      </div>
    </div>
  </div>
</section>
\`\`\`

#### Key Messages
- **Headline**: "Welcome to XYZ"
- **Tagline**: "Where quality craftsmanship meets innovative design"
- **Value Props**: Communication, Quality, Timeliness

---

### Services Section Component
**File**: `components/services-section.tsx`
**Type**: Server Component

#### Features
- Three main service categories
- Icon-based service cards with descriptions
- Responsive grid layout (1 col mobile, 3 col desktop)
- Hover effects and smooth transitions
- Clear service descriptions and benefits

#### Services Offered
1. **Residential Construction**
   - Icon: Home
   - Services: Custom homes, additions, remodeling
   - Description: Dream home construction with attention to detail

2. **Commercial Construction**
   - Icon: Building
   - Services: Office buildings, retail spaces, warehouses
   - Description: Professional commercial spaces that drive business

3. **Renovation Services**
   - Icon: Wrench
   - Services: Kitchen/bathroom remodels, whole-house renovations
   - Description: Transform existing spaces with modern updates

#### Card Structure
\`\`\`tsx
<div className="service-card">
  <Icon className="service-icon" />
  <h3>Service Title</h3>
  <p>Service description...</p>
  <ul>
    <li>Service item 1</li>
    <li>Service item 2</li>
    <li>Service item 3</li>
  </ul>
</div>
\`\`\`

---

### Portfolio Section Component
**File**: `components/portfolio-section.tsx`
**Type**: Server Component

#### Features
- Grid showcase of completed projects
- Project categorization (Residential, Commercial, Renovation)
- Hover effects revealing project details
- Responsive image handling with proper aspect ratios
- Project titles and categories

#### Sample Projects
1. **Modern Family Home** (Residential)
2. **Downtown Office Complex** (Commercial)
3. **Historic Home Renovation** (Renovation)
4. **Retail Shopping Center** (Commercial)
5. **Kitchen Remodel** (Renovation)
6. **Industrial Warehouse** (Commercial)

#### Project Card Structure
\`\`\`tsx
<div className="project-card">
  <div className="image-container">
    <img src="project-image.jpg" alt="Project name" />
    <div className="overlay">
      <h3>Project Title</h3>
      <span className="category">Category</span>
    </div>
  </div>
</div>
\`\`\`

---

### CTA Section Component
**File**: `components/cta-section.tsx`
**Type**: Server Component

#### Features
- Three distinct contact methods
- Prominent consultation booking
- Direct contact information
- Responsive card layout
- Clear call-to-action messaging

#### Contact Methods
1. **Free Consultation**
   - Primary CTA with form/booking
   - Prominent button styling
   - Lead generation focus

2. **Phone Contact**
   - Direct phone number: (555) 123-4567
   - Immediate contact option
   - Phone icon for clarity

3. **Email Contact**
   - Email: info@xyzconstruction.com
   - Professional communication
   - Email icon for recognition

#### Card Layout
\`\`\`tsx
<section className="cta-section">
  <div className="container">
    <h2>Ready to Get Started?</h2>
    <div className="grid md:grid-cols-3">
      <Card>Consultation</Card>
      <Card>Phone</Card>
      <Card>Email</Card>
    </div>
  </div>
</section>
\`\`\`

---

### Footer Component
**File**: `components/footer.tsx`
**Type**: Server Component

#### Features
- Comprehensive site information
- Multi-column layout with organized sections
- Company mission and values
- Service links and quick navigation
- Contact information and social media
- Copyright and legal information

#### Footer Sections
1. **About XYZ Construction**
   - Company mission statement
   - Core values and approach
   - Years of experience highlight

2. **Our Services**
   - Links to service categories
   - Quick service overview
   - Service-specific pages (future)

3. **Quick Links**
   - Site navigation
   - Important pages
   - Resource links

4. **Contact Information**
   - Physical address
   - Phone and email
   - Business hours
   - Social media links

#### Footer Structure
\`\`\`tsx
<footer>
  <div className="container">
    <div className="grid md:grid-cols-4">
      <div>About Section</div>
      <div>Services Section</div>
      <div>Quick Links Section</div>
      <div>Contact Section</div>
    </div>
    <div className="footer-bottom">
      <p>Copyright notice</p>
    </div>
  </div>
</footer>
\`\`\`

---

## 🎨 UI Components Library

The project uses shadcn/ui components for consistent design and functionality. Key components include:

### Form Components
- **Button**: Primary, secondary, outline, ghost variants
- **Input**: Text inputs with proper styling
- **Textarea**: Multi-line text input
- **Select**: Dropdown selection
- **Checkbox**: Boolean selection
- **Radio Group**: Single selection from options

### Layout Components
- **Card**: Content containers with header, content, footer
- **Separator**: Visual dividers
- **Sheet**: Slide-out panels
- **Tabs**: Tabbed content organization
- **Accordion**: Collapsible content sections

### Navigation Components
- **Navigation Menu**: Complex navigation structures
- **Breadcrumb**: Hierarchical navigation
- **Pagination**: Page navigation

### Feedback Components
- **Alert**: Status messages and notifications
- **Toast**: Temporary notifications
- **Progress**: Progress indicators
- **Skeleton**: Loading placeholders

### Interactive Components
- **Dialog**: Modal dialogs
- **Dropdown Menu**: Context menus
- **Popover**: Floating content
- **Tooltip**: Hover information
- **Command**: Command palette interface

## 🔧 Component Usage Guidelines

### Import Patterns
\`\`\`tsx
// Main components
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

// UI components
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
\`\`\`

### Styling Conventions
- Use Tailwind CSS classes for styling
- Follow the established color palette
- Maintain consistent spacing using Tailwind scale
- Use semantic color tokens (primary, secondary, accent)

### Responsive Design
- Mobile-first approach
- Use Tailwind responsive prefixes (sm:, md:, lg:, xl:)
- Test on multiple screen sizes
- Ensure touch-friendly interactions on mobile

### Accessibility
- Include proper ARIA labels
- Use semantic HTML elements
- Ensure keyboard navigation
- Maintain color contrast ratios
- Provide alt text for images

---

This documentation should be updated as components are modified or new components are added to the project.
