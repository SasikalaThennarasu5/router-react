import React, { useState } from 'react';
import axiosConfig from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../Components/DeleteModal';

const PostPage = ({ data }) => {
  const [post, setPost] = useState(data);
  const [showDelete, setShowDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(data.title);
  const [editedBody, setEditedBody] = useState(data.body);
  const navigate = useNavigate();

  const handleEdit = async () => {
    const updatedPost = {
      ...post,
      title: editedTitle,
      body: editedBody
    };
    
    try {
      await axiosConfig.put(`/posts/${post.id}`, updatedPost);
      setPost(updatedPost);
      setIsEditing(false);
    } catch (err) {
      alert('Failed to update post');
    }
  };

  const handleDelete = async () => {
    try {
      await axiosConfig.delete(`/posts/${post.id}`);
      setShowDelete(false);
      navigate(`/${post.userId}/posts`);
    } catch (err) {
      alert('Failed to delete post');
    }
  };

  return (
    <div className="container pt-5 mt-5">
      {isEditing ? (
        <div className="mb-4">
          <input
            type="text"
            className="form-control mb-2"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
          />
          <button className="btn me-2" onClick={handleEdit}>
            Save
          </button>
          <button className="btn " onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}

      <div className="mt-4">
        
        <button className="btn btn-primary" onClick={() => setShowDelete(true)}>
          Delete
        </button>
      </div>

      {showDelete && (
        <DeleteModal onClose={() => setShowDelete(false)} onConfirm={handleDelete} />
      )}
    </div>
  );
};

export default PostPage;