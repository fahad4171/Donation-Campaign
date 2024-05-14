import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to='/'>
            <div>
                <img alt="logo" src="image/Logo.png" />
            </div>
            </Link>
        </div>
    );
};

export default Logo;