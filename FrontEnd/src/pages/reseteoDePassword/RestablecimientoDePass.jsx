import './envioEmail.css';
import '../../../src/components/Login/login.css';
import { Formik, Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const RestablecimientoDePass = () => {

    const [inputEmail, setinputEmail] = useState('email2');
    const [btnIniciarSesion, setbtnIniciarSesion] = useState('pButton');
    const [formSubmmit, setFormSubmmit] = useState(false);

    const navigate = useNavigate()
    
    return (
        <>
            <div className='containerLogin'>                
                <Formik
                    initialValues={{
                        email:'',
                    }}

                    validate={values => {
                        const errors = {};

                        if(!values.email) {
                            setinputEmail('email2 valueInvalid')
                        } else {
                            setinputEmail('email2')
                        }
                        return errors
                    }}

                    onSubmit={(values, {resetForm}) =>{
                        resetForm();
                        setFormSubmmit(true);
                        setbtnIniciarSesion('pButton none')
                        setTimeout(() => {
                        setFormSubmmit(false)
                        setSubmitting(false)                         
                        },2000);
                        axios.post('https://aulax.onrender.com/api/escuela/olvide-password', values)
                        .then(res => {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'El mail ha sido enviado revise su correo. Si no lo encuentra en bandeja de entrada verifique en SPAM',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate('/login'); //TODAVIA NO ESTA CREADA LA LANDING PERO LA IDEA ES QUE CUANDO SE ENVIE EL EMAIL REDIRIJA A LA LANDING                     
                        })
                        .catch(err => {
                            console.log(err);
                            setbtnIniciarSesion('pButton')
                            setinputEmail('email2 valueInvalid')
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Error 404. Intente más tarde, si persiste comuniquese con administración',
                                showConfirmButton: false,
                                timer: 2000
                            })
                        })
                    }}
                >
                    {({handleSubmit})=> (
                        <Form 
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                console.log('hola');
                                handleSubmit();
                                }
                            }}
                            className='formLogin'>
                            <div className='divNameSchool'><p className='nameSchool'>SCHOOL</p></div>
                            <div className='titleLogin'><h1>RESTABLECER CONTRASEÑA</h1></div>
                            <div className='containerForm'>
                            <div className='parrafoResetPass' ><span>Ingresa tu correo electrónico y te enviaremos un código para restablecerla.</span></div>
                                <div className='containerEmail2'>
                                    <Field className={inputEmail}  type="email" name="email" placeholder='Correo electrónico' />
                                </div>
                                <div className='divButtonSession'>
                                <Field className={btnIniciarSesion} type="submit" value="Enviar"/>
                                </div>
                                {formSubmmit && <img className='ringsLoader' src='./img/ringsLoader.svg'/>}
                                <div className='cancelar'>
                                <NavLink to={'/login'}  className='olvidoPass'><span>Cancelar</span></NavLink>
                                </div>                               
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );

}

export default RestablecimientoDePass;