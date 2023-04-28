import PostContainer from "../components/PostContainer"
import Sidebar from "../components/Sidebar"
import LeftSideBar from "../components/SidebarLeft"
import { PostContextProvider } from "../contexts/PostContext"
import { UserType } from "../types"


type user = {
    user: UserType
}
const PostPage: React.FC<user> = ({user}) => {


    return (
        <div id="post-page">
            <PostContextProvider>
                <Sidebar />
                <PostContainer />
                <LeftSideBar user={user} />
            </PostContextProvider>




        </div>
    )
}

export default PostPage