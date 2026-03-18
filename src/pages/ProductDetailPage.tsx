import { useState } from 'react';
import { NavLink, useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Share2, ShieldCheck, Home, LayoutDashboard, Briefcase, Bell, Settings as SettingsIcon, Info, MessageSquare, Search } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  // Mock data - in a real app this would be fetched based on 'id'
  const product = {
    id: id || '2010170',
    title: 'Thai Island Paradise - 7 nights for 10 people',
    price: '$57,775',
    description: 'Experience pure luxury in this secluded island paradise. This package includes a 7-night stay for up to 10 guests in a breathtaking beachfront villa. Enjoy private chef services, daily spa treatments, and exclusive access to a private yacht for island hopping. Perfect for large families or groups looking for an unforgettable tropical escape.',
    images: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506929113675-80af62391038?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Private Beach Access', 'Infinity Pool', 'Concierge Service', 'Blockchain Secure Bidding']
  };

  const nextImage = () => setActiveImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);

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
        <header className="dashboard-header" style={{ marginBottom: '30px' }}>
          <div>
            <Link to="/my-deals" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', textDecoration: 'none', marginBottom: '15px', fontSize: '0.9rem' }}>
              <ChevronLeft size={16} /> Back to My Deals
            </Link>
            <h1 className="dashboard-title">Product Details</h1>
          </div>
        </header>

        <div className="product-detail-container">
          <div className="product-gallery">
            <div style={{ position: 'relative' }}>
               <img src={product.images[activeImage]} alt={product.title} className="slider-main-image" />
               <button onClick={prevImage} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <ChevronLeft size={24} />
               </button>
               <button onClick={nextImage} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <ChevronRight size={24} />
               </button>
            </div>
            
            <div className="slider-thumbnails">
              {product.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt="" 
                  className={`thumbnail ${idx === activeImage ? 'active' : ''}`} 
                  onClick={() => setActiveImage(idx)}
                />
              ))}
            </div>
          </div>

          <div className="product-info-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h1>{product.title}</h1>
              <div style={{ display: 'flex', gap: '15px' }}>
                <button style={{ border: 'none', background: '#f8fafc', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}><Heart size={20} color="#94a3b8" /></button>
                <button style={{ border: 'none', background: '#f8fafc', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}><Share2 size={20} color="#94a3b8" /></button>
              </div>
            </div>
            
            <div className="product-price">{product.price}</div>
            
            <h3>Description</h3>
            <p className="product-description">{product.description}</p>
            
            <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: '#10b981', fontWeight: '600' }}>
                <ShieldCheck size={20} /> Blockchain Verified Asset
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {product.features.map((f, i) => (
                  <li key={i} style={{ color: '#64748b', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', background: '#cbd5e1', borderRadius: '50%' }}></div> {f}
                  </li>
                ))}
              </ul>
              <button className="detail-btn" style={{ marginTop: '25px', padding: '15px', fontSize: '1rem' }}>Place Bid Now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;
