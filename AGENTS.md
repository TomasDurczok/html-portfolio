# html-portfolio

A static, multi-page HTML portfolio site. Entry point is `index.html`, with content pages in `public/` and images in `assets/images/`. `solution.html` is an alternate version of the homepage.

## Cursor Cloud specific instructions

- This is a pure static site: no package manager, no dependencies, no build/lint/test tooling. There is nothing to install.
- Serve it with any static file server from the repo root, e.g. `python3 -m http.server 8000`, then open `http://localhost:8000/index.html`.
- `solution.html` references `./assets/images/movie-ranking.png`, but the repo only ships `assets/images/movie-ranking (2).png`; that one image will 404 on `solution.html`. `index.html` uses the correct filename and renders fully.
