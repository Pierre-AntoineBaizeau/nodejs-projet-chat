import React, {useState} from 'react';
import '../style/BtnSubmit.css'

const BtnSubmit = () => {
    const [newMessage, setNewMessage] = useState(null)

    function sendMessages() {
        const object = { content: newMessage, authorId: 1 };
        fetch('http://localhost:3000/messages', {
            method: 'POST',
            body: JSON.stringify(object)
        })
            .then(res => res.json())
            .then(res => console.log(res));
    }

    return (
        <div className="inputSubmit">
            <input type="text" className="form-control" placeholder="Message" aria-label="Message"
                   aria-describedby="button-addon2" value={newMessage} onChange={e=> setNewMessage(e.target.value) } />
                <button className="btn btn-outline-secondary" type="button" onClick={sendMessages}  id="button-addon2">Envoyer</button>
        </div>
    );
}

export default BtnSubmit;