const reducerWithInitialFromProps = (state = {}, action, props = { start: 10 }) => {
  if (!state.init) return { count: props.start, init: true };
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
const Task10 = () => {
  const result = reducerWithInitialFromProps(undefined, {}, { start: 10 });
  return (
    <div>
      <h2>Initial State from Props</h2>
      <pre>{JSON.stringify(result)}</pre>
    </div>
  );
};
export default Task10;