import store from '../redux/store';
const Task3 = () => (
  <div>
    <h2>Redux Store Initialized</h2>
    <pre>{JSON.stringify(store.getState(), null, 2)}</pre>
  </div>
);
export default Task3;
