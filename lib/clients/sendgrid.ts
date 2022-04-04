import sendgrid from "@sendgrid/mail"

const sendgridAPIKey = process.env.SENDGRID_API_KEY || ""

sendgrid.setApiKey(sendgridAPIKey)

export default sendgrid