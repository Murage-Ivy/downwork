import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PostIdType } from "../types"
import { useContext } from "react"
import { CommentContext } from "../contexts/CommentContext"


const CommentForm: React.FC<PostIdType> = ({ postId }) => {
    const { comment, handleChange, handleSubmit } = useContext(CommentContext)

    return (
        <form id="comment-form" onSubmit={handleSubmit}>
            <input type="text"
                name="content"
                placeholder="add comment ..."
                value={comment.content}
                onChange={(event) => handleChange(event, postId)} />
            <button id="comment-icon" ><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    )
}
export default CommentForm