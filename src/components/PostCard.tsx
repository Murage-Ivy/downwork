import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CommentContainer from "./CommentContainer"
import { PostTypes } from "../types"

type PostType = {
    post: PostTypes
}

const PostCard: React.FC<PostType> = ({ post }) => {
    return (
        <div id="post-card">
            <div id="post-card-header">
                <p>Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California.</p>
            </div>
            <div id="post-card-body">
                <img src="../assets/images/farm-with-goats.jpg" alt="post" />
            </div>
            <div id="post-card-footer">
                <div id="post-card-footer-left">
                    <FontAwesomeIcon icon={faHeart} id="heart-icon" />
                    <span id="likes"> 0 likes</span>
                </div>
                <div id="post-card-footer-right">
                    <span id="comments">comments</span>
                </div>
            </div>
            <CommentContainer />
        </div>
    )
}
export default PostCard