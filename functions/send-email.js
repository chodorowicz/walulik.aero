const sendGridMail = require("@sendgrid/mail")
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendThankYouEmail = async ({ email, message, name}) => {
  return new Promise((resolve, reject) => {
    console.log("Sending the email")
    const sgEmail = {
      to: "jakub@chodorowicz.com",
      from: `${name} <${email}>`,
      subject: "Contact form: walulik.aero",
      text: message,
    }
    sendGridMail.send(sgEmail);
    resolve()
  })
}

const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}

exports.handler = function sendEmail(event, _context, callback) {
  if (event.httpMethod !== "POST") {
    callback(null, {
      statusCode,
      headers,
      body: "This was not a POST request!",
    })
    return;
  }
  
  const body = JSON.parse(event.body)
  const { email, message, name } = body
  sendThankYouEmail({ email, message, name})
  callback(null, {
    statusCode: 200,
    body: "thank you",
    headers,
  })
}
