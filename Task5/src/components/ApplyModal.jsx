import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/ApplyModal.css';

function ApplyModal({ onClose, jobTitle }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Apply for {jobTitle}</h2>
        <p>Upload your resume and submit your application.</p>
        <input type="file" accept=".pdf,.doc,.docx" />
        <br /><br />
        <button onClick={() => alert('Application submitted!')}>Submit</button>
        <button onClick={onClose} style={{ marginLeft: '1rem' }}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default ApplyModal;
