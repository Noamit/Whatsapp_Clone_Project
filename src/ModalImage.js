import React from 'react'
import { Modal } from 'react-bootstrap'
import './Chat.css'

function ModalImage({ modalSetter, fileToSend, kind }) {

    const kindOfile = ()=>{
        return (kind === "Video") ? (
            <video controls="controls" src={fileToSend} className='send_img'/>
        ) : (
            <img src={fileToSend} className='send_img' alt=''/>
        )
    }
    
    return (
        <div>
            <Modal.Header>
                <Modal.Title>
                    {kind}:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {kindOfile()}
                <button variant="secondary" onClick={()=>modalSetter(false)}>Close</button>
            </Modal.Body>
        </div>
    )
}

export default ModalImage