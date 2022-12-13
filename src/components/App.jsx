// import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// // import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Button from './Button/Button';
// import Loader from './Loader/Loader';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Searchbar from './Searchbar/Searchbar';
// import fetchApi from './services/api';
// import '../styles.css';

// export class App extends Component {
//   state = {
//     gallery: '',
//     page: 1,
//     items: [],
//     totalPages: null,
//     error: null,
//     status: 'idle',
//   };

//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   handleFormSubmit = gallery => {
//     this.setState({
//       gallery,
//       page: 1,
//       items: [],
//     });
//   };

//   componentDidUpdate = (_, prevState) => {
//     const prevName = prevState.gallery;
//     const nextName = this.state.gallery;
//     const prevPage = prevState.prevPage;
//     const nextPage = this.state.prevPage;
//     if (prevName !== nextName || prevPage !== nextPage) {
//       console.log('prevName:', prevName);
//       console.log('nextName:', nextName);
//       console.log('Змінили імя галереї');

//       // fetchApi(nextName).then(console.log);

//      this.setState({ gallery: '',  status: 'pending' });
//       fetchApi(nextName)
//         .then(gallery =>
//           this.setState({ items: gallery, status: 'resolved' })
//         )
//         .catch(error => this.setState({ error, status: 'rejected' }))
//     }
//   };

//   render() {
//     const { gallery, error, status, items } = this.state;
//     return (
//       <>
//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="dark"
//         />
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         {status === 'idle' && <div>Enter a picture name</div>}
//         {status === 'pending' && <Loader />}
//         {status === 'rejected' && <h1>{error.message}</h1>}
//         {status === 'resolved' && <ImageGallery gallery={items} />}

//         <Button onClick={this.loadMore} />
//         <ToastContainer />
//       </>
//     );
//   }
// }




//////////////////////////////////////////////////////////////////////////////////


//!!! На додатовому занятті

import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import * as getService from './services/api';
import '../styles.css';


export class App extends Component {
  state = {
    gallery: '',
    hits: [],
    page: 1,
    error: null,
    per_page: 12,
    total: null,
    loading: false,
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = gallery => {
    this.setState({
      gallery,
      page: 1,
      hits: [],
    });
  };

  componentDidUpdate = (_, prevState) => {
    const { gallery, page } = this.state;
    if (prevState.gallery !== gallery || prevState.page !== page) {
      this.setState({ loading: true });
      this.getPhotos( gallery, page )
    }
  };

  getPhotos = async ( gallery, page ) => {
      try {
        const { hits, total, } = await getService.getImages(gallery, page);
        // const photos = await getService.getImages(gallery, page);
        // console.log(photos);
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
          per_page: 12,
          total,
        })
        )
      } catch (error) {
        this.setState({
          error: error.message,
      })
      }
      this.setState({ loading: false });
  }


  render() {
    const { hits, page, per_page, total, loading, error  } = this.state;
    const pageAmount = Math.ceil(total / per_page)
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
        {error && toast.info(
            "No photo with such request."
          )}
        <ImageGallery hits={hits}/>
        {hits.length > 0 && pageAmount > page && <Button onClick={this.loadMore} />}
        <ToastContainer />
      </>
    );
  }
}




