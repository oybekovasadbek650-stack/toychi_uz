export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Faqat POST' })
  }

  const { name, attending, guests } = req.body ?? {}

  if (!name || typeof name !== 'string' || name.length > 100) {
    return res.status(400).json({ error: "Ism noto'g'ri" })
  }

  const text = [
    '💌 Yangi javob!',
    '',
    `👤 Ism: ${name}`,
    attending ? '✅ Kelaman' : '❌ Kela olmayman',
    attending ? `👥 Necha kishi: ${Number(guests) || 1}` : '',
  ].join('\n')

  const tgRes = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text }),
    }
  )

  if (!tgRes.ok) {
    return res.status(502).json({ error: "Telegram'ga yuborilmadi" })
  }

  return res.status(200).json({ ok: true })
}