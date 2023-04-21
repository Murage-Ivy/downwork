import { createContext, useState } from "react";
import SignUpPage from "../Pages/SignUpPage";
import { useAppDispatch } from "../Hooks/useTypeSelector"
import { addUser } from "../reducers/SignupSlice"
import { FormDataType } from "../types"

type SignUpProviderType = {
    children: React.ReactNode;
}

type SignupContextType = {
    user: FormDataType
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const SignUpContext = createContext<SignupContextType>({} as SignupContextType)


export const SignUpContextProvider = ({ children }: SignUpProviderType) => {
    const cloud_name = "dhpmstfkj"
    const upload_preset = "p9zcdovn"
    const api_key = "976857633417912"

    const [image, setImage] = useState<File | null>(null)

    const dispatch = useAppDispatch()

    const [user, setUser] = useState<FormDataType>({
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
        image_url: ""

    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
        fetchImage()
    }

    const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImage(event.target.files[0])
        }
    }

    const fetchImage = () => {
        const imageFormData = new FormData()
        imageFormData.append("file", image!)
        imageFormData.append("upload_preset", upload_preset)
        imageFormData.append("cloud_name", cloud_name)
        imageFormData.append("api_key", api_key)

        fetch(`https://api.cloudinary.com/v1_1/dhpmstfkj/image/upload`, {
            method: "POST",
            body: imageFormData
        })
            .then(res => res.json())
            .then(data => {
                setUser({ ...user, image_url: data.secure_url })
            })
            .catch(err => console.log(err))

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addUser(user))
        setUser({
            email: "",
            username: "",
            password: "",
            password_confirmation: "",
            image_url: ""
        })
    }

    const values: SignupContextType = {
        user,
        handleChange,
        handleImage,
        handleSubmit
    }

    return (
        <SignUpContext.Provider value={values}>
            <SignUpPage />
        </SignUpContext.Provider>
    )

}


