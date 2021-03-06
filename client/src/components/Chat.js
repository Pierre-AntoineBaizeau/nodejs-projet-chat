import React from 'react';
import Message from "./Message";
import BtnSubmit from "./BtnSubmit";
import '../style/Chat.css'

const Chat = () => {
    return (
        <div className="divChat">
            <div className="headChat">
                <p className="h2">Chat général</p>
            </div>
            <div className="scrollbar">
                <div className="containerMessage">
                    <Message />
                </div>
            </div>
            <BtnSubmit />
        </div>
    );
}

export default Chat;