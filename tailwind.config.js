/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",            // Vite 프로젝트의 기본 HTML 파일
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 내 모든 JS/TS/JSX/TSX 파일
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
