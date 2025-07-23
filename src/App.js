import HomePage from 'pages/HomePage';
import './App.css';
import React from 'react'
import ProjectPage from 'pages/ProjectPage';
import { Route, Routes } from 'react-router-dom';
import PublicPage from 'pages/PublicPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicPage />} >
        <Route path="" element={<HomePage />} />
        <Route path="project/:name" element={<ProjectPage />} />
      </Route>
    </Routes>
  );
}

export default App;
