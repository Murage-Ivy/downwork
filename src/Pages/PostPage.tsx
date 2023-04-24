import PostContainer from "../components/PostContainer"
import Sidebar from "../components/Sidebar"
import LeftSideBar from "../components/SidebarLeft"
import { PostContextProvider } from "../contexts/PostContext"
const PostPage: React.FC = () => {
    return (
        <div id="post-page">
            <PostContextProvider>
                <Sidebar />
                <PostContainer />
                <LeftSideBar />
            </PostContextProvider>




        </div>
    )
}

export default PostPage