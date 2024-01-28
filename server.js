
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
// import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5173;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cors({
//   origin: 'http://localhost:5173'
// }));

const transporter = nodemailer.createTransport({
  service: 'Outlook',
  auth: {
    user: 'wmwassmann@hotmail.com', 
    pass: 'Bizzywisket108_' 
  }
});

app.post('/master/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient_email@example.com', 
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('SERVER Error sending email:', error);
      res.status(500).send('SERVER Failed to send email');
      
    } else {
      console.log('SERVER Email sent:', info.response);
      res.status(200).send('SERVER Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});