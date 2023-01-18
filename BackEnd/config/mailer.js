import nodemailer from 'nodemailer';
export const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 465,
   secure: true, // true for 465, false for other ports
   auth: {
      user: 'navaluisrodolfo@gmail.com', // generated ethereal user
      pass: 'ptpnmsbltrfuhsgk', // generated ethereal password
   },
});

transporter.verify().then(() => {
   console.log('Ready for send emails');
});
