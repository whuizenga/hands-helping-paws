const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAILUSERNAME,
            pass: process.env.EMAILPASSWORD
        }
    });

    var text = `This is an automated message from handshelpingpaws.org. \n
    ${req.body.name} would like to volunteer! \n
    phone: ${req.body.phone} \n
    email: ${req.body.email} \n
    message: ${req.body.message}`;

    var mailOptions = {
        from: "noreply@handshelpingpaws.org",
        to: process.env.EMAILTARGET,
        subject: "HHP Volunteer",
        text: text
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.log(error);
            res.json({
                error: "message failure"
            });
        } else {
            console.log('Message sent'+info.response);
            res.json({
                message: "message sent"
            })
        }
    })
})

module.exports = router;