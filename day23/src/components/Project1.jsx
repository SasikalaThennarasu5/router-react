import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../redux/actions/quoteActions';

const Project1 = () => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(state => state.quote || {});

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  return (
    <div>
      <h2>Project 1: Random Quote Generator</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && data.length > 0 && (
        <blockquote>
          <p>"{data[0].content}"</p>
          <footer>— {data[0].author}</footer>
        </blockquote>
      )}
    </div>
  );
};

export default Project1;
