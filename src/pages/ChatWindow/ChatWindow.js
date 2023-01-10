import React from "react";
import './ChatWindow.css';

import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import SendMessage from "../../components/SendMessage/SendMessage";
import ReceiveMessage from "../../components/ReceiveMessage/ReceiveMessage";
import MessageBox from "../../components/MessageBox/MessageBox";

function ChatWindow() {
    return (
        <div className="chatWindow">
            <ProfileInfo />
            <div className="chats">
                <div className="receiver">
                    <SendMessage />
                </div>
                <div className="sender">
                    <ReceiveMessage />
                </div>
            </div>
            <MessageBox />
        </div>
    );
}

export default ChatWindow;