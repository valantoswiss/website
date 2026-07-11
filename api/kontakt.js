import nodemailer from 'nodemailer'

// Kontaktformular-Versand als Vercel Function (POST /api/kontakt).
// Versand über den bestehenden Plesk-Mailserver von valanto.ch per SMTP —
// die Zugangsdaten liegen ausschliesslich als Vercel-Env-Vars (SMTP_HOST,
// SMTP_PORT, SMTP_USER, SMTP_PASS), nie im Repo. Solange sie fehlen,
// antwortet die Function mit 503 und das Frontend zeigt den
// E-Mail-Fallback (info@valanto.ch) an.
//
// Empfänger ist info@valanto.ch — die dort eingerichtete Weiterleitung
// verteilt an das Team. Reply-To ist die Absender-Adresse aus dem
// Formular, damit direkt geantwortet werden kann.

const RECIPIENT = 'info@valanto.ch'

// Kein Zeilenumbruch in Header-Feldern (Schutz vor Header-Injection).
const singleLine = (value, max) =>
  String(value ?? '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, max)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' })
    return
  }

  const body = req.body ?? {}

  // Honeypot: das Feld "website" ist für Menschen unsichtbar — ist es
  // gefüllt, war es ein Bot. Wir antworten mit Erfolg, ohne zu senden.
  if (String(body.website ?? '').trim() !== '') {
    res.status(200).json({ ok: true })
    return
  }

  const name = singleLine(body.name, 120)
  const firma = singleLine(body.firma, 160)
  const email = singleLine(body.email, 200)
  const nachricht = String(body.nachricht ?? '').trim().slice(0, 5000)

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)

  if (name === '' || !emailOk || nachricht === '') {
    res.status(422).json({ error: 'validation' })
    return
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    res.status(503).json({ error: 'mail_unconfigured' })
    return
  }

  const port = Number(SMTP_PORT || 465)
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  try {
    await transporter.sendMail({
      from: `"Valanto Website" <${SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `Kontaktanfrage von ${name}${firma ? ` (${firma})` : ''}`,
      text: [
        `Name: ${name}`,
        firma ? `Firma: ${firma}` : null,
        `E-Mail: ${email}`,
        '',
        nachricht,
      ]
        .filter((line) => line !== null)
        .join('\n'),
    })
  } catch {
    res.status(502).json({ error: 'mail_failed' })
    return
  }

  res.status(200).json({ ok: true })
}
