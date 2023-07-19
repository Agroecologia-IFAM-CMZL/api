const mailgun = require("mailgun-js");
const DOMAIN = "sandboxd93a5bb6d8174322b24d2629d63ea0a4.mailgun.org";
const mg = mailgun({
    apiKey: "750ceba4728dccebddc10a65ac3f8bee-c30053db-d979beed", 
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
