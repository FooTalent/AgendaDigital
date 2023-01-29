import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import './login.css'
import { useState } from 'react';
import axios from 'axios';


const Login = () => {
    
    const [hidden, setHidden] = useState("password");
    const [img, setImg] = useState ("./img/ojo-cerrado.svg");
    const [formSubmmit, setFormSubmmit] = useState(false);
    const [rejected, setRejected ] = useState(false);
    const [inputPass, setinputPass] = useState('password2');
    const [inputEmail, setinputEmail] = useState('email2');
    const [btnIniciarSesion, setbtnIniciarSesion] = useState('pButton');
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
                      setinputEmail('email2 valueInvalid')
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        setinputEmail('email2 valueInvalid')
                    } else {
                        setinputEmail('email2')
                    }

                                        
                    if (!values.password) {
                        setinputPass('password2 valueInvalid ')
                    } else{
                        setinputPass('password2');
                    }
                    return errors;
                
                }}
            

                onSubmit={(values, {resetForm}) => {

                    resetForm();
                    console.log('enviado');
                    setFormSubmmit(true);
                    setbtnIniciarSesion('pButton none')
                    setTimeout(() =>  setFormSubmmit(false), 1000 );

                    axios.post('https://agendadigital.onrender.com/api/auth/login', values)

                    .then(res => {
                        setRejected(false)
                        navigate('/dashboard')

                })
                    .catch(err => {
                        setRejected(true)
                        setbtnIniciarSesion('pButton')}
                        )


                }}
                >
                    {() => (
                        <Form className='formLogin'>
                            <div className='divNameSchool'><p className='nameSchool'>SCHOOL</p></div>
                            <div className='titleLogin'><h1>INICIAR SESIÓN</h1></div>
                            <div className='containerForm'>
                                <div className='containerEmail2'>
                                    <Field className={inputEmail} type="email" name="email" placeholder='Correo electrónico' />
                                    <div>
                                    <button disabled className='btnIconEmail'>
                                    <img className='imgEmail' src="/img/correo.svg" alt="" />
                                    </button>
                                    </div>
                                </div>
                                <div className='containerPass2'>
                                    <Field onKeyUp={reEntryPass} id = "password" name="password" type = {hidden} className={inputPass} placeholder='Contraseña'/> 
                                    <div>
                                        <button className='btnIconPass' onClick={visible}>
                                            <Link><img className='imgPass' src={img} alt="" /></Link>   
                                        </button>
                                    </div>
                                </div>
                                {rejected && <p className='error'>Verifique los datos ingresados.</p>}
                                <div className='divButtonSession'>
                                <Field className={btnIniciarSesion} type="submit" value="Iniciar sesión"/>
                                </div>
                                {formSubmmit && <img className='ringsLoader' src='./img/ringsLoader.svg'/>}

                            </div>
                        </Form>
                    )}
                </Formik>
            </div> 
        </>
    );
};

export default Login;