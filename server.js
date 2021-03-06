require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const AdoptionsController = require('./controllers/adoptionsController');
const MailController = require('./controllers/mailController');

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist/'));
app.use('/api/adoptions', AdoptionsController);
app.use('/api/mail', MailController);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is up on port: " + PORT);
});