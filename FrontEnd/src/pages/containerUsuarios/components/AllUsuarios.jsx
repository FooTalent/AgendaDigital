import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
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
                  <img src="../public/img/edit.png" alt="" />{" "}
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
