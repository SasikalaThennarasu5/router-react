import counterReducer from '../redux/reducers/counterReducer';
const Task5 = () => {
  const initialState = { count: 0 };
  const result = counterReducer(initialState, { type: 'INCREMENT' });
  return (
    <div>
      <h2>Reducer Output</h2>
      <pre>{JSON.stringify(result)}</pre>
    </div>
  );
};
export default Task5;