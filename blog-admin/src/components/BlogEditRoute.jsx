import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlogs } from './useBlogs.js';
import { getBlogs } from './Storage.js';
import BlogForm from './BlogForm.jsx';

export default function BlogEditRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateBlog } = useBlogs();

  const blog = useMemo(() => {
    const all = getBlogs();
    return all.find(b => b.id === id);
  }, [id]);

  if (!blog) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Blog not found</h1>
        <button
          onClick={() => navigate('/blogs')}
          className="inline-flex items-center rounded-md border border-slate-200 px-3 py-2 text-sm"
        >
          Back to blogs
        </button>
      </div>
    );
  }

  function handleSubmit(values) {
    updateBlog(id, values);
    navigate('/blogs');
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Edit blog</h1>
      <BlogForm initialValues={blog} onSubmit={handleSubmit} />
    </div>
  );
}
