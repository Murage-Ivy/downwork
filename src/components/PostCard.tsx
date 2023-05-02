import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CommentContainer from "./CommentContainer"
import { PostTypeProps } from "../types"
import { CommentProvider } from "../contexts/CommentContext"
import {  useState } from "react"
import Option from "./Option"
import { useAppDispatch } from "../Hooks/useTypeSelector"
import { updateLikes } from "../reducers/AddPostSlice"

type PostType = {
    post: PostTypeProps
}


const PostCard: React.FC<PostType> = ({ post }) => {
    const [visible, setVisible] = useState(false)
    const [likes, setLikes] = useState(post.likes)
    const [liked, setLiked] = useState(false)

    const dispatch = useAppDispatch()
    const handleVisibility = () => {
        setVisible(!visible)
    }

    const handleLikesUpdate = () => {
        const newValues = {
            likes: likes,
            postId: post.id
        }
        dispatch(updateLikes(newValues))
        setLiked(prevLiked => !prevLiked);
        setLikes(prevLikes => {
            const newLikes = liked ? prevLikes - 1 : prevLikes + 1;
            return newLikes < 0 ? 0 : newLikes;
        })

    };

    return (
        <>

            <div id="post-card">
                <div className="fa-options" onClick={handleVisibility}>
                    <h2>...</h2>
                    {visible ? <Option postId={post.id} /> : null}
                </div>


                <div id="post-card-header">
                    <p>{post.description}</p>
                </div>

                <div id="post-card-body">
                    <img src={post.image_url} alt="post" />
                </div>
                <div id="post-card-footer">
                    <div id="post-card-footer-left">
                        <FontAwesomeIcon icon={faHeart} id={liked ? "heart-icon-active" : "heart-icon"} onClick={handleLikesUpdate} />

                        <span id="likes">{likes}</span>
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