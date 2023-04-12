import { Link } from "react-router-dom"

const SignUp: React.FC = () => {
    return (
        <div id="sign-form">
            <div id="sign-form-content">

                <form id="form-signup">
                    <h1>SIGN UP</h1>
                    <div className="sign-form-group">
                        <input type="email" name="email" id="email" placeholder="email" autoComplete="email" />
                        <input type="username" name="username" id="username" placeholder="username" autoComplete="username" />
                    </div>
                    <div className="sign-form-group">
                        <input type="password" name="password" id="password" placeholder="password" autoComplete="current-password" />
                        <input type="password" name="confirm-password" id="confirm-password" placeholder="confirm password" autoComplete="current confirm_password" />
                    </div>
                    <div className="sign-form-group">
                        <input type="file" name="image" id="image" />
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