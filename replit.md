# Oppulence - Dental RCM Platform

## Overview

Oppulence is a modern web application for dental Revenue Cycle Management (RCM) services. The platform provides a marketing website showcasing RCM solutions including insurance verification, AR support, payment posting, claims submission, credentialing, and special projects for dental practices. Built with a focus on visual appeal and user engagement, the application features 3D animations, smooth transitions, and a comprehensive service presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Technology Stack**
- **React 18** with TypeScript for type-safe component development
- **React Router** for client-side routing with animated page transitions
- **Vite** as the build tool and development server for fast HMR
- **TailwindCSS** for utility-first styling with custom design system

**UI Component System**
- Radix UI primitives for accessible, unstyled components (dialogs, menus, forms, etc.)
- Custom component library built on top of Radix with consistent styling
- Shadcn/ui design patterns for cohesive component architecture
- Class Variance Authority (CVA) for managing component variants

**3D Graphics and Animations**
- **React Three Fiber** for declarative 3D scene management using Three.js
- **Drei** library for pre-built 3D helpers (OrbitControls, PerspectiveCamera, etc.)
- **Postprocessing** for visual effects in 3D scenes
- **GLSL shader** support via vite-plugin-glsl
- **Framer Motion** for smooth page transitions and scroll-based animations

**State Management and Data Fetching**
- React hooks for local component state
- Custom hooks for scroll animations, parallax effects, and count-up animations
- TanStack Query (React Query) configured for server state management
- Context API for global UI state (planned for future authentication)

**Design System**
- Custom CSS variables for theming (primary, secondary, accent colors)
- Oppulence brand colors (teal: `193 95% 40%`, blue: `210 95% 45%`)
- Responsive design with mobile-first approach
- Inter font family via Fontsource

### Backend Architecture

**Server Framework**
- **Express.js** as the web server framework
- **TypeScript** with ES modules for type safety
- Middleware for JSON parsing, URL encoding, and request logging
- Custom error handling middleware

**Development vs Production**
- Development: Vite middleware integration for HMR
- Production: Static file serving from built assets
- Environment-based configuration

**API Design**
- RESTful API structure (routes prefixed with `/api`)
- Modular route registration pattern
- Request/response logging with timing metrics

**Implemented API Endpoints**
- `GET /api/blog-posts` - Get all published blog posts
- `GET /api/blog-posts/:slug` - Get single blog post by slug
- `POST /api/blog-posts` - Create new blog post (**requires authentication - not yet implemented**)
- `PUT /api/blog-posts/:id` - Update blog post (**requires authentication - not yet implemented**)
- `DELETE /api/blog-posts/:id` - Delete blog post (**requires authentication - not yet implemented**)
- `POST /api/contact-submissions` - Submit contact form
- `GET /api/contact-submissions` - List all submissions (**requires authentication - not yet implemented**)
- `POST /api/lead-magnet-downloads` - Record lead magnet download
- `GET /api/lead-magnet-downloads` - List all downloads (**requires authentication - not yet implemented**)

**Data Layer**
- Storage interface pattern for database abstraction
- Database-backed storage using Drizzle ORM with PostgreSQL
- Full CRUD operations for blog posts, contact submissions, lead magnets

### Data Storage Solutions

**ORM and Database**
- **Drizzle ORM** for type-safe database operations
- **Neon Serverless** driver for PostgreSQL connectivity
- Schema definition in TypeScript with automatic type inference
- Migration support via Drizzle Kit

**Schema Design**
- **Users table**: id, username, password fields (for future admin authentication)
- **Blog Posts table**: id, title, slug, excerpt, content, coverImage, category, readTime, published, createdAt, updatedAt
- **Contact Submissions table**: id, name, practiceName, email, phone, service, message, bestTimeToContact, createdAt
- **Lead Magnet Downloads table**: id, email, downloadType, createdAt
- Zod schemas for runtime validation of all insert operations
- Type-safe select/insert operations with Drizzle ORM

**Storage Implementation**
- `IStorage` interface defines CRUD operations for all entities
- `DatabaseStorage` class implements interface using Drizzle ORM with PostgreSQL
- Supports blog posts (CRUD), contact submissions, and lead magnet downloads

### Authentication and Authorization

**Current State**
- ⚠️ **CRITICAL SECURITY NOTICE**: Admin API endpoints (blog CRUD, contact/lead magnet listings) are currently exposed without authentication
- User schema exists in database but authentication is not implemented
- Session management dependencies included (connect-pg-simple)
- Public endpoints (blog reading, contact form submission, lead magnet recording) work as intended

**Required Implementation (Before Production)**
1. Implement authentication middleware for admin endpoints
2. Add session-based authentication using express-session
3. Hash passwords using bcrypt or similar
4. Protect the following endpoints with authentication:
   - POST /api/blog-posts
   - PUT /api/blog-posts/:id
   - DELETE /api/blog-posts/:id
   - GET /api/contact-submissions
   - GET /api/lead-magnet-downloads
5. Consider implementing role-based access control (admin vs. public)

### External Dependencies

**Database Services**
- **Neon Serverless PostgreSQL** - Serverless PostgreSQL database (configured via `DATABASE_URL` environment variable)
- Connection pooling handled by Neon driver

**Build and Development Tools**
- **Vite** - Frontend build tool and dev server
- **esbuild** - Backend bundling for production
- **tsx** - TypeScript execution for development
- **Drizzle Kit** - Database schema management and migrations

**Frontend Libraries**
- **React Three Fiber ecosystem** - 3D rendering (@react-three/fiber, @react-three/drei, @react-three/postprocessing)
- **Radix UI** - Headless component primitives (30+ component packages)
- **Framer Motion** - Animation library
- **TanStack Query** - Server state management
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **date-fns** - Date manipulation

**Styling and Design**
- **TailwindCSS** - Utility-first CSS framework
- **PostCSS** with Autoprefixer - CSS processing
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Utility class management

**Form and Validation**
- **Zod** - Schema validation
- **react-hook-form** - Form state management (implied by dependencies)
- **Drizzle-Zod** - Integration between Drizzle schemas and Zod

**Additional UI Libraries**
- **cmdk** - Command palette interface
- **vaul** - Drawer component
- **sonner** - Toast notifications
- **input-otp** - OTP input handling
- **embla-carousel-react** - Carousel functionality
- **react-day-picker** - Date picker
- **recharts** - Chart components

**Development Dependencies**
- **@replit/vite-plugin-runtime-error-modal** - Enhanced error display in Replit
- **nanoid** - Unique ID generation

### Third-Party Integrations

**Google Analytics (GA4)**
- Status: Integrated in HTML but requires configuration
- Implementation: Script added to `client/index.html`
- **Action Required**: Replace `G-XXXXXXXXXX` with actual GA4 measurement ID
- Custom event tracking implemented via `useAnalytics` hook
- Events tracked: page views, service views, contact form submissions, lead magnet downloads, CTA clicks

**Calendly Booking Widget**
- Status: Integrated in HTML but requires configuration
- Implementation: Script and widget added to Contact page
- **Action Required**: Replace `https://calendly.com/your-calendly-link` with actual Calendly scheduling link
- Location: `client/src/pages/ContactPage.tsx` (line ~196)

**Email Notifications**
- Status: Not implemented
- **Action Required**: Implement email notification system for contact form submissions
- Recommended: Use service like SendGrid, AWS SES, or Resend
- Should send notifications to practice owner when contact forms are submitted

### Recent Changes (November 2025)

**Backend Implementation**
- Created PostgreSQL database with Drizzle ORM
- Implemented full database schema for blog, contacts, and lead magnets
- Built RESTful API endpoints for all CRUD operations
- Integrated contact form with backend API
- Added form submission with success/error handling

**Frontend Enhancements**
- Added Google Analytics page tracking and event tracking
- Integrated Calendly widget on Contact page
- Implemented controlled form components with state management
- Added visual feedback for form submissions

**Service Detail Pages**
- Created individual pages for all 6 services:
  - Insurance Verification (`/services/insurance-verification`)
  - AR Support (`/services/ar-support`)
  - Payment Posting (`/services/payment-posting`)
  - Claims Submission (`/services/claims-submission`)
  - Credentialing (`/services/credentialing`)
  - Special Projects (`/services/special-projects`)
- Each page features:
  - Full-screen 3D hero with animated floating icons
  - Benefits/impact sections
  - Process/deliverables breakdown
  - Call-to-action sections
  - Unique color schemes and branding

### Security and Production Readiness

**⚠️ BEFORE DEPLOYING TO PRODUCTION**

1. **Implement Authentication** (CRITICAL)
   - Add authentication middleware to protect admin endpoints
   - Implement login system for blog CMS access
   - Secure contact submissions and lead magnet download listings

2. **Configure Third-Party Services**
   - Add real Google Analytics measurement ID
   - Add real Calendly scheduling link
   - Set up email notification service

3. **Error Handling**
   - Improve API error responses (currently all failures return 400)
   - Add proper logging for database and validation errors
   - Return appropriate HTTP status codes (400 vs 500 vs 404)

4. **Environment Variables**
   - Ensure DATABASE_URL is properly configured
   - Add SENDGRID_API_KEY or similar for email notifications
   - Add GA_MEASUREMENT_ID and CALENDLY_URL for easy configuration

5. **Testing**
   - Test all API endpoints with valid and invalid data
   - Verify form submissions store correctly in database
   - Test error handling and edge cases