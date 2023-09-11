import React from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'
import { useItemsContext } from './useItemsContext'

export default function useLogout() {
    const { dispatch } = useAuthContext()
    const { dispatch: itemsDispatch } = useItemsContext()
    const navigate = useNavigate()

    const logout =()=>{
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
        navigate("/") 
        itemsDispatch({type: 'SET_ITEMS', payload: null})
    }
    return {logout}
}
