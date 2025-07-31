import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/posts');
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch posts", err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post._id} className="p-4 border rounded hover:shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">by {post.author?.name || 'Unknown Author'}</p>
            <Link to={`/posts/${post._id}`} className="text-blue-500 mt-2 inline-block">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
