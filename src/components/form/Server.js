const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'info@nexteraconnect.co.in', // Your email
        pass: 'your-email-password', // Your email password or app password
    },
});

app.post('/send', (req, res) => {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'info@nexteraconnect.co.in', // Your email
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message sent successfully!');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
