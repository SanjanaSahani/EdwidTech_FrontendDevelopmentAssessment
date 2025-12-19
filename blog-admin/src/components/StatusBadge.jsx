export default function StatusBadge({ status }) {
  const isPublished = status === 'published';
  const bg = isPublished ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700';
  const dot = isPublished ? 'bg-emerald-500' : 'bg-amber-500';

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${bg}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {isPublished ? 'Published' : 'Draft'}
    </span>
  );
}