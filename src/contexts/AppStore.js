import React from 'react'
import {CreateStore} from './appStoreReducer'



const Context = React.createContext() 


export const AppStore = ({children}) => {
     
    const [state, dispatch] = CreateStore()  

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>        
    )
}

export default Context
