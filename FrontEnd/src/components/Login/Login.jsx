import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import './login.css'
import * as Yup from 'yup'
import { useState } from 'react'
import eye from '../../../public/img/ojo-cerrado.svg'
import eyeOpen from '../../../public/img/ojo-abierto.svg'
import Alerta from '../Alerta/Alerta'

// import axios from 'axios'

const Login = () => {
  const [visible, setVisible] = useState(false)
  const [alerta, setAlerta] = useState({})
  const navigate = useNavigate()
  const initialValues = {
    email: '',
    password: ''
  }
  const required = 'Este campo es requerido'
  const validationSchema = Yup.object({
    email: Yup.string().email('Ingrese un correo válido').required(required),
    password: Yup.string().required(required)
  })
  // https://agendadigital.onrender.com/api/auth/login
  const onSubmit = (values) => {
    fetch('https://agendadigital.onrender.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data)
          navigate('/dashboard')
        } else {
          setAlerta({
            msg: data.msg
          })
          setTimeout(() => {
            setAlerta({})
          }, 3000)
        }
      })
  }
  const { msg } = alerta
  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const { handleSubmit, handleChange, errors, handleBlur, touched, values } =
    formik
  const handleVisble = () => {
    setVisible(!visible)
  }
  return (
    <div className='bg'>
      <form className='formAuth' onSubmit={handleSubmit}>
        <h3 className='heading'>SCHOOL</h3>
        <div className='sec'>
          <p>INICIAR SESIÓN</p>
        </div>
        {msg && <Alerta alerta={alerta} />}
        <div className='cont'>
          <div className='inputs'>
            <input
              type='text'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Correo electrónico'
            />
            <img src='/img/correo.svg' alt='' className='correo--icon' />
          </div>
          {errors.email && touched.email && (
            <p className='error'>{errors.email}</p>
          )}
          <div className='inputs'>
            <input
              id='password'
              name='password'
              type={visible ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Contraseña'
            />
            <img
              className='eye--icon'
              onClick={handleVisble}
              src={visible ? eyeOpen : eye}
              alt=''
            />
          </div>
          {errors.password && touched.password && (
            <p className='error'>{errors.password}</p>
          )}
          <Link to='/forgot-password' className='forgot'>
            ¿Olvidaste tu contraseña?
          </Link>
          <input
            className='submitValues'
            type='submit'
            value='Iniciar sesión'
          />
        </div>
      </form>
    </div>
  )
}

export default Login
