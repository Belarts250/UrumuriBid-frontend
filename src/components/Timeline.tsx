import React from 'react';

const timelineData = [
  {
    year: '2012',
    text: 'Empowering fair and transparent online auctions with a modern platform designed for accessibility, trust, and efficiency'
  },
  {
    year: '2014',
    text: 'Bringing transparency to Cyamunara through a secure digital platform that ensures fair, open, and accessible bidding for all.'
  },
  {
    year: '2015',
    text: 'A modern auction system focused on trust, transparency, and accessibility, transforming traditional bidding into a seamless digital experience.'
  },
  {
    year: '2013',
    text: 'A transparent digital auction platform modernizing Cyamunara into a secure, accessible, and user-friendly online experience'
  }
];

const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <div className="timeline-container">
        <div className="timeline-header">
          <div className="timeline-line-decoration"></div>
          <h2>EXPERIENCE</h2>
          <p className="subtitle">Building trust through transparency in every auction.</p>
        </div>

        <div className="diagonal-timeline">
          <div className="main-diagonal-line"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item item-${index}`}>
              <div className="timeline-content">
                <span className="year">{item.year}</span>
                <p className="description">{item.text}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}

          {/* <div className="timeline-footer-text">
            <h2>EXAMPLE</h2>
            <p>
              Keynote for Mac makes it simple to create and deliver beautiful presentations. 
              Updated for OS X El Capitan, Keynote employs powerful tools and dazzling 
              effects that bring your ideas to life. You can work seamlessly between Mac and iOS devices.
            </p>
          </div> */}
          
          {/* <div className="triangle-decoration"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
