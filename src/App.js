import './App.css';

import HomePage from "./pages/Homepage/HomePage";
import Chats from "./pages/Chats/Chats";
import ChatWindow from "./pages/ChatWindow/ChatWindow";

function App() {
  return (
    <div className="screen">
      <div className="leftPanel">
        <Chats />
      </div>
      <div className="rightPanel">
        {/*<HomePage />*/}

        <ChatWindow />

        {/*<div className="userProfile"></div>*/}
        {/*<div className="chatScreen"></div>*/}
        {/*<div className="textBox"></div>*/}
      </div>
    </div>
  );
}

export default App;
