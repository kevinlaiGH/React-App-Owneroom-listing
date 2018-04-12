import React from 'react';
import PropTypes from 'prop-types';

const Card = () => {
    return <div id="card-0" className="card col-sm-12 col-md-6 col-lg-4 is-active">
        <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg" alt="Singer" />
        <p className="price">$937,180</p>
        <div className="details">
            <span className="index">1</span>
            <p className="location">
                Singer<br />914 Argyle Road
                  </p>
            <ul className="features">
                <li className="icon-bed">2<span>bedrooms</span></li>
                <li className="icon-bath">2<span>bathrooms</span></li>
                <li className="icon-car">2<span>parking spots</span></li>
            </ul>
        </div>
    </div>
}

Card.propTypes = {
    property: PropTypes.object.isRequire
};

export default Card;