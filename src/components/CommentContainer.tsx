import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../Hooks/useTypeSelector"
import { fetchComments } from "../reducers/CommentSlice"
import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"

type PostCommentsType = {
    postId: number
}

const CommentContainer: React.FC<PostCommentsType> = ({ postId }) => {

    const dispatch = useAppDispatch()
    const comments = useAppSelector(state => state.addComment.comments)

    useEffect(() => {
        dispatch(fetchComments())
    }
        , [dispatch])


    const commentPosts = comments.filter(comment => comment.post_id === postId)
    const commentLists = commentPosts?.map(comment => <CommentCard key={comment.id} comment={comment} />)

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