# everythingBITS

A multi-category URL checker and redirector web app built with React and TailwindCSS.  
It verifies the accessibility of curated lists of URLs for categories such as anime, manga, movies, games, and more, on the user’s local network before redirecting or displaying working links.

---

## Features

- Displays category sections on the homepage with clean UI.
- Checks URL accessibility client-side (in user’s browser) to respect local network restrictions.
- Lists only reachable URLs for each category.
- Auto-redirects to the first working URL with visible countdown timer.
- Modular JSON data files for categories (anime.json, manga.json, movies.json, games.json).
- Built with React, React Router, and styled using TailwindCSS.
- Easily extendable with new categories and URLs.

---

## Project Structure
```
/public
/src
/components
Home.jsx
SectionList.jsx
RedirectTimer.jsx
/data
anime.json
manga.json
movies.json
games.json
/utils
checkUrls.js
App.jsx
main.jsx
tailwind.config.js
package.json
README.md
```
---

## Setup

1. Clone the repository:
```
git clone https://github.com/Foolish-Genius/everythingBITS.git

cd everythingBITS
```

2. Install dependencies:
```
npm install
```


3. Run the development server:
```
npm run dev
```

4. Open `http://localhost:5173` in your browser.

---

## Data

- Add or update URLs in JSON files under `/src/data`.
- Format: Array of strings, each string a full URL including protocol (e.g., `"https://example.com"`).

---

## URL Checking Logic

- URLs are checked client-side using fetch to test availability.
- Unreachable URLs are filtered out and not displayed.
- The first accessible URL triggers a redirect after a 10-second countdown.

---

## Deployment

- Suitable for deployment on platforms like Vercel.
- Client-side URL checks ensure results reflect the end user’s network accessibility.

---

## Future Improvements

- Add backend crawler to update JSON files automatically.
- Add authentication or user preferences.
- Support pagination or search within categories.
- Improve UI responsiveness and accessibility.

---

## License

MIT License.

---

## Author

Foolish-Genius
