import { createContext, useState } from "react";

const GlobalContext = createContext();




const GlobalContextProvider = (props) => {
    const [users, setusers] = useState ([])
    const[ userorder, setuserorder] = useState([])

    const orderByName = (array) => {
        
        let order = array.sort((a,b)=> a.name.localeCompare(b.name))
        setuserorder(order)
        
        
    }

 
    
    return ( 
        <GlobalContext.Provider value={{orderByName, users, setusers,  userorder}}>
           {props.children}     
        </GlobalContext.Provider>
     )

}

export { GlobalContext, GlobalContextProvider }