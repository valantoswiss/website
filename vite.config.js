import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Die Seiten werden mit `--dirStyle nested` vorgerendert: /kontakt liegt als
// dist/kontakt/index.html. Nginx auf Ploi (Staging und Live) leitet /kontakt
// per 301 auf /kontakt/ um und liefert dann genau diese Datei. `vite preview`
// kennt diese Regel nicht und fällt bei /kontakt auf das Home-HTML zurück –
// React hydriert dann die Kontaktseite gegen fremdes Markup (Fehler #418/#423
// in der Konsole). Dieses Plugin bildet die Nginx-Umleitung in der lokalen
// Vorschau nach, damit sie sich wie die produktive Auslieferung verhält.
function previewNestedRoutes() {
  return {
    name: 'valanto:preview-nested-routes',
    configurePreviewServer(server) {
      const outDir = resolve(server.config.root, server.config.build.outDir)
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url, 'http://localhost')
        const { pathname } = url
        const hasExtension = /\.[a-z0-9]+$/i.test(pathname)
        if (pathname.endsWith('/') || hasExtension) return next()
        if (!existsSync(resolve(outDir, `.${pathname}`, 'index.html'))) return next()
        res.statusCode = 301
        res.setHeader('Location', `${pathname}/${url.search}`)
        res.end()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), previewNestedRoutes()],
})
