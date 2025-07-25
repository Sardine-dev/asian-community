/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",            // Vite 프로젝트의 기본 HTML 파일
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 내 모든 JS/TS/JSX/TSX 파일
  ],
  theme: {
    extend: {
      colors: {
        irelandGreen: {
          DEFAULT: '#009A44',
          light: '#33B864', // 옅은 녹색
        },
        irelandOrange: {
          DEFAULT: '#FF8200',
          light: '#FFB266', // 옅은 주황색
        },
      },
    },
  },
  plugins: [],
};
