import nodemailer from 'nodemailer';
//import { authenticator } from 'otplib';

/*
const twoFaSecret = authenticator.generateSecret();
const a = authenticator.generate(twoFaSecret)
console.log(a,twoFaSecret)
console.log(typeof(a),typeof(twoFaSecret))

const m = authenticator.check(a,twoFaSecret)
console.log(m)
*/

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: '465',
    secure: true,
    auth: {
      user: 'evgenbu2@ac.sce.ac.il',
      pass: 'vvfdgbtrdtoutjdb',
    },
  });


export async function sendMail(mail, token) {
  const mailOptions = {
      from: {
          name: 'Evgeni',
          address: 'evgenbu2@ac.sce.ac.il',
      },  
      to: mail,
      subject: 'Your TOTP Code',
      text: `Your TOTP code is: ${token}`,
  };

  try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
  } catch (error) {
      console.error("Error sending email:", error);
  }
}


