import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from '../redux/actions/jokeActions';

const Project4 = () => {
  const dispatch = useDispatch();

  const jokeState = useSelector(state => state.joke || {});
  const { loading, data, error } = jokeState;

  useEffect(() => {
    dispatch(fetchJoke());
  }, [dispatch]);

  return (
    <div>
      <h2>Project 4: Joke Generator</h2>
      {loading && <p>Loading joke...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && !loading && !error && (
        <p><strong>{data}</strong></p>
      )}
      <button onClick={() => dispatch(fetchJoke())}>New Joke</button>
    </div>
  );
};

export default Project4;
