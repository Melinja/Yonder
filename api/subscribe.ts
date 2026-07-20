import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body as { email?: string }

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Ungültige E-Mail-Adresse' })
  }

  try {
    await resend.emails.send({
      from: 'YONDER <onboarding@resend.dev>',
      to: 'melina.borgmann@outlook.de',
      subject: `Neue Anmeldung: ${email}`,
      html: `
        <div style="font-family: sans-serif; background: #06060A; color: #EDEDF2; padding: 40px; max-width: 500px;">
          <p style="color: #C4FF47; font-size: 11px; letter-spacing: 0.3em; margin-bottom: 24px;">YONDER — NEUE ANMELDUNG</p>
          <p style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">📬 ${email}</p>
          <p style="color: rgba(237,237,242,0.5); font-size: 14px;">hat sich auf yonder.cc eingetragen.</p>
        </div>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'E-Mail konnte nicht gesendet werden' })
  }
}
