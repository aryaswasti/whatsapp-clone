import React from "react";
import './Chats.css';

import ProfileTools from "../../components/ProfileTools/ProfileTools";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserList from "../../components/UserList/UserList";

function Chats () {
    return (
        <div className="leftSideScreen">
            <ProfileTools />
            <SearchBar />
            <UserList />
        </div>
    );
}

export default Chats;