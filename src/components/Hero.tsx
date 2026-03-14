import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroSections = [
  {
    id: 1,
    headline: "Digital Auctions You Can Trust",
    subheadline: "Participate in government-approved auctions with complete transparency. Every bid is securely recorded and publicly verifiable.",
    cta1: "View Auctions",
    cta2: "Start Bidding",
    image: "/src/assets/hero-image.jpg"
  },
  {
    id: 2,
    headline: "Auctions Open to Every Citizen",
    subheadline: "Access government property auctions from anywhere. Bid in real time and compete fairly with full transparency.",
    cta1: "Browse Auctions",
    cta2: "Register to Bid",
    image: "/src/assets/hero-image1.jpg"
  },
  {
    id: 3,
    headline: "Where Technology Protects Fairness",
    subheadline: "Powered by blockchain technology to guarantee secure bidding, immutable records, and trusted results.",
    cta1: "Learn How It Works",
    cta2: "Explore Auctions",
    image: "/src/assets/hero-image2.webp"
  },
  {
    id: 4,
    headline: "Modernizing Public Auctions",
    subheadline: "A national digital platform transforming enforcement auctions into a secure, transparent, and accessible experience.",
    cta1: "View Opportunities",
    cta2: "Join the Platform",
    image: "/src/assets/hero-image3.avif"
  },
  {
    id: 5,
    headline: "Discover Property Opportunities",
    subheadline: "Buy residential, commercial, and future asset auctions through a trusted digital marketplace.",
    cta1: "View Available Assets",
    cta2: "Start Bidding Today",
    image: "/src/assets/hero-image5.jpg"
  }
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const sections = sectionsRef.current;
    
    let ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: "top top",
          end: () => `+=${(sections.length - 1) * window.innerHeight}`,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.round(progress * (heroSections.length - 1));
            // Use functional state update to avoid dependency on currentIndex
            setCurrentIndex(index);
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []); // Empty dependency array to pre-emptively fix "changed size" crash and prevent recreation

  const activeLabel = heroSections[currentIndex] || heroSections[0];

  return (
    <>
      {/* Hero Text Container - Left Aligned */}
      <div className="text-box-container">
        <div className="content-box">
          <h1 className="hero-headline">{activeLabel.headline}</h1>
          <p className="hero-subheadline">{activeLabel.subheadline}</p>
          <div className="cta-group">
            <button className="btn btn-primary">{activeLabel.cta1}</button>
            <button className="btn btn-outline">{activeLabel.cta2}</button>
          </div>
        </div>
      </div>

      {/* Horizontal Panels */}
      <div className="container" ref={containerRef}>
        {heroSections.map((section, index) => (
          <section 
            key={section.id} 
            className="panel"
            ref={(el) => { if (el) sectionsRef.current[index] = el; }}
          >
            <img src={section.image} alt={section.headline} className="hero-image" />
            <div className="panel-shadow"></div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Hero;
