
var sid ="AC720d31702c66cf01c3e096025e0c935b";
var auth_token ="d852d67f5a153fe14e0aac6aa9167c2f";
var twilio = require( 'twilio')(sid, auth_token);

function send_sms(){

    alert("function is called")
    twilio.messages.create({
    from: "+15012322749",
    to: "+919874338777",
    body: "Hello Soham you have a new Internship",
    })

    .then ((res) => console.log ("message has sent!"))
    .catch( (err) => {
    console.log(err);
    });
}