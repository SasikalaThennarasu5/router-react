import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api';

const EditLead = () => {
  const { id } = useParams();
  const [lead, setLead] = useState({ name: '' });

  useEffect(() => {
    axios.get(`/leads/${id}`).then(res => setLead(res.data));
  }, [id]);

  const handleChange = (e) => {
    setLead({ ...lead, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/leads/${id}`, lead).then(() => alert('Updated!'));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Edit Lead #{id}</h2>
      <form onSubmit={handleSubmit}>
        <input value={lead.name} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditLead;