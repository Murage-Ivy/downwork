import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CommentForm: React.FC = () => {
    return (
        <div id="comment-form">
            <input type="text" placeholder="add comment ..." />
            <FontAwesomeIcon icon={faPaperPlane} id="comment-icon" />
        </div>
    )
}
export default CommentForm