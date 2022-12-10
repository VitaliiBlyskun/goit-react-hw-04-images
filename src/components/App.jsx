import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles.css';
import FetchInfo from './FetchInfo';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  // state = {
  //   galleryName: '',
  // };

    // handleFormSubmit = galleryName => {
  //   this.setState({ galleryName: galleryName});
  // };

  state = {
    galleryName: '',
    page: 1,
    items: [],
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }
  

  handleFormSubmit = galleryName => {
    this.setState({
      page: 1,
      galleryName: galleryName,
      items: [],
    })
  };

  componentDidUpdate(_, prevState) {
    // console.log("prevState.page: ", prevState.page);
    // console.log("this.state.page: ", this.state.page);

    // console.log("prevState.galleryName: ", prevState.galleryName);
    // console.log("this.state.galleryName: ", this.state.galleryName);
    
    if(prevState.page !== this.state.page || prevState.galleryName !== this.state.galleryName) {
      console.log("Fetch data");
    }
  }

  render() {
    return (
      <div>
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

        <FetchInfo galleryName={this.state.galleryName} />
        <button onClick={this.loadMore} className="Button">Load more</button>
        <ToastContainer />
      </div>
    );
  }
}

////////////////////////////////////////////////////////////////////

// import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import Searchbar from './Searchbar/Searchbar';

// export class App extends Component {
//   state = {
//     galleryName: '',
//     gallery: null,
//   };

//   // componentDidMount() {
//   //   fetch(`https://pixabay.com/api/?q=cat&page=1&key=30520584-c0fa81cb9ba3feeaa4712e503&image_type=photo&orientation=horizontal&per_page=12`)
//   //   .then(result => result.json())
//   //   .then(gallery => this.setState( {gallery: gallery} ))
//   // }

//   componentDidMount() {
//     fetch(`https://pixabay.com/api/?q=cat&page=1&key=30520584-c0fa81cb9ba3feeaa4712e503&image_type=photo&orientation=horizontal&per_page=12`)
//     .then(result => result.json())
//     .then(gallery => this.setState( {gallery: gallery} ))
//   }

//   handleFormSubmit = galleryName => {
//     this.setState({ galleryName });
//     // console.log(galleryName);
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if(prevProps.galleryName !== this.state.galleryName) {
//       // console.log("change galleryName")
//       // console.log("prevProps.galleryName", prevProps.galleryName)
//       // console.log("this.state.galleryName", this.state.galleryName)

//       fetch( `https://pixabay.com/api/?q=${this.state.galleryName}&page=1&key=30520584-c0fa81cb9ba3feeaa4712e503&image_type=photo&orientation=horizontal&per_page=12`)
//       .then(res => res.json())
//       .then(gallery => this.setState({ gallery: gallery}))
//     }
//   }

//   render() {
//     return (
//       <div>
// <ToastContainer
//   position="top-right"
//   autoClose={5000}
//   hideProgressBar={false}
//   newestOnTop={false}
//   closeOnClick
//   rtl={false}
//   pauseOnFocusLoss
//   draggable
//   pauseOnHover
//   theme="dark"
// />
// <ToastContainer />
//         <Searchbar onSubmit={this.handleFormSubmit} />

//         <div>
//           <h1>Gallery</h1>
//           {!this.state.galleryName && <div>Уведіть дашо</div>}
//         </div>

//         {/* {this.state.gallery && <div>{this.state.gallery.hits[1].id}</div>} */}
//       </div>
//     );
//   }
// };
