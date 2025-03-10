import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <main className="flex-grow">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
