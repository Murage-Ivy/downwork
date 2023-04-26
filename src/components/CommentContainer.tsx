import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"


type PostCommentsType = {
    postId: number
    postComments: String[]
}

const CommentContainer: React.FC<PostCommentsType> = ({ postId, postComments }) => {
console.log(postComments)

const commentLists = 
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