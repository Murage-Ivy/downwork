import { Link } from "react-router-dom"

function LoginForm() {
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
            <form id="form">
                <div className="form-group">
                  
                    <input type="email" name="email" id="email" placeholder="email" />
                </div>
                <div className="form-group">
               
                    <input type="password" name="password" id="password" placeholder="password" />
                </div>
                <div className="form-group">
                    <button className="btn btn-login">Login</button>
                </div>
                <div className="footer">
                    <p>
                        Don't have an account? <Link to="#">Sign up</Link>
                    </p>
                </div>
            </form >
        </div >
    )
}

export default LoginForm