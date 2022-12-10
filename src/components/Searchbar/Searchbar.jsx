import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles.css'



export default class Searchbar extends Component {
  state = {
    areaName: '',
  };

  handleNameChange = event => {
    this.setState({ areaName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if(this.state.areaName.trim() === '') {        
        return toast.error('input something', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      
    }

    this.props.onSubmit(this.state.areaName);
    this.setState({ areaName: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"

            name="query"

            value={this.state.areaName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

