import PostCard from "./PostCard"
import SearchForm from "./SearchForm"

const PostContainer: React.FC = () => {
    return (
        <div id="post-container">
            <div id="post-container-header">
                <SearchForm />
            </div>
            <div id="post-container-body">
                <PostCard />
            </div>
        </div>
    )
}

export default PostContainer