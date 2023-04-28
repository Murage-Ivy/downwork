import { CommentType, ProviderType } from "../types"
import { createContext, useState } from "react"
import { useAppDispatch } from "../Hooks/useTypeSelector"
import { addComment } from "../reducers/CommentSlice"

export const CommentContext = createContext<CommentContextTypes>({} as CommentContextTypes)

type CommentContextTypes = {
    comment: CommentType
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, postId: number) => void
    handleSubmit: (event: React.MouseEvent<HTMLFormElement>) => void
}

export const CommentProvider = ({ children }: ProviderType) => {

    const [comment, setComment] = useState({
        id: 0,
        content: "",
        post_id: 0
    })



    const dispatch = useAppDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, postId: number) => {
        const { name, value } = event.target
        setComment({ ...comment, [name]: value, post_id: postId })
    }

    const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addComment(comment))
        setComment({
            id: 0,
            content: "",
            post_id: 0
        })
    }

    const values = {
        comment,
        handleChange,
        handleSubmit

    }

    return (
        <CommentContext.Provider value={values}>
            {children}
        </CommentContext.Provider>
    )
}