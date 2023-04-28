import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../Hooks/useTypeSelector"
import { deleteComment, fetchComments } from "../reducers/CommentSlice"
import { CommentType } from "../types"
import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"

type PostCommentsType = {
    postId: number
}

const CommentContainer: React.FC<PostCommentsType> = ({ postId }) => {

    const dispatch = useAppDispatch()
    const comments = useAppSelector(state => state.addComment.comments)

    const getCommentId = (commentId: number, post_id: number) => {
        handleDeleteComment(postId, commentId, post_id)
    }
    useEffect(() => {
        dispatch(fetchComments())
    }
        , [dispatch])

    const handleDeleteComment = (postId: number, commentId: number, post_id: number) => {
        dispatch(deleteComment(commentId))
        console.log(commentId)
    }
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