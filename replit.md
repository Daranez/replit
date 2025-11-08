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

**Data Layer**
- Storage interface pattern for database abstraction
- In-memory storage implementation (`MemStorage`) for development
- Prepared for PostgreSQL integration via Drizzle ORM
- User schema defined with Drizzle and Zod validation

### Data Storage Solutions

**ORM and Database**
- **Drizzle ORM** for type-safe database operations
- **Neon Serverless** driver for PostgreSQL connectivity
- Schema definition in TypeScript with automatic type inference
- Migration support via Drizzle Kit

**Schema Design**
- Users table with id, username, password fields
- Zod schemas for runtime validation of insert operations
- Type-safe select/insert operations

**Storage Abstraction**
- `IStorage` interface defines CRUD operations
- `MemStorage` provides in-memory implementation for testing
- Easy swap to database-backed storage without code changes

### Authentication and Authorization

**Current State**
- User schema prepared with username/password fields
- Authentication infrastructure planned but not yet implemented
- Session management dependencies included (connect-pg-simple)

**Planned Approach**
- Password hashing (dependencies suggest bcrypt or similar)
- Session-based authentication
- PostgreSQL session store for production

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