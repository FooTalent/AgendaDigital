import React from "react";
import { Formik, Form, Field } from "formik";
import "../../dashboard/dashboard.css";
import "./addusuario.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddUsuario = () => {
  const [formSubmmit, setFormSubmmit] = useState(false);
  const [inputName, setInputName] = useState("inputsForm");
  const [inputEmail, setInputEmail] = useState("inputsForm");
  const [inputPass, setInputPass] = useState("inputsForm");

  const validateDni = (valores) => {
    if (!valores.target.value) {
      console.log('vacio');
      setInputEmail('')
      setInputName("inputsForm valueInvalid");
    } else if (valores.target.value.length < 6) {
      console.log('falta');
      setInputEmail('')
      setInputName("inputsForm valueInvalid");
    } else {
      console.log('ok');
      setInputEmail('')
      setInputName("inputsForm valueValid");
    }
  };

  const validateEmail = (valores) => {
    
    if (!valores.target.value) {
      setInputEmail('')
      setInputEmail("inputsForm valueInvalid");
      
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.target.value)) {
      
      setInputEmail('')
      setInputEmail("inputsForm valueInvalid");
    }
    else {
      setInputEmail('')
      setInputEmail("inputsForm valueValid");
      
    }

  
  };

  // const validatePass = (valores) =>
  //   !valores.password
  //     ? setInputPass("inputsForm valueInvalid ")
  //     : setInputPass("inputsForm");

  return (
    <>
      <div className="container">
        <Formik
          initialValues={{
            dni: "",
            email: "",
            password: "",
          }}
        onSubmit={(values, { resetForm })=>{
          resetForm();
          axios.post("https://agendadigital-production.up.railway.app/api/user",values)
          .then( res => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Usuario Creado con Exito",
              showConfirmButton: false,
              timer: 2000,
            })
            useNavigate('../usuarios/all')
          })
          .catch( err => {
            console.log(err);
                    Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "Ya existe un usuario creado con ese email",
                    showConfirmButton: false,
                    timer: 2000,
                  });
          } )
        }}

          
        >
          {() => (

            <div className="containerFormAdd">
              <Form className="">
                <div className="containerTitleCreate">
                  <img
                    className="imgPersonalInformation"
                    src="/img/img-datos-personales.svg"
                    alt=""
                  />
                  <span className="titleCreate">Datos personales</span>
                </div>
                <div className="containerInputs">
                  <label htmlFor="dni">DNI*</label>
                  <Field
                    onBlur={validateDni }
                    className={inputName}
                    type="number"
                    id="dni"
                    name="dni"
                    
                  />
                </div>
                <div className="containerInputs">
                  <label htmlFor="email">E-mail*</label>
                  <Field
                    onBlur={validateEmail}
                    className={inputEmail}
                    id="email"
                    type="email"
                    name="email"
                    
                  />
                </div>
                <div className="containerInputs">
                  <label htmlFor="password">Contraseña*</label>
                  <Field
                   
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="true"
                    className={inputPass}
                  
                  />
                </div>
                <div className="containerBtnCreate">
                  <Field
                    className="btnCreate"
                    type="submit"
                    value="Crear usuario"
                    id='new'
                  />
                  <Field className="btnReset" type="reset" id='reset' value="Limpiar" />
                </div>
                <p>Los campos con * son obligatorios.</p>
              </Form>
            </div>
          )}
        </Formik>
        
      </div>
    </>
  );
};

export default AddUsuario;
