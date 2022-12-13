import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types'
import '../../styles.css';



export default function ImageGallery({ hits }) {
  return (
    <ul className="ImageGallery">
      {hits.map(hit => (
        <ImageGalleryItem key={hit.id} hits={hit} tags={hit.tags} />
      ))}
    </ul>
  );
}


ImageGallery.propTypes = {
    hits: PropTypes.array,
}

