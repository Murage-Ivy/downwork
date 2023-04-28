import { useContext, useEffect } from "react"
import PostCard from "./PostCard"
import SearchForm from "./SearchForm"
import { useAppDispatch, useAppSelector } from "../Hooks/useTypeSelector"
import { fetchPosts } from "../reducers/AddPostSlice"
import { postContext } from "../contexts/PostContext"

const PostContainer: React.FC = () => {
    const dispatch = useAppDispatch()
    const { category } = useContext(postContext)
    const { search } = useContext(postContext)
    useEffect(() => {
        dispatch(fetchPosts(category!))
    }, [dispatch, category])


    const posts = useAppSelector(state => state.addPost.posts)

    const newPosts = posts.filter(post => post.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    const postsList = newPosts?.map(post => <PostCard key={post.id} post={post} />)


    return (
        <div id="post-container">
            <div id="post-container-header">
                <SearchForm />
            </div>
            <div id="post-container-body">

                {postsList?.length === 0 ? <img src="../assets/images/404_error.gif" alt="not found" className="not-found" /> : postsList}
            </div>
        </div>
    )
}

export default PostContainer