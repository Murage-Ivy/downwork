import { useContext, useEffect } from "react"
import PostCard from "./PostCard"
import SearchForm from "./SearchForm"
import { useAppDispatch } from "../Hooks/useTypeSelector"
import { fetchPosts } from "../reducers/AddPostSlice"
import { postContext } from "../contexts/PostContext"

const PostContainer: React.FC = () => {
    const dispatch = useAppDispatch()
    const { category } = useContext(postContext)

    useEffect(() => {
        dispatch(fetchPosts(category))
    }, [dispatch, category])
    return (
        <div id="post-container">
            <div id="post-container-header">
                <SearchForm />
            </div>
            <div id="post-container-body">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    )
}

export default PostContainer