import './Hero.css';


export default function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline aria-hidden="true">
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="logo-mark">F</div>
        <div className="hero-content">
          <h1>
            <span>Farzi London – Modern Indian</span>
            <span>Restaurant</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
