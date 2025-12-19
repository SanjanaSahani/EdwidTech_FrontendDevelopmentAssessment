import { useEffect, useState } from 'react';
import ImageUploader from './ImageUploader.jsx';

export default function BlogForm({ initialValues, onSubmit }) {
  const [values, setValues] = useState(
    initialValues || {
      title: '',
      description: '',
      category: '',
      author: '',
      imageUrl: '',
      publishDate: '',
      status: 'draft',
    }
  );

  useEffect(() => {
    if (initialValues) setValues(initialValues);
  }, [initialValues]);

  function update(field, value) {
    setValues(prev => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            value={values.title}
            onChange={e => update('title', e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Author</label>
          <input
            className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            value={values.author}
            onChange={e => update('author', e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-700">Description</label>
        <textarea
          className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm min-h-24"
          value={values.description}
          onChange={e => update('description', e.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Category</label>
          <select
            className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            value={values.category}
            onChange={e => update('category', e.target.value)}
          >
            <option value="">Select</option>
            <option value="tech">Tech</option>
            <option value="design">Design</option>
            <option value="product">Product</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Publish date</label>
          <input
            type="date"
            className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            value={values.publishDate ? values.publishDate.substring(0, 10) : ''}
            onChange={e => update('publishDate', e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Status</label>
          <select
            className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            value={values.status}
            onChange={e => update('status', e.target.value)}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-700">Image</label>
        <ImageUploader
          value={values.imageUrl}
          onChange={dataUrl => update('imageUrl', dataUrl)}
        />
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Save
        </button>
      </div>
    </form>
  );
}