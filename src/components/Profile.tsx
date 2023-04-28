import { faCamera, faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProfileCallBackType, UserType } from "../types"

interface ProfileProps {
  handleProfile: ProfileCallBackType,
  user: UserType
}

function Profile({ handleProfile, user }: ProfileProps) {
  return (
    <div id="profile">
      <div id="profile-header">
        <img src={user.image_url} alt="user" />
        <FontAwesomeIcon icon={faCamera} className="profile-icons" id="camera" />
      </div>

      <div id="profile-username">
        <h3>{user.username}</h3>
        <FontAwesomeIcon icon={faPen} className="profile-icons" />
      </div>
      <div className="email">
        <p>{user.email}</p>
        <FontAwesomeIcon icon={faPen} className="profile-icons" />
      </div>

      <div className="action-profile-btns">
        <button>Reset Password</button>
        <button onClick={handleProfile} >Cancel</button>
      </div>



    </div>
  )
}

export default Profile