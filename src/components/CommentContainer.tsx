import { CommentType } from "../types"
import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"



type PostCommentsType = {
    postId: number
    postComments: CommentType[]
}

const CommentContainer: React.FC<PostCommentsType> = ({ postId, postComments }) => {
    console.log(postComments)

    const commentLists = postComments?.map(comment => <CommentCard key={comment.id} comment={comment} />)
    return (
        <div id="comment-container">
            <div id="comment-container-body">
             {commentLists}
            </div>
            <CommentForm postId={postId} />
        </div>
    )
}
export default CommentContainer