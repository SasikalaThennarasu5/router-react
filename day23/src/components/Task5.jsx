// Task5.jsx - Fetch API with Thunk (already covered in Project2)
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/userActions';

const Task5 = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Task 5: Fetch API with Thunk</h2>
      {loading ? <p>Loading...</p> : data.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
};

export default Task5;