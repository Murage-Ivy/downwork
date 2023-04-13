import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header: React.FC = () => {
    return (
        <div id="header">

            <div id="header-logo">
                <Logo />
            </div>

            <div className="auth-btns">
                <Link to="/login"> <button className="btn btn-primary">Login</button></Link>
                <Link to="/signup"><button className="btn btn-secondary">Sign Up</button></Link>
            </div>


        </div>
    )
}

export default Header