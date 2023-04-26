import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CommentContainer from "./CommentContainer"
import { PostTypeProps } from "../types"

type PostType = {
    post: PostTypeProps
}

const PostCard: React.FC<PostType> = ({ post }) => {
    return (
        <>

            <div id="post-card">
                <div id="post-card-header">
                    <p>{post.description}</p>
                </div>

                <div id="post-card-body">
                    <img src={post.image_url} alt="post" />
                </div>
                <div id="post-card-footer">
                    <div id="post-card-footer-left">
                        <FontAwesomeIcon icon={faHeart} id="heart-icon" />

                        <span id="likes">{post.likes}</span>
                    </div>
                    <div id="post-card-footer-right">
                        <span id="comments">comments</span>
                    </div>
                </div>
                <CommentContainer postId={post.id} postComments={post.comments} />
            </div>
        </>
    )
}
export default PostCard