import { Link } from 'react-router-dom';
import { useBlogs } from './useBlogs.js';

export default function DashboardRoute() {
  const { blogs, stats } = useBlogs();
  const latest = [...blogs]
    .filter(b => !b.deletedAt)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-md border border-slate-200 bg-white p-4">
          <p className="text-xs text-slate-500">Total blogs</p>
          <p className="mt-2 text-2xl font-semibold">{stats.total}</p>
        </div>
        <div className="rounded-md border border-slate-200 bg-white p-4">
          <p className="text-xs text-slate-500">Published</p>
          <p className="mt-2 text-2xl font-semibold text-emerald-600">
            {stats.published}
          </p>
        </div>
        <div className="rounded-md border border-slate-200 bg-white p-4">
          <p className="text-xs text-slate-500">Drafts</p>
          <p className="mt-2 text-2xl font-semibold text-amber-600">
            {stats.drafts}
          </p>
        </div>
      </div>

      <div className="rounded-md border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold">Recent blogs</h2>
          <Link
            to="/blogs"
            className="text-xs text-slate-600 hover:text-slate-900 font-medium"
          >
            View all
          </Link>
        </div>
        {latest.length === 0 ? (
          <p className="text-xs text-slate-500">No blogs yet.</p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {latest.map(b => (
              <li key={b.id} className="py-2 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">{b.title}</p>
                  <p className="text-[11px] text-slate-500">
                    {b.author || 'Unknown'} •{' '}
                    {b.publishDate
                      ? new Date(b.publishDate).toLocaleDateString()
                      : 'No date'}
                  </p>
                </div>
                <Link
                  to={`/blogs/${b.id}`}
                  className="text-xs text-slate-600 hover:text-slate-900 font-medium"
                >
                  Edit
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
