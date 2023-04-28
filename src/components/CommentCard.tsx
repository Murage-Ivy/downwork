import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CommentType } from "../types"
import { useAppDispatch } from "../Hooks/useTypeSelector"
import { deleteComment } from "../reducers/CommentSlice"

type CommentPropType = {
    comment: CommentType,

}



const CommentCard: React.FC<CommentPropType> = ({ comment }) => {


    const dispatch = useAppDispatch()

    const handleDeleteComment = () => {
        dispatch(deleteComment(comment.id))
    }
    return (
        <div id="comment-card">
            <div id="comment-card-content">
                <p>{comment.content}
                </p>
            </div>
            <div id="comment-card-icons">
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrash} onClick={handleDeleteComment} />
            </div>
        </div>
    )
}
export default CommentCard