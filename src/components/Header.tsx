import Logo from "./Logo";

const Header: React.FC = () => {
    return (
        <div id="header">
            <div id="header-content">
                <div id="header-logo">
                    <Logo />
                </div>

                <div className="auth-btns">
                    <button className="btn btn-primary">Login</button>
                    <button className="btn btn-secondary">Sign Up</button>
                </div>
            </div>

        </div>
    )
}

export default Header