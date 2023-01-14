import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './allusuarios.css'

const AllUsuarios = () => {

    const [users, setusers] = useState([])

    

    const columns = [
        "S/N",
        "Nombre",
        "E-mail",
        "Rol",
        "",
        ""
      ];

    useEffect(()=> {
        axios.get('https://agendadigital-production.up.railway.app/api/admin')
        .then( res=> setusers(res.data))

    },[])


    return (
        <div>
            <table className='allusers-datadable'>
                <thead>
                        <tr>
                            {
                                columns.map( (col, index) => (
                                    <th className='allusers-thead' key={index}>{col} </th>
                                ))
                            }
                        </tr>
                </thead>
                <tbody>
                            {
                                users.map( us => (
                                    <tr  key={us._id}>
                                        <td className='allusers-tbody'>{us._id}</td>
                                        <td className='allusers-tbody'>{us.name}</td>
                                        <td className='allusers-tbody'> <img className='correo' src="./public/img/correo.png" alt="" /> {us.email}</td>
                                        <td className='allusers-tbody'>{us.role}</td>
                                        <td className='allusers-tbody2'><span> <img src="./public/img/edit.png" alt="" /> </span>
                                        <span> <img src="./public/img/delete.png" alt="" /> </span>
                                        </td>
                                       
                                    </tr>
                                ))
                            }
                       
                </tbody>
            </table>
        </div>
    );
};

export default AllUsuarios;