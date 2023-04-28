import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CommentType } from "../types"

type CommentPropType = {
    comment: CommentType,
    getCommentId: (commentId: number, post_id: number) => void

}


const CommentCard: React.FC<CommentPropType> = ({ comment, getCommentId }) => {


    return (
        <div id="comment-card">
            <div id="comment-card-content">
                <p>{comment.content}
                </p>
            </div>
            <div id="comment-card-icons">
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrash} onClick={() => getCommentId(comment.id, comment.post_id)} />
            </div>
        </div>
    )
}
export default CommentCard