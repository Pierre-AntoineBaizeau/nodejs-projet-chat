import React, {useState} from 'react';
import '../style/BtnSubmit.css'

const BtnSubmit = () => {
    const [newMessage, setNewMessage] = useState('')

     function sendMessages (e, option) {
        console.log(option)
         fetch('http://localhost:3000/messages', {
             method: 'POST',
             body: JSON.stringify(option),
             headers: {
                 "Content-Type" : "application/json",
             }
         })
             .then((resp) => {
                 setNewMessage('')
             })

     }
    return (
        <div className="inputSubmit">
            <input type="text" className="form-control" placeholder="Message" aria-label="Message"
                   aria-describedby="button-addon2" value={newMessage} onChange={e=> setNewMessage(e.target.value) } />
            <button className="btn btn-outline-secondary" type="button" onClick={e => sendMessages(e, {"content": newMessage, "authorId": 1})}  id="button-addon2">Envoyer</button>
        </div>
    );
}

export default BtnSubmit;