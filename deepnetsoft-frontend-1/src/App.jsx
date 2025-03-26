import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";

import MenuSection from "./components/MenuSection/MenuSection";
import MenuForm from "./components/MenuForm";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Title />
                </div>

                <div id="menu">
                  <MenuSection />
                </div>

                <div id="contact">
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="/create-menu" element={<MenuForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

