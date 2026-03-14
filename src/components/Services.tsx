import { Activity, ShieldCheck, Check } from 'lucide-react';

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-bg-pattern"></div>
      
      {/* Services Header */}
      <div className="services-header">
        <h2>Our Professional <span>Solutions</span></h2>
        <p>We provide a national digital platform transforming enforcement auctions into a secure, transparent, and accessible experience for every citizen.</p>
      </div>

      {/* Service Icons Row */}
      <div className="services-icons">
        <div className="service-icon-item">
          <div className="icon-wrapper">
            <Check size={32} />
          </div>
          <h3>Reter Repale</h3>
          <p>Complete transparency in every transaction, ensuring government-approved standards are met.</p>
        </div>
        <div className="service-icon-item">
          <div className="icon-wrapper">
            <Activity size={32} />
          </div>
          <h3>Leak Detection</h3>
          <p>Advanced monitoring and security to protect your bids and guarantee immutable records.</p>
        </div>
        <div className="service-icon-item">
          <div className="icon-wrapper">
            <ShieldCheck size={32} />
          </div>
          <h3>Installation</h3>
          <p>Powered by blockchain technology to guarantee secure bidding and trusted results.</p>
        </div>
      </div>

      {/* Feature Block 1: Left Image, Right Text */}
      <div className="feature-block">
        <div className="feature-image-wrapper">
          <img src="/src/assets/hero-imag4.jpg" alt="Service Van" className="feature-image" />
        </div>
        <div className="feature-content">
          <h2>Get Yours <span>Brigites</span></h2>
          <p>Transforming enforcement auctions into a secure, transparent, and accessible experience for all stakeholders involved in the process.</p>
          <ul className="check-list">
            <li className="check-item"><div className="dot"></div> Government-approved security protocols</li>
            <li className="check-item"><div className="dot"></div> Real-time bidding from anywhere</li>
            <li className="check-item"><div className="dot"></div> Publicly verifiable results</li>
            <li className="check-item"><div className="dot"></div> Secure document handling</li>
          </ul>
          <div style={{ marginTop: '30px' }}>
             <a href="#" className="link-btn">Learn More About This</a>
          </div>
        </div>
      </div>

      {/* Feature Block 2: Right Image, Left Text */}
      <div className="feature-block reverse">
        <div className="feature-image-wrapper">
          <img src="/src/assets/hero-image6.jpg" alt="Service Asset" className="feature-image" />
        </div>
        <div className="feature-content">
          <h2>Brand Your <span>Repur Doors</span></h2>
          <p>A trusted digital marketplace for residential, commercial, and future asset auctions. Experience the future of public auctions today.</p>
          <ul className="check-list">
            <li className="check-item"><div className="dot"></div> Modern enforcement technologies</li>
            <li className="check-item"><div className="dot"></div> Comprehensive asset management</li>
            <li className="check-item"><div className="dot"></div> National digital platform access</li>
            <li className="check-item"><div className="dot"></div> Trusted result guarantees</li>
          </ul>
          <div style={{ marginTop: '30px' }}>
             <a href="#" className="link-btn">Explore Opportunities</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
