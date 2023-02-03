import React from "react";
import { Formik, Form, Field } from "formik";
import "../../dashboard/dashboard.css";
import "./addusuario.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddUsuario = () => {
  const [inputDni, setInputDni] = useState("inputsForm");
  const [inputEmail, setInputEmail] = useState("inputsForm");
  const [inputPass, setInputPass] = useState("inputsForm");
  const idRegex = /^\d{6,15}$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;

 
  return (
    <>
      <div className="container">
      <div className="containerFormAdd">
        <Formik
          initialValues={{
            select: "",
            consulta: {
            dni: "",
            email: "",
            password: ""
          }
          }}
          
          validate={values => {
            const errors = {};
            /* Valido que se haya seleccionado algo en el select */
            if(values.select === ''){
              setInputDni('inputsForm valueInvalid ')
            }
            /* Valido email */
            if (!values.email) {
              setInputEmail('inputsForm valueInvalid')
            } else if (
              emailRegex.test(values.email)
            ) {
                setInputEmail('inputsForm valueInvalid')
            } else {
                setInputEmail('inputsForm valueValid')
            }     
            /* Valido si es dni */
            if (values.select === 'dni'){
              if (!values.dni) {
                setInputDni('inputsForm valueInvalid')
              } else if (isNaN(parseInt(values.dni))) {
                  setInputDni('inputsForm valueInvalid')
              } else if (!idRegex.test(parseInt(values.dni)))
              {
                setInputDni('inputsForm valueInvalid')
              }else {
                  setInputDni('inputsForm valueValid')
              }          
            }     
            /* Valido si es pasaporte */
            if (values.select === 'pasaporte'){
              if (!values.dni) {
                setInputDni('inputsForm valueInvalid')
              } else {
                  setInputDni('inputsForm valueValid')
              }          
            }            
            /* Valido password */
            if (!values.password) {
                setInputPass('inputsForm valueInvalid ')
            } else{
                setInputPass('inputsForm valueValid');
            }
            return errors;
            
        }}

          onSubmit={(values)=>{
              resetForm();         
              axios.post("https://agendadigital.onrender.com/api/auth/register", values.consulta)
                .then( res => {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Usuario Creado con Exito",
                    showConfirmButton: false,                    
                  })
                })
                .catch( err => {
                    Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "Ya existe un usuario creado con ese email",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                })
          }}
        >      
        {({handleChange, values}) => (         
          <Form className="">
            <div className="containerTitleCreate">
              <img className="imgPersonalInformation" src="/img/img-datos-personales.svg" alt=""/>
              <span className="titleCreate">Datos personales</span>
            </div>
            <div className="containerInputs">
              <label htmlFor="dni">Tipo de documento*</label>                           
              <Field className={inputDni} value={values.select} onChange={handleChange} as="select" id="select" name="select">
                <option value=''>Elige un documento</option>
                <option value='dni'>DNI</option>
                <option value='pasaporte'>Pasaporte</option>
              </Field >
            </div>
            <div className="containerInputs">
              <label htmlFor="dni">Numero de Identifación*</label>
              <Field  className={inputDni} type="text" id="dni" name="dni"/>
            </div>
            <div className="containerInputs">
              <label htmlFor="email">E-mail*</label>
              <Field className={inputEmail} id="email" type="email" name="email"/>
            </div>
            <div className="containerInputs">
              <label htmlFor="password">Contraseña*</label>
              <Field autoComplete = 'false' id="password" name="password" type="password" className={inputPass}                  
              />
            </div>
            <div className="containerBtnCreate">
              <Field className="btnCreate" type="submit" value="Crear usuario" id='new'/>
              <Field className="btnReset" type="reset" id='reset' value="Limpiar" />
            </div>
            <p>Los campos con * son obligatorios.</p>
          </Form>
        )}                      
        </Formik> 
        </div>  
      </div>
    </>
  );
};

export default AddUsuario;