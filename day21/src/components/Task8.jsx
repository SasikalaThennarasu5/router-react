import { useDispatch } from 'react-redux';
import { increment } from '../redux/actions/counterActions';
const Task8 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Dispatch Actions</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};
export default Task8;
