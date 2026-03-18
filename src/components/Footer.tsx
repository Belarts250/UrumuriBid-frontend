import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Branding & Mission */}
        <div className="footer-column">
          <div className="footer-logo">UrumuriBid</div>
          <p>The leading national digital platform for secure, transparent, and accessible government auctions. Modernizing public enforcement through technology.</p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">Active Auctions</a></li>
            <li><a href="#">Register to Bid</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Service Centers</a></li>
          </ul>
        </div>

        {/* Platform Icons (Mockup based on reference) */}
        <div className="footer-column">
          <h4>Our Platform</h4>
          <ul className="footer-links">
            <li><a href="#">Blockchain Verification</a></li>
            <li><a href="#">Asset Management</a></li>
            <li><a href="#">Public Records</a></li>
            <li><a href="#">Citizen Portal</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul className="footer-links">
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Mail size={16} /> info@urumuribid.rw
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Phone size={16} /> +250 788 000 000
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <MapPin size={16} /> Kigali, Rwanda
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} UrumuriBid. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#" className="link-btn" style={{ fontSize: '0.85rem' }}>Privacy Policy</a>
          <a href="#" className="link-btn" style={{ fontSize: '0.85rem' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
