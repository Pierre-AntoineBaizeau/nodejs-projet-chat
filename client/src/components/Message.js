import React, {useEffect, useState} from 'react';
import '../style/Message.css'
import moment from 'moment'

const Message = () => {
    const [myMessage, setMyMessage] = useState(true)
    const [messages, setMessages] = useState([])

    useEffect(   () => {
       fetch('http://localhost:3000/messages')
            .then((response) => response.json())
            .then((data) => {
                setMessages(data)
            })
    }, [])
    return (
       <>
           { messages.length > 0 && (
                messages.map((message,index) => {
                    return (
                        <div key={index} className={myMessage ? "blocMyMessage" : ""}>
                            {
                                <div>
                                    <p>Moi le {moment(message.createdAt).format("l")}</p>
                                    <span className={myMessage ? "myMessage message" : "message"}>{message.content}</span>
                                </div>
                            }
                        </div>
                    )
                })
            )}

       </>
    );
}

export default Message;