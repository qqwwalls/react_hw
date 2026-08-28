import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Modal from './modals/Modal';
import LoginModal from './modals/LoginModal';
import RegisterModal from './modals/RegisterModal';
import './Header.css';

const Header = () => {
  const { email, logout } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLogout = () => {
    logout();
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
              <button className="nav-link" onClick={() => setIsLoginOpen(true)}>Вхід</button>
              <button className="nav-link nav-link-primary" onClick={() => setIsRegisterOpen(true)}>Реєстрація</button>
            </div>
          )}
        </nav>
      </div>

      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginModal onClose={() => setIsLoginOpen(false)} />
      </Modal>

      <Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}>
        <RegisterModal onClose={() => setIsRegisterOpen(false)} />
      </Modal>
    </header>
  );
};
export default Header;
