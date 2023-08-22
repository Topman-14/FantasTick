import React from 'react'
import { useAuthContext } from './useAuthContext'

export default function useLogout() {
    const { dispatch } = useAuthContext()

    const logout =()=>{
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
    }
    return {logout}
}
