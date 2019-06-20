require('dotenv').config()

const _ = require("lodash")
const sendGridMail = require("@sendgrid/mail")
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
const common = require("./src/common");
const { getAutoRespondMessageContent, statusCode, headers} = common;


const sendThankYouEmail = async ({ email, message, name, pot}) => {
  return new Promise((resolve, reject) => {

    const personEmail = `${name} <${email}>`;
    const sgEmail = {
      to: process.env.EMAIL_TO,
      from: "jakub@chodorowicz.pl", 
      replyTo: personEmail,
      subject: "Contact form: walulik.aero",
      text: message,
    }

    const autoRespondEmail = {
      to: personEmail,
      from: "jakub@chodorowicz.pl", 
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
