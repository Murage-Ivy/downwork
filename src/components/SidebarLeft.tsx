import {  useEffect, useState } from "react"
import { ProfileCallBackType, UserType } from "../types"
import PostForm from "./PostForm"
import Profile from "./Profile"
import { useAppSelector } from "../Hooks/useTypeSelector"

type user = {
    user: UserType
}
const LeftSideBar: React.FC<user> = ({ user }) => {
    console.log(user)
    const [profile, setProfile] = useState<Boolean>(false)
    const [postForm, setPostForm] = useState<Boolean>(false)
    const success = useAppSelector(state => state.addPost.success)

    const handleProfile: ProfileCallBackType = () => {
        setProfile(prevState => !prevState)
    }

    const handlePostForm: ProfileCallBackType = () => {
        setPostForm(prevState => !prevState)

    }

    useEffect(() => {
        if (success) {
            setPostForm(false)
        }

    }, [setPostForm, success])


    return (

        <div id="left-sidebar">
            <div id="left-sidebar-header" onClick={handleProfile}>
                <img src={user.image_url} alt="profile" />
            </div>

            {profile && <Profile handleProfile={handleProfile} user={user} />}

            <div id="left-sidebar-body">
                <button id="add-post-btn" onClick={handlePostForm} >Add Post</button>
            </div>

            {postForm && <PostForm handlePostForm={handlePostForm} />}

        </div>
    )
}

export default LeftSideBar