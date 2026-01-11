import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="section-title">Blending Tradition & Modernity</div>
          <h2>An Indian Restaurant With a Unique Take</h2>
          <p>
            Nestled in the vibrant Haymarket district, Farzi London redefines what
            it means to be an Indian restaurant in London – where innovation meets
            authenticity. From intricately spiced curries to avant-garde
            presentations, every dish blends time-honoured tradition with modern
            flair.
          </p>
          
          <div className="about-buttons">
            <button className="btn-primary">Winter Menus & The Bar</button>
            <button className="btn-outline">Reservations</button>
          </div>
        </div>

        <div className="about-image"></div>
      </div>
    </section>
  );
}

