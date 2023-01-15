import React from "react";
import { Formik, Form, Field } from "formik";
import "../../dashboard/dashboard.css";
import "./addusuario.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddUsuario = () => {
  const [formSubmmit, setFormSubmmit] = useState(false);
  const [inputName, setInputName] = useState("inputsForm");
  const [inputEmail, setInputEmail] = useState("inputsForm");
  const [inputPass, setInputPass] = useState("inputsForm");

  const validateName = (valores) => {
    if (!valores.name) {
      setInputName("inputsForm valueInvalid");
    } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/i.test(valores.name)) {
      setInputName("inputsForm valueInvalid");
    } else {
      setInputName("inputsForm");
    }
  };

  const validateEmail = (valores) => {
    if (!valores.email) {
      setInputEmail("inputsForm valueInvalid");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)
    ) {
      setInputEmail("inputsForm valueInvalid");
    } else {
      setInputEmail("inputsForm");
    }
  };
  const validatePass = (valores) =>
    !valores.password
      ? setInputPass("inputsForm valueInvalid ")
      : setInputPass("inputsForm");

  return (
    <>
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            validateName(values);
            validateEmail(values);
            validatePass(values);

            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            console.log("creado");
            setFormSubmmit(true);
            setTimeout(() => setFormSubmmit(false), 2000);
            axios
              .get("https://agendadigital-production.up.railway.app/api/admin")
              .then((res) => {
                let exist = "";
                res.data.map((el) =>
                  el.email === values.email ? (exist = el.email) : exist
                );
                console.log(exist.length);

                if (exist.length > 0) {
                  Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "Ya existe un usuario creado con ese email",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                } else {
                  axios
                    .post(
                      "https://agendadigital-production.up.railway.app/api/user",
                      values
                    )
                    .then((res) => {
                      setInputEmail("inputsForm");
                      setInputName("inputsForm");
                      setInputPass("inputsForm");
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Usuario creado con exito",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    })
                    .catch((err) => {
                      setInputEmail("inputsForm");
                      setInputName("inputsForm");
                      setInputPass("inputsForm");
                      Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Error 404",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    });
                }          
              })
              .catch((err) => {
                setInputEmail("inputsForm");
                setInputName("inputsForm");
                setInputPass("inputsForm");
                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Error 404",
                  showConfirmButton: false,
                  timer: 1500,
                });
              });          
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
                  <label htmlFor="name">Nombre*</label>
                  <Field
                    onClick={validateName}
                    className={inputName}
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="containerInputs">
                  <label htmlFor="email">E-mail*</label>
                  <Field
                    onClick={validateEmail}
                    className={inputEmail}
                    id="email"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="containerInputs">
                  <label htmlFor="password">Contraseña*</label>
                  <Field
                    onClick={validatePass}
                    id="password"
                    name="password"
                    type="text"
                    className={inputPass}
                  />
                </div>
                <div className="containerBtnCreate">
                  <Field
                    className="btnCreate"
                    type="submit"
                    value="Crear usuario"
                  />
                  <Field className="btnReset" type="reset" value="Limpiar" />
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
