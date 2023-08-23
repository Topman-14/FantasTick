import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('put useAuthContext inside AuthContextProvider oga')
    }

    return context
}
