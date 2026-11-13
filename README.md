# POPCORN — React movie browser

[![CI](https://github.com/pierreAngeloAA/react-db-movie/actions/workflows/ci.yml/badge.svg?branch=staging)](https://github.com/pierreAngeloAA/react-db-movie/actions/workflows/ci.yml)

Browse popular and top-rated movies from [TMDB](https://www.themoviedb.org/), search by title and keep a list of favorites saved in `localStorage`.

## Stack

React 19 · Vite · Bootstrap 5 · Context API for favorites · Vitest + jsdom

## Getting started

```bash
npm ci
cp .env.example .env    # then set VITE_TMDB_API_KEY
npm run dev             # http://localhost:5173
```

Get a free API key at <https://www.themoviedb.org/settings/api>. Without it the page shows a warning instead of the lists.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm test` | Unit tests (API client and favorites storage) |
| `npm run lint` | ESLint |
| `npm run build` | Production build in `dist/` |

## Structure

```
src/
  services/apiMovies.js     TMDB client: URL building, error handling, mapping
  services/storage.js       localStorage wrapper for favorites
  hooks/useMovies.js        loads a list (popular, top rated or search)
  context/                  favorites context, provider and hook
  components/               Navbar, MovieComponent, MovieCard, ButtonFavorite…
```

A first version in plain JavaScript lives in [dbMovie](https://github.com/pierreAngeloAA/dbMovie).
