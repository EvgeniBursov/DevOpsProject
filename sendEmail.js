import nodemailer from 'nodemailer';


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


/*
const mailOptions = {
    from: {
        name: 'Evgeni',
        address: 'evgenbu2@ac.sce.ac.il',
    },  
    to: 'bursov1995@gmail.com',
    subject: 'Your Studnet account: Request a password recovery',
    text: `Your TOTP code is: ${token}`,
};*/
  

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



/*const sendMail = async (transporter, mailOptions) => {
    try{
        await transporter.sendMail(mailOptions)
        console.log("send")
    }catch (error) {
        console.log(error)
    }


}*/

