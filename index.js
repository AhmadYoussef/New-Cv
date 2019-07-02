const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

const api_key = 'b911e64d04b90f010db4bfdc1f87ff03-2b0eef4c-443f1981';
const domain = 'http://sandbox6ff5e1c2399b46d5a9857a74cc1329f4.mailgun.org';
const mailGun = require('mailgun-js')({ apiKey: api_key, domain: domain });


const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/sendMail', (req, res) => {
    console.log(req.body);
    const body = req.body.obj;
    const data = {
        from: body.email,
        to: 'Ahmad.k.youssef@gmail.com',
        subject: 'Email From My Protfolio',
        text: `
        ${body.firstName} ${body.lastName}
        Telephone Number: ${body.telephone},
        Email Address: ${body.email},
        Message :
        ${body.message}`
    };
    mailGun.messages().send(data, function (error, body) {
        console.log(error, body);

        if (error) {
            return res.send({ sent: false, message: 'Not Send' });
        };
        return res.send({ sent: true, message: 'Send' });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));