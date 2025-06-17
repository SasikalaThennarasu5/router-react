// --- Task13.jsx ---
import { useSelector, useDispatch } from 'react-redux';
import { setMessage } from '../redux/actions/messageActions';
const Task13 = () => {
  const message = useSelector((state) => state.message.message);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Global Message</h2>
      <p>{message}</p>
      <input type="text" onChange={(e) => dispatch(setMessage(e.target.value))} />
    </div>
  );
};
export default Task13;