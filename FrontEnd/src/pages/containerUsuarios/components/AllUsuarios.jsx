import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import Swal from "sweetalert2";
import "./allusuarios.css";

const AllUsuarios = ({ search }) => {
  const { users, setusers, pagxhoja, pagActual, firstindex, firstindex2} =
    useContext(GlobalContext);
  const [modal, setmodal] = useState(false);
  const [email, setemail] = useState("");
  const [dni, setdni] = useState(0);
  const [id, setid] = useState("");

  const columns = ["N°", "DNI", "E-mail", "Rol", "status", ""];

  useEffect(() => {
    axios.get("https://agendadigital.onrender.com/api/auth").then((res) => {
      // let order = res.data.sort((a, b) => a.name.localeCompare(b.dni));
      // setusers(order);
      setusers(res.data.data);
    });
  }, [users]);

  let results = [];
  let results2 = [];

  const searchName = () => {
    results = users.filter(
      (res) => res.email.includes(search) || res.dni.toString().includes(search)
    );
    results2 = users.filter(
      (res) => res.email.includes(search) || res.dni.toString().includes(search)
    );
    // setresults(newresults)
  };

  searchName();

  const editUsers = async (dni, email, id) => {
    setdni(dni);
    setemail(email);
    setid(id);
    setmodal(true);
  };

  const updateUser = (e) => {
    e.preventDefault();
    axios.patch(`https://agendadigital.onrender.com/api/auth/update/${id}`, {
      dni: Number(dni),
      email: email,
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Usuario actualizado con exito",
      showConfirmButton: false,
      timer: 2000,
    });

    setmodal(false);
  };

  const deleteUser = (id) => {


      Swal.fire({
        title: '¿Seguro que desea eliminar el usuario?',
        text: "No Puede revertir esto",
        icon: 'warning',
        iconColor: 'red',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, Eliminar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              `https://agendadigital.onrender.com/api/auth/delete/${id}`
            )
            .then((res) => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Usuario eliminado con exito",
                showConfirmButton: false,
                timer: 2000,
              });
              // console.log(res.data);
            });
     
      }})

  };

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
          {results.splice(firstindex, pagxhoja).map((us, index) => (
            <tr key={us._id}>
              <td className="allusers-tbody">{index + 1}</td>
              <td className="allusers-tbody">{us.dni}</td>

              <td className="allusers-tbody">
                {/* <img
                  className="correo"
                  src="../public/img/correo.png"
                  alt=""
                />{" "} */}
                {us.email}
              </td>
              <td className="allusers-tbody">{us.role}</td>
              <td className="allusers-tbody">{us.status}</td>
              <td className="allusers-tbody2">
                <span>
                  {" "}
                  <img
                    className="editdel"
                    onClick={() => {
                      editUsers(us.dni, us.email, us._id);
                    }}
                    src="../public/img/edit.png"
                    alt=""
                  />{" "}
                </span>
                <span>
                  {" "}
                  <img
                    src="../public/img/delete.png"
                    onClick={() => deleteUser(us._id)}
                    alt=""
                  />{" "}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="datatable-mobile">
        <tbody>
          {results2.splice(firstindex2, 5).map((us, index) => (
            <>
              <tr>
                <td className="datatable-td"> <span className="bl"> N°: </span> {index + 1}</td>
              </tr>
              <tr>
                <td className="datatable-td"> <span className="bl">DNI:</span> {us.dni}</td>
              </tr>
              <tr>
                <td className="datatable-td"><span className="bl">E-Mail:</span> {us.email}</td>
              </tr>
              <tr >
              <td className="allusers-tbody2">
                <span>
                  {" "}
                  <img
                    className="editdel"
                    onClick={() => {
                      editUsers(us.dni, us.email, us._id);
                    }}
                    src="../public/img/edit.png"
                    alt=""
                  />{" "}
                </span>
                <span>
                  {" "}
                  <img
                    src="../public/img/delete.png"
                    onClick={() => deleteUser(us._id)}
                    alt=""
                  />{" "}
                </span>
              </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      <p className="pagina">
        {" "}
        Página <span className="pag">{pagActual + 1} </span> <span className="pg2">de{" "}
        {Math.ceil(users.length / pagxhoja)}</span> 
      </p>
      {/*------------------------------------ modal -------------------------------*/}
      {modal && (
        <div className="modal">
          <div className="modal-container" onSubmit={updateUser}>
            <form className="modal-form">
              <h2 className="title">Editar Usuario</h2>
              <br />
              <label htmlFor="mail">DNI:</label>
              <input
                className="inputsForm"
                type="text"
                id="dni"
                onChange={(e) => setdni(e.target.value)}
                value={dni}
              />
              <br />
              <label htmlFor="mail">Email:</label>
              <input
                className="inputsForm"
                type="text"
                id="mail"
                onChange={(e) => setemail(e.target.value)}
                value={email}
              />
              <br />
              <br />
              <div>
                <button type="submit" className="btnSave">
                  Guardar
                </button>
                <button className="btnReset" onClick={() => setmodal(!modal)}>
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsuarios;
