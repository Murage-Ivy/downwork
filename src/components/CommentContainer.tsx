import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"

type PostIdType = {
    postId: number
}

const CommentContainer: React.FC<PostIdType> = ({ postId }) => {

    return (
        <div id="comment-container">
            <div id="comment-container-body">
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
            <CommentForm postId={postId} />
        </div>
    )
}
export default CommentContainer