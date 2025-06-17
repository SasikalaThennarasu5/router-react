import { useSelector } from 'react-redux';
const Task7 = () => {
  const count = useSelector((state) => state.counter.count);
  return <h2>Count: {count}</h2>;
};
export default Task7;
