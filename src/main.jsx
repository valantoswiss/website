import { ViteReactSSG } from 'vite-react-ssg/single-page'
// Self-hosted fonts (no external Google Fonts requests — privacy / DSGVO)
import '@fontsource/archivo/400.css'
import '@fontsource/archivo/500.css'
import '@fontsource/archivo/600.css'
import '@fontsource/archivo/700.css'
import '@fontsource/archivo/800.css'
import '@fontsource/source-serif-4/400.css'
import '@fontsource/source-serif-4/600.css'
import '@fontsource/source-serif-4/700.css'
import './i18n'
import './index.css'
import App from './App.jsx'

// Static Site Generation: the page is pre-rendered to real HTML at build time
// (content in the source, good for SEO / crawlers) and hydrated on the client.
export const createRoot = ViteReactSSG(<App />)
