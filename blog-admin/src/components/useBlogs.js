import { useEffect, useMemo, useState } from 'react';
import {
  getBlogs,
  createBlog,
  updateBlog as updateBlogStorage,
  softDeleteBlog,
  purgeDeleted,
} from './Storage';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    status: 'all',
  });

  useEffect(() => {
    purgeDeleted();
    setBlogs(getBlogs());
  }, []);

  function refresh() {
    setBlogs(getBlogs());
  }

  function addBlog(data) {
    const now = new Date().toISOString();
    createBlog({
      ...data,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    });
    refresh();
  }

  function updateBlog(id, patch) {
    updateBlogStorage(id, patch);
    refresh();
  }

  function deleteBlog(id) {
    softDeleteBlog(id);
    refresh();
  }

  const filteredBlogs = useMemo(
    () =>
      blogs.filter(b => {
        if (b.deletedAt) return false;
        if (filters.status !== 'all' && b.status !== filters.status) return false;
        if (filters.category !== 'all' && b.category !== filters.category) return false;
        const text = `${b.title} ${b.description} ${b.author} ${b.category}`.toLowerCase();
        if (filters.search && !text.includes(filters.search.toLowerCase())) return false;
        return true;
      }),
    [blogs, filters]
  );

  const stats = useMemo(
    () => ({
      total: blogs.length,
      visible: filteredBlogs.length,
      published: blogs.filter(b => b.status === 'published' && !b.deletedAt).length,
      drafts: blogs.filter(b => b.status === 'draft' && !b.deletedAt).length,
    }),
    [blogs, filteredBlogs]
  );

  return {
    blogs,
    filteredBlogs,
    filters,
    setFilters,
    addBlog,
    updateBlog,
    deleteBlog,
    refresh,
    stats,
  };
}
