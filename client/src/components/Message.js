import React, {useState} from 'react';
import './style/Message'

const Message = () => {
    const [myMessage, setMyMessage] = useState(false)

    return (
        <div className={myMessage ? "blocMyMessage" : ""}>
            {
                myMessage ?
                    (
                        <div>
                            <p>Moi le 21/07</p>
                            <span className="myMessage message">Mon message</span>
                        </div>
                    ) : (
                        <>
                            <p>Julia le 21/07</p>
                            <p className="message">
                                <span>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</span>
                            </p>
                        </>
                    )
            }
        </div>
    );
}

export default Message;