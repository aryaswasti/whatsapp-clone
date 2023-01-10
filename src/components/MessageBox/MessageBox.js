import React from "react";
import './MessageBox.css';

import {Mood} from "@mui/icons-material";
import {AttachFile} from "@mui/icons-material";

function MessageBox() {
    return(
        <div className="messageBoxContainer">
            <Mood
                sx={{
                    color: "#8696A0",
                    height: 28,
                    width: 28,
                    padding: 1.5,
                    marginLeft: 1
                }}
            />
            <AttachFile
                sx={{
                    color: "#8696A0",
                    height: 28,
                    width: 28,
                    padding: 1.5,
                    marginLeft: -0.7,
                    marginRight: 1,
                    transform: "rotate(45deg)"
                }}
            />
            <input type="text" className="messageBox" placeholder="Type a message" />
        </div>
    );
}

export default MessageBox;