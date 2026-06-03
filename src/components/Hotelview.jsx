import '../styles/Hotelview.css';

import hotel1 from "../assets/hotel-1.jpg";
import hotel2 from "../assets/hotel-2.jpg";
import hotel3 from "../assets/hotel-3.jpg";

import user1 from "../assets/user-1.jpg";
import user2 from "../assets/user-2.jpg";
import user3 from "../assets/user-3.jpg";
import user4 from "../assets/user-4.jpg";
import user5 from "../assets/user-5.jpg";
import user6 from "../assets/user-6.jpg";

import sprite from "../assets/sprite.svg";

const Hotelview = () => {
    return (
        <>
            <div className="gallery">
                <figure className="gallery_item">
                    <img src={hotel1} alt="Photo of Hotel 1" className="gallery_photo" />
                </figure>
                <figure className="gallery_item">
                    <img src={hotel2} alt="Photo of Hotel 2" className="gallery_photo" />
                </figure>
                <figure className="gallery_item">
                    <img src={hotel3} alt="Photo of Hotel 3" className="gallery_photo" />
                </figure>
            </div>

            <div className='overview'>
                <h1 className='overviewheading'>
                    Hotel Las Palmas
                </h1>
                <div className="overview_stars">
                    <svg className="overview_star_icon">
                        <use xlinkHref={`${sprite}#icon-star`}></use>
                    </svg>
                    <svg className="overview_star_icon">
                        <use xlinkHref={`${sprite}#icon-star`}></use>
                    </svg>
                    <svg className="overview_star_icon">
                        <use xlinkHref={`${sprite}#icon-star`}></use>
                    </svg>
                    <svg className="overview_star_icon">
                        <use xlinkHref={`${sprite}#icon-star`}></use>
                    </svg>
                    <svg className="overview_star_icon">
                        <use xlinkHref={`${sprite}#icon-star`}></use>
                    </svg>
                </div>
                <div className="overview_location">
                    <svg className="overview_location_icon">
                        <use xlinkHref={`${sprite}#icon-location-pin`}></use>
                    </svg>
                    <button className="overview_location_btn_inline">Albufeira, Portugal</button>
                </div>
                <div className="overview_rating">
                    <div className="overview_rating_avarage">8.6</div>
                    <div className="overview_rating_count">500 VOTES</div>
                </div>
            </div>

            <div className="detail">
                <div className="detail_description">
                    <p className="detail_descriptionn_paraghph1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    </p>

                    <p className="detail_descriptionn_paraghph2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    </p>

                    <ul className="list">
                        <li className="listitems">Close to the beach</li>
                        <li className="listitems">Breakfast included</li>
                        <li className="listitems">Free airpoort shuttle</li>
                        <li className="listitems">Free wifi in all rooms</li>
                        <li className="listitems">Air conditioning and heating</li>
                        <li className="listitems">Pets allowed</li>
                        <li className="listitems">We speak all alnguages</li>
                        <li className="listitems">Perfect for families</li>
                    </ul>

                    <div className="recommend">
                        <p className="recommend__count">
                            Lucy and 3 other friends recommend this hotel.
                        </p>
                        <div className="recommend__friends">
                            <img src={user3} alt="Friend 1" className="recommend__photo" />
                            <img src={user4} alt="Friend 1" className="recommend__photo" />
                            <img src={user5} alt="Friend 1" className="recommend__photo" />
                            <img src={user6} alt="Friend 1" className="recommend__photo" />
                        </div>
                    </div>

                </div>
                <figure className="detail_userreview">

                    <figure className="review">
                        <blockquote className='review_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                        </blockquote>

                        <figcaption className="review__user">
                            <img src={user2} alt="User 2" className="review__photo" />
                            <div className="review__user-box">
                                <p className="review__user-name">Emma Sydeny</p>
                                <p className="review__user-date">oct 13th, 2025</p>
                            </div>
                            <div className="review__rating">9.7</div>
                        </figcaption>

                    </figure>

                    <figure className="review">
                        <blockquote className='review_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                        </blockquote>

                        <figcaption className="review__user">
                            <img src={user1} alt="User 1" className="review__photo" />
                            <div className="review__user-box">
                                <p className="review__user-name">Mathiw Smith</p>
                                <p className="review__user-date">sept 13th, 2024</p>
                            </div>
                            <div className="review__rating">8.9</div>
                        </figcaption>

                    </figure>

                    <button className="review_btn_inline">
                        Show all <span className='review_btn_inline_span'>&rarr;</span>
                    </button>

                </figure>
                

            </div>

            <div className="cta">
                    <h2 className="cta_booknow">Good News We Have 4 free rooms for your selected date.</h2>
                    <button className="btn">
                        <span className="btn_visible">Book Now</span>
                        <span className="btn_invisible">Only 4 Rooms Left</span>
                    </button>
                </div>
        </>
    );
}

export default Hotelview;