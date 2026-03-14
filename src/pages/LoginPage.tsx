import AuthLayout from './AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to your auctions dashboard."
    >
      <form className="auth-form">
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
      </form>
    </AuthLayout>
  );
};

export default LoginPage;

