import axios from 'axios'

export const sendEmail = (to: string, subject: string, text: string) => {
  return axios.post("/api/emails", {
    to,
    subject,
    text,
  })
}
