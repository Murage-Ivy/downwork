import { createContext } from "react";
import { ProviderType } from "../types";
import { LoggedUserType } from "../types"
import { useState } from "react"
import { useAppDispatch } from "../Hooks/useTypeSelector"
import { loginUser } from "../reducers/LoginSlice"

export const loginContext = createContext<LogginContextType>({} as LogginContextType)

type LogginContextType = {
    user: LoggedUserType
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void

}


export const LoginContextProvider = ({ children }: ProviderType) => {
    const [user, setUser] = useState<LoggedUserType>({
        email: "",
        password: ""
    })


    const dispatch = useAppDispatch();

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