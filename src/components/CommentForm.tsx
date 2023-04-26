import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const CommentForm: React.FC = () => {

    const [comment, setComment] = useState({
        id: 0,
        content: "",
        post_id: 0
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setComment({ ...comment, [name]: value })
    }

    const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(comment)
    }
    return (
        <form id="comment-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="add comment ..." onChange={handleChange} />
            <FontAwesomeIcon icon={faPaperPlane} id="comment-icon" />
        </form>
    )
}
export default CommentForm