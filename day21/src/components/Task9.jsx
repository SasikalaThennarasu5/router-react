import { useSelector } from 'react-redux';
const Task9 = () => {
  const count = useSelector((state) => state.counter.count);
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      <h2>Combined Reducers</h2>
      <p>Counter: {count}</p>
      <p>Authenticated: {auth ? 'Yes' : 'No'}</p>
    </div>
  );
};
export default Task9;