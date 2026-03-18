import { NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, Briefcase, Search, Bell, Settings as SettingsIcon, Info, MessageSquare, ChevronDown } from 'lucide-react';

const DashboardPage = () => {
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
          <div className="dashboard-header-left">
            <h1 className="dashboard-title">Dashboard</h1>
            <p className="dashboard-subtitle">Quick insights into your auction activity.</p>
          </div>
          
          <div className="dashboard-header-right">
            <div className="search-container">
              <Search size={18} className="search-icon" />
              <input
                className="dashboard-search"
                placeholder="Search auctions, assets..."
              />
            </div>
            
            <div className="user-nav">
              <div className="notifications-badge">
                <Bell size={20} />
                <span className="badge-dot"></span>
              </div>
              <div className="user-profile-dropdown">
                <div className="avatar-circle">SJ</div>
                <div className="user-info">
                  <span className="user-name">Samuel J.</span>
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="dashboard-sub-header">
           <h2 className="section-main-title">Bids available</h2>
        </section>

        <section className="dashboard-row dashboard-row-top">
          <div className="card card-large">
            <div className="card-header">
              <h2>General Report</h2>
              <button className="pill-badge">Monthly</button>
            </div>
            <div className="card-body general-report">
              <div>
                <p className="muted-label">Total Transaction</p>
                <h3>$54,143</h3>
                <p className="muted-description">Across all active auctions this period.</p>
              </div>
              <ul className="stacked-metrics">
                <li>
                  <span>Open auctions</span>
                  <strong>43</strong>
                </li>
                <li>
                  <span>Registered bidders</span>
                  <strong>1,204</strong>
                </li>
                <li>
                  <span>Completed sales</span>
                  <strong>318</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="card card-medium">
            <div className="card-header">
              <h2>Visitors</h2>
              <button className="pill-badge pill-badge-ghost">View details</button>
            </div>
            <div className="card-body chart-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Visitors Chart" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <div className="card card-medium">
            <div className="card-header">
              <h2>Users by Age</h2>
            </div>
            <div className="card-body donut-placeholder">
              <div className="donut" />
              <ul className="legend">
                <li><span className="dot dot-blue" /> 18–24</li>
                <li><span className="dot dot-yellow" /> 25–34</li>
                <li><span className="dot dot-red" /> 35–44</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="dashboard-row">
          <div className="card card-wide">
            <div className="card-header">
              <h2>Official Store</h2>
            </div>
            <div className="card-body map-placeholder" style={{ padding: 0 }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127593.120658422!2d30.0076043!3d-1.9544485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf52b8728941727c2!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1710432000000!5m2!1sen!2s" 
                width="100%" 
                height="250" 
                style={{ border: 0, borderRadius: '0 0 15px 15px' }} 
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="card card-medium">
            <div className="card-header">
              <h2>Weekly Best Sellers</h2>
            </div>
            <div className="card-body list-table">
              <div className="list-row list-row-header">
                <span>Item</span>
                <span>Sold</span>
                <span>Status</span>
              </div>
              <div className="list-row">
                <span>Residential plot – Kigali</span>
                <span>28</span>
                <span className="status-pill status-active">Active</span>
              </div>
              <div className="list-row">
                <span>Office block – City center</span>
                <span>12</span>
                <span className="status-pill status-active">Active</span>
              </div>
              <div className="list-row">
                <span>Vehicle fleet</span>
                <span>7</span>
                <span className="status-pill status-inactive">Closed</span>
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-row">
          <div className="card card-medium">
            <div className="card-header">
              <h2>Weekly Top Products</h2>
            </div>
            <div className="card-body list-table">
              <div className="list-row list-row-header">
                <span>Asset name</span>
                <span>Stock</span>
                <span>Status</span>
              </div>
              <div className="list-row">
                <span>Luxury apartments</span>
                <span>22</span>
                <span className="status-pill status-active">Active</span>
              </div>
              <div className="list-row">
                <span>Commercial spaces</span>
                <span>9</span>
                <span className="status-pill status-active">Active</span>
              </div>
              <div className="list-row">
                <span>Vehicles</span>
                <span>53</span>
                <span className="status-pill status-inactive">Inactive</span>
              </div>
            </div>
          </div>

          <div className="card card-medium">
            <div className="card-header">
              <h2>Important Notes</h2>
            </div>
            <div className="card-body">
              <p className="muted-description">
                Keep bidders informed about schedule changes, new auction categories, and documentation requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="dashboard-row dashboard-row-bottom">
          <div className="card card-small">
            <div className="card-header">
              <h2>Schedule</h2>
            </div>
            <div className="card-body calendar-placeholder">
              <p>Monthly calendar with upcoming auctions.</p>
            </div>
          </div>

          <div className="card card-small">
            <div className="card-header">
              <h2>Recent Activities</h2>
            </div>
            <div className="card-body list-table">
              <div className="list-row">
                <span>New bidder registered</span>
                <span>2m ago</span>
              </div>
              <div className="list-row">
                <span>Auction extended</span>
                <span>18m ago</span>
              </div>
              <div className="list-row">
                <span>Asset verified</span>
                <span>1h ago</span>
              </div>
            </div>
          </div>

          <div className="card card-small">
            <div className="card-header">
              <h2>Transactions</h2>
            </div>
            <div className="card-body list-table">
              <div className="list-row">
                <span>Payment received</span>
                <span>+$4,500</span>
              </div>
              <div className="list-row">
                <span>Refund processed</span>
                <span>-$320</span>
              </div>
              <div className="list-row">
                <span>Deposit held</span>
                <span>+$800</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;

