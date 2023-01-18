import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [users, setusers] = useState([]);
  const [userorder, setuserorder] = useState([]);

/* estados de sideBar y Dashboard*/
  const [disabledSB, setDisabledSB] = useState(false);
  const [enabled, setEnabled] = useState(true);

  const [pagActual, setpagActual] = useState(0)
  const [pagxhoja, setpagxhoja] = useState(5)
  const [firstindex, setfirstindex] = useState(0)
 

  return (
    <GlobalContext.Provider value={{/*  orderByName, */ users, setusers, userorder, setpagxhoja, pagxhoja, pagActual, firstindex, setfirstindex, setpagActual, disabledSB, setDisabledSB,enabled,  setEnabled}}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
