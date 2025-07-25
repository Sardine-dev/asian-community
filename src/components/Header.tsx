import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const headerBg = { backgroundColor: 'rgba(59,89,152,0.85)' }; // 연한 남색 + 투명도

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const location = useLocation();
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/market", label: "Market" },
    { to: "/board", label: "Community Board" },
    { to: "/event", label: "Events" },
  ];

  return (
    <header style={headerBg} className="text-white shadow-sm fixed top-0 left-0 w-100 z-50">
      {/* 상단: 로고 + 로그인/회원가입 */}
      <div className="container-fluid px-4 py-2 d-flex align-items-center justify-content-between">
        {/* 로고 */}
        <div className="fs-4 fw-bold">
          <Link to="/" className="text-white text-decoration-none">
            Asian Community
          </Link>
        </div>
        {/* 로그인/회원가입 버튼 */}
        <div className="d-flex align-items-center">
          <button
            className="ms-3 px-4 py-2 btn btn-outline-light"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
          <button
            className="ms-2 px-4 py-2 btn btn-success"
            onClick={() => setShowRegister(true)}
          >
            Sign Up
          </button>
        </div>
      </div>
      {/* 하단: 메뉴 */}
      <div className="container-fluid px-4 py-2 d-flex justify-content-end" style={{borderTop: 'none'}}>
        <nav className="d-flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-white text-decoration-none ${location.pathname === item.to ? "fw-bold text-warning" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* 로그인/회원가입 모달 */}
      {showLogin && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 z-50">
          <div className="bg-white rounded p-4 shadow-lg min-w-320">
            <h3 className="fs-5 fw-bold mb-3 text-dark">Login</h3>
            {/* 로그인 폼 자리 */}
            <input type="text" placeholder="Email" className="form-control mb-2" />
            <input type="password" placeholder="Password" className="form-control mb-3" />
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary" onClick={() => setShowLogin(false)}>Close</button>
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      )}
      {showRegister && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 z-50">
          <div className="bg-white rounded p-4 shadow-lg min-w-320">
            <h3 className="fs-5 fw-bold mb-3 text-dark">Sign Up</h3>
            {/* 회원가입 폼 자리 */}
            <input type="text" placeholder="Last Name" className="form-control mb-2" />
            <input type="text" placeholder="First Name" className="form-control mb-2" />
            <input type="text" placeholder="Email" className="form-control mb-2" />
            <input type="password" placeholder="Password" className="form-control mb-2" />
            <input type="password" placeholder="Confirm Password" className="form-control mb-3" />
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary" onClick={() => setShowRegister(false)}>Close</button>
              <button className="btn btn-success">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
