# Expert Windows System

A full-stack TypeScript monorepo for managing windows and doors installation jobs.

## Tech Stack

- **Monorepo**: PNPM Workspaces
- **Frontend**: React 18 + Vite + SWC + Tailwind CSS v4
- **Backend**: Express + Prisma + PostgreSQL
- **Language**: TypeScript (strict mode)
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## Getting Started

### Prerequisites

- Node.js 22+ (use `.nvmrc` or `.node-version` for version management)
- PNPM (`npm install -g pnpm`)
- PostgreSQL database

### Installation

```bash
pnpm install
```

### Development

```bash
# Start both frontend and backend
pnpm dev

# Start individually
pnpm --filter web dev    # Frontend on http://localhost:5173
pnpm --filter api dev    # Backend on http://localhost:3000
```

### Building

```bash
# Build all packages
pnpm build

# Build individually
pnpm --filter web build
pnpm --filter api build
```

### Quality Checks

```bash
pnpm lint          # Lint all packages
pnpm typecheck     # Type check all packages
pnpm format        # Format all files
pnpm format:check  # Check formatting
```

## Project Structure

```
expert-windows/
├── apps/
│   ├── web/          # React frontend (Vite)
│   └── api/          # Express backend
├── packages/
│   └── config/       # Shared configs (ESLint, Prettier, Tailwind, TypeScript)
└── prisma/           # Database schema (if needed at root)
```

## Brand Colors

- **Primary**: `#00606B`
- **Secondary**: `#243E4D`
- **Accent**: `#0170b9`

## Git Hooks

Pre-commit hooks automatically:
- Run ESLint with auto-fix
- Format code with Prettier

## Next Steps

Ready for Prompt #2: Web App Scaffold with Auth UI and Routing.
