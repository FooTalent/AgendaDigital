import { transporter } from '../config/mailer.js';
export const emailConfirm = async (name, email, token, subject, text) => {
   try {
      await transporter.sendMail({
         from: '"Aula Equis" <<aulaequis@example.com>',
         to: email,
         subject: subject,
         text: text,
         html: `<p>Hola: ${name} Comprueba tu cuenta en Aula Equis</p>
            <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:

            <a href="http://localhost:3000/api/admin/confirmar/${token}">Comprobar Cuenta</a>

            <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>`,
      });
      console.log('enviado');
   } catch (error) {
      console.log(error);
   }
};
export const emailResetPassword = async (name, email, token, subject, text) => {
   try {
      await transporter.sendMail({
         from: '"Aula Equis" <<aulaequis@example.com>',
         to: email,
         subject: subject,
         text: text,
         html: `<p>Hola: ${name} has solicitado reestablecer tu password</p>
           <p>Sigue el siguiente enlace para generar un nuevo password:
            <a href="https://aulax.vercel.app/login/resetpassword/${token}">Reestablecer Password</a>
            <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>`,
      });
      console.log('enviado');
   } catch (error) {
      console.log(error);
   }
};
export const emailModificacion = async (name, email, subject, text) => {
   try {
      // await transporter.sendMail({
      //    from: '"Aula Equis" <<aulaequis@example.com>',
      //    to: email,
      //    subject: subject,
      //    text: text,
      //    html: `<p>Hola: ${name} has modificado tu cuenta</p>
      //     <p>Si tu no realizaste estos cambios ponte en contacto con
      //         Aula Equis para que te ayuden a recuperar tu cuenta

      //    `,
      // });
      console.log('eviado');
   } catch (error) {
      console.log(error);
   }
};
export const emailRegistro = async (
name,
email,
token,
subject,
   nameEscuela,
   rol,
   text
) => {
   try {
     
      await transporter.sendMail({
         from: '"Aula Equis" <<aulaequis@example.com>',
         to: email,
         subject: subject,
         text: text,
         html: `<p>Hola: ${name} has sido agregado a la ${nameEscuela}</p>
         <p>
         Ingresa al siguiente enlace para cambiar tu contraseña de usuario y poder acceder a la plataforma
         </p>
         <p>
         <a href="http://localhost:3000/api/${rol}/confirmar/${token}">Comprobar Cuenta</a>
         </p>

         `,
      });
      console.log('enviado');
      
   } catch (error) {
      console.log(error);
   }
};
