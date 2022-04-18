import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import dataBase from './DataBase';

function SideBarModal({ close_modal, setterContactsArray, contactsArray}) {

    const [contactInfo, setContactInfo] = useState('');

    const validNewContact = () => {
        if(dataBase.usersDataBase.has(contactInfo) && !contactsArray.includes(contactInfo)) {
            setterContactsArray( arr => [...arr, contactInfo])
        } else {
            console.log("no")
        }
    }

    return (
        <div className='allModal'>
            <Modal.Dialog className='modal-dialog'>
                <Modal.Header>
                    <Modal.Title>Add New Contant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" id='newContantInput' className="form-control" placeholder="contact's identifier" value={contactInfo}
                    onChange={(e)=>{setContactInfo(e.target.value)}}/>
                </Modal.Body>

                <Modal.Footer>
                    <button onClick={() => { validNewContact(); close_modal(false); }}>Add</button>

                    <button variant="secondary" onClick={() => { close_modal(false); }}>Close</button>
                </Modal.Footer>

            </Modal.Dialog>
            </div>

    );
}
export default SideBarModal;

