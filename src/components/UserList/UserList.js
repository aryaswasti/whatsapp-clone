import React from "react";
import './UserList.css';
import {Avatar} from "@mui/material";

function UserList() {
    return(
        <div className="chatUser">
            <div className="leftSide">
                <Avatar
                    sx={{
                        marginLeft: 2,
                        padding: 0.5
                    }}
                />
                <div className="info">
                    <p className="userName">Name</p>
                    <p className="message">Message</p>
                </div>
            </div>
            <div className="rightSide">
                <p className="timeStamp">10:30</p>
                <p className="notificationCount">12</p>
            </div>
        </div>
    );
}

export default UserList;