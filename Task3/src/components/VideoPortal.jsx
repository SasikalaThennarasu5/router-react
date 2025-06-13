import ReactDOM from 'react-dom';
import './VideoPortal.css';

const VideoPortal = ({ children }) => {
  const portalRoot = document.getElementById('video-root');
  return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
};

export default VideoPortal;