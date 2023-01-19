import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [users, setusers] = useState([]);
  const [userorder, setuserorder] = useState([]);

  /* estados de sideBar y Dashboard*/
  const [enabled, setEnabled] = useState(false);
  const [enabledSB, setEnabledSB] = useState(true);
/*   const [enabledSB, setEnabledSB] = useState(false); */

  const [pagActual, setpagActual] = useState(0)
  const [pagxhoja, setpagxhoja] = useState(5)
  const [firstindex, setfirstindex] = useState(0)
 

  return (
    <GlobalContext.Provider value={{/*  orderByName, */ users, setusers, userorder, setpagxhoja, pagxhoja, pagActual, firstindex, setfirstindex, setpagActual, enabled,  setEnabled, enabledSB, setEnabledSB}}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
