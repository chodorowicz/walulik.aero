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
    Please be informed that any personal data supplied may be processed according to our privacy policy rules.</a>. 
  </p>
  `
}

const statusCode = 200

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}

module.exports = {
  getAutoRespondMessageContent,
  statusCode,
  headers
}
