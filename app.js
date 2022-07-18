const express = require("express");
const { json } = require("express");
require("dotenv").config();
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT;
app.use(json());

// Create transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

// Created mail option object
let mailOptions = {
  from: "vwegbakofi@gmail.com",
  to: "vwegbakofi@gmail.com, molunoesther@gmail.com, elohokofi@gmail.com, tenumahofeoritse070@gmail.com,",
  subject: "Nodemailer Project",
  text: "Hi from your nodemailer project",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
