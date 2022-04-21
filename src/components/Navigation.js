import logo from "../media/navLogo.png";

const Navigation = props => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="bankcode" />
            </div>
        </nav>
    );
}

export default Navigation;