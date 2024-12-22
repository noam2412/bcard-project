import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between">
        <h1>BCard Project</h1>
        <nav>
          <Link className="text-white mx-2" to="/">Home</Link>
          <Link className="text-white mx-2" to="/login">Login</Link>
          <Link className="text-white mx-2" to="/register">Register</Link>
          <Link className="text-white mx-2" to="/favorites">Favorites</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
