
import { useContext } from "react"
import { Link } from "react-router-dom"
import { loginContext } from "../contexts/UserLoginContext"
function LoginForm() {
    const { user, handleChange, handleSubmit } = useContext(loginContext)

    return (
        <div id="login-form">
            <div className="form">
                <h3>
                    Sign in
                </h3>

                <p>
                    Welcome back John Doe!
                </p>
            </div>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-group">

                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="email" />
                </div>
                <div className="form-group">

                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="current-password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="password" />
                </div>
                <div className="form-group">
                    <button className="btn btn-login">Login</button>
                </div>
                <div className="footer">
                    <p>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>
                </div>
            </form >
        </div >
    )
}

export default LoginForm