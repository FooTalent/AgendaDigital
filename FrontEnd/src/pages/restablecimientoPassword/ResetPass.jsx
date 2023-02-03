import React, { useState,useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import '../reseteoDePassword/envioEmail.css';
import '../../../src/components/Login/login.css';
import './resetpass.css';
import { NavLink } from 'react-router-dom';
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';



const ResetPass = () => {

    const [password, setPassword] = useState('email2');
    const [rejected, setRejected ] = useState(false);
    const reEntryPass = () => setRejected(false)
    const navigate = useNavigate()
    const {token} = useParams()
    /* En el useEffect hacemos el GET para validar el token */
    useEffect(() => {
        axios.get(`https://aulax.onrender.com/api/escuela/olvide-password/${token}`)
            .then(res => {
                setRejected(false)                                                
            })
            .catch(err => {
                setRejected(true)
                console.log(err);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'El sitio al que desea acceder no existe',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
    }, [])
    
    return (
        <>
            <div className='containerLogin'>
                <Formik
                    initialValues={
                        {
                            pass: { //Guardo otro objeto dentro de pass ya que sino cuando hago el POST y pongo values no coincide con el body del POST
                                password:""
                            },
                            passwordConfirm: '',
                        }
                    }

                    validate={values => {

                        const errors = {};

                        if (!values.pass.password || values.passwordConfirm !== values.pass ){
                            setPassword('email2 valueInvalid')                           
                        } else {
                            setPassword('email2')
                        }
                        return errors
                    }}
                    
                    onSubmit={(values, {resetForm}) =>{
                        resetForm()
                        axios.post(`https://aulax.onrender.com/api/escuela/olvide-password/${token}`, values.pass)
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
                                title: 'No se ha podido restablecer el password',
                                showConfirmButton: false,
                                timer: 2000
                            })
                        })
                    }}
                >                
                    {({handleSubmit})=>(
                            <Form 
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                console.log('hola');
                                handleSubmit();
                                }
                            }}
                            className='formLogin'
                            >
                            <div className='divNameSchool'><p className='nameSchool'>SCHOOL</p></div>
                            <div className='titleLogin'><h1>RESTABLECER CONTRASEÑA</h1></div>
                            <div className='containerForm'>
                            <div className='parrafo' ><span>Ingresa tu nueva contraseña</span></div>
                                <div className='containerEmail2'>
                                    <input className={password}  type="password" name="password" placeholder='Contraseña' />
                                </div>
                            <div className='parrafo' ><span>Vuelve a ingresar tu contraseña</span></div>
                                <div className='containerEmail2'>
                                    <Field className={password} onKeyUp={reEntryPass} type="password" name="passwordConfirm" placeholder='Contraseña' />
                                </div>
                                {rejected && <p className='error'>Verifique los datos ingresados.</p>}
                                <div className='divButtonSession'>
                                <Field className='pButton' type="submit" value="Enviar"/>
                                </div>
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

export default ResetPass;