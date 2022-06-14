import { useState } from 'react'
import './App.scss'
import { Header} from "./container/index";

import { Navbar } from "./components";

function App() {
  return (
<div className="app">
      <Navbar />
      <Header />
      {/* <About />
      <Work />
      <Skill />
      <Testimonial />
      <Footer /> */}
    </div>
  )
}

export default App
