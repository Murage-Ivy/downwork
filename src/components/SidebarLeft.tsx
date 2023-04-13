import { useState } from "react"
import { ProfileCallBackType } from "../types"
import PostForm from "./PostForm"
import Profile from "./Profile"

const LeftSideBar: React.FC = () => {
    const [profile, setProfile] = useState<Boolean>(false)
    const [postForm, setPostForm] = useState<Boolean>(true)
    const handleProfile: ProfileCallBackType = () => {
        setProfile(prevState => !prevState)
    }

    const handlePostForm: ProfileCallBackType = () => {
        setPostForm(prevState => !prevState)
    }
    return (

        <div id="left-sidebar">
            <div id="left-sidebar-header" onClick={handleProfile}>
                <img src="../assets/images/user.png" alt="profile" />
            </div>

            {profile && <Profile handleProfile={handleProfile} />}

            <div id="left-sidebar-body">
                <button id="add-post-btn" onClick={handlePostForm} >Add Post</button>
            </div>

            {postForm && <PostForm />}

        </div>
    )
}

export default LeftSideBar