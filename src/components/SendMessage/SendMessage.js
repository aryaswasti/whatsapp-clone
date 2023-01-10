import React from "react";
import './SendMessage.css';

import {DoneAll} from "@mui/icons-material";

function SendMessage() {
    return(
        <div className="sendMessage">
            <p className="messageSent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="cornerSend">
                <div className="timeSend">09:30</div>
                <DoneAll
                    sx={{
                        color: "#80AEA5",
                        height: 14,
                        width: 14,
                        marginLeft: 0.5
                    }}
                />
            </div>
        </div>
    );
}

export default SendMessage;