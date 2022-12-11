import '../../styles.css';

export default function Button ({ onClick }) {
    return (
        <div>
         <button onClick={onClick} className="Button" type='button'>
          Load more
        </button>
        </div>
    )
}