import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import dataBase from './DataBase';


function SideBarModal({ close_modal, setterContactsArray, contactsArray, errorModalSetter, errorMessage}) {

    const [contactInfo, setContactInfo] = useState('');
    

    const validNewContact = () => {
        if(dataBase.usersDataBase.has(contactInfo) && !contactsArray.includes(contactInfo)) {
            setterContactsArray( arr => [...arr, contactInfo])
        } else if(dataBase.usersDataBase.has(contactInfo)) {
            errorMessage('Chat Already Open')
            errorModalSetter(() => true)
        } else {
            errorMessage('User Does Not Exsist')
            errorModalSetter(() => true)
        }
    }

    return (
        <div className='leftModal'>
            <Modal.Dialog className='modal-dialog'>
                <Modal.Header>
                    <Modal.Title>Add New Contant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" id='newContantInput' className="form-control" placeholder="contact's identifier" value={contactInfo}
                    onChange={(e)=>{setContactInfo(e.target.value)}}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => {close_modal(false); validNewContact();}}>Add</Button>

                    <Button variant="secondary" onClick={() => { close_modal(false); }}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </div>
    );
}
export default SideBarModal;

