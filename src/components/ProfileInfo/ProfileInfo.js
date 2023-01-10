import React from "react";
import './ProfileInfo.css';

import {Avatar} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ProfileInfo() {
    return(
        <div className="profileInfo">
            <div className="left">
                <Avatar
                    sx={{
                        marginLeft: 2
                    }}
                />
            </div>
            <div className="right">
                <SearchIcon
                    sx={{
                        color: "#AEBAC1",
                        marginRight: 3
                    }}
                />
                <MoreVertIcon
                    sx={{
                        color: "#AEBAC1",
                        marginRight: 3
                    }}
                />
            </div>
        </div>
    );
}

export default ProfileInfo;