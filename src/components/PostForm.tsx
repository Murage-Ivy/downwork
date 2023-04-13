import { ProfileCallBackType } from "../types"

interface PostFormProps {
    handlePostForm?: ProfileCallBackType
}

const PostForm: React.FC<PostFormProps> = ({ handlePostForm }) => {

    return (
        <div id="__overlay">
            <div id="post-form-header">
                <span id="close-btn" onClick={handlePostForm}>X</span>

            </div>
            <form id="post-form">
                <input type="text" placeholder="Title" id="title" />
                <textarea name="" id="description" cols={30} rows={10} placeholder="Description"></textarea>
                <input type="file" />
                <select>
                    <option value="vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="animals">Animal</option>
                    <option value="weeds">Weeds</option>
                </select>
                <button type="submit">Post</button>
            </form>

        </div >
    )
}

export default PostForm