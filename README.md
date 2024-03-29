version 
```json
{
  "name": "-TODO-",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "rakkas",
    "build": "rakkas build",
    "start": "node dist/server",
    "format": "prettier --write --ignore-unknown src",
    "test": "pnpm test:typecheck && pnpm test:format && pnpm test:lint && pnpm test:unit",
    "test:typecheck": "tsc -p tsconfig.json --noEmit",
    "test:format": "prettier --check --ignore-unknown src",
    "test:lint": "eslint . --ignore-pattern dist",
    "test:unit": "vitest run"
  },
  "devDependencies": {
    "@rakkasjs/eslint-config": "0.7.0-next.44",
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "prettier": "^3.2.5",
    "rakkasjs": "0.7.0-next.44",
    "typescript": "^5.4.2",
    "vite": "^5.1.6",
    "vite-tsconfig-paths": "^4.3.2",
    "vitest": "^1.3.1"
  },
  "dependencies": {
    "@hattip/cookie": "^0.0.44",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}

```
- issue 1:

using `useLocation` from `rakkasjs` causes an error during `hmr`

![`URl` missing error](public/Screenshot%202024-03-15%20062202.jpg)
to recreate just change anything in the project and it will crash when trying to update


- issue 2

`<Head/>` is removing my data-theme attribute from the html
 I set this server-side for theme management based on cookie values
 
 ```js
       emitToDocumentHead() {
        const cookie_theme = "light";
        return `
    <link rel="icon" type="image/svg+xml" href="/site.svg" />
    <script>
      (function() {
        document.documentElement.setAttribute("data-theme","${cookie_theme}");
      })();
     </script>
   
  `;
      },
 ```


<video controls src="public/head_issues.mp4" title="Title"></video>


