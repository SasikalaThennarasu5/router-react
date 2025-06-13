import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Leads from './pages/Leads';
import EditLead from './pages/EditLead';
import Deals from './pages/Deals';
import Contacts from './pages/Contacts';
import Settings from './pages/Settings';
import withPermissions from './hoc/withPermissions';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/leads" element={<Leads />} />
        <Route path="/leads/:id/edit" element={withPermissions(EditLead, 'canEditLead')()} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;