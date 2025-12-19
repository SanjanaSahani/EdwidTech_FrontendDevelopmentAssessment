export default function BlogPagination({
  page,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  return (
    <div className="flex flex-col gap-3 items-center justify-between sm:flex-row">
      <div className="text-xs text-slate-500">
        Page {page} of {totalPages} • {totalItems} items
      </div>
      <div className="flex items-center gap-3">
        <select
          className="rounded-md border border-slate-200 px-2 py-1 text-xs"
          value={pageSize}
          onChange={e => onPageSizeChange(Number(e.target.value))}
        >
          <option value={5}>5 / page</option>
          <option value={10}>10 / page</option>
        </select>
        <div className="inline-flex gap-1">
          <button
            className="rounded-md border border-slate-200 px-2 py-1 text-xs disabled:opacity-40"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
          >
            Prev
          </button>
          <button
            className="rounded-md border border-slate-200 px-2 py-1 text-xs disabled:opacity-40"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}