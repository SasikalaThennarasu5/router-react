// Mini Project 4: Like/Dislike System
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Project4 = () => {
  const { likes, dislikes } = useSelector((state) => state.reactions);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Mini Project 4: Like/Dislike System</h2>
      <p>Likes: {likes} | Dislikes: {dislikes}</p>
      <button onClick={() => dispatch({ type: 'LIKE' })}>Like</button>
      <button onClick={() => dispatch({ type: 'DISLIKE' })}>Dislike</button>
    </div>
  );
};

export default Project4;
