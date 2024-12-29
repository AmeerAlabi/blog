'use client';

import { useState } from 'react';
import api from '@/app/utils/api'; // Axios instance
import { useRouter } from 'next/navigation'; // For navigation after submission

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const router = useRouter(); // Navigation after success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      await api.post('/posts', { title, content });
      setSuccess(true);
      setTitle('');
      setContent('');
      setTimeout(() => {
        router.push('/posts'); // Redirect to posts list
      }, 2000); // Redirect after 2 seconds
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating post');
    }
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      {success && <p style={{ color: 'green' }}>Post created successfully!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post content"
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
