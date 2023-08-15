import React, { createContext, Component } from 'react'

export const AlertContext = createContext();

class AlertContextProvider extends Component {
    state = { 
        isRecieved: true,
        type:"error",
        text:"hello"
     } 
    render() { 
        return (
        <AlertContext.Provider value={{...this.state}}>
            {this.props.children}
        </AlertContext.Provider>
        );
    }
}
 
export default AlertContextProvider;