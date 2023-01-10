import React from "react";
import icon from "../../assets/img.png";
import "./Homepage.css";

import LockIcon from '@mui/icons-material/Lock';

function HomePage () {
    return (
        <div className="rightSideScreen">
            <img src={icon} alt="whatsappIcon" className="photo"/>
            <p className="homepageHeading">WhatsApp Web</p>
            <p className="message">Send and receive messages without keeping your phone online.<br /> Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
            <div className="footer">
                <LockIcon
                sx={{
                    height: 11,
                    width: 11,
                    paddingTop: 2,
                    paddingRight: 0.5
                }}
                />
                <p>End-to-end encrypted</p>
            </div>
            <hr className="bottomLine"/>
        </div>
    );
}

export default HomePage;