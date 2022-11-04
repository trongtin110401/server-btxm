const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const db = require('./api/controllers/db');
const route = require('./api/controllers/routes');
const { request, response } = require('express');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')('ACc14f16981323c79771f9bb1bac7509d9', '2d842c54c91d47cf5528fa87344508a8');
const app = express();
 
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
 
app.use("/api", route)

app.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API'}
    );
    
});
app.get('/otp',(request,response) => {
    var otp = sendTextMessage();
    response.send({
        message: otp}
    );
})
function sendTextMessage(){
    var random1 =  Math.floor(Math.random() * (10000 - 1000) + 1000);
    client.messages
      .create({
         body: 'Hello ban tui la tin dep trai ' + random1,
         from: '+16294654581',
         to: '+84942349504'
       })
      .then(message => console.log(message.sid));
      return random1;
}
 
// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    db.connect(function(err) {
        if (err) throw err;
        console.log("Connected!!!")
      });
    console.log(`Server listening on port ${server.address().port}`);
});




