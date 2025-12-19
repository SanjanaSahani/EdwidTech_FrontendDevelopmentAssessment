import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge.jsx';

export default function BlogTable({ blogs, onDelete }) {
  if (!blogs.length) {
    return (
      <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
        No blogs found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3 hidden md:table-cell">Category</th>
            <th className="px-4 py-3 hidden md:table-cell">Author</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 hidden lg:table-cell">Publish date</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id} className="border-b border-slate-100 last:border-0">
              <td className="px-4 py-3">
                <div className="font-medium text-slate-900">{blog.title}</div>
                <div className="text-xs text-slate-500 line-clamp-1">{blog.description}</div>
              </td>
              <td className="px-4 py-3 text-xs text-slate-600 hidden md:table-cell">
                {blog.category || '—'}
              </td>
              <td className="px-4 py-3 text-xs text-slate-600 hidden md:table-cell">
                {blog.author || '—'}
              </td>
              <td className="px-4 py-3">
                <StatusBadge status={blog.status} />
              </td>
              <td className="px-4 py-3 text-xs text-slate-500 hidden lg:table-cell">
                {blog.publishDate ? new Date(blog.publishDate).toLocaleDateString() : '—'}
              </td>
              <td className="px-4 py-3 text-right text-xs">
                <div className="inline-flex items-center gap-2">
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="text-slate-700 hover:text-slate-900 font-medium"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => onDelete(blog.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}