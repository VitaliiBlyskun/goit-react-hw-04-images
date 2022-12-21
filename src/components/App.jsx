import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import * as getService from './services/api';
import '../styles.css';

export const App = () => {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [per_page, setPer_page] = useState(12);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = query => {
    setQuery( query );
    setPage(1);
    setHits([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getPhotos() {
        try {
            setLoading(true);
            const { hits, total } = await getService.getImages(query, page);
              setHits(prevImages => [...prevImages, ...hits]);
              setPer_page(12);
              setTotal(total);
        } catch (error) {
              setError(error.message);
        } finally {
              setLoading(false);
        }
    }
    getPhotos()
  }, [query, page]);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const pageAmount = Math.ceil(total / per_page);
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
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {error && toast.info('No photo with such request.')}
      <ImageGallery hits={hits} />
      {hits.length > 0 && pageAmount > page && <Button onClick={loadMore} />}
      <ToastContainer />
    </>
  );
};

