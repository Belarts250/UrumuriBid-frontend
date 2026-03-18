import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get in <span>Touch</span></h2>
          <p>Have questions about our auction platform? Our team is here to help you navigate your journey.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <h3>Our Location</h3>
                <p>Kigali, Rwanda</p>
                <p>KN 3 Rd, City Center</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div className="info-text">
                <h3>Call Us</h3>
                <p>+250 788 000 000</p>
                <p>Mon - Fri, 8am - 5pm</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <h3>Email Support</h3>
                <p>info@urumuribid.rw</p>
                <p>support@urumuribid.rw</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="How can we help?" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows={5} placeholder="Tell us more about your inquiry..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
