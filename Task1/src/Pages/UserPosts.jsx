import React from 'react';
import PostCard from '../Components/PostCard';

const UserPosts = ({ data }) => (
  <div className="container">
    <h3>User's Posts</h3>
    {data.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

export default UserPosts;