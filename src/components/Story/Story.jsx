import './Story.css';
import Gallery from '../Gallery/Gallery';

export default function Story() {
  return (
    <section className="story-section">
      <div className="story-container">
        <div className="story-content">
          <div className="section-title">Blending Tradition & Modernity</div>
          <h2>The Farzi Story – Indian Dining with a Twist</h2>
          
          <p>
            Welcome to <strong>Farzi London</strong>, where modern Indian dining meets bold
            creativity right in the heart of the city.
          </p>
          
          <p>
            Just moments from <strong>Piccadilly Circus, Soho, Trafalgar Square</strong>, and <strong>Covent
            Garden</strong>, Farzi brings a fresh take on Indian cuisine to central London.
            Our menu blends time-honoured recipes with global techniques and
            imaginative presentation, offering a dining experience thats as exciting as it
            is flavourful.
          </p>

          <div className="story-buttons">
            <button className="btn-primary">Winter Menus & The Bar</button>
            <button className="btn-primary">Reservations</button>
          </div>
        </div>

        <div className="story-image"></div>
      </div>

      <div className="story-gallery">
        <Gallery />
      </div>
    </section>
  );
}
