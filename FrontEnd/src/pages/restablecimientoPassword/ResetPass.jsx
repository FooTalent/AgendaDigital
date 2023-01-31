import React, { useState } from 'react';
import '../reseteoDePassword/envioEmail.css';
import '../../../src/components/Login/login.css';
import './resetpass.css';
import { NavLink } from 'react-router-dom';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const ResetPass = () => {

    const [password, setPassword] = useState('email2');
    const [rejected, setRejected ] = useState(false);

    const reEntryPass = () => setRejected(false)

    const navigate = useNavigate()
        

    const envioEmail = (e) =>{
        e.preventDefault();
        const password = {
            password: e.target.password.value
        }

        if (e.target.password.value === e.target.passwordRepet.value) {
            console.log('hola');
            axios.post('http://localhost:4001/api/admin/olvide-password/pg46jg7k0s1gn3ca9ju', password)
            .then(res => {
                setRejected(false)
                navigate('/dashboard');                      
            })
            .catch(err => {
                setRejected(true)
                console.log(err);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error 404.',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
        } else {
            setPassword('email2 valueInvalid')
            setRejected(true)
        }
    }

    return (
        <>
            <div className='containerLogin'>                
                <form onSubmit={envioEmail} className='formLogin'>
                    <div className='divNameSchool'><p className='nameSchool'>SCHOOL</p></div>
                    <div className='titleLogin'><h1>RESTABLECER CONTRASEÑA</h1></div>
                    <div className='containerForm'>
                    <div className='parrafo' ><span>Ingresa tu nueva contraseña</span></div>
                        <div className='containerEmail2'>
                            <input className={password}  type="password" name="password" placeholder='Contraseña' />
                        </div>
                    <div className='parrafo' ><span>Vuelve a ingresar tu contraseña</span></div>
                        <div className='containerEmail2'>
                            <input className={password} onKeyUp={reEntryPass} type="password" name="passwordRepet" placeholder='Contraseña' />
                        </div>
                        {rejected && <p className='error'>Verifique los datos ingresados.</p>}
                        <div className='divButtonSession'>
                        <input className='pButton' onKeyDown={() => Event.code === 13 && envioEmail} type="submit" value="Enviar"/>
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



export default ResetPass;