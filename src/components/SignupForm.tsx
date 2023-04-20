import { useState } from "react"
import { Link } from "react-router-dom"

const SignUp: React.FC = () => {
    const cloud_name = "dhpmstfkj"
    const upload_preset = "p9zcdovn"
    const api_key = "976857633417912"

    type UserType = {
        email: string,
        username: string,
        password: string,
        password_confirmation: string,
        image: File | null

    }

    const [user, setUser] = useState<UserType>({
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
        image: null

    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        if (name === "image") {
            setUser({ ...user, [name]: event.target.files![0] })
            return
        }
        setUser({ ...user, [name]: value })

    }
    const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault()
        // const formData = new FormData()
        const imageFormData = new FormData()
        // formData.append("email", user.email)
        // formData.append("username", user.username)
        // formData.append("password", user.password)
        // formData.append("password_confirmation", user.password_confirmation)

        imageFormData.append("file", user.image!)
        imageFormData.append("upload_preset", upload_preset)
        imageFormData.append("cloud_name", cloud_name)
        imageFormData.append("api_key", api_key)


        fetch(`https://api.cloudinary.com/v1_1/dhpmstfkj/image/upload`, {
            method: "POST",
            body: imageFormData
        })
            .then(res => res.json())
            .then(data => {
                setUser({ ...user, image: data.secure_url })
            })
            .catch(err => console.log(err))
 
    }


    return (
        <div id="sign-form">
            <div id="sign-form-content">

                <form id="form-signup" onSubmit={handleSubmit}>
                    <h1>SIGN UP</h1>
                    <div className="sign-form-group">
                        <input type="email"
                            name="email"
                            id="email"
                            placeholder="email"
                            autoComplete="email"
                            value={user.email}
                            onChange={handleChange} />
                        <input type="username"
                            name="username"
                            id="username"
                            placeholder="username"
                            autoComplete="username"
                            value={user.username}
                            onChange={handleChange} />

                    </div>
                    <div className="sign-form-group">
                        <input type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            autoComplete="current-password"
                            value={user.password}
                            onChange={handleChange} />
                        <input type="password"
                            name="password_confirmation"
                            id="confirm-password"
                            placeholder="confirm password"
                            autoComplete="current confirm_password"
                            value={user.password_confirmation}
                            onChange={handleChange} />
                    </div>
                    <div className="sign-form-group">
                        <input type="file" name="image" id="image" onChange={handleChange} />
                    </div>
                    <div className="sign-form-group">
                        <button id="sign-up-btn" type="submit">Sign Up</button>
                    </div>
                    <div className="sign-footer">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUp