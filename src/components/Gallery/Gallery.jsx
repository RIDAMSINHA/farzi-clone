import './Gallery.css';

const galleryImages = [
  {
    id: 1,
    url: '/images/Image.png',
  },
  {
    id: 2,
    url: '/images/Image2.png',
  },
  {
    id: 3,
    url: '/images/Image3.png',
  },
  {
    id: 4,
    url: '/images/Image.png',
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
