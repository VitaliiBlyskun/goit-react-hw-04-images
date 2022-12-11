import '../../styles.css';
// import * as basicLightbox from 'basiclightbox';

export default function Modal ({
  hits: { largeImageURL, tags },
}) {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
}

