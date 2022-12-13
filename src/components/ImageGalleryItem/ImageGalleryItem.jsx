import { Component } from 'react';
import PropTypes from 'prop-types'
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


export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  }

  toggleModal = () => {
    this.setState((prevState) => ({isModalOpen: !prevState.isModalOpen}))
  }

  render () {
    const {isModalOpen } = this.state;
    const {
      hits: {id, webformatURL, largeImageURL, tags }
    } = this.props;


    return (
      <>
        <li key={id} className="gallery-item">
          <img src={webformatURL} className="ImageGalleryItem-image" alt={tags} onClick={this.toggleModal} />
        </li>
  
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.toggleModal}
          style={modalStyles}
        >
          <button onClick={this.toggleModal}>Close</button>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      </>
    );
  }
}


ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.string.isRequired,
}
