import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import Header from './components/header/Header';
import Content from "./components/content/Content";
import Footer from './components/footer/Footer';
import Catalog from "./components/catalog/Catalog";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
