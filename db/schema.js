const mongoose = require('mongoose');


const UserSessionSchema = mongoose.Schema({
    authToken: String,
    expiry: Date
})

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    sessions: [ UserSessionSchema ],
});

const EventSchema = mongoose.Schema({
    title: String,
    time: String,
    date: Date,
    description: String,
    eventUrl: String,
});


const UserModel = mongoose.model("User", UserSchema);
const UserSessionModel = mongoose.model("UserSession", UserSessionSchema);
const EventModel = mongoose.model("Event", EventSchema);

module.exports = {
    User: UserModel,
    UserSession: UserSessionModel,
    Events: EventModel,
}