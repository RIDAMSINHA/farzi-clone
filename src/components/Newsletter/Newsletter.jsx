import './Newsletter.css';

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-inner">
        <div className="newsletter-kicker">Subscribe Now</div>
        <h2>Be on the list.</h2>
        <p>
          Subscribe to our mailing list for thoughtfully curated updates on seasonal menus,
          culinary events, and exclusive experiences. Let us keep you informed about
          whats next at Farzi.
        </p>

        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button className="btn-primary">Subscribe</button>
        </div>

        <small>
          By subscribing, you agree to receive emails from us. You can unsubscribe at any time.
        </small>
      </div>
    </section>
  );
}
