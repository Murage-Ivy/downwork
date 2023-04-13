import { useState } from "react"
import { ProfileCallBackType } from "../types"
import Profile from "./Profile"

const LeftSideBar: React.FC = () => {
    const [profile, setProfile] = useState<Boolean>(false)
    const handleProfile: ProfileCallBackType = () => {
        setProfile(prevState => !prevState)
    }
    return (

        <div id="left-sidebar">
            <div id="left-sidebar-header" onClick={handleProfile}>
                <img src="../assets/images/user.png" alt="profile" />
            </div>

            {profile && <Profile handleProfile={handleProfile} />}

            <div id="left-sidebar-body">
                <button id="add-post-btn">Add Post</button>
            </div>

        </div>



    )
}

export default LeftSideBar