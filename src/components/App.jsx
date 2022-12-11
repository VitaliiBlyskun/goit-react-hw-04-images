import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import fetchApi from './services/api';
import '../styles.css';

export class App extends Component {
  state = {
    gallery: '',
    page: 1,
    items: [],

    error: null,
    status: 'idle',
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
      items: [],
    });
  };

  componentDidUpdate = (_, prevState) => {
    const prevName = prevState.gallery;
    const nextName = this.state.gallery;
    if (prevName !== nextName) {
      console.log('prevName:', prevName);
      console.log('nextName:', nextName);
      console.log('Змінили імя галереї');

      // fetchApi(nextName).then(console.log);

      this.setState({ gallery: '',  status: 'pending' });
      fetchApi(nextName)
        .then(gallery =>
          this.setState({ gallery, status: 'resolved' })
        )
        .catch(error => this.setState({ error, status: 'rejected' }))
    }
  };

  render() {
    const { gallery, error, status } = this.state;
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
        {status === 'idle' && <div>Enter a picture name</div>}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h1>{error.message}</h1>}
        {status === 'resolved' && <ImageGallery gallery={gallery} />}

        <Button onClick={this.loadMore} />
        <ToastContainer />
      </>
    );
  }
}

////////////////////////////////////////////////////////////////////////////

// import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../styles.css';
// import Button from './Button/Button';
// import Searchbar from './Searchbar/Searchbar';
// import FethInfo from './services/fetchInfo';

// export class App extends Component {
//   // state = {
//   //   galleryName: '',
//   // };

//   // handleFormSubmit = galleryName => {
//   //   this.setState({ galleryName: galleryName});
//   // };

//   state = {
//     galleryName: '',
//     page: 1,
//     items: [],
//     ///////////////////////////////////////////////////////
//     // per_page: 12,
//     // total: null,
//     ///////////////////////////////////////////////////////
//   };

//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   handleFormSubmit = galleryName => {
//     this.setState({
//       galleryName: galleryName,
//       page: 1,
//       items: [],
//     });
//   };

//   componentDidUpdate(_, prevState) {
//     // console.log("prevState.page: ", prevState.page);
//     // console.log("this.state.page: ", this.state.page);

//     // console.log("prevState.galleryName: ", prevState.galleryName);
//     // console.log("this.state.galleryName: ", this.state.galleryName);

//     const { galleryName, page, items, total } = this.state;

//     if (prevState.page !== page || prevState.galleryName !== galleryName) {
//       console.log('Fetch data');

//       //////////////////////////////////////////////////////
//       // this.setState(prevState => ({
//       //   items: [...prevState.items, ...items],
//       //   per_page: 12,
//       //   total,
//       // }));
//       //////////////////////////////////////////////////////////
//     }
//   }

//   render() {
//     ////////////////////////////////////////////////////////////
//     // const { galleryName, page, items, per_page, total } = this.state;
//     // const pageNumber = Math.ceil(total / per_page);

//     /////////////////////////////////////////////////////////////

//     return (
//       <div>
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

//         <FethInfo galleryName={this.state.galleryName} />

//         <Button onClick={this.loadMore}/>
//         <ToastContainer />
//       </div>
//     );
//   }
// }
