# Copilot Instructions for tabby.io

## Project Overview
- **tabby.io** is a React + Vite app for composing, viewing, and interacting with ABC music notation and tabs.
- Uses [@tanstack/react-router] for routing and [abcjs] for music parsing and rendering.
- Main entry: `src/main.jsx` sets up the router and root React component.

## Architecture & Data Flow
- **Songs and Arrangements**: ABC files in `public/tunes/` are processed by `scripts/build-tunes.js` into `src/arrangements/abc-songs.json`.
- **Compositions**: `src/arrangements/index.js` exports `COMPOSITIONS` and `ABC_SONGS` for use in UI components.
- **UI Components**: Key components in `src/components/` (e.g., `Compositions.jsx`, `ABC_Tabsheet.jsx`, `TabSheet.jsx`) display and interact with music data.
- **Hooks & Contexts**: Custom hooks (`src/hooks/useAbc.js`) and context providers (`src/providers/InstrumentContext.jsx`, `CompositonContext.jsx`) manage state and instrument selection.
- **Routing**: Route definitions are generated in `src/routeTree.gen.ts` and used in `src/main.jsx`.

## Developer Workflows
- **Build Songs JSON**: Run `npm run build:songs` to process ABC files into JSON for the app./abc-songs.json
- **App Build**: `npm run build` runs the song build and Vite build.
- **Development Server**: `npm run dev` starts Vite with HMR.
- **Linting**: `npm run lint` uses ESLint (see `eslint.config.js`).
- **Testing**: `npm run test` runs Vitest tests (see `tab-parsers.test.js`).
- **Deploy**: `npm run deploy` publishes the app using `gh-pages`.

## Conventions & Patterns
- **Song Data**: Always add new ABC files to `public/tunes/` and rebuild with `npm run build:songs`.
- **Component Structure**: Prefer functional React components and hooks. State is managed via React context and hooks.
- **Styling**: CSS files are colocated (e.g., `App.css`, `fingering-chart.css`).
- **Routing**: Use route files in `src/routes/` and update route tree as needed.
- **Music Logic**: Parsing and rendering logic is in `src/tab-parsers.js`, `src/hooks/useAbc.js`, and related files.

## Integration Points
- **External Libraries**: abcjs, tonal, @tanstack/react-router, @tonaljs/abc-notation.
- **Build Script**: `scripts/build-tunes.js` is critical for song ingestion.
- **Deploy**: Uses `gh-pages` for static deployment.

## Key Files & Directories
- `src/components/` — UI components
- `src/arrangements/` — Song data and arrangements
- `public/tunes/` — Source ABC files
- `scripts/build-tunes.js` — Song build script
- `src/hooks/`, `src/providers/` — State management
- `src/routes/` — Routing

---
For questions about unclear patterns or missing documentation, ask for clarification or examples from maintainers.