import { NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, Briefcase, Search, Bell, Settings as SettingsIcon, Info, MessageSquare } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">UrumuriBid</div>
        <nav className="sidebar-nav">
          <NavLink to="/my-deals" className="sidebar-stat-link">
            <span className="stat-icon">$</span> Total Raised $73,157
          </NavLink>
          
          <NavLink to="/" className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}>
            <Home size={18} /> Home
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}>
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>
          <NavLink to="/my-deals" className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}>
             <Briefcase size={18} /> My Deals
          </NavLink>
          <NavLink to="/my-deals" className="sidebar-link">
            <Search size={18} /> Search & Categories
          </NavLink>
          <NavLink to="/my-deals" className="sidebar-link">
            <Bell size={18} /> Notifications
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}>
            <SettingsIcon size={18} /> Settings
          </NavLink>
          <NavLink to="/my-deals" className="sidebar-link">
            <Info size={18} /> FAQs
          </NavLink>
          <NavLink to="/my-deals" className="sidebar-link">
            <MessageSquare size={18} /> Activity Feed
          </NavLink>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Setting</h1>
          </div>
        </header>

        <section className="settings-tabs">
          <button className="settings-tab settings-tab-active">Edit Profile</button>
          <button className="settings-tab">Preferences</button>
          <button className="settings-tab">Security</button>
          <button className="settings-tab">Data Privacy</button>
        </section>

        <section className="settings-card">
          <div className="settings-header-row">
            <div className="settings-avatar-block">
              <div className="settings-avatar">
                <span>YK</span>
              </div>
              <button className="settings-avatar-button">@</button>
            </div>
            <div className="settings-name-row">
              <div className="settings-field">
                <label>First Name</label>
                <input defaultValue="Yoshikage" />
              </div>
              <div className="settings-field">
                <label>First Name</label>
                <input defaultValue="Kira" />
              </div>
            </div>
          </div>

          <div className="settings-field">
            <label>Email Address</label>
            <input defaultValue="YoshikageKira@gmail.com" />
          </div>

          <div className="settings-field">
            <label>Phone Number</label>
            <input defaultValue="+84 789 373 568" />
          </div>

          <h2 className="settings-section-title">Personal Address</h2>

          <div className="settings-two-col">
            <div className="settings-field">
              <label>Country</label>
              <input defaultValue="Vietnam" />
            </div>
            <div className="settings-field">
              <label>City</label>
              <input defaultValue="Hai Phong" />
            </div>
          </div>

          <div className="settings-two-col">
            <div className="settings-field">
              <label>Address</label>
              <input defaultValue="Hong Bang" />
            </div>
            <div className="settings-field">
              <label>Zip Code</label>
              <input defaultValue="180000" />
            </div>
          </div>

          <div className="settings-actions">
            <button className="settings-save-btn">Save Changes</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SettingsPage;

