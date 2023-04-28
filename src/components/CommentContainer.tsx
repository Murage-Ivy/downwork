import { useAppDispatch, useAppSelector } from "../Hooks/useTypeSelector"
import { deleteComment } from "../reducers/CommentSlice"
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
    const handleAddComments = () => {
        console.log(fetchedComment, postId)
        if (fetchedComment.post_id > 0 && fetchedComment.post_id === postId) {
            return setComments([fetchedComment, ...comments])
        }

        console.log('this are the comments,', comments)
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