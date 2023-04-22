import { createContext } from "react";
import { ProviderType } from "../types";

export const loginContext = createContext(null)


export const LoginContextProvider = ({ children }: ProviderType) => {
    return (
        <loginContext.Provider value={null}>
            {children}
        </loginContext.Provider>
    )
}