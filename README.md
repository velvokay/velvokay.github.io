# velvokay.github.io

Static portfolio website for ayakov.com.

## Development

Use Node.js and npm, plus Python 3 for the local server.

```sh
npm ci
npm run build
python3 -m http.server 8000
```

Run `npm run watch` in another terminal to rebuild CSS while editing. Both
`index.html` and `about.html` are scanned for Tailwind classes.

Commit the generated `dist/output.css` with HTML or Tailwind changes: GitHub
Pages serves the checked-in stylesheet. There is no automated test suite.
