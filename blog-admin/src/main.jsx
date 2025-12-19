import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

import AdminLayout from './components/AdminLayout.jsx';
import DashboardRoute from './components/Route.jsx';
import BlogsRoute from './components/BlogsRoute.jsx';
import BlogCreateRoute from './components/BlogCreateRoute.jsx';
import BlogEditRoute from './components/BlogEditRoute.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to="blogs" replace />} />
          <Route path="dashboard" element={<DashboardRoute />} />
          <Route path="blogs" element={<BlogsRoute />} />
          <Route path="blogs/new" element={<BlogCreateRoute />} />
          <Route path="blogs/:id" element={<BlogEditRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
