import React from 'react';
import ModalPortal from '../Portals/ModalPortal';

const DeleteModal = ({ onClose, onConfirm }) => (
  <ModalPortal>
    <div className="modal fade show d-block " tabIndex="-1">
      <div className="modal-dialog modal-sm bg-secondary">
        <div className="modal-content p-5 bg-secondary text-white">
            <h5 className="modal-title">Confirm Delete</h5>
            <div className="ps-5 ms-5">
              <button type="button" className="btn-close ps-5 ms-5" onClick={onClose}></button>
            </div>
       
            <p>Are you sure you want to delete this post?</p>
  
            <button className="btn btn-warning mb-4" onClick={onClose}>Cancel</button>
            <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
      
        </div>
      </div>
    </div>
  </ModalPortal>
);

export default DeleteModal;
