// export const registrarAdministrativo = async (req, res) => {
//    const { email, emailEscuela } = req.body;
//    const existeAdministrativo = await Administrativo.findOne({ email });
//    const existeEscuela = await Escuela.findOne({ emailEscuela });
//    if (!existeEscuela) {
//       const error = new Error('La escuela no existe');
//       return res.status(400).json({ error: error.message });
//    }
//    if (existeAdministrativo) {
//       const error = new Error('El administrativo ya existe');
//       return res.status(400).json({ error: error.message });
//    }
//    try {
//       const administrativo = await Administrativo.create(req.body);
//       administrativo.token = generarId();
//       existeEscuela.administrativoId.push(administrativo._id);
//       await Promise.all([administrativo.save(), existeEscuela.save()]);
//       //enviar mail de confirmacion
//       // await transporter.sendMail({
//       //    from: '"Fred Foo 👻" <
//       //    to: escuela.email, // list of receivers
//       //    subject: 'Hello ✔', // Subject line
//       //    text: 'Hello world?', // plain text body
//       //    html: `<b>http://localhost:3000/confirmar/${escuelas.token}</b>`, // html body
//       // });
//       res.status(201).json(administrativo);
//    } catch (error) {
//       res.status(500).json({ error: error.message });
//    }
// };
