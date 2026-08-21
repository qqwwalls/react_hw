import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { email, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/" className="logo">MyStore</Link>
        
        <nav className="header-nav">
          {email ? (
            <div className="user-menu">
              <span className="welcome-text">Welcome, <strong>{email}</strong></span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="nav-link">Вхід</Link>
              <Link to="/register" className="nav-link nav-link-primary">Реєстрація</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Header;
