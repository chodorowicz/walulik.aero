require('dotenv').config()

const _ = require("lodash")
const sendGridMail = require("@sendgrid/mail")
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendThankYouEmail = async ({ email, message, name, pot}) => {
  return new Promise((resolve, reject) => {
    console.log("Sending the email")
    const sgEmail = {
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FORM, 
      replyTo: `${name} <${email}>`,
      subject: "Contact form: walulik.aero",
      text: message,
    }

    console.log(sgEmail, "pot", pot);
    if (!_.isNil(pot) && pot !== "") {
      console.log("bot, cancelling");
      reject()
      return
    }
    sendGridMail.send(sgEmail).then(() => {
      resolve()
    }).catch(error => {
      reject()
    })
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
  sendThankYouEmail(body).then(() =>{
    callback(null, {
      statusCode: 200,
      body: "thank you",
      headers,
    });
  }).catch(error => {
    callback(null, {
      statusCode: 404,
      body: "problem",
      headers,
    });
  })
}
