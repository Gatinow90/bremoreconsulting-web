# Bremore Consulting Ltd - Brand Identity & Website

## Complete Enterprise Brand Pack & Multi-Page Website

**Company**: Bremore Consulting Ltd  
**Founded**: 2024  
**Location**: Ireland  
**Specialization**: IT Consulting, AI Solutions, Digital Learning Transformation, Technology Strategy, Staffing Services

---

## 🎨 Brand Identity

### Brand Personality
- **Professional**: Enterprise-grade expertise and delivery
- **Innovative**: Forward-thinking, AI-focused, future-ready
- **Trustworthy**: Reliable partner since 2024
- **Future-Focused**: Leading-edge technology solutions
- **Irish Roots, Global Mindset**: Local understanding, international standards

### Logo Variations

#### 1. Full Logo (Primary)
- **File**: `LogoFull.tsx`
- **Usage**: Website header, marketing materials, presentations
- **Variants**: Dark (on light backgrounds), Light (on dark backgrounds)
- **Description**: Abstract geometric "B" symbol with full company name

#### 2. Minimal Logo
- **File**: `LogoMinimal.tsx`
- **Usage**: Favicon, small spaces, app icons, social media avatars
- **Description**: Geometric "B" monogram only

#### 3. Geometric Logo
- **File**: `LogoGeometric.tsx`
- **Usage**: Alternative mark, AI-focused materials, patterns
- **Description**: AI-inspired geometric pattern with connection lines

### Color Palette

#### Primary Colors
- **Deep Navy**: `#0A1A2F`
  - Usage: Headers, footers, primary brand color
  - CSS Variable: `--bremore-navy`

- **Electric Blue**: `#0066FF`
  - Usage: CTAs, links, interactive elements, primary accent
  - CSS Variable: `--bremore-blue`

- **White**: `#FFFFFF`
  - Usage: Backgrounds, text on dark surfaces

#### Secondary Colors
- **Slate Grey**: `#4A5568`
  - Usage: Secondary text, subtle elements
  - CSS Variable: `--bremore-slate`

- **Light Grey**: `#F8FAFC`
  - Usage: Backgrounds, cards, sections
  - CSS Variable: `--bremore-light`

#### Gradients
- **Primary Gradient**: `linear-gradient(to bottom right, #0A1A2F, #003B8E)`
  - Usage: Hero sections, CTAs, premium elements

### Typography

#### Font Families
- **Headings**: `Inter, SF Pro, IBM Plex Sans`
  - Weights: 600 (Semibold), 700 (Bold)
  - Usage: H1-H4, headlines, section titles

- **Body**: `Inter, Roboto, system-ui, -apple-system, sans-serif`
  - Weight: 400 (Regular)
  - Usage: Paragraph text, UI labels, descriptions

- **Accent/Monospace**: `SF Mono, Monaco, monospace`
  - Weight: 500 (Medium)
  - Usage: Numbers, metrics, code snippets

#### Type Scale
- **H1**: 3.5-4rem (56-64px) - Hero headlines
- **H2**: 2.5-3rem (40-48px) - Section headings
- **H3**: 1.75-2rem (28-32px) - Subsections
- **H4**: 1.25-1.5rem (20-24px) - Card titles
- **Body**: 1rem (16px) - Default
- **Small**: 0.875rem (14px) - Captions, labels

### Icon Set
**Library**: Lucide React

**Core Icons**:
- `Code` - IT Consulting
- `Brain` - AI & Machine Learning
- `GraduationCap` - Digital Learning
- `TrendingUp` - Technology Strategy
- `Users` - Staffing & Talent
- `Shield` - Cybersecurity
- `Cloud` - Cloud Services
- `Database` - Data & Analytics

### Component Library

#### Buttons
1. **Primary**: `bg-primary text-primary-foreground hover:bg-primary/90`
2. **Secondary**: `border-2 border-primary text-primary hover:bg-primary/5`
3. **Ghost**: `text-primary hover:text-primary/80`

#### Cards
1. **Service Card**: White background, border, icon, hover state
2. **Highlight Card**: Light grey background for emphasis
3. **CTA Card**: Gradient background for calls-to-action
4. **Case Study Card**: Image + content layout

#### Forms
- **Input Fields**: Light grey background, border, focus ring
- **Selects/Dropdowns**: Consistent styling with inputs
- **Textareas**: Same styling, resizable

#### Spacing System
- **Small**: 1rem (16px)
- **Medium**: 1.5rem (24px)
- **Large**: 2rem (32px)
- **XL**: 3rem (48px)
- **2XL**: 4rem (64px)

#### Grid System
- 12-column responsive grid
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Max container width: 1280px (max-w-7xl)

---

## 🌐 Website Structure

### Pages

#### 1. Home (`/`)
**SEO Title**: IT, AI & Technology Consulting in Ireland  
**Sections**:
- Hero with gradient background and imagery
- Services overview (5 cards)
- Why Choose Us (4 pillars)
- Case studies preview (3 featured)
- Testimonials carousel
- CTA section

#### 2. About (`/about`)
**SEO Title**: About Us  
**Sections**:
- Hero
- Mission & Vision (2 columns)
- Our Values (4 cards)
- Company story with image
- Timeline (2024-2026)
- Certifications & Partnerships

#### 3. Services (`/services`)
**SEO Title**: Services  
**Sections**:
- Hero
- Detailed service blocks (4 core services):
  - IT Consulting
  - AI & Automation Solutions
  - Digital Learning Transformation
  - Technology Strategy & Architecture
- Additional expertise (4 services)
- CTA section

#### 4. Staffing (`/staffing`)
**SEO Title**: Technology Staffing & Talent Solutions  
**Sections**:
- Hero
- Overview with imagery
- Sectors served (6 sectors)
- Process steps (5 stages)
- Benefits (6 items)
- Dual CTAs (Employers & Candidates)

#### 5. Case Studies (`/case-studies`)
**SEO Title**: Case Studies  
**Sections**:
- Hero
- 6 detailed case studies:
  - Challenge, Solution, Outcome format
  - Metrics display
  - Industry tags
  - Hero images
- CTA section

#### 6. Contact (`/contact`)
**SEO Title**: Contact Us  
**Sections**:
- Hero
- Contact information sidebar
- Contact form (7 fields)
- Map placeholder
- FAQ section (8 questions)

### Navigation
- **Fixed Header**: Sticky navigation with logo and menu
- **Mobile Menu**: Responsive hamburger menu with slide-in
- **Active States**: Motion-based active indicator
- **CTA Button**: "Book Consultation" in header

### Footer
**Sections**:
- Brand & tagline
- Services links
- Company links
- Contact information
- Legal links (Privacy, Terms)
- Copyright notice

---

## 🔍 SEO & AIO Optimization

### SEO Features

#### Meta Tags
- Title tags (55-60 characters)
- Meta descriptions (150-160 characters)
- Keywords meta tags
- Component: `SEO.tsx`

#### Schema Markup (JSON-LD)
- **Organization Schema**: Company information, services, contact
- **Local Business Schema**: Ireland-based business
- **Service Schema**: All 5 core services
- **FAQ Schema**: Contact page FAQs
- Component: `SEOSchema.tsx`

#### Structured Headings
- Clear H1/H2 hierarchy
- Keyword-rich headings
- Semantic HTML structure

### AIO (AI-Optimized) Content

#### AI Summary Block
Structured content in `AIOContent.tsx`:
- Who we are
- What we do
- Who we serve
- Why choose us
- How to contact

#### AI-Friendly FAQ
12 optimized Q&A pairs covering:
- Services offered
- Location & founding
- Industries served
- Engagement process
- Pricing models
- Unique differentiators

#### Direct Answer Format
- Short, clear responses
- Structured data
- Keyword optimization
- Easily extractable by AI agents

---

## 🎯 Implementation Details

### Technology Stack
- **Framework**: React 18.3.1
- **Routing**: React Router 7.13.0
- **Styling**: Tailwind CSS v4
- **Animation**: Motion (Framer Motion) 12.23.24
- **Icons**: Lucide React 0.487.0
- **Build Tool**: Vite 6.3.5

### File Structure
```
src/
├── app/
│   ├── components/
│   │   ├── brand/
│   │   │   ├── LogoFull.tsx
│   │   │   ├── LogoMinimal.tsx
│   │   │   ├── LogoGeometric.tsx
│   │   │   └── BrandGuide.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── SEO.tsx
│   │   ├── SEOSchema.tsx
│   │   └── AIOContent.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Staffing.tsx
│   │   ├── CaseStudies.tsx
│   │   └── Contact.tsx
│   └── App.tsx
└── styles/
    ├── theme.css (customized with Bremore colors)
    ├── tailwind.css
    ├── fonts.css
    └── index.css
```

### Responsive Design
- **Mobile-first**: All components designed for mobile
- **Breakpoints**: Tailwind standard (sm, md, lg, xl)
- **Touch-friendly**: Large tap targets, accessible navigation
- **Image optimization**: Responsive images with proper sizing

### Performance
- **Code splitting**: Route-based
- **Lazy loading**: Images and components
- **Motion**: Hardware-accelerated animations
- **Bundle optimization**: Vite production build

### Accessibility
- **Semantic HTML**: Proper heading structure
- **ARIA labels**: Where necessary
- **Keyboard navigation**: Full support
- **Color contrast**: WCAG AA compliant

---

## 📊 Brand Assets Deliverables

### Exported Components
✅ 3 Logo variations (Full, Minimal, Geometric)  
✅ Complete color system with CSS variables  
✅ Typography scale and font definitions  
✅ Icon set (8 core service icons)  
✅ Button styles (3 variants)  
✅ Card components (4 types)  
✅ Form elements (inputs, selects, textareas)  
✅ Spacing system  
✅ Grid system  

### Website Pages
✅ Home page with hero, services, case studies, testimonials  
✅ About page with mission, values, timeline  
✅ Services page with detailed offerings  
✅ Staffing page with process and sectors  
✅ Case Studies page with 6 detailed examples  
✅ Contact page with form and FAQs  

### SEO & AIO
✅ Meta tags for all pages  
✅ Organization schema markup  
✅ Service schema markup  
✅ FAQ schema markup  
✅ AI-optimized content blocks  
✅ Structured data for AI extraction  

### Technical Implementation
✅ Multi-page routing with React Router  
✅ Responsive design (mobile + desktop)  
✅ Motion animations (hero, scroll, hover)  
✅ Form functionality  
✅ Navigation with active states  
✅ Footer with all links  

---

## 🚀 Getting Started

### View the Brand Guide
The complete brand guide is available as a component at:
- File: `src/app/components/brand/BrandGuide.tsx`
- Add route to view: `/brand-guide`

### Customization
All brand colors are defined in `src/styles/theme.css` as CSS variables:
- `--bremore-navy`
- `--bremore-blue`
- `--bremore-slate`
- `--bremore-light`

### Extending
- Add new pages in `src/app/pages/`
- Add routes in `src/app/App.tsx`
- Create new components in `src/app/components/`
- Follow established design patterns

---

## 📞 Contact Information

**Company**: Bremore Consulting Ltd  
**Email**: info@bremoreconsulting.ie  
**Location**: Ireland  
**Website**: bremoreconsulting.ie  
**LinkedIn**: linkedin.com/company/bremore-consulting  

---

## 📝 Notes

- All images use Unsplash URLs (replace with actual brand photography)
- Contact form submission needs backend integration
- Map section is placeholder (integrate Google Maps or similar)
- Analytics tracking should be added
- Cookie consent banner recommended
- Consider adding blog/resources section

---

**Version**: 1.0  
**Last Updated**: April 12, 2026  
**Created By**: Claude Code (Bremore Consulting Brand Pack)
