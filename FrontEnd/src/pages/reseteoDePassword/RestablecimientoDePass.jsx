import './envioEmail.css';
import '../../../src/components/Login/login.css';
import { NavLink } from 'react-router-dom';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const RestablecimientoDePass = () => {

    
    const navigate = useNavigate()

    const sendEmail = (e) =>{
        e.preventDefault();
        const userRegistered = {
            email: e.target.email.value
        }


        axios.post('https://aulax.onrender.com/api/escuela/olvide-password', userRegistered)
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
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error 404. Intente más tarde, si persiste comuniquese con administración',
                showConfirmButton: false,
                timer: 2000
            })
        })
    }

    return (
        <>
            <div className='containerLogin'>                
                <form onSubmit={sendEmail} className='formLogin'>
                    <div className='divNameSchool'><p className='nameSchool'>SCHOOL</p></div>
                    <div className='titleLogin'><h1>RESTABLECER CONTRASEÑA</h1></div>
                    <div className='containerForm'>
                    <div className='parrafoResetPass' ><span>Ingresa tu correo electrónico y te enviaremos un código para restablecerla.</span></div>
                        <div className='containerEmail2'>
                            <input className='email2'  type="email" name="email" placeholder='Correo electrónico' />
                        </div>
                        <div className='divButtonSession'>
                        <input className='pButton' onKeyDown={() => Event.code === 13 && sendEmail} type="submit" value="Enviar"/>
                        </div>
                        <div className='cancelar'>
                        <NavLink to={'/login'}  className='olvidoPass'><span>Cancelar</span></NavLink>
                        </div>                               
                    </div>
                </form>
            </div>
        </>
    );

}

export default RestablecimientoDePass;
