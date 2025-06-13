import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarPortal from '../components/SidebarPortal';

const Leads = () => {
  const [selectedLead, setSelectedLead] = useState(null);

  const leads = [
    { id: 1, name: "Acme Corp" },
    { id: 2, name: "Beta Inc" }
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Leads</h2>
      {leads.map(lead => (
        <div key={lead.id} style={{ marginBottom: '1rem' }}>
          <strong>{lead.name}</strong>
          <Link to={`/leads/${lead.id}/edit`} style={{ marginLeft: '1rem' }}>Edit</Link>
          <button onClick={() => setSelectedLead(lead)} style={{ marginLeft: '1rem' }}>
            Quick View
          </button>
        </div>
      ))}
      {selectedLead && (
        <SidebarPortal>
          <div className="sidebar-overlay">
            <h3>{selectedLead.name}</h3>
            <p>ID: {selectedLead.id}</p>
            <button onClick={() => setSelectedLead(null)}>Close</button>
          </div>
        </SidebarPortal>
      )}
    </div>
  );
};

export default Leads;