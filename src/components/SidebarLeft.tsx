const LeftSideBar: React.FC = () => {
    return (
        <div id="left-sidebar">
            <div id="left-sidebar-header">
                <img src="../assets/images/user.png" alt="profile" />
            </div>
            <div id="left-sidebar-body">
                <button id="add-post-btn">Add Post</button>
            </div>
        </div>
    )
}

export default LeftSideBar