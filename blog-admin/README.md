# Blog Admin Dashboard  
Frontend Developer Assessment

## 📌 Overview
This project is a **production-style Blog Admin Dashboard** built using modern frontend engineering principles.  
It demonstrates **UI/UX capability, component architecture, state management, data persistence, and problem-solving skills** through a real-world admin workflow.


## 🎯 Assessment Goals
1. Build a structured and scalable frontend application following real-world engineering practices.
2. Design a clean, responsive, and user-friendly admin interface.
3. Demonstrate logical thinking through medium-level problem-solving tasks.
4. Apply proper component architecture, state handling, routing, and data flow.
5. Showcase understanding of modern frontend tools and optimization techniques.


## 🛠 Tech Stack
- React (Vite)
- CSS / Tailwind CSS
- LocalStorage for data persistence
- No external UI libraries (MUI, AntD, Bootstrap not used)


## ✨ Core Features
- Responsive Admin Layout (Sidebar + Topbar + Content)
- CRUD operations for Blogs
- Blog fields:
  - Title
  - Description
  - Category
  - Author
  - Image
  - Publish Date
  - Status
- Pagination (5 items per page)
- Search and Filters
- Image upload validation (JPG/PNG, max 1MB)
- Image preview before save
- Smooth user interactions with optimized state handling


## 🧠 Logic Tasks Implemented

### Medium Brain Task
- **Soft Delete with Auto Purge**  
  Blogs are soft-deleted and permanently removed based on defined conditions.

### Quick Logic Task
- **Persistent Pagination**  
  Pagination state persists across page reloads using LocalStorage.


## 📁 Folder Structure
```bash
src/
├── assets/
├── components/
│   ├── AdminLayout.jsx
│   ├── BlogCreateRoute.jsx
│   ├── BlogEditRoute.jsx
│   ├── BlogForm.jsx
│   ├── BlogPagination.jsx
│   ├── BlogsRoute.jsx
│   ├── Filters.jsx
│   ├── ImageUploader.jsx
│   ├── Route.jsx
│   ├── Sidebar.jsx
│   ├── StatusBadge.jsx
│   ├── Table.jsx
│   ├── Topbar.jsx
│   ├── Storage.js
│   ├── useBlogs.js
│   └── usePagination.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
````

---

## 🚀 Setup & Installation

Clone the repository:

```bash
git clone https://github.com/SanjanaSahani/EdwidTech_FrontendDevelopmentAssessment
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app in your browser


## 📌 Design & Engineering Highlights

* Modular and reusable component architecture
* Custom hooks for clean logic separation
* LocalStorage-based data persistence
* Fully responsive design (desktop & mobile)
* Controlled forms with validation
* Clean UX with clear user feedback
* Optimized state updates and minimized re-renders


## 👨‍💻 Author

**[Sanjana Sahani]**
Frontend Developer Assessment Project