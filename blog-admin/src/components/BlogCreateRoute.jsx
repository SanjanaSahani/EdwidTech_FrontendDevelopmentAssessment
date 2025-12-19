import { useNavigate } from 'react-router-dom';
import { useBlogs } from './useBlogs.js';
import BlogForm from './BlogForm.jsx';

export default function BlogCreateRoute() {
  const { addBlog } = useBlogs();
  const navigate = useNavigate();

  function handleSubmit(values) {
    addBlog(values);
    navigate('/blogs');
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">New blog</h1>
      <BlogForm onSubmit={handleSubmit} />
    </div>
  );
}
