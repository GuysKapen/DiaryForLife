import { useState } from 'react'
import './App.scss'
import { Header, Feature, Content } from "./container/index";

import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Feature />
      <Content />
      <Content />
      <Content />
      {/* <About />
      <Work />
      <Skill />
      <Testimonial />
      <Footer /> */}
    </div>
  )
}

export default App
