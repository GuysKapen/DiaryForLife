import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App'
import './index.css'
import Home from './routes/Home';
import Policy from './routes/Policy';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='/' element={<Home />} />
        <Route path='/policy' element={<Policy />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
