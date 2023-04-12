import PostContainer from "../components/PostContainer"
import Sidebar from "../components/Sidebar"
import LeftSideBar from "../components/SidebarLeft"
const PostPage: React.FC = () => {
    return (
        <div id="post-page">

            <Sidebar />
            <PostContainer />
            <LeftSideBar />



        </div>
    )
}

export default PostPage