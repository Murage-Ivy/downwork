import { ChangeEvent, useState } from "react"
import { PostTypeProps, ProfileCallBackType } from "../types"
import { useAppDispatch } from "../Hooks/useTypeSelector"
import { addPost } from "../reducers/AddPostSlice"

interface PostFormProps {
    handlePostForm?: ProfileCallBackType
}



const PostForm: React.FC<PostFormProps> = ({ handlePostForm }) => {
    const cloud_name = "dhpmstfkj"
    const upload_preset = "p9zcdovn"
    const api_key = "976857633417912"
    const file_folder = "postimages"

    const [post, setPost] = useState<PostTypeProps>({
        title: '',
        description: '',
        image_url: '',
        category: '',
        likes: 0
    })

    const dispatch = useAppDispatch()

    const handlePostChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target
        setPost({ ...post, [name]: value })
    }

    const handlePostImage = async (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            await fetchPostImage(event.target.files[0])
        }
    }


    const fetchPostImage = async (imageFile: File) => {
        const imageFormData = new FormData()
        imageFormData.append("file", imageFile!)
        imageFormData.append("upload_preset", upload_preset)
        imageFormData.append("cloud_name", cloud_name)
        imageFormData.append("api_key", api_key)
        imageFormData.append("folder", file_folder)

        fetch(`https://api.cloudinary.com/v1_1/dhpmstfkj/image/upload`, {
            method: "POST",
            body: imageFormData
        })
            .then(res => res.json())
            .then(data => {
                setPost({ ...post, image_url: data.secure_url })
            })
            .catch(err => console.log(err))

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addPost(post))
    }
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