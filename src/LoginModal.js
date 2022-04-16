import React from 'react'

function LoginModal({ close_modal }) {
    return (
        <div id="LoginModal" className="modal" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Error</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <h5 class="modal-body">
                        please enter valid username and password
                    </h5>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { close_modal(false) }}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;