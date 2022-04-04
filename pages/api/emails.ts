import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from "../../lib/clients/sendgrid"

type Data = {
  status?: string,
  message?: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { to, subject, text } = req.body
  
  if (!to) {
    res.status(400).json({ status: "error", message: 'Missing email' })
    return
  }
  
  try {
    await sendgrid.send({
      from: "adam@zette.emails",
      to: to,
      subject: subject || "hi",
      text: text || "Hello World!",
    })

    res.status(200).json({ status: "success" , message: 'Email sent successfully.' })
  } catch (error: any) {
    res.status(500).json({ status: "error", message: error.message })
  }
}
