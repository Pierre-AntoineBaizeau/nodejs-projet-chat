import React from 'react';
import '../style/BtnSubmit.css'

const BtnSubmit = () => {
    return (
        <div className="inputSubmit">
            <input type="text" className="form-control" placeholder="Message" aria-label="Message"
                   aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Envoyer</button>
        </div>
    );
}

export default BtnSubmit;