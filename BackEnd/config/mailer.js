import nodemailer from 'nodemailer';
export const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 465,
   secure: true, // true for 465, false for other ports
   auth: {
      user: process.env.USERSENDMAIL, // generated ethereal user
      pass: process.env.PASSSENDMAIL, // generated ethereal password
   },
});

transporter.verify().then(() => {
   console.log('Ready for send emails');
});
//process.env.