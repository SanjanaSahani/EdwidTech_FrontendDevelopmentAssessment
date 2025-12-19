import { useEffect, useState } from 'react';

const KEY = 'blog-admin:pagination';

export function usePagination(initial = { page: 1, pageSize: 10 }) {
  const [state, setState] = useState(() => {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initial;
    try {
      return JSON.parse(raw);
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state));
  }, [state]);

  function setPage(page) {
    setState(prev => ({ ...prev, page }));
  }

  function setPageSize(pageSize) {
    setState(prev => ({ ...prev, pageSize, page: 1 }));
  }

  return { page: state.page, pageSize: state.pageSize, setPage, setPageSize };
}
