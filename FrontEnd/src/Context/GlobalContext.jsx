import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [users, setusers] = useState([]);
  const [userorder, setuserorder] = useState([]);

  const [pagActual, setpagActual] = useState(0)
  const [pagxhoja, setpagxhoja] = useState(5)
  const [firstindex, setfirstindex] = useState(0)
 
  


  const orderByName = (array) => {
    let order = array.sort((a, b) => a.name.localeCompare(b.name));
    setuserorder(order);
  };
  

  
 


  return (
    <GlobalContext.Provider value={{ orderByName, users, setusers, userorder, setpagxhoja, pagxhoja, pagActual, firstindex, setfirstindex, setpagActual}}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
