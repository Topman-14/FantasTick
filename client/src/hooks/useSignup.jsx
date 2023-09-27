import { useState, useContext } from "react";
import {useAuthContext} from './useAuthContext'
import { useNavigate } from 'react-router-dom'
import { AlertContext } from '../context/AlertContext';

export const useSignup = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()
    const {showAlert} = useContext(AlertContext);

    const signup = async (username, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://fantastick-api.vercel.app/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, email, password})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            showAlert("error", json.error)
        }
        if(response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
            navigate("/dashboard")
        }
    }

    return {signup, isLoading, error}
}