const STORAGE_KEY = 'blog-admin:blogs';

function readRaw() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeRaw(blogs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
}

export function getBlogs() {
  return readRaw();
}

export function createBlog(blog) {
  const blogs = readRaw();
  blogs.push(blog);
  writeRaw(blogs);
}

export function updateBlog(id, patch) {
  const blogs = readRaw();
  const index = blogs.findIndex(b => b.id === id);
  if (index === -1) return;
  blogs[index] = { ...blogs[index], ...patch, updatedAt: new Date().toISOString() };
  writeRaw(blogs);
}

export function softDeleteBlog(id) {
  const blogs = readRaw();
  const index = blogs.findIndex(b => b.id === id);
  if (index === -1) return;
  blogs[index].deletedAt = new Date().toISOString();
  writeRaw(blogs);
}

export function purgeDeleted(thresholdDays = 30) {
  const now = Date.now();
  const ms = thresholdDays * 24 * 60 * 60 * 1000;
  const blogs = readRaw().filter(b => {
    if (!b.deletedAt) return true;
    return now - new Date(b.deletedAt).getTime() < ms;
  });
  writeRaw(blogs);
}
