import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Page1} from "./pages/page1.jsx";
import React from "react";
import {Page2} from "./pages/page2.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/page1" element={<Page1/>}/>
      <Route path="/page2" element={<Page2/>}/>
    </Routes>
  </BrowserRouter>)
