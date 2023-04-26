import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CommentType } from "../types"

type CommentPropType = {
    comment: CommentType
}
const CommentCard: React.FC<CommentPropType> = ({ comment }) => {
    return (
        <div id="comment-card">
            <div id="comment-card-content">
                <p>{comment.content}
                </p>
            </div>
            <div id="comment-card-icons">
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    )
}
export default CommentCard