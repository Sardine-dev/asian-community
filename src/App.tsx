import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MarketPage from "./pages/MarketPage";
import BoardPage from "./pages/BoardPage";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <main className="pt-16 pb-20">
        {/* pt-16: 헤더 높이만큼 패딩, pb-20: 풋터 높이만큼 패딩 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/event" element={<div>이벤트 페이지</div>} />
        </Routes>
      </main>

      {/* 풋터 */}
      <Footer />
    </Router>
  );
};

export default App;
