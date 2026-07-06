import { ViteReactSSG } from 'vite-react-ssg/single-page'
import './i18n'
import './index.css'
import App from './App.jsx'

// Static Site Generation: the page is pre-rendered to real HTML at build time
// (content in the source, good for SEO / crawlers) and hydrated on the client.
export const createRoot = ViteReactSSG(<App />)
