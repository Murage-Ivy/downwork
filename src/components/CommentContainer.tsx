import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"

const CommentContainer: React.FC = () => {
    return (
        <div id="comment-container">
            <div id="comment-container-body">
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
            <CommentForm />
        </div>
    )
}
export default CommentContainer