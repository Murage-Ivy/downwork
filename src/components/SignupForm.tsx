import { useContext } from "react"
import { Link } from "react-router-dom"
import { SignUpContext } from "../contexts/UserSignupContext"

const SignUp: React.FC = () => {
    const { user, inputFile, handleChange, handleSubmit, handleImage } = useContext(SignUpContext)
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
                        <input
                            type="file"
                            name="image"
                            id="image"
                            ref={inputFile as HTMLInputElement}
                            onChange={handleImage} />
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