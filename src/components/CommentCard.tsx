import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CommentCard: React.FC = () => {
    return (
        <div id="comment-card">
            <div id="comment-card-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum magnam consequatur quis excepturi neque tenetur, alias sint animi!
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