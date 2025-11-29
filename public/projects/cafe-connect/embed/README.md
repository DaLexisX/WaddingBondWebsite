# 3D Device Showcase - Embed Build

This folder contains the packaged 3D Device Showcase, optimized for embedding in other projects via `<iframe>`.

## ⚠️ Important: Usage Requirement

**This build must be served via a Web Server (HTTP/HTTPS).**

It **will not work** if you simply double-click `index.html` or open it via the `file://` protocol.
Browsers block modern JavaScript modules (ESM) and asset loading (CORS) when running directly from the file system.

### How to Test Locally

To verify the build works, run a local server in this directory.
If you have Node.js/NPM installed:

```bash
# From the project root
npx vite preview --outDir embed
```

Or using Python:
```bash
cd embed
python -m http.server
# Open http://localhost:8000
```

### How to Embed

In your separate project (which should be running on a server), place this `embed` folder in your public/static assets directory.

Then reference it in an iframe:

```html
<iframe
  src="/path/to/embed/index.html"
  style="width: 100%; height: 500px; border: 0;"
  title="3D Device Showcase"
></iframe>
```

### Configuration via URL

You can configure the initial state using URL parameters:

- **Initial Screen**: `?model.initialScreen=1` (0=Black, 1=Home Screen, 2=Video, etc.)
- **Animation**: `?controls.animationStyle=look-around` (or `none`)
- **Theme**: `?environment.initialEnvironment=studio`

Example:
`src="/embed/index.html?controls.animationStyle=none&model.initialScreen=2"`

