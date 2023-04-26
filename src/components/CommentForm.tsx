import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useAppDispatch } from "../Hooks/useTypeSelector"
import { addComment } from "../reducers/CommentSlice"

const CommentForm: React.FC = () => {

    const [comment, setComment] = useState({
        id: 0,
        content: "",
        post_id: 0
    })

    const dispatch = useAppDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setComment({ ...comment, [name]: value })
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

    return (
        <form id="comment-form" onSubmit={handleSubmit}>
            <input type="text"
                name="content"
                placeholder="add comment ..."
                value={comment.content}
                onChange={handleChange} />
            <button id="comment-icon" ><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    )
}
export default CommentForm