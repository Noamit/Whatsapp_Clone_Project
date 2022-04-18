import React from 'react'
import { Button, Modal } from 'react-bootstrap'


function SideBarModal({ close_modal }) {
    return (
        <div className='allModal'>
            <Modal.Dialog className='modal-dialog'>
                <Modal.Header>
                    <Modal.Title>Add New Contant</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input type="text" id='newContantInput' className="form-control" placeholder="contact's identifier"></input>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => { close_modal(false) }}>Add</Button>
                    <Button variant="secondary" onClick={() => { close_modal(false) }}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </div>

    );
}
export default SideBarModal;

