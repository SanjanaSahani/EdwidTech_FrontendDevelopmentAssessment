import { useLocation } from 'react-router-dom';

function getTitle(pathname) {
  if (pathname.startsWith('/blogs/new')) return 'Create blog';
  if (pathname.startsWith('/blogs/')) return 'Edit blog';
  if (pathname.startsWith('/blogs')) return 'Blogs';
  if (pathname.startsWith('/dashboard')) return 'Dashboard';
  return 'Blog Admin';
}

export default function Topbar() {
  const { pathname } = useLocation();

  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b border-slate-200 bg-white">
      <h2 className="text-sm font-medium text-slate-900">{getTitle(pathname)}</h2>
      <div className="flex items-center gap-3">
        <span className="hidden text-xs text-slate-500 sm:inline">Sanjana</span>
        <div>
          <img  className="h-8 w-8 rounded-full bg-slate-200" src="https://3.bp.blogspot.com/-I7Fj6oYhGl4/UBPmLnRcdZI/AAAAAAAAAC4/kA-9b2phekA/s1600/[wallcoo_com]_Flower_wallpaper_161.jpg" alt="admin" />
        </div>
      </div>
    </header>
  );
}
