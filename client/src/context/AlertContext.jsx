import React, { createContext } from 'react'

export const AlertContext = createContext();

class AlertContextProvider extends Component {
    state = { 
        isRecieved: false,
        type:"",
        text:""
     } 
    render() { 
        return (
        <AlertContext.Provider value={{...this.state}}>

        </AlertContext.Provider>
        );
    }
}
 
export default AlertContextProvider;