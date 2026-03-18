import AuthLayout from './AuthLayout';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and redirect
    navigate('/dashboard');
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to your auctions dashboard."
    >
      <form className="auth-form" onSubmit={handleSignIn}>
        <h2 className="auth-form-title">Sign In</h2>

        <div className="auth-field">
          <label htmlFor="loginEmail">Email address</label>
          <input id="loginEmail" type="email" placeholder="Email address" />
        </div>

        <div className="auth-field">
          <label htmlFor="loginPassword">Password</label>
          <input id="loginPassword" type="password" placeholder="Password" />
        </div>

        <div className="auth-meta">
          <label className="auth-checkbox">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <button type="button" className="auth-link-button">
            Forgot password?
          </button>
        </div>

        <button type="submit" className="auth-primary-btn">
          Sign in
        </button>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <button type="button" className="auth-secondary-btn">
          Continue with Google
        </button>
        <button type="button" className="auth-secondary-btn">
          Continue with Apple
        </button>

        <div className="auth-sample-data" style={{ marginTop: '20px', padding: '15px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '0.85rem', textAlign: 'center' }}>
          <p style={{ margin: 0, color: '#64748b' }}><strong>Sample Data:</strong> admin@urumuribid.rw / password123</p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;

