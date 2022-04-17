import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function RegisterSuccessModal(close_modal) {

    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Thank you</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Registration to NTM completed successfully</p>
            </Modal.Body>

            <Modal.Footer>
                <Link to="/chat"><Button variant="secondary">OK</Button></Link>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default RegisterSuccessModal
