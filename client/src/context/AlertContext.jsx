import React, { createContext, Component } from 'react'

export const AlertContext = createContext();
let alertTimeout = null;

class AlertContextProvider extends Component {
    state = { 
        isRecieved: false,
        type:"",
        text:""
     }
    showAlert = (type, text) =>{
        this.setState({isRecieved: true, type: type, text: text})
        if (alertTimeout){
            clearTimeout(alertTimeout)
        }
        alertTimeout = setTimeout(()=>{this.setState({isRecieved: false})}, 2500)
    } 
    render() { 
        return (
        <AlertContext.Provider 
        value={{...this.state, showAlert: this.showAlert}}>
            {this.props.children}
        </AlertContext.Provider>
        );
    }
}
 
export default AlertContextProvider;
