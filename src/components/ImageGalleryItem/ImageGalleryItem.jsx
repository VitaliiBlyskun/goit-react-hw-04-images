// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
import '../../index.css';

export default function ImageGalleryItem({hits: {id, webformatURL, largeImageURL, tags }}) {
  return (
      <li key={id} className="gallery-item">
        <img src={webformatURL} className="ImageGalleryItem-image" alt={tags}/>
      </li>
  );
} 


