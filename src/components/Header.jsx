import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { authentication } from './authentication';
import axios from 'axios';
import './Header.css';

function Header() {
  const { isAuthenticated, logout } = useContext(authentication);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
      
    logout();

    axios.post('http://127.0.0.1:8000/logout', {
        withCredentials: true, 
    })
    .then(function (response) {
      console.log(response.data);
      navigate('/');
    })
    .catch(function (error) {
        console.log(error.response.data);
        alert("Logout failed");
    });
  };


  return (
    <header>
      <div>
        <h1>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            MangatoRead
          </Link>
        </h1>
      </div>

      <div>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/items">Mangas</Link>
        </h2>
        <h2>
          <Link to="/mangatable">My List</Link>
        </h2>
      </div>

      <div>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="logout-button">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        ) : (
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
