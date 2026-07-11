/* Shared brand/icon primitives used across the header, footer and pages. */

export const SwissCross = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true" style={{ flex: 'none' }}>
    <rect width="14" height="14" fill="#23808F" />
    <rect x="5.9" y="2.8" width="2.2" height="8.4" fill="#fff" />
    <rect x="2.8" y="5.9" width="8.4" height="2.2" fill="#fff" />
  </svg>
)

/* Wortmarke "valanto" mit Petrol-Giebeldach überm "v" (brand/logo-valanto-*.svg,
   inline damit sie die Textfarbe/Grösse per CSS erbt; Archivo ist via
   @fontsource geladen). variant="light" für dunkle Flächen (Footer). */
export function Brand({ className, variant = 'dark' }) {
  const ink = variant === 'light' ? '#FAF7F2' : '#23262D'
  const roof = variant === 'light' ? '#3FB0C0' : '#23808F'
  return (
    <div className={`brand ${className || ''}`}>
      <svg
        viewBox="0 0 250 96"
        role="img"
        aria-label="valanto"
        className="brand__logo"
      >
        <text
          x="0"
          y="78"
          fontFamily="Archivo, system-ui, sans-serif"
          fontSize="72"
          fontWeight="700"
          fill={ink}
          letterSpacing="-2"
        >
          valanto
        </text>
        <path
          d="M1 33 L19 18 L37 33"
          fill="none"
          stroke={roof}
          strokeWidth="8"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        />
      </svg>
    </div>
  )
}
