import React, {useEffect, useState} from 'react';
import '../style/Message.css'

const Message = () => {
    const [myMessage, setMyMessage] = useState(false)
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
                                myMessage ?
                                    (
                                        <div>
                                            <p>Moi le 21/07</p>
                                            <span className="myMessage message">{message.content}</span>
                                        </div>
                                    ) : (
                                        <>
                                            <p>Julia le 21/07</p>
                                            <p className="message">
                                                <span>{message.content}</span>
                                            </p>
                                        </>
                                    )
                            }
                        </div>
                    )
                })
            )}

       </>
    );
}

export default Message;