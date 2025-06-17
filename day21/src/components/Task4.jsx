import { increment, decrement } from '../redux/actions/counterActions';
const Task4 = () => (
  <div>
    <h2>Action Creators</h2>
    <pre>{JSON.stringify(increment())}</pre>
    <pre>{JSON.stringify(decrement())}</pre>
  </div>
);
export default Task4;
