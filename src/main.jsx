import { ViteReactSSG } from 'vite-react-ssg'
// Self-hosted fonts (no external Google Fonts requests – privacy / DSGVO).
// Redesign v2: EINE Schrift – Archivo (Display 800 bis Body 400), keine Serife mehr.
import '@fontsource/archivo/400.css'
import '@fontsource/archivo/500.css'
import '@fontsource/archivo/600.css'
import '@fontsource/archivo/700.css'
import '@fontsource/archivo/800.css'
import './i18n'
import './index.css'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Impressum from './pages/Impressum.jsx'
import Datenschutz from './pages/Datenschutz.jsx'
import Kontakt from './pages/Kontakt.jsx'

// Static Site Generation: each route below is pre-rendered to real HTML at
// build time (good for SEO / crawlers / no-JS reload of /impressum etc.) and
// hydrated on the client. Build with `--dirStyle nested` (see package.json)
// so "/impressum" becomes "impressum/index.html", not "impressum.html".
export const createRoot = ViteReactSSG({
  routes: [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'impressum', element: <Impressum /> },
        { path: 'datenschutz', element: <Datenschutz /> },
        { path: 'kontakt', element: <Kontakt /> },
      ],
    },
  ],
})
