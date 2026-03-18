import { NavLink } from 'react-router-dom';
import { Heart, Search, Bell, Settings as SettingsIcon, Home, LayoutDashboard, Briefcase, Info, MessageSquare } from 'lucide-react';

const dealItems = [
  {
    id: '2010170',
    title: 'Thai Island Paradise - 7 nights for 10 people',
    price: '$57,775',
    bidder: 'Ed D',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '8MB141',
    title: 'Lake Tahoe Splendid Alpine Setting - Nevada',
    price: '$2,230',
    bidder: 'Be the first to bid',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3003',
    title: 'Private Yacht Cruise and Seafood Platter - For 4',
    price: '$1,010',
    bidder: 'Cathy Taylor',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ec96a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3007',
    title: 'Private Yacht Hire - for up to 35 guests',
    price: '$3,020',
    bidder: 'Cathy Taylor',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3010',
    title: 'Turbo Rally Drive - 9 Laps for 1 Person (NSW)',
    price: '$400',
    bidder: 'Ed D',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '8006',
    title: 'Private Bali Getaway - 7 Nights for 8 People',
    price: '$4,520',
    bidder: 'Be the first to bid',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3012',
    title: 'Canapé Function - for 25 People',
    price: '$2,750',
    bidder: 'Be the first to bid',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'W8013',
    title: 'Tennessee Whiskey Adventure for 2, including 3 Nights Stay',
    price: '$2,300',
    bidder: 'Be the first to bid',
    image: 'https://images.unsplash.com/photo-1527281400828-ac737aefa5ad?auto=format&fit=crop&w=400&q=80'
  }
];

const MyDealsPage = () => {
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

      <main className="dashboard-main dashboard-deals-main">
        <header className="dashboard-header" style={{ marginBottom: '20px' }}>
          <h1 className="dashboard-title">Available auctions</h1>
        </header>
        <div className="deals-grid">
          {dealItems.map((item) => (
            <div key={item.id} className="deal-card">
              <div className="deal-image-wrapper">
                <img src={item.image} alt={item.title} className="deal-image" />
              </div>
              <div className="deal-info">
                <h3 className="deal-title">{item.title}</h3>
                <div className="deal-price-row">
                  <span className="deal-price">{item.price}</span>
                  <Heart size={16} className="deal-heart" />
                </div>
                <p className="deal-bidder">{item.bidder}</p>
                <p className="deal-id">{item.id}</p>
                <NavLink to={`/product/${item.id}`} className="detail-btn">See Detail</NavLink>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyDealsPage;
