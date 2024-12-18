import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{t('welcome')}</h1>
      <p className="mb-4">{t('description')}</p>

      <button 
        onClick={() => changeLanguage('ko')}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        한국어
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        English
      </button>
    </div>
  );
}

export default HomePage;
