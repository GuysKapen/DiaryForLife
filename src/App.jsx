import './App.scss'
import { Header, Feature, Content } from "./container/index";

import { Navbar, Footer } from "./components";
import { images } from "./constants"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
