# PR: Routing, Pages & Hero Detail View

## Description

Implemented the full routing system using **React Router DOM**, along with the main pages, the hero detail component, and visual improvements to the hero cards.

---

## Changes

### Routing (`App.jsx`)
- Replaced the default Vite starter content with a layout based on `BrowserRouter` + `Routes`.
- Configured routes:
  - `/` → `Home`
  - `/heroes` → `Heroes`
  - `/heroes/:key` → `HeroDetail`
  - `*` → `NotFound` (catch-all 404 route)

---

### New Components

#### `NavBar`
- Persistent navigation bar with the Overwatch logo and links to **Home** and **Heroes**.
- Uses `useLocation` to detect the current route and apply the `active` class to the matching link.

#### `TabContainer` + `Tab`
- Displays hero abilities as interactive tabs.
- Selecting a tab updates the ability description, preview video (`.webm`), and hitpoints panel.

---

### New Pages

#### `Home`
- Landing page with a title, description, and two actions:
  - **View all heroes** — navigates to `/heroes`.
  - **View a random hero** — picks a random hero from the list and navigates to their detail page.

#### `HeroDetail`
- Reads the `key` URL parameter via `useParams`.
- Fetches individual hero data from the API using the `useHero(key)` hook.
- Renders:
  - Hero name with a dynamic background image.
  - General description.
  - `TabContainer` with the hero's abilities.
  - Hero story summary.
  - Embedded YouTube video (ID extracted from the link via `getYouTubeId`).
- Falls back to `NotFound` if the hero key does not match any hero.

#### `NotFound` (404)
- Overwatch-themed page with a **"MISSION FAILED"** message.
- Includes a button to return to the Home page (`RETURN TO BASE`).

---

### Visual Improvements
- `HeroCard` now displays an accent color based on the hero's **role** (Tank, Damage, Support).
- Added custom font (`big_noodle_titling`).
- Adjusted hero container layout (flex wrap) and general page padding.

---

## Files Modified / Created

| File | Status |
|---|---|
| `src/App.jsx` | Modified |
| `src/components/NavBar.jsx` + `.css` | New |
| `src/components/Tab.jsx` + `.css` | New |
| `src/components/TabContainer.jsx` + `.css` | New |
| `src/pages/Home.jsx` + `.css` | New |
| `src/pages/HeroDetail.jsx` + `.css` | New |
| `src/pages/NotFound.jsx` + `.css` | New |
| `src/hooks/useHeroes.js` | Modified |
| `src/components/HeroCard.jsx` + `.css` | Modified |
| `public/img/OvLogo.png` | New asset |
| `public/fonts/big_noodle_titling.ttf` | New asset |

---

## Testing

- [ ] Navigation between Home and Heroes works correctly.
- [ ] The active link in the NavBar reflects the current route.
- [ ] Hero cards display the correct accent color based on their role.
- [ ] The hero detail page loads correctly when clicking a card.
- [ ] Ability tabs update the content without reloading the page.
- [ ] Navigating to an invalid URL shows the 404 page.
- [ ] The "random hero" button redirects to a different hero each time.
