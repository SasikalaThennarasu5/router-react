import ReactDOM from 'react-dom';

const PortalWrapper = ({ children, elementId }) => {
  const target = document.getElementById(elementId);
  return target ? ReactDOM.createPortal(children, target) : null;
};

export default PortalWrapper;
