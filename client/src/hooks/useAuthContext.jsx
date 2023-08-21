import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export const useItemsContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('put useAuthContext inside ItemsContextProvider oga')
    }

    return context
}
