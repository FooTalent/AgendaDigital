import { createContext, useState } from "react";

const GlobalContext = createContext();




const GlobalContextProvider = (props) => {
    const [users, setusers] = useState ([])
    const[ userorder, setuserorder] = useState([])
    const [disabledSB, setDisabledSB] = useState(false);
    const [enabled, setEnabled] = useState(true);

    const orderByName = (array) => {
        
        let order = array.sort((a,b)=> a.name.localeCompare(b.name))
        setuserorder(order)
        
        
    }

 
    
    return ( 
        <GlobalContext.Provider value={{orderByName, users, setusers,  userorder, disabledSB, setDisabledSB, enabled, setEnabled}}>
           {props.children}     
        </GlobalContext.Provider>
     )

}

export { GlobalContext, GlobalContextProvider }