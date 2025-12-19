import { Link } from 'react-router-dom';
import { useBlogs } from './useBlogs.js';
import { usePagination } from './usePagination.js';
import BlogFilters from './Filters.jsx';
import BlogTable from './Table.jsx';
import BlogPagination from './BlogPagination.jsx';

export default function BlogsRoute() {
  const { filteredBlogs, filters, setFilters, deleteBlog, stats } = useBlogs();
  const { page, pageSize, setPage, setPageSize } = usePagination({ page: 1, pageSize: 10 });

  const start = (page - 1) * pageSize;
  const pageItems = filteredBlogs.slice(start, start + pageSize);

  return (
    <div className="space-y-4">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold">Blogs</h1>
          <p className="text-sm text-slate-500">
            {stats.visible} visible of {stats.total} total, {stats.published} published,{' '}
            {stats.drafts} drafts
          </p>
        </div>
        <Link
          to="/blogs/new"
          className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          New blog
        </Link>
      </header>

      <BlogFilters filters={filters} onChange={setFilters} />
      <BlogTable blogs={pageItems} onDelete={deleteBlog} />
      <BlogPagination
        page={page}
        pageSize={pageSize}
        totalItems={filteredBlogs.length}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
}
