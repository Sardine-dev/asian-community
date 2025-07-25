import { useTranslation } from 'react-i18next';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from 'react';
import SignUpForm from "../components/SignUpForm";
// import { RegisterRequest, LoginRequest } from '../types/auth'; // 오류로 인해 주석 처리 또는 제거
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginForm),
    });
    // 응답 처리
  };

  return (
    <div className="min-vh-100 bg-light py-5" style={{ width: '100vw' }}>
      <div className="w-100 d-flex flex-column align-items-center">
        <h2 className="display-6 fw-bold mb-4 text-center w-100">Secondhand Market List</h2>
        <form className="row g-2 justify-content-center mb-4 w-100 px-3" style={{ maxWidth: 1200 }}>
          {/* ...폼 필드들 col-12 col-md-3 등... */}
        </form>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 w-100 px-3" style={{ maxWidth: 1200 }}>
          {/* ...카드들... */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
