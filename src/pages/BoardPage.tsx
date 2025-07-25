import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const dummyPosts = [
  { id: 1, title: "Welcome to the Board!", author: "Admin", date: "2024-06-01", views: 123 },
  { id: 2, title: "Introduce Yourself", author: "Alice", date: "2024-06-02", views: 87 },
  { id: 3, title: "Looking for Study Group", author: "Bob", date: "2024-06-03", views: 45 },
  { id: 4, title: "Event Announcement", author: "Admin", date: "2024-06-04", views: 67 },
];

const BoardPage: React.FC = () => {
  return (
    <div className="min-vh-100 bg-light py-5" style={{ width: '100vw' }}>
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="bg-white rounded shadow p-4 w-100" style={{ maxWidth: 1000 }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="display-6 fw-bold mb-0">Community Board</h2>
            <button className="btn btn-success">Write Post</button>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered align-middle text-center mb-0">
              <thead className="table-light">
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                {dummyPosts.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-5 text-secondary">
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-2">
                          <rect width="48" height="48" rx="8" fill="#e5e7eb"/>
                          <path d="M16 32h16a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2H16a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" stroke="#9ca3af" strokeWidth="2"/>
                          <path d="M20 24h8M20 28h8" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span>No posts yet.</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  dummyPosts.map(post => (
                    <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>{post.author}</td>
                      <td>{post.date}</td>
                      <td>{post.views}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardPage; 