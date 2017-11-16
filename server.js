require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const UserController = require('./controllers/userController');
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

app.use(express.static(__dirname + '/client/src/'));
app.use('/api/users', UserController);
app.use('/api/adoptions', AdoptionsController);
app.use('/api/mail', MailController);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/src/index.html');
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is up on port: " + PORT);
});