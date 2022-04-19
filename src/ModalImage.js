import React from 'react'
import { Modal } from 'react-bootstrap'
import './Chat.css'

function ModalImage({ modalSetter, image }) {
    
    return (
        <div>
            <Modal.Header>
                <Modal.Title>
                    Image:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={image} className='send_img' alt=''/>
                <button variant="secondary" onClick={() => { modalSetter(false) }}>Close</button>
            </Modal.Body>
        </div>
    )
}

export default ModalImage