import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ContactErrorModal({close_modal_error , message}) {
    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => { close_modal_error(false) }}>Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
}

export default ContactErrorModal
