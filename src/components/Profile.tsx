import { faCamera, faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProfileCallBackType } from "../types"

interface ProfileProps {
  handleProfile: ProfileCallBackType
}

function Profile({ handleProfile }: ProfileProps) {
  return (
    <div id="profile">
      <div id="profile-header">
        <img src="../assets/images/front-view-smiley-woman-holding-box.jpg" alt="user" />
        <FontAwesomeIcon icon={faCamera} className="profile-icons" id="camera" />
      </div>

      <div id="username">
        <h3>John Doe</h3>
        <FontAwesomeIcon icon={faPen} className="profile-icons" />
      </div>
      <div className="email">
        <p>johnDoe@gmail.com</p>
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