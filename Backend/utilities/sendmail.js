const nodemailer = require('nodemailer');


const sendEmail=(email,subject,text)=>{
  
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
    port: 587,
  // secure: false,
  auth: {
    user: 'demario71@ethereal.email',
    pass: 'M771Mwn2gSbShhP3xK', // Use an app password if 2FA is enabled
  },
});


const mailOptions = {
  from: 'mafiaarmy68@gmail.com',
  to: email,
  subject: subject,
  text: text,

};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error occurred: ', error);
  }
  console.log('Message sent: %s', info.messageId);
});

}
module.exports=sendEmail;

// // Import the Mailgun SDK
// const formData = require('form-data');
// const Mailgun = require('mailgun.js');

// // Initialize Mailgun
// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({ username: 'api', key: '488c48deb019e3627bc723e30b820470-784975b6-7019ecbb' });

// // Define the email data
// const sendMail = () => {
//   const data = {
//     from: 'shah4041@gmail.com',  // Sender's email address
//     to: 'mafiaarmy68@gmail.com', // Recipient's email address
//     subject: 'Hello from Mailgun', // Subject of the email
//     text: 'This is a test email sent using Mailgun!', // Body of the email
//   };

//   // Send the email using Mailgun
//   mg.messages.create('sandboxc92a5fa9fb6a4aac99bf267dfcf39f1c.mailgun.org', data)
//     .then((body) => {
//       console.log('Email sent successfully:', body);
//     })
//     .catch((error) => {
//       console.log('Error:', error);
//     });
// };

// // Export the sendMail function
// module.exports = sendMail;

