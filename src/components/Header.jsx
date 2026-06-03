import '../styles/Header.css';
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpeg";
import logo from "../assets/logo.png";
import logo from "../assets/logo.png";
import sprite from "../assets/sprite.svg";

const Header = () => {
    return (
        <>
            <img src={logo} alt="trilo Logo" className="logo" />

            <form action="#" className="search">
                <input type="text" className="search_input" placeholder='Search Hotels'/>
                <button className="search_btn">
                    <svg className="search_icon">
                        <use xlinkHref={`${sprite}#icon-magnifying-glass`}></use>
                    </svg>
                </button>
            </form>

            <nav className="user_nav">
                <div className="user_nav_icon_box">
                    <svg className="user_nav_icon">
                        <use xlinkHref={`${sprite}#icon-bookmark`}></use>
                    </svg>
                    <span className="user_nav_notification">7</span>
                </div>

                <div className="user_nav_icon_box">
                    <svg className="user_nav_icon">
                        <use xlinkHref={`${sprite}#icon-chat`}></use>
                    </svg>
                    <span className="user_nav_notification">10</span>
                </div>

                <div className="user_nav_user">
                    <img src={profile} alt="User Photo" className="user_nav_user_photos" />
                    <span className="user_nav_user_name">Rasheeda</span>
                </div>
            </nav>
        </>
    );
}

export default Header;