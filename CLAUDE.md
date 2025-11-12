# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI logo generator application built with React 19, TypeScript, Vite, and Tailwind CSS v4. The project uses the React Compiler for automatic optimization and Biome for code formatting.

## Development Commands

```bash
# Start development server with HMR
pnpm dev

# Build for production (TypeScript check + Vite build)
pnpm build

# Preview production build locally
pnpm preview

# Run ESLint
pnpm lint
```

Note: This project uses **pnpm** as the package manager, not npm or yarn.

## Tech Stack & Configuration

### Build Tool
- **Vite 7.2** - Fast build tool with HMR
- Entry point: `index.html` (references `/src/main.tsx`)
- Config: `vite.config.ts`

### React Setup
- **React 19.2** with React Compiler enabled via `babel-plugin-react-compiler`
- The React Compiler automatically optimizes components (impacts dev/build performance)
- Main entry: `src/main.tsx` → renders `src/App.tsx` in StrictMode
- Root element: `#root` in `index.html`

### Styling
- **Tailwind CSS v4** integrated via `@tailwindcss/vite` plugin
- Global styles: `src/index.css`
- Uses the new Tailwind v4 Vite plugin (not PostCSS)

### TypeScript
- Strict TypeScript configuration with project references
- `tsconfig.json` - Root config with references
- `tsconfig.app.json` - Application code config
- `tsconfig.node.json` - Vite config files
- Build process includes `tsc -b` for type checking

### Code Quality
- **ESLint** - React Hooks + React Refresh rules configured for Vite
- **Biome** - Primary formatter and linter
  - Indent style: tabs
  - Quote style: double quotes
  - Auto-organize imports enabled
  - VCS integration with git

## Architecture Notes

### Favicon Configuration
The project is configured to use `/favicon.ico` instead of the default Vite SVG. Make sure `favicon.ico` exists in the `public/` directory.

### Module System
- Project uses ES modules (`"type": "module"` in package.json)
- All imports should use `.tsx` or `.ts` extensions explicitly where needed

### Development Philosophy
This is a minimal React + Vite template enhanced with:
- React Compiler for automatic performance optimization
- Tailwind CSS v4 for modern styling
- Biome for fast, consistent code formatting
