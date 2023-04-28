import { createContext, useState } from "react";
import { ProviderType } from "../types";


export const UserContext = createContext<UserContextType>({} as UserContextType)

type UserType = {
    id: number,
    username: string,
    email: string,
    image_url: string
}
type UserContextType = {
    user: UserType
    getUser: () => void
}

export const UserContextProvider = ({ children }: ProviderType) => {
    const [user, setUser] = useState({
        id: 0,
        username: "",
        email: "",
        image_url: "",
    })

  

    const getUser = async () => {
        const response = await fetch('auto_login')
        const data = await response.json()
        if (response.ok) {
            setUser(data)
        }
        else {
            console.log(data.error)
        }

    }
    const values = {
        user,
        getUser
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}
