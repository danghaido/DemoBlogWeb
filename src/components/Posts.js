import { Outlet } from 'react-router-dom';

export default function Posts() {
  return (
    <div className="page-container">
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}