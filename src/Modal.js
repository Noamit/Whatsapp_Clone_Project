import React from 'react'

function Modal({close_modal}) {
  return (
    <div id="mymodal"className="modal" >
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Add New Contant</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="text" id='newContantInput'className="form-control" placeholder="contact's identifier"></input>
            </div>
            <div class="modal-footer">
                <button type="button" className="btn btn-primary">Add</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=> {close_modal(false)}}>Close</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Modal