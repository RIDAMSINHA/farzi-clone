import './PrivateHire.css';

export default function PrivateHire() {
  return (
    <section className="private-hire-section">
      <div className="private-hire-container">
        <div className="private-hire-image"></div>

        <div className="private-hire-content">
          <div className="section-title">Private Hire</div>
          <h2>Impress With A Private Booking At Farzi</h2>
          <p>
            Whether its a romantic rendezvous, a celebratory gathering, or a
            confidential business meeting, Farzi offers an intimate setting where
            every detail is meticulously crafted to impress.
          </p>
          <button className="btn-primary">Private Hire</button>
        </div>
      </div>
    </section>
  );
}
