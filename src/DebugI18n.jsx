// src/components/DebugI18n.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const DebugI18n = () => {
  const { t, i18n } = useTranslation();
  
  console.log('DEBUG i18n:', {
    currentLanguage: i18n.language,
    isInitialized: i18n.isInitialized,
    languages: i18n.languages,
    store: i18n.store?.data
  });

  return (
    <div style={{ display: 'none' }}>
      <p>Current language: {i18n.language}</p>
      <p>Is initialized: {i18n.isInitialized ? 'Yes' : 'No'}</p>
      <p>Translation test: {t('Home')}</p>
    </div>
  );
};

export default DebugI18n;