import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import '../../styles.css';

{/* <ul class="gallery">
  <!-- Набір <li> із зображеннями -->
</ul> */}

export default function ImageGallery({ gallery: { hits } }) {
  return (
    <ul className="ImageGallery">
      {hits.map(hit => (
      <li key={hit.id} className="gallery-item">
        <img src={hit.webformatURL} className="ImageGalleryItem-image" alt={hit.tags}/>
      </li>
      ))}
    </ul>
  );
}


// export default function ImageGallery({ gallery: { hits } }) {
//   return (
//     <ul className="ImageGallery">
//       {hits.map(hit => (
//         <ImageGalleryItem key={hit.id} hits={hit} tags={hit.tags} />
//       ))}
//     </ul>
//   );
// }
