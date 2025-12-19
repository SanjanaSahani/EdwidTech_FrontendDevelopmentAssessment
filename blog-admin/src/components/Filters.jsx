export default function BlogFilters({ filters, onChange }) {
  function update(key, value) {
    onChange({ ...filters, [key]: value });
  }

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between bg-white p-3 rounded-md border border-slate-200">
      <input
        type="search"
        className="w-full md:max-w-xs rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
        placeholder="Search by title, author, category..."
        value={filters.search}
        onChange={e => update('search', e.target.value)}
      />
      <div className="flex gap-2">
        <select
          className="rounded-md border border-slate-200 px-3 py-2 text-sm"
          value={filters.category}
          onChange={e => update('category', e.target.value)}
        >
          <option value="all">All categories</option>
          <option value="tech">Tech</option>
          <option value="design">Design</option>
          <option value="product">Product</option>
        </select>
        <select
          className="rounded-md border border-slate-200 px-3 py-2 text-sm"
          value={filters.status}
          onChange={e => update('status', e.target.value)}
        >
          <option value="all">All statuses</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>
    </div>
  );
}