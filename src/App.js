import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Authorization from './components/Page/Authorization';
// import ChatPage from './pages/ChatPage';
// import Navbar from './components/Navbar';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path="*" element={<h1>404 - Страница не найдена</h1>} />
      </Routes>
    </StyledEngineProvider>
  );
};

export default App;
