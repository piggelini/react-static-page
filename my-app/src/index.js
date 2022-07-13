import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <App />

)