import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage0 from "../assets/hero-image.jpg";
import heroImage1 from "../assets/hero-image1.jpg";
import heroImage2 from "../assets/hero-image2.webp";
import heroImage3 from "../assets/hero-image3.avif";
import heroImage5 from "../assets/hero-image5.jpg";

gsap.registerPlugin(ScrollTrigger);

const heroSections = [
  {
    id: 1,
    headline: "Digital Auctions You Can Trust",
    subheadline: "Participate in government-approved auctions with complete transparency. Every bid is securely recorded and publicly verifiable.",
    cta1: "View Auctions",
    cta2: "Start Bidding",
    image: heroImage0
  },
  {
    id: 2,
    headline: "Auctions Open to Every Citizen",
    subheadline: "Access government property auctions from anywhere. Bid in real time and compete fairly with full transparency.",
    cta1: "Browse Auctions",
    cta2: "Register to Bid",
    image: heroImage1
  },
  {
    id: 3,
    headline: "Where Technology Protects Fairness",
    subheadline: "Powered by blockchain technology to guarantee secure bidding, immutable records, and trusted results.",
    cta1: "Learn How It Works",
    cta2: "Explore Auctions",
    image: heroImage2
  },
  {
    id: 4,
    headline: "Modernizing Public Auctions",
    subheadline: "A national digital platform transforming enforcement auctions into a secure, transparent, and accessible experience.",
    cta1: "View Opportunities",
    cta2: "Join the Platform",
    image: heroImage3
  },
  {
    id: 5,
    headline: "Discover Property Opportunities",
    subheadline: "Buy residential, commercial, and future asset auctions through a trusted digital marketplace.",
    cta1: "View Available Assets",
    cta2: "Start Bidding Today",
    image: heroImage5
  }
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

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
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []); 

  return (
    <div className="container" ref={containerRef}>
      {heroSections.map((section, index) => (
        <section 
          key={section.id} 
          className="panel"
          ref={(el) => { if (el) sectionsRef.current[index] = el; }}
        >
          <img src={section.image} alt={section.headline} className="hero-image" />
          <div className="panel-shadow"></div>
          
          <div className="text-box-container">
            <div className="content-box">
              <h1 className="hero-headline">{section.headline}</h1>
              <p className="hero-subheadline">{section.subheadline}</p>
              <div className="cta-group">
                <button className="btn btn-primary">{section.cta1}</button>
                <button className="btn btn-outline">{section.cta2}</button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Hero;
