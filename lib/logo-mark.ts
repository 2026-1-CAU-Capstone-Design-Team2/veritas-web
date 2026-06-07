/**
 * Raw SVG for the VERITAS "V" mark — shared by the generated OG image and
 * the Apple touch icon (both render via Satori, which accepts an SVG data URI
 * in an <img>). The interactive React <Logo> defines its own scoped gradient
 * ids, so it does not consume this string.
 */
export const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="l" x1="7" y1="11" x2="32" y2="58" gradientUnits="userSpaceOnUse"><stop stop-color="#1D3A8F"/><stop offset="1" stop-color="#2563EB"/></linearGradient><linearGradient id="r" x1="57" y1="11" x2="31" y2="46" gradientUnits="userSpaceOnUse"><stop stop-color="#2563EB"/><stop offset="1" stop-color="#38BDF8"/></linearGradient></defs><path d="M7 11 L20 11 L41 49 L32 58 Z" fill="url(#l)"/><path d="M57 11 L45 11 L31 42 L38 46 Z" fill="url(#r)"/></svg>`;

export const MARK_DATA_URI = `data:image/svg+xml,${encodeURIComponent(MARK_SVG)}`;
