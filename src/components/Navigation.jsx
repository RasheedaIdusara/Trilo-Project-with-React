import '../styles/Navigation.css';
import sprite from '../assets/sprite.svg';

const Navigation = () =>{

    return(
        <>
        <ul className="side_nav">
            <li className="side_nav_item side_nav_item_active">
                <a href="#" className="side_nav_link">
                    <svg className="side_nav_icon">
                        <use xlinkHref={`${sprite}#icon-home`}></use>
                    </svg>
                    <span>Hotel</span>
                </a>
            </li>

            <li className="side_nav_item">
                <a href="#" className="side_nav_link">
                    <svg className="side_nav_icon">
                        <use xlinkHref={`${sprite}#icon-aircraft-take-off`}></use>
                    </svg>
                    <span>Flight</span>
                </a>
            </li>

            <li className="side_nav_item">
                <a href="#" className="side_nav_link">
                    <svg className="side_nav_icon">
                        <use xlinkHref={`${sprite}#icon-key`}></use>
                    </svg>
                    <span>Car Rental</span>
                </a>
            </li>

            <li className="side_nav_item">
                <a href="#" className="side_nav_link">
                    <svg className="side_nav_icon">
                        <use xlinkHref={`${sprite}#icon-map`}></use>
                    </svg>
                    <span>Tours</span>
                </a>
            </li>
        </ul>

        <div className="legal">
2026 Trilo Using React
        </div>
        </>
    );

}

export default Navigation;