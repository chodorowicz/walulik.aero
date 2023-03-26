const email = require("./email.json")
const commonmark = require("commonmark")
const Mailgun = require("mailgun.js")
const formData = require("form-data")
const _ = require("lodash")

const reader = new commonmark.Parser()
const writer = new commonmark.HtmlRenderer()
const parsed = reader.parse(email.body)
const result = writer.render(parsed)

const mailgun = new Mailgun(formData)

const mgInstance = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API,
  url: "https://api.eu.mailgun.net",
})

const common = require("./src/common")
const { statusCode, headers } = common

const from = process.env.EMAIL_FROM

const sendThankYouEmail = async ({ email, message, name, pot }) => {
  return new Promise(async (resolve, reject) => {
    const personEmail = `${name} <${email}>`
    const sgEmail = {
      to: process.env.EMAIL_TO,
      from,
      "h:Reply-To": personEmail,
      subject: "Contact form: walulik.aero",
      html: `from: ${name}, ${email}<br /><br />${message}`,
    }

    const autoRespondEmail = {
      to: personEmail,
      from,
      subject: "Contact form: walulik.aero",
      html: result,
    }

    console.log("Sending the email")
    console.log(sgEmail, "pot", pot)
    console.log(autoRespondEmail, "pot", pot)
    if (!_.isNil(pot) && pot !== "") {
      console.log("bot, cancelling")
      reject()
      return
    }

    try {
      await mgInstance.messages
        .create(process.env.MAILGUN_DOMAIN, sgEmail)
        .then(response => console.log(response))

      await mgInstance.messages
        .create(process.env.MAILGUN_DOMAIN, autoRespondEmail)
        .then(response => console.log(response))

      resolve()
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}

exports.handler = function sendEmail(event, _context, callback) {
  if (event.httpMethod !== "POST") {
    callback(null, {
      statusCode,
      headers,
      body: "",
    })
    return
  }

  const body = JSON.parse(event.body)
  console.log("sending")
  console.log({ body })

  sendThankYouEmail(body)
    .then(() => {
      callback(null, {
        statusCode: 200,
        body: "thank you",
        headers,
      })
    })
    .catch(error => {
      callback(null, {
        statusCode: 404,
        body: "problem",
        headers,
      })
    })
}
