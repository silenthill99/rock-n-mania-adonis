# Repository Guidelines

## Project Structure & Module Organization

This is an AdonisJS 7 application with an Inertia/React frontend. Server code lives in `app/`: controllers handle requests, models represent Lucid entities, validators define input rules, and transformers shape API data. Routes, middleware registration, and application bootstrapping are under `start/`; framework configuration is in `config/`. Database migrations and schema helpers belong in `database/`.

Frontend pages, layouts, components, and CSS live in `inertia/`. Edge templates are in `resources/views/`, while static files belong in `public/`. Tests are organized below `tests/unit/`, `tests/functional/`, and `tests/browser/`; shared setup is in `tests/bootstrap.ts`.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies (Node.js 24 or newer).
- `npm run dev` starts the AdonisJS development server with HMR.
- `npm run build` produces the production build.
- `npm start` runs the compiled server from `bin/server.js`.
- `npm test` runs all configured Japa test suites.
- `npm run lint` checks the repository with ESLint.
- `npm run format` formats files with the AdonisJS Prettier configuration.
- `npm run typecheck` checks both server and Inertia TypeScript projects.
- `npm run migrate` applies Lucid migrations; `npm run rollback` reverts the latest batch.

## Coding Style & Naming Conventions

Use TypeScript and two-space indentation, LF line endings, and a final newline as defined by `.editorconfig`. Let Prettier and ESLint settle formatting. Follow existing snake_case filenames (`albums_controller.ts`, `user_transformer.ts`) and PascalCase React component exports. Use aliases such as `#models/*` and `#validators/*` instead of deep relative imports.

## Testing Guidelines

Japa discovers `*.spec.ts` files in the three suite directories. Keep fast isolated behavior in `unit`, HTTP/database flows in `functional`, and end-to-end UI behavior in `browser`. Add regression coverage with each bug fix. No coverage threshold is currently configured; prioritize meaningful assertions and reliable cleanup. Run `npm test`, `npm run typecheck`, and `npm run lint` before opening a pull request.

## Commit & Pull Request Guidelines

History currently contains only `Initial commit`, so no mature convention exists. Use short, imperative subjects such as `Add clip validation` and keep each commit focused. Pull requests should explain the change and verification performed, link relevant issues, call out migrations or environment changes, and include screenshots for visible UI updates.

## Security & Configuration

Copy `.env.example` for local configuration and never commit `.env` files, credentials, or a real `APP_KEY`. Document any new required variable in `.env.example` using a safe placeholder.
