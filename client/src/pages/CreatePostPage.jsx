

import React, { useState } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/posts', { title, content });
      navigate('/');
    } catch (err) {
      alert('Failed to create post');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Create Post</h2>
      <form onSubmit={handleCreate} className="space-y-4">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} rows={6} className="w-full p-2 border rounded"></textarea>
        <button className="bg-blue-700 text-white px-4 py-2 rounded w-full">Publish</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
