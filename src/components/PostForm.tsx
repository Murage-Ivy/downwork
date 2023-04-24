import { ChangeEvent, useState } from "react"
import { PostTypeProps, ProfileCallBackType } from "../types"
import { useAppDispatch } from "../Hooks/useTypeSelector"
import { addPost } from "../reducers/AddPostSlice"

interface PostFormProps {
    handlePostForm?: ProfileCallBackType
}



const PostForm: React.FC<PostFormProps> = ({ handlePostForm }) => {

    return (
        <div id="__overlay">
            <div id="post-form-header">
                <span id="close-btn" onClick={handlePostForm}>X</span>

            </div>
            <form id="post-form" onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    id="title"
                    value={post.title}
                    onChange={handlePostChange} />
                <textarea
                    name="description"
                    id="description"
                    cols={30} rows={10}
                    value={post.description}
                    onChange={handlePostChange}
                    placeholder="Description"

                ></textarea>
                <input type="file" onChange={handlePostImage} />
                <select value={post.category} name="category" onChange={handlePostChange} >

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