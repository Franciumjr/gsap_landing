# AI Coding Guidelines for Vintage Inn Landing Page

## Architecture Overview
This is a React-based landing page for "Vintage Inn" built with Vite, featuring three main sections: navigation, hero banner, and drinks menu. The app uses GSAP for advanced animations and TailwindCSS for styling with a dark theme (black background, white text).

## Key Technologies & Patterns
- **React 19** with functional components and hooks
- **GSAP** for animations: Always register plugins in `App.jsx` (e.g., `ScrollTrigger`, `SplitText`)
- **TailwindCSS 4** with custom theme variables and utilities (see `src/index.css`)
- **Responsive design** using `react-responsive` hooks (e.g., `useMediaQuery({maxWidth: 767})`)

## Component Structure
- Components in `src/components/` import data from `src/constants/index.js`
- Use `useGSAP` hook for component-specific animations (example in `Navbar.jsx`)
- Data-driven rendering: Map over arrays like `cocktailLists` for dynamic content

## Animation Patterns
- **Text animations**: Use `SplitText` for character/line-based reveals (see `Hero.jsx`)
- **Scroll triggers**: Attach to elements with `scrollTrigger` config (e.g., navbar background change)
- **Timelines**: Chain animations with `gsap.timeline()` for complex sequences

## Styling Conventions
- Custom utilities: `@utility text-gradient`, `@utility flex-center` (defined in `src/index.css`)
- Theme colors: `--color-yellow`, `--color-white-100`
- Fonts: "Modern Negra" for headings, "Mona Sans" for body, "DM Serif Text" for serif
- Background: Black with radial gradients for depth

## Development Workflow
- **Start dev server**: `npm run dev` (Vite with HMR)
- **Build**: `npm run build` (outputs to `dist/`)
- **Lint**: `npm run lint` (ESLint with React rules)
- **Preview**: `npm run preview` (serve built files)

## File Organization
- `src/constants/index.js`: Centralized data (nav links, drink lists)
- `public/images/`: Static assets referenced with absolute paths (e.g., `/images/logo.png`)
- Avoid unused vars starting with uppercase (ESLint rule)

## Common Patterns
- Import GSAP plugins at app level, use in components
- Responsive breakpoints: Mobile-first with `md:` prefixes
- Animation easing: Prefer `"expo.out"` or `"power2.out"` for smooth reveals</content>
<parameter name="filePath">c:\FrontEnd Projects\landingpage\.github\copilot-instructions.md