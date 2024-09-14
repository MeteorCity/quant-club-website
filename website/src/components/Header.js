import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header>
        <div onClick={handleClick} className="logo">RQFC</div>
        <Link to="/about-us" className="link">About Us</Link>
        <Link to="/events" className="link">Events</Link>
        <Link to="/join" className="link">Join</Link>
    </header>
  )
}

export default Header