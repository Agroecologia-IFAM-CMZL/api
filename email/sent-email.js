var postmark = require("postmark");

var client = new postmark.ServerClient("2e56d7a7-5f4e-4bd5-af53-a35ef36d81bc");

client.sendEmailWithTemplate({
    "From": "2021002252@ifam.edu.br",
    "To": "2021002252@ifam.edu.br",
    "TemplateAlias": "welcome",
    "TemplateModel": {
        "product_url": "agroecologia-ifam-cmzl.github.io",
        "product_name": "NewsLetter Agro",
        "company_name": "IFAM_CMZL",
        "company_address": "Manaus, AM",
        "name": "Primeiro Email",
        "username": "CarlosViniMSouza",
        "support_email": "agroecologiasuperior.cmzl@ifam.edu.br",
        "sender_name": "Publico NewsLetter",
    }
});