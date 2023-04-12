import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CommentCard: React.FC = () => {
    return (
        <div id="comment-card">
            <div id="comment-card-header">
                <h1>Comment Card</h1>
            </div>
            <div id="comment-card-body">
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    )
}
export default CommentCard