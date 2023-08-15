import React, { createContext, Component } from 'react'

export const AlertContext = createContext();

class AlertContextProvider extends Component {
    state = { 
        isRecieved: false,
        type:"",
        text:""
     }
    showAlert = (type, text) =>{
        this.setState({isRecieved: true, type: type, text: text})
        setTimeout(()=>{this.setState({isRecieved: false})}, 3400)
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