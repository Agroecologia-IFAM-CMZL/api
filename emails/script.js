const mailgun = require("mailgun-js");
const DOMAIN = process.env.DOMAIN_NAME;
const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY, 
    domain: DOMAIN
});

// searching the last email registered -> send automatic email
const Email = require('../models/emailModel');
const queryResult = Email.where({ _id: -1 });
// const result = await query.findById();

const data = {
    from: "Carlos Souza <2021002252@ifam.edu.br>",
    to: queryResult,
    subject: "Hello",
    template: "Boas-Vindas a NewsLetter da Agro do IFAM-CMZL",
    'h:X-Mailgun-Variables': { test: "test" }
};

mg.messages().send(data, function (error, body) {
    console.log(body);
});
