import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.scss';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import Layout from './components/Layout/Layout';
import 'antd/dist/reset.css'; 
import CookiesPage from './pages/legal/CookiesPage';
import AvisoLegalPage from './pages/legal/AvisoLegalPage';
import PoliticaPrivacidadPage from './pages/legal/PoliticaPrivacidadPage';
import ArticlePage from './pages/ArticlePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="recursos" element={<BlogPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="aviso-legal" element={<AvisoLegalPage />} />
          <Route path="politica-privacidad" element={<PoliticaPrivacidadPage />} />
          <Route path="article/:id" element={<ArticlePage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);