import ReactDOM from 'react-dom';
import './SidebarPortal.css';

const SidebarPortal = ({ children }) => {
  const portalRoot = document.getElementById('sidebar-root');
  return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
};

export default SidebarPortal;