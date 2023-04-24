import { FormEvent, createContext } from "react";
import { ProviderType } from '../types'
import { useState } from "react"
import { useAppDispatch } from "../Hooks/useTypeSelector"
import { PostTypeProps } from "../types"
import { ChangeEvent } from "react"
import { addPost } from "../reducers/AddPostSlice";

type PostContextType = {
    post: PostTypeProps
    handlePostChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
    handlePostImage: (event: ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}
export const postContext = createContext<PostContextType>({} as PostContextType)

export const PostContextProvider = ({ children }: ProviderType) => {

    const cloud_name = "dhpmstfkj"
    const upload_preset = "p9zcdovn"
    const api_key = "976857633417912"
    const file_folder = "postimages"

    const [post, setPost] = useState<PostTypeProps>({
        title: '',
        description: '',
        image_url: '',
        category: '',
        likes: 0
    })

    const dispatch = useAppDispatch()

    const handlePostChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target
        setPost({ ...post, [name]: value })
    }

    const handlePostImage = async (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            await fetchPostImage(event.target.files[0])
        }
    }


    const fetchPostImage = async (imageFile: File) => {
        const imageFormData = new FormData()
        imageFormData.append("file", imageFile!)
        imageFormData.append("upload_preset", upload_preset)
        imageFormData.append("cloud_name", cloud_name)
        imageFormData.append("api_key", api_key)
        imageFormData.append("folder", file_folder)

        fetch(`https://api.cloudinary.com/v1_1/dhpmstfkj/image/upload`, {
            method: "POST",
            body: imageFormData
        })
            .then(res => res.json())
            .then(data => {
                setPost({ ...post, image_url: data.secure_url })
            })
            .catch(err => console.log(err))

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addPost(post))
        setPost({
            title: '',
            description: '',
            image_url: '',
            category: '',
            likes: 0
        })
    }
    const values: PostContextType = {
        post,
        handlePostChange,
        handlePostImage,
        handleSubmit
    }

    return (
        <postContext.Provider value={values}>
            {children}
        </postContext.Provider>
    )
}