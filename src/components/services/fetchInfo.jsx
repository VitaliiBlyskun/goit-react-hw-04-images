import { Component } from 'react';
import '../../index.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';


export default class FethInfo extends Component {
  state = {
    gallery: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.galleryName !== this.props.galleryName) {
      console.log('prevProps.galleryName', prevProps.galleryName);
      console.log('this.props.galleryName', this.props.galleryName);
      console.log('Змінилося імя картинки');
      

      this.setState({ status: 'pending', gallery: null });
      fetch(
        `https://pixabay.com/api/?q=${this.props.galleryName}&page=1&key=30520584-c0fa81cb9ba3feeaa4712e503&image_type=photo&orientation=horizontal&per_page=12`

      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Нема картинки з назвою ${this.props.galleryName}`)
          );
        })
        .then(gallery =>
          this.setState({ gallery: gallery, status: 'resolved' })
        )
        .catch(error => this.setState({ error: error, status: 'rejected' }));
    }
  }

  render() {
    const { gallery, error, status } = this.state;

    if (status === 'idle') {
      return <div>Уведіть імя картинки</div>;
    }

    if (status === 'pending') {
      // return <p>Загружаємо....</p>;
      return <Loader />
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return <ImageGallery gallery={gallery}/>      
    }
  }
}









///////////////////////////////////////////////////////////////////////////

// `https://pixabay.com/api/?q=${this.props.galleryName}&page=1&key=30520584-c0fa81cb9ba3feeaa4712e503&image_type=photo&orientation=horizontal&per_page=12`

// import axios from "axios"

// const API_KEY = `30520584-c0fa81cb9ba3feeaa4712e503`
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// export const getImages = async (query, page) => {
//   const response = await axios.get(`q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
//   return response
// }

