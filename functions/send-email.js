require('dotenv').config()

const _ = require("lodash")
const sendGridMail = require("@sendgrid/mail")
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

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
  walulik.aero<br/>
  </p>
  `
}


const sendThankYouEmail = async ({ email, message, name, pot}) => {
  return new Promise((resolve, reject) => {

    const personEmail = `${name} <${email}>`;
    const sgEmail = {
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM, 
      replyTo: personEmail,
      subject: "Contact form: walulik.aero",
      text: message,
    }

    const autoRespondEmail = {
      to: personEmail,
      from: process.env.EMAIL_FROM, 
      subject: "Contact form: walulik.aero",
      html: getAutoRespondMessageContent(),
    }


    console.log("Sending the email")
    console.log(sgEmail, "pot", pot);
    console.log(autoRespondEmail, "pot", pot);
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

    sendGridMail.send(autoRespondEmail);
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
    return;
  }
  
  const body = JSON.parse(event.body)

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
