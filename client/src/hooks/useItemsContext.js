import { ItemsContext } from "../context/ItemContext";
import { useContext } from "react";


export const useItemsContext = () => {
    const context = useContext(ItemsContext)

    if(!context){
        throw Error('put useItemsContext inside ItemsContextProvider oga')
    }

    return context
}
