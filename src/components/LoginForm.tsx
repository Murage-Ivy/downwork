import { useState } from "react"
import { Link } from "react-router-dom"
import { LoggedUserType } from "../types"
import { useAppDispatch } from "../Hooks/useTypeSelector"
import { loginUser } from "../reducers/LoginSlice"

function LoginForm() {

    const [user, setUser] = useState<LoggedUserType>({
        email: "",
        password: ""
    })

    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(loginUser(user))
        setUser({
            email: "",
            password: ""
        })
    }


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
                        value={user.email}
                        onChange={handleChange}
                        placeholder="email" />
                </div>
                <div className="form-group">

                    <input
                        type="password"
                        name="password"
                        id="password"
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