import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './login.css'
import { useState } from 'react';
import axios from 'axios';


const Login = () => {

    const [hidden, setHidden] = useState("password");
    const [img, setImg] = useState ("./img/ojo-cerrado.svg");
    const [formSubmmit, setFormSubmmit] = useState(false);
    const [rejected, setRejected ] = useState(false);
    const navigate = useNavigate();

    const visible = () => {
        if(hidden === "password"){
            setHidden("text");
            setImg("./img/ojo-abierto.svg")
        } else{
            setHidden("password");
            setImg("./img/ojo-cerrado.svg")
        }
      }

    const reEntryPass = () => setRejected(false)

    return (
        <>
            <div className='containerLogin'>
                <Formik
                initialValues={{ 
                email: '', 
                password: '' }}

                validate={values => {

                    const errors = {};

                    if (!values.email) {
                      errors.email = 'Por favor ingrese un email';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Mail invalido';
                    }
                                        
                    if (!values.password) {
                      errors.password = 'Por favor ingrese su contraseña';
                    }
                    return errors;
                
                }}

                onSubmit={(values, {resetForm}) => {
                    resetForm();
                    console.log('enviado');
                    setFormSubmmit(true);
                    setTimeout(() =>  setFormSubmmit(false), 3000 );
                    axios.post('https://agendadigital-production.up.railway.app/api/user/login', values)
                    .then(res => {
                        setRejected(false)
                        navigate('/dashboard')
                })
                    .catch(err => 
                        setRejected(true))

                }}
                >
                    {() => (
                        <Form className='formLogin'>
                            <div className='divNameSchool'><p className='nameSchool'>SCHOOL</p></div>
                            <div className='titleLogin'><h1>INICIAR SESIÓN</h1></div>
                            <div className='containerForm'>
                                <div className='containerEmail'>
                                    <Field className='email' type="email" name="email" placeholder='Correo electrónico' />
                                    <div className='divEmail'>
                                        <img className='iconEmail' src="./img/correo.svg" alt="" />
                                    </div>
                                    <ErrorMessage name='email' component="div"/>
                                </div>
                                <div className='containerPass'>
                                    <Field onKeyUp={reEntryPass} id = "password" name="password" type = {hidden} className='password' placeholder='Contraseña'/> 
                                    <div className='divPass'>
                                        <Link><img onClick={visible} className='iconPasswordUno'  src={img} alt="" /></Link>
                                    </div>
                                    <ErrorMessage name='password' component="div"/>
                                    {formSubmmit && <img className='ringsLoader' src='./img/ringsLoader.svg'/>}
                                    {rejected && <p className='error'>Error de contraseña. Intente nuevamente.</p>}
                                </div>
                                <div className='divButtonSession'>
                                <Field className='pButton' type="submit" value="Iniciar sesión"/>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div> 
     
        </>
    );
};

export default Login;