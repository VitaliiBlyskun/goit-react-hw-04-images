import '../../styles.css';
import PropTypes from 'prop-types'

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

Modal.propTypes = {
  hits: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  })
}

