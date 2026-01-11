import './Destinations.css';

export default function Destinations() {
  return (
    <section className="destinations" id="locations">
      <div className="destinations-container">
        <div className="destinations-content">
          <div className="section-title">Farzi Destinations</div>
          <h2>Two Destinations. One Legacy.</h2>
          <p>
            Rooted in the vision of legendary gastronome Jiggs Kalra, Farzi is a modern
            Indian restaurant in London, bringing its signature pan-Indian innovation
            to two distinctive city locations.
          </p>

          <div className="destination-item">
            <h3>Farzi London – Haymarket</h3>
            <p>
              Just steps from Piccadilly Circus, our flagship Indian restaurant in
              London offers an immersive dining experience where tradition meets
              theatre.
            </p>
          </div>

          <div className="destination-item">
            <h3>Farzi @ Boxhall</h3>
            <p>
              In the vibrant energy of Londons riverside Boxhall, Farzi finds a
              second home. The same bold Indian flavours, reinterpreted in a lively,
              modern setting.
            </p>
          </div>

          <div className="destination-buttons">
            <button className="btn-primary">Farzi - Haymarket Menus</button>
            <button className="btn-primary">Discover Farzi @ Boxhall</button>
          </div>
        </div>

        <div className="destinations-image"></div>
      </div>
    </section>
  );
}
