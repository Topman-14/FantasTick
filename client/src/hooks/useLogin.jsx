import { useState, useContext } from "react";
import {useAuthContext} from './useAuthContext'
import { useNavigate } from 'react-router-dom'
import { AlertContext } from '../context/alertContext';

export const useLogin = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()
    const {showAlert} = useContext(AlertContext);

    const login = async (email, password) => {
        setIsLoading(true)

        const response = await fetch('http://localhost:4000/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            showAlert("error", json.error)
        }
        if(response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
            navigate("/dashboard")
            setIsLoading(false)
        }
    }

    return {login, isLoading}
}