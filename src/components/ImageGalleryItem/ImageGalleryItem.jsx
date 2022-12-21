import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ImageGalleryItem = ( {hits} ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { id, webformatURL, largeImageURL, tags } = hits

  return (
    <>
      <li key={id} className="gallery-item">
        <img
          src={webformatURL}
          className="ImageGalleryItem-image"
          alt={tags}
          onClick={toggleModal}
        />
      </li>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        style={modalStyles}
      >
        <button onClick={toggleModal}>Close</button>
        <img src={largeImageURL} alt={tags} />
      </Modal>
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.string.isRequired,
};

