import React from 'react'

function RegisterModal({ close_modal , message}) {

    return (
        <div id="RegisterModal" className="modal" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Error</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <h5 class="modal-body">
                        {message}
                    </h5>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { close_modal(false) }}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal
