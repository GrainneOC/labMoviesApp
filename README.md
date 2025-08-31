# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

---------------------------------
# Fullstack 2 - Assignment ReadMe
---------------------------------
# Movies Fan App - App-Development Branch Changes

## Overview
Enhanced static Movies Fan app with live data, navigation, filtering, and favorites functionality.

## New Features Added

### Navigation
- React Router implementation
- Home page (`/`) - movie browsing
- Movie details page (`/movies/:id`) - individual movie info
- Catch-all route redirects to home

### Live Data Integration
- TMDB API integration for real movie data
- Replaced static sample data with live API calls
- React Query for data fetching and caching

### Movie Filtering
- Title search functionality
- Genre-based filtering
- Custom `useFiltering` hook
- Real-time filter updates

### Favorites System
- Add/remove movies to favorites
- Context API for global state management
- Favorites persist across navigation
- Visual indicators for favorite status

### Enhanced Components
- Updated MovieCard with navigation and favorites
- New PageTemplate for consistent layouts
- MovieFilterUI for search and filtering
- Spinner component for loading states

## Technical Implementation

### Dependencies Added
- `react-router-dom` - routing
- `react-query` - API data management
- Custom hooks for filtering logic

### New Files Created
- `src/contexts/moviesContext.tsx` - favorites state management
- `src/api/tmdb-api.ts` - TMDB API integration
- `src/hooks/useFiltering.ts` - filtering logic
- `src/components/movieFilterUI/` - filter interface
- `src/components/templateMovieListPage/` - page templates

### Modified Components
- `src/index.tsx` - added routing and context providers
- `src/pages/homePage.tsx` - API integration and filtering
- `src/pages/movieDetailsPage.tsx` - dynamic data fetching
- `src/components/movieCard/index.tsx` - navigation and favorites
- `src/components/movieList/index.tsx` - updated props structure

## Architecture Changes
- Single-page app → Multi-page with routing
- Static data → Dynamic API-driven content
- Local component state → Global context state
- Manual updates → Reactive automatic updates

## Result
Transformed from static movie display to interactive movie browsing application with real-time data, search capabilities, and personalized favorites.

# Deployed on Vercel: https://lab-movies-app-git-app-development-grainnes-projects-0a913544.vercel.app/
