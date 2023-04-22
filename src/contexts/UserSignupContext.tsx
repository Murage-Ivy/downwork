import { LegacyRef, createContext, useEffect, useRef, useState } from "react";
import SignUpPage from "../Pages/SignUpPage";
import { useAppDispatch, useAppSelector } from "../Hooks/useTypeSelector"
import { addUser, reset } from "../reducers/SignupSlice"
import { FormDataType, ProviderType } from "../types"
import { useNavigate } from "react-router-dom";



type SignupContextType = {
    user: FormDataType
    inputFile: LegacyRef<HTMLInputElement>,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const SignUpContext = createContext<SignupContextType>({} as SignupContextType)


export const SignUpContextProvider = ({ children }: ProviderType) => {
    const cloud_name = "dhpmstfkj"
    const upload_preset = "p9zcdovn"
    const api_key = "976857633417912"

    const inputRef = useRef<HTMLInputElement>(null)

    const dispatch = useAppDispatch()

    const success = useAppSelector(state => state.signUpUser.success)

    const navigate = useNavigate()

    const [user, setUser] = useState<FormDataType>({
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
        image_url: ""

    })

    useEffect(() => {
        if (success) {
            alert("You have successfully logged in")
            navigate("/login")
        }
        return () => {
            // cleanup
            dispatch(reset())
        }

    }, [navigate, dispatch, success])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const resetFileInput = () => {
        if (inputRef.current) {
            inputRef.current.value = ""
        }

    }
    const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            fetchImage(event.target.files[0])
        }
    }

    const fetchImage = async (imageFile: File) => {
        const imageFormData = new FormData()
        imageFormData.append("file", imageFile!)
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addUser(user))
        setUser({
            email: "",
            username: "",
            password: "",
            password_confirmation: "",
            image_url: ""
        })
        resetFileInput()
    }

    const values: SignupContextType = {
        user,
        inputFile: null!,
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


