import { createContext, useEffect } from "react";
import { LogginContextType, ProviderType } from "../types";
import { LoggedUserType } from "../types"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../Hooks/useTypeSelector"
import { loginUser, reset } from "../reducers/LoginSlice"
import { useNavigate } from "react-router-dom";

export const loginContext = createContext<LogginContextType>({} as LogginContextType)

export const LoginContextProvider = ({ children }: ProviderType) => {
    const [user, setUser] = useState<LoggedUserType>({
        email: "",
        password: ""
    })

    const dispatch = useAppDispatch();

    const success = useAppSelector(state => state.loggedUser.success)

    const navigate = useNavigate()

    useEffect(() => {
        if (success) {
            alert("You have successfully logged in")
            navigate('/postpage')
        }

        return () => {
            dispatch(reset())
            // cleanup
        }
    }, [dispatch, success, navigate])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(loginUser(user))
        setUser({
            email: "",
            password: ""
        })
    }

    const values: LogginContextType = {
        user,
        handleChange,
        handleSubmit
    }

    return (
        <loginContext.Provider value={values}>
            {children}
        </loginContext.Provider>
    )
}