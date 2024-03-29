const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config()

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/hello', (req, res) => {
    res.send({
        express: process.env.USERE,
    });
});
app.post('/sendmail', (req, res) => {
    const body = req.body;
    async function main() {
        let resObj = { sent: false, message: 'Not Send' };

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USERE,
                pass: process.env.PASS
            }
        });
        console.log(body);
        const mailOptions = {
            from: `${body.email}`,
            to: 'ahmad.k.youssef@gmail.com',
            subject: `An mail from my Portfolio by ${body.lastName}`,
            text: `Name : ${body.firstName} ${body.lastName}
                Telephone: ${body.telephone}
                email: ${body.email}
                Message: 
                ${body.message}`,
            html: `<p><b>Full name:</b> ${body.firstName} ${body.lastName}</p>
            <p><b>Telephone number:</b> ${body.telephone}</p>
            <p><b>Email Address:</b> ${body.email}</p>
            <p><b>Message:</b></p> 
            <p>${body.message}</p>`
        }
        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);
        if (info.response) {
            resObj = { sent: true, message: 'Send' };
            return res.send(resObj)
        }
    }
    main().catch(console.error);
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})


app.listen(port, () => console.log(`Listening on port ${port}`));