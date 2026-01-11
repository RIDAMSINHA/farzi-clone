import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>Farzi London</h3>
          <p>8 Haymarket, London, SW1Y 4BP</p>
          <p>020 3981 0090</p>
          <p className="status">
            <span className="dot" aria-hidden="true" /> Open Now <span className="muted">until 10:45 pm</span>
          </p>
          <ul className="hours">
            <li><strong>Mon:</strong> Closed</li>
            <li><strong>Tue:</strong> 12pm - 2.45pm, 4.30pm - 9.30pm</li>
            <li><strong>Wed - Thu:</strong> 12pm - 2.45pm, 4.30pm - 10pm</li>
            <li><strong>Fri - Sat:</strong> 12pm - 10.45pm</li>
            <li><strong>Sun:</strong> 12pm - 3.45pm, 5.15pm - 9.30pm</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Farzi @ Boxhall</h3>
          <p>11, The Arcade, Liverpool St, London EC2M 7PN</p>
          <p className="status">
            <span className="dot" aria-hidden="true" /> Open Now <span className="muted">until 9:00 pm</span>
          </p>
          <ul className="hours">
            <li><strong>Mon - Tue:</strong> 11am - 8pm</li>
            <li><strong>Wed - Sat:</strong> 11am - 9pm</li>
            <li><strong>Sun:</strong> 11am - 8pm</li>
          </ul>
        </div>

        <div className="footer-links">
          <a>Whats On</a>
          <a>Bottomless - Sunday Brunch</a>
          <a>Group Dining</a>
          <a>Theatre Menu</a>
          <a>Lunch Thali Menu</a>
          <a>Menus & The Bar</a>
          <a>Farzi @ Boxhall</a>
          <a>Reservations</a>
          <a>Delivery</a>
          <a>Philosophy</a>
          <a>Contact</a>
        

      <div className="footer-bottom">
        <button className="btn-outline">Gift Vouchers</button>
        <div className="footer-legal">
          <a>Privacy Policy</a>
          <a>Terms & Conditions</a>
        </div>
      </div>
      </div>
      </div>
    </footer>
  );
}
