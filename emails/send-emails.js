// Install with NPM: npm install postmark
import postmark from "postmark";

var postmark = postmark();

var serverToken = "<session-id-server>";
var client = new postmark.ServerClient(serverToken);

client.sendEmail({
    "From": "xxxxxxxxxx@ifam.edu.br",
    "To": "xxxxxxxxxx@ifam.edu.br",
    "Subject": "Test Email Delivery",
    "TextBody": "Hello from Postmark!"
});
