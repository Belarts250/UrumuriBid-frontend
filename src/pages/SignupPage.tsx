import AuthLayout from './AuthLayout';

const SignupPage = () => {
  return (
    <AuthLayout
      title="Create your Account"
      subtitle="Share your artwork and get projects!"
    >
      <form className="auth-form">
        <h2 className="auth-form-title">Sign Up</h2>

        <div className="auth-field-row">
          <div className="auth-field">
            <label htmlFor="firstName">First name</label>
            <input id="firstName" type="text" placeholder="First name" />
          </div>
          <div className="auth-field">
            <label htmlFor="lastName">Last name</label>
            <input id="lastName" type="text" placeholder="Last name" />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="Email address" />
        </div>

        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Password" />
        </div>

        <label className="auth-checkbox">
          <input type="checkbox" />
          <span>Accept Terms &amp; Conditions</span>
        </label>

        <button type="submit" className="auth-primary-btn">
          Join us
        </button>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <button type="button" className="auth-secondary-btn">
          Sign up with Google
        </button>
        <button type="button" className="auth-secondary-btn">
          Sign up with Apple
        </button>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;

