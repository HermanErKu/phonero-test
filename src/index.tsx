import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Index from './Pages/Index';
import ApiPage from './Pages/ApiPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.error("Failed to find the root element");
}