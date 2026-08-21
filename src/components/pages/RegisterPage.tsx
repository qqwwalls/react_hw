import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './AuthPages.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== repeatPassword) {
      setError('Паролі не співпадають!');
      return;
    }

    setIsLoading(true);
    const apiUrl = import.meta.env.VITE_PATH_TO_SERVER + import.meta.env.VITE_PATH_TO_API + 'auth/register';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Помилка реєстрації. Перевірте введені дані.');
      }

      const data = await response.json();
      const access = data.Token || data.accessToken || data.token || '';
      const refresh = data.refreshToken || '';
      
      login(access, refresh, email);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Невідома помилка під час запиту');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Реєстрація</h2>
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
          <div className="form-group">
            <label>Повторіть пароль</label>
            <input type="password" required value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <button type="submit" disabled={isLoading} className="auth-btn">
            {isLoading ? 'Завантаження...' : 'Зареєструватися'}
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
