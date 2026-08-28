import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import '../pages/AuthPages.css';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const apiUrl = import.meta.env.VITE_PATH_TO_SERVER + import.meta.env.VITE_PATH_TO_API + 'auth/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Невірний логін або пароль');
      }

      const data = await response.json();
      const access = data.Token || data.accessToken || data.token || '';
      const refresh = data.refreshToken || '';
      
      login(access, refresh, email);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Невідома помилка під час запиту');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{ marginTop: 0, textAlign: 'center', marginBottom: '24px', color: '#2c3e50', fontSize: '1.8rem' }}>Вхід</h2>
      {error && <div className="auth-error">{error}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="hello@example.com" />
        </div>
        <div className="form-group">
          <label>Пароль</label>
          <input type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
        </div>
        <button type="submit" disabled={isLoading} className="auth-btn">
          {isLoading ? 'Завантаження...' : 'Увійти'}
        </button>
      </form>
    </div>
  );
};
export default LoginModal;
