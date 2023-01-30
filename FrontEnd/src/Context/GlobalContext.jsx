import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [users, setusers] = useState([]);
  const [userorder, setuserorder] = useState([]);

  /* estados de sideBar, dashboard y navbar*/
  const [enabled, setEnabled] = useState(false);
  const [enabledSB, setEnabledSB] = useState(true);
  const [maximunWidth, setMaximunWidth] = useState(true);
  const [directedRoute, setDirectedRoute] = useState("");



  const [pagActual, setpagActual] = useState(0)
  const [pagActual2, setpagActual2] = useState(0)
  const [pagxhoja, setpagxhoja] = useState(10)
  const [firstindex, setfirstindex] = useState(0)
  const [firstindex2, setfirstindex2] = useState(0)

  return (
    <GlobalContext.Provider value={{/*  orderByName, */ users, setusers, userorder, setpagxhoja, pagxhoja, pagActual, firstindex, setfirstindex, setpagActual, enabled,  setEnabled, enabledSB, setEnabledSB, maximunWidth, setMaximunWidth, firstindex2, setfirstindex2, pagActual2, setpagActual2, directedRoute, setDirectedRoute}}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
