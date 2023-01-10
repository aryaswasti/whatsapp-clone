import React from "react";
import './ProfileTools.css';

import {Avatar} from "@mui/material";
import profileImg from "../../assets/photo.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ProfileTools() {
    return(
        <div className="profileTools">
            <Avatar
                alt="Name"
                src={profileImg}
                sx={{
                    left: 20,
                    height: 40,
                    width: 40
                }}
            />
            <MoreVertIcon
                sx={{
                    padding: 2.8,
                    color: "#AEBAC1"
                }}
            />
        </div>
    );
}

export default ProfileTools;