import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'


function ModalRecord({ modalSetter, messageSetter, time }) {


    function Record() {
        let [myRecored, isRecording, startRecording, stopRecording] = Recorder();
        
        
        return (
            <>
                <audio src={myRecored} controls />
                <button onClick={startRecording} disabled={isRecording}>
                    start recording
                </button>
                <button onClick={stopRecording} disabled={!isRecording}>
                    stop recording
                </button>
            </>
        )

    }

    function Recorder() {
        const [audioURL, setAudioURL] = useState("");
        const [isRecording, setIsRecording] = useState(false);
        const [recorder, setRecorder] = useState(null);

        useEffect(() => {
            // Lazily obtain recorder first time we're recording.
            if (recorder === null) {
                if (isRecording) {
                    requestRecorder().then(setRecorder, console.error);
                }
                return;
            }

            // Manage recorder state.
            if (isRecording) {
                recorder.start();
            } else {
                recorder.stop();
            }

            // Obtain the audio when ready.
            const handleData = e => {
                setAudioURL(URL.createObjectURL(e.data));
                messageSetter(<audio src={URL.createObjectURL(e.data)} controls />)   
            };

            recorder.addEventListener("dataavailable", handleData);
            
            return () => recorder.removeEventListener("dataavailable", handleData);
        }, [recorder, isRecording]);

        const startRecording = () => {
            setIsRecording(true);
        };

        const stopRecording = () => {
            setIsRecording(false);
        };

        return [audioURL, isRecording, startRecording, stopRecording];
    }

    async function requestRecorder() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        return new MediaRecorder(stream);
    }

    return (
        <div>
            <Modal.Header>
                <Modal.Title>
                    Recording
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Record()}
                <button variant="secondary" onClick={() => { modalSetter(false) }}>Close</button>
            </Modal.Body>
        </div>
    )
}

export default ModalRecord;