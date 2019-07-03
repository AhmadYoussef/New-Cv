const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const app = express();
// const nodemailer = require('nodemailer');

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/sendmail', (req, res) => {
    const body = req.body.obj;
    console.log(body);
    return res.send({ sent: true, message: 'Send' });
});

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'adiga1990@gmail.com',
//         pass: 'Mr.ADIGA90'
//     }
// })
// const mailOptions = {
//     from: `${body.email}`,
//     to: 'ahmad.k.youssef@gmail.com',
//     subject: `${body.name}`,
//     text: `${body.firstName} ${body.lastName}
//         Telephone Number: ${body.telephone},
//         Email Address: ${body.email},
//         Message :
//         ${body.message}`
// }
// transporter.sendMail(mailOptions, function (err, res) {
//     if (err) {
//         console.log('here is the res: ', err);
//         return res.send({ sent: false, message: 'Not Send' });
//     } else {
//         console.log('here is the res: ', res);
//         return res.send({ sent: true, message: 'Send' });
//     }
// })


// // Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, 'client/build')))
// // Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'))
// })


app.listen(port, () => console.log(`Listening on port ${port}`));