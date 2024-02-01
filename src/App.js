import React from "react";
import "./App.css"
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Career from "./components/career/Career";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Posts from "./components/posts/Posts";



const App = () => {
  return(
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Career />
      <Portfolio />
      <Posts />
      <Contact />
    </main>
    </>
  )
}

export default App