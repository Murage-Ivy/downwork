import {useState } from "react"
import { useAppDispatch, useAppSelector } from "../Hooks/useTypeSelector"
import { deleteComment } from "../reducers/CommentSlice"
import { CommentType } from "../types"
import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"

type PostCommentsType = {
    postId: number
    postComments: CommentType[]
}

const CommentContainer: React.FC<PostCommentsType> = ({ postId, postComments }) => {

    const [comments, setComments] = useState(postComments)

    const dispatch = useAppDispatch()
    const fetchedComment = useAppSelector(state => state.addComment.comment)

    const getCommentId = (commentId: number, post_id: number) => {
        handleDeleteComment(postId, commentId, post_id)
    }
    const handleAddComments = () => {
        if (fetchedComment.post_id === postId) {
            setComments([fetchedComment, ...comments])
        }
    }

    const handleDeleteComment = (postId: number, commentId: number, post_id: number) => {
        dispatch(deleteComment(commentId))
        console.log(commentId)
        if (postId === post_id) {
            setComments(prevComments => prevComments.filter(comment => comment.id !== commentId))
        }
    }

    const commentLists = comments?.map(comment => <CommentCard key={comment.id} comment={comment} getCommentId={getCommentId} />)
    return (
        <div id="comment-container">
            <div id="comment-container-body">
                {commentLists}
            </div>
            <CommentForm postId={postId} handleAddComments={handleAddComments} />
        </div>
    )
}
export default CommentContainer