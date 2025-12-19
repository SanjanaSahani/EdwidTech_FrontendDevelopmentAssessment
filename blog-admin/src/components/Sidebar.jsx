import { NavLink } from 'react-router-dom';

const base =
  'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors';
const inactive = 'text-slate-500 hover:bg-slate-100';
const active = 'bg-slate-900 text-white';

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 flex-col border-r border-slate-200 bg-white">
      <div className="h-16 flex items-center px-4 border-b border-slate-200">
        <span className="text-lg font-semibold">Blog Admin</span>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
        >
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
        >
          <span>Blogs</span>
        </NavLink>
      </nav>
    </aside>
  );
}
