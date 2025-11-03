import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import i18n from '../../i18n';

export const Footer = () => {
  const { t } = useTranslation('layout');
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ro' : 'en';
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <footer className="hidden lg:flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-white text-sm text-gray-500">
      <p>© 2024 Expert Windows System</p>
      <button
        onClick={toggleLanguage}
        className="px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {currentLang === 'en' ? 'RO' : 'EN'}
      </button>
    </footer>
  );
};
