import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import Swal from "sweetalert2";
import "./allusuarios.css";

const AllUsuarios = ({ search }) => {
  const { users, setusers } = useContext(GlobalContext);

  const columns = ["S/N", "Nombre", "E-mail", "Rol", "", ""];

  useEffect(() => {
    axios
      .get("https://agendadigital-production.up.railway.app/api/admin")
      .then((res) => {
        let order = res.data.sort((a, b) => a.name.localeCompare(b.name));
        setusers(order);
      });
  }, []);

  let results = [];

  const searchName = () => {
    results = users.filter((res) => res.name.includes(search) || res._id.includes(search) || res.email.includes(search) );
  };
 
  searchName();

  const editUsers = async (dni, nombre, email) => {
    
    const {value: formValues} = await Swal.fire({
      title: 'Edit Users',
      html:
        '<label>DNI</label>'+
        `<input type="text" id="swal-input1" class="swal2-input" value=${dni} >` +
        '<label>NOMBRE </label>'+
        `<input id="swal-input2" class="swal2-input" value=${nombre}>`+
        '<label>EMAIL</label>'+
        `<input type="email" id="swal-input3" class="swal2-input" value=${email}>`,
      focusConfirm: false,
      background: '#DAE2FE',
      color: '#6928F3',
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value
        ]
      }
    })
    if (formValues) {
      console.log(JSON.stringify(formValues))
    }
   
  }
  return (
    <div>
      <table className="allusers-datadable">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th className="allusers-thead" key={index}>
                {col}{" "}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((us) => (
            <tr key={us._id}>
              <td className="allusers-tbody">{us._id}</td>
              <td className="allusers-tbody">{us.name}</td>
              <td className="allusers-tbody">
                {" "}
                <img
                  className="correo"
                  src="../public/img/correo.png"
                  alt=""
                />{" "}
                {us.email}
              </td>
              <td className="allusers-tbody">{us.role}</td>
              <td className="allusers-tbody2">
                <span>
                  {" "}
                  <img onClick={()=>{editUsers(us._id,us.name,us.email)}} src="../public/img/edit.png" alt="" />{" "}
                </span>
                <span>
                  {" "}
                  <img src="../public/img/delete.png" alt="" />{" "}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsuarios;
