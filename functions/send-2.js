require("dotenv").config()

const nodemailer = require("nodemailer")
const _ = require("lodash")

const domain = "https://walulik.aero"

function getAutoRespondMessageContent() {
  return `
  <p>Thank you for taking the time to contact me. Your message has been successfully sent. I will get back to you soon.</p>
  <p>Kind regards,</p>

  <p>
  Jan Walulik<br/>
  Aviation Research & Consulting<br/>
  50/515 Nowogrodzka St.<br/>
  Warsaw, PL00-695<br/>
  Poland<br/>
  jan@walulik.aero<br/>
  <a href="${domain}">walulik.aero</a><br/>
  </p>

  <p>
    Please be informed that supplied personal data might be processed according to our <a href="${domain}/privacy-policy/">privacy policy rules</a>. 
  </p>
  `
}

const sendThankYouEmail = async ({ email, message, name, pot }) => {
  return new Promise((resolve, reject) => {
    const personEmail = `${name} <${email}>`
    const sgEmail = {
      to: process.env.EMAIL_TO,
      from: "chodorowicz@outlook.com",
      replyTo: personEmail,
      subject: "Contact form: walulik.aero",
      text: message,
    }

    const autoRespondEmail = {
      to: personEmail,
      from: "chodorowicz@outlook.com",
      subject: "Contact form: walulik.aero",
      html: getAutoRespondMessageContent(),
    }

    var transporter = nodemailer.createTransport({
      host: "smtp.office365.com", // Office 365 server
      port: 587, // secure SMTP
      auth: {
        user: "",
        pass: "",
      },
      tls: {
        ciphers: "SSLv3",
      },
    })
    console.log(sgEmail, autoRespondEmail);
    transporter.sendEmail(sgEmail, (err) => {
      console.log(err);
    })
    transporter.sendEmail(autoRespondEmail, (err) => {
      console.log(err);
    })
    resolve();
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
      body: "",
    })
    return
  }

  const body = JSON.parse(event.body)
  console.log(body);

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
