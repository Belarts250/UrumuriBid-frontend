import type { ReactNode } from 'react';

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

const AuthLayout = ({ title, subtitle, children }: AuthLayoutProps) => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-visual">
          <div className="auth-overlay">
            <h1 className="auth-visual-title">{title}</h1>
            <p className="auth-visual-subtitle">{subtitle}</p>
          </div>
        </div>
        <div className="auth-form-side">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

