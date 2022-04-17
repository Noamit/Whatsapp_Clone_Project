import React from 'react'
import { Link } from 'react-router-dom';

function RegisterSuccessModal() {
    return (
        <div>
            <div id="RegisterSuccessModal" className="modal" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thank you</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <h5 class="modal-body">
                            Registration to NTM completed successfully
                        </h5>
                        <div class="modal-footer">
                            <Link to="/chat">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ok</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterSuccessModal
