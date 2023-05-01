import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CommentContainer from "./CommentContainer"
import { PostTypeProps } from "../types"
import { CommentProvider } from "../contexts/CommentContext"
import { useState } from "react"
import Option from "./Option"

type PostType = {
    post: PostTypeProps
}


const PostCard: React.FC<PostType> = ({ post }) => {
    const [visible, setVisible] = useState(false)

    const handleVisibility = () => {
        setVisible(!visible)
    }
    return (
        <>

            <div id="post-card">
                <div className="fa-options" onClick={handleVisibility}>
                    <h2>...</h2>
                    {visible ? <Option /> : null}
                </div>
           

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
                <CommentProvider>
                    <CommentContainer postId={post.id} />
                </CommentProvider>

            </div>
        </>
    )
}
export default PostCard