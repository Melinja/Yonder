import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body as { name?: string; email?: string; message?: string }

  if (!name || !email || !email.includes('@') || !message) {
    return res.status(400).json({ error: 'Bitte alle Felder ausfüllen.' })
  }

  try {
    await resend.emails.send({
      from: 'YONDER <onboarding@resend.dev>',
      to: 'melina.borgmann@outlook.de',
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: sans-serif; background: #06060A; color: #EDEDF2; padding: 40px; max-width: 560px;">
          <p style="color: #C4FF47; font-size: 11px; letter-spacing: 0.3em; margin-bottom: 24px;">YONDER — NEUE KONTAKTANFRAGE</p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="color: rgba(237,237,242,0.4); font-size: 12px; letter-spacing: 0.1em; padding-bottom: 8px; width: 100px;">NAME</td>
              <td style="color: #EDEDF2; font-size: 15px; font-weight: 600; padding-bottom: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="color: rgba(237,237,242,0.4); font-size: 12px; letter-spacing: 0.1em; padding-bottom: 8px;">E-MAIL</td>
              <td style="color: #C4FF47; font-size: 15px; padding-bottom: 8px;"><a href="mailto:${email}" style="color: #C4FF47;">${email}</a></td>
            </tr>
          </table>
          <div style="background: #0D0D12; border-left: 2px solid #C4FF47; padding: 20px 24px; border-radius: 2px;">
            <p style="color: rgba(237,237,242,0.4); font-size: 11px; letter-spacing: 0.2em; margin-bottom: 12px;">NACHRICHT</p>
            <p style="color: #EDEDF2; font-size: 15px; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Nachricht konnte nicht gesendet werden.' })
  }
}
